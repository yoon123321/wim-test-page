"use client";

import RecoveryLandingNew from "@/components/recovery/RecoveryLandingNew";
import { useVariant } from "@/components/common/VariantProvider";

/* ------------------------------------------------------------------
   기기관리(리커버리) 페이지
   - 레이아웃은 하나. 버전3(개선안 C)에서만 히어로가 옥시젠챔버 영상 배경으로 바뀐다
   - 문구·데이터는 data/recovery-new.ts
------------------------------------------------------------------- */

export default function RecoveryPage() {
  const { variant } = useVariant();
  return <RecoveryLandingNew videoHero={variant === "v3"} />;
}
