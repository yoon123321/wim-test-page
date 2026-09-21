'use client';

import ConsultationDialog from '@/components/ConsultationDialog';
import { CtaButton } from '@/components/common/CtaButton';
import ProgramFinalCtaSection from '@/components/common/ProgramFinalCtaSection';
import { MobileLineBreaks } from '@/components/common/SectionLayout';
import { BRAND_COPY } from '@/data/brand';
import { TRACKING_SECTIONS } from '@/lib/tracking/constants';
import { trackClickEvent } from '@/lib/tracking/tracker';

const COPY = BRAND_COPY.finalCta;

/** 9. BEGIN YOUR DESIGN — 감량·기기 페이지와 같은 마지막 상담 CTA */
export default function BrandFinalCtaSection() {
  return (
    <ProgramFinalCtaSection
      title={<MobileLineBreaks text={COPY.title} />}
      description={<MobileLineBreaks text={COPY.desc} />}
      className="py-7 tb:py-12"
      titleClassName="!leading-normal"
      actionsClassName="mt-7"
    >
      <ConsultationDialog
        trackingKey={TRACKING_SECTIONS.BRAND_CONSULTATION_CTA}
        trigger={<CtaButton label={COPY.consultationLabel} variant="white" />}
      />
      <CtaButton
        label={COPY.programLabel}
        href={COPY.programHref}
        variant="outline-white"
        icon={false}
        onClick={() => trackClickEvent(TRACKING_SECTIONS.BRAND_PROGRAM_CTA)}
      />
    </ProgramFinalCtaSection>
  );
}
