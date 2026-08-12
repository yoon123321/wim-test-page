import Text from "@/components/common/Text";

export interface ProcessRoadmapStep {
  readonly no: string;
  readonly title: string;
  readonly desc: string;
}

export default function ProcessRoadmap({ steps, surfaceClassName = "bg-[#f7f7f7]" }: { steps: readonly ProcessRoadmapStep[]; surfaceClassName?: string }) {
  return (
    <>
      <div className="relative mt-8 flex flex-col dt:hidden">
        <div className="absolute bottom-10 left-[23px] top-6 w-px bg-neutral-300" />
        {steps.map((step) => (
          <div key={step.no} className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 pb-8 last:pb-0">
            <Text as="div" size="md" weight="bold" className={`z-[1] grid h-12 w-12 place-items-center rounded-full border-2 border-neutral-600 text-neutral-700 ${surfaceClassName}`}>
              {step.no}
            </Text>
            <div className="pt-1">
              <Text as="h3" size="lg" weight="bold" className="text-neutral-900">{step.title}</Text>
              <Text size="sm" className="mt-1.5 max-w-[520px] break-keep leading-6 text-neutral-500">{step.desc}</Text>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-12 hidden dt:grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
        <div className="absolute left-[10%] right-[10%] top-6 h-px bg-neutral-300" />
        {steps.map((step) => (
          <div key={step.no} className="relative flex min-w-0 flex-col items-center px-4 text-center">
            <Text as="div" size="lg" weight="bold" className={`z-[1] grid h-12 w-12 place-items-center rounded-full border-2 border-neutral-600 text-neutral-700 ${surfaceClassName}`}>
              {step.no}
            </Text>
            <Text as="h3" size="lg" weight="bold" className="mt-5 text-neutral-900">{step.title}</Text>
            <Text size="sm" className="mt-2 max-w-[210px] break-keep leading-6 text-neutral-500">{step.desc}</Text>
          </div>
        ))}
      </div>
    </>
  );
}
