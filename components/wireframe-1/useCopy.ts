"use client";

import { useAB } from "@/components/common/ABProvider";
import {
  WIREFRAME_ONE_HERO,
  WIREFRAME_ONE_HERO_B,
  WIREFRAME_ONE_HERO_C,
  WIREFRAME_ONE_TEXT,
  WIREFRAME_ONE_TEXT_B,
  WIREFRAME_ONE_TEXT_C,
  WIREFRAME_ONE_TEXT_D,
} from "@/content/wireframe-1";

/** 헤더 A/B/C/D 토글에 따라 감량 페이지 본문 문구 세트(A, B, C 또는 D)를 돌려줍니다. */
export function useCopy() {
  const { variant } = useAB();
  if (variant === "B") return WIREFRAME_ONE_TEXT_B;
  if (variant === "C") return WIREFRAME_ONE_TEXT_C;
  if (variant === "D") return WIREFRAME_ONE_TEXT_D;
  return WIREFRAME_ONE_TEXT;
}

/** 헤더 A/B/C/D 토글에 따라 감량 페이지 히어로 문구 세트(A, B, C 또는 D)를 돌려줍니다. */
export function useHero() {
  const { variant } = useAB();
  if (variant === "B") return WIREFRAME_ONE_HERO_B;
  if (variant === "C") return WIREFRAME_ONE_HERO_C;
  // D안 히어로는 A와 동일하게 노출
  return WIREFRAME_ONE_HERO;
}
