"use client";

import Text from "@/components/common/Text";
import { useAB } from "@/components/common/ABProvider";
import { WIREFRAME_ONE_TEXT_C } from "@/content/wireframe-1";
import { useCopy } from "./useCopy";

const WORRY_PILL = "w-fit whitespace-nowrap rounded-2xl border border-white/[.07] bg-white/[.04] px-6 py-5 text-[16px] text-white/45";

/** 데스크톱용 흐르는 줄 — 같은 목록을 두 번 이어 붙여 끊김 없이 순환시킨다 */
function MarqueeRow({ items, animation }: { items: readonly string[]; animation: string }) {
  return (
    <div className="flex w-max gap-4" style={{ animation }}>
      {[...items, ...items].map((worry, index) => (
        <Text as="span" key={`${worry}-${index}`} className={WORRY_PILL}>
          {worry}
        </Text>
      ))}
    </div>
  );
}

export default function ConcernsSection() {
  const { concerns, solution } = useCopy();
  const { variant } = useAB();
  const isC = variant === "C";
  const staticBlocks = WIREFRAME_ONE_TEXT_C.concerns.staticBlocks;

  return (
    <section data-screen-label="Worries improved A - wall" className="relative overflow-hidden bg-[#0b1020] pt-[90px] pb-0">
      <div className="relative z-[3] mx-auto flex max-w-[760px] flex-col gap-4 px-4 text-center">
        <Text as="div" className="text-[15px] font-[800] tracking-[.08em] text-[#a3a3a3]">
          {concerns.eyebrow}
        </Text>
        <Text as="div" size="3xl" weight="bold" className="leading-[1.4] tracking-[-.02em] text-white">
          {concerns.titleLines[0]}
          <br />
          {concerns.titleLines[1]}
        </Text>
        <Text as="div" className="text-pretty text-[14px] leading-[1.85] text-white/45 tb:text-[15px]">
          {concerns.explanation}
        </Text>
      </div>

      {isC ? (
        /* C안 — 흐르는 목록 대신 정적 글귀 두 개 */
        <div className="relative z-[3] mx-auto mt-[56px] flex max-w-[760px] flex-col items-center gap-12 px-4 text-center">
          {staticBlocks.map((block, index) => (
            <Text
              as="div"
              key={index}
              className="text-[17px] leading-[1.9] tracking-[-.01em] text-white/80 tb:text-[19px]"
            >
              {block}
            </Text>
          ))}
        </div>
      ) : (
        <>
          {/* 고민의 벽 — 데스크톱 (좌우로 천천히 흐름) */}
          <div className="relative mx-auto mt-[64px] hidden w-full max-w-[1000px] flex-col gap-4 overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] dt:flex">
            <MarqueeRow items={concerns.worries.slice(0, 7)} animation="worry-marquee-left 40s linear infinite" />
            <MarqueeRow items={concerns.worries.slice(7)} animation="worry-marquee-right 46s linear infinite" />
          </div>

          {/* 고민의 벽 — 모바일/태블릿 */}
          <div className="relative mx-auto mt-10 flex max-h-[220px] flex-wrap justify-center gap-2.5 overflow-hidden px-4 dt:hidden">
            {concerns.worries.map((worry) => (
              <Text as="span" key={worry} className="rounded-full border border-white/[.07] bg-white/[.05] px-4 py-2.5 text-[13px] text-white/45">
                {worry}
              </Text>
            ))}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-b from-transparent to-[#0b1020]" />
          </div>
        </>
      )}

      {/* 아래 섹션으로 이어지는 연결선 */}
      <div className="relative z-[3] mt-8 flex flex-col items-center">
        <div className="h-[70px] w-px bg-gradient-to-b from-transparent via-white/25 to-white/60" />
        <div className="h-[11px] w-[11px] rounded-full bg-neutral-300 shadow-[0_0_22px_7px_rgba(212,212,212,.5)]" />
      </div>

      {/* 돔 */}
      <div className="relative -mt-3 overflow-hidden pb-[56px]">
        <div className="absolute left-1/2 top-[40px] h-[1400px] w-[1400px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#8a8a8a] via-[#5a5a5a] to-[#2a2a2a]" />
        <div className="relative z-[2] mx-auto flex max-w-[920px] flex-col items-center gap-3 px-4 pt-[64px] text-center tb:pt-[80px]">
          <Text as="div" size="2xl" weight="bold" className="text-[14px] pt-6 text-white/85 tb:text-[15px]">
            {solution.intro}
          </Text>
          <Text as="div" className="leading-[1.4] text-[14px] tracking-[-.02em] text-white">
            {solution.countSuffix}
          </Text>
          {/* <div className="mt-8 flex flex-wrap justify-center gap-3">
            {solution.pills.map((pill) => (
              <Text as="span" key={pill.title} className="rounded-full bg-white px-4 py-2.5 text-[15px] font-[700] tracking-[-.02em] text-[#2a2a2a]">{pill.title}</Text>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
