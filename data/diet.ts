/**
 * 감량프로그램 랜딩 — 버전1 문구·데이터.
 * 헤더 스위치에서 "버전1"을 고르면 보이는 /diet-program 페이지의 문구는 전부 이 파일에서 수정합니다.
 */

export const DIET_COPY = {
  hero: {
    eyebrow: "WIM 통합 다이어트 타워",
    titleLines: ["감이 아니라, 내 몸의 데이터로", "시작하는 다이어트"],
    sub: "기질·생활 습관·몸 상태까지 검사로 확인하고, 그 결과로 방법을 정합니다.",
    imageLabel: "히어로 이미지 — 센터 또는 상담 장면",
    primaryCta: "1분 유형 검사 (무료)",
    secondaryCta: "프로그램 살펴보기",
  },
  problem: {
    eyebrow: "ALL OF IT, AT ONCE",
    titleLines: ["반복되는 실패에는 공통점이 있습니다.", "‘나’를 모른 채 시작했다는 것."],
    subLines: ["그래서 현재의 나를 아는 것이", "가장 중요합니다."],
    caseIntroLines: [
      "살이 빠지지 않는 이유는 사람마다 다릅니다.",
      "검사에서 자주 나오는 유형을 먼저 보여드립니다.",
    ],
    caseIntroLabel: "자주 나오는 유형",
    ctaLead: "12문항으로 내 유형을 확인해 보세요",
    ctaLabel: "1분 유형 검사 (무료)",
  },
  difference: {
    eyebrow: "아는 것에서, 실제로 빼는 것까지",
    titleLines: ["나를 아는 것에서 그치지 않고,", "내 몸에 맞는 방법으로 실제 감량까지 이어갑니다."],
    bodyLines: ["원인을 알면 방향이 정해집니다.", "남은 일은 매일 실행하는 것.", "윔은 설계와 실행을 함께 맡습니다."],
    steps: [
      { step: "STEP 1", title: "나를 아는 것", descLines: ["검사로 원인과", "방향을 확인"] },
      { step: "STEP 2", title: "실제 빼는 것", descLines: ["전략을 짜고", "매일 실행"] },
    ],
  },
  result: {
    eyebrow: "회원 김OO (34) · 실제 기록",
    title: "말보다, 실제 변화의 기록으로 보여드립니다.",
    before: { label: "BEFORE · 2026.03.02", weight: "68.4kg", imageLabel: "BEFORE 사진" },
    after: { label: "AFTER · 2026.05.25", weight: "55.1kg", imageLabel: "AFTER 사진" },
    metricsLabel: "결과",
    moreLabel: "변화 기록 더 보기",
    keepEyebrow: "AND IT STAYS",
    keepTitleLines: ["관리가 끝나도 습관은 남습니다.", "살이 잘 찌지 않는 몸이 됩니다."],
    keepBody:
      "식욕이 돌아오는 구간까지 함께 관리해, 관리가 끝난 뒤에도 스스로 유지되는 상태를 만듭니다.",
    chart: {
      label: "결과",
      title: "관리가 끝나도 체중이 돌아오지 않습니다",
      endLabel: "관리 종료",
      startLabel: "시작 체중",
      goalLabel: "목표",
      normalLabel: "일반 다이어트 — 다시 원래대로",
      wimLabel: "윔 — 습관이 남아 유지",
      note: "여기서부터가 진짜 관리 구간입니다",
      caption: "체중 곡선 · 관리 종료 지점에서 두 곡선이 갈립니다",
    },
    axes: {
      label: "이유",
      title: "여섯 축을 함께 올렸기 때문입니다",
      cardTitle: "체중만 보지 않고, 여섯 축을 함께 봅니다",
      cardBody: "근육·대사량·활동량·수면이 함께 올라가야 관리가 끝난 뒤에도 그 체중이 유지됩니다.",
      legendStart: "시작",
      legendAfter: "관리 후",
    },
  },
  roadmap: {
    eyebrow: "THE JOURNEY",
    title: "검사부터 관리, 유지까지 하나의 선순환으로 설계합니다",
    description: "나를 먼저 알아야 제대로 뺄 수 있습니다.",
    detailLabel: "자세히 보기 →",
  },
  team: {
    eyebrow: "YOUR TEAM",
    title: "한 명의 전문가가 아닌, 나를 위한 전담팀이 함께합니다",
    oneDesign: {
      eyebrow: "ONE DESIGN",
      title: "하나의 프로그램 설계",
      body: "검사 결과 하나를 세 팀이 함께 읽고, 한 장의 계획으로 정리합니다.",
    },
    coaching: {
      eyebrow: "COACHING",
      title: "전담 매니저가 끝까지 코칭합니다",
      body: "매니저가 방향을 잡고, 고객이 기록을 남깁니다. 그 기록이 다시 다음 주 방향이 됩니다.",
      managerEyebrow: "MANAGER",
      managerName: "전담 매니저",
      youEyebrow: "YOU",
      youName: "고객",
      arrowGive: "방향 제시",
      arrowBack: "기록 전달",
    },
  },
  plans: {
    eyebrow: "PLANS & PRICING",
    title: "지금 나에게 맞는 프로그램을 선택해보세요.",
    descriptionLines: ["가격은 진단에서 나옵니다.", "필요 없는 관리를 더하지 않기 위해서입니다."],
    badge: "가장 많이 선택",
    optionLabel: "옵션",
    swipeHint: "옆으로 넘겨 세 플랜을 비교하세요",
  },
  reviews: {
    eyebrow: "REVIEWS",
    titleLines: ["먼저 경험한 분들의 이야기를 확인해보세요.", "만족도 4.9점"],
    ratingLabel: "AVERAGE RATING",
    ratingValue: "4.9",
    ratingMax: "/ 5.0",
    ratingCount: "218건 · 완주 회원 평가",
  },
  faq: {
    eyebrow: "FAQ",
    title: "자주 묻는 질문",
  },
  contact: {
    titleLines: ["윔센터와 함께라면,", "다이어트는 더 이상 평생 숙제가 아닙니다."],
    description: "먼저 유형 검사로 방향부터 확인해보세요.",
    primaryCta: "1분 다이어트 유형 검사 (무료)",
    secondaryCta: "시그니처 프로그램 문의",
  },
} as const;

