import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

export type TypographyFont = "pretendard" | "franklin" | "garamond";
export type TypographyWeight = "regular" | "medium" | "semibold" | "bold" | "extrabold";
export type TypographyScale =
  | "design-01"
  | "display-01"
  | "display-02"
  | "display-03"
  | "title-01"
  | "title-02"
  | "title-03"
  | "headline-01"
  | "headline-02"
  | "headline-03"
  | "body-01"
  | "body-02"
  | "body-03";

type ScaleValue = { size: number; lineHeight: number };
type ScaleMap = Partial<Record<TypographyScale, ScaleValue>>;

const PRETENDARD_DESKTOP: ScaleMap = {
  "display-01": { size: 36, lineHeight: 1.5 },
  "display-02": { size: 30, lineHeight: 1.5 },
  "title-01": { size: 28, lineHeight: 1.5 },
  "title-02": { size: 26, lineHeight: 1.5 },
  "headline-01": { size: 24, lineHeight: 1.5 },
  "headline-02": { size: 22, lineHeight: 1.5 },
  "headline-03": { size: 20, lineHeight: 1.5 },
  "body-01": { size: 18, lineHeight: 1.4 },
  "body-02": { size: 16, lineHeight: 1.4 },
  "body-03": { size: 14, lineHeight: 1.4 },
};

const PRETENDARD_MOBILE: ScaleMap = {
  "title-01": { size: 30, lineHeight: 1.5 },
  "title-02": { size: 28, lineHeight: 1.5 },
  "title-03": { size: 26, lineHeight: 1.5 },
  "headline-01": { size: 24, lineHeight: 1.5 },
  "headline-02": { size: 22, lineHeight: 1.5 },
  "headline-03": { size: 20, lineHeight: 1.5 },
  "body-01": { size: 18, lineHeight: 1.4 },
  "body-02": { size: 16, lineHeight: 1.4 },
  "body-03": { size: 14, lineHeight: 1.4 },
};

const FRANKLIN_DESKTOP: ScaleMap = Object.fromEntries(
  Object.entries(PRETENDARD_DESKTOP).map(([key, value]) => [key, { ...value, lineHeight: 1.5 }]),
) as ScaleMap;
const FRANKLIN_MOBILE: ScaleMap = Object.fromEntries(
  Object.entries(PRETENDARD_MOBILE).map(([key, value]) => [key, { ...value, lineHeight: 1.5 }]),
) as ScaleMap;

const GARAMOND_DESKTOP: ScaleMap = {
  "display-01": { size: 120, lineHeight: 1.3 },
  "display-02": { size: 96, lineHeight: 0.8 },
  "display-03": { size: 64, lineHeight: 1.3 },
  "headline-01": { size: 56, lineHeight: 1.3 },
  "headline-02": { size: 52, lineHeight: 1.3 },
  "headline-03": { size: 46, lineHeight: 1.5 },
  "title-01": { size: 32, lineHeight: 1.5 },
};

const GARAMOND_MOBILE: ScaleMap = {
  "design-01": { size: 70, lineHeight: 0.8 },
  "display-01": { size: 48, lineHeight: 1.1 },
  "display-02": { size: 44, lineHeight: 1.3 },
  "display-03": { size: 40, lineHeight: 1.1 },
  "headline-01": { size: 36, lineHeight: 1.3 },
  "headline-02": { size: 34, lineHeight: 1.3 },
  "headline-03": { size: 26, lineHeight: 1.3 },
};

const SCALE_BY_FONT: Record<TypographyFont, { mobile: ScaleMap; desktop: ScaleMap }> = {
  pretendard: { mobile: PRETENDARD_MOBILE, desktop: PRETENDARD_DESKTOP },
  franklin: { mobile: FRANKLIN_MOBILE, desktop: FRANKLIN_DESKTOP },
  garamond: { mobile: GARAMOND_MOBILE, desktop: GARAMOND_DESKTOP },
};

const FONT_CLASS: Record<TypographyFont, string> = {
  pretendard: "font-pretendard",
  franklin: "font-franklin",
  garamond: "font-garamond",
};

const FONT_WEIGHT: Record<TypographyWeight, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

type TypographyStyle = CSSProperties & {
  "--type-mobile-size": string;
  "--type-mobile-leading": number;
  "--type-tablet-size": string;
  "--type-tablet-leading": number;
  "--type-desktop-size": string;
  "--type-desktop-leading": number;
  "--type-mobile-weight": number;
  "--type-tablet-weight": number;
  "--type-desktop-weight": number;
};

export interface TypographyProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  as?: ElementType;
  mobile: TypographyScale;
  tablet?: TypographyScale;
  desktop?: TypographyScale;
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
  as: Component = "span",
  mobile,
  tablet,
  desktop,
  font = "pretendard",
  weight = "regular",
  tabletWeight,
  desktopWeight,
  mobileSize,
  tabletSize,
  desktopSize,
  italic = false,
  className = "",
  style,
  children,
  ...props
}: TypographyProps) {
  const scales = SCALE_BY_FONT[font];
  const mobileValue = scales.mobile[mobile];

  if (!mobileValue) {
    throw new Error(`Typography: ${font} 모바일 scale에 "${mobile}"이 없습니다.`);
  }

  let tabletValue = mobileValue;
  if (tablet) {
    const explicitTabletValue = scales.desktop[tablet];
    if (!explicitTabletValue) {
      throw new Error(`Typography: ${font} 태블릿 scale에 "${tablet}"이 없습니다.`);
    }
    tabletValue = explicitTabletValue;
  }

  let desktopValue = tabletValue;
  if (desktop) {
    const explicitDesktopValue = scales.desktop[desktop];
    if (!explicitDesktopValue) {
      throw new Error(`Typography: ${font} PC scale에 "${desktop}"이 없습니다.`);
    }
    desktopValue = explicitDesktopValue;
  }

  const typographyStyle: TypographyStyle = {
    "--type-mobile-size": `${mobileSize ?? mobileValue.size}px`,
    "--type-mobile-leading": mobileValue.lineHeight,
    "--type-tablet-size": `${tabletSize ?? tabletValue.size}px`,
    "--type-tablet-leading": tabletValue.lineHeight,
    "--type-desktop-size": `${desktopSize ?? (desktop ? desktopValue.size : tabletSize ?? desktopValue.size)}px`,
    "--type-desktop-leading": desktopValue.lineHeight,
    "--type-mobile-weight": FONT_WEIGHT[weight],
    "--type-tablet-weight": FONT_WEIGHT[tabletWeight ?? weight],
    "--type-desktop-weight": FONT_WEIGHT[desktopWeight ?? tabletWeight ?? weight],
    fontStyle: italic ? "italic" : "normal",
    ...style,
  };

  return (
    <Component
      className={`wim-typography ${FONT_CLASS[font]} ${className}`.trim()}
      style={typographyStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
