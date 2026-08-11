"use client";

import { useState } from "react";
import { PAGE_SINGLE_CONTENT as CONTENT } from "@/content/page-single";

const section = "border-t border-dashed border-neutral-300 px-5 py-12 tb:px-8 tb:py-16 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-20";
const inner = "mx-auto w-full max-w-[1200px]";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="inline-block rounded border border-neutral-300 bg-neutral-200 px-2.5 py-1 text-[11px] font-semibold text-neutral-600">{children}</span>;
}

function Photo({ lines, className = "" }: { lines: readonly string[]; className?: string }) {
  return <div className={`grid min-h-44 place-content-center rounded-xl border border-dashed border-neutral-400 bg-[repeating-linear-gradient(135deg,#f5f5f5_0_6px,#e5e5e5_6px_12px)] px-4 text-center text-xs leading-5 text-neutral-500 ${className}`}>{lines.map((line) => <span key={line} className="block">{line}</span>)}</div>;
}

function Heading({ title, subtitle }: { title: string; subtitle: string }) {
  return <div className="mt-7 text-center"><h2 className="text-2xl font-bold tracking-tight tb:text-3xl">{title}</h2><p className="mt-3 text-sm text-neutral-500 tb:text-base">{subtitle}</p></div>;
}

function Note({ children }: { children: React.ReactNode }) {
  return <p className="mt-7 border-l-2 border-neutral-400 bg-neutral-100 px-4 py-3 text-xs leading-6 text-neutral-600">{children}</p>;
}

