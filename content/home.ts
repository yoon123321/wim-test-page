/** 홈(/) 문구와 카드 데이터 (E안). 이 블록에서 문구를 직접 수정할 수 있습니다. */
export const HOME_CONTENT_E = {
  hero: {
    eyebrow: "WIM CENTER",
    title: "살이 찌는 이유는 모두 다 다른데, \n방법이 같을 수는 없습니다",
    description: "나만의 위해 설계하는 단하나의 다이어트",
    primaryButton: "",
    secondaryButton: "",
    imageDescription: "메인 히어로 이미지",
  },
  about: {
    eyebrow: "나는 왜 항상 다이어트에 실패할까?",
    title: "윔은 감량 이전에 먼저 \n‘나’를 깊이 있게 알아봅니다",
    description:
      "이러한 환경 속에서 내분비내과, 정신건강의학과 의료진이  설계한 프로그램으로 영양 운동 생활 습관을 전문 인력이 관리하여 살찌지 않는 몸으로 만들어 드립니다",
    tags: ["1:1 감량 상담", "정밀 체성분 분석", "생활 패턴 맞춤 코칭"],
    buttonLabel: "상담 신청하기",
    image: "/images/home-consultation.jpg",
    imageAlt: "코치와 회원이 마주 앉아 상담하는 모습",
  },
  services: {
    title: "나를 위한 다이어트, \n이렇게 설계합니다",
    description: "",
    buttonLabel: "더 알아보기",
    modal: {
      placeholder: "상세 내용이 들어갈 자리입니다.",
      closeLabel: "모달 닫기",
    },
    items: [
      { id: "svc-1", title: "대면 관리", desc: "건강과 감량을 위한 집중 관리", image: "/images/service-1.jpg" },
      { id: "svc-2", title: "비대면 관리", desc: "바쁜 일상 속에서도 놓치지 않는 꾸준한 관리", image: "/images/service-2.jpg" },
      { id: "svc-3", title: "기기 관리", desc: "지치고 무너진 컨디션을 되살리는 부스터 관리", image: "/images/service-2.jpg" },
    ],
  },
  results: {
    eyebrow: "RESULTS",
    title: "말보다 숫자로 보여 드리곘습니다",
    description: "",
    items: [
      { value: "4.91", unit: "", label: "네이버 고객 평점", note: "" },
      { value: "4.97", unit: "", label: "매니저 만족도", note: "" },
      { value: "4.73", unit: "", label: "프로그램 만족도", note: "" },
      { value: "4.6", unit: "", label: "기기관리 만족도", note: " " },
    ],
  },
  reviews: {
    eyebrow: "REVIEWS",
    title: "고객이 직접 경험하고 평가한 윔센터 강남",
    description: "네이버와 블로그 속 진짜 목소리를 확인하세요.",
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
    titleLines: ["당신에게 맞는 프로그램을 \n제안합니다"],
    description: "목표와 몸 상태에 따라, \n서로 다른 프로그램을 제안합니다.",
    items: [
      { id: "case-1", title: "웰니스 프로그램", meta: "식단과 생활 습관을 중심으로, 체중과 체형의 변화를 세심하게 관리하는 프로그램입니다.", image: "/images/case-1.jpg", href: "/wireframe-1" },
      { id: "case-2", title: "닥터 윔 비대면 프로그램", meta: "크라이오테라피, 인프라레드, 고압산소챔버 등 회복 전문 테크를 그날의 컨디션에 맞춰 조합합니다. ", image: "/images/case-2.jpg", href: "/page-single" },
      { id: "case-3", title: "롱제비티케어", meta: "크라이오테라피, 인프라레드, 고압산소챔버 등 회복 전문 테크를 그날의 컨디션에 맞춰 조합합니다. ", image: "/images/case-2.jpg", href: "/page-single" },
    ],
  },
  cta: {
    titleLines: ["나만을 위한 감량 솔루션을 찾아 보세요"],
    description: "",
    buttonLabel: "상담 신청",
  },
  footer: {
    brand: "윔센터 WIM CENTER",
    copyright: "© 2026 WIM CENTER. All rights reserved.",
  },
} as const;

