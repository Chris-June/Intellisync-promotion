import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimationType = 
  | 'fade' 
  | 'slide' 
  | 'scale' 
  | 'rotate' 
  | 'none';

interface GradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  colors?: {
    from?: string;
    via?: string;
    to?: string;
  };
  animation?: AnimationType;
  animationVariants?: Variants;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const defaultAnimationVariants: Record<AnimationType, Variants> = {
  none: {},
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slide: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  },
  scale: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 }
  },
  rotate: {
    initial: { rotate: -10, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 10, opacity: 0 }
  }
};

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  className,
  colors = { from: 'from-blue-500', via: 'via-purple-500', to: 'to-pink-500' },
  animation = 'none',
  animationVariants,
  onClick
}) => {
  const variants = animationVariants ?? defaultAnimationVariants[animation];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick(e);
      }} 
      className={cn(
        'w-full h-full bg-gradient-to-r',
        colors.from,
        colors.via,
        colors.to,
        'absolute inset-0 bg-gray-900/95',
        className
      )}
    >
      {children}
    </motion.div>
  );
};