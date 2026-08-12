"use client";

import Text from "@/components/common/Text";
import { useAB } from "@/components/common/ABProvider";
import { WIREFRAME_ONE_TEXT_C } from "@/content/wireframe-1";

/**
 * C안 전용 — 주황색 안내 문구 한 개를 독립 섹션으로 보여준다.
 * index 로 orangeBlocks 중 하나를 선택한다. A·B에서는 렌더링하지 않는다.
 */
export default function OrangeNoticeSection({ index }: { index: number }) {
  const { variant } = useAB();
  if (variant !== "C") return null;

  const block = WIREFRAME_ONE_TEXT_C.bodyComp.orangeBlocks[index];
  if (!block) return null;

  return (
    <section className="bg-[#f5f5f5]">
      <div className="mx-auto flex min-h-[420px] max-w-[760px] flex-col items-center justify-center px-6 py-20 text-center tb:min-h-[520px] tb:py-28">
        <Text
          as="div"
          className="text-[17px] font-[500] leading-[1.95] tracking-[-.01em] text-[#333333] tb:text-[21px]"
        >
          {block}
        </Text>
      </div>
    </section>
  );
}
