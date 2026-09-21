import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode
} from 'react';

export type TypographyFont = 'pretendard' | 'franklin' | 'garamond';
export type TypographyWeight =
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';
export type TypographySize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'display';
export type TypographyScale =
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
export type TypographyVariant =
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
  pretendard: 'font-wim-pretendard',
  franklin: 'font-wim-franklin',
  garamond: 'font-wim-garamond'
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

export interface TypographyProps extends Omit<
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

export function Typography({
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
