/**
 * 브랜드 스토리 — wim-homepage-2 의 /brand 화면을 한 파일로 옮긴 것.
 * 문구·이미지 경로는 아래 BRAND_COPY 에서 고친다. 사진·영상은 public/images/brand, public/videos 에 있다.
 * 원본과 다른 점: 클릭 추적 없음, 상담 폼 대신 CONSULT_HREF 로 이동, 히어로 영상은 CSS 로 모바일·PC 를 나눈다.
 */

import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

/** 상담 버튼이 이동할 곳 */
const CONSULT_HREF = "/contact";

export const metadata: Metadata = {
  title: "브랜드 스토리 | 윔센터 강남",
  description:
    "우리는 건강하게 오래 사는 것을 설계합니다. 검사와 데이터로 몸의 현재를 읽고 지킬 수 있는 루틴으로 바꾸는 윔센터의 이야기입니다.",
};

/* ───────────────────────── 문구·데이터 ───────────────────────── */

/**
 * 브랜드 스토리(/brand) 페이지 문구·데이터.
 * 목업: 윔센터_브랜드스토리_리뉴얼_목업_v7.pdf
 * 줄바꿈은 문자열 안 \n 으로 조정하고, 모바일/PC가 다르면 { mobile, desktop } 으로 적는다.
 * 강조가 필요한 제목은 lead / accent / tail 로 나눠 적는다.
 */

const BRAND_COPY = {
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
type BrandRichLine = {
  readonly text: string;
  readonly strong?: string;
  readonly tail?: string;
};

type BrandTone = 'meal' | 'mobility' | 'mentation';


/* ───────────────────────── 글자 규격 (wim-homepage-2 Typography) ───────────────────────── */

type TypographyFont = 'pretendard' | 'franklin' | 'garamond';
type TypographyWeight =
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';
type TypographySize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'display';
type TypographyScale =
  | 'design-01'
  | 'display-01'
  | 'display-02'
  | 'display-03'
  | 'title-01'
  | 'title-02'
  | 'title-03'
  | 'headline-01'
  | 'headline-02'
  | 'headline-03'
  | 'body-01'
  | 'body-02'
  | 'body-03'
  | 'body-04';

type KoreanTypographyScale = Exclude<
  TypographyScale,
  'design-01' | 'display-03'
>;
type ItcTypographyScale = KoreanTypographyScale;
type GaramondTypographyScale =
  | 'design-01'
  | 'display-01'
  | 'display-02'
  | 'display-03'
  | 'headline-01'
  | 'headline-02'
  | 'headline-03'
  | 'title-01';

/**
 * 폰트 패밀리·크기·행간·자간을 묶은 WIM 타이포그래피 토큰.
 * 굵기는 토큰 수가 과도하게 늘지 않도록 weight prop으로 별도 지정한다.
 */
type TypographyVariant =
  | `ko-${KoreanTypographyScale}`
  | `itc-${ItcTypographyScale}`
  | `garamond-${GaramondTypographyScale}`;

type ScaleValue = { size: number; lineHeight: number };
type ScaleMap = Partial<Record<TypographyScale, ScaleValue>>;

/** 단순 본문 UI에서 사용하는 반응형 크기 프리셋 (기존 Text 컴포넌트 통합) */
const RESPONSIVE_SIZE: Record<
  TypographySize,
  { mobile: ScaleValue; tablet: ScaleValue; desktop: ScaleValue }
> = {
  xs: {
    mobile: { size: 11, lineHeight: 1.45 },
    tablet: { size: 12, lineHeight: 1.33 },
    desktop: { size: 12, lineHeight: 1.33 }
  },
  sm: {
    mobile: { size: 12, lineHeight: 1.33 },
    tablet: { size: 14, lineHeight: 1.43 },
    desktop: { size: 14, lineHeight: 1.43 }
  },
  md: {
    mobile: { size: 14, lineHeight: 1.43 },
    tablet: { size: 16, lineHeight: 1.5 },
    desktop: { size: 16, lineHeight: 1.5 }
  },
  lg: {
    mobile: { size: 16, lineHeight: 1.5 },
    tablet: { size: 18, lineHeight: 1.56 },
    desktop: { size: 18, lineHeight: 1.56 }
  },
  xl: {
    mobile: { size: 18, lineHeight: 1.56 },
    tablet: { size: 20, lineHeight: 1.4 },
    desktop: { size: 24, lineHeight: 1.33 }
  },
  '2xl': {
    mobile: { size: 20, lineHeight: 1.4 },
    tablet: { size: 24, lineHeight: 1.33 },
    desktop: { size: 30, lineHeight: 1.2 }
  },
  '3xl': {
    mobile: { size: 24, lineHeight: 1.33 },
    tablet: { size: 30, lineHeight: 1.2 },
    desktop: { size: 36, lineHeight: 1.11 }
  },
  display: {
    mobile: { size: 30, lineHeight: 1.2 },
    tablet: { size: 36, lineHeight: 1.11 },
    desktop: { size: 48, lineHeight: 1 }
  }
};

const PRETENDARD_DESKTOP: ScaleMap = {
  'display-01': { size: 36, lineHeight: 1.5 },
  'display-02': { size: 30, lineHeight: 1.5 },
  'title-01': { size: 28, lineHeight: 1.5 },
  'title-02': { size: 26, lineHeight: 1.5 },
  'headline-01': { size: 24, lineHeight: 1.5 },
  'headline-02': { size: 22, lineHeight: 1.5 },
  'headline-03': { size: 20, lineHeight: 1.5 },
  'body-01': { size: 18, lineHeight: 1.5 },
  'body-02': { size: 16, lineHeight: 1.5 },
  'body-03': { size: 14, lineHeight: 1.5 },
  'body-04': { size: 12, lineHeight: 1.5 }
};

const PRETENDARD_MOBILE: ScaleMap = {
  'title-01': { size: 30, lineHeight: 1.5 },
  'title-02': { size: 28, lineHeight: 1.5 },
  'title-03': { size: 26, lineHeight: 1.5 },
  'headline-01': { size: 24, lineHeight: 1.5 },
  'headline-02': { size: 22, lineHeight: 1.5 },
  'headline-03': { size: 20, lineHeight: 1.5 },
  'body-01': { size: 18, lineHeight: 1.5 },
  'body-02': { size: 16, lineHeight: 1.5 },
  'body-03': { size: 14, lineHeight: 1.5 },
  'body-04': { size: 12, lineHeight: 1.5 }
};

const FRANKLIN_DESKTOP: ScaleMap = Object.fromEntries(
  Object.entries(PRETENDARD_DESKTOP).map(([key, value]) => [
    key,
    { ...value, lineHeight: 1.5 }
  ])
) as ScaleMap;
const FRANKLIN_MOBILE: ScaleMap = Object.fromEntries(
  Object.entries(PRETENDARD_MOBILE).map(([key, value]) => [
    key,
    { ...value, lineHeight: 1.5 }
  ])
) as ScaleMap;

const GARAMOND_DESKTOP: ScaleMap = {
  'display-01': { size: 120, lineHeight: 1.3 },
  'display-02': { size: 96, lineHeight: 0.8 },
  'display-03': { size: 64, lineHeight: 1.3 },
  'headline-01': { size: 56, lineHeight: 1.3 },
  'headline-02': { size: 52, lineHeight: 1.3 },
  'headline-03': { size: 46, lineHeight: 1.5 },
  'title-01': { size: 32, lineHeight: 1.5 }
};

const GARAMOND_MOBILE: ScaleMap = {
  'design-01': { size: 70, lineHeight: 0.8 },
  'display-01': { size: 48, lineHeight: 1.1 },
  'display-02': { size: 44, lineHeight: 1.3 },
  'display-03': { size: 40, lineHeight: 1.1 },
  'headline-01': { size: 36, lineHeight: 1.3 },
  'headline-02': { size: 34, lineHeight: 1.3 },
  'headline-03': { size: 26, lineHeight: 1.3 }
};

const SCALE_BY_FONT: Record<
  TypographyFont,
  { mobile: ScaleMap; desktop: ScaleMap }
> = {
  pretendard: { mobile: PRETENDARD_MOBILE, desktop: PRETENDARD_DESKTOP },
  franklin: { mobile: FRANKLIN_MOBILE, desktop: FRANKLIN_DESKTOP },
  garamond: { mobile: GARAMOND_MOBILE, desktop: GARAMOND_DESKTOP }
};

const FONT_CLASS: Record<TypographyFont, string> = {
  pretendard: 'font-pretendard',
  franklin: 'font-franklin',
  garamond: 'font-garamond'
};

const VARIANT_FONT_PREFIX: Record<
  'ko' | 'itc' | 'garamond',
  TypographyFont
> = {
  ko: 'pretendard',
  itc: 'franklin',
  garamond: 'garamond'
};

function parseVariant(variant: TypographyVariant) {
  const separatorIndex = variant.indexOf('-');
  const prefix = variant.slice(0, separatorIndex) as keyof typeof VARIANT_FONT_PREFIX;
  return {
    variant,
    font: VARIANT_FONT_PREFIX[prefix],
    scale: variant.slice(separatorIndex + 1) as TypographyScale
  };
}

/** 스케일을 못 찾았을 때 쓰는 기본값 — 본문 16px */
const FALLBACK_SCALE: ScaleValue = { size: 16, lineHeight: 1.5 };

/**
 * 잘못된 조합은 화면을 죽이지 않고 기본값으로 넘어간다.
 * 개발 중에는 콘솔에 남겨 바로 알아차릴 수 있게 한다.
 */
function warnInvalid(message: string) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`Typography: ${message}`);
  }
}

