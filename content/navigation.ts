export const NAVIGATION_CONTENT = [
  { href: "/wireframe-2", label: "브랜드소개" },
  {
    label: "프로그램",
    children: [
      { href: "/wireframe-1", label: "감량 프로그램" },
      { href: "/page-single", label: "기기관리 프로그램" },
    ],
  },
  { href: "/before-after", label: "비포앤애프터" },
  { href: "/promotion", label: "프로모션" },
  { href: "/contact", label: "찾아오는 길" },
] as const;

/**
 * 개선안 헤더 메뉴 — 피그마 WIM-Center-DESIGN 시안 기준
 * (기존안과 라벨·순서가 달라 따로 둔다)
 */
export const NAVIGATION_MAIN = [
  { href: "/wireframe-2", label: "브랜드 소개" },
  {
    label: "프로그램",
    children: [
      { href: "/wireframe-1", label: "감량 프로그램" },
      { href: "/page-single", label: "기기관리 프로그램" },
    ],
  },
  { href: "/before-after", label: "다이어트 사례" },
  { href: "/promotion", label: "프로모션" },
  { href: "/contact", label: "상담 문의" },
] as const;

/** 헤더 우측 CTA */
export const NAVIGATION_MAIN_CTA = { href: "/contact", label: "상담 신청" } as const;
