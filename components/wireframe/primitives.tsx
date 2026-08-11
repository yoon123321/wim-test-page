import type { CSSProperties, ReactNode } from "react";

export const C = {
  page: "#ffffff",
  alt: "#f5f5f5",
  line: "#e5e5e5",
  lineSoft: "#ededed",
  bar: "#e0e0e0",
  barStrong: "#c4c4c4",
  fill: "#ebebeb",
  fillAlt: "#f0f0f0",
  active: "#6b7280",
  ink: "#1a1a1a",
} as const;

/** 텍스트 자리를 대신하는 회색 바 */
export function Bar({
  w = "100%",
  h = 10,
  color = C.bar,
  style,
}: {
  w?: number | string;
  h?: number;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        width: typeof w === "number" ? `${w}px` : w,
        height: h,
        borderRadius: h > 20 ? 4 : 3,
        background: color,
        transition: "background .2s, width .25s",
        ...style,
      }}
    />
  );
}

/** 이미지 자리를 대신하는 대각선 점선 박스 */
export function ImgBox({
  h,
  w,
  radius = 16,
  style,
  children,
}: {
  h: number | string;
  w?: number | string;
  radius?: number;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        width: typeof w === "number" ? `${w}px` : w,
        height: typeof h === "number" ? `${h}px` : h,
        border: "1.5px dashed #cbcbcb",
        borderRadius: radius,
        background:
          "linear-gradient(to top right,transparent calc(50% - 1px),#e0e0e0,transparent calc(50% + 1px))," +
          "linear-gradient(to bottom right,transparent calc(50% - 1px),#e0e0e0,transparent calc(50% + 1px))",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Stack({
  gap = 8,
  children,
  style,
}: {
  gap?: number;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return <div style={{ display: "flex", flexDirection: "column", gap, ...style }}>{children}</div>;
}

export function Row({
  gap = 12,
  children,
  style,
}: {
  gap?: number;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return <div style={{ display: "flex", gap, ...style }}>{children}</div>;
}

/** 섹션 좌측 번호 라벨 + 래퍼 */
export function Section({
  n,
  pad,
  bg,
  label,
  children,
}: {
  n: string;
  pad: string;
  bg?: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <section aria-label={label} style={{ position: "relative", padding: pad, background: bg }}>
      <div
        style={{
          position: "absolute",
          left: 14,
          top: parseInt(pad, 10),
          font: "600 10px ui-monospace,Menlo,monospace",
          color: "#c0c0c0",
        }}
      >
        {n}
      </div>
      {children}
    </section>
  );
}
