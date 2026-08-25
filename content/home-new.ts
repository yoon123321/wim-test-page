/**
 * 개선안(NEW) 메인 페이지 콘텐츠 — 피그마 WIM-Center-DESIGN 시안 기준
 * (메인_MO_1 · 메인_PC 프레임의 실제 카피)
 *
 * 문구 수정은 이 파일에서만 하면 된다.
 */

/**
 * 이미지 — public/images/main/ 안의 파일과 1:1로 대응한다.
 *
 * 사진을 바꾸려면 같은 이름으로 파일만 덮어쓰면 된다. 코드는 손댈 필요 없다.
 * 파일 이름을 바꾸고 싶으면 아래 값만 고치면 된다.
 * 확장자가 달라지면(jpg → png 등) 여기 확장자도 같이 맞춰야 한다.
 */
const IMG = "/images/main";

export const WIM_NEW_IMAGES = {
  hero: `${IMG}/hero.png`,
  heroMobile: `${IMG}/hero_mobile.png`,
  intro: `${IMG}/intro.png`,

  /** STEP 01 검사 6종 — 페이지에 나오는 순서, PC/모바일 이미지가 다르다 */
  test01Personality: `${IMG}/test-01.png`, // TODO: PC 전용 사진 파일 추가 필요
  test01PersonalityMobile: `${IMG}/test-01_mobile.png`,
  test02Lifestyle: `${IMG}/test-02.png`, // TODO: PC 전용 사진 파일 추가 필요
  test02LifestyleMobile: `${IMG}/test-02_mobile.png`,
  test03Body: `${IMG}/test-03.png`, // TODO: PC 전용 사진 파일 추가 필요
  test03BodyMobile: `${IMG}/test-03_mobile.png`,
  test04Gene: `${IMG}/test-04.png`, // 임시 플레이스홀더 — PC용 실제 사진으로 교체 필요
  test04GeneMobile: `${IMG}/test-04_mobile.png`, // 임시 플레이스홀더 — 모바일용 실제 사진으로 교체 필요
  test05Stress: `${IMG}/test-05.png`, // 임시 플레이스홀더 — PC용 실제 사진으로 교체 필요
  test05StressMobile: `${IMG}/test-05_mobile.png`, // 임시 플레이스홀더 — 모바일용 실제 사진으로 교체 필요
  test06Posture: `${IMG}/test-06.png`, // TODO: PC 전용 사진 파일 추가 필요
  test06PostureMobile: `${IMG}/test-06_mobile.png`,

  /** STEP 02 관리 8종 — PC/모바일 이미지가 다르다 */
  care01Feedback: `${IMG}/care-01.png`, // TODO: PC 전용 사진 파일 추가 필요
  care01FeedbackMobile: `${IMG}/care-01_mobile.png`,
  care02Body: `${IMG}/care-02.png`, // TODO: PC 전용 사진 파일 추가 필요
  care02BodyMobile: `${IMG}/care-02_mobile.png`,
  care03Device: `${IMG}/care-03.png`, // TODO: PC 전용 사진 파일 추가 필요
  care03DeviceMobile: `${IMG}/care-03_mobile.png`,
  care04Nutrition: `${IMG}/care-04.png`, // TODO: PC 전용 사진 파일 추가 필요
  care04NutritionMobile: `${IMG}/care-04_mobile.png`,
  care05Exercise: `${IMG}/care-05.png`, // TODO: PC 전용 사진 파일 추가 필요
  care05ExerciseMobile: `${IMG}/care-05_mobile.png`,
  care06Sleep: `${IMG}/care-06.png`, // TODO: PC 전용 사진 파일 추가 필요
  care06SleepMobile: `${IMG}/care-06_mobile.png`,
  care07Counseling: `${IMG}/care-07.png`, // TODO: PC 전용 사진 파일 추가 필요
  care07CounselingMobile: `${IMG}/care-07_mobile.png`,
  care08Maintenance: `${IMG}/care-08.png`, // TODO: PC 전용 사진 파일 추가 필요
  care08MaintenanceMobile: `${IMG}/care-08_mobile.png`,

  /** CASES 프로그램 3종 — PC/모바일 이미지가 다르다 */
  program01Wellness: `${IMG}/program-01.png`, // TODO: PC 전용 사진 파일 추가 필요
  program01WellnessMobile: `${IMG}/program-01_mobile.png`,
  program02Light: `${IMG}/program-02.png`, // TODO: PC 전용 사진 파일 추가 필요
  program02LightMobile: `${IMG}/program-02_mobile.png`,
  program03Recovery: `${IMG}/program-03.png`, // TODO: PC 전용 사진 파일 추가 필요
  program03RecoveryMobile: `${IMG}/program-03_mobile.png`,
} as const;

