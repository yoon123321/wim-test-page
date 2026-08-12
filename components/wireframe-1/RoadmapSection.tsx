"use client";

import Text from "@/components/common/Text";
import ProcessRoadmap from "@/components/common/ProcessRoadmap";
import { useCopy } from "./useCopy";
import { EYEBROW, HighlightTitle, Section } from "./primitives";

export default function RoadmapSection() {
  const { roadmap } = useCopy();

  return (
    <Section label="Roadmap 5" className="bg-[#f7f7f7]" innerClassName="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[10px]">
        <Text as="div" className={EYEBROW}>{roadmap.eyebrow}</Text>
        <HighlightTitle prefix={roadmap.titlePrefix} highlight={roadmap.titleHighlight} suffix={roadmap.titleSuffix} />
      </div>

      {/* 기존 4단계 진행 바 — 비교를 위해 잠시 보존
      <div className="mt-[46px] hidden px-10 tb:block">
        <div className="relative">
          <div className="absolute left-[63px] right-[63px] top-[23px] h-[3px] rounded-full bg-[#e5e5e5]" />
          <div className="relative grid grid-cols-4">
            {roadmap.steps.map((step) => (
              <div key={step.no} className="flex flex-col items-center gap-[14px]">
                <Text as="div" size="md" weight="bold" className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#525252] text-white shadow-[0_0_0_6px_#f7f7f7]">{step.no}</Text>
                <Text as="div" size="sm" weight="bold" className="whitespace-nowrap text-[#525252]">{step.label}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}

      <ProcessRoadmap steps={roadmap.compactSteps} />

      {/* <div className="mt-10 grid grid-cols-1 gap-5 tb:grid-cols-2 dt:grid-cols-4">
        {roadmap.steps.map((step, index) => {
          const detail = roadmap.details[index];
          const dark = index === lastIndex;
          return (
            <div key={step.no} className={`flex flex-col gap-3 rounded-[24px] px-7 py-8 ${dark ? "bg-[#404040]" : "bg-white shadow-[0_3px_18px_rgba(0,0,0,.06)]"}`}>
              <div className={`flex h-[46px] w-[46px] items-center justify-center rounded-[14px] ${dark ? "bg-white/15" : "bg-[#eeeeee]"}`}>
                <Text as="span" size="md" weight="bold" className={dark ? "text-white tb:hidden" : "tb:hidden"}>{step.no}</Text>
                <span className="hidden tb:block"><RoadmapIcon index={index} /></span>
              </div>
              <Text as="div" size="xs" weight="bold" className={`tracking-[.12em] ${dark ? "text-[#a3a3a3]" : "text-[#737373]"}`}>{detail.step}</Text>
              <Text as="div" size="lg" weight="bold" className={`leading-[1.45] tracking-[-.025em] ${dark ? "text-white" : "text-[#161616]"}`}>{detail.title}</Text>
              <Text as="div" size="sm" className={`text-pretty leading-[1.7] ${dark ? "text-[#dedede]" : "text-[#6b6b6b]"}`}>{detail.desc}</Text>
            </div>
          );
        })}
      </div> */}
    </Section>
  );
}
