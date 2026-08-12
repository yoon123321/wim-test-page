"use client";

import { useAB } from "@/components/common/ABProvider";
import { HOME_CONTENT, HOME_CONTENT_B, HOME_CONTENT_C } from "@/content/home";

/** 헤더 A/B/C 토글에 따라 홈 문구 세트(A, B 또는 C)를 돌려줍니다. */
export function useHomeContent() {
  const { variant } = useAB();
  if (variant === "B") return HOME_CONTENT_B;
  if (variant === "C") return HOME_CONTENT_C;
  return HOME_CONTENT;
}