/** 홈 "STEP 01 · 검사" 섹션(HomeDiagnostics) 문구와 카드 데이터 */
export const HOME_DIAGNOSTICS = {
  step: "STEP 01 · 검사",
  title: "나만의 다이어트 전략을 위한 검사",
  detailLabel: "자세히 보기 →",
  modal: {
    closeLabel: "검사 상세 닫기",
    note: "검사 결과를 바탕으로 현재 상태와 생활 패턴을 확인하고, 무리 없이 지속할 수 있는 감량 방향을 함께 설계합니다.",
  },
  items: [
    { number: "01", badge: "WIM-I", caption: "6축 기질 분포", title: "기질과 성향", description: "내가 무너지는 순간을 찾습니다", visual: "radar" },
    { number: "02", badge: "WIM-S", caption: "생활 5축 기록", title: "현재 생활 습관", description: "하루 중 새는 지점을 찾습니다", visual: "bars" },
    { number: "03", badge: "인바디", caption: "체성분 구성", title: "현재 몸 상태", description: "뺄 것과 지킬 것을 나눕니다", visual: "body" },
    { number: "04", badge: "시그니처", caption: "유전 정보", title: "타고난 유전자", description: "나에게 무리인 방식을 걸러냅니다", visual: "dna" },
    { number: "05", badge: "CGM", caption: "식후 혈당 곡선", title: "혈당 변화", description: "내 몸이 반응하는 음식을 찾습니다", visual: "curve" },
    { number: "06", badge: "운동 리포트", caption: "체력 지표", title: "현재 체력", description: "지금 가능한 강도를 정합니다", visual: "gauge" },
  ],
} as const;

/** 홈 "STEP 02 · 관리" 섹션(HomeManagement) 문구와 카드 데이터 */
export const HOME_MANAGEMENT = {
  step: "STEP 02 · 관리",
  title: "맞춤 설계로 이렇게 관리합니다",
  swipeHint: "옆으로 넘겨 관리 방식을 확인하세요",
  prevAriaLabel: "이전 카드",
  nextAriaLabel: "다음 카드",
  detailLabel: "자세히 보기 →",
  items: [
    { number: "01", badge: "대면", caption: "주차별 조정 흐름", title: "대면 관리", description: "매주 만나 계획을 다시 맞춥니다", visual: "timeline" },
    { number: "02", badge: "비대면 · 앱", caption: "앱 기록 · 혈당 추적", title: "비대면 관리", description: "매일의 기록을 앱으로 봅니다", visual: "app" },
    { number: "03", badge: "기기", caption: "피로 · 회복 곡선", title: "기기 관리", description: "피로와 부종을 먼저 풀어줍니다", visual: "recovery" },
    { number: "04", badge: "영양", caption: "탄단지 구성", title: "영양 교육", description: "오늘 저녁에 쓸 기준을 배웁니다", visual: "nutrition" },
    { number: "05", badge: "운동", caption: "개인별 운동 가이드", title: "운동 교육", description: "내 몸에 맞는 운동 기준을 배웁니다", visual: "maintain" },
  ],
} as const;

/* ================================================================
 * ▼ 개선안(NEW) — 헤더 스위치에서 "개선안"을 고르면 아래 블록이 보입니다.
 *   지금은 위 기존안과 동일한 복사본이니, 바꿀 문구는 여기서만 수정하세요.
 * ================================================================ */

/** 홈(/) 문구와 카드 데이터 — 개선안(NEW) */
export const HOME_CONTENT_NEW = {
  hero: {
    eyebrow: "WIM CENTER",
    title: "살이 찌는 이유는 모두 다 다른데, \n방법이 같을 수는 없습니다",
    description: "나만의 위해 설계하는 단하나의 다이어트",
    primaryButton: "",
    secondaryButton: "",
    imageDescription: "메인 히어로 이미지",
  },
  about: {
    eyebrow: "나는 왜 항상 다이어트에 실패할까?",
    title: "윔은 감량 이전에 먼저 \n‘나’를 깊이 있게 알아봅니다",
    description:
      "우리는 이미 살이 찔 수밖에 없는 환경에서 살고 있습니다. \n같은 방법이 통하지 않았던 이유를 먼저 확인합니다.",
    tags: [],
    buttonLabel: "상담 신청하기",
    image: "/images/home-consultation.jpg",
    imageAlt: "코치와 회원이 마주 앉아 상담하는 모습",
  },
  services: {
    title: "의료진이 정밀하게 진단해 \n나에게 딱 맞는 방법을 설계하고,전문 관리사가 \n감량의 전 과정을 끝까지 케어합니다",
    description: "",
    buttonLabel: "더 알아보기",
    modal: {
      placeholder: "상세 내용이 들어갈 자리입니다.",
      closeLabel: "모달 닫기",
    },
    items: [
      { id: "svc-1", title: "대면 관리", desc: "건강과 감량을 위한 집중 관리", image: "/images/service-1.jpg" },
      { id: "svc-2", title: "비대면 관리", desc: "바쁜 일상 속에서도 놓치지 않는 꾸준한 관리", image: "/images/service-2.jpg" },
      { id: "svc-3", title: "기기 관리", desc: "지치고 무너진 컨디션을 되살리는 부스터 관리", image: "/images/service-2.jpg" },
    ],
  },
  results: {
    eyebrow: "RESULTS",
    title: "말보다 숫자로 보여 드리곘습니다",
    description: "",
    items: [
      { value: "4.91", unit: "", label: "네이버 고객 평점", note: "" },
      { value: "4.97", unit: "", label: "매니저 만족도", note: "" },
      { value: "4.73", unit: "", label: "프로그램 만족도", note: "" },
      { value: "4.6", unit: "", label: "기기관리 만족도", note: " " },
    ],
  },
  reviews: {
    eyebrow: "REVIEWS",
    title: "고객이 직접 경험하고 평가한 윔센터 강남",
    description: "네이버와 블로그 속 진짜 목소리를 확인하세요.",
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
    titleLines: ["당신에게 맞는 프로그램을 \n제안합니다"],
    description: "목표와 몸 상태에 따라, \n서로 다른 프로그램을 제안합니다.",
    items: [
      { id: "case-1", title: "웰니스 프로그램", meta: "식단과 생활 습관을 중심으로, 체중과 체형의 변화를 세심하게 관리하는 프로그램입니다.", image: "/images/case-1.jpg", href: "/wireframe-1" },
      { id: "case-2", title: "닥터 윔 비대면 프로그램", meta: "크라이오테라피, 인프라레드, 고압산소챔버 등 회복 전문 테크를 그날의 컨디션에 맞춰 조합합니다. ", image: "/images/case-2.jpg", href: "/page-single" },
      { id: "case-3", title: "롱제비티케어", meta: "크라이오테라피, 인프라레드, 고압산소챔버 등 회복 전문 테크를 그날의 컨디션에 맞춰 조합합니다. ", image: "/images/case-2.jpg", href: "/page-single" },
    ],
  },
  cta: {
    titleLines: ["나만을 위한 감량 솔루션을 찾아 보세요"],
    description: "",
    buttonLabel: "상담 신청",
  },
  footer: {
    brand: "윔센터 WIM CENTER",
    copyright: "© 2026 WIM CENTER. All rights reserved.",
  },
} as const;

