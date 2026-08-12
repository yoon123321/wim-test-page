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
    title: "나를 위한 다이어트, 이렇게 설계합니다",
    description: "검사부터 관리까지, 오직 한 사람에게 집중하는 과정입니다.",
    buttonLabel: "더 알아보기",
    modal: {
      placeholder: "상세 내용이 들어갈 자리입니다.",
      closeLabel: "모달 닫기",
    },
    items: [
      { id: "svc-1", title: "감량 상담", desc: "근육량, 체지방률, 대사량까지 세밀하게 확인합니다.", image: "/images/service-1.jpg" },
      { id: "svc-2", title: "데이터 기질검사", desc: "검사 결과를 근거로, 당신에게 맞는 방향을 데이터로 제시합니다.", image: "/images/service-2.jpg" },
      { id: "svc-3", title: "기기 관리", desc: "내분비내과·정신건강의학과 전문의와 1:1로 마주 앉아, 실현 가능한 목표를 함께 정합니다.", image: "/images/service-1.jpg" },
      { id: "svc-4", title: "감량 후 유지 상담", desc: "영양·운동·생활습관을 전담 인력이 당신의 몸과 생활에 맞춰 밀착 관리합니다.", image: "/images/service-2.jpg" },
    ],
  },
  results: {
    eyebrow: "RESULTS",
    title: "신뢰할 수 있는 숫자, 윔센터 강남",
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
    title: "먼저 경험하신 분들의 이야기",
    description: "윔센터를 통해 나만의 관리를 시작한 고객님들의 감량 스토리를 확인하세요.",
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
    titleLines: ["당신에게 맞는 프로그램을", "제안합니다"],
    description: "목표와 몸 상태에 따라, 서로 다른 프로그램을 제안합니다.",
    items: [
      { id: "case-1", title: "감량 프로그램", meta: "식단과 생활 습관을 중심으로, 체중과 체형의 변화를 세심하게 관리하는 프로그램입니다.", image: "/images/case-1.jpg", href: "/wireframe-1" },
      {
        id: "case-2",
        title: "롱제비티 케어 프로그램",
        meta: "크라이오테라피, 인프라레드, 고압산소챔버 등 회복 전문 테크를 그날의 컨디션에 맞춰 조합합니다. 정해진 코스를 반복하지 않고 방문할 때마다 다시 설계해, 체중뿐 아니라 붓기·피로까지 함께 관리합니다.",
        image: "/images/case-2.jpg",
        href: "/page-single",
      },
    ],
  },
  cta: {
    titleLines: ["지금, 당신의 몸 상태부터 확인하세요", ""],
    description: "정확한 진단이 \n나를 위한 다이어트의 시작입니다.",
    buttonLabel: "상담 신청",
  },
  footer: {
    brand: "윔센터 WIM CENTER",
    copyright: "© 2026 WIM CENTER. All rights reserved.",
  },
} as const;

/**
 * 홈(/) B 테스트 문구.
 * A안과 완전히 동일한 구조로 시작합니다. 헤더 A/B 토글로 전환되며,
 * 아래 값 중 다르게 테스트할 문구만 고쳐 쓰면 됩니다.
 */
export const HOME_CONTENT_B = {
  hero: {
    eyebrow: "WIM CENTER",
    title: "모든 몸에는 저마다의 답이 있으니까.",
    description: "전문의가 직접 설계한 프로그램으로 \n전신 케어부터 지속 가능한 감량을 만들어냅니다.",
    primaryButton: "",
    secondaryButton: "",
    imageDescription: "메인 히어로 이미지",
  },
  about: {
    eyebrow: "PERSONALIZED DIET COACHING",
    titleLines: ["내 몸에 딱 맞춘 정밀 분석 솔루션"],
    description: "체질과 수면, 생활 패턴까지 분석하여 \n나에게 꼭 필요한 회복과 감량 루틴을 완성합니다.",
    tags: ["1:1 감량 상담", "정밀 체성분 분석", "생활 패턴 맞춤 코칭"],
    buttonLabel: "상담 신청하기",
    image: "/images/home-consultation.jpg",
    imageAlt: "코치와 회원이 마주 앉아 상담하는 모습",
  },
  services: {
    title: "내 몸의 답을 찾는 3가지 전문 케어 솔루션",
    description: "",
    buttonLabel: "더 알아보기",
    modal: {
      placeholder: "상세 내용이 들어갈 자리입니다.",
      closeLabel: "모달 닫기",
    },
    items: [
      { id: "svc-1", title: "감량 프로그램", desc: "습관을 바꿔 계속 유지되는 감량", image: "/images/service-1.jpg" },
      { id: "svc-2", title: "올인원 기기 패키지", desc: "회복부터 컨디션까지 한 번에", image: "/images/service-2.jpg" },
      { id: "svc-3", title: "GLP-1 요요 방지 프로그램", desc: "단약 후에도 오래 유지하기", image: "/images/service-1.jpg" },
    ],
  },
  results: {
    eyebrow: "RESULTS",
    title: "숫자로 확인하는 윔센터 만족도",
    description: "윔센터의 공식 평점 데이터",
    items: [
      { value: "4.91", unit: "명", label: "네이버 고객 평점", note: "" },
      { value: "4.97", unit: "", label: "매니저 만족도", note: "" },
      { value: "4.73%", unit: "", label: "프로그램 만족도", note: "" },
      { value: "4.6", unit: "", label: "기기 관리 만족도", note: "" },
    ],
  },
  reviews: {
    eyebrow: "reviews",
    title: "직접 경험하신 분들의 이야기",
    description: "",
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
    description: "내가 살이 찌는 이유, 내가 다이어트에 실패하는 이유는 무엇일까요?. 간단한 검사로 나의 다이어트 기질과 생활 습관을 확인해보세요! ",
    items: [
      { id: "case-1", title: "감량 프로그램", meta: "체지방 감량 · 체중 관리", image: "/images/case-1.jpg", href: "/wireframe-1" },
      { id: "case-2", title: "기기관리 프로그램", meta: "전문 기기 체형 · 대사 관리", image: "/images/case-2.jpg", href: "/page-single" },
    ],
  },
  cta: {
    titleLines: ["나에게 맞는 케어가 궁금하다면"],
    description: "전신 컨디션 케어부터 지속 가능한 감량까지, 윔센터가 함께합니다.",
    buttonLabel: "상담 신청",
  },
  footer: {
    brand: "윔센터 WIM CENTER",
    copyright: "© 2026 WIM CENTER. All rights reserved.",
  },
} as const;

