/**
 * 감량프로그램 랜딩 — 개선안(NEW) 문구·데이터.
 * 헤더 스위치에서 "개선안"을 고르면 보이는 /diet-program 페이지의 문구는 전부 이 파일에서 수정합니다.
 */

export type DietStep = {
  n: string;
  title: string;
  lead: string;
  desc: string;
  items: { name: string; desc: string }[];
};

export const DIET_NEW_COPY = {
  hero: {
    kicker: "WIM 통합 다이어트 타워",
    titleLines: ["정교한 데이터가 만드는", "나만의 다이어트"],
    description: "체중 감량을 넘어, 대사와 생활 습관까지 함께 만들어가는 프로그램입니다.",
    imageLabel: "히어로 이미지 — 센터 또는 상담 장면",
  },
  problem: {
    kicker: "ALL OF IT, AT ONCE",
    titleLines: ["전부 다른 고민 같지만,", "원인은 하나로 모입니다."],
    description: "이 모든 고민의 원인은 현재의 나를 모르는 것입니다",
    statementLines: ["그래서 현재의 나를 아는 것이", "가장 중요합니다."],
    statementSub: "지금의 나에게 일반적인 다이어트는 통하지 않을 수 있습니다.",
    quizLabel: "13문항으로 내 다이어트 유형을 확인해 보세요",
    quizNote: "· 정식 검사는 WIM-I · WIM-Scale로 따로 진행합니다",
    quizButton: "3분 유형 검사 (무료)",
  },
  diff: {
    eyebrow: "아는 것에서, 실제로 빼는 것까지",
    steps: [
      { step: "STEP 1", title: "나를 아는 것", subLines: ["검사로 원인과", "방향을 확인"] },
      { step: "STEP 2", title: "실제 빼는 것", subLines: ["전략을 짜고", "매일 실행"] },
    ],
    titleLines: ["나를 아는 데서"],
    titleAccent: "멈추지 않습니다.",
    bodyLines: ["원인을 알면 방향이 정해집니다.", "남은 일은 매일 실행하는 것."],
    bodyStrong: "윔은 설계와 실행을 함께 맡습니다.",
  },
  result: {
    badge: "회원 김OO (34) · 실제 기록",
    title: "말 보다는 기록으로 보여드립니다.",
    before: { cap: "BEFORE · 2026.03.02", kg: "68.4kg", slot: "BEFORE 사진" },
    after: { cap: "AFTER · 2026.05.25", kg: "55.1kg", slot: "AFTER 사진" },
    moreLabel: "변화 기록 더 보기",
    stays: {
      kicker: "AND IT STAYS",
      lead: "관리가 끝나도 습관은 남습니다.",
      title: "살이 잘 찌지 않는 몸이 됩니다.",
      body: "식욕이 돌아오는 구간까지 함께 관리해, 관리가 끝난 뒤에도 스스로 유지되는 상태를 만듭니다.",
    },
    curve: { badge: "결과", title: "관리가 끝나도 체중이 돌아오지 않습니다" },
    hexagon: {
      badge: "이유",
      title: "여섯 축을 함께 올렸기 때문입니다",
      cardTitle: "체중만 보지 않고, 여섯 축을 함께 봅니다",
      cardBody: "근육이 함께 빠지면 다시 찝니다. 빠져야 할 것만 빠지도록 관리합니다.",
      legendStart: "시작",
      legendAfter: "관리 후",
    },
  },
  journey: {
    kicker: "THE JOURNEY",
    title: "검사부터 유지까지, 이렇게 흘러갑니다",
    description: "카드를 누르면 각 단계에서 하는 것이 열립니다.",
    detailLabel: "자세히 보기 →",
    modalListLabel: "이 단계에서 하는 것",
    modalCloseLabel: "닫기",
  },
  team: {
    kicker: "YOUR TEAM",
    title: "한 명의 전문가가 아니라, 하나의 팀이 당신의 감량을 설계합니다",
    description: "한 명이 순서대로 붙는 것이 아니라, 세 팀이 처음부터 같은 설계를 씁니다.",
    oneDesign: { kicker: "ONE DESIGN", title: "하나의 프로그램 설계", body: "검사 결과 하나를 세 팀이 함께 읽고, 한 장의 계획으로 정리합니다." },
    coaching: {
      kicker: "COACHING",
      title: "전담 매니저가 끝까지 코칭합니다",
      body: "매니저가 방향을 잡고, 고객이 기록을 남깁니다. 그 기록이 다시 다음 주 방향이 됩니다.",
      managerKicker: "MANAGER",
      managerName: "전담 매니저",
      youKicker: "YOU",
      youName: "고객",
      arrowGive: "방향 제시",
      arrowBack: "기록 전달",
      chips: ["주간 조정", "기록 피드백"],
    },
  },
  manage: {
    kicker: "WHAT WE MANAGE",
    title: "아는 것을 데이터로 확인하며 옮깁니다",
    description: "여덟 가지 중 필요한 것만 조합합니다.",
    detailLabel: "자세히 보기 →",
    modalCloseLabel: "닫기",
  },
  reviews: {
    kicker: "REVIEWS",
    title: "218명이 4.9점을 줬습니다.",
    description: "끝까지 함께한 분들의 평가입니다.",
    ratingKicker: "AVERAGE RATING",
    rating: "4.9",
    ratingSub: "/ 5.0",
    ratingNote: "218건 · 완주 회원 평가",
  },
  plans: {
    kicker: "PLANS & PRICING",
    title: "당신에게 맞는 프로그램을 찾아보세요.",
    descriptionLines: ["가격은 진단에서 나옵니다.", "필요 없는 관리를 더하지 않기 위해서입니다."],
    featuredBadge: "가장 많이 선택",
    optionLabel: "옵션",
    swipeHint: "옆으로 넘겨 세 플랜을 비교하세요",
    promoButton: "프로모션 혜택 확인하기",
  },
  faq: {
    kicker: "FAQ",
    title: "자주 묻는 질문",
  },
  cta: {
    titleLines: ["평생을 생각하면,", "아깝지 않습니다"],
    description: "먼저 유형 검사로 방향부터 확인해보세요.",
    primaryButton: "3분 다이어트 유형 검사 (무료)",
    secondaryButton: "프로그램 문의",
  },
  footer: {
    brandKo: "윔센터",
    brandEn: "WIM CENTER",
    copyright: "© 2026 WIM CENTER. All rights reserved.",
  },
} as const;

