import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'md' | 'lg' | 'xl';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand-blue hover:bg-brand-blue-dark text-white',
  secondary: 'bg-brand-yellow hover:bg-brand-yellow-dark text-ink-900',
  outline:
    'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue-soft bg-white',
  ghost: 'text-brand-blue hover:underline',
};

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
  xl: 'px-9 py-4 text-lg',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AnchorButtonProps = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type NativeButtonProps = CommonProps & {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
};

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
  } = props;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if ('href' in props && props.href !== undefined) {
    const isExternal = /^https?:\/\//.test(props.href) || props.href.startsWith('mailto:') || props.href.startsWith('tel:');
    if (isExternal) {
      const externalProps = props.href.startsWith('http')
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {};
      return (
        <a href={props.href} className={classes} {...externalProps}>
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