/**
 * 홈(/) C 테스트 문구.
 * A안과 완전히 동일한 구조로 시작합니다. 헤더 A/B/C 토글로 전환되며,
 * 아래 값 중 다르게 테스트할 문구만 고쳐 쓰면 됩니다.
 */
export const HOME_CONTENT_C = {
  hero: {
    eyebrow: "WIM CENTER",
    title: "의사가 설계하고,전문 인력이 끝까지 관리 합니다",
    description: "살을 빼는 방법보다, 왜  살이  빠지지 않는지 부터 봅니다",
    primaryButton: "",
    secondaryButton: "",
    imageDescription: "메인 히어로 이미지",
  },
  about: {
    eyebrow: "PERSONALIZED DIET COACHING",
    titleLines: ["당신의 다이어트가 자꾸 실패하는 이유,", "의지가 부족해서가 아닙니다"],
    description: "윔센터 강남은 체중만 보지 않습니다. \n‘다이어트 기질, 자기조절력, 식생활 습관을 함께 분석해\n나에게 맞는 감량 방법을 찾아드립니다.",
    tags: ["1:1 감량 상담", "정밀 체성분 분석", "생활 패턴 맞춤 코칭"],
    buttonLabel: "상담 신청하기",
    image: "/images/home-consultation.jpg",
    imageAlt: "코치와 회원이 마주 앉아 상담하는 모습",
  },
  services: {
    title: "윔센터 강남의 관리는 하나로 정해져 있지 않습니다",
    description: "",
    buttonLabel: "더 알아보기",
    modal: {
      placeholder: "상세 내용이 들어갈 자리입니다.",
      closeLabel: "모달 닫기",
    },
    items: [
      { id: "svc-1", title: "감량  목적", desc: "체중만 줄이는 다이어트가 아니라 내 몸의 문제를 찾고, 감량이 지속 될 수 있도록 ", image: "/images/service-1.jpg" },
      { id: "svc-2", title: "유지/컨디셔닝이 목적", desc: "무저진 몸의 컨디션을 회복하고 꾸준히 관리 할 수 있는 환경을 만들어드립니다", image: "/images/service-2.jpg" },
    ],
  },
  results: {
    eyebrow: "RESULTS",
    title: "말보다 숫자로 보여 드리곘습니다",
    description: "",
    items: [
      { value: "4.91", unit: "", label: "네이버 고객 평점", note: "" },
      { value: "32%", unit: "", label: "매니저 만족도", note: "" },
      { value: "4.73", unit: "", label: "프로그램 만족도", note: "" },
      { value: "4.6", unit: "", label: "기기 관리 만족도", note: " " },
    ],
  },
  reviews: {
    eyebrow: "reviews",
    title: "고객이 직접 경험하고 평가한  윔센터 강남",
    description: "",
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
    titleLines: ["프로그램 시작 전 ", "먼저 나부터 알아보세요"],
    description: "내가 살이 찌는 이유,\n내가 다이어트에 실패하는 이유는 무엇일까요?\n\n간단한 검사로 나의 다이어트 기질과 생활 습관을 확인해보세요! ",
    items: [
      { id: "case-1", title: "감량 프로그램", meta: "식단과 생활 습관을 중심으로, 체중과 체형의 변화를 세심하게 관리하는 프로그램입니다.", image: "/images/case-1.jpg", href: "/wireframe-1" },
      {
        id: "case-2",
        title: "롱제비티 케어 프로그램",
        meta: "크라이오테라피, 인프라레드, 고압산소챔버 등 회복 전문 테크를 그날의 컨디션에 맞춰 조합합니다. 정해진 코스를 반복하지 않고 방문할 때마다 다시 설계해, 체중뿐 아니라 붓기·피로까지 함께 관리합니다.",
        image: "/images/case-2.jpg",
        href: "/page-single",
      },
    ],
  },
  cta: {
    titleLines: ["지금, 당신의 몸 상태부터 확인하세요", ""],
    description: "정확한 진단이 \n나를 위한 다이어트의 시작입니다.",
    buttonLabel: "상담 신청",
  },
  footer: {
    brand: "윔센터 WIM CENTER",
    copyright: "© 2026 WIM CENTER. All rights reserved.",
  },
} as const;
