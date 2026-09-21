import { Typography } from '@/components/common/Typography';
import { Container, LineBreaks } from '@/components/common/SectionLayout';
import {
  BRAND_CARD,
  BrandEyebrow,
  BrandRichLines,
  BrandTag,
  TONE_TEXT
} from '@/components/brand/BrandShared';
import { BRAND_COPY, type BrandTone } from '@/data/brand';
import { cn } from '@/lib/utils';

const COPY = BRAND_COPY.methodology;

const TONE_FILL: Record<BrandTone, string> = {
  meal: 'fill-primary-main',
  mobility: 'fill-primary-accent',
  mentation: 'fill-primary-sub-01'
};

/** 꼭짓점 위치(0~100). 12시 방향부터 시계 방향으로 60° 간격 */
const vertex = (index: number, scale = 1) => {
  const angle = ((-90 + index * 60) * Math.PI) / 180;
  return {
    x: 50 + 50 * scale * Math.cos(angle),
    y: 50 + 50 * scale * Math.sin(angle)
  };
};

const polygon = (scale: number) =>
  COPY.radar
    .map((_, index) => {
      const { x, y } = vertex(index, scale);
      return `${x},${y}`;
    })
    .join(' ');

/** 꼭짓점별 라벨 배치 — 위 / 오른쪽 둘 / 아래 / 왼쪽 둘 */
const LABEL_POSITION = [
  '-translate-x-1/2 -translate-y-[calc(100%+10px)]',
  'translate-x-[12px] -translate-y-1/2',
  'translate-x-[12px] -translate-y-1/2',
  '-translate-x-1/2 translate-y-[10px]',
  '-translate-x-[calc(100%+12px)] -translate-y-1/2',
  '-translate-x-[calc(100%+12px)] -translate-y-1/2'
];

/** 환경이 무너뜨린 여섯 영역 육각형 */
function SixAreaRadar() {
  return (
    <div className="relative mx-auto mt-14 aspect-square w-[200px] tb:mt-20 tb:w-[340px]">
      <svg aria-hidden="true" viewBox="-2 -2 104 104" className="h-full w-full overflow-visible">
        <polygon points={polygon(1)} className="fill-wim-white" />
        {[1, 2 / 3, 1 / 3].map((scale) => (
          <polygon
            key={scale}
            points={polygon(scale)}
            fill="none"
            className="stroke-gray-01"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {COPY.radar.map((area, index) => {
          const { x, y } = vertex(index);
          return (
            <line
              key={area.label}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              className="stroke-gray-01"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
        {COPY.radar.map((area, index) => {
          const { x, y } = vertex(index);
          return (
            <circle
              key={area.label}
              cx={x}
              cy={y}
              r="2.4"
              className={TONE_FILL[area.tone]}
            />
          );
        })}
      </svg>

      <ul>
        {COPY.radar.map((area, index) => {
          const { x, y } = vertex(index);
          return (
            <Typography
              key={area.label}
              as="li"
              variant="ko-body-04"
              tabletVariant="ko-body-02"
              weight="bold"
              className={cn(
                'absolute whitespace-nowrap',
                LABEL_POSITION[index],
                TONE_TEXT[area.tone]
              )}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {area.label}
            </Typography>
          );
        })}
      </ul>
    </div>
  );
}

/** 7. OUR METHODOLOGY — 3M Approach */
export default function ThreeMApproachSection() {
  return (
    <section className="bg-gray-00 py-12 tb:py-28">
      <Container>
        <div className="text-center">
          <BrandEyebrow>{COPY.eyebrow}</BrandEyebrow>
          <Typography
            as="h2"
            variant="garamond-headline-02"
            tabletVariant="garamond-headline-01"
            weight="medium"
            className="mt-2 text-primary-main"
          >
            {COPY.title}
          </Typography>
          <BrandRichLines lines={COPY.desc} className="mt-6 tb:mt-9" />
        </div>

        <SixAreaRadar />

        <ul className="mt-16 grid gap-3 tb:mt-20 tb:grid-cols-3 tb:gap-5">
          {COPY.pillars.map((pillar) => (
            <li
              key={pillar.name}
              className={cn(BRAND_CARD, 'px-6 py-7 tb:px-8 tb:py-10')}
            >
              <Typography
                as="h3"
                variant="garamond-headline-03"
                tabletVariant="garamond-title-01"
                weight="medium"
                className={TONE_TEXT[pillar.tone]}
              >
                {pillar.name}
              </Typography>
              <Typography
                as="p"
                variant="ko-body-03"
                weight="regular"
                className="text-gray-03"
              >
                {pillar.subtitle}
              </Typography>
              <Typography
                as="p"
                variant="ko-body-03"
                tabletVariant="ko-body-02"
                weight="regular"
                className="mt-4 break-keep text-gray-03"
              >
                <LineBreaks text={pillar.desc} />
              </Typography>
              <ul className="mt-5 flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <BrandTag key={tag} label={tag} />
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <Typography
          as="p"
          variant="ko-headline-03"
          tabletVariant="ko-title-02"
          weight="bold"
          className="mt-12 break-keep text-center text-primary-main tb:mt-20"
        >
          {COPY.closing}
        </Typography>
      </Container>
    </section>
  );
}
