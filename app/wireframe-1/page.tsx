"use client";

import WireframeEView from "@/components/wireframe-1/WireframeEView";
import DietLandingNew from "@/components/wireframe-1/DietLandingNew";
import { useVariant } from "@/components/common/VariantProvider";

/* ------------------------------------------------------------------
   WIM 통합 다이어트 타워 — 감량 랜딩 페이지
   - 기존안: WireframeEView (문구는 content/wireframe-e.ts)
   - 개선안: DietLandingNew (문구는 content/diet-new.ts)
   헤더의 기존안/개선안 스위치로 전환합니다.
------------------------------------------------------------------- */

export default function Page() {
  const { variant } = useVariant();
  return variant === "improved" ? <DietLandingNew /> : <WireframeEView />;
}
