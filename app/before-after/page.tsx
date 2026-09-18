/**
 * 감량 사례 상세 (회원 A) — wim-homepage-2 의 /before-after 화면을 한 파일로 옮긴 것.
 * 문구·수치·사진 경로는 아래 DETAIL 에서 고친다. 사진은 public/images/bna 에 있다.
 * 상담 버튼은 이 프로젝트의 /contact 로 보낸다.
 */

import Link from "next/link";
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

/** 상담 버튼이 이동할 곳 */
const CONSULT_HREF = "/contact";

/* ───────────────────────── 데이터 ───────────────────────── */

/** 사진 사이에 쌓이는 수치 변화 — 전 → 후 (단위까지 적는다) */
type BnaCaseMeasure = { label: string; before: string; after: string };

/** 신체 변화 카드 한 장. before/after 는 막대 높이를 계산하는 데 쓴다 */
type BnaCaseMetricCard = {
  title: string;
  delta: string;
  unit: string;
  before: number;
  after: number;
};

/** 사진과 글을 좌우로 번갈아 놓는 이야기 한 토막 */
type BnaCaseStory = {
  /** 이 이야기부터 새 묶음이 시작된다 — 묶음 제목(예: BEFORE) */
  sectionLabel?: string;
  /** 묶음 모양 (sectionLabel 과 같은 이야기에 적는다) — cards(카드 두 장씩, 기본) · zigzag(한 줄씩 좌우 번갈아) */
  sectionLayout?: 'cards' | 'zigzag';
  imagePlaceholder?: string;
  title: string;
  paragraphs: readonly string[];
  images: readonly string[];
  /** 사진 위에 Before/After 를 표시할 때만 넣는다 */
  imageLabels?: readonly string[];
  /** 사진을 왼쪽에 둘지 오른쪽에 둘지 */
  imageSide: 'left' | 'right';
  /** 묶음 마지막에 홀로 남아 넓게 놓일 때의 모양 — side(사진 옆 글, 기본) · full(사진 꽉 채우고 아래 가운데 글) */
  wideLayout?: 'side' | 'full';
};

type BnaCaseDetail = {
  /** 주소에 들어가는 이름 — /before-after/{slug} */
  slug: string;

  /** true 면 목록(/before-after)에서 카드를 숨긴다. 상세 주소는 그대로 열린다 */
  hideInList?: boolean;

  /** 목록(/before-after)의 카드 */
  card: {
    title: string;
    message: string;
    image: string;
    imageMobile: string;
    alt: string;
  };

  /** 1. 페이지 머리말 */
  intro: {
    /** 제목 위 작은 영문 라벨 */
    eyebrow?: string;
    title: string;
    description: string;
  };

  /** 2. 히어로 */
  hero: {
    eyebrow: string;
    accent: string;
    titleLines: readonly string[];
    /** 사진 옆에 크게 깔리는 숫자 */
    watermark: string;
    watermarkUnit: string;
    /** 히어로 오른쪽 사진. 한 장(전·후가 합쳐진 사진)이나 두 장(전·후 따로)을 넣는다 */
    images: readonly { src: string; alt: string }[];
    summaryLines: readonly string[];
    before: { label: string; value: string; unit: string };
    after: { label: string; value: string; unit: string };
  };

  /** 2-1. 히어로 바로 아래 상담 유도 밴드 */
  heroCta: { quote: string; description?: string; label: string };

  /** 3. 영상 — youtubeId 를 채우면 그 자리에 영상이 뜬다 */
  video: {
    titleLines: readonly string[];
    youtubeId: string;
    poster: string;
    posterAlt: string;
  };

  /** 4. 신체 변화 — 감량 전·후 사진과 그 사이 수치 (5. metrics 와 한 섹션으로 그린다) */
  change: {
    before: { label: string; value: string; unit: string; image: string; alt: string };
    after: { label: string; value: string; unit: string; image: string; alt: string };
    measures: readonly BnaCaseMeasure[];
  };

  /** 5. 신체 변화 데이터 — 4. change 아래 막대 카드 3장 */
  metrics: {
    title: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
    cards: readonly BnaCaseMetricCard[];
  };

  /** 6. 이야기 */
  stories: readonly BnaCaseStory[];

  /** 7. 담당 매니저 코멘트 */
  consultant?: {
    title: string;
    name: string;
    role: string;
    photo: string;
    paragraphs: readonly string[];
    gallery: readonly { image: string; alt: string }[];
    prevLabel: string;
    nextLabel: string;
  };

  /** 8. 상담 유도 밴드 — 페이지 맨 끝 */
  ctaBand: { quote: string; description?: string; label: string };
};