export const DIET_WORRIES = [
  "저녁만 되면 무너져요", "주말이면 다 무너져요", "회식이 너무 잦아요", "밤에 잠이 얕아요",
  "아무리 운동해도 안 빠져요", "나에게 맞는 식단을 모르겠어요", "식욕 조절이 잘 안 돼요",
  "매번 요요가 와서 힘들어요", "어디서부터 시작할지 모르겠어요", "체계적인 관리가 필요해요",
  "건강검진 수치가 걱정돼요", "약 없이 관리하고 싶어요", "혼자서는 못 하겠어요",
] as const;

export const DIET_METRICS = [
  { label: "체지방률", value: "34.8% → 24.1%" },
  { label: "골격근량", value: "22.1kg → 22.4kg" },
  { label: "허리둘레", value: "86cm → 70cm" },
] as const;

export const DIET_ROADMAP: DietStep[] = [
  {
    n: "1", title: "검사 및 분석", lead: "나를 데이터로 확인",
    desc: "여섯 가지 검사로 기질부터 몸 상태까지 확인하고, 결과를 종합해 방향을 정합니다.",
    items: [
      { name: "01 개인 성향 분석 (WIM-I)", desc: "같은 식단을 줘도 무너지는 지점은 사람마다 다릅니다. 기질을 먼저 알면 “참으세요”라고 말하지 않아도 되는 방식을 고를 수 있습니다." },
      { name: "02 생활 패턴 분석 (WIM-S)", desc: "하루의 어디가 무너지는지 모르면 계획은 매번 처음부터 시작됩니다. 다섯 축을 함께 그려야 바꿀 한 지점을 정할 수 있습니다." },
      { name: "03 체성분 분석 (인바디)", desc: "체중은 결과일 뿐입니다. 무엇이 빠져야 하고 무엇을 지켜야 하는지는 몸의 구성이 알려줍니다." },
      { name: "04 비만유전자 검사", desc: "노력의 방향을 정하는 정보입니다. 타고난 조건을 알면 나에게 무리인 방식을 처음부터 걸러낼 수 있습니다." },
      { name: "05 자율신경 · 스트레스 측정", desc: "스트레스는 참는 문제가 아니라 몸에 남는 문제입니다. 자율신경 상태를 보면 왜 잠이 얕고 식욕이 몰리는지가 숫자로 드러납니다." },
      { name: "06 자세 움직임 분석", desc: "지금 할 수 있는 강도에서 시작해야 이어집니다. 체력과 통증을 먼저 재고 나면 운동은 부담이 아니라 계획이 됩니다." },
    ],
  },
  {
    n: "2", title: "관리", lead: "전문가가 생활을 바꿈",
    desc: "검사 결과에 따라 필요한 관리만 조합합니다.",
    items: [
      { name: "01 주간 체성분 분석", desc: "매주 같은 사람이 같은 기록을 이어서 봅니다. 이번 주에 무너진 지점을 확인하고 다음 주 실천 기준을 조정합니다." },
      { name: "02 주 3회 맞춤 피드백", desc: "매일의 기록이 다음 피드백의 근거가 됩니다. 특히 혈당은 CGM으로 추적해, 먹을 때마다의 반응에서 무너지는 지점을 데이터로 찾습니다." },
      { name: "03 순환 · 대사 케어", desc: "감량 중에는 피로와 부종이 루틴을 먼저 무너뜨립니다. 회복을 관리해 근손실을 줄이고, 지금 만든 습관이 몸에 정착하도록 돕습니다." },
      { name: "04 맞춤 영양교육", desc: "외우는 지식이 아니라 오늘 저녁에 바로 쓰는 기준을 배웁니다. 내 혈당 반응을 기준으로 식단을 조정합니다." },
      { name: "05 맞춤 운동 솔루션", desc: "지금의 체력과 통증 여부를 기준으로 정합니다. 집·회사·헬스장 중 실제로 할 수 있는 곳에서, 근육을 지키는 강도로 시작합니다." },
      { name: "06 수면 패턴 분석", desc: "잠은 의지로 만들 수 없습니다. 할 수 있는 것은 잠이 올 조건을 만드는 것입니다. 수면일지로 수면효율을 재고, 그 숫자에 맞춰 잠자리 시각을 정합니다." },
      { name: "07 맞춤 영양 솔루션", desc: "개인의 식습관과 감량 목표를 고려해 일상에서 활용할 수 있는 푸드 솔루션을 제안합니다." },
      { name: "08 혈당 데이터 분석", desc: "CGM으로 일상 속 혈당 변화를 확인하고, 혈당 그래프와 식사 기록을 함께 분석해 나의 식사와 혈당 반응을 이해할 수 있도록 돕습니다." },
    ],
  },
  {
    n: "3", title: "유지", lead: "끝나도 관리는 이어짐",
    desc: "다시 점검하며 스스로 관리할 기준을 남깁니다.",
    items: [
      { name: "종료 후 정기 추적 체크", desc: "관리가 끝난 뒤에도 일정 간격으로 다시 재서, 습관이 유지되고 있는지 확인합니다." },
      { name: "흔들릴 때 다시 잡는 애프터케어", desc: "식욕이 돌아오는 구간에서 혼자 버티지 않도록, 필요한 시점에 다시 개입합니다." },
      { name: "여섯 축 기준으로 재점검", desc: "체중 하나가 아니라 근육·대사량·활동량·수면까지 함께 보고 어디가 밀렸는지 찾습니다." },
      { name: "몸에 익은 습관으로 유지", desc: "관리 기간에 만든 기준이 생활에 남아, 애쓰지 않아도 유지되는 상태를 목표로 합니다." },
    ],
  },
];

