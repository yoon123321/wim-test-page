"use client";

import { useState } from "react";
import Text from "@/components/common/Text";
import Modal from "@/components/common/Modal";
import { HOME_DIAGNOSTICS } from "@/content/home";

const ITEMS = HOME_DIAGNOSTICS.items;

function CardVisual({ type }: { type: (typeof ITEMS)[number]["visual"] }) {
  if (type === "radar") return (
    <svg viewBox="0 0 240 120" className="h-24 w-full tb:h-28" aria-hidden="true">
      <g fill="none" stroke="#d4d4d4"><path d="m120 12 47 27v54l-47 27-47-27V39Z"/><path d="m120 31 31 18v35l-31 18-31-18V49Z"/><path d="M120 12v108M73 39l94 54M167 39 73 93"/></g>
      <path d="m120 25 37 30-11 45-31-15-34 8 9-41Z" fill="#d4d4d4" fillOpacity=".28" stroke="#737373" strokeWidth="2.5"/>
      {[[120,25],[157,55],[146,100],[115,85],[81,93],[90,52]].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="#737373"/>)}
    </svg>
  );
  if (type === "bars") return (
    <svg viewBox="0 0 240 120" className="h-24 w-full tb:h-28" aria-hidden="true">
      {[24,45,66,87,108].map((y, i) => <g key={y}><rect x="45" y={y} width="150" height="10" rx="5" fill="#e5e5e5"/><rect x="45" y={y} width={[118,72,94,64,104][i]} height="10" rx="5" fill="#737373"/></g>)}
    </svg>
  );
  if (type === "body") return (
    <svg viewBox="0 0 240 120" className="h-24 w-full tb:h-28" aria-hidden="true">
      {[62,105,148].map((x, i) => <g key={x}><rect x={x} y="20" width="30" height="82" rx="10" fill="#e5e5e5"/><rect x={x} y={[55,41,70][i]} width="30" height={[47,61,32][i]} rx="10" fill="#737373"/></g>)}
    </svg>
  );
  if (type === "dna") return (
    <svg viewBox="0 0 240 120" className="h-24 w-full tb:h-28" aria-hidden="true">
      <path d="M45 25c35 0 35 70 70 70s35-70 70-70M45 95c35 0 35-70 70-70s35 70 70 70" fill="none" stroke="#a3a3a3" strokeWidth="3"/>
      {[55,76,98,120,142,164,180].map((x,i)=><path key={x} d={`M${x} ${32 + (i%3)*12}v${44 - (i%3)*12}`} stroke="#d4d4d4" strokeWidth="2"/>)}
    </svg>
  );
  if (type === "curve") return (
    <svg viewBox="0 0 240 120" className="h-24 w-full tb:h-28" aria-hidden="true">
      <path d="M35 98h170M35 72h170" stroke="#d4d4d4" strokeDasharray="4 5"/>
      <path d="M35 92c30-2 32-64 58-64 25 0 28 64 58 64 21 0 22-34 54-38" fill="none" stroke="#737373" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="93" cy="28" r="5" fill="#525252"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 240 120" className="h-24 w-full tb:h-28" aria-hidden="true">
      {[68,120,172].map((x, i) => <g key={x}><path d={`M${x-18} 82a18 18 0 0 1 36 0`} fill="none" stroke="#e5e5e5" strokeWidth="9" strokeLinecap="round"/><path d={`M${x-18} 82a18 18 0 0 1 ${[15,27,30][i]}-16`} fill="none" stroke="#737373" strokeWidth="9" strokeLinecap="round"/></g>)}
    </svg>
  );
}

export default function HomeDiagnostics() {
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);
  const selectedItem = ITEMS.find((item) => item.number === selectedNumber);

  return (
    <>
    <div>
      <Text as="span" size="xs" weight="bold" className="tracking-[0.18em] text-neutral-500">{HOME_DIAGNOSTICS.step}</Text>
      <Text as="h3" size="3xl" weight="bold" className="mt-4 break-keep leading-tight text-neutral-900">{HOME_DIAGNOSTICS.title}</Text>
      <div className="mt-10 grid grid-cols-2 gap-3 tb:gap-4 dt:grid-cols-3">
        {ITEMS.map((item) => (
          <article key={item.number} className="flex min-h-[340px] flex-col rounded-[24px] border border-dashed border-neutral-300 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg tb:min-h-[390px] tb:rounded-[28px] tb:p-8">
            <div className="flex items-center justify-between">
              <Text as="span" size="md" weight="bold" className="text-neutral-400 tb:text-lg">{item.number}</Text>
              <Text as="span" size="xs" weight="medium" className="whitespace-nowrap rounded-full bg-neutral-100 px-2.5 py-1.5 text-neutral-600 tb:px-4 tb:py-2">{item.badge}</Text>
            </div>
            <div className="mt-5 tb:mt-8"><CardVisual type={item.visual} /></div>
            <Text as="span" size="xs" className="mt-2 text-neutral-500">{item.caption}</Text>
            <div className="mt-auto pt-6 tb:pt-10">
              <Text as="h4" size="lg" weight="bold" className="break-keep text-neutral-900 tb:text-xl">{item.title}</Text>
              <Text size="xs" className="mt-2 break-keep leading-relaxed text-neutral-600 tb:mt-3 tb:text-sm">{item.description}</Text>
              <button type="button" onClick={() => setSelectedNumber(item.number)} className="mt-4 inline-flex w-full items-center justify-end whitespace-nowrap text-xs font-semibold text-neutral-600 transition hover:text-neutral-950 tb:mt-6 tb:text-sm">{HOME_DIAGNOSTICS.detailLabel}</button>
            </div>
          </article>
        ))}
      </div>
    </div>
    <Modal open={selectedItem !== undefined} title={selectedItem?.title ?? ""} closeLabel={HOME_DIAGNOSTICS.modal.closeLabel} onClose={() => setSelectedNumber(null)}>
      {selectedItem && (
        <div className="grid gap-6 tb:grid-cols-[220px_1fr] tb:items-center">
          <div className="rounded-2xl bg-neutral-100 p-5">
            <CardVisual type={selectedItem.visual} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Text as="span" size="xs" weight="bold" className="rounded-full bg-neutral-100 px-3 py-2 text-neutral-600">{selectedItem.badge}</Text>
              <Text as="span" size="xs" className="text-neutral-500">{selectedItem.caption}</Text>
            </div>
            <Text size="md" className="mt-5 break-keep leading-8 text-neutral-700">{selectedItem.description}</Text>
            <Text size="sm" className="mt-3 break-keep leading-7 text-neutral-500">{HOME_DIAGNOSTICS.modal.note}</Text>
          </div>
        </div>
      )}
    </Modal>
    </>
  );
}
