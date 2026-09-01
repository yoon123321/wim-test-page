"use client";

import DietLanding from "@/components/diet-program/DietLanding";
import DietLandingNew from "@/components/diet-program/DietLandingNew";
import { useVariant } from "@/components/common/VariantProvider";

/* ------------------------------------------------------------------
   WIM 통합 다이어트 타워 — 감량 랜딩 페이지
   - 기존안: DietLanding (문구는 data/diet.ts)
   - 개선안: DietLandingNew (문구는 data/diet-new.ts)
   헤더의 기존안/개선안 스위치로 전환합니다.
------------------------------------------------------------------- */

export default function Page() {
  const { variant } = useVariant();
  return variant === "improved" ? <DietLandingNew /> : <DietLanding />;
}
