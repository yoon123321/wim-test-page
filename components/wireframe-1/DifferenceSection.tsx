"use client";

import Text from "@/components/common/Text";
import { useAB } from "@/components/common/ABProvider";
import { Section } from "./primitives";

/**
 * 히어로 바로 아래 — "왜 하나로 연결되어야 하나" 차별점 인트로.
 * C안에서만 노출한다.
 */
export default function DifferenceSection() {
  const { variant } = useAB();
  if (variant !== "C") return null;

  return (
    <Section label="Difference - why connected" className="bg-[#fafaf8]" innerClassName="flex flex-col items-center text-center">
      {/* 대괄호 라벨 */}
      <Text
        as="div"
        className="flex items-center gap-2 text-[12px] font-[700] tracking-[.14em] text-[#a3805a] tb:text-[13px]"
      >
        <span aria-hidden="true">［</span>
        차별점 · 왜 하나로 연결되어야 하나
        <span aria-hidden="true">］</span>
      </Text>

      {/* 헤드라인 */}
      <Text
        as="h2"
        weight="bold"
        className="mt-6 text-[22px] leading-[1.45] tracking-[-.03em] text-[#161616] tb:text-[28px] dt:text-[34px]"
      >
        비만을 이해하는 것과,
        <br className="tb:hidden" />
        {" "}실제로 빼는 것은
        <br />
        <Text as="span" weight="bold" className="text-[22px] tb:text-[28px] dt:text-[34px] text-[#a3805a]">다른 영역</Text>입니다
      </Text>

      {/* 가는 구분선 */}
      <div className="mt-8 h-px w-10 bg-[#d8cbb8]" />

      {/* 본문 */}
      <div className="mt-8 flex max-w-[600px] flex-col gap-5">
        <Text as="p" className="text-[15px] leading-[1.9] text-[#5a5a5a] text-pretty tb:text-[16px]">
          비만을 의학적으로 이해하는 것과 실제 생활에서 체중을 감량하는 것은 다른 영역입니다.
          하지만 둘 중 하나만으로는 충분하지 않습니다.
        </Text>
        <Text as="p" className="text-[15px] leading-[1.9] text-[#161616] font-[600] text-pretty tb:text-[16px]">
          의학적 판단과 생활관리가 연결될 때,
          <br className="hidden tb:block" />
          {" "}다이어트는 더 편하고, 더 지속 가능해집니다.
        </Text>
      </div>
    </Section>
  );
}
