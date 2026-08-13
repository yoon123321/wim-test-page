"use client";

import { useAB } from "@/components/common/ABProvider";
import { HOME_CONTENT, HOME_CONTENT_B, HOME_CONTENT_C, HOME_CONTENT_D } from "@/content/home";

/** 헤더 A/B/C/D 토글에 따라 홈 문구 세트(A, B, C 또는 D)를 돌려줍니다. */
export function useHomeContent() {
  const { variant } = useAB();
  if (variant === "B") return HOME_CONTENT_B;
  if (variant === "C") return HOME_CONTENT_C;
  if (variant === "D") return HOME_CONTENT_D;
  return HOME_CONTENT;
}
