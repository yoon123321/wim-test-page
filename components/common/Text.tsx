import type { ElementType, ReactNode } from "react";

/**
 * 공용 타이포그래피 컴포넌트.
 * size prop 하나로 모바일 → 태블릿 → 데스크톱 반응형 크기가 자동 적용된다.
 * (모바일이 가장 작고, tb·dt로 갈수록 커진다)
 *
 *   <Text size="display" as="h1" weight="bold">제목</Text>
 *   <Text size="md">본문</Text>
 */
type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "display";
type TextWeight = "normal" | "medium" | "semibold" | "bold";

const SIZE_MAP: Record<TextSize, string> = {
  xs: "text-[11px] tb:text-xs",
  sm: "text-xs tb:text-sm",
  md: "text-sm tb:text-base",
  lg: "text-base tb:text-lg",
  xl: "text-lg tb:text-xl dt:text-2xl",
  "2xl": "text-xl tb:text-2xl dt:text-3xl",
  "3xl": "text-2xl tb:text-3xl dt:text-4xl",
  display: "text-3xl tb:text-4xl dt:text-5xl",
};

const WEIGHT_MAP: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

interface TextProps {
  /** 렌더할 태그 (기본 p) */
  as?: ElementType;
  /** 반응형 크기 토큰 */
  size?: TextSize;
  /** 굵기 */
  weight?: TextWeight;
  /** 추가 Tailwind 클래스 (색상·정렬 등) */
  className?: string;
  children: ReactNode;
}

export default function Text({ as: Tag = "p", size = "md", weight = "normal", className = "", children }: TextProps) {
  return <Tag className={`whitespace-pre-line ${SIZE_MAP[size]} ${WEIGHT_MAP[weight]} ${className}`}>{children}</Tag>;
}
