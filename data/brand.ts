/**
 * 브랜드 스토리(/brand) 페이지 문구·데이터.
 * 목업: 윔센터_브랜드스토리_리뉴얼_목업_v7.pdf
 * 줄바꿈은 문자열 안 \n 으로 조정하고, 모바일/PC가 다르면 { mobile, desktop } 으로 적는다.
 * 강조가 필요한 제목은 lead / accent / tail 로 나눠 적는다.
 */

export const BRAND_COPY = {
  /** 0. 영상 히어로 — 영상에 문구가 들어 있어 화면 위에는 카피를 얹지 않는다 */
  videoHero: {
    video: '/videos/brand-hero.mp4',
    videoMobile: '/videos/brand-hero-mobile.mp4',
    image: '/images/brand/hero-poster.jpg',
    imageMobile: '/images/brand/hero-poster-mobile.jpg'
  },

  /** 1. 히어로 */
  hero: {
    eyebrow: 'WELLNESS IN ME',
    titleLead: '우리는 건강하게\n',
    titleAccent: '오래 사는 것',
    titleTail: '을 설계합니다.',
    desc: '건강은 우연히 지켜지지 않습니다.\nWIM은 당신 안의 건강 가능성을 찾아\n오래 가는 루틴으로 설계합니다.'
  },

  /** 2. WHY LONGEVITY — 기대수명과 건강수명의 간격 */
  longevity: {
    eyebrow: 'WHY LONGEVITY',
    titleLead: { mobile: '세계는 지금\n얼마나 오래\n', desktop: '세계는 지금 얼마나 오래\n' },
    titleAccent: '‘건강하게’',
    titleTail: ' 사는가에 주목합니다.',
    desc: [
      { text: '한국인의 기대수명은 약 83세.' },
      { text: '하지만 건강수명은 ', strong: '약 66세', tail: '에서 멈춥니다.' },
      { text: '마지막 17년은 건강을 잃은 채 보내는 시간입니다.' }
    ],
    chart: {
      /** 도넛 오른쪽 설명 — '{lifespan}' 자리에 기대수명이 들어간다 */
      heading: '기대수명 {lifespan}세, 그중',
      lifespan: { value: 83 },
      healthspan: { value: 66 },
      unit: '년',
      center: '건강을 잃은 시간',
      rows: {
        healthy: { label: '건강한 시간', range: '0 ~ {healthspan}세 · 건강수명' },
        unhealthy: { label: '건강을 잃은 시간', range: '{healthspan} ~ {lifespan}세' }
      },
      source:
        '출처 · 통계청 생명표(기대수명) 및 유병기간 제외 기대수명(건강수명)'
    },
    closing: [
      { text: '이 간격을 줄이는 것이 ', strong: 'Longevity', tail: '입니다.' },
      { text: '건강하게 오래 사는 것은\n바람이 아니라 ', strong: '설계의 대상', tail: '입니다.' }
    ]
  },

  /** 3. WEIGHT COMES FIRST — 대사 도미노 */
  domino: {
    eyebrow: 'WEIGHT COMES FIRST',
    title: '건강수명에 체중 관리가\n가장 우선되는 이유',
    desc: [
      { text: '체중은 몸의 대사 상태를 보여주는' },
      { text: '', strong: '가장 정직한 지표', tail: '입니다.' },
      { text: '대사가 무너지면 이상은 혈당·혈압·지질로 번지고' },
      { text: '전신의 건강을 차례로 무너뜨립니다.' },
      { text: '이 연쇄가 ', strong: '‘대사 도미노(Metabolic Domino)’', tail: '입니다.' }
    ],
    /** 이미지 아래 읽는 순서 */
    steps: [
      { title: '생활습관 · 비만', desc: '첫 번째 도미노가 쓰러집니다.' },
      { title: '대사 이상', desc: '인슐린 저항성 · 고혈압 · 고지혈증 · 지방간' },
      { title: '만성질환', desc: '당뇨 합병증 · 뇌졸중 · 치매 · 심부전' }
    ],
    image: '/images/brand/metabolic-domino.webp',
    imageMobile: '/images/brand/metabolic-domino-mobile.webp',
    imageAlt:
      '생활습관과 비만에서 시작해 인슐린 저항성, 고혈압·고지혈증·지방간을 거쳐 당뇨병과 혈관 합병증, 심부전·치매·뇌졸중 같은 만성질환으로 이어지는 대사 도미노',
    closingNote: '그래서 비만은 ‘만병의 근원’이라 불립니다.',
    closingLead: '다행히 도미노는\n',
    closingAccent: '첫 블록에서 멈추는 것',
    closingTail: '이 가장 쉽습니다.'
  },

  /** 4. THE ENVIRONMENT — 비만 유발 사회 */
  environment: {
    /** 영문 용어(Obesogenic Society)는 제목이 2열 칸에서 어색하게 끊기지 않도록 라벨로 올렸다 */
    eyebrow: 'THE ENVIRONMENT · OBESOGENIC SOCIETY',
    title: '‘비만 유발 사회’라는 말을\n들어보셨나요?',
    desc: [
      { text: '현대의 환경은 ', strong: '살이 찌기 쉽게 세팅', tail: '되어 있습니다.' },
      { text: '손만 뻗으면 닿는 고열량 식품' },
      { text: '화면 앞에서 줄어드는 활동량.' },
      { text: '첫 번째 도미노가 가장 잘 쓰러지는 시대입니다.' }
    ],
    subtitle: '이 환경에서 무너지는 것은 식습관만이 아닙니다.',
    areas: [
      { icon: 'meal', title: '식습관', desc: '배달 앱이 끼니의 기본값이 됩니다.' },
      { icon: 'emotional', title: '감정적 식사', desc: '스트레스를 음식으로 달래게 됩니다.' },
      { icon: 'exercise', title: '운동량', desc: '시간을 내지 않으면 움직일 일이 없습니다.' },
      { icon: 'activity', title: '활동량', desc: '이동도 쇼핑도 앉은 자리에서 끝납니다.' },
      { icon: 'sleep', title: '수면', desc: '밤의 스크린이 잠의 리듬을 무너뜨립니다.' },
      { icon: 'mind', title: '정신건강', desc: '끝없는 비교 속에 마음의 여유가 줄어듭니다.' }
    ],
    closingNote: '환경 그대로 살아가면 몸은 환경을 따라갑니다.',
    closingLead: '살이 찌는 것은 의지의 문제가 아니라\n',
    closingAccent: '환경의 기본값',
    closingTail: '입니다.'
  },

  /** 5. OUR ANSWER */
  answer: {
    eyebrow: 'OUR ANSWER',
    titleLead: { mobile: '환경이 살이 찌게\n세팅되어 있다면\n우리의 생활은 더욱\n', desktop: '환경이 살이 찌게 세팅되어 있다면\n우리의 생활은 더욱 ' },
    titleAccent: '정교하게 설계',
    titleTail: '되어야 합니다.',
    desc: [
      { text: '검사와 데이터로 몸의 현재를 읽고' },
      { text: '지킬 수 있는 루틴으로 바꾸는 것.' },
      { text: 'WIM CENTER는 그 ', strong: '설계', tail: '를 함께합니다.' }
    ]
  },

  /** 6. OUR PHILOSOPHY */
  philosophy: {
    eyebrow: 'OUR PHILOSOPHY',
    title: '우리가 설계하는 방식',
    desc: 'WIM — Wellness In Me.\n당신 안의 건강 가능성을 꺼내는 설계.\n세 가지 원칙 위에 서 있습니다.',
    principles: [
      {
        eyebrow: 'MEDICAL EXPERTISE',
        title: '의학에서 출발합니다',
        desc: '유행이 아니라 의학 데이터에서 시작합니다.\n내과·정신건강의학과·정형외과 전문의가 함께 설계했습니다.'
      },
      {
        eyebrow: 'WELLNESS MANAGEMENT',
        title: '관리가 결과를 만듭니다',
        desc: '1:1 전담 관리와 측정·피드백이\n설계를 끝까지 지킵니다.'
      },
      {
        eyebrow: 'MINDFUL LIVING',
        title: '습관까지 설계합니다',
        desc: '교육과 동기부여로\n스스로 지속하는 힘을 만듭니다.'
      }
    ]
  },

  /** 7. OUR METHODOLOGY — 3M Approach */
  methodology: {
    eyebrow: 'OUR METHODOLOGY',
    title: '‘3M’ Approach',
    desc: [
      { text: '환경이 무너뜨린 여섯 영역을' },
      { text: '식이 · 활동 · 마음 세 축으로 통합해 관리합니다.' },
      { text: '단순 감량을 넘어 ', strong: 'Holistic Wellness', tail: '를 추구합니다.' }
    ],
    pillars: [
      {
        tone: 'meal',
        name: 'Meal',
        subtitle: '지속 가능한 식단',
        desc: '건강한 식습관을 만들고\n감정적 식사를 개선합니다.',
        tags: ['식습관', '감정적 식사']
      },
      {
        tone: 'mobility',
        name: 'Mobility',
        subtitle: '몸의 활력',
        desc: '운동과 일상 활동량을 늘리고\n수면의 질을 높입니다.',
        tags: ['운동량', '활동량', '수면']
      },
      {
        tone: 'mentation',
        name: 'Mentation',
        subtitle: '마음의 회복력',
        desc: '마음 건강을 관리해\n스트레스 대응력을 키웁니다.',
        tags: ['정신건강']
      }
    ],
    /** 육각형 꼭짓점 — 12시 방향부터 시계 방향 */
    radar: [
      { label: '운동량', tone: 'mobility' },
      { label: '수면', tone: 'mobility' },
      { label: '정신건강', tone: 'mentation' },
      { label: '활동량', tone: 'mobility' },
      { label: '감정적 식사', tone: 'meal' },
      { label: '식습관', tone: 'meal' }
    ],
    closing: '그리고 설계에는 순서가 있습니다.'
  },

  /** 8. THE DESIGN, IN ORDER — 설계의 두 단계 */
  phases: {
    eyebrow: 'THE DESIGN, IN ORDER',
    title: '설계의 두 단계',
    items: [
      {
        tone: 'meal',
        label: 'PHASE 1 · 증명된 첫 관문',
        title: '다이어트 — 건강수명의 첫 관문',
        desc: [
          { text: '건강수명의 첫 장애물은 체중과 대사.' },
          { text: '그래서 설계는 다이어트에서 시작합니다.' },
          { text: '', strong: '내과·정신건강의학과 전문의가 설계한 프로그램', tail: '과' },
          { text: '성향 검사(WIM-I) 데이터로' },
          { text: '무너진 여섯 영역을 루틴으로 다시 세웁니다.' }
        ],
        tags: ['식습관', '감정적 식사', '운동량', '활동량', '수면', '정신건강']
      },
      {
        tone: 'mentation',
        label: 'PHASE 2 · 확장',
        title: 'Longevity — 감량 그다음의 설계',
        desc: [
          { text: '감량은 끝이 아닙니다.' },
          { text: '미국에서 대중화된 Longevity 케어.' },
          { text: '한국에서도 ', strong: '몸이 자산인 사람들', tail: '이 먼저 찾고 있습니다.' },
          { text: 'WIM은 검증된 것들을 ', strong: '큐레이팅해 세팅', tail: '해두었습니다.' },
          { text: '그날의 몸 상태에 맞춰 조합하는' },
          { text: '회복(Recovery)과 컨디셔닝.' }
        ],
        tags: ['리커버리', '컨디셔닝', '지속 관리']
      }
    ]
  },

  /** 9. BEGIN YOUR DESIGN — 마지막 CTA */
  finalCta: {
    eyebrow: 'BEGIN YOUR DESIGN',
    title: '당신의 건강수명\n지금부터 설계하세요.',
    desc: '검사에서 시작하는 나만의 설계 —\nWIM CENTER가 함께합니다.',
    consultationLabel: '상담 신청',
    programLabel: '프로그램 살펴보기',
    programHref: '/diet-program'
  }
} as const;

/** 한 줄 안에서 일부만 굵게 강조하는 문장 */
export type BrandRichLine = {
  readonly text: string;
  readonly strong?: string;
  readonly tail?: string;
};

export type BrandTone = 'meal' | 'mobility' | 'mentation';
