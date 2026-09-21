import type { ReactNode } from 'react';
import { Typography } from '@/components/common/Typography';
import {
  LineBreaks,
  MobileLineBreaks,
  type BreakText
} from '@/components/common/SectionLayout';
import type { BrandRichLine, BrandTone } from '@/data/brand';
import { cn } from '@/lib/utils';

/** 3M 축별 색상 — 다른 리뉴얼 페이지와 같은 그린 계열만 쓴다 */
export const TONE_TEXT: Record<BrandTone, string> = {
  meal: 'text-primary-main',
  mobility: 'text-primary-accent',
  mentation: 'text-primary-sub-01'
};

export const TONE_BG: Record<BrandTone, string> = {
  meal: 'bg-primary-main',
  mobility: 'bg-primary-accent',
  mentation: 'bg-primary-sub-01'
};

/** 감량·기기 페이지 카드와 같은 규격 */
export const BRAND_CARD =
  'rounded-[10px] border border-primary-sub-02 bg-wim-white tb:rounded-[20px]';

/** 섹션 상단 영문 라벨 (WHY LONGEVITY 등) — 감량·기기 페이지의 THE JOURNEY 와 같은 규격 */
export function BrandEyebrow({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Typography
      as="p"
      variant="itc-body-03"
      weight="regular"
      className={cn('text-gray-03', className)}
    >
      {children}
    </Typography>
  );
}

/** 섹션 제목. lead 는 medium, 강조(accent)는 bold 로 이어 붙인다. */
export function BrandTitle({
  as = 'h2',
  lead,
  accent,
  tail,
  className
}: {
  as?: 'h1' | 'h2' | 'p';
  lead: BreakText;
  accent?: string;
  tail?: string;
  className?: string;
}) {
  return (
    <Typography
      as={as}
      variant="ko-headline-01"
      tabletVariant="ko-display-01"
      weight="medium"
      className={cn('break-keep text-primary-main', className)}
    >
      <LineBreaks text={lead} />
      {accent && <strong className="font-bold">{accent}</strong>}
      {tail}
    </Typography>
  );
}

/** 섹션 본문 — 줄마다 일부 단어를 굵게 강조한다. text 안의 \n 은 모바일에서만 줄바꿈한다. */
export function BrandRichLines({
  lines,
  className
}: {
  lines: readonly BrandRichLine[];
  className?: string;
}) {
  return (
    <Typography
      as="p"
      variant="ko-body-03"
      tabletVariant="ko-body-01"
      weight="regular"
      className={cn('break-keep text-gray-03', className)}
    >
      {lines.map((line, index) => (
        <span key={`${line.text}${line.strong ?? ''}`} className="block">
          <MobileLineBreaks text={line.text} />
          {line.strong && (
            <strong className="font-bold text-primary-main">{line.strong}</strong>
          )}
          {line.tail}
          {index < lines.length - 1 && ' '}
        </span>
      ))}
    </Typography>
  );
}

/** 알약 모양 태그 — 기기 페이지 태그와 같은 규격 */
export function BrandTag({ label }: { label: string }) {
  return (
    <Typography
      as="li"
      variant="ko-body-04"
      tabletVariant="ko-body-03"
      weight="medium"
      className="rounded-full bg-primary-sub-02/60 px-3 py-1 text-primary-main tb:px-4"
    >
      {label}
    </Typography>
  );
}
