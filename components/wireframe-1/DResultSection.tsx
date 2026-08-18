"use client";

import Text from "@/components/common/Text";
import { useAB } from "@/components/common/ABProvider";
import { Section } from "./primitives";

/** 이미지 업로드 자리 (점선 플레이스홀더) */
function PhotoSlot({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-[16px] border-2 border-dashed border-[#d4d4d4] bg-[#f0f0f0] text-[#a3a3a3]">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.6" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <Text as="div" weight="bold" className="text-[13px] tracking-[.06em] text-[#525252]">{label}</Text>
      <Text as="div" className="text-[12px]">or <span className="underline">browse files</span></Text>
    </div>
  );
}

/**
 * D안 전용 — "우리는 실제로 빼줍니다" Before/After 비교.
 * DifferenceSection(고민의 벽 아래) 다음에 배치한다.
 */
export default function DResultSection() {
  const { variant } = useAB();
  if (variant !== "D" && variant !== "E") return null;

  return (
    <Section label="D - real result" className="bg-[#fafafa]" innerClassName="flex flex-col">
      {/* 회원 뱃지 */}
      <Text as="div" weight="bold" className="w-fit rounded-full bg-[#f0f0f0] px-4 py-2 text-[13px] tracking-[-.01em] text-[#525252]">
        회원 김OO (34) · 12주 기록
      </Text>

      {/* 헤드라인 */}
      <Text as="h2" weight="bold" className="mt-6 text-[36px] leading-[1.15] tracking-[-.03em] text-[#161616] tb:text-[48px] dt:text-[58px]">
        우리는 실제로 빼줍니다
      </Text>

      {/* 본문 */}
      <Text as="p" className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-[#6b6b6b] text-pretty tb:text-[16px]">
        보정하지 않은 사진 두 장과 체중계 기록입니다. 같은 조명, 같은 자세, 같은 옷으로 촬영했습니다.
      </Text>

      {/* 사진 두 장 + 중앙 12주 뱃지 */}
      <div className="relative mx-auto mt-12 grid w-full max-w-[600px] grid-cols-2 gap-6 tb:gap-12">
        {/* BEFORE */}
        <div className="flex flex-col">
          <PhotoSlot label="BEFORE" />
          <Text as="div" className="mt-4 text-[12px] tracking-[.02em] text-[#8a8a8a] tb:text-[13px]">BEFORE · 2026.03.02</Text>
          <Text as="div" weight="bold" className="mt-1 text-[24px] tracking-[-.02em] text-[#2a2a2a] tb:text-[30px]">68.4kg</Text>
        </div>

        {/* AFTER */}
        <div className="flex flex-col">
          <PhotoSlot label="AFTER" />
          <Text as="div" className="mt-4 text-[12px] tracking-[.02em] text-[#525252] tb:text-[13px]">AFTER · 2026.05.25</Text>
          <Text as="div" weight="bold" className="mt-1 text-[24px] tracking-[-.02em] text-[#161616] tb:text-[30px]">55.1kg</Text>
        </div>

        {/* 중앙 12주 원형 뱃지 (태블릿+) */}
        <div className="absolute left-1/2 top-[38%] hidden h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#404040] text-[13px] font-[700] text-white shadow-[0_6px_18px_rgba(0,0,0,.22)] tb:flex">
          12주
        </div>
      </div>

      {/* 구분선 */}
      <div className="mt-14 h-px w-full bg-[#e5e5e5]" />

      {/* 지표 3종 */}
      <div className="mt-8 grid grid-cols-1 gap-8 tb:grid-cols-3">
        {[
          { label: "체지방률", value: "34.8% → 24.1%" },
          { label: "골격근량", value: "22.1kg → 22.4kg" },
          { label: "허리둘레", value: "86cm → 70cm" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <Text as="div" className="text-[14px] text-[#8a8a8a]">{stat.label}</Text>
            <Text as="div" weight="bold" className="text-[24px] tracking-[-.02em] text-[#161616] tb:text-[26px]">{stat.value}</Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
