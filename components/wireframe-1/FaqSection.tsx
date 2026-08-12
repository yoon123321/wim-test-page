"use client";

import { useState } from "react";
import Text from "@/components/common/Text";
import { WIREFRAME_ONE_TEXT as COPY } from "@/content/wireframe-1";
import { Section } from "./primitives";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { faq } = COPY;

  const toggle = (index: number) => setOpenIndex((current) => (current === index ? null : index));

  return (
    <Section label="FAQ" className="bg-[#fafafa]" innerClassName="flex flex-col gap-[44px]">
      <div className="flex flex-col gap-[16px]">
        <Text as="div" className="text-[15px] font-[600] italic tracking-[.14em] text-[#737373]">{faq.eyebrow}</Text>
        <Text as="div" className="text-[46px] font-[800] tracking-[-.035em] text-[#161616] leading-[1.3]">{faq.title}</Text>
      </div>

      <div className="flex flex-col gap-[14px]">
        {faq.items.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={item.q} className="overflow-hidden rounded-[20px] bg-white shadow-[0_2px_14px_rgba(0,0,0,.06)]">
              <button type="button" onClick={() => toggle(index)} aria-expanded={open} className="flex w-full cursor-pointer items-center justify-between gap-6 px-8 py-[30px] text-left">
                <Text as="span" size="lg" weight="bold" className="tracking-[-.02em] text-[#161616]">{item.q}</Text>
                <Text as="span" className={`text-[22px] text-[#525252] leading-[1] [transition:transform_.2s] ${open ? "rotate-[45deg]" : ""}`}>+</Text>
              </button>
              <Text as="div" className={open ? "block pt-[0] px-[32px] pb-[26px] text-[15px] leading-[1.8] text-[#6b6b6b] text-pretty" : "hidden"}>
                {item.a}
              </Text>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
