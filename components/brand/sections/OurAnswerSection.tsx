import { Container } from '@/components/common/SectionLayout';
import {
  BrandEyebrow,
  BrandRichLines,
  BrandTitle
} from '@/components/brand/BrandShared';
import { BRAND_COPY } from '@/data/brand';

const COPY = BRAND_COPY.answer;

/** 5. OUR ANSWER — 생활은 더욱 정교하게 설계되어야 합니다. */
export default function OurAnswerSection() {
  return (
    <section className="bg-gradient-to-b from-wim-white to-primary-sub-03 py-16 text-center tb:py-32">
      <Container>
        <BrandEyebrow>{COPY.eyebrow}</BrandEyebrow>
        <BrandTitle
          lead={COPY.titleLead}
          accent={COPY.titleAccent}
          tail={COPY.titleTail}
          className="mt-2"
        />
        <div
          aria-hidden="true"
          className="mx-auto mt-8 h-0.5 w-10 bg-primary-main tb:mt-12 tb:w-16"
        />
        <BrandRichLines lines={COPY.desc} className="mt-8 tb:mt-10" />
      </Container>
    </section>
  );
}
