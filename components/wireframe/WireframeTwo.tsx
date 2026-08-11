"use client";

import { useState } from "react";
import { WIREFRAME_TWO_CONTENT as CONTENT } from "@/content/wireframe-2";

const lineWidths = ["w-2/5", "w-3/5", "w-1/2", "w-4/5"];

function Bar({ className = "" }: { className?: string }) {
  return <div className={`h-2.5 rounded-sm bg-neutral-300 ${className}`} />;
}

function ImageSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`grid min-h-40 place-items-center rounded-2xl border border-dashed border-neutral-400 bg-[linear-gradient(to_top_right,transparent_calc(50%_-_.5px),#d4d4d4_50%,transparent_calc(50%_+_.5px)),linear-gradient(to_bottom_right,transparent_calc(50%_-_.5px),#d4d4d4_50%,transparent_calc(50%_+_.5px))] text-center text-xs text-neutral-500 ${className}`}>
      {label}
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="m-0 text-[10px] font-semibold tracking-[.18em] text-neutral-500 tb:text-xs">{eyebrow}</p>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-800 tb:text-3xl dt:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-neutral-600 tb:text-base">{description}</p>
    </div>
  );
}

const sectionClass = "border-t border-dashed border-neutral-300 px-4 py-14 tb:px-8 tb:py-20 dt:px-10 dt:py-24";
const innerClass = "mx-auto w-full max-w-[1200px]";

