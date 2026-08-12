"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useAB } from "./ABProvider";
import { DEFAULT_NAV, type NavLink } from "./types";
import { COMMON_CONTENT } from "@/content/common";

interface HeaderProps {
  logo?: string;
  navLinks?: NavLink[];
}

/**
 * 공용 헤더 (목업 · 레이아웃 전용)
 *
 *   dt: (1200px~)   로고 + 메뉴 + CTA 를 한 줄로, 하위 메뉴는 헤더 아래 풀너비 패널
 *   ~1199px         로고 + 햄버거, 메뉴는 우측 사이드바로
 */
export default function Header({ logo = COMMON_CONTENT.logo, navLinks = DEFAULT_NAV }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { variant, setVariant } = useAB();

  const activeLink = navLinks.find((link) => link.label === openMenu && link.children);

  return (
    <>
      <header
        className="sticky top-0 z-30 border-b border-neutral-300 bg-white"
        onMouseLeave={() => setOpenMenu(null)}
      >
        {/* PC: 하위 메뉴 풀너비 흰색 배경 (항목은 부모 아래에 별도 정렬) */}
        {activeLink && (
          <div className="absolute left-0 top-full z-0 hidden w-full border-b border-neutral-200 bg-white dt:block">
            <ul className="invisible mx-auto w-full max-w-[1200px] flex-col py-4">
              {activeLink.children!.map((child) => (
                <li key={child.href} className="py-2 text-sm">{child.label}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="relative z-10 mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between bg-white px-4 tb:px-8 dt:px-10">
          <Link href="/" className="text-lg font-bold">
            {logo}
          </Link>

          {/* PC: 한 줄 메뉴 */}
          <nav className="hidden items-center gap-8 dt:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative flex h-16 items-center" onMouseEnter={() => setOpenMenu(link.label)}>
                  <button
                    type="button"
                    className="flex items-center gap-1 border-0 bg-transparent p-0 text-sm"
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className={`transition ${openMenu === link.label ? "rotate-180" : ""}`}
                    >
                      <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {openMenu === link.label && (
                    <ul className="absolute left-0 top-full z-10 flex min-w-[160px] flex-col py-4">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpenMenu(null)}
                            className="block whitespace-nowrap py-2 text-sm text-neutral-500 transition hover:text-neutral-900"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onMouseEnter={() => setOpenMenu(null)}
                  className="flex h-16 items-center text-sm"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* 문구 A/B 미리보기 토글 (목업 전용) */}
          <div className="ml-auto mr-3 flex items-center gap-1 rounded-full border border-neutral-300 p-1 dt:ml-6 dt:mr-0">
            {(["A", "B", "C"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVariant(v)}
                aria-pressed={variant === v}
                title={`${v} 테스트 문구 보기`}
                className={`h-7 w-7 rounded-full text-xs font-bold transition ${
                  variant === v ? "bg-neutral-900 text-white" : "bg-transparent text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

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