/** 한글을 포함한 기본 본문 서체. 다른 서체가 필요한 경우에만 font prop을 지정한다. */
const DEFAULT_TYPOGRAPHY_FONT: TypographyFont = 'pretendard';

const FONT_WEIGHT: Record<TypographyWeight, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
};

type TypographyStyle = CSSProperties & {
  '--type-mobile-size': string;
  '--type-mobile-leading': number;
  '--type-tablet-size': string;
  '--type-tablet-leading': number;
  '--type-desktop-size': string;
  '--type-desktop-leading': number;
  '--type-mobile-weight': number;
  '--type-tablet-weight': number;
  '--type-desktop-weight': number;
};

interface TypographyProps extends Omit<
  HTMLAttributes<HTMLElement>,
  'children'
> {
  as?: ElementType;
  /** 간단한 반응형 크기 프리셋. 기존 Text의 size API를 대체한다. */
  size?: TypographySize;
  /** 디자인 시스템의 세부 타이포그래피 스케일 */
  mobile?: TypographyScale;
  tablet?: TypographyScale;
  desktop?: TypographyScale;
  /** 신규 페이지용 완성형 토큰. 폰트·크기·행간·자간을 함께 지정한다. */
  variant?: TypographyVariant;
  tabletVariant?: TypographyVariant;
  desktopVariant?: TypographyVariant;
  font?: TypographyFont;
  weight?: TypographyWeight;
  tabletWeight?: TypographyWeight;
  desktopWeight?: TypographyWeight;
  mobileSize?: number;
  tabletSize?: number;
  desktopSize?: number;
  italic?: boolean;
  children: ReactNode;
}