/** 아이콘 · 로고 (피그마 export SVG) */
export const WIM_NEW_ICONS = {
  arrow: `${IMG}/icons/icon-arrow.svg`,
  arrowGreen: `${IMG}/icons/icon-arrow-sm.svg`,
  arrowBox: `${IMG}/icons/icon-arrow-box.svg`,
  chevron: `${IMG}/icons/icon-chevron.svg`,
  plus: `${IMG}/icons/icon-plus.svg`,
  logoWim: `${IMG}/icons/footer-logo-2.svg`,
  logoCenter: `${IMG}/icons/footer-logo-1.svg`,
  sns: [`${IMG}/icons/sns-1.svg`, `${IMG}/icons/sns-2.svg`, `${IMG}/icons/sns-3.svg`, `${IMG}/icons/sns-4.svg`],
} as const;

export const WIM_NEW_COPY = {
  hero: {
    image: WIM_NEW_IMAGES.hero,
    imageMobile: WIM_NEW_IMAGES.heroMobile,
    titleLines: ["살이 찌는 이유는 모두 다 다른데,", "방법이 같을 수는 없습니다"],
    sub: "나만의 위해 설계하는 단하나의 다이어트",
    primaryCta: "무료 기질 검사 받기",
    secondaryCta: "프로그램 살펴보기",
  },
  intro: {
    eyebrow: "나는 왜 항상 다이어트에 실패할까?",
    titleLines: ["윔은 감량 이전에", "먼저 ‘나’를 깊이 있게 알아봅니다."],
    descLines: [
      "우리는 이미 살이 찔 수밖에 없는 환경에서 살고 있습니다.",
      "같은 방법이 통하지 않았던 이유를 먼저 확인합니다.",
    ],
    image: WIM_NEW_IMAGES.intro,
    imageAlt: "윔 앱으로 검사 결과를 확인하는 모습",
  },
  philosophy: {
    normalLines: ["의료진이 정밀하게 진단해", "나에게 딱 맞는 방법을 설계하고,"],
    boldLines: ["전문 관리사가 감량의 전 과정을", "끝까지 케어합니다."],
  },
  step1: {
    label: "STEP 01",
    title: "나를 이해하기 위한 6가지 검사",
    detailLabel: "자세히 보기 -->",
  },
  step2: {
    label: "STEP 02",
    title: "맞춤 설계로 이렇게 관리합니다.",
    swipeHint: "옆으로 넘겨 8가지의 관리 방식을 확인하세요.",
    detailLabel: "자세히 보기 -->",
  },
  results: {
    eyebrow: "RESULTS",
    title: "말보다 숫자로 보여 드리겠습니다.",
    footnoteLines: ["감량 수치는 완주 회원 기록 기준으로,", "결과는 개인에 따라 다릅니다."],
  },
  reviews: {
    eyebrow: "REVIEWS",
    titleLines: ["고객이 직접 경험하고", "평가한 윔센터 강남"],
    sub: "네이버와 블로그 속 진짜 목소리를 확인하세요.",
  },
  cases: {
    eyebrow: "CASES",
    titleLines: ["당신에게 맞는", "감량 프로그램을 제안합니다."],
    descLines: ["목표와 몸 상태에 따라,", "서로 다른 프로그램을 제안합니다."],
  },
  cta: {
    title: "나만을 위한 감량 솔루션을 찾아 보세요.",
    buttonLabel: "상담 신청하기",
  },
  footer: {
    info: [
      {
        label: "영업 시간",
        strong: "연중무휴",
        rows: [
          { day: "평일", time: "AM 10:00 ~PM 10:00" },
          { day: "주말, 공휴일", time: "AM 10:00 ~PM 04:00" },
        ],
      },
      {
        label: "전화 문의",
        strong: "1811-2061",
        rows: [
          { day: "평일", time: "AM 10:00 ~PM 07:00" },
          { day: "주말, 공휴일", time: "AM 10:00 ~PM 03:00" },
        ],
      },
    ],
    address: {
      label: "오시는 길",
      strongLines: ["서울특별시 서초구 서초대로77길 17", "(서초동, BLOCK77 지하 1층)"],
      walk: "강남역 10번 출구 도보 3분",
      parking: "주차 가능(유료) 발렛 주차 불가",
    },
    copyright: "© 2026 WIM CENTER",
    terms: "개인정보 보호 및 이용약관",
    business: ["상호명 : 주식회사 윔센터 강남", "대표자 : 정해용", "사업자등록번호 : 774-87-02944"],
  },
} as const;

