"use client";

import { useAB } from "@/components/common/ABProvider";
import { HOME_CONTENT, HOME_CONTENT_B } from "@/content/home";

/** 헤더 A/B 토글에 따라 홈 문구 세트(A 또는 B)를 돌려줍니다. */
export function useHomeContent() {
  const { variant } = useAB();
  return variant === "B" ? HOME_CONTENT_B : HOME_CONTENT;
}