/** #problem 마퀴로 흐르는 고민 문구 */
export const DIET_WORRIES = [
  "저녁만 되면 무너져요",
  "주말이면 다 무너져요",
  "회식이 너무 잦아요",
  "밤에 잠이 얕아요",
  "아무리 운동해도 안 빠져요",
  "나에게 맞는 식단을 모르겠어요",
  "식욕 조절이 잘 안 돼요",
  "매번 요요가 와서 힘들어요",
  "어디서부터 시작할지 모르겠어요",
  "체계적인 관리가 필요해요",
  "건강검진 수치가 걱정돼요",
  "약 없이 관리하고 싶어요",
  "혼자서는 못 하겠어요",
] as const;

export type DietCaseRow = {
  label: string;
  /** 낮음 · 중간 · 높음 같은 판정값 */
  value: string;
  /** 막대 채움 비율 (%) */
  percent: number;
  /** 과잉이 아니라 결핍인 항목 — 막대를 보조색으로 칠한다 */
  tone?: "soft";
};

export type DietCase = {
  no: string;
  title: string;
  /** 카드마다 다른 막대 배색 — 이름은 카드 우상단에 그대로 노출된다 */
  palette: { label: string; strong: string; soft: string };
  groups: { label: string; note: string; rows: readonly DietCaseRow[] }[];
  habitLabel: string;
  habitNote: string;
  /** 이 유형을 대표하는 식습관 — 진한 초록으로 채운다 */
  habitsStrong: readonly string[];
  /** 함께 나타나지만 대표는 아닌 식습관 — 연한 초록 */
  habitsSoft: readonly string[];
  point: string;
  keywords: string;
  /** 결론 상세 — 접기/펼치기 안에 들어가는 본문 */
  detail: string;
};

/** 식습관 타입 10종 — 유형별로 해당하는 것만 강조된다 */
export const DIET_HABITS = [
  "음료·에이드",
  "과식",
  "탄수화물",
  "디저트",
  "빨리 먹기",
  "끼니 거름",
  "정크푸드",
  "음주",
  "야식",
  "잦은 모임",
] as const;

