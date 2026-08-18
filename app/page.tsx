"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/common/Hero";
import Text from "@/components/common/Text";
import HomeServices from "@/components/home/HomeServices";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { useHomeContent } from "@/components/home/useHomeContent";
import { useAB } from "@/components/common/ABProvider";

const HEADING = "font-['Gowun_Batang',serif] font-bold tracking-[-0.02em]";

function Ph({ className = "" }: { className?: string }) {
  return <div className={`rounded-xl border border-dashed border-neutral-300 bg-neutral-100 ${className}`} />;
}

export default function HomePage() {
  const CONTENT = useHomeContent();
  const { variant } = useAB();

  return (
    <main className="w-full bg-white font-['Noto_Sans_KR',sans-serif] text-neutral-900">
      <Hero imagePosition="center" {...CONTENT.hero} />

      {/* 센터 소개 */}
      <section id="about" className="grid grid-cols-1 items-center gap-10 px-4 py-16 tb:px-10 tb:py-20 dt:grid-cols-[1.4fr_1fr] dt:gap-16 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-24">
        <div className="flex flex-col gap-5">
          <Text as="span" size="xs" weight="bold" className="uppercase tracking-[0.2em] text-neutral-500">
            {CONTENT.about.eyebrow}
          </Text>
          <Text as="h2" size="3xl" weight="bold" className={`${HEADING} leading-snug`}>
            {CONTENT.about.title}
          </Text>
          <Text as="p" size="md" className="max-w-[560px] leading-8 text-neutral-600">
            {CONTENT.about.description.startsWith("우리는 이미") ? (
              <>
                <strong className="font-bold">{CONTENT.about.description.split("\n")[0]}</strong>
                {CONTENT.about.description.slice(CONTENT.about.description.indexOf("\n"))}
              </>
            ) : (
              CONTENT.about.description
            )}
          </Text>
        </div>
        <div className="relative h-[280px] overflow-hidden rounded-xl tb:h-[360px] dt:h-[440px]">
          <Image src={CONTENT.about.image} alt={CONTENT.about.imageAlt} fill sizes="(min-width: 1200px) 500px, (min-width: 768px) 45vw, 100vw" className="object-cover grayscale" />
        </div>
      </section>

      {/* 진료 항목 */}
      {variant !== "E" && <HomeServices />}

      {/* 숫자 */}
      <section className="bg-neutral-700 px-4 py-16 text-white tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-[88px]">
        <div className="mb-14 flex flex-col items-center gap-3.5 text-center">
          <Text as="span" size="xs" weight="bold" className="uppercase tracking-[0.22em] text-neutral-300">
            {CONTENT.results.eyebrow}
          </Text>
          <Text as="h2" size="3xl" weight="bold" className={`${HEADING} text-white`}>
            {CONTENT.results.title}
          </Text>
          <Text size="md" className="max-w-[620px] leading-relaxed text-white/60">
            {CONTENT.results.description}
          </Text>
        </div>
        <div className="mx-auto grid max-w-[720px] grid-cols-1 gap-5 tb:grid-cols-2">
          {CONTENT.results.items.map((s, index) => (
            <RevealOnScroll key={s.label} delay={index * 80} className="h-full">
              <div className="flex h-full flex-col items-center gap-2 rounded-2xl bg-white px-4 py-8 shadow-lg">
                <Text as="span" size="display" className="font-['Gowun_Batang',serif] leading-none text-neutral-700">
                  {s.value}
                  {s.unit ? (
                    <Text as="span" size="2xl" className="ml-1">
                      {s.unit}
                    </Text>
                  ) : null}
                </Text>
                <Text as="span" size="sm" weight="bold" className="text-neutral-800">
                  {s.label}
                </Text>
                <Text as="span" size="xs" className="text-neutral-500">
                  {s.note}
                </Text>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 리뷰 */}
      <section id="reviews" className="overflow-hidden bg-neutral-700 px-4 py-16 text-white tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:pb-24 dt:pt-20">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 tb:mb-10 tb:flex-row tb:items-end">
          <div className="flex flex-col gap-2.5">
            <Text as="span" size="xs" weight="bold" className="uppercase tracking-[0.2em] text-neutral-300">
              {CONTENT.reviews.eyebrow}
            </Text>
            <Text as="h2" size="3xl" weight="bold" className={`${HEADING} text-white`}>
              {CONTENT.reviews.title}
            </Text>
            <Text size="md" className="max-w-[620px] leading-relaxed text-white/60">
              {CONTENT.reviews.description}
            </Text>
          </div>
          <Link href="#contact" className="inline-flex items-center gap-2.5 border-b border-white/35 pb-1.5 text-sm font-medium text-white/75">
            <Text as="span" size="sm" weight="medium">
              {CONTENT.reviews.buttonLabel}
            </Text>
          </Link>
        </div>
        <div className="grid grid-cols-1 items-start gap-5 tb:grid-cols-3 dt:grid-cols-5">
          {CONTENT.reviews.items.map((r, index) => (
            <RevealOnScroll key={r.tag + r.meta} delay={index * 70}>
              <figure className="relative m-0 flex min-w-0 flex-col gap-3 rounded-2xl bg-neutral-600 p-5 text-neutral-100 shadow-lg">
                <div className="flex items-start justify-between gap-2.5">
                  <Text as="span" size="xs" weight="bold" className="uppercase tracking-widest opacity-60">
                    {r.tag}
                  </Text>
                  <Text as="span" size="lg" aria-hidden className="font-['Gowun_Batang',serif] leading-none opacity-35">
                    ❞
                  </Text>
                </div>
                <Text as="blockquote" size="sm" weight="medium" className="m-0 leading-relaxed">
                  {r.body}
                </Text>
                <Text as="figcaption" size="xs" className="opacity-55">
                  {r.meta}
                </Text>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* E안: 결과와 리뷰 다음에 검사·관리 배치 */}
      {variant === "E" && <HomeServices />}

      {/* 사례 */}
      <section id="cases" className="bg-white px-4 py-16 tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-24">
        <div className="rounded-2xl bg-neutral-100 px-6 py-12 tb:px-10 dt:px-14 dt:py-16">
          <div className="mb-10 flex flex-col items-start gap-4">
            <div className="flex flex-col gap-3">
              <Text as="span" size="xs" weight="bold" className="uppercase tracking-[0.2em] text-neutral-500">
                {CONTENT.cases.eyebrow}
              </Text>
              <Text as="h2" size="3xl" weight="bold" className={`${HEADING} leading-tight`}>
                {CONTENT.cases.titleLines[0]}
                <br />
                {CONTENT.cases.titleLines[1]}
              </Text>
            </div>
            <Text size="md" className="max-w-[560px] leading-relaxed text-neutral-600">
              {CONTENT.cases.description}
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-5 tb:grid-cols-2">
            {CONTENT.cases.items.map((c, index) => (
              <RevealOnScroll key={c.id} delay={index * 90}>
                <Link href={c.href} className="group flex min-w-0 flex-col gap-3.5 rounded-xl bg-white p-3.5 shadow-sm transition hover:shadow-md">
                  <Ph className="h-[220px]" />
                  <div className="flex items-center justify-between gap-2 px-1.5 pb-2">
                    <div className="flex flex-col gap-1.5">
                      <Text as="h3" size="lg" weight="bold" className={`${HEADING} leading-snug`}>
                        {c.title}
                      </Text>
                      <Text as="span" size="sm" className="text-neutral-500">
                        {c.meta}
                      </Text>
                    </div>
                    <Text as="span" size="lg" className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-700">
                      →
                    </Text>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="flex flex-col items-center gap-5 border-t border-neutral-200 bg-neutral-100 px-4 py-16 text-center tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-[88px]"
      >
        <Text as="h2" size="3xl" weight="bold" className={`${HEADING} leading-snug text-neutral-900`}>
          {CONTENT.cta.titleLines[0]}
          <br />
          {CONTENT.cta.titleLines[1]}
        </Text>
        <Text size="md" className="max-w-[520px] leading-relaxed text-neutral-700">
          {CONTENT.cta.description}
        </Text>
        <Link
          href="/contact"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-neutral-700 px-14 py-[18px] text-[17px] font-bold text-white shadow-md transition hover:bg-neutral-800"
        >
          <Text as="span" size="lg" weight="bold">
            {CONTENT.cta.buttonLabel}
          </Text>
        </Link>
      </section>

      {/* 푸터 */}
      <footer className="flex flex-col items-center justify-between gap-4 bg-neutral-800 px-4 py-8 text-sm text-white/55 tb:flex-row tb:px-10 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-11">
        <Text as="span" size="md" weight="bold" className="font-['Gowun_Batang',serif] text-white">
          {CONTENT.footer.brand}
        </Text>
        <Text as="span" size="sm">
          {CONTENT.footer.copyright}
        </Text>
      </footer>
    </main>
  );
}
