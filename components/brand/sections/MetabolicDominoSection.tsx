import { Typography } from '@/components/common/Typography';
import { Container, MobileLineBreaks } from '@/components/common/SectionLayout';
import {
  BrandEyebrow,
  BrandRichLines,
  BrandTitle
} from '@/components/brand/BrandShared';
import { BRAND_COPY } from '@/data/brand';
import { cn } from '@/lib/utils';

const COPY = BRAND_COPY.domino;

/** 그림을 읽는 순서 — 감량 페이지 THE JOURNEY 와 같은 가로 타임라인 */
function DominoSteps() {
  return (
    <ol className="relative mt-8 grid gap-6 pl-6 tb:mt-10 tb:grid-cols-3 tb:gap-8 tb:pt-8 tb:pl-0">
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

      {COPY.steps.map((step, index) => (
        <li key={step.title} className="relative">
          <span
            aria-hidden="true"
            className={cn(
              'absolute top-[7px] -left-6 h-2 w-2 rounded-full tb:-top-[37px] tb:left-0 tb:h-3 tb:w-3',
              index === 0 ? 'bg-primary-main' : index === 1 ? 'bg-primary-main/60' : 'bg-primary-sub-02'
            )}
          />
          <Typography as="p" variant="itc-body-04" weight="regular" className="text-gray-02">
            STEP {String(index + 1).padStart(2, '0')}
          </Typography>
          <Typography
            as="h3"
            variant="ko-body-01"
            tabletVariant="ko-headline-03"
            weight="bold"
            className="mt-1 break-keep text-primary-main"
          >
            {step.title}
          </Typography>
          <Typography
            as="p"
            variant="ko-body-04"
            tabletVariant="ko-body-02"
            weight="regular"
            className="mt-1 break-keep text-gray-03"
          >
            {step.desc}
          </Typography>
        </li>
      ))}
    </ol>
  );
}

/** 3. WEIGHT COMES FIRST — 대사 도미노 이미지 중심 */
export default function MetabolicDominoSection() {
  return (
    <section className="bg-wim-white py-12 tb:py-20">
      <Container>
        {/* 태블릿부터 텍스트(왼쪽) / 이미지(오른쪽) 한 줄 */}
        <div className="grid items-center gap-8 tb:grid-cols-[5fr_7fr] tb:gap-10 dt:gap-16">
          <div>
            <BrandEyebrow>{COPY.eyebrow}</BrandEyebrow>
            <BrandTitle lead={COPY.title} className="mt-2" />
            <BrandRichLines lines={COPY.desc} className="mt-6 tb:mt-8" />
          </div>

          {/* 이미지: public/images/brand/metabolic-domino{,-mobile}.webp */}
          <figure>
            <picture>
              <source media="(max-width: 767px)" srcSet={COPY.imageMobile} />
              <img
                src={COPY.image}
                alt={COPY.imageAlt}
                loading="lazy"
                className="block aspect-[1600/914] w-full object-contain"
              />
            </picture>
          </figure>
        </div>

        <DominoSteps />

        {/* 마무리 */}
        <div className="mt-10 border-t border-gray-01 pt-8 text-center tb:mt-14 tb:pt-10">
          <Typography
            as="p"
            variant="ko-body-04"
            tabletVariant="ko-body-02"
            weight="regular"
            className="break-keep text-gray-03"
          >
            {COPY.closingNote}
          </Typography>
          <Typography
            as="p"
            variant="ko-body-01"
            tabletVariant="ko-headline-02"
            weight="medium"
            className="mt-1 break-keep text-primary-main"
          >
            <MobileLineBreaks text={COPY.closingLead} />
            <strong className="font-bold">{COPY.closingAccent}</strong>
            {COPY.closingTail}
          </Typography>
        </div>
      </Container>
    </section>
  );
}
