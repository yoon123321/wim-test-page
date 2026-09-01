/** 헤더 메뉴 — 버전1·버전2 공용 */
export const NAVIGATION_MAIN = [
  { href: "/brand", label: "브랜드 소개" },
  {
    label: "프로그램",
    children: [
      { href: "/diet-program", label: "감량 프로그램" },
      { href: "/recovery", label: "기기관리 프로그램" },
    ],
  },
  { href: "/before-after", label: "다이어트 사례" },
  { href: "/promotion", label: "프로모션" },
  { href: "/contact", label: "상담 문의" },
] as const;

/** 헤더 우측 CTA */
export const NAVIGATION_MAIN_CTA = { href: "/contact", label: "상담 신청" } as const;