export const DIET_TEAM = [
  { kicker: "MEDICAL", name: "의료진", role: "내분비내과 · 정신건강의학과 · 재활의학과", note: "의학적 판단과 처방" },
  { kicker: "NUTRITION", name: "임상영양사 팀", role: "혈당 반응과 식사 구성 설계", note: "대학병원 출신" },
  { kicker: "EXERCISE", name: "운동처방사 팀", role: "체력과 통증 기준의 운동 설계", note: "연예인 및 운동선수 다수 관리" },
] as const;

export const DIET_METHODS = [
  { title: "변화 데이터 분석", desc: "이번 주 무너진 지점을 확인하고, 다음 주 기준을 조정합니다." },
  { title: "주 3회 맞춤 피드백", desc: "매일의 기록이 다음 피드백의 근거가 됩니다." },
  { title: "맞춤 영양교육", desc: "외우는 지식이 아니라, 오늘 저녁에 쓰는 기준을 배웁니다." },
  { title: "맞춤 운동 솔루션", desc: "지금 체력에서, 실제로 할 수 있는 곳에서 시작합니다." },
  { title: "순환·대사 케어", desc: "피로와 부종을 먼저 풀어, 루틴이 끊기지 않게 합니다." },
  { title: "수면 패턴 분석", desc: "수면효율을 재고, 그 숫자에 맞춰 잠자리 시각을 정합니다." },
  { title: "혈당 데이터 분석", desc: "음식에 대한 내 몸의 반응을 봅니다." },
  { title: "맞춤 영양 솔루션", desc: "오늘 먹을 한 끼를 정해 드립니다." },
] as const;