const DETAIL: BnaCaseDetail = {
  slug: 'case-01',

  card: {
    title: '000kg 감량',
    message: '의지가 아니라 설계로 뺍니다.',
    image: '/images/bna/case-01-card.webp',
    imageMobile: '/images/bna/case-01-card.webp',
    alt: '감량 후 회원 A 님의 모습'
  },

  intro: {
    eyebrow: 'Before & After',
    title: '감량 사례',
    description:
      '요요 없는 감량으로 몸과 일상을 모두 되찾은 회원들의 이야기를 들려드립니다.'
  },

  hero: {
    eyebrow: '박민아님(가명) | 무용가 · 안무가',
    accent: '',
    titleLines: ['83.5kg 였던 무용수,', '다시 무대 위에서 빛나다.'],
    watermark: '-000',
    watermarkUnit: 'kg',
    images: [
      {
        src: '/images/bna/case-01-hero.webp',
        alt: '회원 A 님의 감량 전(왼쪽)과 감량 후(오른쪽) 모습'
      }
    ],
    summaryLines: ['윔과 함께 몸도, 일상도,', '자신감도 달라지고 있습니다.'],
    before: { label: 'Before', value: '82', unit: 'kg' },
    after: { label: 'After', value: '67', unit: 'kg' }
  },

  heroCta: {
    quote: '회원 A님이 받고 있는 프로그램이 궁금하세요?',
    label: '상담 신청하기'
  },

  video: {
    titleLines: ['회원 A 님의 감량 기록', '윔과 함께한 변화의 과정'],
    youtubeId: '',
    poster: '/images/diet-program/coaching-process-bg.webp',
    posterAlt: '감량 과정을 담은 영상 자리'
  },

  change: {
    before: {
      label: 'Before',
      value: '68.4',
      unit: 'kg',
      image: '/images/bna/case-01-change-before.webp',
      alt: '회원 A 님의 감량 전 모습'
    },
    after: {
      label: 'After',
      value: '55.1',
      unit: 'kg',
      image: '/images/bna/case-01-change-after.webp',
      alt: '회원 A 님의 감량 후 모습'
    },
    measures: [
      { label: '체지방률', before: '34.8%', after: '24.1%' },
      { label: '골격근량', before: '22.1kg', after: '22.4kg' },
      { label: '허리둘레', before: '86cm', after: '70cm' }
    ]
  },

  metrics: {
    title: '회원 A님의 신체 변화',
    description: '요요 없는 감량으로 몸과 일상을 모두 되찾은 회원들의 이야기를 들려드립니다.',
    beforeLabel: 'Before',
    afterLabel: 'After',
    cards: [
      { title: '체지방량', delta: '-10.7', unit: 'kg', before: 28.8, after: 18.1 },
      { title: '내장지방', delta: '-69.2', unit: 'cm²', before: 152.1, after: 82.9 },
      { title: '복부둘레', delta: '-15.1', unit: 'cm', before: 95.3, after: 80.2 }
    ]
  },

  stories: [
    {
          "title": "무조건 굶어야 한다고 생각했어요.",
          "sectionLabel": "BEFORE",
          "paragraphs": [
                "수인님은 중학생 때부터 무용을 하며 수없이 다이어트를 반복하셨대요.",
                "입시 때가 되면 굶고, 끝나면 다시 찌고… 무대가 생기면 또 굶는 생활의 반복."
          ],
          "images": ["/images/bna/case-01-before-1.webp"],
          "imageSide": "right",
          "imagePlaceholder": "비포 일상 사진"
    },
    {
          "title": "끊으면 다시 찌는 건 아닐까?",
          "paragraphs": [
                "결혼 후 82kg까지 찌고 삭센다, 위고비, 마운자로까지 다 맞아봤지만 빼는 것보다 어려웠던 건 다시 찌지 않는 거였다고 해요."
          ],
          "images": ["/images/bna/case-01-before-2.webp"],
          "imageSide": "left",
          "imagePlaceholder": "비포 스튜디오 사진"
    },
    {
          "title": "운동은 이미\n누구보다 많이 하고 있었습니다.",
          "paragraphs": [
                "아침 운동에 무용 연습까지. 움직임이 부족한 사람은 아니었어요.",
                "그런데 아무리 열심히 운동을 해도 살은 빠지지 않고 오히려 붓기만 하셨대요."
          ],
          "images": ["/images/bna/case-01-before-3.webp"],
          "imageSide": "left",
          "wideLayout": "full",
          "imagePlaceholder": "운동하는 일상 사진"
    },
    {
          "title": "더 줄이는 대신, 제대로 먹기 시작했습니다.",
          "paragraphs": [
                "분명 더 적게 먹으라고 할 줄 알았는데 매니저님은 오히려 더 많이, 제대로 챙겨 먹으라고 하셨대요. 그래서 부족했던 영양을 채우고, 가짜 배고픔과 음식에 대한 갈망부터 줄여나갔습니다."
          ],
          "images": ["/images/bna/case-01-solution-1.webp"],
          "imageSide": "left",
          "imagePlaceholder": "상담 받는 사진 혹은 카톡 대화 스크린샷",
          "sectionLabel": "WIM SOLUTION"
    },
    {
          "title": "배가 부르니까, 간식이 땡기지 않더라구요.",
          "paragraphs": [
                "처음엔 이렇게 먹으면서 정말 빠질까 의심도 많이 하셨대요.",
                "그런데 잘 먹기 시작하자 간식을 억지로 참는 일도, 야식 생각도 서서히 사라졌다고 해요."
          ],
          "images": ["/images/bna/case-01-solution-2.webp"],
          "imageSide": "right",
          "imagePlaceholder": "중간 일상 사진"
    },
    {
          "title": "제대로 회복하니 그제서야 몸이 제 말을 들어주는 것 같았어요.",
          "paragraphs": [
                "매주 센터에 방문해서 그날 컨디션에 맞게 기기관리를 받고 나면 항상 체중이 쑥 내려갔대요.",
                "억지로 운동하며 스트레스만 받았던 지난 시간들이 어이가 없을 지경이라고 하시더라구요."
          ],
          "images": ["/images/bna/case-01-solution-3.webp"],
          "imageSide": "left",
          "imagePlaceholder": "중간 기기관리 사진",
          "wideLayout": "full"
    },
    {
          "title": "한 번도 굶지 않았는데, 몸이 다시 가벼워졌어요.",
          "paragraphs": [
                "수인님은 무엇보다 배고픈 고통 없이, 굶지 않고 살이 빠진 게 가장 신기하다고 하세요.",
                "몸이 다시 가벼워지니 무용도, 일상도 더욱 활기차졌구요."
          ],
          "images": [],
          "imageSide": "left",
          "imagePlaceholder": "애프터 일상 사진",
          "sectionLabel": "AFTER",
          "sectionLayout": "zigzag"
    },
    {
          "title": "예전에 입던 옷을 다시 꺼내 입기 시작했습니다.",
          "paragraphs": [
                "한동안 멀리 했던 몸에 붙는 옷도 자연스럽게 찾게 됐대요.",
                "예전에 잘 입던 옷이 다시 편해지던 순간, 너무나 뿌듯했다고 하셨어요."
          ],
          "images": ["/images/bna/case-01-after-2.webp"],
          "imageSide": "right",
          "imagePlaceholder": "애프터 스튜디오 사진"
    },
    {
          "title": "다시 무대 위에 설 수 있게 되었어요.",
          "paragraphs": [
                "수인님의 목표는 가장 말랐던 몸으로 돌아가는 게 아니래요.",
                "2세를 준비하고, 무대 위에서도 오래도록 움직일 수 있는 건강하고 예쁜 몸을 유지하는 것.",
                "수인님은 먹고, 움직이고, 일하는 삶 안에서 평생 유지할 수 있는 몸을 만들어가고 있습니다."
          ],
          "images": ["/images/bna/case-01-after-3.webp"],
          "imageSide": "right",
          "imagePlaceholder": "무대 사진",
          "wideLayout": "full"
    }
],

  ctaBand: {
    "quote": "수인님처럼 쉽고 건강하게 감량하고 싶다면?",
    "description": "내가 다시 찌는 이유를 찾고, 내 라이프 스타일에 맞는 감량 방법을 설계합니다.",
    "label": "나에게 맞는 감량 상담받기"
},

};

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