function Typography({
  as,
  size,
  mobile,
  tablet,
  desktop,
  variant,
  tabletVariant,
  desktopVariant,
  font = DEFAULT_TYPOGRAPHY_FONT,
  weight = 'regular',
  tabletWeight,
  desktopWeight,
  mobileSize,
  tabletSize,
  desktopSize,
  italic = false,
  className = '',
  style,
  children,
  ...props
}: TypographyProps) {
  const Component = as ?? (size ? 'p' : 'span');
  const baseVariant = variant ? parseVariant(variant) : null;
  const resolvedFont = baseVariant?.font ?? font;
  let mobileValue: ScaleValue;
  let tabletValue: ScaleValue;
  let desktopValue: ScaleValue;

  if (size) {
    ({
      mobile: mobileValue,
      tablet: tabletValue,
      desktop: desktopValue
    } = RESPONSIVE_SIZE[size]);
  } else if (baseVariant) {
    const responsiveVariants = [tabletVariant, desktopVariant].filter(
      Boolean
    ) as TypographyVariant[];
    if (
      responsiveVariants.some(
        (responsiveVariant) =>
          parseVariant(responsiveVariant).font !== baseVariant.font
      )
    ) {
      warnInvalid('반응형 variant는 동일한 폰트 패밀리를 사용해야 합니다.');
    }

    const tabletToken = tabletVariant
      ? parseVariant(tabletVariant)
      : baseVariant;
    const desktopToken = desktopVariant
      ? parseVariant(desktopVariant)
      : tabletToken;
    const scales = SCALE_BY_FONT[resolvedFont];

    const selectedMobileValue = scales.mobile[baseVariant.scale];
    const selectedTabletValue = scales.desktop[tabletToken.scale];
    const selectedDesktopValue = scales.desktop[desktopToken.scale];
    if (!selectedMobileValue || !selectedTabletValue || !selectedDesktopValue) {
      warnInvalid(`"${variant}"에 지정된 반응형 스케일을 사용할 수 없습니다.`);
    }

    mobileValue = selectedMobileValue ?? FALLBACK_SCALE;
    tabletValue = selectedTabletValue ?? mobileValue;
    desktopValue = selectedDesktopValue ?? tabletValue;
  } else {
    if (!mobile) {
      warnInvalid('"size", "variant", "mobile" 중 하나는 반드시 필요합니다.');
    }

    const scales = SCALE_BY_FONT[resolvedFont];
    const selectedMobileValue = mobile ? scales.mobile[mobile] : undefined;
    if (mobile && !selectedMobileValue) {
      warnInvalid(`${resolvedFont} 모바일 scale에 "${mobile}"이 없습니다.`);
    }
    mobileValue = selectedMobileValue ?? FALLBACK_SCALE;
    tabletValue = mobileValue;

    if (tablet) {
      const explicitTabletValue = scales.desktop[tablet];
      if (!explicitTabletValue) {
        warnInvalid(`${resolvedFont} 태블릿 scale에 "${tablet}"이 없습니다.`);
      }
      tabletValue = explicitTabletValue ?? mobileValue;
    }

    desktopValue = tabletValue;
    if (desktop) {
      const explicitDesktopValue = scales.desktop[desktop];
      if (!explicitDesktopValue) {
        warnInvalid(`${resolvedFont} PC scale에 "${desktop}"이 없습니다.`);
      }
      desktopValue = explicitDesktopValue ?? tabletValue;
    }
  }

  const typographyStyle: TypographyStyle = {
    '--type-mobile-size': `${mobileSize ?? mobileValue.size}px`,
    '--type-mobile-leading': mobileValue.lineHeight,
    '--type-tablet-size': `${tabletSize ?? tabletValue.size}px`,
    '--type-tablet-leading': tabletValue.lineHeight,
    '--type-desktop-size': `${desktopSize ?? (desktop ? desktopValue.size : (tabletSize ?? desktopValue.size))}px`,
    '--type-desktop-leading': desktopValue.lineHeight,
    '--type-mobile-weight': FONT_WEIGHT[weight],
    '--type-tablet-weight': FONT_WEIGHT[tabletWeight ?? weight],
    '--type-desktop-weight':
      FONT_WEIGHT[desktopWeight ?? tabletWeight ?? weight],
    fontStyle: italic ? 'italic' : 'normal',
    ...style
  };

  return (
    <Component
      className={`wim-typography ${FONT_CLASS[resolvedFont]} ${size ? 'whitespace-pre-line' : ''} ${className}`.trim()}
      style={typographyStyle}
      {...props}
    >
      {children}
    </Component>
  );
}

/* ───────────────────────── 공통 부품 ───────────────────────── */

/** 클래스 이름 합치기 (원본 cn 의 간단 버전) */
function cn(...values: (string | false | null | undefined)[]) {
  return values.filter(Boolean).join(" ");
}

/** 가로 폭을 잡는 틀 */
function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  const max = /(^|\s)max-w-/.test(className) ? "" : "max-w-[1280px]";
  return <div className={cn("mx-auto w-full px-5", max, className)}>{children}</div>;
}

/** 둥근 버튼 (↗ 아이콘 포함) */
function CtaButton({
  label,
  href = CONSULT_HREF,
  variant = "primary",
  icon = true,
  className = "",
}: {
  label: ReactNode;
  href?: string;
  variant?: "primary" | "white" | "outline-white";
  icon?: boolean;
  className?: string;
}) {
  const tone =
    variant === "white"
      ? "border-white bg-white text-primary-main"
      : variant === "outline-white"
        ? "border-white bg-transparent text-white"
        : "border-primary-main bg-primary-main text-white";
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-[30px] select-none items-center justify-center rounded-full border px-5 no-underline tb:h-[50px]",
        tone,
        className
      )}
    >
      <Typography
        as="span"
        variant="ko-body-03"
        tabletVariant="ko-headline-03"
        weight="bold"
        className="inline-flex items-center gap-1.5 tb:gap-2"
      >
        {label}
        {icon && (
          <svg aria-hidden="true" viewBox="0 0 18 18" fill="none" className="h-2 w-2 shrink-0 tb:h-4 tb:w-4">
            <path d="M0.41 0.5H17.25V17.42" stroke="currentColor" />
            <path d="M0.35 17.47L17.27 0.55" stroke="currentColor" />
          </svg>
        )}
      </Typography>
    </Link>
  );
}

/** 페이지 마지막 상담 CTA 골격 */
function ProgramFinalCtaSection({
  title,
  description,
  children,
  className,
  titleClassName,
  actionsClassName,
}: {
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  actionsClassName?: string;
}) {
  return (
    <section className={cn("bg-primary-main px-5 text-center text-white", className)}>
      <Typography
        as="h2"
        variant="ko-body-01"
        tabletVariant="ko-display-01"
        weight="bold"
        className={cn("break-keep", titleClassName)}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          as="p"
          variant="ko-body-03"
          tabletVariant="ko-body-02"
          weight="regular"
          className="mt-3 break-keep"
        >
          {description}
        </Typography>
      )}

      <div className={cn("flex flex-col items-center justify-center gap-3 tb:flex-row", actionsClassName)}>
        {children}
      </div>
    </section>
  );
}

/* ───────────────────────── 줄바꿈 (wim-homepage-2 SectionLayout) ───────────────────────── */

type BreakText = string | { mobile: string; desktop: string };