/** 홈 "STEP 01 · 검사" 섹션 — 개선안(NEW) */
export const HOME_DIAGNOSTICS_NEW = {
  step: "STEP 01 · 검사",
  title: "나만의 다이어트 전략을 위한 검사",
  detailLabel: "자세히 보기 →",
  modal: {
    closeLabel: "검사 상세 닫기",
    note: "검사 결과를 바탕으로 현재 상태와 생활 패턴을 확인하고, 무리 없이 지속할 수 있는 감량 방향을 함께 설계합니다.",
  },
  items: [
    { number: "01", badge: "WIM-I", caption: "6축 기질 분포", title: "기질과 성향", description: "내가 무너지는 순간을 찾습니다", visual: "radar" },
    { number: "02", badge: "WIM-S", caption: "생활 5축 기록", title: "현재 생활 습관", description: "하루 중 새는 지점을 찾습니다", visual: "bars" },
    { number: "03", badge: "인바디", caption: "체성분 구성", title: "현재 몸 상태", description: "뺄 것과 지킬 것을 나눕니다", visual: "body" },
    { number: "04", badge: "시그니처", caption: "유전 정보", title: "타고난 유전자", description: "나에게 무리인 방식을 걸러냅니다", visual: "dna" },
    { number: "05", badge: "CGM", caption: "식후 혈당 곡선", title: "혈당 변화", description: "내 몸이 반응하는 음식을 찾습니다", visual: "curve" },
    { number: "06", badge: "운동 리포트", caption: "체력 지표", title: "현재 체력", description: "지금 가능한 강도를 정합니다", visual: "gauge" },
  ],
} as const;

/** 홈 "STEP 02 · 관리" 섹션 — 개선안(NEW) */
export const HOME_MANAGEMENT_NEW = {
  step: "STEP 02 · 관리",
  title: "맞춤 설계로 이렇게 관리합니다",
  swipeHint: "옆으로 넘겨 관리 방식을 확인하세요",
  prevAriaLabel: "이전 카드",
  nextAriaLabel: "다음 카드",
  detailLabel: "자세히 보기 →",
  items: [
    { number: "01", badge: "대면", caption: "주차별 조정 흐름", title: "대면 관리", description: "매주 만나 계획을 다시 맞춥니다", visual: "timeline" },
    { number: "02", badge: "비대면 · 앱", caption: "앱 기록 · 혈당 추적", title: "비대면 관리", description: "매일의 기록을 앱으로 봅니다", visual: "app" },
    { number: "03", badge: "기기", caption: "피로 · 회복 곡선", title: "기기 관리", description: "피로와 부종을 먼저 풀어줍니다", visual: "recovery" },
    { number: "04", badge: "영양", caption: "탄단지 구성", title: "영양 교육", description: "오늘 저녁에 쓸 기준을 배웁니다", visual: "nutrition" },
    { number: "05", badge: "운동", caption: "개인별 운동 가이드", title: "운동 교육", description: "내 몸에 맞는 운동 기준을 배웁니다", visual: "maintain" },
  ],
} as const;
