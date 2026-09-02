/**
 * 기기관리(리커버리) 랜딩 — 개선안(NEW) 문구·데이터.
 * 헤더 스위치에서 "버전2"를 고르면 보이는 /recovery 페이지의 문구는 전부 이 파일에서 수정합니다.
 * 디자인 원본: wim-recovery-landing-v2.tsx.
 * 사진: 레포에 있는 것(/images/main/…)은 연결했고, 없는 것은 /assets/*.png 경로로 남겨둠 → public/assets/ 에 같은 이름으로 넣으면 자동 표시. 그 전까진 alt 문구가 자리표시.
 */

export type RecoveryDevice = { kicker: string; name: string; lead: string; desc: string; badge?: string; tags: string[]; alt: string; src: string; flip?: boolean };
export type RecoveryCombo = { steps: string[]; title: string; desc: string; alt: string; src: string };

export const RECOVERY_COPY = {
  hero: {
    kicker: "A PRIVATE RECOVERY RITUAL",
    titleLines: ["평소의 회복이,", "가장 좋은 컨디션의 나를 만듭니다."],
    descriptionLines: ["일상의 피로와 붓기부터", "중요한 일정, 시술과 수술 이후까지."],
    ctaButton: "3분 리커버리 유형 검사 (무료)",
    ctaHref: "/recovery-type-test",
  },
  intro: {
    kicker: "WHY RECOVERY",
    titleLines: ["회복은 특별한 날의 일이 아니라,"],
    titleAccent: "평소에 쌓아두는 것입니다.",
    description: "열·냉·압력·산소를 쓰는 다섯 가지 기기가 순환과 이완을 돕습니다. 누워 있는 시간만으로 회복 관리가 됩니다.",
    photo: { alt: "누워서 관리받는 장면 — 가운 차림, 눈 감고 이완된 상태", src: "/images/main/program-03.png" },
  },
  combos: {
    kicker: "TODAY'S SESSION",
    title: "오늘의 나에게는 어떤 회복이 필요할까요?",
    description: "그날의 컨디션과 회복 상태에 따라, 가장 효율적인 순서와 조합을 적용합니다.",
    selectLabel: "SELECT YOUR GOAL",
    footNormal: "어떤 조합이 맞을지는, ",
    footStrong: "매니저가 오늘의 컨디션을 보고 정해드립니다",
  },
  devices: {
    kicker: "FIVE MODALITIES",
    title: "서로 다른 원리로 회복을 돕는 다섯 가지 기기",
  },
  records: {
    kicker: "MEMBER STORIES",
    title: "먼저 경험한 분들의 이야기를 확인해보세요.",
    description: "인스타그램에 올라온 방문 후기를 그대로 가져옵니다",
    moreButton: "인스타그램에서 더 보기",
    href: "https://www.instagram.com/wim_center/",
  },
  passes: {
    themeTab: "테마 패키지",
    singleTab: "1회 체험권",
    singleKicker: "SINGLE SESSION",
    singleTitle: "필요한 기기만 골라, 한 번 가볍게 경험해보세요.",
    singleNote: "※ 윔펄스테라피는 상담 시 안내드립니다.",
    themeKicker: "CURATED PACKAGES",
    themeTitle: "목적에 맞춘 테마 체험가",
    themeNote: "※ 단품 기기 체험가는 상담 시 안내드립니다.",
    timePrefix: "시술시간",
    itemsLabel: "프로그램 구성",
    bookButton: "이 패키지로 예약",
  },
  faq: {
    kicker: "FAQ",
    title: "자주 묻는 질문",
  },
  contact: {
    title: "나의 리커버리를 지금 시작해보세요.",
    description: "오늘의 컨디션을 확인하고, 필요한 회복을 정해드립니다.",
    primaryButton: "상담 신청",
    primaryHref: "/contact",
    secondaryButton: "네이버 예약",
    secondaryHref: "https://map.naver.com/p/entry/place/1903997900",
  },
} as const;

