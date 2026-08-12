"use client";

import Text from "@/components/common/Text";
import { useCopy } from "./useCopy";
import { BODY, EYEBROW, HighlightTitle, Section } from "./primitives";

export default function CareSection() {
  const { manage } = useCopy();

  return (
    <Section label="Care elements" className="bg-white" innerClassName="flex flex-col gap-[40px]">
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[10px]">
          <Text as="div" className={EYEBROW}>{manage.eyebrow}</Text>
          <HighlightTitle prefix={manage.titlePrefix} highlight={manage.titleHighlight} suffix={manage.titleSuffix} />
        </div>
        <Text as="div" className={BODY}>{manage.description}</Text>
      </div>

      {/* 기존 탭형 관리 요소 — 비교를 위해 잠시 보존
      <div className="inline-flex gap-[4px] p-[4px] bg-[#efefef] rounded-[999px] self-start">
        {manage.tabs.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => setTab(index)}
            aria-pressed={tab === index}
            className={`${TAB_BASE} ${tab === index ? TAB_ON : TAB_OFF}`}
          >
            <Text as="span" size="sm" weight="bold">{label}</Text>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-5 rounded-[24px] bg-[#f7f7f7] px-4 py-6 tb:gap-6 tb:rounded-[32px] tb:px-[52px] tb:py-[48px]">
        <div className="grid grid-cols-1 gap-5 tb:grid-cols-2">
          {CARE[tab].items.map((item, index) => (
            <div key={item.t} className="flex flex-col gap-[14px] rounded-[20px] bg-white px-5 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:rounded-[24px] tb:px-8 tb:py-[34px]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#eeeeee]">
                  <RoadmapIcon index={index === 0 ? 0 : 3} />
                </div>
                <Text as="div" size="sm" weight="bold" className="whitespace-nowrap rounded-full bg-[#f7f7f7] px-3.5 py-1.5 text-[#525252]">{item.tag}</Text>
              </div>
              <Text as="div" size="xl" weight="bold" className="tracking-[-.025em] text-[#161616]">{item.t}</Text>
              <Text as="div" size="md" className="text-pretty leading-[1.75] text-[#6b6b6b]">{item.d}</Text>
            </div>
          ))}
        </div>
      </div>
      */}

      <div className="grid grid-cols-1 gap-4 tb:grid-cols-2 dt:grid-cols-3 dt:gap-5">
        {manage.methods.map((method) => (
          <article key={method.title} className="min-h-[180px] rounded-[20px] border border-neutral-300 bg-white px-5 py-6 shadow-[0_2px_8px_rgba(0,0,0,.05)] tb:px-7 tb:py-7">
            <Text as="h3" size="xl" weight="bold" className="text-neutral-800">{method.title}</Text>
            <Text size="md" className="mt-3 break-keep leading-7 text-neutral-500">{method.desc}</Text>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {manage.programs.map((program) => (
          <div key={program.name} className="flex flex-wrap items-center gap-x-1.5 rounded-full border border-neutral-300 bg-white px-5 py-3 shadow-sm">
            <Text as="span" size="sm" weight="bold" className="text-neutral-800">{program.name}</Text>
            <Text as="span" size="sm" className="text-neutral-500">· {program.desc}</Text>
          </div>
        ))}
      </div>

      <Text size="sm" className="leading-6 text-neutral-500">{manage.note}</Text>
    </Section>
  );
}
