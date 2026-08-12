"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ABVariant = "A" | "B";

interface ABContextValue {
  variant: ABVariant;
  setVariant: (v: ABVariant) => void;
}

const ABContext = createContext<ABContextValue>({
  variant: "A",
  setVariant: () => {},
});

/**
 * 문구 A/B 미리보기 컨텍스트 (목업 전용).
 * 헤더의 A/B 버튼으로 variant 를 바꾸면, <ABText> 로 감싼 문구가 즉시 전환된다.
 * - 페이지 이동(Link) 시에도 유지되고, 새로고침하면 localStorage 값으로 복원.
 */
export function ABProvider({ children }: { children: React.ReactNode }) {
  // SSR·최초 렌더는 항상 "A" (하이드레이션 불일치 방지), 이후 저장값으로 동기화
  const [variant, setVariantState] = useState<ABVariant>("A");

  useEffect(() => {
    const saved = localStorage.getItem("ab-variant");
    if (saved === "A" || saved === "B") setVariantState(saved);
  }, []);

  const setVariant = (v: ABVariant) => {
    setVariantState(v);
    localStorage.setItem("ab-variant", v);
  };

  return <ABContext.Provider value={{ variant, setVariant }}>{children}</ABContext.Provider>;
}

export const useAB = () => useContext(ABContext);
