import Link from "next/link";
import Hero from "@/components/common/Hero";
import { HOME_CONTENT as CONTENT } from "@/content/home";

const HEADING = "font-['Gowun_Batang',serif] font-bold tracking-[-0.02em]";

function Ph({ className = "" }: { className?: string }) {
  return <div className={`rounded-xl border border-dashed border-neutral-300 bg-neutral-100 ${className}`} />;
}

export default function HomePage() {
  return (
    <main className="w-full bg-white font-['Noto_Sans_KR',sans-serif] text-neutral-900">
      <Hero imagePosition="center" {...CONTENT.hero} />

      {/* 센터 소개 */}
      <section
        id="about"
        className="grid grid-cols-1 items-center gap-10 px-5 py-16 tb:px-10 tb:py-20 dt:grid-cols-[1.15fr_1fr] dt:gap-16 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-24"
      >
        <div className="flex flex-col gap-5">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            {CONTENT.about.eyebrow}
          </span>
          <h2 className={`${HEADING} text-3xl leading-snug tb:text-4xl`}>
            {CONTENT.about.titleLines[0]}
            <br />
            {CONTENT.about.titleLines[1]}
          </h2>
          <p className="max-w-[560px] text-base leading-8 text-neutral-600 tb:text-[17px]">
            {CONTENT.about.description}
          </p>
          <div className="flex flex-wrap gap-2.5 pt-1.5">
            {CONTENT.about.tags.map((t) => (
              <span key={t} className="rounded-full bg-neutral-200 px-4 py-2 text-[13px] font-medium text-neutral-700">
                {t}
              </span>
            ))}
          </div>
          <Link
            href="#contact"
            className="mt-3.5 inline-flex items-center gap-2 self-start rounded-full bg-neutral-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-700"
          >
            {CONTENT.about.buttonLabel}
          </Link>
        </div>
        <Ph className="h-[280px] tb:h-[360px] dt:h-[440px]" />
      </section>

      {/* 진료 항목 */}
      <section id="services" className="">
        <div className="bg-neutral-100 px-5 py-16 tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-[72px]">
          <div className="mb-11 flex max-w-[640px] flex-col gap-3">
            <h2 className={`${HEADING} text-2xl leading-tight tb:text-[32px]`}>{CONTENT.services.title}</h2>
            <p className="text-base leading-relaxed text-neutral-600">{CONTENT.services.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {CONTENT.services.items.map((s) => (
              <article
                key={s.id}
                className="relative h-[280px] rounded-xl border border-dashed border-neutral-300 bg-neutral-100"
              >
                <div className="absolute inset-x-5 bottom-5 flex flex-col gap-2">
                  <h3 className={`${HEADING} text-xl leading-snug text-neutral-900`}>{s.title}</h3>
                  <span className="text-[13px] font-medium text-neutral-500">{CONTENT.services.buttonLabel}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 숫자 */}
      <section className="bg-neutral-700 px-5 py-16 text-white tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-[88px]">
        <div className="mb-14 flex flex-col items-center gap-3.5 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-300">{CONTENT.results.eyebrow}</span>
          <h2 className={`${HEADING} text-3xl text-white tb:text-[38px]`}>{CONTENT.results.title}</h2>
          <p className="max-w-[620px] text-[15px] leading-relaxed text-white/60">{CONTENT.results.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 tb:grid-cols-3">
          {CONTENT.results.items.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2.5 rounded-2xl bg-white px-6 py-11 shadow-lg">
              <span className="font-['Gowun_Batang',serif] text-6xl leading-none text-neutral-700">
                {s.value}
                {s.unit ? <span className="ml-1 text-3xl">{s.unit}</span> : null}
              </span>
              <span className="text-sm font-bold text-neutral-800">{s.label}</span>
              <span className="text-xs text-neutral-500">{s.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 리뷰 */}
      <section
        id="reviews"
        className="overflow-hidden bg-neutral-700 px-5 py-16 text-white tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:pb-24 dt:pt-20"
      >
        <div className="mb-14 flex flex-col items-start justify-between gap-6 tb:flex-row tb:items-end">
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-300">{CONTENT.reviews.eyebrow}</span>
            <h2 className={`${HEADING} text-2xl text-white tb:text-[36px]`}>{CONTENT.reviews.title}</h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2.5 border-b border-white/35 pb-1.5 text-sm font-medium text-white/75"
          >
            {CONTENT.reviews.buttonLabel}
          </Link>
        </div>
        <div className="grid grid-cols-1 items-start gap-5 tb:grid-cols-3 dt:grid-cols-5">
          {CONTENT.reviews.items.map((r) => (
            <figure
              key={r.tag + r.meta}
              className="relative m-0 flex min-w-0 flex-col gap-3 rounded-2xl bg-neutral-600 p-5 text-neutral-100 shadow-lg"
            >
              <div className="flex items-start justify-between gap-2.5">
                <span className="text-[10.5px] font-bold uppercase tracking-widest opacity-60">{r.tag}</span>
                <span aria-hidden className="font-['Gowun_Batang',serif] text-[17px] leading-none opacity-35">
                  ❞
                </span>
              </div>
              <blockquote className="m-0 text-[13.5px] font-medium leading-relaxed">{r.body}</blockquote>
              <figcaption className="text-[11px] opacity-55">{r.meta}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 사례 */}
      <section id="cases" className="bg-white px-5 py-16 tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-24">
        <div className="rounded-2xl bg-neutral-100 px-6 py-12 tb:px-10 dt:px-14 dt:py-16">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 tb:flex-row tb:items-end">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">{CONTENT.cases.eyebrow}</span>
              <h2 className={`${HEADING} text-2xl leading-tight tb:text-[36px]`}>
                {CONTENT.cases.titleLines[0]}
                <br />
                {CONTENT.cases.titleLines[1]}
              </h2>
            </div>
            <p className="max-w-[360px] text-[15px] leading-relaxed text-neutral-600">{CONTENT.cases.description}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 tb:grid-cols-2">
            {CONTENT.cases.items.map((c) => (
              <Link
                key={c.id}
                href={c.href}
                className="group flex min-w-0 flex-col gap-3.5 rounded-xl bg-white p-3.5 shadow-sm transition hover:shadow-md"
              >
                <Ph className="h-[220px]" />
                <div className="flex items-center justify-between gap-2 px-1.5 pb-2">
                  <div className="flex flex-col gap-1.5">
                    <h3 className={`${HEADING} text-lg leading-snug`}>{c.title}</h3>
                    <span className="text-[12.5px] text-neutral-500">{c.meta}</span>
                  </div>
                  <span className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-700">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="flex flex-col items-center gap-5 border-t border-neutral-200 bg-neutral-100 px-5 py-16 text-center tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-[88px]"
      >
        <h2 className={`${HEADING} text-3xl leading-snug text-neutral-900 tb:text-[38px]`}>
          {CONTENT.cta.titleLines[0]}
          <br />
          {CONTENT.cta.titleLines[1]}
        </h2>
        <p className="max-w-[520px] text-base leading-relaxed text-neutral-700">{CONTENT.cta.description}</p>
        <Link
          href="/contact"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-neutral-700 px-14 py-[18px] text-[17px] font-bold text-white shadow-md transition hover:bg-neutral-800"
        >
          {CONTENT.cta.buttonLabel}
        </Link>
      </section>

      {/* 푸터 */}
      <footer className="flex flex-col items-center justify-between gap-4 bg-neutral-800 px-5 py-8 text-sm text-white/55 tb:flex-row tb:px-10 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-11">
        <span className="font-['Gowun_Batang',serif] text-base font-bold text-white">{CONTENT.footer.brand}</span>
        <span>{CONTENT.footer.copyright}</span>
      </footer>
    </main>
  );
}