export type WimNewTest = {
  title: string;
  /** 카드 위 2줄 설명 (모바일은 2줄, PC는 1줄로 합쳐서 노출) */
  lines: readonly string[];
  image?: string;
  /** PC와 다른 사진을 쓸 때만 지정 (없으면 image를 그대로 씀) */
  imageMobile?: string;
  imageAlt: string;
  /** 아치 안에서 사진이 잘리는 위치 보정 */
  position?: string;
  /** 카드 클릭 시 뜨는 상세 모달 문구 */
  detail: {
    eyebrow?: string;
    title: string;
    descLines: readonly string[];
    tagLabel?: string;
    tags: readonly string[];
  };
};

export const WIM_NEW_TESTS: readonly WimNewTest[] = [
  {
    title: "개인 성향 분석",
    lines: ["내가 무너지는 순간을", "되찾습니다."],
    image: WIM_NEW_IMAGES.test01Personality,
    imageMobile: WIM_NEW_IMAGES.test01PersonalityMobile,
    imageAlt: "개인 성향 분석",
    position: "50% 30%",
    detail: {
      eyebrow: "01 · 성향 리서치",
      title: "개인 성향 분석",
      descLines: [
        "같은 식단을 줘도 무너지는 지점은 사람마다 다릅니다.",
        "기질을 먼저 알면 “참으세요”라고 말하지 않아도 되는 방식을 고를 수 있습니다.",
      ],
      tagLabel: "확인 항목",
      tags: ["식욕 유형과 강도", "스트레스 대처 방식", "보상 식사 패턴", "계획 실행 지속력"],
    },
  },
  {
    title: "생활 패턴 분석",
    lines: ["하루 중 새는 지점을", "찾습니다."],
    image: WIM_NEW_IMAGES.test02Lifestyle,
    imageMobile: WIM_NEW_IMAGES.test02LifestyleMobile,
    imageAlt: "생활 패턴 분석",
    position: "50% 40%",
    detail: {
      eyebrow: "02 · 생활 리서치",
      title: "생활 패턴 분석",
      descLines: [
        "하루의 어디가 무너지는지 모르면 계획은 매번 처음부터 시작됩니다.",
        "다섯 축을 함께 그려야 바꿀 한 지점을 정할 수 있습니다.",
      ],
      tagLabel: "확인 항목",
      tags: ["식사 시간과 구성", "운동 빈도와 강도", "하루 활동량·걸음 수", "수면 시간과 질", "스트레스와 기분 상태"],
    },
  },
  {
    title: "체성분 분석",
    lines: ["뺄 것과 지킬것을", "나눕니다."],
    image: WIM_NEW_IMAGES.test03Body,
    imageMobile: WIM_NEW_IMAGES.test03BodyMobile,
    imageAlt: "체성분 분석",
    position: "50% 20%",
    detail: {
      eyebrow: "03 · 인바디",
      title: "체성분 분석",
      descLines: ["체중은 결과일 뿐입니다. 무엇이 빠져야 하고 무엇을 지켜야 하는지는 몸의 구성이 알려줍니다."],
      tagLabel: "확인 항목",
      tags: ["체지방량·체지방률", "내장지방 레벨", "골격근량과 부위 균형", "체수분·부종 여부"],
    },
  },
  {
    title: "비만 유전자 검사",
    lines: ["나에게 무리인 방식을", "걸러냅니다."],
    image: WIM_NEW_IMAGES.test04Gene,
    imageMobile: WIM_NEW_IMAGES.test04GeneMobile,
    imageAlt: "비만 유전자 검사",
    detail: {
      eyebrow: "04 · 유전자",
      title: "비만 유전자 검사",
      descLines: ["노력의 방향을 정하는 정보입니다. 타고난 조건을 알면 나에게 무리인 방식을 처음부터 걸러낼 수 있습니다."],
      tagLabel: "확인 항목",
      tags: ["탄수화물·지방 대사 경향", "식욕 조절 관련 유전형", "지방 분포 경향", "운동 반응성", "요요 위험도"],
    },
  },
  {
    title: "자율 신경 및 스트레스 측정",
    lines: ["내 몸이 반응하는 음식을", "찾습니다."],
    image: WIM_NEW_IMAGES.test05Stress,
    imageMobile: WIM_NEW_IMAGES.test05StressMobile,
    imageAlt: "자율 신경 및 스트레스 측정",
    detail: {
      eyebrow: "05 · 스트레스",
      title: "자율 신경 · 스트레스 측정",
      descLines: ["스트레스는 참는 문제가 아니라 몸에 남는 문제입니다. 자율신경 상태를 보면 왜 잠이 얕고 식욕이 몰리는지가 숫자로 드러납니다."],
      tagLabel: "확인 항목",
      tags: ["자율신경 균형도", "스트레스 지수", "심박 변이도(HRV)", "피로 누적 수준", "회복 탄력성"],
    },
  },
  {
    title: "자세 움직임 분석",
    lines: ["지금 가능한 강도를", "정합니다."],
    image: WIM_NEW_IMAGES.test06Posture,
    imageMobile: WIM_NEW_IMAGES.test06PostureMobile,
    imageAlt: "자세 움직임 분석",
    position: "50% 25%",
    detail: {
      eyebrow: "06 · 운동측정",
      title: "자세 움직임 분석",
      descLines: ["지금 할 수 있는 강도에서 시작해야 이어집니다. 체력과 통증을 먼저 재고 나면 운동은 부담이 아니라 계획이 됩니다."],
      tagLabel: "확인 항목",
      tags: ["상·하체 근력", "심폐 지구력", "관절 가동 범위", "통증·부상 이력", "자세 불균형"],
    },
  },
];

