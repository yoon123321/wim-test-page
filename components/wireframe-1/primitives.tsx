import Text from "@/components/common/Text";

/* ─── 반복되는 클래스 문자열 ───────────────────────────────
   Tailwind는 같은 속성 클래스가 겹치면 CSS 순서로 이기므로,
   덮어쓰기 대신 상수를 조합해서 쓴다. */

export const SECTION_PAD = "pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]";
export const INNER = "w-full max-w-[1160px] mx-auto px-4 tb:px-8 dt:px-0";

export const EYEBROW = "text-[13px] font-[700] italic tracking-[.16em] text-[#737373]";
export const EYEBROW_SM = "text-[11px] font-[700] italic tracking-[.16em] text-[#737373]";
export const BODY = "text-[15px] leading-[1.75] text-[#6b6b6b] max-w-[560px] text-pretty";
export const CARD = "shadow-[0_3px_18px_rgba(0,0,0,.06)]";

/** 섹션 껍데기 — data-screen-label + 패딩 + 가운데 정렬 컨테이너 */
export function Section({
  label,
  pad = SECTION_PAD,
  className = "",
  innerClassName = "",
  children,
}: {
  label: string;
  pad?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section data-screen-label={label} className={`${pad} ${className}`}>
      <div className={`${INNER} ${innerClassName}`}>{children}</div>
    </section>
  );
}

/** 앞부분 + 강조(회색) + 뒷부분 형태의 섹션 제목 */
export function HighlightTitle({ prefix, highlight, suffix }: { prefix: string; highlight: string; suffix?: string }) {
  return (
    <Text as="div" size="3xl" weight="bold" className="tracking-[-.03em] text-[#161616] leading-[1.4]">
      {prefix}
      <Text as="span" size="3xl" weight="bold" className="text-[#525252]">{highlight}</Text>
      {suffix}
    </Text>
  );
}

/** 이미지 자리 플레이스홀더 — next/image 로 교체할 지점 */
export function Slot({ label }: { label: string }) {
  return (
    <Text as="div" size="sm" className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#e5e5e5] tracking-[-0.01em] text-[#a3a3a3]">
      {label}
    </Text>
  );
}

export function RoadmapIcon({ index }: { index: number }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: index === 3 ? "#d4d4d4" : "#525252", strokeWidth: 2.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (index === 0) return <svg {...common}><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="3" /></svg>;
  if (index === 1) return <svg {...common}><circle cx="10" cy="8" r="4" /><path d="M3 20c0-3.3 3.1-6 7-6" /><circle cx="17" cy="17" r="3" /><path d="m19.2 19.2 1.8 1.8" /></svg>;
  if (index === 2) return <svg {...common}><rect x="5" y="2" width="14" height="20" rx="3" /><path d="M11 18h2" /></svg>;
  return <svg {...common}><path d="M3 3v16a2 2 0 0 0 2 2h16M7 14l3-4 3 3 5-6" /></svg>;
}

export function StarRating({ score, size = 16, color = "#525252" }: { score: number; size?: number; color?: string }) {
  return (
    <div className="flex gap-[3px]" aria-label={`${score}점`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} width={size} height={size} viewBox="0 0 24 24" fill={index < score ? color : "#d4d4d4"} aria-hidden="true">
          <path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z" />
        </svg>
      ))}
    </div>
  );
}

/** 되돌리기/뒤집기 아이콘 (방향만 다름) */
export function FlipIcon({ back = false, stroke = "#404040" }: { back?: boolean; stroke?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
      {back ? <><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /></> : <><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /></>}
    </svg>
  );
}
