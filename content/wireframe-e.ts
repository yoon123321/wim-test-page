/** 감량 프로그램 E안 — 화면 문구와 데이터.
 *  이 파일의 문자열만 고치면 /wireframe-1 의 E안 화면에 반영됩니다. */

export type PlanFeatureState = "on" | "off" | "option";

export interface RoadmapStep {
  n: string;
  title: string;
  lead: string;
  desc: string;
}

export interface TeamMember {
  no: string;
  role: string;
  name: string;
  desc: string;
  tags: string[];
}

export interface Specialist {
  kicker: string;
  name: string;
  role: string;
  note: string;
}

export interface Method {
  title: string;
  desc: string;
}

export interface ProgramChip {
  name: string;
  desc: string;
}

export interface CaseDetail {
  label: string;
  value: string;
}

export interface CaseRecord {
  profile: string;
  loss: string;
  weight: string;
  period: string;
  fat: string;
  details: CaseDetail[];
}

export interface Persona {
  persona: string;
  plan: string;
  period: string;
  loss: string;
  range: string;
  sub: string;
  quote: string;
  stars?: number;
}

export interface Review {
  tag: string;
  body: string;
  author: string;
  stars: number;
}

export interface Plan {
  name: string;
  subtitle: string;
  target: string;
  priceLabel: string;
  priceValue: string;
  cta: string;
  featured?: boolean;
  features: PlanFeatureState[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export const HERO = {
  eyebrow: "WIM 통합 다이어트 타워",
  title: "정교한 데이터가 만드는\n나만의 다이어트",
  body: "체중 감량을 넘어, 대사와 생활 습관까지\n함께 보는 프로그램입니다.",
} as const;

export const WORRIES: string[] = [
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
];

export const WORRIES_COPY = {
  eyebrow: "ALL OF IT, AT ONCE",
  title: "전부 다른 고민 같지만,\n원인은 하나로 모입니다.",
  sub: "이 모든 고민의 원인은 현재의 나를 모르는 것입니다",
  domeTitle: "그래서 현재의 나를 아는 것이 중요합니다.",
  domeSub: "지금의 나에게 예전의 다이어트가 통하지 않을 수 있습니다.",
} as const;

export const DIFFERENCE = {
  kicker: "아는 것에서, 실제로 빼는 것까지",
  steps: [
    { kicker: "STEP 1", title: "아는 것", desc: "검사로 원인과\n방향을 확인" },
    { kicker: "STEP 2", title: "하는 것", desc: "전략을 짜고\n매일 실행" },
    { kicker: "RESULT", title: "유지되는 감량", desc: "더 편하고\n더 지속 가능하게" },
  ],
  title: "나를 아는 데서",
  titleAccent: "멈추지 않습니다.",
  body: "검사로 원인을 알면 방향이 정해집니다.\n남은 일은 그 방향대로 전략을 짜고 매일 실행하는 것 — 윔 센터는 두 영역을 함께 맡습니다.",
  bodyStrong:
    "의학적 설계와 생활 관리가 정교하게 연결될 때,\n다이어트는 더 편하고, 더 지속 가능해집니다.",
} as const;

export const RESULT = {
  badge: "회원 김OO (34) · 12주 기록",
  title: "우리는 실제로 건강하게 빼줍니다.",
  sub: "살찌지 않는 몸을 만들어 드립니다.",
  body: "살이 찌는 원인을 근본부터 해결합니다.\n생활이 갖춰지면 스트레스 받으며 관리하지 않아도 체중은 유지되고 건강도 유지됩니다.",
  before: { label: "BEFORE · 2026.03.02", weight: "68.4kg" },
  after: { label: "AFTER · 2026.05.25", weight: "55.1kg" },
  badgeCenter: "12주",
  metrics: [
    { label: "체지방률", value: "34.8% → 24.1%" },
    { label: "골격근량", value: "22.1kg → 22.4kg" },
    { label: "허리둘레", value: "86cm → 70cm" },
  ],
  radar: {
    title: "여섯 축의 데이터가 함께 바뀝니다",
    body: "12주간 측정한 여섯 지표를 그대로 겹쳐 그린 그래프입니다. 체중과 체지방률만 내려가고 근육·대사·활동량·수면이 무너지면 유지되지 않습니다.",
    axes: ["체중", "체지방률", "골격근량", "기초대사량", "활동량", "수면의 질"],
    legendBefore: "시작 (0주)",
    legendAfter: "종료 (12주)",
  },
} as const;

export const ROADMAP = {
  kicker: "THE JOURNEY",
  title: "검사부터 유지까지, 12주가 이렇게 흘러갑니다",
  sub: "지금의 나를 먼저 알아야, 제대로 뺄 수 있습니다. 여기서부터 12주 여정이 시작됩니다.",
  steps: [
    { n: "1", title: "검사", lead: "나를 아는 것에서 시작", desc: "기질 검사로 왜 찌고 왜 안 빠지는지 확인합니다." },
    { n: "2", title: "분석", lead: "원인을 데이터로 좁힘", desc: "성향·식생활·신체 상태를 종합해 방향을 정합니다." },
    { n: "3", title: "관리", lead: "전문가와 함께 실행", desc: "영양·운동·혈당·생활습관을 매주 조정합니다." },
    { n: "4", title: "유지", lead: "혼자서도 되는 상태로", desc: "감량 이후 스스로 관리할 수 있게 기준을 남깁니다." },
  ] satisfies RoadmapStep[],
} as const;

export const TEAM = {
  kicker: "YOUR TEAM",
  title: "한 명의 전문가가 아니라, 하나의 팀이 당신의 감량을 설계합니다",
  sub: "내분비·대사에 대한 의학적 판단을 시작으로\n영양, 운동, 행동관리까지\n각 분야의 전문가가 하나의 목표를 향해 움직입니다.",
  members: [
    {
      no: "01",
      role: "진단 · 리포트",
      name: "임상 매니저",
      desc: "체성분·혈당·생활습관 검사를 진행하고 리포트를 해석해 설계 방향을 정합니다.",
      tags: ["검사 진행과 유형 판정", "이상 소견 시 의료진 연결"],
    },
    {
      no: "02",
      role: "식사 · 수면",
      name: "감량 상담 매니저",
      desc: "6주 내내 붙는 전담입니다. 기록을 읽고 다음 하루의 계획을 조정해 보냅니다.",
      tags: ["주 3회 이상 기록 피드백", "맞춤 식단과 수면 루틴"],
    },
    {
      no: "03",
      role: "운동 · 회복",
      name: "운동 매니저",
      desc: "활동량 회복에서 시작합니다. 근육을 지키는 강도로 운동을 짜고 회복을 관리합니다.",
      tags: ["걸음 수·운동 강도 설계", "회복 기기관리 진행"],
    },
  ] satisfies TeamMember[],
  specialists: [
    { kicker: "MEDICAL", name: "의료진", role: "내분비내과 · 정신건강의학과 · 재활의학과", note: "의학적 판단과 처방" },
    { kicker: "NUTRITION", name: "임상영양사 팀", role: "혈당 반응과 식사 구성 설계", note: "대학병원 출신" },
    { kicker: "EXERCISE", name: "운동처방사 팀", role: "체력과 통증 기준의 운동 설계", note: "연예인 및 운동선수 다수 관리" },
  ] satisfies Specialist[],
  convergeTitle: "하나의 프로그램 설계",
  deliveryTitle: "전담 매니저가 하루 단위로 전달",
  outcomeTitle: "고객의 행동 변화",
  outcomeSub: "매일의 선택이 바뀌는 지점",
} as const;

export const CARE = {
  kicker: "WHAT WE MANAGE",
  title: "아는 것을 데이터로 확인하며 옮깁니다",
  sub: "구성표의 숫자보다, 그 시간에 실제로 무슨 일이 일어나는지를 먼저 말씀드립니다.",
  methods: [
    { title: "대면 피드백", desc: "매니저와 함께 인바디·식사 기록·생활 패턴을 확인하고, 이번 주에 무너진 지점과 다음 주 실천 기준을 조정합니다." },
    { title: "비대면 피드백", desc: "일상에서 흔들리는 순간, 앱과 채팅으로 오늘 무엇을 바꾸면 되는지 짧고 구체적으로 피드백합니다." },
    { title: "영양 교육", desc: "탄단지, 혈당 반응, 식사 순서, 외식·배달 선택법을 내 생활에 맞게 배웁니다. 지식이 아니라 오늘 쓰는 기준으로." },
    { title: "운동 처방", desc: "현재 체력과 통증 여부를 기준으로, 집·회사·헬스장 중 실제로 할 수 있는 운동 방향을 잡습니다." },
    { title: "기기 관리", desc: "감량 중 피로·부종·회복감을 관리해, 지치지 않고 루틴을 이어갈 수 있도록 돕습니다." },
    { title: "혈당·앱 추적", desc: "먹을 때마다 흔들리는 몸의 반응을 데이터로 확인하고, 그에 맞춰 식사 기준을 함께 조정합니다." },
  ] satisfies Method[],
  programs: [
    { name: "Wellness Signature", desc: "혈당까지 함께 보는 핵심 관리" },
    { name: "Wellness", desc: "대면 + 기기 관리" },
    { name: "Wellness Lite", desc: "비대면 중심" },
  ] satisfies ProgramChip[],
  note: "어떤 프로그램이 맞을지는 고민하지 않으셔도 됩니다. 상담에서 목표와 생활에 맞는 방향을 함께 정합니다.",
} as const;

export const CASES = {
  kicker: "12 WEEKS",
  title: "12주 뒤,",
  titleAccent: "몸의 구성이 이렇게 바뀝니다.",
  featured: {
    kicker: "가장 많이 받는 질문 — 얼마나 빠지나요?",
    title: "굶지 않고 26주,\n31kg이 빠졌습니다.",
    stats: [
      { label: "체중", value: "-31.1kg", note: "108.1 → 77.0kg" },
      { label: "골격근", value: "+1.2kg", note: "근육은 늘고 지방만" },
      { label: "기간", value: "26주", note: "Wellness Signature" },
      { label: "회원", value: "수험생 김OO", note: "앉아 있는 시간은 그대로,\n먹는 순서만 바꿨습니다" },
    ],
  },
  disclaimer: "※ 실제 기록 일부를 옮긴 것으로, 결과는 개인에 따라 다를 수 있습니다.",
  records: [
    {
      profile: "30대 직장인 · 박OO",
      loss: "-20.8kg",
      weight: "94.2 → 73.4kg",
      period: "26주",
      fat: "체지방 42.1 → 25.2kg",
      details: [
        { label: "고민", value: "작은 스트레스도 크게 받아 감정적으로 무너지는 식사가 반복" },
        { label: "병목", value: "스트레스성 간식 + 퇴근 후 폭식" },
        { label: "관리", value: "다그치지 않고 지금 할 수 있는 것을 매주 하나씩 조정" },
        { label: "한마디", value: "“매니저님이 나를 제일 잘 아는 사람이구나 싶어 더 의지했어요.”" },
      ],
    },
    {
      profile: "10대 후반 · 김OO",
      loss: "-31.1kg",
      weight: "108.1 → 77.0kg",
      period: "26주",
      fat: "체지방 35.8 → 14.7kg",
      details: [
        { label: "고민", value: "여러 다이어트마다 요요거나 감량 자체가 잘 안 됨" },
        { label: "병목", value: "급격한 체중 증가기, 잡히지 않은 생활 리듬" },
        { label: "관리", value: "성향에 맞춰 일상에서 바로 쓰는 영양 기준을 전달" },
        { label: "한마디", value: "“스트레스 없이, 힘들지 않게 감량했어요.”" },
      ],
    },
    {
      profile: "30대 예비신부 · 김OO",
      loss: "-14.5kg",
      weight: "76.9 → 62.4kg",
      period: "18주",
      fat: "체지방 34.2 → 25.1kg",
      details: [
        { label: "고민", value: "웨딩 전, 달고 기름진 음식에 대한 강한 갈망" },
        { label: "병목", value: "표현이 서툴러 혼자 쌓아두는 스트레스" },
        { label: "관리", value: "식이요법과 함께 마음의 안정도 같이 챙김" },
        { label: "한마디", value: "“사소한 배려가 담긴 피드백이 아니었다면 못 버텼을 거예요.”" },
      ],
    },
  ] satisfies CaseRecord[],
  personas: [
    { persona: "야근형 30대 직장인", plan: "Wellness", period: "12주", loss: "-12.4kg", range: "82.1 → 69.7kg", sub: "골격근 +0.4kg 유지", stars: 5, quote: "회식이 있는 주에도 계획이 있었습니다. 다음 날 무엇을 조정하면 되는지 매니저가 먼저 알려줬어요." },
    { persona: "출산 후 30대", plan: "Wellness Lite", period: "12주", loss: "-9.6kg", range: "67.4 → 57.8kg", sub: "수면 루틴 정착", stars: 4, quote: "수면이 잡히니 식욕이 먼저 안정됐습니다. 아이 일정에 맞춰 관리 시간을 짜준 게 컸어요." },
    { persona: "요요 반복형 40대", plan: "Wellness Signature", period: "12주", loss: "-14.8kg", range: "89.3 → 74.5kg", sub: "기초대사량 +90kcal", stars: 5, quote: "빼는 법보다 유지하는 법을 처음 배웠습니다. 종료 후에도 체크가 이어져 아직 유지 중입니다." },
    { persona: "수험생 10대 후반", plan: "Wellness Signature", period: "26주", loss: "-31.1kg", range: "108.1 → 77.0kg", sub: "골격근 +1.2kg", stars: 5, quote: "앉아 있는 시간을 줄이지 않고도 빠졌습니다. 먹는 순서만 바꿨어요." },
    { persona: "예비신부 30대", plan: "Wellness", period: "18주", loss: "-14.5kg", range: "76.9 → 62.4kg", sub: "허리 -12cm", stars: 5, quote: "촬영 날짜에 맞춰 컨디션까지 맞췄습니다. 굶지 않아서 얼굴이 상하지 않았어요." },
    { persona: "대사 저하 50대", plan: "Wellness Lite", period: "12주", loss: "-10.2kg", range: "71.8 → 61.6kg", sub: "골격근 +0.6kg", stars: 5, quote: "혈당 그래프가 제일 큰 도움이 됐습니다. 왜 저녁에 무너졌는지 알게 됐어요." },
  ] satisfies Persona[],
} as const;

export const REVIEWS_COPY = {
  kicker: "REVIEWS",
  title: "끝낸 분들의 말이",
  titleAccent: "가장 정확합니다.",
  score: "4.9",
  scoreNote: "/ 5.0 · 후기 218건",
  disclaimer: "※ 실제 후기 일부를 옮긴 것으로, 결과는 개인에 따라 다를 수 있습니다.",
  highlight: {
    body: "“평생 다이어트를 반복했는데, 끝나고도 유지되는 건 처음입니다.”",
    author: "30대 · 여\n-8.6kg · 6주",
  },
  items: [
    { tag: "-11.2kg · 12주", stars: 5, body: "굶는 다이어트만 해봤는데, 여기서는 먹는 순서를 바꿨습니다. 배고픈 날이 거의 없었는데 체지방이 먼저 빠졌어요.", author: "40대 · 남 · 직장인" },
    { tag: "-7.4kg · 6주", stars: 5, body: "사진만 찍어 올리면 매니저가 다 읽어주셨어요. 혼자 검색하며 고민하던 시간이 없어진 게 가장 편했습니다.", author: "30대 · 여 · 워킹맘" },
    { tag: "-9.8kg · 12주", stars: 4, body: "혈당 그래프를 보니 왜 저녁에 무너졌는지 알겠더라고요. 원인을 알고 나서는 참는 게 아니라 바꾸는 게 됐습니다.", author: "50대 · 여 · 요요 반복형" },
    { tag: "-13.2kg · 12주", stars: 5, body: "근육은 지키면서 지방만 빠지는 게 눈으로 보였습니다. 종료 후에도 체크가 이어져서 아직 유지 중입니다.", author: "40대 · 남 · 데이터 공개 케이스" },
  ] satisfies Review[],
} as const;

export const PLAN_FEATURES: string[] = [
  "전용 웰니스 앱 제공",
  "비대면 피드백",
  "영양 교육",
  "혈당 추적",
  "운동 처방",
  "대면 피드백",
  "기기 관리",
];

export const PLANS_COPY = {
  kicker: "PLANS & PRICING",
  title: "플랜보다,",
  titleAccent: "진단이 먼저입니다.",
  sub: "가격은 상품이 아니라 진단에서 나옵니다 — 필요 없는 관리를 더하지 않기 위해서입니다.\n플랜은 관리 강도의 차이일 뿐, 여섯 축을 함께 보는 방식은 같습니다.",
  refundLead: "환불 규정도 먼저 말씀드립니다.",
  refundBody:
    " 시작 전 전액, 진행 중에는 잔여 회차 기준으로 환불됩니다. 연기·중도 변경 규정도 계약 전에 문서로 안내드립니다 — 확신이 있어서 조건을 숨기지 않습니다.",
  featuredBadge: "가장 많이 시작하는 플랜",
  plans: [
    {
      name: "Wellness Lite",
      subtitle: "비대면 관리 프로그램",
      target: "혼자서도 어느 정도 되는데, 방향과 점검이 필요한 분",
      priceLabel: "상담 후 플랜 안내",
      priceValue: "진단 기반 견적",
      cta: "상담으로 확인",
      features: ["on", "on", "off", "on", "off", "off", "option"],
    },
    {
      name: "Wellness",
      subtitle: "대면 관리 프로그램",
      target: "이번엔 제대로, 사람과 함께 바꾸고 싶은 분",
      priceLabel: "8월 프로모션 적용 · 6주",
      priceValue: "진단 후 견적",
      cta: "이 플랜으로 상담",
      featured: true,
      features: ["on", "on", "on", "off", "on", "on", "on"],
    },
    {
      name: "Wellness Signature",
      subtitle: "대면 관리 프로그램",
      target: "BMI 30 이상, 요요가 반복돼온 분 — 가장 촘촘한 관리",
      priceLabel: "상담 후 플랜 안내",
      priceValue: "진단 기반 견적",
      cta: "상담으로 확인",
      features: ["on", "on", "on", "on", "on", "on", "on"],
    },
  ] satisfies Plan[],
} as const;

export const FAQ_COPY = {
  kicker: "FAQ",
  title: "시작 전에, 궁금하실 것들",
  items: [
    { q: "굶어야 하나요?", a: "아닙니다. 먹는 양보다 먹는 순서와 시간을 먼저 바꿉니다. 혈당 곡선을 보며 내 몸이 반응하는 지점을 찾고, 지속 가능한 식사 구성을 함께 설계합니다." },
    { q: "운동을 정말 못하는데 가능한가요?", a: "가능합니다. 시작은 활동량 회복부터입니다. 헬스장 없이 하루 걸음 수와 생활 동작을 조정하고, 준비가 되면 강도를 올립니다." },
    { q: "다이어트 주사(GLP-1) 맞고 있는데 병행되나요?", a: "병행 가능합니다. 다만 투약 여부와 용량은 진단 단계에서 확인하고, 근육 손실과 식욕 변화를 함께 추적하며 관리 강도를 조정합니다. 의료적 판단이 필요한 부분은 의료진 확인을 우선합니다." },
    { q: "끝나면 다시 찌지 않을까요?", a: "그래서 종료 후 애프터케어가 프로그램 안에 들어 있습니다. 정기 추적 체크로 습관이 유지되는지 확인하고, 흔들릴 때 다시 잡습니다." },
    { q: "시간이 정말 없는데 할 수 있을까요?", a: "기록은 사진 몇 장이면 됩니다. 계산도 검색도 필요 없고, 데이터를 읽는 일은 전담 매니저가 대신합니다. 비대면 플랜은 방문 없이 진행됩니다." },
    { q: "비용이 부담됩니다.", a: "진단 결과에 따라 필요한 관리만 담기 때문에, 플랜은 상담에서 조정됩니다. 환불 규정도 계약 전에 문서로 먼저 안내드립니다." },
  ] satisfies FaqItem[],
} as const;

export const FINAL_CTA = {
  title: "평생을 생각하면, 아깝지 않습니다",
  body: "프로그램은 구성에 따라 가격이 상이합니다.\n먼저 다이어트 기질 검사로, 나에게 맞는 방향부터 확인해보세요.",
  primary: "무료 기질 검사 받기",
  secondary: "시그니처 12주 프로그램 문의하기",
} as const;
