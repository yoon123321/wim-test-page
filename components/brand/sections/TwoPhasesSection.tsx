import { Typography } from '@/components/common/Typography';
import { Container } from '@/components/common/SectionLayout';
import {
  BRAND_CARD,
  BrandEyebrow,
  BrandRichLines,
  BrandTag,
  BrandTitle
} from '@/components/brand/BrandShared';
import { BRAND_COPY } from '@/data/brand';
import { cn } from '@/lib/utils';

const COPY = BRAND_COPY.phases;

/** 8. THE DESIGN, IN ORDER — 설계의 두 단계 */
export default function TwoPhasesSection() {
  return (
    <section className="bg-wim-white py-12 tb:py-20">
      <Container>
        <BrandEyebrow>{COPY.eyebrow}</BrandEyebrow>
        <BrandTitle lead={COPY.title} className="mt-2" />

        {/* 모바일: 세로 타임라인 / 태블릿부터: 가로 타임라인 + 2열 카드 (감량 페이지 THE JOURNEY 와 같은 선) */}
        <ol className="relative mt-8 grid gap-5 pl-6 tb:mt-12 tb:grid-cols-2 tb:gap-5 tb:pt-8 tb:pl-0">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[3px] w-[2px] tb:hidden"
            style={{
              background:
                'linear-gradient(180deg, var(--color-wim-primary-main) 42.46%, var(--color-wim-gray-01) 88.66%)'
            }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-[2px] tb:block"
            style={{
              background:
                'linear-gradient(90deg, var(--color-wim-primary-main) 42.46%, var(--color-wim-gray-01) 88.66%)'
            }}
          />

          {COPY.items.map((phase, index) => (
            <li key={phase.label} className="relative flex">
              <span
                aria-hidden="true"
                className={cn(
                  'absolute top-8 -left-6 h-2 w-2 rounded-full tb:-top-[37px] tb:left-0 tb:h-3 tb:w-3',
                  index === 0 ? 'bg-primary-main' : 'bg-primary-sub-02'
                )}
              />

              <div className={cn(BRAND_CARD, 'w-full px-5 py-7 tb:px-8 tb:py-9 dt:px-10')}>
                <Typography
                  as="span"
                  variant="ko-body-04"
                  tabletVariant="ko-body-03"
                  weight="medium"
                  className="inline-block rounded-full border border-primary-main px-3 py-1 text-primary-main"
                >
                  {phase.label}
                </Typography>
                <Typography
                  as="h3"
                  variant="ko-headline-03"
                  tabletVariant="ko-headline-01"
                  weight="bold"
                  className="mt-4 break-keep text-primary-main"
                >
                  {phase.title}
                </Typography>
                <BrandRichLines lines={phase.desc} className="mt-4 tb:mt-6" />
                <ul className="mt-6 flex flex-wrap gap-2 tb:mt-8">
                  {phase.tags.map((tag) => (
                    <BrandTag key={tag} label={tag} />
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