export type WimNewCare = {
  no: string;
  title: string;
  line: string;
  image?: string;
  /** PC와 다른 사진을 쓸 때만 지정 (없으면 image를 그대로 씀) */
  imageMobile?: string;
  imageAlt: string;
  position?: string;
  detail: {
    eyebrow?: string;
    title: string;
    description: string;
    tagLabel?: string;
    tags: readonly string[];
  };
};

export const WIM_NEW_CARES: readonly WimNewCare[] = [
  {
    no: "01.",
    title: "주 3회 맞춤 피드백",
    line: "기록을 읽고 \n주 3회 방향을 조정합니다.",
    image: WIM_NEW_IMAGES.care01Feedback,
    imageMobile: WIM_NEW_IMAGES.care01FeedbackMobile,
    imageAlt: "주 3회 맞춤 피드백",
    detail: {
      eyebrow: "01 · 피드백",
      title: "주 3회 맞춤 피드백",
      description: "매일의 기록이 다음 피드백의 근거가 됩니다. 특히 혈당은 CGM으로 추적해, 먹을 때마다의 반응에서 무너지는 지점을 데이터로 찾습니다.",
      tagLabel: "받는 것",
      tags: ["앱·채팅 피드백 주 3회", "사진 기록만으로 관리", "식단·수면·수분·운동·간식·체중 추적", "혈당(CGM) 반응 추적", "활동량 원격 모니터링"],
    },
  },
  {
    no: "02.",
    title: "주간 체성분 분석",
    line: "매주 체성분 변화를 \n확인합니다.",
    image: WIM_NEW_IMAGES.care02Body,
    imageMobile: WIM_NEW_IMAGES.care02BodyMobile,
    imageAlt: "주간 체성분 분석",
    detail: {
      eyebrow: "01 · 변화관리",
      title: "주간 체성분 분석",
      description: "매주 같은 사람이 같은 기록을 이어서 봅니다. 이번 주에 무너진 지점을 확인하고 다음 주 실천 기준을 조정합니다.",
      tagLabel: "받는 것",
      tags: ["인바디·식사 기록 함께 확인", "주차별 실천 기준 조정", "전담 매니저 1:1 설계"],
    },
  },
  {
    no: "03.",
    title: "맞춤 기기 관리",
    line: "기기로 순환과 회복을 \n돕습니다.",
    image: WIM_NEW_IMAGES.care03Device,
    imageMobile: WIM_NEW_IMAGES.care03DeviceMobile,
    imageAlt: "맞춤 기기 관리",
    detail: {
      title: "맞춤 기기 관리",
      description: "부종과 피로, 회복 상태를 확인하고 그날의 몸에 필요한 기기와 강도를 조합해 순환과 회복을 돕습니다.",
      tags: ["컨디션별 기기 선택", "부위별 강도 조정", "회복 상태 확인"],
    },
  },
  {
    no: "04.",
    title: "맞춤 영양교육",
    line: "오늘 저녁에 \n쓸 기준을 배웁니다.",
    image: WIM_NEW_IMAGES.care04Nutrition,
    imageMobile: WIM_NEW_IMAGES.care04NutritionMobile,
    imageAlt: "맞춤 영양교육",
    detail: {
      eyebrow: "04 · 영양교육",
      title: "맞춤 영양교육",
      description: "외우는 지식이 아니라 오늘 저녁에 바로 쓰는 기준을 배웁니다. 내 혈당 반응을 기준으로 식단을 조정합니다.",
      tagLabel: "받는 것",
      tags: ["탄단지 구성과 식사 순서", "외식·배달 선택법", "혈당 반응에 맞춘 식단 조정"],
    },
  },
  // TODO: 실제 카피 확정 전 임시 문구 (05~08)
  {
    no: "05.",
    title: "맞춤 운동 처방",
    line: "지금 할 수 있는 강도로 \n시작합니다.",
    image: WIM_NEW_IMAGES.care05Exercise,
    imageMobile: WIM_NEW_IMAGES.care05ExerciseMobile,
    imageAlt: "맞춤 운동 처방",
    detail: {
      eyebrow: "05 · 운동관리",
      title: "맞춤 운동 솔루션",
      description: "지금의 체력과 통증 여부를 기준으로 정합니다. 집·회사·헬스장 중 실제로 할 수 있는 곳에서, 근육을 지키는 강도로 시작합니다.",
      tagLabel: "받는 것",
      tags: ["체력·통증 여부 기준 설계", "집·회사·헬스장 중 선택", "근육을 지키는 강도 유지"],
    },
  },
  {
    no: "06.",
    title: "수면·컨디션 관리",
    line: "잠이 들어올 조건을 \n만듭니다.",
    image: WIM_NEW_IMAGES.care06Sleep,
    imageMobile: WIM_NEW_IMAGES.care06SleepMobile,
    imageAlt: "수면·컨디션 관리",
    detail: {
      eyebrow: "06 · 수면관리",
      title: "수면 패턴 분석",
      description: "잠은 의지로 만들 수 없습니다. 할 수 있는 것은 잠이 올 조건을 만드는 것입니다. 수면일지로 수면효율을 재고, 그 숫자에 맞춰 잠자리 시각을 정합니다.",
      tagLabel: "받는 것",
      tags: [
        "1회기 — 수면일지 기록과 습관 진단",
        "2회기 — 수면효율 85% 기준으로 잠자리 시각 처방",
        "3회기 — 효과 있던 루틴으로 유지 계획",
        "WIM-I 성향에 맞는 수면 전략",
        "산소챔버·사우나에서 이완요법 실습",
      ],
    },
  },
  {
    no: "07.",
    title: "푸드 시스템",
    line: "오늘 먹을 한 끼를 \n짜 드립니다.",
    image: WIM_NEW_IMAGES.care07Counseling,
    imageMobile: WIM_NEW_IMAGES.care07CounselingMobile,
    imageAlt: "푸드 시스템",
    detail: {
      eyebrow: "07 · 푸드관리",
      title: "푸드 솔루션",
      description: "개인의 식습관과 감량 목표를 고려해 일상에서 활용할 수 있는 푸드 솔루션을 제안합니다.",
      tagLabel: "받는 것",
      tags: ["식습관과 감량 목표 반영", "일상에서 적용 가능한 식사 구성", "외식·간편식 대안 제시"],
    },
  },
  {
    no: "08.",
    title: "혈당 데이터 분석",
    line: "음식에 대한 내 몸의\n 반응을 봅니다",
    image: WIM_NEW_IMAGES.care08Maintenance,
    imageMobile: WIM_NEW_IMAGES.care08MaintenanceMobile,
    imageAlt: "유지어트 설계",
    detail: {
      eyebrow: "08 · 혈당관리",
      title: "혈당 데이터 분석",
      description: "CGM으로 일상 속 혈당 변화를 확인하고, 혈당 그래프와 식사 기록을 함께 분석해 나의 식사와 혈당 반응을 이해할 수 있도록 돕습니다.",
      tagLabel: "받는 것",
      tags: ["CGM으로 일상 혈당 추적", "혈당 그래프와 식사 기록 대조", "나의 식사·혈당 반응 이해"],
    },
  },
];

