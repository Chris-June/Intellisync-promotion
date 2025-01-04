'use client';
import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  TargetAndTransition,
  Transition,
  Variant,
  Variants,
 
} from 'framer-motion';
import React from 'react';

type PresetType = 'blur' | 'fade-in-blur' | 'scale' | 'fade' | 'slide';

type PerType = 'word' | 'char' | 'line';

type TextEffectProps = {
  children: string;
  per?: PerType;
  as?: keyof React.JSX.IntrinsicElements;
  variants?: {
    container?: ExtendedVariants;
    item?: ExtendedVariants;
  };
  className?: string;
  preset?: PresetType;
  delay?: number;
  speedReveal?: number;
  speedSegment?: number;
  trigger?: boolean;
  loop?: boolean;
  onAnimationComplete?: () => void;
  onAnimationStart?: () => void;
  segmentWrapperClassName?: string;
  containerTransition?: Transition;
  segmentTransition?: Transition;
  style?: React.CSSProperties;
};

const defaultStaggerTimes: Record<PerType, number> = {
  char: 0.03,
  word: 0.05,
  line: 0.1,
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const presetVariants: Record<
  PresetType,
  { container: ExtendedVariants; item: ExtendedVariants }
> = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(12px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, filter: 'blur(12px)' },
    },
  },
  'fade-in-blur': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      exit: { opacity: 0, y: 20, filter: 'blur(12px)' },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
  },
};

type ExtendedVariant = Variant & {
  transition?: Transition;
};

type ExtendedTargetAndTransition = TargetAndTransition & {
  transition?: Transition;
};

type ExtendedVariants = {
  [key: string]: ExtendedVariant | ExtendedTargetAndTransition;
};

const hasTransition = (
  variant: ExtendedVariant | ExtendedTargetAndTransition | undefined
): variant is ExtendedVariant | ExtendedTargetAndTransition => {
  return (
    variant !== undefined &&
    typeof variant === 'object' && 
    variant !== null && 
    'transition' in variant &&
    typeof variant.transition === 'object'
  );
};

const createVariantsWithTransition = (
  baseVariants: ExtendedVariants,
  transition?: Transition & { exit?: Transition }
): ExtendedVariants => {
  if (!transition) return baseVariants;

  return {
    ...baseVariants,
    visible: {
      ...(baseVariants.visible || {}),
      transition: {
        ...(hasTransition(baseVariants.visible)
          ? baseVariants.visible.transition
          : {}),
        ...transition,
      },
    },
    exit: {
      ...(baseVariants.exit || {}),
      transition: {
        ...(hasTransition(baseVariants.exit)
          ? baseVariants.exit.transition
          : {}),
        ...transition,
        staggerDirection: -1,
      },
    },
  };
};

const AnimationComponent: React.FC<{
  segment: string;
  variants: ExtendedVariants;
  per: 'line' | 'word' | 'char';
  segmentWrapperClassName?: string;
}> = React.memo(({ segment, variants, per, segmentWrapperClassName }) => {
  const content =
    per === 'line' ? (
      <motion.span variants={variants} className='block'>
        {segment}
      </motion.span>
    ) : per === 'word' ? (
      <motion.span
        aria-hidden='true'
        variants={variants}
        className='inline-block whitespace-pre'
      >
        {segment}
      </motion.span>
    ) : (
      <motion.span className='inline-block whitespace-pre'>
        {segment.split('').map((char, charIndex) => (
          <motion.span
            key={`char-${charIndex}`}
            aria-hidden='true'
            variants={variants}
            className='inline-block whitespace-pre'
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );

  if (!segmentWrapperClassName) {
    return content;
  }

  const defaultWrapperClassName = per === 'line' ? 'block' : 'inline-block';

  return (
    <span className={cn(defaultWrapperClassName, segmentWrapperClassName)}>
      {content}
    </span>
  );
});

AnimationComponent.displayName = 'AnimationComponent';

const splitText = (text: string, per: 'line' | 'word' | 'char') => {
  if (per === 'line') return text.split('\n');
  if (per === 'char') return text.split('');
  return text.split(/(\s+)/);
};

export function TextEffect({
  children,
  per = 'word',
  as = 'p',
  variants,
  className,
  preset = 'fade',
  delay = 0,
  speedReveal = 1,
  speedSegment = 1,
  trigger = true,
  loop,
  onAnimationComplete,
  onAnimationStart,
  segmentWrapperClassName,
  containerTransition,
  segmentTransition,
  style,
}: TextEffectProps) {
  const segments = splitText(children, per);
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  const baseVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };

  const stagger = defaultStaggerTimes[per] / speedReveal;

  const baseDuration = 0.3 / speedSegment;

  const customStagger = hasTransition(variants?.container?.visible ?? {})
    ? (variants?.container?.visible as ExtendedTargetAndTransition & { transition?: Transition }).transition
        ?.staggerChildren
    : undefined;

  const customDelay = hasTransition(variants?.container?.visible ?? {})
    ? (variants?.container?.visible as ExtendedTargetAndTransition & { transition?: Transition }).transition
        ?.delayChildren
    : undefined;

  const computedVariants = {
    container: createVariantsWithTransition(
      variants?.container || baseVariants.container,
      {
        staggerChildren: customStagger ?? stagger,
        delayChildren: customDelay ?? delay,
        ...containerTransition,
        exit: {
          staggerChildren: customStagger ?? stagger,
          staggerDirection: -1,
        },
      }
    ),
    item: createVariantsWithTransition(variants?.item || baseVariants.item, {
      duration: baseDuration,
      ...segmentTransition,
    }),
  };

  return (
    <AnimatePresence mode='popLayout'>
      {trigger && (
        <MotionTag
          initial='hidden'
          animate='visible'
          exit='exit'
          aria-label={per === 'line' ? undefined : children}
          variants={computedVariants.container}
          className={cn('whitespace-pre-wrap', className)}
          onAnimationComplete={onAnimationComplete}
          onAnimationStart={onAnimationStart}
          style={style}
          {...(loop
            ? {
                transition: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  ...computedVariants.container.visible.transition,
                },
              }
            : {})}
        >
          {segments.map((segment, index) => (
            <AnimationComponent
              key={`${per}-${index}-${segment}`}
              segment={segment}
              variants={computedVariants.item}
              per={per}
              segmentWrapperClassName={segmentWrapperClassName}
            />
          ))}
        </MotionTag>
      )}
    </AnimatePresence>
  );
}