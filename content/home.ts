/** 홈(/) 페이지에서 수정 가능한 문구와 카드 데이터 */
export const HOME_CONTENT = {
  hero: {
    eyebrow: "WIM CENTER",
    title: "의사가 설계하고,전문 인력이 끝까지 관리 합니다",
    description: "과학적이고 지속 가능한 프로그램으로 건강한 라이프스타일을 만들어 갑니다.",
    primaryButton: "상담 신청",
    secondaryButton: "프로그램 보기",
    imageDescription: "메인 히어로 이미지",
  },
  about: {
    eyebrow: "PERSONALIZED DIET COACHING",
    titleLines: ["당신의 다이어트가 자꾸 실패하는 이유,", "몸이 달라집니다"],
    description: "같은 식단, 같은 운동도 사람마다 결과가 다릅니다. 윔센터는 검사 결과와 생활 패턴을 먼저 읽고, 유지할 수 있는 방식으로 계획을 짭니다. 감량 이후의 체중 관리까지 한 명의 코치가 이어서 봅니다.",
    tags: ["1:1 전담 코치", "체성분 정밀 검사", "유지 관리 프로그램"],
    buttonLabel: "코칭 시작하기 →",
    image: "/images/coach.jpg",
    imageAlt: "코치와 회원이 마주 앉아 상담하는 모습",
  },
  services: {
    title: "우리는 이렇게 합니다",
    description: "일상적인 건강 관리부터 전문 진료까지, 체중과 관련된 모든 단계를 한 곳에서 봅니다.",
    buttonLabel: "예약하기 →",
    items: [
      { id: "svc-1", title: "일반 진료", image: "/images/service-1.jpg" },
      { id: "svc-2", title: "여성 건강 클리닉", image: "/images/service-2.jpg" },
      { id: "svc-3", title: "체중 · 대사 관리", image: "/images/service-3.jpg" },
      { id: "svc-4", title: "갱년기 관리", image: "/images/service-4.jpg" },
    ],
  },
  results: {
    eyebrow: "RESULTS",
    title: "숫자로 증명하는 윔센터의 결과",
    description: "실제 방문하신 분들이 남긴 기록입니다.",
    items: [
      { value: "424", unit: "개", label: "네이버 리뷰 수", note: "네이버 플레이스 누적 방문자 리뷰" },
      { value: "32%", unit: "", label: "평균 체지방 감소율", note: "12주 프로그램 완주 기준" },
      { value: "전 의료진", unit: "", label: "전문의 직접 진료", note: "상담부터 처방까지 의료진이 담당" },
    ],
  },
  reviews: {
    eyebrow: "네이버 리뷰 424개 중에서",
    title: "직접 다녀오신 분들의 이야기",
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
    titleLines: ["나에게 맞는", "다이어트를 찾다"],
    description: "체형과 목표가 다르면 방법도 달라집니다. 윔센터에서 진행한 유형별 코칭 사례입니다.",
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
