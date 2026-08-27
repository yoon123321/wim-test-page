"use client";

import Link from "next/link";
import Image from "next/image";
import Text from "@/components/common/Text";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { useHomeContent } from "@/components/home/useHomeContent";
import { useVariant } from "@/components/common/VariantProvider";
import WimMainNew, { HeroA, IntroSection, WimMainBottom } from "@/components/home/WimMainNew";

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
      <HeroA titleLines={["강남에서 시작하는 새로운 웰니스의 기준"]} showSub={false} showCta={false} />

      {/* 센터 소개 */}
      <IntroSection titleLines={["모든 것은 전문인 데이터에 기반한 분석과 최신 기기 조합으로 시작됩니다"]} showDesc={false} showTestChips />

      {/* 프로그램 · 테크놀로지 소개 */}
      <section className="bg-[#f6f7f7] px-4 py-14 tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 tb:gap-10 dt:gap-12">
          <RevealOnScroll>
            <div className="grid items-center gap-6 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm tb:grid-cols-2 tb:gap-8 tb:p-6 dt:grid-cols-[0.9fr_1.1fr] dt:gap-12">
              <div className="relative h-[300px] w-full max-w-[400px] overflow-hidden rounded-lg border border-neutral-200 bg-white">
                <Image
                  src="/images/main/care-07.png"
                  alt="건강한 식단과 맞춤 영양 관리"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>

              <div className="flex min-h-[200px] flex-col py-2">
                <Text as="h2" size="2xl" weight="bold" className="break-keep tracking-[-0.025em] text-[#174f43]">
                  프리미엄 다이어트 센터
                </Text>
                <ul className="mt-5 flex flex-col gap-3.5 text-sm text-neutral-700">
                  {["개인 기질 및 체질 정밀 분석", "맞춤형 식단 교정 및 영양 코칭", "단계별 체계적인 운동 처방"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#2f7567] text-[11px] font-bold text-white" aria-hidden>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/page-single" className="mt-auto self-end text-sm font-medium text-[#174f43] transition hover:translate-x-1">
                  더 알아보기 →
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid items-stretch gap-8 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm tb:grid-cols-2 tb:gap-8 tb:p-6 dt:grid-cols-[1.1fr_0.9fr] dt:gap-12">
              <div className="flex min-h-[280px] flex-col py-2 tb:order-1 tb:h-[340px] tb:py-1 dt:h-[330px] dt:py-2">
                <Text as="h2" size="2xl" weight="bold" className="tracking-[-0.025em] text-[#174f43]">
                  리커버리 센터
                </Text>
                <Text as="p" size="md" className="mt-4 max-w-[530px] break-keep leading-8 text-neutral-600">
                  최첨단 장비를 활용한 데이터 기반의 정밀한 측정과 분석을 통해 당신의 몸을 정확히 이해하고 최적의 솔루션을 제공합니다.
                </Text>
                <Link href="/page-single" className="mt-auto self-end text-sm font-medium text-[#174f43] transition hover:translate-x-1">
                  장비 안내 보기 →
                </Link>
              </div>

              <div className="relative h-[300px] w-full max-w-[400px] overflow-hidden rounded-lg border border-neutral-200 bg-white tb:order-2 tb:justify-self-end">
                <Image
                  src="/images/main/program-03.png"
                  alt="전문 관리 장비를 이용하는 모습"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>
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
