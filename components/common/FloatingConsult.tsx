import Link from "next/link";
import { COMMON_CONTENT } from "@/data/common";

interface FloatingConsultProps {
  href?: string;
  label?: string;
}

/**
 * 공용 상담예약 플로팅 (목업 · 레이아웃 전용)
 *
 *   ~767px      하단 꽉 찬 바 (full-width)
 *   tb: (768px~) 우측 하단 칩 모양 버튼
 */
export default function FloatingConsult({
  href = "#contact",
  label = COMMON_CONTENT.floatingConsultLabel,
}: FloatingConsultProps) {
  return (
    <>
      {/* PC / 태블릿: 칩 모양 버튼 */}
      <Link
        href={href}
        className="fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-700 tb:flex dt:bottom-8"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M4 4h12v9H7l-3 3V4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        {label}
      </Link>

      {/* 모바일: 하단 꽉 찬 바 */}
      <Link
        href={href}
        className="fixed bottom-0 left-0 right-0 z-40 flex h-14 items-center justify-center bg-neutral-900 text-base font-semibold text-white tb:hidden"
      >
        {label}
      </Link>
    </>
  );
}
