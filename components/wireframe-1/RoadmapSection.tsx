import Text from "@/components/common/Text";
import { WIREFRAME_ONE_TEXT as COPY } from "@/content/wireframe-1";
import { EYEBROW, HighlightTitle, Section } from "./primitives";

export default function RoadmapSection() {
  const { roadmap } = COPY;

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

      {/* 신규 5단계 로드맵: 모바일·태블릿은 세로, PC는 가로 */}
      <div className="relative mt-8 flex flex-col dt:hidden">
        <div className="absolute bottom-10 left-[23px] top-6 w-px bg-neutral-300" />
        {roadmap.compactSteps.map((step) => (
          <div key={step.no} className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 pb-8 last:pb-0">
            <Text as="div" size="md" weight="bold" className="z-[1] grid h-12 w-12 place-items-center rounded-full border-2 border-neutral-600 bg-[#f7f7f7] text-neutral-700">
              {step.no}
            </Text>
            <div className="pt-1">
              <Text as="h3" size="lg" weight="bold" className="text-neutral-900">{step.title}</Text>
              <Text size="sm" className="mt-1.5 max-w-[520px] break-keep leading-6 text-neutral-500">{step.desc}</Text>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-12 hidden grid-cols-5 dt:grid">
        <div className="absolute left-[10%] right-[10%] top-6 h-px bg-neutral-300" />
        {roadmap.compactSteps.map((step) => (
          <div key={step.no} className="relative flex min-w-0 flex-col items-center px-4 text-center">
            <Text as="div" size="lg" weight="bold" className="z-[1] grid h-12 w-12 place-items-center rounded-full border-2 border-neutral-600 bg-[#f7f7f7] text-neutral-700">
              {step.no}
            </Text>
            <Text as="h3" size="lg" weight="bold" className="mt-5 text-neutral-900">{step.title}</Text>
            <Text size="sm" className="mt-2 max-w-[210px] break-keep leading-6 text-neutral-500">{step.desc}</Text>
          </div>
        ))}
      </div>

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
