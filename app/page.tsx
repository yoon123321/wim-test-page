"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Text from "@/components/common/Text";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { useHomeContent } from "@/components/home/useHomeContent";
import { HOME_CENTERS, HOME_MAIN_V1 } from "@/data/home";
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
      {HOME_CENTERS.map((center, index) => {
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
            {/* 초록 딤은 카드 하단 42%에만 적용해 이미지 노출 영역을 확보한다 */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-primary-deeper via-primary-main/65 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-5 tb:p-7 dt:p-8">
              {/* 센터 이름 — 상단 좌측, 아래 연두 밑줄 */}
              <div className="flex w-fit flex-col gap-2">
                <Text as="h2" size="md" weight="bold" className="m-0 tracking-[-0.02em] text-white tb:text-[17px]">
                  {center.title}
                </Text>
                <span aria-hidden="true" className="h-[3px] w-[44px] rounded-full bg-primary-sub-02" />
              </div>

              <div className="flex max-w-[560px] flex-col gap-2">
                <Text as="p" size="xl" weight="bold" className="m-0 break-keep leading-[1.3] tracking-[-0.03em] text-white">
                  {center.message}
                </Text>
                <Text as="span" size="md" className="break-keep text-white/90">
                  {center.sub}
                </Text>
                <Link
                  href={center.href}
                  className="mt-3 inline-flex h-[40px] w-fit items-center gap-1.5 rounded-full bg-white px-5 text-[14px] font-bold text-primary-main no-underline shadow-sm transition hover:bg-primary-sub-03 tb:mt-4 tb:h-[44px] tb:px-6 tb:text-[15px]">
                  자세히 보기
                  <svg width="14" height="14" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M5 17 17 5M8 5h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
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
        titleLines={HOME_MAIN_V1.hero.titleLines}
        showSub={false}
        showCta={false}
        eyebrowImage="/images/main/main_logo.png"
        mobileTopAligned
      />

      {/* 센터 소개 */}
      <IntroSection
        eyebrow={HOME_MAIN_V1.intro.eyebrow}
        titleLines={HOME_MAIN_V1.intro.titleLines}
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
