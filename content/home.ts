/** 홈(/) 페이지에서 수정 가능한 문구와 카드 데이터 */
export const HOME_CONTENT = {
  hero: {
    eyebrow: "WIM CENTER",
    title: "의사가 설계하고,전문 인력이 끝까지 관리 합니다",
    description: "",
    primaryButton: "",
    secondaryButton: "",
    imageDescription: "메인 히어로 이미지",
  },
  about: {
    eyebrow: "PERSONALIZED DIET COACHING",
    titleLines: ["당신의 다이어트가 자꾸 실패하는 이유,", "의지가 부족해서가 아닙니다"],
    description: "윔센터 강남은 체중만 보지 않습니다. ‘다이어트 기질, 자기조절력, 식생활 습관을 함께 분석해 나에게 맞는 감량 방법을 찾아드립니다.",
    tags: [],
    buttonLabel: "코칭 시작하기 →",
    image: "/images/home-consultation.jpg",
    imageAlt: "코치와 회원이 마주 앉아 상담하는 모습",
  },
  services: {
    title: "윔센터 강남의 관리는 하나로 정해져 있지 않습니다",
    description: "감량 목적, 여성 건강, 대사 관리, 갱년기까지 — 상태와 목표에 따라 필요한 관리를 조합합니다.",
    buttonLabel: "더 알아보기",
    modal: {
      placeholder: "상세 내용이 들어갈 자리입니다.",
      closeLabel: "모달 닫기",
    },
    items: [
      { id: "svc-1", title: "감량  목적", desc: "체중만 줄이는 다이어트가 아니라 내 몸의 문제를 찾고, 감량이 지속 될 수 있도록", image: "/images/service-1.jpg" },
      { id: "svc-2", title: "유지/컨디셔닝이 목적", desc: "무저진 몸의 컨디션을 회복하고 꾸준히 관리 할 수 있는 환경을 만들어드립니다", image: "/images/service-2.jpg" },
    ],
  },
  results: {
    eyebrow: "RESULTS",
    title: "말보다 숫자로 보여 드리겠습니다",
    description: "",
    items: [
      { value: "424", unit: "개", label: "네이버 고객 평점", note: "" },
      { value: "32%", unit: "", label: "매니저 만족도", note: "" },
      { value: "4.73", unit: "", label: "프로그램 만족도", note: "" },
      { value: "4.6", unit: "", label: "기기 관리 만족도", note: "" },
    ],
  },
  reviews: {
    eyebrow: "",
    title: "고객이 직접 경험하고 평가한  윔센터 강남",
    buttonLabel: "리뷰 전체 보기 ⟶",
    items: [
      { tag: "체중 클리닉", body: "다이어트 할 때마다 요요가 와요. 이번엔 검사부터 하고 시작하니 확실히 달랐어요.", meta: "30대 여성 · 12주", bg: "var(--green-500)", fg: "#fff", offset: 0 },
      { tag: "메디컬", body: "수술은 무서워서 시술만으로 가능할지 걱정했는데 단계별로 설명해 주셔서 마음이 놓였어요.", meta: "40대 여성 · 8주", bg: "#fff", fg: "var(--green-900)", offset: 48 },
      { tag: "대사 관리", body: "살은 빠졌는데 피곤하고 힘이 없었어요. 여기선 체력 회복까지 같이 봐줍니다.", meta: "30대 남성 · 16주", bg: "rgba(255,255,255,.08)", fg: "#fff", offset: 18 },
      { tag: "체형 관리", body: "울퉁불퉁 셀룰라이트가 보기 싫었어요. 부위별로 계획을 따로 잡아 주셨습니다.", meta: "20대 여성 · 6주", bg: "#fff", fg: "var(--green-900)", offset: 86 },
      { tag: "갱년기", body: "오후만 되면 무너지는데 오늘은 컨디션이 좋습니다. 상담 예약 잡길 잘했어요.", meta: "50대 여성 · 12주", bg: "var(--green-700)", fg: "#fff", offset: 6 },
    ],
  },
  cases: {
    eyebrow: "CASES",
    titleLines: ["프로그램 시작 전", "먼저 나부터 알아보세요~"],
    description: "내가 살이 찌는 이유, 내가 다이어트에 실패하는 이유는 무었일까요?. 간단한 검사로 나의 다이어트 기질과 생활 습관을 확인해보세요! ",
    items: [
      { id: "case-1", title: "감량 프로그램", meta: "체지방 감량 · 체중 관리", image: "/images/case-1.jpg", href: "/wireframe-1" },
      { id: "case-2", title: "기기관리 프로그램", meta: "전문 기기 체형 · 대사 관리", image: "/images/case-2.jpg", href: "/page-single" },
    ],
  },
  cta: {
    titleLines: ["지금 몸 상태부터", "정확히 확인해 보세요"],
    description: "상담은 무료이며, 검사 결과를 바탕으로 맞는 프로그램을 안내드립니다.",
    buttonLabel: "상담 신청",
  },
  footer: {
    brand: "윔센터 WIM CENTER",
    copyright: "© 2026 WIM CENTER. All rights reserved.",
  },
} as const;