export default function WireframeTwo() {
  const [method, setMethod] = useState(1);
  const [manager, setManager] = useState(1);
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <div className="w-full bg-white text-neutral-800">
  

      <section aria-label={CONTENT.introduction.title} className={`${sectionClass} bg-neutral-100`}>
        <div className={`${innerClass} grid gap-8 tb:grid-cols-[.9fr_1.1fr] tb:items-center dt:gap-16`}>
          <ImageSlot label={CONTENT.introduction.imageDescription} className="h-72 tb:h-[420px]" />
          <div>
            <p className="text-xs font-semibold tracking-[.18em] text-neutral-500">{CONTENT.introduction.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-bold tb:text-3xl dt:text-4xl">{CONTENT.introduction.title}</h2>
            <div className="mt-7 flex flex-wrap items-center gap-3"><strong className="text-xl">{CONTENT.introduction.personName}</strong><span className="rounded-full bg-neutral-300 px-3 py-1 text-xs">{CONTENT.introduction.personRole}</span></div>
            <p className="mt-5 text-sm leading-7 text-neutral-600 tb:text-base">{CONTENT.introduction.description}</p>
            <button type="button" className="mt-7 rounded-full border border-neutral-500 px-4 py-3 text-sm font-semibold">{CONTENT.introduction.button}</button>
          </div>
        </div>
        <div className={`${innerClass} mt-10 grid grid-cols-2 gap-2 rounded-xl bg-neutral-200 p-3 text-center text-xs text-neutral-600 tb:grid-cols-4`}>
          {CONTENT.introduction.tickerItems.map((item) => <span key={item} className="rounded-lg bg-white/60 px-3 py-3">{item}</span>)}
        </div>
      </section>

      <section aria-label={CONTENT.careTeam.title} className={sectionClass}>
        <div className={innerClass}>
          <div className="max-w-2xl"><p className="text-xs font-semibold tracking-[.18em] text-neutral-500">{CONTENT.careTeam.eyebrow}</p><h2 className="mt-4 text-2xl font-bold tb:text-3xl dt:text-4xl">{CONTENT.careTeam.title}</h2><p className="mt-4 text-sm leading-7 text-neutral-600 tb:text-base">{CONTENT.careTeam.description}</p></div>
          <p className="mt-6 inline-block rounded-full bg-neutral-200 px-4 py-2 text-xs text-neutral-600">{CONTENT.careTeam.summary}</p>
          <div className="mt-10 grid gap-5 tb:grid-cols-3">
            {CONTENT.careTeam.members.map((member, index) => (
              <button key={member.title} type="button" onClick={() => setManager(index)} className={`rounded-2xl border p-6 text-left transition ${manager === index ? "border-neutral-700 bg-neutral-100" : "border-neutral-300 bg-white opacity-60"}`}>
                <div className="mx-auto grid size-20 place-items-center rounded-full border border-dashed border-neutral-400 text-xs">{index + 1}</div>
                <h3 className="mt-5 text-center text-lg font-bold">{member.title}</h3><p className="mt-3 text-center text-sm leading-6 text-neutral-600">{member.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section aria-label={CONTENT.consultation.titleLines.join(" ")} className={`${sectionClass} bg-neutral-100`}>
        <div className={`${innerClass} grid gap-8 tb:grid-cols-[1fr_280px] tb:items-stretch dt:grid-cols-[1fr_360px] dt:gap-16`}>
          <div><p className="text-xs font-semibold tracking-[.18em] text-neutral-500">{CONTENT.consultation.eyebrow}</p><h2 className="mt-5 text-3xl font-bold leading-tight dt:text-4xl">{CONTENT.consultation.titleLines.map((line) => <span key={line} className="block">{line}</span>)}</h2><p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 tb:text-base">{CONTENT.consultation.description}</p><div className="mt-7 flex flex-wrap gap-3"><button className="rounded-full bg-neutral-700 px-6 py-3 text-sm font-semibold text-white">{CONTENT.consultation.primaryButton}</button><button className="rounded-full border border-neutral-500 px-6 py-3 text-sm font-semibold">{CONTENT.consultation.secondaryButton}</button></div><div className="mt-8 rounded-2xl border border-neutral-300 bg-white p-5"><strong className="text-sm">{CONTENT.consultation.infoTitle}</strong>{CONTENT.consultation.infoLines.map((line) => <p key={line} className="mt-2 text-sm text-neutral-600">{line}</p>)}</div></div>
          <ImageSlot label={CONTENT.consultation.imageDescription} className="h-72 tb:h-auto" />
        </div>
      </section>
    <section aria-label={CONTENT.threeM.title} className={`${sectionClass} bg-neutral-100`}>
        <div className={innerClass}>
          <SectionTitle eyebrow={CONTENT.threeM.eyebrow} title={CONTENT.threeM.title} description={CONTENT.threeM.description} />
          <div className="mt-10 grid gap-10 tb:mt-14 tb:grid-cols-[minmax(260px,.8fr)_1.2fr] tb:items-center dt:gap-20">
            <div className="relative mx-auto aspect-square w-full max-w-[340px] rounded-full border border-dashed border-neutral-400">
              {CONTENT.threeM.items.map((item, index) => {
                const positions = ["left-1/2 top-0 -translate-x-1/2 -translate-y-1/4", "bottom-0 left-0 -translate-x-1/4 translate-y-1/4", "bottom-0 right-0 translate-x-1/4 translate-y-1/4"];
                return <button key={item.title} type="button" aria-label={item.title} onClick={() => setMethod(index)} className={`absolute grid size-20 place-items-center rounded-full border text-[10px] font-semibold tb:size-24 ${positions[index]} ${method === index ? "border-neutral-700 bg-neutral-300" : "border-neutral-400 bg-neutral-100"}`}>{index + 1}</button>;
              })}
              <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-neutral-600 bg-neutral-300 text-xs font-bold">3M</div>
            </div>
            <div className="grid gap-4">
              {CONTENT.threeM.items.map((item, index) => (
                <button key={item.title} type="button" onClick={() => setMethod(index)} className={`rounded-2xl border p-5 text-left transition tb:p-6 ${method === index ? "border-neutral-600 bg-white opacity-100" : "border-neutral-300 bg-neutral-50 opacity-55"}`}>
                  <strong className="block text-lg tb:text-xl">{item.title}</strong>
                  <span className="mt-1 block text-xs text-neutral-500">{item.subtitle}</span>
                  <span className="mt-3 block text-sm leading-6 text-neutral-600">{item.description}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label={CONTENT.programs.title} className={sectionClass}>
        <div className={innerClass}>
          <SectionTitle eyebrow={CONTENT.programs.eyebrow} title={CONTENT.programs.title} description={CONTENT.programs.description} />
          <div className="mt-10 grid gap-6 tb:mt-14 tb:grid-cols-3">
            {CONTENT.programs.items.map((item) => (
              <article key={item.title} className="rounded-2xl border border-neutral-300 p-4 tb:p-5">
                <ImageSlot label={item.imageDescription} className="h-44 tb:h-48 dt:h-56" />
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-xs text-neutral-500">{item.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section aria-label={CONTENT.cases.title} className={sectionClass}>
        <div className={innerClass}>
          <div className="flex items-end justify-between gap-5"><div><p className="text-xs font-semibold tracking-[.18em] text-neutral-500">{CONTENT.cases.eyebrow}</p><h2 className="mt-4 text-2xl font-bold tb:text-3xl dt:text-4xl">{CONTENT.cases.title}</h2></div><span className="text-xs text-neutral-500 tb:text-sm">{CONTENT.cases.linkLabel}</span></div>
          <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden tb:mx-0 tb:grid tb:grid-cols-2 tb:overflow-visible tb:px-0 tb:pb-0 dt:grid-cols-4">
            {CONTENT.cases.items.map((item, index) => (
              <button key={item.title} type="button" onClick={() => setSelectedCase(index)} className={`w-[85%] shrink-0 snap-center [scroll-snap-stop:always] rounded-2xl border p-4 text-left transition tb:w-auto ${selectedCase === index ? "border-neutral-700 bg-neutral-100" : "border-neutral-300"}`}>
                <div className="grid aspect-video place-items-center rounded-xl border border-dashed border-neutral-400 bg-neutral-100 text-xs font-semibold text-neutral-500">{CONTENT.cases.videoPlaceholder}</div><h3 className="mt-4 font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{item.description}</p><Bar className={`mt-4 ${lineWidths[index]}`} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
