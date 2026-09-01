"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Text from "@/components/common/Text";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { useHomeContent } from "@/components/home/useHomeContent";
import { useVariant } from "@/components/common/VariantProvider";
import WimMainNew, { HeroA, IntroSection, WimMainBottom } from "@/components/home/WimMainNew";

/** 센터 소개 2종 — 기본 50:50, 호버한 카드가 70:30 으로 넓어진다 */
const CENTERS = [
  {
    title: "프리미엄 다이어트 센터",
    lines: ["개인 기질 및 체질 정밀 분석", "맞춤형 식단 교정 및 영양 코칭", "단계별 체계적인 운동 처방"],
    image: "/images/main/care-07.png",
    alt: "맞춤 식단과 운동 처방을 받는 모습",
    href: "/diet-program",
  },
  {
    title: "리커버리 센터",
    lines: ["최첨단 장비를 활용한 데이터 기반의 정밀한 측정과 분석을 통해", "당신의 몸을 정확히 이해하고 최적의 솔루션을 제공합니다."],
    image: "/images/main/program-03.png",
    alt: "전문 관리 장비를 이용하는 모습",
    href: "/recovery",
  },
];

function CenterCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-5 tb:flex-row">
      {CENTERS.map((center, index) => {
        // 아무것도 안 눌렀을 때 5:5, 호버하면 6:4 — 세로로 쌓이는 모바일에서는 적용하지 않는다
        const grow = hovered === null ? 5 : hovered === index ? 6 : 4;
        return (
          <article
            key={center.title}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{ "--grow": grow } as React.CSSProperties}
            className="relative isolate h-[300px] overflow-hidden rounded-[20px] tb:h-[380px] tb:basis-0 tb:[flex-grow:var(--grow)] tb:transition-[flex-grow] tb:duration-500 tb:ease-out">
            <Image src={center.image} alt={center.alt} fill sizes="(min-width:768px) 60vw, 100vw" className="object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-7 tb:p-10 dt:p-12">
              <Text as="h2" size="2xl" weight="bold" className="break-keep tracking-[-0.035em] text-white tb:text-[32px]">
                {center.title}
              </Text>
              <div className="mt-5 flex max-w-[560px] flex-col gap-1.5 tb:mt-7 tb:gap-2">
                {center.lines.map((line) => (
                  <Text key={line} as="span" size="sm" className="break-keep leading-7 text-white/90 tb:text-[17px]">
                    {line}
                  </Text>
                ))}
              </div>
              <Link
                href={center.href}
                className="mt-7 inline-flex h-[46px] w-fit items-center gap-3 rounded-full border border-white/75 bg-white/25 px-6 text-[15px] font-medium text-white no-underline shadow-sm backdrop-blur-[5px] transition hover:bg-white/35 tb:mt-9 tb:h-[52px] tb:px-7 tb:text-[17px]">
                자세히 보기
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M4 18 18 4M7 4h11v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function LaurelBranch({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 160"
      aria-hidden="true"
      className={`h-[104px] w-[48px] shrink-0 text-[#b9d990] tb:h-[138px] tb:w-[64px] ${mirrored ? "scale-x-[-1]" : ""}`}
      fill="none"
    >
      <path d="M68 150C28 128 12 92 18 59C21 39 31 22 47 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <g fill="currentColor" opacity="0.95">
        <ellipse cx="57" cy="138" rx="3.8" ry="10" transform="rotate(-48 57 138)" />
        <ellipse cx="43" cy="130" rx="3.8" ry="10" transform="rotate(120 43 130)" />
        <ellipse cx="36" cy="116" rx="3.8" ry="10" transform="rotate(-35 36 116)" />
        <ellipse cx="24" cy="106" rx="3.8" ry="10" transform="rotate(132 24 106)" />
        <ellipse cx="27" cy="91" rx="3.8" ry="10" transform="rotate(-23 27 91)" />
        <ellipse cx="15" cy="78" rx="3.8" ry="10" transform="rotate(146 15 78)" />
        <ellipse cx="27" cy="65" rx="3.8" ry="10" transform="rotate(-10 27 65)" />
        <ellipse cx="18" cy="49" rx="3.8" ry="10" transform="rotate(158 18 49)" />
        <ellipse cx="35" cy="39" rx="3.8" ry="10" transform="rotate(8 35 39)" />
        <ellipse cx="30" cy="22" rx="3.8" ry="10" transform="rotate(170 30 22)" />
        <ellipse cx="48" cy="15" rx="3.8" ry="10" transform="rotate(24 48 15)" />
      </g>
    </svg>
  );
}

export default function HomePage() {
  const CONTENT = useHomeContent();
  const { variant } = useVariant();

  // 개선안: 새 메인페이지 시안(WimMainNew)을 통째로 렌더
  if (variant === "improved") return <WimMainNew />;

  return (
    <main className="w-full bg-white font-['Noto_Sans_KR',sans-serif] text-neutral-900">
      <HeroA
        titleLines={["강남에서 시작하는 새로운 웰니스의 기준"]}
        showSub={false}
        showCta={false}
        eyebrowImage="/images/main/main_logo.png"
        mobileTopAligned
      />

      {/* 센터 소개 */}
      <IntroSection
        titleLines={["모든 것은 전문인", "데이터에 기반한 분석과", "최신 기기 조합으로 시작됩니다."]}
        showDesc={false}
        showTestChips
        gradientBackground
      />

      {/* 프로그램 · 테크놀로지 소개 */}
      <section className="bg-white px-4 py-14 tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 tb:gap-10 dt:gap-12">
          <RevealOnScroll>
            <CenterCards />
          </RevealOnScroll>
        </div>
      </section>

      {/* 고객 만족도 리뷰 */}
      <section id="reviews" className="bg-white px-4 py-12 text-white tb:px-10 tb:py-16 dt:px-[max(40px,calc((100vw-1400px)/2))] dt:py-20">
        <RevealOnScroll>
          <div className="mx-auto flex max-w-[1400px] flex-col items-center rounded-[28px] border border-[#9cbd76]/35 bg-[#2f6248] px-5 py-12 text-center tb:px-10 tb:py-14 dt:px-16 dt:py-16">
            <Text as="span" size="md" className="tracking-[0.04em] text-[#b9d990]">
              REVIEWS
            </Text>

            <div className="mt-6 flex items-center justify-center gap-2 tb:gap-6">
              <LaurelBranch />
              <div className="flex min-w-0 flex-col items-center">
                <Text as="h2" size="3xl" weight="bold" className="break-keep tracking-[-0.035em] text-white">
                  고객이 직접 경험하고 평가한 만족도
                </Text>
                <div className="mt-3 flex items-end justify-center gap-2 text-[#b9d990] tb:gap-3">
                  <span className="text-[68px] font-bold leading-none tracking-[-0.06em] tb:text-[92px]">4.80</span>
                  <span className="pb-2 text-xl font-medium text-white/65 tb:text-3xl">/ 5.0</span>
                </div>
              </div>
              <LaurelBranch mirrored />
            </div>

            <div className="mt-7 grid w-full max-w-[920px] grid-cols-4 overflow-hidden rounded-xl border border-white/15 bg-white/[0.06]">
              {CONTENT.results.items.map((item, index) => (
                <RevealOnScroll
                  key={item.label}
                  delay={index * 70}
                  className={`h-full ${index < 3 ? "border-r border-white/15" : ""}`}
                >
                  <div className="flex h-full min-h-[92px] flex-col items-center justify-center px-2 py-3 tb:min-h-[96px]">
                    <div className="flex items-baseline gap-1">
                      <Text as="span" size="2xl" weight="bold" className="tracking-[-0.04em] text-white">
                        {item.value}
                      </Text>
                      <span className="text-xs font-medium text-white/40">/ 5</span>
                    </div>
                    <span className="mt-1 text-[9px] tracking-[0.06em] text-[#b9d990]" aria-label={`${item.label} 별점`}>
                      ★★★★★
                    </span>
                    <Text as="span" size="xs" weight="medium" className="mt-1 break-keep text-white/65">
                      {item.label}
                    </Text>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <Text as="p" size="sm" className="mt-7 text-white/45">
              * 네이버 예약 리뷰 및 블로그 후기 기준
            </Text>

            <div className="mt-9 grid w-full max-w-[1000px] grid-cols-1 gap-3 text-left tb:grid-cols-2 tb:gap-4">
              {CONTENT.reviews.items.slice(0, 2).map((review, index) => (
                <RevealOnScroll key={review.tag + review.meta} delay={index * 80} className="h-full">
                  <figure className="flex h-full min-h-[150px] flex-col rounded-2xl border border-white/15 bg-white/[0.08] p-5 tb:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <Text as="span" size="xs" weight="bold" className="rounded-full border border-white/35 px-3 py-1 text-white">
                        {review.tag}
                      </Text>
                      <Text as="span" size="xs" className="text-white/50">
                        {review.meta}
                      </Text>
                    </div>
                    <div className="mt-4 flex items-center gap-2" aria-label="별점 5점 만점에 5점">
                      <span className="text-base tracking-[0.08em] text-[#b9d990]" aria-hidden>★★★★★</span>
                      <span className="text-xs font-semibold text-white/60">5.0</span>
                    </div>
                    <Text as="blockquote" size="md" weight="medium" className="mt-3 break-keep leading-7 text-white/90">
                      “{review.body}”
                    </Text>
                  </figure>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <WimMainBottom />
    </main>
  );
}