export default function WimDeviceWireframe() {
  const [situation, setSituation] = useState(0);
  const [faq, setFaq] = useState(0);

  return (
    <div className="w-full bg-white text-neutral-800">
      <section className={`${section} border-t-0`}>
        <div className={inner}><Label>{CONTENT.hero.sectionLabel}</Label><Photo lines={[CONTENT.hero.imagePlaceholder]} className="mt-6 h-52 tb:h-64" /><div className="mt-8 text-center"><p className="text-sm text-neutral-500">{CONTENT.hero.eyebrow}</p><h2 className="mt-3 text-3xl font-bold tracking-tight tb:text-4xl">{CONTENT.hero.title}</h2><p className="mt-4 text-sm text-neutral-500 tb:text-base">{CONTENT.hero.description}</p></div><Note>{CONTENT.hero.note}</Note></div>
      </section>

      <section className={section}>
        <div className={inner}><Label>{CONTENT.devices.sectionLabel}</Label><Heading title={CONTENT.devices.title} subtitle={CONTENT.devices.subtitle} /><div className="mt-10 space-y-8 tb:space-y-10">{CONTENT.devices.items.map((device) => { const flipped = "flip" in device && device.flip; return <article key={device.name} className="grid gap-5 rounded-2xl border border-neutral-300 p-4 tb:grid-cols-2 tb:items-center tb:gap-8 tb:p-6"><Photo lines={device.photo} className={`h-56 tb:h-64 ${flipped ? "tb:order-2" : ""}`} /><div className={flipped ? "tb:order-1" : ""}><p className="text-[11px] font-semibold tracking-[.16em] text-neutral-500">{device.kicker}</p><h3 className="mt-3 text-xl font-bold tb:text-2xl">{device.name}</h3><p className="mt-3 text-sm leading-7 text-neutral-600">{device.desc}</p><div className="mt-5 flex flex-wrap gap-2">{device.tags.map((tag) => <span key={tag} className="rounded-full bg-neutral-700 px-3 py-2 text-xs font-semibold text-white">{tag}</span>)}</div></div></article>; })}</div><Note>{CONTENT.devices.note}</Note></div>
      </section>

      <section className={`${section} bg-neutral-100`}>
        <div className={inner}><Label>{CONTENT.combinations.sectionLabel}</Label><Heading title={CONTENT.combinations.title} subtitle={CONTENT.combinations.subtitle} /><div className="mt-7 flex flex-wrap justify-center gap-2">{CONTENT.combinations.situations.map((item, index) => <button key={item} onClick={() => setSituation(index)} className={`rounded-full border px-4 py-3 text-xs font-semibold tb:text-sm ${situation === index ? "border-neutral-700 bg-neutral-700 text-white" : "border-neutral-300 bg-white"}`}>{item}</button>)}</div><div className="mt-6 grid gap-5 rounded-2xl border border-neutral-300 bg-white p-5 tb:grid-cols-[1fr_220px] tb:items-center tb:p-7"><div><div className="flex flex-wrap items-center gap-2">{CONTENT.combinations.steps.map((step, index) => <span key={step} className="contents">{index > 0 && <span>→</span>}<span className="rounded-full bg-neutral-200 px-3 py-2 text-xs font-semibold">{step}</span></span>)}</div><h3 className="mt-5 text-lg font-bold">{CONTENT.combinations.courseTitle}</h3><p className="mt-3 text-sm leading-7 text-neutral-600">{CONTENT.combinations.courseDescription}</p></div><Photo lines={CONTENT.combinations.photo} className="h-36" /></div><p className="mt-6 text-center text-sm">{CONTENT.combinations.guidancePrefix}<strong>{CONTENT.combinations.guidanceStrong}</strong></p><Note>{CONTENT.combinations.note}</Note></div>
      </section>

      <section className={section}>
        <div className={inner}><Label>{CONTENT.passes.sectionLabel}</Label><Heading title={CONTENT.passes.title} subtitle={CONTENT.passes.subtitle} /><div className="mt-9 grid gap-4 tb:grid-cols-2 dt:grid-cols-4">{CONTENT.passes.items.map((pass) => <article key={pass.name} className={`relative rounded-2xl border p-6 text-center ${pass.featured ? "border-2 border-neutral-700" : "border-neutral-300"}`}>{pass.featured && <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-700 px-3 py-1.5 text-[11px] font-bold text-white">{CONTENT.passes.featuredLabel}</span>}<h3 className="text-lg font-bold">{pass.name}</h3><p className="mt-2 text-xs text-neutral-500">{pass.sub}</p><p className="mt-6 text-xl font-bold">{pass.price}</p><p className="mt-2 text-xs text-neutral-500">{pass.per}</p>{pass.off && <p className="mt-2 text-sm font-bold">{pass.off}</p>}</article>)}</div><p className="mt-7 text-center text-sm leading-6">{CONTENT.passes.policyPrefix}<strong>{CONTENT.passes.policyStrong}</strong>{CONTENT.passes.policySuffix}</p><Note>{CONTENT.passes.note}</Note></div>
      </section>

      <section className={`${section} bg-neutral-100`}>
        <div className={inner}><Label>{CONTENT.faq.sectionLabel}</Label><Heading title={CONTENT.faq.title} subtitle="" /><div className="mx-auto mt-8 max-w-3xl divide-y divide-neutral-300 border-y border-neutral-300">{[CONTENT.faq.openedQuestion, ...CONTENT.faq.questions].map((question, index) => <div key={question}><button onClick={() => setFaq(faq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold tb:text-base"><span>{question.replace(/^[▼▶]\s*/, "")}</span><span>{faq === index ? "−" : "+"}</span></button>{faq === index && <div className="pb-5 text-sm leading-7 text-neutral-600">{index === 0 ? <>{CONTENT.faq.openedAnswer} <strong>{CONTENT.faq.openedWarning}</strong></> : "답변 내용이 들어갈 자리입니다."}</div>}</div>)}</div><Note>{CONTENT.faq.note}</Note></div>
      </section>

      <section className={section}><div className={`${inner} text-center`}><Label>{CONTENT.cta.sectionLabel}</Label><Heading title={CONTENT.cta.title} subtitle={CONTENT.cta.subtitle} /><div className="mt-7 flex flex-wrap justify-center gap-3"><button className="rounded-full bg-neutral-700 px-6 py-3 text-sm font-semibold text-white">{CONTENT.cta.primaryLabel}</button><button className="rounded-full border border-neutral-500 px-6 py-3 text-sm font-semibold">{CONTENT.cta.secondaryLabel}</button></div></div></section>
    </div>
  );
}
