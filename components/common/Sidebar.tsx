"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { NavLink } from "./types";
import { COMMON_CONTENT } from "@/content/common";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

/**
 * 태블릿/모바일용 사이드 드로어. 오른쪽에서 밀려 나온다.
 * dt: (1200px 이상) 에서는 헤더가 한 줄 메뉴를 쓰므로 이 컴포넌트는 숨긴다.
 */
export default function Sidebar({ open, onClose, navLinks }: SidebarProps) {
  // 열려 있는 동안 배경 스크롤 잠금 + ESC 로 닫기
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div className="dt:hidden" aria-hidden={!open}>
      {/* 딤 배경 */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* 드로어 본체 */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={COMMON_CONTENT.menu.dialogLabel}
        className={`fixed top-0 right-0 z-50 flex h-dvh w-[80vw] max-w-[320px] flex-col border-l border-neutral-300 bg-white transition-transform duration-200 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-neutral-300 px-4">
          <span className="text-sm">{COMMON_CONTENT.menu.title}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label={COMMON_CONTENT.menu.closeLabel}
            className="flex h-10 w-10 items-center justify-center border border-neutral-300"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 4 L16 16 M16 4 L4 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="border-b border-neutral-200">
                <div className="px-4 pb-1 pt-4 text-[13px] font-semibold text-neutral-500">{link.label}</div>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="block py-3 pl-8 pr-5 text-[15px]"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                onClick={onClose}
                className="border-b border-neutral-200 px-4 py-4 text-[15px]"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </aside>
    </div>
  );
}