/** 가로 폭을 잡는 틀 — 모바일은 좌우 20px 여백 */
function Container({
  children,
  className = "",
  max = "max-w-[1100px]",
}: {
  children: ReactNode;
  className?: string;
  max?: string;
}) {
  return <div className={`mx-auto w-full px-5 ${max} ${className}`}>{children}</div>;
}

/** 둥근 상담 버튼 (↗ 아이콘 포함) */
function CtaButton({
  label,
  href,
  variant = "primary",
  icon = true,
  className = "",
}: {
  label: ReactNode;
  href: string;
  variant?: "primary" | "white";
  icon?: boolean;
  className?: string;
}) {
  const tone =
    variant === "white"
      ? "border-white bg-white text-primary-main"
      : "border-primary-main bg-primary-main text-white";
  return (
    <Link
      href={href}
      className={`inline-flex h-[30px] select-none items-center justify-center rounded-full border px-5 no-underline tb:h-[50px] ${tone} ${className}`}
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


/* ───────────────────────── CaseIntroSection ───────────────────────── */

/** 1. 페이지 머리말 — 페이지 제목 */
function CaseIntroSection({
  intro
}: {
  intro: BnaCaseDetail['intro'];
}) {
  return (
    <section>
      <Container className="pb-8 pt-8 text-center tb:pb-8 tb:pt-14 ">
        {intro.eyebrow && (
          <>
            <Typography
              as="p"
              variant="itc-body-04"
              tabletVariant="itc-body-03"
              weight="regular"
              className="mb-2 uppercase text-gray-02 tb:mb-3 dt:hidden"
            >
              {intro.eyebrow}
            </Typography>
            <Typography
              as="p"
              variant="ko-body-02"
              weight="regular"
              className="mb-3 hidden text-center text-gray-02 dt:block"
            >
              {intro.eyebrow}
            </Typography>
          </>
        )}
        <Typography
          as="h1"
          variant="ko-headline-01"
          tabletVariant="ko-display-01"
          weight="bold"
          className="text-black"
        >
          {intro.title}
        </Typography>
        <Typography
          as="p"
          variant="ko-body-03"
          tabletVariant="ko-body-01"
          weight="regular"
          className="mt-3 break-keep text-gray-03 tb:mt-[34px]"
        >
          {intro.description}
        </Typography>
      </Container>
    </section>
  );
}

/* ───────────────────────── CaseHeroSection ───────────────────────── */

/** Before → After 체중 한 벌 */
function WeightStep({
  step,
  tone
}: {
  step: { label: string; value: string; unit: string };
  tone: 'before' | 'after';
}) {
  const isAfter = tone === 'after';
  return (
    <div className="flex flex-col items-start">
      <Typography
        as="span"
        variant="itc-body-04"
        tabletVariant="itc-body-03"
        weight={isAfter ? 'medium' : 'regular'}
        className={`uppercase ${isAfter ? 'text-black' : 'text-gray-02'}`}
      >
        {step.label}
      </Typography>
      <p
        className={`mt-1 whitespace-nowrap text-[34px] leading-none tb:mt-2 tb:text-[48px] ${
          isAfter ? 'font-bold text-primary-main' : 'font-medium text-gray-02'
        }`}
      >
        {step.value}
        {step.unit}
      </p>
    </div>
  );
}

/**
 * 2. 히어로 — 왼쪽에 이름·카피·Before/After, 오른쪽에 감량 전·후 사진.
 * 제목은 첫 줄을 보통 굵기, 나머지 줄을 굵게 쓴다.
 */
function CaseHeroSection({
  hero
}: {
  hero: BnaCaseDetail['hero'];
}) {
  /** 감량 전·후 두 장을 나란히 세울지 */
  const isPair = hero.images.length > 1;
  const titleLines = [hero.accent, ...hero.titleLines].filter(Boolean);

  return (
    <section className="relative">
      <Container className="pb-14 pt-4 tb:pb-20 tb:pt-8">
        <div className="grid grid-cols-1 gap-10 dt:grid-cols-2 dt:grid-rows-[auto_1fr] dt:gap-0">
          {/* 왼쪽 위 — 이름, 사진까지 이어지는 선, 감량 카피 */}
          <div className="relative z-20 dt:col-start-1 dt:row-start-1 dt:pt-16">
            <div className="flex items-center gap-8">
              <Typography
                as="p"
                variant="ko-body-03"
                tabletVariant="ko-body-01"
                desktopVariant="ko-headline-03"
                weight="regular"
                desktopWeight="medium"
                className="flex-none text-gray-03 dt:text-primary-sub-01"
              >
                {hero.eyebrow}
              </Typography>
              <span
                aria-hidden="true"
                className="hidden flex-1 items-center dt:-mr-6 dt:flex"
              >
                <span className="h-[2px] flex-1 bg-primary-main" />
                <span className="h-3 w-3 flex-none rounded-full bg-primary-main" />
              </span>
            </div>

            <Typography
              as="h2"
              variant="ko-headline-01"
              tabletVariant="ko-display-01"
              desktopVariant="ko-display-01"
              weight="bold"
              desktopWeight="medium"
              className="mt-6 break-keep text-primary-main tb:mt-7 dt:text-[#2E5F3A]"
            >
              {titleLines.map((line, index) => (
                <span
                  key={line}
                  className={index === 0 ? 'font-medium' : undefined}
                >
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </Typography>
          </div>

          {/* 오른쪽 — 인물 사진. 한 장이면 그대로, 두 장이면 감량 전·후가 나란히 선다 */}
          <div className="relative z-10 flex items-end justify-center dt:col-start-2 dt:row-span-2 dt:row-start-1">
            {hero.images.map((photo, index) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className={
                  isPair
                    ? `relative h-[340px] w-auto object-contain tb:h-[520px] dt:h-[640px] ${index > 0 ? '-ml-4 tb:-ml-8' : ''}`
                    : 'h-[380px] w-auto max-w-full object-contain tb:h-[560px] dt:h-[680px]'
                }
              />
            ))}
          </div>

          {/* 왼쪽 아래 — 한 줄 요약, Before/After, 감량 숫자 */}
          <div className="dt:col-start-1 dt:row-start-2 dt:pt-[86px]">
            <Typography
              as="p"
              variant="ko-body-01"
              tabletVariant="ko-headline-02"
              desktopVariant="ko-title-01"
              weight="medium"
              desktopWeight="semibold"
              className="break-keep text-primary-main dt:text-[#2E5F3A]"
            >
              {hero.summaryLines.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </Typography>

            <div className="mt-6 flex items-center gap-6 border-l-4 border-primary-main pl-6 tb:mt-7 tb:gap-10 tb:pl-9">
              <WeightStep step={hero.before} tone="before" />
              <span
                aria-hidden="true"
                className="mt-5 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-primary-main tb:mt-7 tb:border-y-[9px] tb:border-l-[14px]"
              />
              <WeightStep step={hero.after} tone="after" />
            </div>

            <p
              aria-hidden="true"
              className="mt-8 select-none whitespace-nowrap text-[72px] font-bold leading-none tracking-[-0.02em] text-[#D9DBD8] tb:mt-9 tb:text-[110px]"
            >
              {hero.watermark}
              {hero.watermarkUnit}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── CaseCtaBandSection ───────────────────────── */

/** 상담 유도 밴드 — 히어로 바로 아래와 페이지 맨 끝에 쓴다 */
function CaseCtaBandSection({
  ctaBand,
  emphasized = false
}: {
  ctaBand: BnaCaseDetail['ctaBand'];
  emphasized?: boolean;
}) {
  return (
    <section className="bg-primary-main py-10 tb:py-14">
      <Container className="flex flex-col items-center text-center">
        <Typography
          as="p"
          variant="ko-headline-03"
          tabletVariant="ko-display-02"
          desktopVariant={emphasized ? 'ko-display-01' : 'ko-display-02'}
          weight="bold"
          className="break-keep text-white"
        >
          {ctaBand.quote}
        </Typography>

        {ctaBand.description && (
          <Typography
            as="p"
            variant="ko-body-03"
            tabletVariant="ko-body-01"
            weight="regular"
            className="mt-2 break-keep text-white tb:mt-3"
          >
            {ctaBand.description}
          </Typography>
        )}

        <CtaButton href={CONSULT_HREF} label={ctaBand.label} variant="white" className="mt-6 tb:mt-8" />
      </Container>
    </section>
  );
}

/* ───────────────────────── CaseBodyChangeSection ───────────────────────── */

/** 막대 끝이 차트 윗단에 붙지 않도록 큰 값도 이 비율까지만 채운다 */
const BAR_MAX_PERCENT = 80;
/** 막대 두 개의 가로 위치(%) */
const BAR_X = { before: 22, after: 78 } as const;

/** BEFORE 68.4kg — 사진 위 체중 */
function WeightHeading({
  step,
  tone
}: {
  step: BnaCaseDetail['change']['before'];
  tone: 'before' | 'after';
}) {
  const isAfter = tone === 'after';
  return (
    <div className="text-center">
      <Typography
        as="p"
        variant="itc-body-04"
        tabletVariant="itc-body-02"
        weight={isAfter ? 'medium' : 'regular'}
        className={`uppercase ${isAfter ? 'text-primary-main' : 'text-gray-02'}`}
      >
        {step.label}
      </Typography>
      <p
        className={`mt-1 text-[26px] font-bold leading-tight tb:text-[34px] ${
          isAfter ? 'text-primary-main' : 'text-gray-02'
        }`}
      >
        {step.value}
        {step.unit}
      </p>
    </div>
  );
}

/** 감량 전 → 후를 잇는 긴 화살표 */
function LongArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 30"
      className="h-auto w-full text-primary-main"
      fill="none"
    >
      <defs>
        <linearGradient id="bna-arrow-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="1" stopColor="currentColor" />
        </linearGradient>
      </defs>
      <path
        d="M0 25H256L234 3"
        stroke="url(#bna-arrow-fade)"
        strokeWidth="2"
      />
    </svg>
  );
}

/** 사진 사이 수치 한 줄 — 34.8% → 24.1% */
function MeasureRow({ measure }: { measure: BnaCaseDetail['change']['measures'][number] }) {
  return (
    <li className="flex items-center justify-between tb:flex-col tb:justify-start">
      <Typography
        as="span"
        variant="ko-body-04"
        tabletVariant="ko-body-02"
        weight="bold"
        className="text-black"
      >
        {measure.label}
      </Typography>
      <p className="flex items-center gap-2 whitespace-nowrap text-[18px] leading-tight tb:mt-2 tb:gap-3 tb:text-[26px]">
        <span className="font-light text-gray-02">{measure.before}</span>
        <span aria-hidden="true" className="font-bold text-primary-main">
          →
        </span>
        <span className="sr-only">에서</span>
        <span className="bg-primary-sub-02 px-1 font-bold text-primary-main">
          {measure.after}
        </span>
      </p>
    </li>
  );
}

/** 막대 두 개와 그 사이를 잇는 면으로 감량 전후를 비교한다 */
function BeforeAfterChart({
  card,
  beforeLabel,
  afterLabel
}: {
  card: BnaCaseMetricCard;
  beforeLabel: string;
  afterLabel: string;
}) {
  const max = Math.max(card.before, card.after);
  const height = (value: number) => (value / max) * BAR_MAX_PERCENT;
  const bars = [
    { key: 'before', label: beforeLabel, value: card.before, x: BAR_X.before },
    { key: 'after', label: afterLabel, value: card.after, x: BAR_X.after }
  ] as const;

  return (
    <div className="mt-6 tb:mt-8">
      <div className="relative h-[160px] tb:h-[190px]">
        {/* 가로 눈금선 */}
        <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-between">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} className="h-px w-full bg-[#EDEFEC]" />
          ))}
        </div>

        {/* 두 막대 꼭대기를 잇는 연한 면 */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <polygon
            points={`${BAR_X.before},${100 - height(card.before)} ${BAR_X.after},${100 - height(card.after)} ${BAR_X.after},100 ${BAR_X.before},100`}
            fill="#E4F1DF"
          />
        </svg>

        {bars.map((bar) => (
          <div
            key={bar.key}
            className="absolute bottom-0 flex w-6 -translate-x-1/2 flex-col items-center tb:w-[26px]"
            style={{ left: `${bar.x}%`, height: `${height(bar.value)}%` }}
          >
            <span
              className={`absolute -top-6 whitespace-nowrap text-[13px] font-bold tb:text-[15px] ${
                bar.key === 'before' ? 'text-gray-03' : 'text-primary-main'
              }`}
            >
              {bar.value}
              {card.unit}
            </span>
            <span
              className={`h-full w-full rounded-t-full ${
                bar.key === 'before' ? 'bg-[#A7BFA9]' : 'bg-primary-main'
              }`}
            />
          </div>
        ))}
      </div>

      {/* 막대 아래 라벨 */}
      <div className="relative mt-3 h-5">
        {bars.map((bar) => (
          <Typography
            key={bar.key}
            as="span"
            variant="itc-body-04"
            weight="regular"
            className={`absolute -translate-x-1/2 uppercase ${
              bar.key === 'before' ? 'text-gray-02' : 'text-black'
            }`}
            style={{ left: `${bar.x}%` }}
          >
            {bar.label}
          </Typography>
        ))}
      </div>
    </div>
  );
}

/**
 * 4~5. 신체 변화 — 감량 전·후 사진 사이에 주요 수치를 쌓고,
 * 아래에 체성분 막대 카드 3장을 둔다.
 */
function CaseBodyChangeSection({
  change,
  metrics
}: {
  change: BnaCaseDetail['change'];
  metrics: BnaCaseDetail['metrics'];
}) {
  return (
    <section className="bg-[linear-gradient(180deg,var(--Center_White,#FFF)_0%,#F4FCF3_100%)] py-14 tb:py-24">
      <Container max="max-w-[1000px]">
        <header className="text-center">
          <Typography
            as="h2"
            variant="ko-headline-02"
            tabletVariant="ko-display-02"
            desktopVariant="ko-display-01"
            weight="bold"
            className="text-primary-main"
          >
            {metrics.title}
          </Typography>
          <Typography
            as="p"
            variant="ko-body-04"
            tabletVariant="ko-body-02"
            desktopVariant="ko-headline-02"
            weight="regular"
            className="mt-3 break-keep text-gray-03 tb:mt-5 dt:text-primary-sub-01"
          >
            {metrics.description}
          </Typography>
        </header>

        {/* 사진 위 — BEFORE ────→ AFTER */}
        <div className="mt-10 grid grid-cols-[1fr_72px_1fr] items-center gap-x-3 tb:mt-16 tb:grid-cols-[1fr_minmax(160px,260px)_1fr] tb:gap-x-12">
          <WeightHeading step={change.before} tone="before" />
          <LongArrow />
          <WeightHeading step={change.after} tone="after" />
        </div>

        {/* 사진 두 장과 그 사이 수치. 모바일에서는 수치를 사진 아래로 내린다 */}
        <div className="mt-5 grid grid-cols-2 gap-3 tb:mt-8 tb:grid-cols-[1fr_minmax(160px,260px)_1fr] tb:items-center tb:gap-x-12">
          <img
            src={change.before.image}
            alt={change.before.alt}
            className="aspect-[4/5] w-full rounded-[10px] object-cover tb:rounded-xl"
          />
          <ul className="order-last col-span-2 mt-4 flex list-none flex-col gap-3 rounded-[10px] bg-white/70 px-5 py-4 tb:order-none tb:col-span-1 tb:mt-0 tb:gap-9 tb:bg-transparent tb:p-0">
            {change.measures.map((measure) => (
              <MeasureRow key={measure.label} measure={measure} />
            ))}
          </ul>
          <img
            src={change.after.image}
            alt={change.after.alt}
            className="aspect-[4/5] w-full rounded-[10px] object-cover tb:rounded-xl"
          />
        </div>

        {/* 체성분 막대 카드 */}
        <div className="mt-10 grid grid-cols-1 gap-4 tb:mt-12 tb:grid-cols-3 tb:gap-5">
          {metrics.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[10px] border border-[#E6E9E5] bg-white/90 px-6 pb-6 pt-7 shadow-[0_2px_10px_rgba(21,94,53,0.04)] tb:px-10 tb:pb-8 tb:pt-9"
            >
              <Typography
                as="h3"
                variant="ko-headline-03"
                tabletVariant="ko-headline-02"
                weight="bold"
                className="text-center text-primary-main"
              >
                {card.title}
                <span className="ml-4 font-normal">
                  {card.delta}
                  {card.unit}
                </span>
              </Typography>
              <BeforeAfterChart
                card={card}
                beforeLabel={metrics.beforeLabel}
                afterLabel={metrics.afterLabel}
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── CaseStorySection ───────────────────────── */

/** 사진 한 장 또는 두 장. 두 장이면 Before/After 로 나란히 붙인다 */
function StoryImages({ story }: { story: BnaCaseStory }) {
  if (!story.images.length) {
    return story.imagePlaceholder ? (
      <div className="flex aspect-[4/3] items-center justify-center rounded-[10px] bg-gray-01 p-6 text-center text-gray-03 tb:rounded-[20px]">
        {story.imagePlaceholder}
      </div>
    ) : null;
  }
  if (story.images.length === 1) {
    return (
      <img
        src={story.images[0]}
        alt=""
        aria-hidden="true"
        className="aspect-[4/3] w-full rounded-[10px] object-cover"
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-[10px] tb:rounded-[20px]">
      {story.images.map((image, index) => (
        <div key={image} className="relative">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="aspect-[3/4] w-full object-cover"
          />
          {story.imageLabels?.[index] && (
            <Typography
              as="span"
              variant="itc-body-04"
              tabletVariant="itc-body-03"
              weight="regular"
              className="absolute bottom-3 left-3 text-white [text-shadow:0_0_4px_rgba(0,0,0,0.4)]"
            >
              {story.imageLabels[index]}
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
}

/** 이야기 본문 문단 */
function StoryParagraphs({ story }: { story: BnaCaseStory }) {
  return (
    <div className="mt-3 flex flex-col tb:mt-5">
      {story.paragraphs.map((paragraph) => (
        <Typography
          key={paragraph.slice(0, 20)}
          as="p"
          variant="ko-body-04"
          tabletVariant="ko-body-02"
          desktopVariant="ko-body-01"
          weight="regular"
          className="break-keep text-[#333333] dt:text-black"
        >
          {paragraph}
        </Typography>
      ))}
    </div>
  );
}

/** 사진이 없을 때 자리만 잡아두는 회색 상자 */
function ImageSlot({ story }: { story: BnaCaseStory }) {
  if (story.images.length) return <StoryImages story={story} />;
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-[10px] bg-gray-01 p-6 text-center text-gray-03">
      {story.imagePlaceholder}
    </div>
  );
}

/** 묶음 안 카드 — 사진 아래 제목과 글 */
function StoryCard({
  story,
  isBefore
}: {
  story: BnaCaseStory;
  isBefore: boolean;
}) {
  return (
    <article className={isBefore ? '[&>img]:aspect-[536/400] [&>img]:max-w-[536px]' : undefined}>
      <ImageSlot story={story} />
      <Typography
        as="h3"
        variant="ko-body-01"
        tabletVariant="ko-headline-03"
        desktopVariant="ko-headline-01"
        weight="bold"
        className="mt-5 whitespace-pre-line break-keep text-black tb:mt-10"
      >
        {story.title}
      </Typography>
      <StoryParagraphs story={story} />
    </article>
  );
}

/**
 * 묶음의 마지막 한 장이 홀로 남으면 가로로 넓게 놓는다.
 * side — 사진 왼쪽, 초록 제목과 글은 오른쪽 아래 (기본)
 * full — 사진을 꽉 채우고, 초록 제목과 글은 아래 가운데
 */
function StoryWide({ story }: { story: BnaCaseStory }) {
  if (story.wideLayout === 'full') {
    return (
      <article>
        {story.images.length ? (
          <img
            src={story.images[0]}
            alt=""
            aria-hidden="true"
            className="aspect-[4/3] w-full rounded-[10px] object-cover tb:aspect-auto"
          />
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center rounded-[10px] bg-gray-01 p-6 text-center text-gray-03 tb:aspect-[952/305]">
            {story.imagePlaceholder}
          </div>
        )}
        <div className="mt-6 text-center tb:mt-14">
          <Typography
            as="h3"
            variant="ko-body-01"
            tabletVariant="ko-headline-02"
            weight="bold"
            className="whitespace-pre-line break-keep text-primary-main"
          >
            {story.title}
          </Typography>
          <StoryParagraphs story={story} />
        </div>
      </article>
    );
  }

  return <StorySide story={story} emphasis />;
}

/**
 * 사진과 글을 나란히 — 글은 사진 아래쪽 끝에 맞춘다.
 * imageSide 가 right 면 PC 에서 사진이 오른쪽으로 간다 (모바일은 항상 사진이 위).
 */
function StorySide({
  story,
  emphasis = false
}: {
  story: BnaCaseStory;
  /** 묶음 마지막을 강조할 때 — 제목을 크게, 초록으로 */
  emphasis?: boolean;
}) {
  const imageRight = story.imageSide === 'right';
  return (
    <article className="grid grid-cols-1 gap-5 tb:grid-cols-2 tb:gap-5">
      <div className={imageRight ? 'tb:order-2' : undefined}>
        <ImageSlot story={story} />
      </div>
      <div className={`tb:self-end ${imageRight ? 'tb:order-1' : ''}`}>
        <Typography
          as="h3"
          variant="ko-body-01"
          tabletVariant={emphasis ? 'ko-headline-02' : 'ko-headline-03'}
          weight="bold"
          className={`whitespace-pre-line break-keep ${emphasis ? 'text-primary-main' : 'text-black'}`}
        >
          {story.title}
        </Typography>
        <StoryParagraphs story={story} />
      </div>
    </article>
  );
}

/**
 * 제목이 붙은 묶음. 묶음 첫 이야기의 sectionLayout 으로 모양을 고른다.
 * cards  — 카드 두 장씩, 홀수로 남은 마지막 한 장은 가로로 넓게 (기본)
 * zigzag — 사진·글을 한 줄씩 좌우로 번갈아 놓고, 마지막 한 장은 가로로 넓게
 */
function StoryChapter({
  label,
  stories
}: {
  label: string;
  stories: readonly BnaCaseStory[];
}) {
  const isZigzag = stories[0]?.sectionLayout === 'zigzag';
  const hasWide = isZigzag || stories.length % 2 === 1;
  const cards = hasWide ? stories.slice(0, -1) : stories;
  const wide = hasWide ? stories[stories.length - 1] : null;

  return (
    <div>
      <Typography
        as="h2"
        variant="ko-headline-01"
        tabletVariant="ko-display-01"
        weight="bold"
        className="text-center uppercase text-black"
      >
        {label}
      </Typography>
      <div className="mt-8 flex flex-col gap-12 tb:mt-16 tb:gap-20">
        {isZigzag &&
          cards.map((story) => (
            <StorySide key={story.title} story={story} />
          ))}
        {!isZigzag && cards.length > 0 && (
          <div className={`grid grid-cols-1 gap-y-12 tb:grid-cols-2 tb:gap-y-20 ${label === 'BEFORE' ? 'tb:gap-x-7' : 'gap-x-5'}`}>
            {cards.map((story) => (
              <StoryCard key={story.title} story={story} isBefore={label === 'BEFORE'} />
            ))}
          </div>
        )}
        {wide && <StoryWide story={wide} />}
      </div>
    </div>
  );
}

/** 제목 없는 이야기 — 사진과 글을 좌우로 번갈아 놓는다 */
function StoryRow({ story }: { story: BnaCaseStory }) {
  const hasImage = story.images.length > 0 || Boolean(story.imagePlaceholder);
  return (
    <article
      className={`grid grid-cols-1 items-center gap-6 dt:gap-14 ${hasImage ? 'dt:grid-cols-2' : ''}`}
    >
      <div
        className={
          !hasImage
            ? 'hidden'
            : story.imageSide === 'right'
              ? 'dt:order-2'
              : 'dt:order-1'
        }
      >
        <StoryImages story={story} />
      </div>

      <div className={story.imageSide === 'right' ? 'dt:order-1' : 'dt:order-2'}>
        <Typography
          as="h3"
          variant="ko-headline-03"
          tabletVariant="ko-title-01"
          weight="bold"
          className="whitespace-pre-line break-keep text-black"
        >
          {story.title}
        </Typography>
        <div className="mt-5 flex flex-col gap-4 tb:mt-7">
          {story.paragraphs.map((paragraph) => (
            <Typography
              key={paragraph.slice(0, 20)}
              as="p"
              variant="ko-body-04"
              tabletVariant="ko-body-03"
              weight="regular"
              className="break-keep text-gray-03"
            >
              {paragraph}
            </Typography>
          ))}
        </div>
      </div>
    </article>
  );
}

/** sectionLabel 이 붙은 이야기에서 새 묶음을 시작한다 */
function groupChapters(stories: readonly BnaCaseStory[]) {
  const chapters: { label?: string; stories: BnaCaseStory[] }[] = [];
  stories.forEach((story) => {
    const current = chapters[chapters.length - 1];
    if (story.sectionLabel || !current) {
      chapters.push({ label: story.sectionLabel, stories: [story] });
    } else {
      current.stories.push(story);
    }
  });
  return chapters;
}

/**
 * 6. 이야기 — BEFORE·WIM SOLUTION·AFTER 처럼 제목이 붙은 묶음은 카드형으로,
 * 제목 없는 이야기는 사진과 글을 좌우로 번갈아 놓는다.
 */
function CaseStorySection({
  stories
}: {
  stories: readonly BnaCaseStory[];
}) {
  return (
    <section className="bg-white py-14 tb:py-28">
      <Container className="dt:px-0">
        <div className="flex flex-col gap-20 tb:gap-32">
          {groupChapters(stories).map((chapter) =>
            chapter.label ? (
              <StoryChapter
                key={chapter.label}
                label={chapter.label}
                stories={chapter.stories}
              />
            ) : (
              <div
                key={chapter.stories[0].title}
                className="flex flex-col gap-14 tb:gap-24"
              >
                {chapter.stories.map((story) => (
                  <StoryRow key={story.title} story={story} />
                ))}
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── 페이지 ───────────────────────── */

export default function BeforeAfterPage() {
  const detail = DETAIL;
  return (
    <main className="overflow-hidden bg-white font-pretendard text-black">
      {/* 1~2. 페이지 제목과 감량 결과 히어로 — 가장자리가 옅게 어두워지는 배경을 함께 쓴다 */}
      <div className="bg-[radial-gradient(ellipse_at_50%_45%,#FFFFFF_35%,#F1F2F1_100%)]">
        <CaseIntroSection intro={detail.intro} />
        <CaseHeroSection hero={detail.hero} />
      </div>

      {/* 2-1. 상담 유도 밴드 — 히어로 바로 아래 */}
      <CaseCtaBandSection ctaBand={detail.heroCta} />

      {/* 3. 영상 — 영상이 준비될 때까지 잠시 숨긴다 (원본의 CaseVideoSection) */}

      {/* 4~5. 신체 변화 — 전·후 사진, 주요 수치, 체성분 카드 */}
      <CaseBodyChangeSection change={detail.change} metrics={detail.metrics} />

      {/* 6. 회원 이야기 — BEFORE · WIM SOLUTION · AFTER */}
      <CaseStorySection stories={detail.stories} />

      {/* 8. 상담 유도 밴드 — 페이지 맨 끝 */}
      <CaseCtaBandSection ctaBand={detail.ctaBand} />
    </main>
  );
}
