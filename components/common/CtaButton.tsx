import type { ReactNode } from 'react';
import { Typography } from '@/components/common/Typography';
import { cn } from '@/lib/utils';

type CtaButtonVariant =
  | 'primary'
  | 'white'
  | 'outline-primary'
  | 'outline-white'
  | 'glass';

export interface CtaButtonProps {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  as?: 'button' | 'span';
  mobileSize?: 'sm' | 'md';
  variant?: CtaButtonVariant;
  icon?: boolean;
  className?: string;
  contentClassName?: string;
  newTab?: boolean;
  disabled?: boolean;
}

const MOBILE_HEIGHT = {
  sm: 'h-[25px]',
  md: 'h-[30px]'
} as const;

const VARIANT = {
  primary: 'border border-primary-main bg-primary-main text-wim-white',
  white: 'border border-wim-white bg-wim-white text-primary-main',
  'outline-primary': 'border border-primary-main bg-wim-white text-primary-main',
  'outline-white': 'border border-wim-white bg-transparent text-wim-white',
  glass:
    'border border-white/36 bg-white/36 text-wim-white shadow-sm backdrop-blur-[5px]'
} as const;

/** 모든 리뉴얼 페이지에서 같은 크기와 아이콘 규격을 쓰는 CTA 버튼. */
export function CtaButton({
  label,
  href,
  onClick,
  type = 'button',
  as = 'button',
  mobileSize = 'md',
  variant = 'primary',
  icon = true,
  className,
  contentClassName,
  newTab = false,
  disabled = false
}: CtaButtonProps) {
  const classes = cn(
    'inline-flex select-none items-center justify-center rounded-full px-5 no-underline [-webkit-tap-highlight-color:transparent] tb:h-[50px]',
    MOBILE_HEIGHT[mobileSize],
    VARIANT[variant],
    className
  );

  const content = (
    <Typography
      as="span"
      variant="ko-body-03"
      tabletVariant="ko-headline-03"
      weight="bold"
      className={cn(
        'inline-flex items-center gap-1.5 tb:gap-2',
        contentClassName
      )}
    >
      {label}
      {icon && (
        <span
          aria-hidden="true"
          className="h-2 w-2 shrink-0 bg-current tb:h-4 tb:w-4"
          style={{
            WebkitMask:
              "url('/svg/main/arrow-up-right-white.svg') center / contain no-repeat",
            mask: "url('/svg/main/arrow-up-right-white.svg') center / contain no-repeat"
          }}
        />
      )}
    </Typography>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        {...(newTab ? { target: '_blank', rel: 'noreferrer' } : null)}
        className={classes}
      >
        {content}
      </a>
    );
  }

  if (as === 'span') return <span className={classes}>{content}</span>;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'cursor-pointer disabled:cursor-default disabled:opacity-40',
        classes
      )}
    >
      {content}
    </button>
  );
}
