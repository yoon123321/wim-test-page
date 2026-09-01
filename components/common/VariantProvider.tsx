"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type HomeVariant = "base" | "improved";

export const VARIANT_LABELS: Record<HomeVariant, string> = {
  base: "버전1",
  improved: "버전2",
};

interface VariantContextValue {
  variant: HomeVariant;
  setVariant: (v: HomeVariant) => void;
}

const VariantContext = createContext<VariantContextValue>({
  variant: "base",
  setVariant: () => {},
});

/**
 * 버전1/버전2를 고르는 미리보기 컨텍스트 (목업 전용).
 * 헤더의 스위치로 값을 바꾸면 즉시 전환된다.
 * - 페이지 이동(Link) 시에도 유지되고, 새로고침하면 localStorage 값으로 복원.
 */
export function VariantProvider({ children }: { children: React.ReactNode }) {
  // SSR·최초 렌더는 항상 기본값 (하이드레이션 불일치 방지), 이후 저장값으로 동기화
  const [variant, setVariantState] = useState<HomeVariant>("base");

  useEffect(() => {
    const saved = localStorage.getItem("home-variant");
    if (saved === "base" || saved === "improved") setVariantState(saved);
  }, []);

  const setVariant = (v: HomeVariant) => {
    setVariantState(v);
    localStorage.setItem("home-variant", v);
  };

  return (
    <VariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </VariantContext.Provider>
  );
}

export const useVariant = () => useContext(VariantContext);