export const DIET_CASES: readonly DietCase[] = [
  {
    no: "CASE 01",
    title: "스트레스 식욕형",
    palette: { label: "러스트 + 샌드 카멜", strong: "#b0603a", soft: "#c9a276" },
    groups: [
      {
        label: "기질",
        note: "(타고난 성향)",
        rows: [
          { label: "스트레스 내성", value: "낮음", percent: 30 },
          { label: "충동성", value: "낮음", percent: 32 },
          { label: "무절제", value: "높음", percent: 78 },
        ],
      },
      {
        label: "식생활 패턴",
        note: "(생활 속 습관)",
        rows: [
          { label: "감정적 식욕", value: "높음", percent: 86 },
          { label: "야간 식욕", value: "높음", percent: 80 },
          { label: "보상적 식사", value: "높음", percent: 84 },
        ],
      },
    ],
    habitLabel: "식습관 타입",
    habitNote: "＊ Hungry Brain, Hungry Gut",
    habitsStrong: ["디저트", "야식"],
    habitsSoft: ["음료·에이드", "정크푸드"],
    point: "회복 리듬 · 보상 구조 관리",
    keywords: "스트레스 · 감정적 식욕 · 야간 식욕 · 보상적 식사",
    detail:
      "먹는 양보다 먹게 되는 상황이 문제였습니다. 스트레스가 쌓인 저녁에 보상처럼 단 것을 찾는 흐름이 반복됐습니다. 그래서 식단을 조이기 전에 저녁 회복 루틴을 먼저 만들고, 보상을 음식이 아닌 다른 것으로 옮기는 순서로 관리합니다.",
  },
  {
    no: "CASE 02",
    title: "수면 부족형",
    palette: { label: "러스트 + 샌드 카멜", strong: "#b0603a", soft: "#c9a276" },
    groups: [
      {
        label: "기질",
        note: "(타고난 성향)",
        rows: [
          { label: "자극추구", value: "높음", percent: 76 },
          { label: "관계 민감도", value: "높음", percent: 72 },
          { label: "보상적 식사 경향", value: "높음", percent: 70 },
        ],
      },
      {
        label: "식생활 패턴",
        note: "(생활 속 습관)",
        rows: [
          { label: "수면 시간", value: "부족", percent: 28, tone: "soft" },
          { label: "피로 시 단맛 당김", value: "높음", percent: 82 },
          { label: "대외적 활동", value: "많음", percent: 80 },
        ],
      },
    ],
    habitLabel: "식습관 타입",
    habitNote: "＊ Hungry Brain, Hungry Gut",
    habitsStrong: ["음료·에이드", "야식"],
    habitsSoft: ["음주", "잦은 모임"],
    point: "수면 회복 · 생활 리듬 조정",
    keywords: "수면 부족 · 피로 · 단맛 당김 · 활동 과다",
    detail:
      "식사량 자체는 큰 문제가 아니었습니다. 활동이 많아 잠이 뒤로 밀리고, 피로가 쌓인 오후에 단맛이 당기는 흐름이 반복됐습니다. 그래서 식단을 줄이기 전에 수면 시간을 먼저 확보하고, 저녁 식사와 활동 시간을 앞당기는 순서로 관리합니다.",
  },
];

/** #result 변화 수치 */
export const DIET_METRICS = [
  { label: "체지방률", value: "34.8% → 24.1%" },
  { label: "골격근량", value: "22.1kg → 22.4kg" },
  { label: "허리둘레", value: "86cm → 70cm" },
] as const;

/** #result 여섯 축 — 시작 대비 관리 후 */
export const DIET_AXES = [
  { label: "체중", start: 88, after: 46 },
  { label: "체지방률", start: 84, after: 42 },
  { label: "골격근량", start: 52, after: 62 },
  { label: "기초대사량", start: 48, after: 66 },
  { label: "활동량", start: 30, after: 78 },
  { label: "수면의 질", start: 34, after: 74 },
] as const;

export type DietStep = {
  n: string;
  title: string;
  lead: string;
  desc: string;
};

export const DIET_ROADMAP: readonly DietStep[] = [
  {
    n: "01",
    title: "검사 및 분석",
    lead: "나를 데이터로 확인",
    desc: "여섯 가지 검사로 기질부터 몸 상태까지 확인하고, 결과를 종합해 방향을 정합니다.",
  },
  { n: "02", title: "관리", lead: "전문가가 생활을 바꿈", desc: "검사 결과에 따라 필요한 관리만 조합합니다." },
  { n: "03", title: "유지", lead: "끝나도 관리는 이어짐", desc: "다시 점검하며 스스로 관리할 기준을 남깁니다." },
];

export const DIET_TEAM = [
  {
    eyebrow: "MEDICAL",
    name: "의료진",
    desc: "내분비내과 · 정신건강의학과 · 재활의학과",
    note: "의학적 판단과 처방",
  },
  { eyebrow: "NUTRITION", name: "임상영양사 팀", desc: "혈당 반응과 식사 구성 설계", note: "대학병원 출신" },
  {
    eyebrow: "EXERCISE",
    name: "운동처방사 팀",
    desc: "체력과 통증 기준의 운동 설계",
    note: "연예인 및 운동선수 다수 관리",
  },
] as const;

