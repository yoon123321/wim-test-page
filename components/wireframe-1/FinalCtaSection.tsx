import Text from "@/components/common/Text";
import { Section } from "./primitives";

/** 페이지 맨 마지막 — 마무리 CTA · 문의 */
export default function FinalCtaSection() {
  return (
    <Section label="Final CTA" className="bg-[#161616]" innerClassName="flex flex-col items-center text-center">
      {/* 헤드라인 */}
      <Text
        as="h2"
        weight="bold"
        className="text-[24px] leading-[1.4] tracking-[-.03em] text-white tb:text-[30px] dt:text-[38px]"
      >
        평생을 생각하면, 아깝지 않습니다
      </Text>

      {/* 본문 */}
      <Text
        as="p"
        className="mt-6 max-w-[560px] text-[15px] leading-[1.9] text-white/60 text-pretty tb:text-[16px]"
      >
        프로그램은 구성에 따라 가격이 상이합니다.
        <br className="hidden tb:block" />
        {" "}먼저 다이어트 기질 검사로, 나에게 맞는 방향부터 확인해보세요.
      </Text>

      {/* 버튼 */}
      <div className="mt-10 flex w-full max-w-[440px] flex-col gap-3 tb:w-auto tb:flex-row tb:justify-center">
        <button
          type="button"
          className="rounded-full bg-white px-8 py-4 text-[15px] font-[700] tracking-[-.01em] text-[#161616] transition hover:bg-neutral-200"
        >
          무료 기질 검사 받기
        </button>
        <button
          type="button"
          className="rounded-full border border-white/30 bg-transparent px-8 py-4 text-[15px] font-[700] tracking-[-.01em] text-white transition hover:bg-white/10"
        >
          시그니처 12주 프로그램 문의하기
        </button>
      </div>
    </Section>
  );
}