export const RECOVERY_DEVICES: RecoveryDevice[] = [
  {
    kicker: "DEVICE 01 · CRYO",
    name: "크라이오테라피",
    lead: "짧지만 또렷한 회복감",
    desc: "초저온 자극으로 혈관을 수축·확장시켜 회복과 순환을 돕습니다. 전신은 물론 얼굴까지 적용할 수 있고, 가스를 쓰지 않아 비교적 안전합니다.",
    badge: "전국 단 2대",
    tags: ["붓기 진정", "회복"],
    alt: "크라이오 — 전신 냉각 캡슐",
    src: "/assets/dev-cryo.png",
  },
  {
    kicker: "DEVICE 02 · INFRARED",
    name: "인프라레드 캡슐 & 사우나",
    lead: "관리 순간부터 몸이 빠르게 풀리는 느낌",
    desc: "적외선으로 몸을 데워 순환과 이완을 돕는 온열 케어입니다. 짧고 효율적인 캡슐, 이완에 집중한 목조 사우나 중 목적에 따라 선택할 수 있습니다.",
    badge: "국내 최초 3종 보유",
    tags: ["딥 히트", "순환"],
    alt: "인프라레드 — 목조 사우나",
    src: "/images/main/care-03.png",
    flip: true,
  },
  {
    kicker: "DEVICE 03 · OXYGEN",
    name: "고압산소 챔버",
    lead: "다음 날 아침이 가벼워지는 체감",
    desc: "일반 대기압보다 높은 압력에서 산소를 흡입해, 회복에 필요한 산소 공급을 돕습니다.",
    tags: ["산소 충전", "피로 리셋"],
    alt: "옥시챔버 — 고압산소 챔버 룸",
    src: "/images/main/program-03.png",
  },
  {
    kicker: "DEVICE 04 · AIR PRESSURE",
    name: "에어프레셔",
    lead: "전신을 한 번에 정리해주는 느낌",
    desc: "압력 자극으로 순환과 붓기, 디톡스 케어를 돕습니다.",
    tags: ["림프 순환", "다리 부종"],
    alt: "에어프레셔 — 공압 컴프레션",
    src: "/assets/dev-compression.png",
    flip: true,
  },
  {
    kicker: "DEVICE 05 · FASCIA",
    name: "윔펄스테라피",
    lead: "직접 운동하지 않아도 느껴지는 자극",
    desc: "근육 자극을 통해 활성화와 깊은 이완을 돕습니다. 전담 매니저가 원하는 부위를 집중 케어합니다.",
    tags: ["근막 이완", "결림"],
    alt: "윔펄스테라피 — 근막 리커버리",
    src: "/assets/dev-ultrasound.png",
  },
];

export const RECOVERY_SITUATIONS = ["근육 회복", "붓기 제거", "피로 회복", "순환·대사"] as const;

export const RECOVERY_COMBOS: RecoveryCombo[] = [
  { steps: ["인프라레드 30′", "크라이오 3′"], title: "Contrast Therapy", desc: "인프라레드와 크라이오테라피를 번갈아 적용해, 혈관의 수축과 확장을 통한 회복과 순환을 돕습니다.", alt: "조합 — 크라이오 입장 장면", src: "/images/main/care-03.png" },
  { steps: ["에어프레셔 30′", "윔펄스테라피 15′"], title: "Compression Recovery", desc: "에어프레셔로 다리 순환을 돕고, 윔펄스테라피로 뭉친 부위를 풀어 붓기와 무거움을 함께 관리합니다.", alt: "조합 — 에어프레셔 공압 슈트", src: "/assets/combo-2.png" },
  { steps: ["옥시챔버 40′", "인프라레드 20′"], title: "Oxygen & Heat Recovery", desc: "고압산소로 산소를 채운 뒤 인프라레드로 몸을 데워, 쌓인 피로와 무거움을 덜어냅니다.", alt: "조합 — 옥시챔버 캡슐 내부", src: "/images/main/program-03.png" },
  { steps: ["인프라레드 30′", "에어프레셔 20′"], title: "Heat & Compression", desc: "인프라레드로 체온을 올린 뒤 에어프레셔로 압력을 더해, 순환과 대사 흐름을 돕습니다.", alt: "조합 — 인프라레드 발한 장면", src: "/assets/combo-4.png" },
];

