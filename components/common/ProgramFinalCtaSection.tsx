import type { ReactNode } from 'react';
import { Typography } from '@/components/common/Typography';
import { cn } from '@/lib/utils';

type ProgramFinalCtaSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  actionsClassName?: string;
};

/** 감량·기기 프로그램 페이지에서 공용으로 사용하는 마지막 CTA 골격. */
export default function ProgramFinalCtaSection({
  title,
  description,
  children,
  className,
  titleClassName,
  actionsClassName
}: ProgramFinalCtaSectionProps) {
  return (
    <section
      className={cn(
        'bg-primary-main px-5 text-center text-wim-white wide:px-0',
        className
      )}
    >
      <Typography
        as="h2"
        variant="ko-body-01"
        tabletVariant="ko-display-01"
        weight="bold"
        className={cn('break-keep', titleClassName)}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          as="p"
          variant="ko-body-03"
          tabletVariant="ko-body-02"
          weight="regular"
          className="mt-3 break-keep"
        >
          {description}
        </Typography>
      )}

      <div
        className={cn(
          'flex flex-col items-center justify-center gap-3 tb:flex-row',
          actionsClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
