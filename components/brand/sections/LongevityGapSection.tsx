import { Typography } from '@/components/common/Typography';
import { Container } from '@/components/common/SectionLayout';
import {
  BRAND_CARD,
  BrandEyebrow,
  BrandRichLines,
  BrandTitle
} from '@/components/brand/BrandShared';
import { BRAND_COPY } from '@/data/brand';
import { cn } from '@/lib/utils';

const COPY = BRAND_COPY.longevity;
const CHART = COPY.chart;
const LIFESPAN = CHART.lifespan.value;
const HEALTHSPAN = CHART.healthspan.value;
const GAP_YEARS = LIFESPAN - HEALTHSPAN;

/** 문구 안의 {lifespan} / {healthspan} 을 실제 나이로 바꾼다 */
const fill = (text: string) =>
  text
    .replace('{lifespan}', String(LIFESPAN))
    .replace('{healthspan}', String(HEALTHSPAN));

const ROWS = [
  { ...CHART.rows.healthy, years: HEALTHSPAN, dot: 'bg-primary-main' },
  { ...CHART.rows.unhealthy, years: GAP_YEARS, dot: 'bg-primary-sub-02' }
];

/** 도넛 — 기대수명 83년 중 건강하게 보내는 66년 / 건강을 잃은 17년 */
function LifespanDonut() {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const healthyLength = (HEALTHSPAN / LIFESPAN) * circumference;
  /** 두 조각 사이 여백 */
  const gap = 2.5;

  return (
    <figure className={cn(BRAND_CARD, 'px-5 py-7 tb:px-8 tb:py-9')}>
      <div className="flex flex-col items-center gap-6 xs:flex-row xs:gap-8">
        <div className="relative w-[160px] shrink-0 tb:w-[180px]">
          <svg viewBox="0 0 100 100" className="block -rotate-90" aria-hidden="true">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              strokeWidth="10"
              className="stroke-primary-main"
              strokeDasharray={`${healthyLength - gap} ${circumference}`}
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              strokeWidth="10"
              className="stroke-primary-sub-02"
              strokeDasharray={`${circumference - healthyLength - gap} ${circumference}`}
              strokeDashoffset={-healthyLength}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Typography as="p" variant="ko-body-04" weight="regular" className="text-gray-03">
              {CHART.center}
            </Typography>
            <Typography as="p" variant="ko-headline-01" tabletVariant="ko-display-01" weight="bold" className="text-primary-main">
              {GAP_YEARS}
              <span className="text-[0.55em] font-medium">{CHART.unit}</span>
            </Typography>
          </div>
        </div>

        <div className="w-full">
          <Typography as="p" variant="ko-body-03" tabletVariant="ko-body-02" weight="bold" className="text-wim-black">
            {fill(CHART.heading)}
          </Typography>
          <ul className="mt-3 divide-y divide-gray-01 border-t border-gray-01">
            {ROWS.map((row) => (
              <li key={row.label} className="flex items-center justify-between gap-3 py-3">
                <div className="flex items-start gap-2">
                  <span aria-hidden="true" className={cn('mt-[0.45em] h-2.5 w-2.5 shrink-0 rounded-full', row.dot)} />
                  <div>
                    <Typography as="p" variant="ko-body-03" tabletVariant="ko-body-02" weight="medium" className="break-keep text-wim-black">
                      {row.label}
                    </Typography>
                    <Typography as="p" variant="ko-body-04" weight="regular" className="text-gray-02">
                      {fill(row.range)}
                    </Typography>
                  </div>
                </div>
                <Typography as="span" variant="ko-body-01" tabletVariant="ko-headline-03" weight="bold" className="shrink-0 text-primary-main">
                  {row.years}
                  {CHART.unit}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Typography
        as="p"
        variant="ko-body-04"
        weight="regular"
        className="mt-6 break-keep text-gray-02 tb:mt-8"
      >
        {CHART.source}
      </Typography>
    </figure>
  );
}

/** 2. WHY LONGEVITY — 기대수명과 건강수명의 간격 */
export default function LongevityGapSection() {
  return (
    <section className="bg-gray-00 py-12 tb:py-28">
      {/* 모바일: 텍스트 → 차트 → 마무리 순서로 쌓고, 태블릿부터 왼쪽 텍스트 / 오른쪽 차트 2열 */}
      <Container className="grid gap-10 tb:grid-cols-2 tb:items-center tb:gap-10 dt:gap-16">
        <div>
          <BrandEyebrow>{COPY.eyebrow}</BrandEyebrow>
          <BrandTitle
            lead={COPY.titleLead}
            accent={COPY.titleAccent}
            tail={COPY.titleTail}
            className="mt-2"
          />
          <BrandRichLines lines={COPY.desc} className="mt-6 tb:mt-9" />
          <BrandRichLines lines={COPY.closing} className="mt-6 hidden tb:mt-9 tb:block" />
        </div>

        <LifespanDonut />

        <BrandRichLines lines={COPY.closing} className="tb:hidden" />
      </Container>
    </section>
  );
}
