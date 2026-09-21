import type { ReactNode } from 'react';
import { Typography } from '@/components/common/Typography';
import { Container, MobileLineBreaks } from '@/components/common/SectionLayout';
import {
  BRAND_CARD,
  BrandEyebrow,
  BrandRichLines,
  BrandTitle
} from '@/components/brand/BrandShared';
import { BRAND_COPY } from '@/data/brand';
import { cn } from '@/lib/utils';

const COPY = BRAND_COPY.environment;

type AreaIcon = (typeof COPY.areas)[number]['icon'];

/** 여섯 영역 선형 아이콘 (24px 그리드) */
const ICON_PATHS: Record<AreaIcon, ReactNode> = {
  meal: (
    <>
      <path d="M4 12h16a8 8 0 0 1-16 0Z" />
      <path d="M9 4v5M12 3v6M15 4v5" />
    </>
  ),
  emotional: (
    <>
      <path d="M4 14h16a8 8 0 0 1-16 0Z" />
      <path d="M12 10.5 9.6 8.2a1.6 1.6 0 1 1 2.4-2.1 1.6 1.6 0 1 1 2.4 2.1Z" />
    </>
  ),
  exercise: (
    <>
      <rect x="3" y="8" width="3" height="8" rx="1" />
      <rect x="18" y="8" width="3" height="8" rx="1" />
      <path d="M6 10H3.5M6 12h12M18 10h2.5" />
    </>
  ),
  activity: (
    <>
      <ellipse cx="8" cy="7.5" rx="2.5" ry="4" />
      <ellipse cx="16" cy="11.5" rx="2.5" ry="4" />
      <path d="M7 14.5h2v2.5a1 1 0 0 1-2 0ZM15 18.5h2V21a1 1 0 0 1-2 0Z" />
    </>
  ),
  sleep: (
    <>
      <path d="M20 14.5A8 8 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 10.5Z" />
      <path d="M18 3v4M16 5h4" />
    </>
  ),
  mind: (
    <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10Z" />
  )
};

function AreaIconSvg({ icon, className }: { icon: AreaIcon; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-5 w-5 shrink-0', className)}
    >
      {ICON_PATHS[icon]}
    </svg>
  );
}

function ClosingStatement({ className }: { className?: string }) {
  return (
    <Typography
      as="p"
      variant="ko-body-01"
      tabletVariant="ko-headline-02"
      weight="medium"
      className={cn('break-keep text-primary-main', className)}
    >
      <MobileLineBreaks text={COPY.closingLead} />
      <strong className="font-bold">{COPY.closingAccent}</strong>
      {COPY.closingTail}
    </Typography>
  );
}

function ClosingNote({ className }: { className?: string }) {
  return (
    <Typography as="p" variant="ko-body-04" tabletVariant="ko-body-02" weight="regular" className={cn('break-keep text-gray-03', className)}>
      {COPY.closingNote}
    </Typography>
  );
}

/** 4. THE ENVIRONMENT — 왼쪽 텍스트 / 오른쪽 흰 패널 하나에 여섯 영역 */
export default function ObesogenicSection() {
  return (
    <section className="bg-gray-00 py-12 tb:py-20">
      <Container className="grid gap-10 tb:grid-cols-2 tb:items-center tb:gap-10 dt:gap-16">
        <div>
          <BrandEyebrow>{COPY.eyebrow}</BrandEyebrow>
          <BrandTitle lead={COPY.title} className="mt-2" />
          <BrandRichLines lines={COPY.desc} className="mt-6 tb:mt-8" />
          <div className="mt-8 border-l-2 border-primary-main pl-4 tb:mt-10 tb:pl-5">
            <ClosingNote />
            <ClosingStatement className="mt-1" />
          </div>
        </div>

        <div className={cn(BRAND_CARD, 'px-5 py-6 tb:px-7 tb:py-8')}>
          <Typography as="h3" variant="ko-body-03" tabletVariant="ko-body-02" weight="bold" className="break-keep text-wim-black">
            {COPY.subtitle}
          </Typography>
          <ul className="mt-4 grid grid-cols-2 border-t border-gray-01">
            {COPY.areas.map((area, index) => (
              <li
                key={area.title}
                className={cn(
                  'border-b border-gray-01 py-4 tb:py-5',
                  index % 2 === 0 ? 'pr-3 tb:pr-5' : 'border-l pl-3 tb:pl-5',
                  index >= COPY.areas.length - 2 && 'border-b-0 pb-0 tb:pb-0'
                )}
              >
                <div className="flex items-center gap-2 text-primary-main">
                  <AreaIconSvg icon={area.icon} className="h-4 w-4 tb:h-5 tb:w-5" />
                  <Typography as="p" variant="ko-body-03" tabletVariant="ko-body-01" weight="bold">
                    {area.title}
                  </Typography>
                </div>
                <Typography as="p" variant="ko-body-04" tabletVariant="ko-body-03" weight="regular" className="mt-1 break-keep text-gray-03">
                  {area.desc}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
