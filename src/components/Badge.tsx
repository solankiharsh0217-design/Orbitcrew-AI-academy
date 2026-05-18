import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'premium';
  className?: string;
  animate?: boolean;
}

export const Badge = ({
  children,
  variant = 'default',
  className,
  animate = false,
}: BadgeProps) => {
  const variantClass = variant === 'default' ? 'badge' : `badge badge-${variant}`;

  return (
    <span
      className={cn(
        variantClass,
        animate && 'animate-pulse',
        className
      )}
    >
      {children}
    </span>
  );
};