/** 플랜 비교표의 항목 — 순서가 곧 표의 행 순서 */
export const DIET_PLAN_FEATURES = [
  "WIM-I · WIM-Scale 정식 검사",
  "전용 웰니스 앱 제공",
  "비대면 피드백",
  "영양 교육",
  "혈당 추적",
  "운동 처방",
  "대면 피드백",
  "기기 관리",
  "수면 관리 3회기",
] as const;

export type DietPlan = {
  name: string;
  kind: string;
  target: string;
  priceNote: string;
  price: string;
  cta: string;
  featured?: boolean;
  /** DIET_PLAN_FEATURES 와 같은 순서. true 면 포함, false 면 옵션 */
  included: readonly boolean[];
};

export const DIET_PLANS: readonly DietPlan[] = [
  {
    name: "Wellness Lite",
    kind: "비대면 관리 프로그램",
    target: "혼자서도 어느 정도 되는데, 방향과 점검이 필요한 분",
    priceNote: "상담 후 플랜 안내",
    price: "진단 기반 견적",
    cta: "상담으로 확인",
    included: [false, true, true, false, true, false, false, true, true],
  },
  {
    name: "Wellness",
    kind: "대면 관리 프로그램",
    target: "이번엔 제대로, 사람과 함께 바꾸고 싶은 분",
    priceNote: "8월 프로모션 적용 · 6주",
    price: "진단 후 견적",
    cta: "이 플랜으로 상담",
    featured: true,
    included: [true, true, true, true, false, true, true, true, true],
  },
  {
    name: "Wellness Signature",
    kind: "대면 관리 프로그램",
    target: "BMI 30 이상, 요요가 반복돼온 분 — 가장 촘촘한 관리",
    priceNote: "상담 후 플랜 안내",
    price: "진단 기반 견적",
    cta: "상담으로 확인",
    included: [true, true, true, true, true, true, true, true, true],
  },
];

export const DIET_RATING_BARS = [
  { label: "매니저 관리", value: "4.97", percent: 99 },
  { label: "식단 만족도", value: "4.88", percent: 97 },
  { label: "재추천 의향", value: "4.91", percent: 98 },
] as const;

export const DIET_REVIEWS = [
  { body: "먹는 순서를 바꿨더니, 배고픈 날 없이 체지방이 먼저 빠졌어요.", who: "40대 · 남 · 직장인" },
  { body: "사진만 올리면 다 읽어주셨어요. 검색하며 고민할 시간이 없어졌습니다.", who: "30대 · 여 · 워킹맘" },
  { body: "혈당 그래프를 보니 저녁에 무너진 이유가 보였어요. 참는 대신 바꿨습니다.", who: "50대 · 여 · 요요 반복형" },
  { body: "근육은 지키고 지방만 빠지는 게 눈으로 보였습니다.", who: "40대 · 남 · 데이터 공개 케이스" },
] as const;

export const DIET_FAQ = [
  {
    q: "굶어야 하나요?",
    a: "아닙니다. 먹는 양보다 먹는 순서와 시간을 먼저 바꿉니다. 혈당 곡선을 보며 내 몸이 반응하는 지점을 찾고, 지속 가능한 식사 구성을 함께 설계합니다.",
  },
  {
    q: "운동을 정말 못하는데 가능한가요?",
    a: "가능합니다. 시작은 활동량 회복부터입니다. 헬스장 없이 하루 걸음 수와 생활 동작을 조정하고, 준비가 되면 강도를 올립니다.",
  },
  {
    q: "다이어트 주사(GLP-1) 맞고 있는데 병행되나요?",
    a: "병행 가능합니다. 다만 투약 여부와 용량은 진단 단계에서 확인하고, 근육 손실과 식욕 변화를 함께 추적하며 관리 강도를 조정합니다. 의료적 판단이 필요한 부분은 의료진 확인을 우선합니다.",
  },
  {
    q: "끝나면 다시 찌지 않을까요?",
    a: "그래서 종료 후 애프터케어가 프로그램 안에 들어 있습니다. 정기 추적 체크로 습관이 유지되는지 확인하고, 흔들릴 때 다시 잡습니다.",
  },
  {
    q: "시간이 정말 없는데 할 수 있을까요?",
    a: "기록은 사진 몇 장이면 됩니다. 계산도 검색도 필요 없고, 데이터를 읽는 일은 전담 매니저가 대신합니다. 비대면 플랜은 방문 없이 진행됩니다.",
  },
  {
    q: "비용이 부담됩니다.",
    a: "진단 결과에 따라 필요한 관리만 담기 때문에, 플랜은 상담에서 조정됩니다. 환불 규정도 계약 전에 문서로 먼저 안내드립니다.",
  },
] as const;