function SplitLines({ text }: { text: string }) {
  const lines = text.split('\n');
  if (lines.length === 1) return <>{text}</>;
  return (
    <>
      {lines.map((line, index) => (
        <span key={line}>
          {index > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

/** 문자열 안의 \n 을 줄바꿈으로 렌더한다. 줄바꿈 위치는 data/diet-program.ts 에서 조정한다. */
function LineBreaks({ text }: { text: BreakText }) {
  if (typeof text === 'string') return <SplitLines text={text} />;
  return (
    <>
      <span className="tb:hidden">
        <SplitLines text={text.mobile} />
      </span>
      <span className="hidden tb:inline">
        <SplitLines text={text.desktop} />
      </span>
    </>
  );
}

/**
 * 문자열 안의 \n 을 모바일에서만 줄바꿈으로 렌더한다. PC 는 한 줄로 이어 붙인다.
 * 줄바꿈 위치는 data/diet-program.ts 문구의 \n 으로 조정한다.
 */
function MobileLineBreaks({ text }: { text: string }) {
  const lines = text.split('\n');
  if (lines.length === 1) return <>{text}</>;
  return (
    <>
      {lines.map((line, index) => (
        <span key={line}>
          {index > 0 && <br className="tb:hidden" />}
          {index > 0 && ' '}
          {line}
        </span>
      ))}
    </>
  );
}


/* ───────────────────────── 브랜드 공통 조각 (BrandShared) ───────────────────────── */

/** 3M 축별 색상 — 다른 리뉴얼 페이지와 같은 그린 계열만 쓴다 */
const TONE_TEXT: Record<BrandTone, string> = {
  meal: 'text-primary-main',
  mobility: 'text-primary-accent',
  mentation: 'text-primary-sub-01'
};

const TONE_BG: Record<BrandTone, string> = {
  meal: 'bg-primary-main',
  mobility: 'bg-primary-accent',
  mentation: 'bg-primary-sub-01'
};

/** 감량·기기 페이지 카드와 같은 규격 */
const BRAND_CARD =
  'rounded-[10px] border border-primary-sub-02 bg-white tb:rounded-[20px]';

/** 섹션 상단 영문 라벨 (WHY LONGEVITY 등) — 감량·기기 페이지의 THE JOURNEY 와 같은 규격 */
function BrandEyebrow({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Typography
      as="p"
      variant="itc-body-03"
      weight="regular"
      className={cn('text-gray-03', className)}
    >
      {children}
    </Typography>
  );
}

/** 섹션 제목. lead 는 medium, 강조(accent)는 bold 로 이어 붙인다. */
function BrandTitle({
  as = 'h2',
  lead,
  accent,
  tail,
  className
}: {
  as?: 'h1' | 'h2' | 'p';
  lead: BreakText;
  accent?: string;
  tail?: string;
  className?: string;
}) {
  return (
    <Typography
      as={as}
      variant="ko-headline-01"
      tabletVariant="ko-display-01"
      weight="medium"
      className={cn('break-keep text-primary-main', className)}
    >
      <LineBreaks text={lead} />
      {accent && <strong className="font-bold">{accent}</strong>}
      {tail}
    </Typography>
  );
}

/** 섹션 본문 — 줄마다 일부 단어를 굵게 강조한다. text 안의 \n 은 모바일에서만 줄바꿈한다. */
function BrandRichLines({
  lines,
  className
}: {
  lines: readonly BrandRichLine[];
  className?: string;
}) {
  return (
    <Typography
      as="p"
      variant="ko-body-03"
      tabletVariant="ko-body-01"
      weight="regular"
      className={cn('break-keep text-gray-03', className)}
    >
      {lines.map((line, index) => (
        <span key={`${line.text}${line.strong ?? ''}`} className="block">
          <MobileLineBreaks text={line.text} />
          {line.strong && (
            <strong className="font-bold text-primary-main">{line.strong}</strong>
          )}
          {line.tail}
          {index < lines.length - 1 && ' '}
        </span>
      ))}
    </Typography>
  );
}

/** 알약 모양 태그 — 기기 페이지 태그와 같은 규격 */
function BrandTag({ label }: { label: string }) {
  return (
    <Typography
      as="li"
      variant="ko-body-04"
      tabletVariant="ko-body-03"
      weight="medium"
      className="rounded-full bg-primary-sub-02/60 px-3 py-1 text-primary-main tb:px-4"
    >
      {label}
    </Typography>
  );
}

/* ───────────────────────── BrandVideoHeroSection ───────────────────────── */

/**
 * 0. 영상 히어로 — 영상에 문구가 들어 있어 화면 위에는 카피를 얹지 않는다.
 * 원본은 화면 폭을 재서 영상을 골랐지만, 여기서는 CSS 로 모바일·PC 영상을 나눠 둔다.
 */
function BrandVideoHeroSection() {
  const { image, imageMobile, video, videoMobile } = BRAND_COPY.videoHero;
  return (
    <section className="relative isolate w-full overflow-hidden">
      <video
        src={videoMobile}
        poster={imageMobile}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="aspect-[360/570] w-full object-cover tb:hidden"
      />
      <video
        src={video}
        poster={image}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="hidden aspect-[1440/550] w-full object-cover tb:block"
      />
    </section>
  );
}

/* ───────────────────────── BrandHeroSection ───────────────────────── */

const COPY = BRAND_COPY.hero;

/**
 * 1. 인트로 — 기기 페이지 WhyRecoverySection 과 같은 좌 텍스트 / 우 이미지 구성.
 * 이미지가 준비되면 아래 자리 표시를 <picture> 로 바꾼다. (WhyRecoverySection 참고)
 */
function BrandHeroSection() {
  return (
    <section className="pt-[45px] pb-10 tb:py-24">
      <Container>
        <div className="grid items-center gap-12 tb:grid-cols-2 tb:gap-12">
          <div className="text-center tb:text-left">
            <BrandEyebrow>{COPY.eyebrow}</BrandEyebrow>
            <BrandTitle
              as="h1"
              lead={COPY.titleLead}
              accent={COPY.titleAccent}
              tail={COPY.titleTail}
              className="mt-1 tb:mt-3"
            />
            <Typography
              as="p"
              variant="ko-body-03"
              tabletVariant="ko-body-01"
              weight="regular"
              className="mt-5 break-keep text-gray-03 tb:mt-8"
            >
              <LineBreaks text={COPY.desc} />
            </Typography>
          </div>

          {/* 이미지 자리 — 기기 페이지와 같은 비율 */}
          <div
            aria-hidden="true"
            className="flex aspect-[640/460] w-full items-center justify-center rounded-xl bg-primary-sub-03 tb:aspect-[1280/800]"
          >
            <Typography
              as="span"
              variant="ko-body-04"
              tabletVariant="ko-body-03"
              weight="regular"
              className="text-primary-main"
            >
              이미지 준비 중
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── LongevityGapSection ───────────────────────── */

const COPY_LongevityGap = BRAND_COPY.longevity;
const CHART = COPY_LongevityGap.chart;
const LIFESPAN = CHART.lifespan.value;
const HEALTHSPAN = CHART.healthspan.value;
const GAP_YEARS = LIFESPAN - HEALTHSPAN;

/** 문구 안의 {lifespan} / {healthspan} 을 실제 나이로 바꾼다 */
const fill = (text: string) =>
  text
    .replace('{lifespan}', String(LIFESPAN))
    .replace('{healthspan}', String(HEALTHSPAN));

const ROWS = [
  { ...CHART.rows.healthy, years: HEALTHSPAN, dot: 'bg-primary-main' },
  { ...CHART.rows.unhealthy, years: GAP_YEARS, dot: 'bg-primary-sub-02' }
];

/** 도넛 — 기대수명 83년 중 건강하게 보내는 66년 / 건강을 잃은 17년 */
function LifespanDonut() {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const healthyLength = (HEALTHSPAN / LIFESPAN) * circumference;
  /** 두 조각 사이 여백 */
  const gap = 2.5;

  return (
    <figure className={cn(BRAND_CARD, 'px-5 py-7 tb:px-8 tb:py-9')}>
      <div className="flex flex-col items-center gap-6 xs:flex-row xs:gap-8">
        <div className="relative w-[160px] shrink-0 tb:w-[180px]">
          <svg viewBox="0 0 100 100" className="block -rotate-90" aria-hidden="true">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              strokeWidth="10"
              className="stroke-primary-main"
              strokeDasharray={`${healthyLength - gap} ${circumference}`}
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              strokeWidth="10"
              className="stroke-primary-sub-02"
              strokeDasharray={`${circumference - healthyLength - gap} ${circumference}`}
              strokeDashoffset={-healthyLength}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Typography as="p" variant="ko-body-04" weight="regular" className="text-gray-03">
              {CHART.center}
            </Typography>
            <Typography as="p" variant="ko-headline-01" tabletVariant="ko-display-01" weight="bold" className="text-primary-main">
              {GAP_YEARS}
              <span className="text-[0.55em] font-medium">{CHART.unit}</span>
            </Typography>
          </div>
        </div>

        <div className="w-full">
          <Typography as="p" variant="ko-body-03" tabletVariant="ko-body-02" weight="bold" className="text-black">
            {fill(CHART.heading)}
          </Typography>
          <ul className="mt-3 divide-y divide-gray-01 border-t border-gray-01">
            {ROWS.map((row) => (
              <li key={row.label} className="flex items-center justify-between gap-3 py-3">
                <div className="flex items-start gap-2">
                  <span aria-hidden="true" className={cn('mt-[0.45em] h-2.5 w-2.5 shrink-0 rounded-full', row.dot)} />
                  <div>
                    <Typography as="p" variant="ko-body-03" tabletVariant="ko-body-02" weight="medium" className="break-keep text-black">
                      {row.label}
                    </Typography>
                    <Typography as="p" variant="ko-body-04" weight="regular" className="text-gray-02">
                      {fill(row.range)}
                    </Typography>
                  </div>
                </div>
                <Typography as="span" variant="ko-body-01" tabletVariant="ko-headline-03" weight="bold" className="shrink-0 text-primary-main">
                  {row.years}
                  {CHART.unit}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Typography
        as="p"
        variant="ko-body-04"
        weight="regular"
        className="mt-6 break-keep text-gray-02 tb:mt-8"
      >
        {CHART.source}
      </Typography>
    </figure>
  );
}

/** 2. WHY LONGEVITY — 기대수명과 건강수명의 간격 */
function LongevityGapSection() {
  return (
    <section className="bg-gray-00 py-12 tb:py-28">
      {/* 모바일: 텍스트 → 차트 → 마무리 순서로 쌓고, 태블릿부터 왼쪽 텍스트 / 오른쪽 차트 2열 */}
      <Container className="grid gap-10 tb:grid-cols-2 tb:items-center tb:gap-10 dt:gap-16">
        <div>
          <BrandEyebrow>{COPY_LongevityGap.eyebrow}</BrandEyebrow>
          <BrandTitle
            lead={COPY_LongevityGap.titleLead}
            accent={COPY_LongevityGap.titleAccent}
            tail={COPY_LongevityGap.titleTail}
            className="mt-2"
          />
          <BrandRichLines lines={COPY_LongevityGap.desc} className="mt-6 tb:mt-9" />
          <BrandRichLines lines={COPY_LongevityGap.closing} className="mt-6 hidden tb:mt-9 tb:block" />
        </div>

        <LifespanDonut />

        <BrandRichLines lines={COPY_LongevityGap.closing} className="tb:hidden" />
      </Container>
    </section>
  );
}

/* ───────────────────────── MetabolicDominoSection ───────────────────────── */

const COPY_MetabolicDomino = BRAND_COPY.domino;

/** 그림을 읽는 순서 — 감량 페이지 THE JOURNEY 와 같은 가로 타임라인 */
function DominoSteps() {
  return (
    <ol className="relative mt-8 grid gap-6 pl-6 tb:mt-10 tb:grid-cols-3 tb:gap-8 tb:pt-8 tb:pl-0">
      <span
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-[3px] w-[2px] tb:hidden"
        style={{
          background:
            'linear-gradient(180deg, var(--color-wim-primary-main) 42.46%, var(--color-wim-gray-01) 88.66%)'
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 hidden h-[2px] tb:block"
        style={{
          background:
            'linear-gradient(90deg, var(--color-wim-primary-main) 42.46%, var(--color-wim-gray-01) 88.66%)'
        }}
      />

      {COPY_MetabolicDomino.steps.map((step, index) => (
        <li key={step.title} className="relative">
          <span
            aria-hidden="true"
            className={cn(
              'absolute top-[7px] -left-6 h-2 w-2 rounded-full tb:-top-[37px] tb:left-0 tb:h-3 tb:w-3',
              index === 0 ? 'bg-primary-main' : index === 1 ? 'bg-primary-main/60' : 'bg-primary-sub-02'
            )}
          />
          <Typography as="p" variant="itc-body-04" weight="regular" className="text-gray-02">
            STEP {String(index + 1).padStart(2, '0')}
          </Typography>
          <Typography
            as="h3"
            variant="ko-body-01"
            tabletVariant="ko-headline-03"
            weight="bold"
            className="mt-1 break-keep text-primary-main"
          >
            {step.title}
          </Typography>
          <Typography
            as="p"
            variant="ko-body-04"
            tabletVariant="ko-body-02"
            weight="regular"
            className="mt-1 break-keep text-gray-03"
          >
            {step.desc}
          </Typography>
        </li>
      ))}
    </ol>
  );
}

/** 3. WEIGHT COMES FIRST — 대사 도미노 이미지 중심 */
function MetabolicDominoSection() {
  return (
    <section className="bg-white py-12 tb:py-20">
      <Container>
        {/* 태블릿부터 텍스트(왼쪽) / 이미지(오른쪽) 한 줄 */}
        <div className="grid items-center gap-8 tb:grid-cols-[5fr_7fr] tb:gap-10 dt:gap-16">
          <div>
            <BrandEyebrow>{COPY_MetabolicDomino.eyebrow}</BrandEyebrow>
            <BrandTitle lead={COPY_MetabolicDomino.title} className="mt-2" />
            <BrandRichLines lines={COPY_MetabolicDomino.desc} className="mt-6 tb:mt-8" />
          </div>

          {/* 이미지: public/images/brand/metabolic-domino{,-mobile}.webp */}
          <figure>
            <picture>
              <source media="(max-width: 767px)" srcSet={COPY_MetabolicDomino.imageMobile} />
              <img
                src={COPY_MetabolicDomino.image}
                alt={COPY_MetabolicDomino.imageAlt}
                loading="lazy"
                className="block aspect-[1600/914] w-full object-contain"
              />
            </picture>
          </figure>
        </div>

        <DominoSteps />

        {/* 마무리 */}
        <div className="mt-10 border-t border-gray-01 pt-8 text-center tb:mt-14 tb:pt-10">
          <Typography
            as="p"
            variant="ko-body-04"
            tabletVariant="ko-body-02"
            weight="regular"
            className="break-keep text-gray-03"
          >
            {COPY_MetabolicDomino.closingNote}
          </Typography>
          <Typography
            as="p"
            variant="ko-body-01"
            tabletVariant="ko-headline-02"
            weight="medium"
            className="mt-1 break-keep text-primary-main"
          >
            <MobileLineBreaks text={COPY_MetabolicDomino.closingLead} />
            <strong className="font-bold">{COPY_MetabolicDomino.closingAccent}</strong>
            {COPY_MetabolicDomino.closingTail}
          </Typography>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── ObesogenicSection ───────────────────────── */

const COPY_Obesogenic = BRAND_COPY.environment;

type AreaIcon = (typeof COPY_Obesogenic.areas)[number]['icon'];

/** 여섯 영역 선형 아이콘 (24px 그리드) */
const ICON_PATHS: Record<AreaIcon, ReactNode> = {
  meal: (
    <>
      <path d="M4 12h16a8 8 0 0 1-16 0Z" />
      <path d="M9 4v5M12 3v6M15 4v5" />
    </>
  ),
  emotional: (
    <>
      <path d="M4 14h16a8 8 0 0 1-16 0Z" />
      <path d="M12 10.5 9.6 8.2a1.6 1.6 0 1 1 2.4-2.1 1.6 1.6 0 1 1 2.4 2.1Z" />
    </>
  ),
  exercise: (
    <>
      <rect x="3" y="8" width="3" height="8" rx="1" />
      <rect x="18" y="8" width="3" height="8" rx="1" />
      <path d="M6 10H3.5M6 12h12M18 10h2.5" />
    </>
  ),
  activity: (
    <>
      <ellipse cx="8" cy="7.5" rx="2.5" ry="4" />
      <ellipse cx="16" cy="11.5" rx="2.5" ry="4" />
      <path d="M7 14.5h2v2.5a1 1 0 0 1-2 0ZM15 18.5h2V21a1 1 0 0 1-2 0Z" />
    </>
  ),
  sleep: (
    <>
      <path d="M20 14.5A8 8 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 10.5Z" />
      <path d="M18 3v4M16 5h4" />
    </>
  ),
  mind: (
    <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10Z" />
  )
};

function AreaIconSvg({ icon, className }: { icon: AreaIcon; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-5 w-5 shrink-0', className)}
    >
      {ICON_PATHS[icon]}
    </svg>
  );
}

function ClosingStatement({ className }: { className?: string }) {
  return (
    <Typography
      as="p"
      variant="ko-body-01"
      tabletVariant="ko-headline-02"
      weight="medium"
      className={cn('break-keep text-primary-main', className)}
    >
      <MobileLineBreaks text={COPY_Obesogenic.closingLead} />
      <strong className="font-bold">{COPY_Obesogenic.closingAccent}</strong>
      {COPY_Obesogenic.closingTail}
    </Typography>
  );
}

function ClosingNote({ className }: { className?: string }) {
  return (
    <Typography as="p" variant="ko-body-04" tabletVariant="ko-body-02" weight="regular" className={cn('break-keep text-gray-03', className)}>
      {COPY_Obesogenic.closingNote}
    </Typography>
  );
}

/** 4. THE ENVIRONMENT — 왼쪽 텍스트 / 오른쪽 흰 패널 하나에 여섯 영역 */
function ObesogenicSection() {
  return (
    <section className="bg-gray-00 py-12 tb:py-20">
      <Container className="grid gap-10 tb:grid-cols-2 tb:items-center tb:gap-10 dt:gap-16">
        <div>
          <BrandEyebrow>{COPY_Obesogenic.eyebrow}</BrandEyebrow>
          <BrandTitle lead={COPY_Obesogenic.title} className="mt-2" />
          <BrandRichLines lines={COPY_Obesogenic.desc} className="mt-6 tb:mt-8" />
          <div className="mt-8 border-l-2 border-primary-main pl-4 tb:mt-10 tb:pl-5">
            <ClosingNote />
            <ClosingStatement className="mt-1" />
          </div>
        </div>

        <div className={cn(BRAND_CARD, 'px-5 py-6 tb:px-7 tb:py-8')}>
          <Typography as="h3" variant="ko-body-03" tabletVariant="ko-body-02" weight="bold" className="break-keep text-black">
            {COPY_Obesogenic.subtitle}
          </Typography>
          <ul className="mt-4 grid grid-cols-2 border-t border-gray-01">
            {COPY_Obesogenic.areas.map((area, index) => (
              <li
                key={area.title}
                className={cn(
                  'border-b border-gray-01 py-4 tb:py-5',
                  index % 2 === 0 ? 'pr-3 tb:pr-5' : 'border-l pl-3 tb:pl-5',
                  index >= COPY_Obesogenic.areas.length - 2 && 'border-b-0 pb-0 tb:pb-0'
                )}
              >
                <div className="flex items-center gap-2 text-primary-main">
                  <AreaIconSvg icon={area.icon} className="h-4 w-4 tb:h-5 tb:w-5" />
                  <Typography as="p" variant="ko-body-03" tabletVariant="ko-body-01" weight="bold">
                    {area.title}
                  </Typography>
                </div>
                <Typography as="p" variant="ko-body-04" tabletVariant="ko-body-03" weight="regular" className="mt-1 break-keep text-gray-03">
                  {area.desc}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── OurAnswerSection ───────────────────────── */

const COPY_OurAnswer = BRAND_COPY.answer;

/** 5. OUR ANSWER — 생활은 더욱 정교하게 설계되어야 합니다. */
function OurAnswerSection() {
  return (
    <section className="bg-gradient-to-b from-white to-primary-sub-03 py-16 text-center tb:py-32">
      <Container>
        <BrandEyebrow>{COPY_OurAnswer.eyebrow}</BrandEyebrow>
        <BrandTitle
          lead={COPY_OurAnswer.titleLead}
          accent={COPY_OurAnswer.titleAccent}
          tail={COPY_OurAnswer.titleTail}
          className="mt-2"
        />
        <div
          aria-hidden="true"
          className="mx-auto mt-8 h-0.5 w-10 bg-primary-main tb:mt-12 tb:w-16"
        />
        <BrandRichLines lines={COPY_OurAnswer.desc} className="mt-8 tb:mt-10" />
      </Container>
    </section>
  );
}

/* ───────────────────────── PhilosophySection ───────────────────────── */

const COPY_Philosophy = BRAND_COPY.philosophy;

/** 6. OUR PHILOSOPHY — 우리가 설계하는 방식 */
function PhilosophySection() {
  return (
    <section className="bg-white py-12 tb:py-28">
      <Container>
        <div className="text-center">
          <BrandEyebrow>{COPY_Philosophy.eyebrow}</BrandEyebrow>
          <BrandTitle lead={COPY_Philosophy.title} className="mt-2" />
          <Typography
            as="p"
            variant="ko-body-03"
            tabletVariant="ko-body-01"
            weight="regular"
            className="mt-6 break-keep text-gray-03 tb:mt-9"
          >
            <LineBreaks text={COPY_Philosophy.desc} />
          </Typography>
        </div>

        <ul className="mt-10 grid gap-3 tb:mt-16 tb:grid-cols-3 tb:gap-5">
          {COPY_Philosophy.principles.map((principle) => (
            <li
              key={principle.eyebrow}
              className={cn(BRAND_CARD, 'px-6 py-7 tb:px-9 tb:py-11')}
            >
              <Typography
                as="p"
                variant="itc-body-04"
                weight="regular"
                className="text-gray-03"
              >
                {principle.eyebrow}
              </Typography>
              <Typography
                as="h3"
                variant="ko-headline-03"
                tabletVariant="ko-headline-02"
                weight="bold"
                className="mt-2 break-keep text-primary-main tb:mt-3"
              >
                {principle.title}
              </Typography>
              <Typography
                as="p"
                variant="ko-body-03"
                tabletVariant="ko-body-02"
                weight="regular"
                className="mt-3 break-keep text-gray-03 tb:mt-4"
              >
                <LineBreaks text={principle.desc} />
              </Typography>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ───────────────────────── ThreeMApproachSection ───────────────────────── */

const COPY_ThreeMApproach = BRAND_COPY.methodology;

const TONE_FILL: Record<BrandTone, string> = {
  meal: 'fill-primary-main',
  mobility: 'fill-primary-accent',
  mentation: 'fill-primary-sub-01'
};

/** 꼭짓점 위치(0~100). 12시 방향부터 시계 방향으로 60° 간격 */
const vertex = (index: number, scale = 1) => {
  const angle = ((-90 + index * 60) * Math.PI) / 180;
  return {
    x: 50 + 50 * scale * Math.cos(angle),
    y: 50 + 50 * scale * Math.sin(angle)
  };
};

const polygon = (scale: number) =>
  COPY_ThreeMApproach.radar
    .map((_, index) => {
      const { x, y } = vertex(index, scale);
      return `${x},${y}`;
    })
    .join(' ');

/** 꼭짓점별 라벨 배치 — 위 / 오른쪽 둘 / 아래 / 왼쪽 둘 */
const LABEL_POSITION = [
  '-translate-x-1/2 -translate-y-[calc(100%+10px)]',
  'translate-x-[12px] -translate-y-1/2',
  'translate-x-[12px] -translate-y-1/2',
  '-translate-x-1/2 translate-y-[10px]',
  '-translate-x-[calc(100%+12px)] -translate-y-1/2',
  '-translate-x-[calc(100%+12px)] -translate-y-1/2'
];

/** 환경이 무너뜨린 여섯 영역 육각형 */
function SixAreaRadar() {
  return (
    <div className="relative mx-auto mt-14 aspect-square w-[200px] tb:mt-20 tb:w-[340px]">
      <svg aria-hidden="true" viewBox="-2 -2 104 104" className="h-full w-full overflow-visible">
        <polygon points={polygon(1)} className="fill-white" />
        {[1, 2 / 3, 1 / 3].map((scale) => (
          <polygon
            key={scale}
            points={polygon(scale)}
            fill="none"
            className="stroke-gray-01"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {COPY_ThreeMApproach.radar.map((area, index) => {
          const { x, y } = vertex(index);
          return (
            <line
              key={area.label}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              className="stroke-gray-01"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
        {COPY_ThreeMApproach.radar.map((area, index) => {
          const { x, y } = vertex(index);
          return (
            <circle
              key={area.label}
              cx={x}
              cy={y}
              r="2.4"
              className={TONE_FILL[area.tone]}
            />
          );
        })}
      </svg>

      <ul>
        {COPY_ThreeMApproach.radar.map((area, index) => {
          const { x, y } = vertex(index);
          return (
            <Typography
              key={area.label}
              as="li"
              variant="ko-body-04"
              tabletVariant="ko-body-02"
              weight="bold"
              className={cn(
                'absolute whitespace-nowrap',
                LABEL_POSITION[index],
                TONE_TEXT[area.tone]
              )}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {area.label}
            </Typography>
          );
        })}
      </ul>
    </div>
  );
}

/** 7. OUR METHODOLOGY — 3M Approach */
function ThreeMApproachSection() {
  return (
    <section className="bg-gray-00 py-12 tb:py-28">
      <Container>
        <div className="text-center">
          <BrandEyebrow>{COPY_ThreeMApproach.eyebrow}</BrandEyebrow>
          <Typography
            as="h2"
            variant="garamond-headline-02"
            tabletVariant="garamond-headline-01"
            weight="medium"
            className="mt-2 text-primary-main"
          >
            {COPY_ThreeMApproach.title}
          </Typography>
          <BrandRichLines lines={COPY_ThreeMApproach.desc} className="mt-6 tb:mt-9" />
        </div>

        <SixAreaRadar />

        <ul className="mt-16 grid gap-3 tb:mt-20 tb:grid-cols-3 tb:gap-5">
          {COPY_ThreeMApproach.pillars.map((pillar) => (
            <li
              key={pillar.name}
              className={cn(BRAND_CARD, 'px-6 py-7 tb:px-8 tb:py-10')}
            >
              <Typography
                as="h3"
                variant="garamond-headline-03"
                tabletVariant="garamond-title-01"
                weight="medium"
                className={TONE_TEXT[pillar.tone]}
              >
                {pillar.name}
              </Typography>
              <Typography
                as="p"
                variant="ko-body-03"
                weight="regular"
                className="text-gray-03"
              >
                {pillar.subtitle}
              </Typography>
              <Typography
                as="p"
                variant="ko-body-03"
                tabletVariant="ko-body-02"
                weight="regular"
                className="mt-4 break-keep text-gray-03"
              >
                <LineBreaks text={pillar.desc} />
              </Typography>
              <ul className="mt-5 flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <BrandTag key={tag} label={tag} />
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <Typography
          as="p"
          variant="ko-headline-03"
          tabletVariant="ko-title-02"
          weight="bold"
          className="mt-12 break-keep text-center text-primary-main tb:mt-20"
        >
          {COPY_ThreeMApproach.closing}
        </Typography>
      </Container>
    </section>
  );
}

/* ───────────────────────── TwoPhasesSection ───────────────────────── */

const COPY_TwoPhases = BRAND_COPY.phases;

/** 8. THE DESIGN, IN ORDER — 설계의 두 단계 */
function TwoPhasesSection() {
  return (
    <section className="bg-white py-12 tb:py-20">
      <Container>
        <BrandEyebrow>{COPY_TwoPhases.eyebrow}</BrandEyebrow>
        <BrandTitle lead={COPY_TwoPhases.title} className="mt-2" />

        {/* 모바일: 세로 타임라인 / 태블릿부터: 가로 타임라인 + 2열 카드 (감량 페이지 THE JOURNEY 와 같은 선) */}
        <ol className="relative mt-8 grid gap-5 pl-6 tb:mt-12 tb:grid-cols-2 tb:gap-5 tb:pt-8 tb:pl-0">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[3px] w-[2px] tb:hidden"
            style={{
              background:
                'linear-gradient(180deg, var(--color-wim-primary-main) 42.46%, var(--color-wim-gray-01) 88.66%)'
            }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-[2px] tb:block"
            style={{
              background:
                'linear-gradient(90deg, var(--color-wim-primary-main) 42.46%, var(--color-wim-gray-01) 88.66%)'
            }}
          />

          {COPY_TwoPhases.items.map((phase, index) => (
            <li key={phase.label} className="relative flex">
              <span
                aria-hidden="true"
                className={cn(
                  'absolute top-8 -left-6 h-2 w-2 rounded-full tb:-top-[37px] tb:left-0 tb:h-3 tb:w-3',
                  index === 0 ? 'bg-primary-main' : 'bg-primary-sub-02'
                )}
              />

              <div className={cn(BRAND_CARD, 'w-full px-5 py-7 tb:px-8 tb:py-9 dt:px-10')}>
                <Typography
                  as="span"
                  variant="ko-body-04"
                  tabletVariant="ko-body-03"
                  weight="medium"
                  className="inline-block rounded-full border border-primary-main px-3 py-1 text-primary-main"
                >
                  {phase.label}
                </Typography>
                <Typography
                  as="h3"
                  variant="ko-headline-03"
                  tabletVariant="ko-headline-01"
                  weight="bold"
                  className="mt-4 break-keep text-primary-main"
                >
                  {phase.title}
                </Typography>
                <BrandRichLines lines={phase.desc} className="mt-4 tb:mt-6" />
                <ul className="mt-6 flex flex-wrap gap-2 tb:mt-8">
                  {phase.tags.map((tag) => (
                    <BrandTag key={tag} label={tag} />
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ───────────────────────── BrandFinalCtaSection ───────────────────────── */

const COPY_BrandFinalCta = BRAND_COPY.finalCta;

/** 9. BEGIN YOUR DESIGN — 감량·기기 페이지와 같은 마지막 상담 CTA */
function BrandFinalCtaSection() {
  return (
    <ProgramFinalCtaSection
      title={<MobileLineBreaks text={COPY_BrandFinalCta.title} />}
      description={<MobileLineBreaks text={COPY_BrandFinalCta.desc} />}
      className="py-7 tb:py-12"
      titleClassName="!leading-normal"
      actionsClassName="mt-7"
    >
      <CtaButton label={COPY_BrandFinalCta.consultationLabel} href={CONSULT_HREF} variant="white" />
      <CtaButton
        label={COPY_BrandFinalCta.programLabel}
        href={COPY_BrandFinalCta.programHref}
        variant="outline-white"
        icon={false}
      />
    </ProgramFinalCtaSection>
  );
}

/* ───────────────────────── 페이지 ───────────────────────── */

export default function BrandPage() {
  return (
    <div className="overflow-hidden bg-white font-pretendard text-black">
      {/* 0. 영상 히어로 */}
      <BrandVideoHeroSection />

      {/* 1. 우리는 건강하게 오래 사는 것을 설계합니다. */}
      <BrandHeroSection />

      {/* 2. WHY LONGEVITY — 기대수명과 건강수명의 간격 */}
      <LongevityGapSection />

      {/* 3. WEIGHT COMES FIRST — 대사 도미노 */}
      <MetabolicDominoSection />

      {/* 4. THE ENVIRONMENT — 비만 유발 사회 */}
      <ObesogenicSection />

      {/* 5. OUR ANSWER */}
      <OurAnswerSection />

      {/* 6. OUR PHILOSOPHY — 세 가지 원칙 */}
      <PhilosophySection />

      {/* 7. OUR METHODOLOGY — 3M Approach */}
      <ThreeMApproachSection />

      <section aria-label="브랜드 소개 영상" className="bg-white pt-12 tb:pt-20">
        <Container>
          <div className="mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-[10px] bg-black tb:hidden">
            <iframe
              src="https://www.youtube.com/embed/dO66F6YfskA"
              title="브랜드 소개 영상 모바일 버전"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
          <div className="mx-auto hidden aspect-video w-full max-w-[840px] overflow-hidden rounded-[10px] bg-black tb:block">
            <iframe
              src="https://www.youtube.com/embed/PSwdsD3OiHw"
              title="브랜드 소개 영상"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </Container>
      </section>

      {/* 8. THE DESIGN, IN ORDER — 설계의 두 단계 */}
      <TwoPhasesSection />

      {/* 9. BEGIN YOUR DESIGN */}
      <BrandFinalCtaSection />
    </div>
  );
}