export const DIET_REVIEWS = [
  { body: "먹는 순서를 바꿨더니, 배고픈 날 없이 체지방이 먼저 빠졌어요.", author: "40대 · 남 · 직장인" },
  { body: "사진만 올리면 다 읽어주셨어요. 검색하며 고민할 시간이 없어졌습니다.", author: "30대 · 여 · 워킹맘" },
  { body: "혈당 그래프를 보니 저녁에 무너진 이유가 보였어요. 참는 대신 바꿨습니다.", author: "50대 · 여 · 요요 반복형" },
  { body: "근육은 지키고 지방만 빠지는 게 눈으로 보였습니다.", author: "40대 · 남 · 데이터 공개 케이스" },
] as const;

export const DIET_RATING_BARS = [
  { label: "매니저 관리", score: "4.97" },
  { label: "식단 만족도", score: "4.88" },
  { label: "재추천 의향", score: "4.91" },
] as const;

export const DIET_PLANS = [
  { name: "Wellness Lite", subtitle: "비대면 관리 프로그램", target: "혼자서도 어느 정도 되는데, 방향과 점검이 필요한 분", priceLabel: "상담 후 플랜 안내", priceValue: "진단 기반 견적", cta: "상담으로 확인" },
  { name: "Wellness", subtitle: "대면 관리 프로그램", target: "이번엔 제대로, 사람과 함께 바꾸고 싶은 분", priceLabel: "8월 프로모션 적용 · 6주", priceValue: "진단 후 견적", cta: "이 플랜으로 상담" },
  { name: "Wellness Signature", subtitle: "대면 관리 프로그램", target: "BMI 30 이상, 요요가 반복돼온 분 — 가장 촘촘한 관리", priceLabel: "상담 후 플랜 안내", priceValue: "진단 기반 견적", cta: "상담으로 확인" },
] as const;

export const DIET_PLAN_FEATURES = ["WIM-I · WIM-Scale 정식 검사", "전용 웰니스 앱 제공", "비대면 피드백", "영양 교육", "혈당 추적", "운동 처방", "대면 피드백", "기기 관리", "수면 관리 3회기"] as const;

export const DIET_PLAN_STATES: Record<string, ReadonlyArray<"on" | "off" | "option">> = {
  "Wellness Signature": ["on", "on", "on", "on", "on", "on", "on", "on", "on"],
  Wellness: ["on", "on", "on", "on", "off", "on", "on", "on", "on"],
  "Wellness Lite": ["off", "on", "on", "off", "on", "off", "off", "option", "option"],
};

export const DIET_FAQ = [
  { q: "굶어야 하나요?", a: "아닙니다. 먹는 양보다 먹는 순서와 시간을 먼저 바꿉니다. 혈당 곡선을 보며 내 몸이 반응하는 지점을 찾고, 지속 가능한 식사 구성을 함께 설계합니다." },
  { q: "운동을 정말 못하는데 가능한가요?", a: "가능합니다. 시작은 활동량 회복부터입니다. 헬스장 없이 하루 걸음 수와 생활 동작을 조정하고, 준비가 되면 강도를 올립니다." },
  { q: "다이어트 주사(GLP-1) 맞고 있는데 병행되나요?", a: "병행 가능합니다. 다만 투약 여부와 용량은 진단 단계에서 확인하고, 근육 손실과 식욕 변화를 함께 추적하며 관리 강도를 조정합니다. 의료적 판단이 필요한 부분은 의료진 확인을 우선합니다." },
  { q: "끝나면 다시 찌지 않을까요?", a: "그래서 종료 후 애프터케어가 프로그램 안에 들어 있습니다. 정기 추적 체크로 습관이 유지되는지 확인하고, 흔들릴 때 다시 잡습니다." },
  { q: "시간이 정말 없는데 할 수 있을까요?", a: "기록은 사진 몇 장이면 됩니다. 계산도 검색도 필요 없고, 데이터를 읽는 일은 전담 매니저가 대신합니다. 비대면 플랜은 방문 없이 진행됩니다." },
  { q: "비용이 부담됩니다.", a: "진단 결과에 따라 필요한 관리만 담기 때문에, 플랜은 상담에서 조정됩니다. 환불 규정도 계약 전에 문서로 먼저 안내드립니다." },
] as const;