export type WimNewNumber = {
  value: string;
  unit?: string;
  label: string;
  /** value 폰트를 한 단계 줄일 때 (ex. 텍스트형 수치) */
  small?: boolean;
};

export const WIM_NEW_NUMBERS: readonly WimNewNumber[] = [
  { value: "-13.2", unit: "kg", label: "12주 최대 감량" },
  { value: "-6.1", unit: "%", label: "평균 체지방 감소" },
  { value: "최소화", label: "근육량 손실 최소화", small: true },
  { value: "218", unit: "건", label: "누적 완주 후기" },
];

export const WIM_NEW_RATINGS = [
  { label: "네이버 고객 평점", value: "4.91" },
  { label: "매니저 만족도", value: "4.97" },
  { label: "프로그램 만족도", value: "4.73" },
  { label: "기기 관리 만족도", value: "4.60" },
] as const;

export type WimNewReview = { tag: string; who: string; body: string };

export const WIM_NEW_REVIEWS: readonly WimNewReview[] = [
  {
    tag: "체중 클리닉",
    who: "30대 여성 · 12주",
    body: "다이어트할 때마다 요요가 와요. 이번엔 검사부터 하고 시작하니 확실히 달랐어요.",
  },
  {
    tag: "메디컬",
    who: "40대 여성 · 8주",
    body: "수술은 무서워서 시술만으로 가능할지 걱정했는데 단계별로 설명해 주셔서 마음이 놓였어요.",
  },
  {
    tag: "대사 관리",
    who: "30대 남성 · 16주",
    body: "살은 빠졌는데 피곤하고 힘이 없었어요. 여기선 체력 회복까지 같이 봐줍니다.",
  },
  {
    tag: "체형 관리",
    who: "20대 여성 · 6주",
    body: "울퉁불퉁 셀룰라이트가 보기 싫었어요. 부위별로 계획을 따로 잡아 주셨습니다.",
  },
  {
    tag: "갱년기",
    who: "50대 여성 · 12주",
    body: "오후만 되면 무너지는데 오늘은 컨디션이 좋습니다. 상담 예약 잡길 잘했어요.",
  },
  {
    tag: "수면 관리",
    who: "30대 여성 · 10주",
    body: "잠드는 시간부터 다시 맞추니 야식이 줄고 아침 컨디션도 훨씬 안정됐어요.",
  },
  {
    tag: "혈당 관리",
    who: "40대 남성 · 12주",
    body: "같은 음식도 제 혈당 반응이 다르다는 걸 알고 나니 식사 선택이 쉬워졌습니다.",
  },
];

