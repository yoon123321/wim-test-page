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
    image: "/images/main/diet_card.png",
    alt: "맞춤 식단과 운동 처방을 받는 모습",
    href: "/diet-program",
  },
  {
    title: "리커버리 센터",
    eyebrow: "RECOVERY CENTER",
    highlight: ["내 몸의 회복 상태를 측정하고", "오늘 필요한 회복을 설계합니다."],
    lines: ["최첨단 장비와 데이터를 활용해 피로·부종·수면 상태에 맞는 관리를 제공합니다."],
    image: "/images/main/recovery_card.png",
    alt: "전문 관리 장비를 이용하는 모습",
    href: "/recovery",
  },
];

function CenterCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4 tb:flex-row tb:gap-5">
      {CENTERS.map((center, index) => {
        // 아무것도 안 눌렀을 때 5:5, 호버하면 6:4 — 세로로 쌓이는 모바일에서는 적용하지 않는다
        const grow = hovered === null ? 5 : hovered === index ? 6 : 4;
        return (
          <article
            key={center.title}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{ "--grow": grow } as React.CSSProperties}
            className="relative isolate h-[380px] overflow-hidden rounded-[16px] tb:h-[450px] tb:basis-0 tb:rounded-[20px] tb:[flex-grow:var(--grow)] tb:transition-[flex-grow] tb:duration-500 tb:ease-out">
            <Image src={center.image} alt={center.alt} fill sizes="(min-width:768px) 60vw, 100vw" className="object-cover" />


            <div className={`absolute inset-0 flex flex-col px-7 pb-8 pt-9 tb:justify-start tb:px-10 tb:pb-10 tb:pt-[155px] dt:px-8 dt:pb-8 ${"highlight" in center ? "justify-center" : "justify-end"}`}>
              {"highlight" in center ? (
                <>
                  <Text as="span" size="xs" weight="bold" className="tracking-[0.14em] text-white/65">
                    {center.eyebrow}
                  </Text>
                  <Text as="h2" size="lg" weight="bold" className="mt-1.5 break-keep text-white">
                    {center.title}
                  </Text>
                  <Text as="p" size="2xl" weight="bold" className="mt-7 break-keep leading-[1.35] tracking-[-0.035em] text-white tb:mt-5">
                    {center.highlight.map((line, lineIndex) => (
                      <span key={line}>
                        {lineIndex > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </Text>
                  <Text as="p" size="sm" className="mt-5 max-w-[520px] break-keep leading-6 text-white/75 tb:mt-4">
                    {center.lines[0]}
                  </Text>
                </>
              ) : (
                <>
                  <Text as="h2" size="2xl" weight="bold" className="break-keep tracking-[-0.035em] text-white tb:text-[32px]">
                    {center.title}
                  </Text>
                  <div className="mt-4 flex max-w-[560px] flex-col gap-1 tb:mt-7 tb:gap-2">
                    {center.lines.map((line) => (
                      <Text key={line} as="span" size="sm" className="break-keep leading-6 text-white/90 tb:text-[17px] tb:leading-7">
                        {line}
                      </Text>
                    ))}
                  </div>
                </>
              )}
              <Link
                href={center.href}
                className="mt-6 inline-flex h-[42px] w-fit items-center gap-2.5 rounded-full border border-white/75 bg-white/25 px-5 text-[14px] font-medium text-white no-underline shadow-sm backdrop-blur-[5px] transition hover:bg-white/35 tb:mt-9 tb:h-[52px] tb:gap-3 tb:px-6 tb:text-[17px]">
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
        desktopMaxWidth="1200px"
        largeImage
      />

      {/* 프로그램 · 테크놀로지 소개 */}
      <section className="bg-white px-4 py-14 tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:pb-[61px] dt:pt-[117px]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 tb:gap-10 dt:gap-12">
          <CenterCards />
        </div>
      </section>

      {/* 고객 만족도 리뷰 */}
      <section
        id="reviews"
        className="bg-cover bg-center bg-no-repeat px-[30px] py-14 tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-24"
        style={{ backgroundImage: "url('/images/main/reviews-bg.png')" }}
      >
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 dt:grid-cols-[1.65fr_1fr] dt:items-center dt:gap-16">
            <div className="min-w-0 text-center dt:text-left">
              <Text as="span" size="sm" className="tracking-[0.04em] text-neutral-500">
                RESULTS
              </Text>
              <Text as="h2" size="3xl" weight="bold" className="mx-auto mt-4 max-w-[330px] break-keep tracking-[-0.04em] text-neutral-900 dt:mx-0 dt:mt-5 dt:max-w-none dt:text-[36px]">
                고객이 직접 경험하고 평가한 만족도
              </Text>

              <div className="mt-14 flex flex-col items-center dt:items-start tb:mt-16">
                <Text as="p" size="xl" weight="bold" className="text-[#17653d]">
                  총 만족도
                </Text>
                <div className="mt-3 flex items-center gap-5">
                  <span className="text-[72px] leading-none text-[#b7dc91] tb:text-[86px]" aria-hidden>★</span>
                  <div className="flex items-end gap-3">
                    <span className="text-[76px] font-bold leading-none tracking-[-0.06em] text-[#0f6038] tb:text-[94px]">4.8</span>
                    <span className="pb-2 text-2xl font-medium text-neutral-400">/ 5</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 tb:mt-14 tb:grid-cols-4 tb:border-l-2 tb:border-[#b7dc91]">
                {CONTENT.results.items.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex min-h-[96px] flex-col justify-center px-2 text-center tb:min-h-[100px] tb:border-r-2 tb:border-[#b7dc91] tb:px-5 ${index % 2 === 0 ? "border-r-2 border-[#b7dc91]" : ""}`}
                  >
                    <Text as="span" size="sm" weight="bold" className="break-keep text-[#17653d]">
                      {item.label}
                    </Text>
                    <div className="mt-3 flex items-baseline justify-center gap-1">
                      <span className="text-[34px] font-bold leading-none tracking-[-0.04em] text-[#17653d] tb:text-[40px]">{item.value}</span>
                      <span className="text-xs text-neutral-400">/5</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[CONTENT.reviews.items[1], CONTENT.reviews.items[0]].map((review, index) => (
                <RevealOnScroll key={review.tag + review.meta} delay={index * 80} className={index === 0 ? "order-2 dt:order-none" : "order-1 dt:order-none"}>
                  <figure className="flex min-h-[190px] flex-col rounded-xl bg-[#17653d] p-6 text-white tb:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <Text as="span" size="xs" className="rounded-full border border-white/70 px-3 py-1 text-white">
                        {review.tag}
                      </Text>
                      <span className="text-lg tracking-[0.08em] text-[#b7dc91]" aria-label="별점 5점">★★★★★</span>
                    </div>
                    <Text as="blockquote" size="md" weight="medium" className="mt-8 break-keep leading-8 text-white">
                      {review.body}
                    </Text>
                    <Text as="figcaption" size="sm" className="mt-auto pt-4 text-white/40">{review.meta}</Text>
                  </figure>
                </RevealOnScroll>
              ))}
              <Text as="p" size="sm" className="order-3 mt-5 text-center text-neutral-400 dt:order-none dt:text-right">
                네이버 예약 리뷰 및 블로그 후기 기준
              </Text>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <WimMainBottom />
    </main>
  );
}
