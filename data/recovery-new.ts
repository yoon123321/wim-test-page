/**
 * 기기관리(리커버리) 랜딩 — 개선안(NEW) 문구·데이터.
 * 헤더 스위치에서 "개선안"을 고르면 보이는 /recovery 페이지의 문구는 전부 이 파일에서 수정합니다.
 * 기기 사진은 /public/assets/*.png 에 두거나 각 항목의 src 를 교체하세요.
 */

export type RecoveryDevice = {
  kicker: string;
  name: string;
  desc: string;
  tags: string[];
  photo: string;
  src?: string;
  flip?: boolean;
};

export const RECOVERY_COPY = {
  nav: [
    { href: "#intro", label: "왜 기기인가" },
    { href: "#devices", label: "기기 5종" },
    { href: "#combos", label: "조합" },
    { href: "#journey", label: "관리 흐름" },
    { href: "#records", label: "방문 기록" },
    { href: "#passes", label: "가격" },
    { href: "#faq", label: "FAQ" },
  ],
  navCta: "상담 신청",
  hero: {
    kicker: "LIE DOWN. THAT'S ALL.",
    titleLines: ["손쉽게 회복을 돕는", "리커버리 기기 관리"],
    description: "기기에 몸을 맡기는 3분에서 40분 동안, 오로지 회복에 좀 더 집중합니다.",
    primaryButton: "상담 신청",
    secondaryButton: "기기 살펴보기",
    imageLabel: "윔센터 고압산소 챔버 룸",
  },
  intro: {
    kicker: "THE EASIEST SELF-CARE",
    titleLines: ["가장 하기 쉬운"],
    titleAccent: "자기 관리",
    descriptionLines: ["운동도 식단도 의지가 필요합니다.", "이건 누워 있기만 하면 됩니다. 누워 있는 동안 열·냉·압력·산소가 회복을 밀어 올립니다."],
    photoLabel: "누워서 관리받는 장면 — 가운 차림, 눈 감고 이완된 상태",
    signsTitle: "이럴 때 오십니다",
    signsNote: "해당되는 목적으로 조합이 정해집니다",
    turn: { kicker: "THE ANSWER", title: "의지 대신, 기기가 대신합니다", button: "오늘 필요한 조합 보기" },
  },
  combos: {
    kicker: "TODAY'S COMBINATION",
    title: "오늘, 무엇이 필요한가요?",
    description: "그날의 컨디션과 회복 상태에 따라, 가장 효율적인 순서와 조합을 적용합니다.",
    moreButton: "더 알아보기",
    reviewsTitle: "이 목적으로 받은 후기",
    reviewsNote: "선택한 목적으로 방문한 회원 후기",
    footNormal: "어떤 조합이 맞을지는, ",
    footStrong: "매니저가 오늘 몸을 보고 정해드립니다",
  },
  devices: {
    kicker: "FIVE MECHANISMS",
    title: "다섯 개의 기전, 다섯 가지 회복",
    description: "한 대씩, 몸으로 이해되게 보여줍니다",
    detailButton: "상세보기",
    modalCloseLabel: "모달 닫기",
  },
  journey: {
    kicker: "DEVICE CARE JOURNEY",
    title: "오늘의 몸을 확인하고, 회복까지 이어갑니다",
    description: "현재 컨디션을 확인한 뒤 필요한 기기와 순서를 정하고, 다음 관리 기준까지 남깁니다.",
  },
  records: {
    kicker: "VISITOR RECORDS",
    title: "다녀간 사람들의 기록",
    description: "인스타그램에 올라온 방문 후기를 그대로 가져옵니다",
    moreButton: "인스타그램에서 더 보기",
  },
  passes: {
    themeTab: "테마 패키지",
    singleTab: "1회 체험권",
    themeKicker: "THEME PACKAGE",
    themeTitle: "목적에 맞춘 조합 패키지",
    singleKicker: "SINGLE SESSION",
    singleTitle: "기기 5종 체험가",
    timePrefix: "시술시간",
    note: "※ 표기 금액은 프로모션 가격입니다. 기간과 조건은 상담 시 안내드립니다.",
  },
  faq: {
    kicker: "FAQ",
    title: "자주 묻는 질문",
  },
  contact: {
    title: "오늘 몸 상태로 상담 받아보세요",
    description: "어떤 기기·조합이 맞는지는 몸을 보고 정합니다",
    primaryButton: "상담 신청",
    secondaryButton: "네이버 예약",
  },
  footer: {
    brandKo: "윔센터",
    brandEn: "WIM CENTER",
    copyright: "© 2026 WIM CENTER. All rights reserved.",
  },
} as const;

