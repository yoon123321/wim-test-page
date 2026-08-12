"use client";

import { useState } from "react";
import Text from "@/components/common/Text";
import { WIREFRAME_ONE_TEXT as COPY } from "@/content/wireframe-1";
import { EYEBROW, FlipIcon, Section, Slot } from "./primitives";

const FLIP_BUTTON = "flex items-center gap-[8px] py-[13px] px-[22px] rounded-[999px] text-[14px] font-[700] tracking-[-.01em] cursor-pointer";
const FACE = "absolute inset-0 rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,.14)] [backface-visibility:hidden]";

/** bars 순서에 맞춘 채움 너비와 색 — 마지막 항목만 다른 톤을 쓴다 */
const BAR_STYLES = [
  { width: "w-[76%]", fill: "bg-[#525252]", value: "text-[#525252]" },
  { width: "w-[64%]", fill: "bg-[#525252]", value: "text-[#525252]" },
  { width: "w-[97%]", fill: "bg-[#d4d4d4]", value: "text-[#161616]" },
];

function BeforeAfterCard() {
  const [flipped, setFlipped] = useState(false);
  const [reveal, setReveal] = useState(50);
  const { beforeAfter, common } = COPY;
  const flipLabel = flipped ? common.flipToPhoto : common.flipToDetails;

  return (
    <div className="relative w-full max-w-[520px] h-[420px] tb:h-[560px] [perspective:1400px]">
      <div className={`absolute inset-0 [transition:transform_.6s_cubic-bezier(.4,.2,.2,1)] [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}`}>
        {/* 앞면 — 비포/애프터 슬라이더 */}
        <div className={`${FACE} bg-[#f0f0f0]`}>
          <div className="absolute inset-0"><Slot label={beforeAfter.beforePhoto} /></div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}><Slot label={beforeAfter.afterPhoto} /></div>
          <div className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_14px_rgba(0,0,0,.3)] pointer-events-none" style={{ left: `${reveal}%` }} />
          <Text as="div" className="absolute left-[18px] top-[18px] py-[8px] px-[16px] rounded-[999px] bg-[rgba(0,0,0,.5)] text-white text-[12px] font-[700] tracking-[.08em]">{beforeAfter.beforeBadge}</Text>
          <Text as="div" className="absolute right-[18px] top-[18px] py-[8px] px-[16px] rounded-[999px] bg-[#525252] text-white text-[12px] font-[700] tracking-[.08em]">{beforeAfter.afterBadge}</Text>
          <input
            type="range"
            min={0}
            max={100}
            value={reveal}
            onChange={(event) => setReveal(Number(event.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-[ew-resize] m-[0]"
            aria-label={beforeAfter.sliderLabel}
          />
          <button type="button" onClick={() => setFlipped((value) => !value)} className={`${FLIP_BUTTON} absolute left-[50%] bottom-[22px] -translate-x-1/2 bg-[rgba(255,255,255,.94)] text-[#404040] shadow-[0_6px_20px_rgba(0,0,0,.22)] z-[3]`}>
            <FlipIcon />
            <Text as="span" size="sm" weight="bold">{flipLabel}</Text>
          </button>
        </div>

        {/* 뒷면 — 체성분 상세 */}
        <div className={`${FACE} bg-[#404040] [transform:rotateY(180deg)] py-[44px] px-[40px] flex flex-col items-center justify-center gap-[22px]`}>
          <div className="self-start flex flex-col gap-[6px]">
            <Text as="div" className="text-[11px] font-[700] italic tracking-[.16em] text-[#a3a3a3]">{beforeAfter.detailEyebrow}</Text>
            <Text as="div" className="text-[20px] font-[800] text-white tracking-[-.025em]">{beforeAfter.detailTitle}</Text>
          </div>
          <svg width="250" height="250" viewBox="0 0 300 300" fill="none" aria-hidden="true">
            <polygon points="150,40 245.3,95 245.3,205 150,260 54.7,205 54.7,95" stroke="rgba(255,255,255,.22)" strokeWidth="1" />
            <polygon points="150,77 213.2,113.5 213.2,186.5 150,223 86.8,186.5 86.8,113.5" stroke="rgba(255,255,255,.16)" strokeWidth="1" />
            <polygon points="150,111.5 188.1,128 178.6,166.5 150,199.5 116.7,169.3 121.4,133.5" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.45)" strokeWidth="1.5" strokeDasharray="4 4" />
            <polygon points="150,62 221.4,108.8 231,196.8 150,227 73.8,194 78.6,108.8" fill="#a3a3a3" fillOpacity=".28" stroke="#d4d4d4" strokeWidth="2.5" />
          </svg>
          <div className="w-full grid grid-cols-1 tb:grid-cols-2 gap-y-[10px] gap-x-[28px]">
            {beforeAfter.metrics.map((metric) => (
              <div key={metric.label} className="flex justify-between text-[#bdbdbd]">
                <Text as="span" size="sm">{metric.label}</Text>
                <Text as="span" size="sm" weight="bold" className="text-white">{metric.value}</Text>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => setFlipped((value) => !value)} className={`${FLIP_BUTTON} bg-[rgba(255,255,255,.14)] text-white`}>
            <FlipIcon back stroke="#fff" />
            <Text as="span" size="sm" weight="bold">{flipLabel}</Text>
          </button>
        </div>
      </div>
    </div>
  );
}

function BodyCompSummary() {
  const { bodyComp } = COPY;

  return (
    <div className="flex flex-col gap-[36px]">
      <div className="flex flex-col gap-[12px]">
        <Text as="div" className={EYEBROW}>{bodyComp.eyebrow}</Text>
        <Text as="div" size="3xl" weight="bold" className="tracking-[-.035em] text-[#161616] leading-[1.35]">
          {bodyComp.titleLines[0]}
          <br />
          <Text as="span" size="3xl" weight="bold" className="text-[#525252]">{bodyComp.titleLines[1]}</Text>
        </Text>
      </div>

      <div className="flex flex-col gap-[20px]">
        {bodyComp.bars.map((bar, index) => {
          const style = BAR_STYLES[index] ?? BAR_STYLES[0];
          return (
            <div key={bar.label} className="flex flex-col gap-[8px]">
              <div className="flex justify-between items-baseline">
                <Text as="span" className="text-[15px] text-[#6b6b6b]">{bar.label}</Text>
                <Text as="span" className={`text-[22px] font-[800] tracking-[-.02em] ${style.value}`}>{bar.value}</Text>
              </div>
              <div className="h-[10px] rounded-[999px] bg-[#f0f0f0] overflow-hidden">
                <div className={`h-full rounded-[999px] ${style.width} ${style.fill}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex pt-[8px]">
        {bodyComp.stats.map((stat, index) => (
          <div key={stat.label} className={`flex flex-col gap-[5px] ${index === 0 ? "pr-[36px]" : "pl-[36px] [border-left:1px_solid_#e5e5e5]"}`}>
            <Text as="div" className="text-[30px] font-[800] text-[#525252] tracking-[-.03em]">{stat.value}</Text>
            <Text as="div" className="text-[13px] text-[#8a8a8a]">{stat.label}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}

function BodyCompCases() {
  const { bodyComp } = COPY;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Text as="div" className={EYEBROW}>{bodyComp.eyebrow}</Text>
        <Text as="h2" size="3xl" weight="bold" className="leading-[1.35] tracking-[-.035em] text-[#161616]">
          {bodyComp.titleLines[0]}
          <br />
          <Text as="span" size="3xl" weight="bold" className="text-[#525252]">{bodyComp.titleLines[1]}</Text>
        </Text>
      </div>

      <div className="flex flex-col gap-5">
        {bodyComp.cases.map((item) => (
          <article key={item.profile} className="overflow-hidden rounded-[22px] border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(0,0,0,.07)] tb:grid tb:grid-cols-[230px_minmax(0,1fr)]">
            <div className="flex flex-col justify-center bg-neutral-100 px-6 py-7 tb:min-h-[230px] tb:px-7">
              <Text size="sm" weight="bold" className="text-neutral-500">{item.profile}</Text>
              <Text as="div" size="display" weight="bold" className="mt-2 tracking-[-.04em] text-neutral-800">{item.loss}</Text>
              <Text size="sm" className="mt-1 text-neutral-500">{item.weight} · {item.period}</Text>
              <Text as="span" size="xs" weight="bold" className="mt-4 w-fit rounded-full border border-neutral-300 bg-white px-3 py-2 text-neutral-600">{item.fat}</Text>
            </div>

            <div className="px-5 py-3 tb:px-8 tb:py-5">
              {item.details.map((detail, index) => (
                <div key={detail.label} className={`grid grid-cols-[58px_minmax(0,1fr)] gap-3 py-3.5 ${index < item.details.length - 1 ? "border-b border-neutral-200" : ""}`}>
                  <Text as="span" size="sm" weight="medium" className="text-neutral-500">{detail.label}</Text>
                  <Text as="span" size="md" weight={detail.label === "한마디" ? "normal" : "medium"} className={`break-keep leading-7 text-neutral-700 ${detail.label === "한마디" ? "italic text-neutral-500" : ""}`}>{detail.value}</Text>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function ResultsSection() {
  return (
    <Section label="Results B - slider" className="bg-white" innerClassName="flex flex-col gap-[44px]">
      {/* 기존 비포·애프터 + 체성분 막대 UI — 비교를 위해 잠시 보존
      <div className="grid grid-cols-1 dt:grid-cols-[520px_1fr] gap-10 dt:gap-[72px] items-center">
        <BeforeAfterCard />
        <BodyCompSummary />
      </div>
      */}
      <BodyCompCases />
    </Section>
  );
}
