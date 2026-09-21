import { Typography } from '@/components/common/Typography';
import { Container, LineBreaks } from '@/components/common/SectionLayout';
import { BrandEyebrow, BrandTitle } from '@/components/brand/BrandShared';
import { BRAND_COPY } from '@/data/brand';

const COPY = BRAND_COPY.hero;

/**
 * 1. 인트로 — 기기 페이지 WhyRecoverySection 과 같은 좌 텍스트 / 우 이미지 구성.
 * 이미지가 준비되면 아래 자리 표시를 <picture> 로 바꾼다. (WhyRecoverySection 참고)
 */
export default function BrandHeroSection() {
  return (
    <section className="pt-[45px] pb-10 tb:py-24">
      <Container>
        <div className="grid items-center gap-12 tb:grid-cols-2 tb:gap-12">
          <div className="text-center tb:text-left">
            <BrandEyebrow>{COPY.eyebrow}</BrandEyebrow>
            <BrandTitle
              as="h1"
              lead={COPY.titleLead}
              accent={COPY.titleAccent}
              tail={COPY.titleTail}
              className="mt-1 tb:mt-3"
            />
            <Typography
              as="p"
              variant="ko-body-03"
              tabletVariant="ko-body-01"
              weight="regular"
              className="mt-5 break-keep text-gray-03 tb:mt-8"
            >
              <LineBreaks text={COPY.desc} />
            </Typography>
          </div>

          {/* 이미지 자리 — 기기 페이지와 같은 비율 */}
          <div
            aria-hidden="true"
            className="flex aspect-[640/460] w-full items-center justify-center rounded-xl bg-primary-sub-03 tb:aspect-[1280/800]"
          >
            <Typography
              as="span"
              variant="ko-body-04"
              tabletVariant="ko-body-03"
              weight="regular"
              className="text-primary-main"
            >
              이미지 준비 중
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
}
