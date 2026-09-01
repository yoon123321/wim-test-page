"use client";

import RecoveryLanding from "@/components/recovery/RecoveryLanding";
import Hero from "@/components/common/Hero";
import RecoveryLandingNew from "@/components/recovery/RecoveryLandingNew";
import { useVariant } from "@/components/common/VariantProvider";
import { RECOVERY_CONTENT } from "@/data/recovery";

/* ------------------------------------------------------------------
   기기관리(리커버리) 페이지
   - 기존안: Hero + RecoveryLanding (문구는 data/recovery.ts)
   - 개선안: RecoveryLandingNew (문구는 data/recovery-new.ts)
   헤더의 기존안/개선안 스위치로 전환합니다.
------------------------------------------------------------------- */

export default function PageSingle() {
  const { variant } = useVariant();

  if (variant === "improved") return <RecoveryLandingNew />;

  return (
    <>
      <Hero
        imagePosition="center"
        eyebrow={RECOVERY_CONTENT.hero.eyebrow}
        title={RECOVERY_CONTENT.hero.title}
        description={RECOVERY_CONTENT.hero.description}
      />
      <RecoveryLanding />
    </>
  );
}
