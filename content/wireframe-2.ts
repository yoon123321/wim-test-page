/**
 * 와이어프레임 2 콘텐츠 초안.
 * 현재 화면은 도형 와이어프레임이므로 문구는 aria-label과 구조 데이터에 연결됩니다.
 * 디자인 확정 후 이 데이터 그대로 실제 텍스트 컴포넌트에 사용할 수 있습니다.
 */
export const WIREFRAME_TWO_CONTENT = {
  navigation: {
    brand: "윔센터",
    items: [
      { label: "센터 소개", width: 44 },
      { label: "3M 프로그램", width: 52 },
      { label: "프로그램", width: 38 },
      { label: "케어팀", width: 36 },
      { label: "사례", width: 30 },
    ],
    secondaryButton: "로그인",
    primaryButton: "상담 신청",
  },
  hero: {
    eyebrow: "WIM CENTER",
    title: "다이어트 계의 새로운 지평을 열다",
    description: "다이어트 센터의 목적은 더 이상 체지방 감소에만 머물지 않습니다. \n윔센터로부터 그 목적은, 삶의 질을 끌어올리는 웰니스 경험으로 재정의됩니다.",
    primaryButton: "상담 신청",
    secondaryButton: "프로그램 보기",
    imageDescription: "히어로 대표 이미지",
  },
  threeM: {
    eyebrow: "3M METHOD",
    title: "세 가지 기준으로 설계합니다",
    description: "측정하고, 관리하고, 유지하는 과정을 하나의 흐름으로 연결합니다.",
    items: [
      { title: "MEASURE", subtitle: "정밀 측정", description: "현재 몸 상태와 생활 패턴을 구체적으로 확인합니다.", titleWidth: 120, subtitleWidth: 110, lastLineWidth: "40%" },
      { title: "MANAGE", subtitle: "맞춤 관리", description: "목표와 컨디션에 맞춰 실행 가능한 계획을 구성합니다.", titleWidth: 150, subtitleWidth: 118, lastLineWidth: "52%" },
      { title: "MAINTAIN", subtitle: "유지 습관", description: "감량 이후에도 이어갈 수 있는 습관을 함께 만듭니다.", titleWidth: 170, subtitleWidth: 126, lastLineWidth: "44%" },
    ],
  },
  programs: {
    eyebrow: "PHILOSOPHY",
    title: "윔센터의 철학",
    description: "몸의 변화를 넘어, 건강한 관리가 일상으로 이어지도록 함께합니다.",
    items: [
      { title: "체중 관리", subtitle: "감량 중심", description: "체중과 체지방 변화를 중심으로 관리합니다.", imageDescription: "체중 관리 이미지", titleWidth: 120, subtitleWidth: 100, lastLineWidth: "70%" },
      { title: "대사 관리", subtitle: "건강 중심", description: "대사 지표와 생활 리듬을 함께 점검합니다.", imageDescription: "대사 관리 이미지", titleWidth: 150, subtitleWidth: 90, lastLineWidth: "58%" },
      { title: "유지 관리", subtitle: "습관 중심", description: "변화한 몸을 안정적으로 유지하도록 돕습니다.", imageDescription: "유지 관리 이미지", titleWidth: 110, subtitleWidth: 104, lastLineWidth: "64%" },
    ],
  },
  introduction: {
    eyebrow: "ABOUT WIM",
    title: "한 사람을 위한 관리",
    personName: "전담 코치",
    personRole: "퍼스널 헬스 매니저",
    description: "상담부터 실행, 유지 관리까지 한 명의 담당자가 흐름을 이어갑니다.",
    button: "센터 자세히 보기",
    imageDescription: "센터 또는 담당자 소개 이미지",
    tickerItems: ["정밀 측정", "1:1 관리", "생활 습관", "유지 프로그램"],
  },
  careTeam: {
    eyebrow: "CARE TEAM",
    title: "각 분야의 전문가가 함께 봅니다",
    description: "의료진과 코치, 매니저가 같은 목표를 공유하며 관리합니다.",
    summary: "상담부터 사후 관리까지 하나의 팀으로 연결",
    centerLabel: "회원",
    members: [
      { title: "의료진", description: "검사 결과와 건강 상태를 확인합니다." },
      { title: "전담 코치", description: "일상에서 실행할 계획을 설계합니다." },
      { title: "케어 매니저", description: "예약과 프로그램 진행을 관리합니다." },
    ],
  },
  consultation: {
    eyebrow: "CONSULTATION",
    titleLines: ["지금 몸 상태를 확인하고", "맞는 계획을 시작하세요"],
    description: "간단한 상담을 통해 현재 상태와 추천 프로그램을 안내해 드립니다.",
    primaryButton: "상담 신청",
    secondaryButton: "전화 문의",
    infoTitle: "상담 안내",
    infoLines: ["평일 09:00–18:00", "예약제로 운영됩니다."],
    imageDescription: "상담 안내 이미지",
  },
  cases: {
    eyebrow: "CASES",
    title: "변화를 시작한 사람들",
    linkLabel: "전체 사례 보기",
    videoPlaceholder: "유튜브 영상 자리",
    items: [
      { title: "산후 체중 관리", description: "생활 리듬을 회복하며 진행한 맞춤 관리", lastLineWidth: "70%" },
      { title: "갱년기 관리", description: "몸의 변화에 맞춰 조정한 건강 관리", lastLineWidth: "86%" },
      { title: "대사 개선", description: "검사 결과를 기반으로 진행한 단계별 관리", lastLineWidth: "78%" },
      { title: "고도비만 관리", description: "의료진과 함께 진행한 장기 감량 관리", lastLineWidth: "64%" },
    ],
  },
} as const;
