/**
 * 원페이지(/page-single) 문구와 반복 데이터.
 * 화면의 텍스트를 바꿀 때는 이 파일만 수정하면 됩니다.
 */
export const PAGE_SINGLE_CONTENT = {
  hero: {
    sectionLabel: "① 히어로 — 현행 카피 유지",
    imagePlaceholder: "골블러드 다크 우드 이미지 (현행 유지)",
    eyebrow: "단순 감량을 넘어, 롱제비티로 도약",
    title: "  기기 관리의 경계를 허무는 롱제비티 케어 시스템",
    description: '"엄선된 웰니스 테크만을 큐레이션한 공간, 윔센터에서 시작됩니다. 6가지 기기를 활용해 열·냉·압력·산소·근육 자극처럼 서로 다른 기전을 조합하고, 회복·순환·대사 활성을 짧은 시간 안에 끌어올리도록 설계했습니다.',
    note: "✓ 첫 카피 좋다고 하신 부분 — 그대로. 단, 히어로 아래 붙어 있던 긴 설명 문단은 전부 삭제. 히어로는 이 세 줄로 끝.",
  },
  roadmap: {
    eyebrow: "DEVICE CARE JOURNEY",
    title: "오늘의 몸을 확인하고, 회복까지 이어갑니다",
    description: "현재 컨디션을 확인한 뒤 필요한 기기와 순서를 정하고, 다음 관리 기준까지 남깁니다.",
    steps: [
      { no: "1", title: "최초 상담", desc: "목표와 라이프스타일을 기준으로 관리 구조를 설계합니다." },
      { no: "2", title: "방문 시 컨디션 체크", desc: "누적 데이터와 당일 컨디션을 확인합니다." },
      { no: "3", title: "당일 관리 목적 정렬", desc: "그날의 관리 방향을 전담 매니저와 함께 다시 설정합니다." },
      { no: "4", title: "방문 당일 관리 조정", desc: "신체 반응에 따라 케어를 실시간으로 조정합니다." },
      { no: "5", title: "재방문 리디자인", desc: "관리 효과를 리뷰하고 다음 방문의 관리를 다시 설계합니다." },
    ],
  },
  devices: {
    sectionLabel: "② 기기 5종 — 이미지·설명 지그재그",
    title: "다섯 개의 기전, 다섯 가지 회복",
    subtitle: "한 대씩, 몸으로 이해되게 보여줍니다",
    detailButtonLabel: "상세보기",
    modalVideoLabel: "동영상 자리",
    modalCloseLabel: "모달 닫기",
    note: "✓ 규칙: 기기당 정의 1문장 + 감각 묘사 1문장 + 효과 키워드 뱃지 2개 전부. 현행의 기전(Mechanism)/기대효과 표는 전부 삭제하고, 원하는 사람만 보게 ‘기전 자세히 보기’ 접기(아코디언)로 이동. 뱃지 단어(붓기·딥히트·산소·림프·이완)가 ‘남는 한두 단어’의 역할 — 스크롤 끝나면 이 10개 단어만 기억에 남으면 성공.",
    items: [
      { kicker: "DEVICE 01 · CRYO", name: "크라이오테라피", desc: "초저온 자극으로 혈관을 수축·확장시켜 회복과 순환을 돕습니다. 전신은 물론 얼굴까지 적용할 수 있고, 가스를 쓰지 않아 비교적 안전합니다.", tags: ["붓기 진정", "회복"], photo: ["크라이오 실사진", "(전신 냉각 캡슐 · 입장 장면)"] },
      { kicker: "DEVICE 02 · INFRARED", name: "인프라레드 캡슐 & 사우나", desc: "적외선으로 몸을 데워 순환과 이완을 돕는 온열 케어입니다. 짧고 효율적인 캡슐, 이완에 집중한 목조 사우나 중 목적에 따라 선택할 수 있습니다.", tags: ["딥 히트", "순환"], photo: ["인프라레드 캡슐 실사진", "(누워서 발한 장면)"], flip: true },
      { kicker: "DEVICE 03 · OXYGEN", name: "고압산소 챔버", desc: "일반 대기압보다 높은 압력에서 산소를 흡입해, 회복에 필요한 산소 공급을 돕습니다. 강남 인근에서 흔치 않은 4대 규모로, 대기 없이 이용할 수 있습니다.", tags: ["산소 충전", "피로 리셋"], photo: ["옥시챔버 실사진", "(고압산소 캡슐 내부)"] },
      { kicker: "DEVICE 04 · AIR PRESSURE", name: "에어프레셔", desc: "압력 자극으로 순환과 붓기, 디톡스 케어를 돕습니다.", tags: ["림프 순환", "다리 부종"], photo: ["에어프레셔 실사진", "(다리 공압 슈트)"], flip: true },
      { kicker: "DEVICE 05 · FASCIA", name: "윔펄스테라피", desc: "근육 자극을 통해 활성화와 깊은 이완을 돕습니다.", tags: ["근막 이완", "결림"], photo: ["근막리커버리 실사진", "(관리 장면)"] },
    ],
  },
  combinations: {
    sectionLabel: "③ 조합 — 상황 선택형 (확정 · 탭 실제 작동)",
    title: "오늘, 어떤 몸인가요?",
    subtitle: "그날의 컨디션과 회복 상태에 따라, 가장 효율적인 순서와 조합을 적용합니다.",
    situations: ["🏋 운동한 날", "🧍 종일 서 있던 날", "😩 컨디션 무너진 주", "🔥 감량 중"],
    combos: [
      {
        steps: ["인프라레드 30′", "크라이오 3′"],
        courseTitle: "Contrast Therapy",
        courseDescription: "인프라레드와 크라이오테라피를 번갈아 적용해, 혈관의 수축과 확장을 통한 회복과 순환을 돕습니다.",
        photo: ["조합 이미지: 크라이오 입장 장면"],
      },
      {
        steps: ["에어프레셔 30′", "근막 리커버리 15′"],
        courseTitle: "Hyper Recovery Protocol",
        courseDescription: "고압산소와 크라이오테라피를 함께 적용해, 붓기 감소와 염증 관리, 회복 가속을 돕습니다.",
        photo: ["조합 이미지: 에어프레셔 공압 슈트"],
      },
      {
        steps: ["옥시챔버 40′", "인프라레드 20′"],
        courseTitle: "Lymphatic Flow Care",
        courseDescription: "에어프레셔와 인프라레드를 함께 적용해, 순환과 부종, 디톡스 케어를 돕습니다.",
        photo: ["조합 이미지: 옥시챔버 캡슐 내부"],
      },
      {
        steps: ["인프라레드 30′", "에어프레셔 20′"],
        courseTitle: "Metabolic Boost Therapy",
        courseDescription: "윔펄스테라피와 인프라레드를 함께 적용해, 근육 활성과 깊은 이완을 돕습니다.",
        photo: ["조합 이미지: 인프라레드 발한 장면"],
      },
    ],
    steps: ["인프라레드 30′", "크라이오 3′"],
    courseTitle: "CONTRAST — 온냉 교차 · 총 40분",
    courseDescription: "데운 몸을 한 번에 식히며 순환을 극대화합니다. 운동한 날의 마무리.",
    photo: ["조합 이미지: 크라이오 입장 장면"],
    guidancePrefix: "어떤 조합이 맞을지는, ",
    guidanceStrong: "매니저가 오늘 몸을 보고 정해드립니다",
    note: "✓ 확정안. 내 상황이 입구(기기명 ✗) → 패널 안에 코스 시간 표기(실제감). 시간(30′)은 실제 운영 기준으로 교체. 마지막 한 줄이 휴먼터치·상담 연결 고리.",
  },
  passes: {
    sectionLabel: "④ 다회권 — 횟수제 (1·3·5·10회)",
    title: "회복은 이벤트가 아니라 루틴입니다",
    subtitle: "자주 올수록, 회당 가격이 내려갑니다",
    featuredLabel: "추천",
    items: [
      { name: "1회권", sub: "처음이라면, 체험으로", price: "00,000원", per: "회당 00,000원", off: undefined, featured: false },
      { name: "3회권", sub: "조합 하나를 제대로", price: "000,000원", per: "회당 00,000원", off: "-0%", featured: false },
      { name: "5회권", sub: "주 1회, 한 달 루틴", price: "000,000원", per: "회당 00,000원", off: "-00%", featured: true },
      { name: "10회권", sub: "가장 합리적인 회당가", price: "000,000원", per: "회당 00,000원", off: "-00%", featured: false },
    ],
    policyPrefix: "모든 회권은 ",
    policyStrong: "다섯 가지 기기·네 가지 조합 어디에나",
    policySuffix: " 쓸 수 있습니다 · 감량 프로그램 회원은 상담 시 연계 혜택 안내",
    note: "✓ 카드의 핵심은 총액이 아니라 회당 가격이 내려가는 것 — 회당가+할인율을 총액보다 크게. 추천 뱃지는 5회(주1회×한 달 = 루틴 서사와 일치). ‘어디에나 쓸 수 있다’ 한 줄이 교차 사용 정책의 선언이고, 상세 정책은 아래 Q&A로 연결. 가격·할인율은 실제 정책 확정 후 기입.",
  },
  faq: {
    sectionLabel: "⑤ Q&A — 정책 + 기기 궁금증 (아코디언)",
    title: "자주 묻는 질문",
    openedQuestion: "▼ 회권으로 매번 다른 기기를 받아도 되나요?",
    openedAnswer: "네. 회권은 특정 기기 전용이 아니라 모든 기기와 조합에 교차 사용됩니다. 오늘은 크라이오, 다음엔 LYMPHATIC 조합 — 그날 몸에 맞게 매니저와 정하시면 됩니다.",
    openedWarning: "조합 이용 시 차감 기준(1회? 1.5회?) 정책 확정 필요",
    questions: [
      "유효기간이 있나요? 남으면 어떻게 되나요?",
      "감량 프로그램 회원인데, 회권을 따로 사야 하나요?",
      "크라이오, 많이 춥지 않나요?",
      "옥시챔버 안이 답답하지 않을까요?",
      "운동 전이 좋나요, 후가 좋나요?",
      "받으면 안 되는 경우도 있나요?",
    ],
    note: "✓ 순서 의도: 정책 3개(교차 사용 1번 — 다회권 바로 아래야) → 기기 궁금증 3개(무서움 해소) → 안전 고지 1개(신뢰 마무리). 첫 질문만 펼침 상태로. 노란 표시는 정책 확정 필요 항목 — 특히 조합 이용 시 회권 차감 기준은 현장 분명 포인트라 반드시 먼저 정해야 함.",
  },
  cta: {
    sectionLabel: "⑥ CTA",
    title: "오늘 몸 상태로 상담 받아보세요",
    subtitle: "어떤 기기·조합이 맞는지는 몸을 보고 정합니다",
    primaryLabel: "상담 신청",
    secondaryLabel: "네이버 예약",
  },
} as const;

export interface PageSingleDevice {
  readonly kicker: string;
  readonly name: string;
  readonly desc: string;
  readonly tags: readonly string[];
  readonly photo: readonly string[];
  readonly flip?: boolean;
}
