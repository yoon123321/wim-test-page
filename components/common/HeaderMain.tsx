"use client";

/**
 * 개선안 헤더 — 피그마 WIM-Center-DESIGN 시안
 *
 *   모바일 (~1199px)  높이 56px, 로고 + 햄버거 (메뉴는 우측 사이드바)
 *   PC (1200px~)      높이 80px, 로고 + 한 줄 메뉴 + 상담 신청 버튼
 *
 * 메뉴 항목은 content/navigation.ts 의 NAVIGATION_MAIN 에서 수정한다.
 * 기존안 헤더는 Header.tsx 에 그대로 남아 있고, 헤더 스위치로 갈린다.
 */

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { NAVIGATION_MAIN, NAVIGATION_MAIN_CTA } from "@/content/navigation";
import { COMMON_CONTENT } from "@/content/common";
import type { NavLink } from "./types";
import { Typography } from "./Typography";

const ICONS = "/images/main/icons";

/** 기존안/개선안 미리보기 스위치 (목업 전용) — 부모가 넘겨준다 */
export default function HeaderMain({ switchSlot }: { switchSlot?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks = NAVIGATION_MAIN as unknown as NavLink[];
  const isActive = (link: NavLink) =>
    link.href ? pathname === link.href : !!link.children?.some((c) => pathname === c.href);

  return (
    <>
      <header
        className="sticky top-0 z-30 bg-white shadow-[0_4px_7px_rgba(0,0,0,0.1)] tb:shadow-[0_4px_7px_rgba(0,0,0,0.13)]"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="mx-auto flex h-[56px] w-full items-center px-5 tb:max-w-[688px] dt:h-[80px] dt:max-w-[1280px] dt:px-0">
          {/* 로고 */}
          <Link href="/" className="flex items-end gap-[4px] no-underline dt:gap-[6.5px]" aria-label="윔센터 홈">
            {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
            <img src={`${ICONS}/header-logo-wim.svg`} alt="WIM" className="h-[14px] w-auto dt:h-[26px]" />
            <span
              aria-hidden="true"
              className="h-[13px] w-[44px] bg-primary-main [mask-image:url('/images/main/icons/header-logo-center.svg')] [mask-repeat:no-repeat] [mask-size:100%_100%] dt:h-[24.5px] dt:w-[84px]"
            />
          </Link>

          {/* PC 메뉴 */}
          <nav className="ml-auto hidden items-center gap-[35px] dt:flex">
            {navLinks.map((link) => {
              const active = isActive(link);
              const labelClass = active ? "text-primary-main" : "text-black";
              const labelWeight = active ? ("extrabold" as const) : ("regular" as const);

              return link.children ? (
                <div
                  key={link.label}
                  className="relative flex h-[80px] items-center"
                  onMouseEnter={() => setOpenMenu(link.label)}
                >
                  <button type="button" className={`flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 ${labelClass}`}>
                    <Typography mobile="body-01" weight={labelWeight}>{link.label}</Typography>
                    <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden="true" className={`transition ${openMenu === link.label ? "rotate-180" : ""}`}>
                      <path d="M2 4 5.5 7.5 9 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {openMenu === link.label && (
                    <ul className="absolute left-0 top-full z-10 m-0 flex min-w-[180px] list-none flex-col gap-3 rounded-b-[10px] bg-white p-5 shadow-[0_4px_7px_rgba(0,0,0,0.13)]">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpenMenu(null)}
                            className="block whitespace-nowrap text-gray-03 no-underline transition hover:text-primary-main"
                          >
                            <Typography mobile="body-02">{child.label}</Typography>
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
                  className={`flex h-[80px] items-center no-underline ${labelClass}`}
                >
                  <Typography mobile="body-01" weight={labelWeight} className="relative flex flex-col items-center gap-1">
                    {link.label}
                    {active && <span className="absolute -bottom-1 h-[3px] w-full rounded-full bg-primary-main" />}
                  </Typography>
                </Link>
              );
            })}
          </nav>

          {/* PC CTA */}
          <Link
            href={NAVIGATION_MAIN_CTA.href}
            className="ml-[35px] hidden items-center justify-center rounded-full bg-primary-main px-[23px] py-[5px] text-white no-underline transition hover:opacity-90 dt:flex"
          >
            <Typography mobile="headline-03" weight="medium">{NAVIGATION_MAIN_CTA.label}</Typography>
          </Link>

          {/* 기존안/개선안 스위치 (목업 전용) */}
          {switchSlot ? <div className="ml-auto mr-3 dt:ml-6 dt:mr-0">{switchSlot}</div> : null}

          {/* 모바일·태블릿 햄버거 */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={COMMON_CONTENT.menu.openLabel}
            aria-expanded={open}
            className="flex h-10 w-10 cursor-pointer items-center justify-center border-0 bg-transparent dt:hidden"
          >
            <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true">
              <path d="M0 1h22 M0 7h22 M0 13h22" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </header>

      <Sidebar open={open} onClose={() => setOpen(false)} navLinks={navLinks} />
    </>
  );
}
