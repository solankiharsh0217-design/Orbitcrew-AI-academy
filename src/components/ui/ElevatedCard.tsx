import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  variant?: 'standard' | 'featured' | 'minimal' | 'overlay';
  className?: string;
}

export const Card = ({ children, variant = 'standard', className }: CardProps) => {
  const baseClass = variant === 'standard' ? 'card' : `card card-${variant}`;

  return (
    <div className={cn(baseClass, className)}>
      {children}
    </div>
  );
};

interface CardSectionProps {
  children: ReactNode;
  className?: string;
}

Card.Header = ({ children, className }: CardSectionProps) => (
  <div className={cn('card-header', className)}>
    {children}
  </div>
);

Card.Body = ({ children, className }: CardSectionProps) => (
  <div className={cn('card-body', className)}>
    {children}
  </div>
);

Card.Footer = ({ children, className }: CardSectionProps) => (
  <div className={cn('card-footer', className)}>
    {children}
  </div>
);
