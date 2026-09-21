import { Typography } from '@/components/common/Typography';
import { Container, LineBreaks } from '@/components/common/SectionLayout';
import { BRAND_CARD, BrandEyebrow, BrandTitle } from '@/components/brand/BrandShared';
import { BRAND_COPY } from '@/data/brand';
import { cn } from '@/lib/utils';

const COPY = BRAND_COPY.philosophy;

/** 6. OUR PHILOSOPHY — 우리가 설계하는 방식 */
export default function PhilosophySection() {
  return (
    <section className="bg-wim-white py-12 tb:py-28">
      <Container>
        <div className="text-center">
          <BrandEyebrow>{COPY.eyebrow}</BrandEyebrow>
          <BrandTitle lead={COPY.title} className="mt-2" />
          <Typography
            as="p"
            variant="ko-body-03"
            tabletVariant="ko-body-01"
            weight="regular"
            className="mt-6 break-keep text-gray-03 tb:mt-9"
          >
            <LineBreaks text={COPY.desc} />
          </Typography>
        </div>

        <ul className="mt-10 grid gap-3 tb:mt-16 tb:grid-cols-3 tb:gap-5">
          {COPY.principles.map((principle) => (
            <li
              key={principle.eyebrow}
              className={cn(BRAND_CARD, 'px-6 py-7 tb:px-9 tb:py-11')}
            >
              <Typography
                as="p"
                variant="itc-body-04"
                weight="regular"
                className="text-gray-03"
              >
                {principle.eyebrow}
              </Typography>
              <Typography
                as="h3"
                variant="ko-headline-03"
                tabletVariant="ko-headline-02"
                weight="bold"
                className="mt-2 break-keep text-primary-main tb:mt-3"
              >
                {principle.title}
              </Typography>
              <Typography
                as="p"
                variant="ko-body-03"
                tabletVariant="ko-body-02"
                weight="regular"
                className="mt-3 break-keep text-gray-03 tb:mt-4"
              >
                <LineBreaks text={principle.desc} />
              </Typography>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
