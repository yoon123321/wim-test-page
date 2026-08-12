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
  { href: "/contact", label: "상담문의" },
] as const;