export const RECOVERY_DEVICES: RecoveryDevice[] = [
  { kicker: "DEVICE 01 · CRYO", name: "크라이오테라피", desc: "초저온 자극으로 혈관을 수축·확장시켜 회복과 순환을 돕습니다. 전신은 물론 얼굴까지 적용할 수 있고, 가스를 쓰지 않아 비교적 안전합니다.", tags: ["붓기 진정", "회복"], photo: "크라이오 — 전신 냉각 캡슐" },
  { kicker: "DEVICE 02 · INFRARED", name: "인프라레드 캡슐 & 사우나", desc: "적외선으로 몸을 데워 순환과 이완을 돕는 온열 케어입니다. 짧고 효율적인 캡슐, 이완에 집중한 목조 사우나 중 목적에 따라 선택할 수 있습니다.", tags: ["딥 히트", "순환"], photo: "인프라레드 — 목조 사우나", flip: true },
  { kicker: "DEVICE 03 · OXYGEN", name: "고압산소 챔버", desc: "일반 대기압보다 높은 압력에서 산소를 흡입해, 회복에 필요한 산소 공급을 돕습니다. 강남 인근에서 흔치 않은 4대 규모로, 대기 없이 이용할 수 있습니다.", tags: ["산소 충전", "피로 리셋"], photo: "옥시챔버 — 고압산소 챔버 룸" },
  { kicker: "DEVICE 04 · AIR PRESSURE", name: "에어프레셔", desc: "압력 자극으로 순환과 붓기, 디톡스 케어를 돕습니다.", tags: ["림프 순환", "다리 부종"], photo: "에어프레셔 — 공압 컴프레션", flip: true },
  { kicker: "DEVICE 05 · FASCIA", name: "윔펄스테라피", desc: "근육 자극을 통해 활성화와 깊은 이완을 돕습니다.", tags: ["근막 이완", "결림"], photo: "윔펄스테라피 — 근막 리커버리" },
];

export const RECOVERY_SITUATIONS = ["근육 회복", "붓기 제거", "피로 회복", "순환·대사"] as const;

export const RECOVERY_COMBOS = [
  { steps: ["인프라레드 30′", "크라이오 3′"], title: "Contrast Therapy", desc: "인프라레드와 크라이오테라피를 번갈아 적용해, 혈관의 수축과 확장을 통한 회복과 순환을 돕습니다.", photo: "조합 — 크라이오 입장 장면" },
  { steps: ["에어프레셔 30′", "근막 리커버리 15′"], title: "Hyper Recovery Protocol", desc: "고압산소와 크라이오테라피를 함께 적용해, 붓기 감소와 염증 관리, 회복 가속을 돕습니다.", photo: "조합 — 에어프레셔 공압 슈트" },
  { steps: ["옥시챔버 40′", "인프라레드 20′"], title: "Lymphatic Flow Care", desc: "에어프레셔와 인프라레드를 함께 적용해, 순환과 부종, 디톡스 케어를 돕습니다.", photo: "조합 — 옥시챔버 캡슐 내부" },
  { steps: ["인프라레드 30′", "에어프레셔 20′"], title: "Metabolic Boost Therapy", desc: "윔펄스테라피와 인프라레드를 함께 적용해, 근육 활성과 깊은 이완을 돕습니다.", photo: "조합 — 인프라레드 발한 장면" },
] as const;

export const RECOVERY_COMBO_REVIEWS = [
  [
    { label: "근육 회복", body: "웨이트 끝나고 인프라레드 30분 후 크라이오로 마무리했는데, 다음 날 근육통이 거의 없었습니다. 순서를 정해주셔서 고민할 게 없었어요.", meta: "30대 남성 · 5회권 이용" },
    { label: "Contrast Therapy", body: "몸을 데운 다음 한 번에 식히는 흐름이 확실히 다릅니다. 3분이 짧게 느껴질 정도로 개운했어요.", meta: "40대 남성 · 10회권 이용" },
  ],
  [
    { label: "붓기 제거", body: "오래 서 있으면 다리가 무거웠는데 관리 후 신발이 헐렁하게 느껴졌어요. 다음 날까지 가벼움이 이어졌습니다.", meta: "30대 여성 · 5회권 이용" },
    { label: "Lymphatic Care", body: "그날 붓기 상태를 먼저 확인하고 압력을 조절해 주셔서 편안하게 받을 수 있었습니다.", meta: "40대 여성 · 3회권 이용" },
  ],
  [
    { label: "피로 회복", body: "일이 몰린 주에 몸이 무겁고 집중도 안 됐는데, 관리받고 나니 잠도 깊게 잤습니다.", meta: "30대 남성 · 10회권 이용" },
    { label: "Recovery Protocol", body: "무조건 강한 관리가 아니라 그날 컨디션에 맞춰 순서를 바꿔주는 점이 좋았습니다.", meta: "40대 여성 · 5회권 이용" },
  ],
  [
    { label: "순환·대사", body: "손발이 차고 몸이 잘 붓는 편인데 관리 후 몸이 따뜻해지고 훨씬 가벼웠습니다.", meta: "30대 여성 · 5회권 이용" },
    { label: "Metabolic Boost", body: "운동하기 힘든 날에도 부담 없이 받을 수 있어 꾸준히 관리하기 좋았습니다.", meta: "50대 여성 · 10회권 이용" },
  ],
] as const;