export type WimNewProgram = {
  title: string;
  descLines: readonly string[];
  image?: string;
  /** PC와 다른 사진을 쓸 때만 지정 (없으면 image를 그대로 씀) */
  imageMobile?: string;
  imageAlt: string;
  position?: string;
};

export const WIM_NEW_PROGRAMS: readonly WimNewProgram[] = [
  {
    title: "웰니스",
    descLines: [
      "식단과 생활 습관을 중심으로, 체중과 체형의 변화를",
      "세심하게 관리하는 프로그램입니다.",
    ],
    image: WIM_NEW_IMAGES.program01Wellness,
    imageMobile: WIM_NEW_IMAGES.program01WellnessMobile,
    imageAlt: "웰니스 프로그램",
  },
  {
    title: "웰니스 라이트",
    descLines: ["센터에 오지 않아도, 앱 기록과 원격 상담으로", "의료진의 관리를 이어갑니다."],
    image: WIM_NEW_IMAGES.program02Light,
    imageMobile: WIM_NEW_IMAGES.program02LightMobile,
    imageAlt: "웰니스 라이트 프로그램",
    position: "50% 78%",
  },
  {
    title: "리커버리 케어",
    descLines: [
      "붓기 케어, 피로 회복, 수면의 질 개선까지.",
      "그날의 컨디션에 맞춰 회복 관리를 조합합니다.",
    ],
    image: WIM_NEW_IMAGES.program03Recovery,
    imageMobile: WIM_NEW_IMAGES.program03RecoveryMobile,
    imageAlt: "리커버리 케어 프로그램",
  },
];
