import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface PremiumButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'premium';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const PremiumButton = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  className,
  onClick,
  type = 'button',
}: PremiumButtonProps) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = size !== 'md' ? `btn-${size}` : '';
  const loadingClass = loading ? 'btn-loading' : '';

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        baseClass,
        variantClass,
        sizeClass,
        loadingClass,
        className
      )}
    >
      {loading ? (
        <div className="btn-spinner" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && (
            <Icon className="btn-icon" />
          )}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && (
            <Icon className="btn-icon" />
          )}
        </>
      )}
    </button>
  );
};