export const RECOVERY_INSTAGRAM_REVIEW = {
  title: "앰버서더 크라이오테라피 후기",
  label: "Instagram Review",
  video: "/videos/ambassador-cryotherapy.mp4",
  href: "https://www.instagram.com/wim_center/",
} as const;

export const RECOVERY_HERO_VIDEO = {
  video: "/videos/device-oxygen-chamber-hero.mp4",
  href: "https://www.instagram.com/wim_center/",
  label: "옥시젠챔버 Instagram 영상 보기",
} as const;

export const RECOVERY_SIGNS = [
  { title: "다음 날이 무겁다", combo: "피로 회복" },
  { title: "다리가 붓는다", combo: "붓기 제거" },
  { title: "결림이 안 풀린다", combo: "근육 회복" },
  { title: "정체기가 왔다", combo: "순환·대사" },
] as const;

export const RECOVERY_INTRO_FACTS = [
  { label: "해야 하는 일", value: "눕기" },
  { label: "가장 짧은 코스", value: "3분" },
  { label: "가장 긴 코스", value: "40분" },
] as const;

export const RECOVERY_JOURNEY = [
  { no: "1", title: "최초 상담", desc: "목표와 라이프스타일을 기준으로 관리 구조를 설계합니다." },
  { no: "2", title: "방문 시 컨디션 체크", desc: "누적 데이터와 당일 컨디션을 확인합니다." },
  { no: "3", title: "당일 관리 목적 정렬", desc: "그날의 관리 방향을 전담 매니저와 함께 다시 설정합니다." },
  { no: "4", title: "방문 당일 관리 조정", desc: "신체 반응에 따라 케어를 실시간으로 조정합니다." },
  { no: "5", title: "재방문 리디자인", desc: "관리 효과를 리뷰하고 다음 방문의 관리를 다시 설계합니다." },
] as const;

export const RECOVERY_RECORDS = [
  { handle: "@runner_jw", body: "운동 끝나고 크라이오 3분. 다음 날이 다르다", photo: "인스타 — 크라이오 캡슐 앞" },
  { handle: "@seoyeon.log", body: "종아리 붓기 관리 4주차 기록", photo: "인스타 — 에어프레셔 이용 중" },
  { handle: "@mindful_hj", body: "야근 주간 리셋. 옥시챔버 40분", photo: "인스타 — 옥시챔버 내부" },
  { handle: "@daily_kyu", body: "사우나보다 짧고 확실한 인프라레드", photo: "인스타 — 인프라레드 캡슐" },
  { handle: "@yoonso_fit", body: "감량 정체기에 찾은 회복 루틴", photo: "인스타 — 윔펄스테라피" },
] as const;

export const RECOVERY_THEMES = [
  { name: "다이어트 올인원 패키지", time: "1시간", was: "225,000원", now: "130,000원", off: "42%", items: ["크라이오테라피", "고압산소챔버", "인프라레드 사우나"], desc: "세 가지 프리미엄 웰니스 프로그램을 한 번에 경험합니다. 지친 컨디션 관리와 다이어트 루틴을 함께 잡습니다." },
  { name: "붓기 집중 케어 패키지", time: "1시간", was: "125,000원", now: "70,000원", off: "44%", items: ["인프라레드", "에어프레셔"], desc: "오래 앉아 몸이 무거운 날, 운동이나 시술 후 컨디션 관리가 필요한 날, 얼굴과 몸의 붓기가 고민되는 날을 위한 패키지입니다." },
] as const;

export const RECOVERY_TRIALS = [
  { name: "크라이오 테라피", time: "3분", was: "50,000원", now: "35,000원", off: "30%", desc: "-140°C 초저온 냉각 케어로 지친 몸을 깨우고 빠른 컨디션 회복을 돕습니다." },
  { name: "인프라 레드 사우나", time: "", was: "75,000원", now: "40,000원", off: "46%", desc: "몸속까지 따뜻하게 데워 쌓인 긴장을 풀고 개운한 컨디션을 만들어줍니다." },
  { name: "인프라 레드 캡슐", time: "", was: "90,000원", now: "50,000원", off: "44%", desc: "몸을 따뜻하게 데워 땀 배출과 전신 이완을 돕는 관리입니다." },
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
