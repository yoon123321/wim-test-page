"use client";

import DietLanding from "@/components/diet-program/DietLanding";
import { useVariant } from "@/components/common/VariantProvider";

/* ------------------------------------------------------------------
   WIM 통합 다이어트 타워 — 감량 랜딩 페이지
   - 레이아웃은 DietLanding으로 통일
   - 헤더 스위치에 따라 버전별 문구 데이터만 교체
------------------------------------------------------------------- */

export default function Page() {
  const { variant } = useVariant();
  return <DietLanding copyVariant={variant} />;
}
