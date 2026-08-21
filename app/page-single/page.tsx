"use client";

import WimDeviceWireframe from "@/components/WimDeviceWireframe";
import Hero from "@/components/common/Hero";
import RecoveryLandingNew from "@/components/page-single/RecoveryLandingNew";
import { useVariant } from "@/components/common/VariantProvider";
import { PAGE_SINGLE_CONTENT } from "@/content/page-single";

/* ------------------------------------------------------------------
   기기관리(리커버리) 페이지
   - 기존안: Hero + WimDeviceWireframe (문구는 content/page-single.ts)
   - 개선안: RecoveryLandingNew (문구는 content/recovery-new.ts)
   헤더의 기존안/개선안 스위치로 전환합니다.
------------------------------------------------------------------- */

export default function PageSingle() {
  const { variant } = useVariant();

  if (variant === "improved") return <RecoveryLandingNew />;

  return (
    <>
      <Hero
        imagePosition="center"
        eyebrow={PAGE_SINGLE_CONTENT.hero.eyebrow}
        title={PAGE_SINGLE_CONTENT.hero.title}
        description={PAGE_SINGLE_CONTENT.hero.description}
      />
      <WimDeviceWireframe />
    </>
  );
}