export const RECOVERY_RECORDS = [
  { handle: "@runner_jw", body: "운동 끝나고 크라이오 3분. 다음 날이 다르다", alt: "인스타 — 크라이오 캡슐 앞", src: "/assets/ig-1.png" },
  { handle: "@seoyeon.log", body: "종아리 붓기 관리 4주차 기록", alt: "인스타 — 에어프레셔 이용 중", src: "/assets/ig-2.png" },
  { handle: "@mindful_hj", body: "야근 주간 리셋. 옥시챔버 40분", alt: "인스타 — 옥시챔버 내부", src: "/assets/ig-3.png" },
  { handle: "@daily_kyu", body: "사우나보다 짧고 확실한 인프라레드", alt: "인스타 — 인프라레드 캡슐", src: "/assets/ig-4.png" },
  { handle: "@yoonso_fit", body: "감량 정체기에 찾은 회복 루틴", alt: "인스타 — 윔펄스테라피", src: "/assets/ig-5.png" },
] as const;

export const RECOVERY_THEMES = [
  {
    name: "다이어트 올인원 패키지",
    time: "1시간",
    was: "225,000원",
    now: "130,000원",
    off: "42%",
    items: ["크라이오테라피", "고압산소챔버", "인프라레드 사우나"],
    desc: "세 가지 프리미엄 웰니스 프로그램을 한 번에 경험합니다. 지친 컨디션 관리와 다이어트 루틴을 함께 잡습니다.",
  },
  {
    name: "붓기 집중 케어 패키지",
    time: "1시간",
    was: "125,000원",
    now: "70,000원",
    off: "44%",
    items: ["인프라레드", "에어프레셔"],
    desc: "오래 앉아 몸이 무거운 날, 운동이나 시술 후 컨디션 관리가 필요한 날, 얼굴과 몸의 붓기가 고민되는 날을 위한 패키지입니다.",
  },
] as const;

export const RECOVERY_TRIALS = [
  { name: "크라이오 테라피", time: "", was: "50,000원", now: "35,000원", off: "30%", desc: "-140°C 초저온 냉각 케어로 지친 몸을 깨우고 빠른 컨디션 회복을 돕습니다." },
  { name: "인프라 레드 사우나", time: "", was: "75,000원", now: "40,000원", off: "46%", desc: "적외선이 몸속까지 따뜻하게 데워 쌓인 긴장을 풀고 개운한 컨디션을 만들어줍니다." },
  { name: "인프라 레드 캡슐", time: "", was: "90,000원", now: "50,000원", off: "44%", desc: "적외선으로 몸을 데워 땀 배출과 전신 이완을 돕는 관리입니다." },
  { name: "고압산소챔버", time: "", was: "100,000원", now: "60,000원", off: "40%", desc: "고농도 산소를 편안하게 공급해 지친 몸의 활력과 회복을 돕습니다." },
  { name: "에어프레셔", time: "", was: "50,000원", now: "30,000원", off: "40%", desc: "공기압으로 하체를 부드럽게 압박해 붓고 무거운 다리를 가볍게 풀어줍니다." },
] as const;

export const RECOVERY_FAQ = [
  { q: "회권으로 매번 다른 기기를 받아도 되나요?", a: "네. 회권은 특정 기기 전용이 아니라 모든 기기와 조합에 교차 사용됩니다. 오늘은 크라이오, 다음엔 LYMPHATIC 조합 — 그날 몸에 맞게 매니저와 정하시면 됩니다. (조합 이용 시 차감 기준은 정책 확정 후 안내)" },
  { q: "유효기간이 있나요? 남으면 어떻게 되나요?", a: "답변 내용이 들어갈 자리입니다." },
  { q: "감량 프로그램 회원인데, 회권을 따로 사야 하나요?", a: "답변 내용이 들어갈 자리입니다." },
  { q: "크라이오, 많이 춥지 않나요?", a: "답변 내용이 들어갈 자리입니다." },
  { q: "옥시챔버 안이 답답하지 않을까요?", a: "답변 내용이 들어갈 자리입니다." },
  { q: "운동 전이 좋나요, 후가 좋나요?", a: "답변 내용이 들어갈 자리입니다." },
  { q: "받으면 안 되는 경우도 있나요?", a: "답변 내용이 들어갈 자리입니다." },
] as const;
