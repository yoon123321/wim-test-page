"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { DEFAULT_NAV, type NavLink } from "./types";
import { COMMON_CONTENT } from "@/content/common";

interface HeaderProps {
  logo?: string;
  navLinks?: NavLink[];
}

/**
 * 공용 헤더 (목업 · 레이아웃 전용)
 *
 *   dt: (1200px~)   로고 + 메뉴 + CTA 를 한 줄로
 *   ~1199px         로고 + 햄버거, 메뉴는 우측 사이드바로
 */
export default function Header({ logo = COMMON_CONTENT.logo, navLinks = DEFAULT_NAV }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-neutral-300 bg-white">
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 tb:px-8 dt:px-10">
          <Link href="/" className="text-lg font-bold">
            {logo}
          </Link>

          {/* PC: 한 줄 메뉴 */}
          <nav className="hidden items-center gap-8 dt:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 태블릿/모바일: 햄버거 */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={COMMON_CONTENT.menu.openLabel}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-neutral-300 dt:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M3 5h14 M3 10h14 M3 15h14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </header>

      <Sidebar open={open} onClose={() => setOpen(false)} navLinks={navLinks} />
    </>
  );
}
