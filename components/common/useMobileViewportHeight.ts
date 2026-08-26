"use client";

import { useEffect, useState } from "react";

const TB_BREAKPOINT = 768;

/**
 * 모바일 브라우저(특히 카톡·인스타 인앱 브라우저)는 스크롤하면서 주소창이
 * 접히고 펼쳐질 때 svh/dvh 값 자체를 다시 계산해, 그 값에 기대는 높이가
 * 스크롤 중에 늘어났다 줄었다 하는 것처럼 보인다.
 * 그래서 진짜 화면 폭이 바뀌는 경우(회전·리사이즈)에만 다시 재는 값으로
 * 높이를 고정한다 — 툴바가 접히는 것만으로는 값이 갱신되지 않는다.
 * tb 브레이크포인트(768px) 이상에서는 null을 반환해 CSS 쪽 높이를 그대로 쓴다.
 */
export function useMobileViewportHeight() {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    let lastWidth = window.innerWidth;

    const measure = () => {
      setHeight(window.innerWidth < TB_BREAKPOINT ? window.innerHeight : null);
    };
    measure();

    const onResize = () => {
      if (window.innerWidth === lastWidth) return; // 주소창 접힘/펼침 — 무시
      lastWidth = window.innerWidth;
      measure();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return height;
}
