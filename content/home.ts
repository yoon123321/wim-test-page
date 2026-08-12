/** 홈(/) 페이지에서 수정 가능한 문구와 카드 데이터 */
export const HOME_CONTENT = {
  hero: {
    eyebrow: "WIM CENTER",
    title: "나만을 위해 설계하는\n단 하나의 다이어트",
    description: "체성분과 생활 패턴을 정밀하게 분석해, \n나에게 맞는 방법을 섬세하게 설계합니다.",
    primaryButton: "",
    secondaryButton: "",
    imageDescription: "메인 히어로 이미지",
  },
  about: {
    eyebrow: "PERSONALIZED DIET COACHING",
    titleLines: ["누구에게나", "같은 다이어트는 없습니다."],
    description: "체중은 의지만으로 조절되지 않습니다. \n대사와 호르몬, 그리고 스트레스나 식습관 같은 \n심리적 요인이 함께 작용하기 때문입니다.",
    tags: ["1:1 감량 상담", "정밀 체성분 분석", "생활 패턴 맞춤 코칭"],
    buttonLabel: "상담 신청하기",
    image: "/images/home-consultation.jpg",
    imageAlt: "코치와 회원이 마주 앉아 상담하는 모습",
  },
  services: {
    title: "우리는 이렇게 합니다",
    description: "나를 위한 다이어트, 이렇게 설계합니다.",
    buttonLabel: "더 알아보기",
    modal: {
      placeholder: "상세 내용이 들어갈 자리입니다.",
      closeLabel: "모달 닫기",
    },
    items: [
      { id: "svc-1", title: "감량 상담", desc: "", image: "/images/service-1.jpg" },
      { id: "svc-2", title: "데이터 기질검사", desc: "", image: "/images/service-2.jpg" },
      { id: "svc-3", title: "기기 관리", desc: "", image: "/images/service-1.jpg" },
      { id: "svc-4", title: "감량 후 유지 상담", desc: "", image: "/images/service-2.jpg" },
    ],
  },
  results: {
    eyebrow: "RESULTS",
    title: "오직 나에게 집중하는 과정",
    description: "그동안 많은 분들이 윔센터 강남을 선택하셨습니다.",
    items: [
      { value: "1546", unit: "명", label: "누적 고객 상담", note: "※개원일 기준" },
      { value: "32%", unit: "", label: "매니저 만족도", note: "" },
      { value: "94.6%", unit: "", label: "프로그램 만족도", note: "※방문고객 조사결과" },
      { value: "4.91", unit: "", label: "기기 관리 만족도", note: "※네이버 플레이스 후기 평점 " },
    ],
  },
  reviews: {
    eyebrow: "reviews",
    title: "실제 고객님의 이야기",
    description: "윔센터 강남을 경험한 고객들의 솔직한 이야기를 확인해 보세요.",
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
    titleLines: ["나에게 맞는 다이어트를", "찾아보세요."],
    description: "윔센터는 목표와 몸 상태에 따라, \n서로 다른 프로그램을 안내드립니다.",
    buttonLabel: "상담 신청",
  },
  footer: {
    brand: "윔센터 WIM CENTER",
    copyright: "© 2026 WIM CENTER. All rights reserved.",
  },
} as const;
