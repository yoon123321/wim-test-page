"use client";

import { useAB } from "@/components/common/ABProvider";
import {
  WIREFRAME_ONE_HERO,
  WIREFRAME_ONE_HERO_B,
  WIREFRAME_ONE_TEXT,
  WIREFRAME_ONE_TEXT_B,
} from "@/content/wireframe-1";

/** 헤더 A/B 토글에 따라 감량 페이지 본문 문구 세트(A 또는 B)를 돌려줍니다. */
export function useCopy() {
  const { variant } = useAB();
  return variant === "B" ? WIREFRAME_ONE_TEXT_B : WIREFRAME_ONE_TEXT;
}

/** 헤더 A/B 토글에 따라 감량 페이지 히어로 문구 세트(A 또는 B)를 돌려줍니다. */
export function useHero() {
  const { variant } = useAB();
  return variant === "B" ? WIREFRAME_ONE_HERO_B : WIREFRAME_ONE_HERO;
}
