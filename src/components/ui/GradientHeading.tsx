import React from 'react';

interface GradientHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientHeading({
  as: Component = 'h2',
  children,
  className = '',
  gradient
}: GradientHeadingProps) {
  const gradientClasses = gradient 
    ? `bg-gradient-to-r ${gradient}` 
    : 'bg-gradient-to-r from-emerald-400 via-cyan-300 via-purple-400 via-pink-400 to-emerald-400';

  return (
    <Component 
      className={`
        ${gradientClasses}
        animate-gradient bg-clip-text text-transparent
        transition-colors duration-300 ease-in-out
        hover:from-emerald-300 hover:via-purple-300 hover:to-emerald-300
        cursor-default select-none
        ${className}
      `}
    >
      {children}
    </Component>
  );
}