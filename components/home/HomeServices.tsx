"use client";

import { useState } from "react";
import Modal from "@/components/common/Modal";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import Text from "@/components/common/Text";
import { HOME_CONTENT as CONTENT } from "@/content/home";

const HEADING = "font-['Gowun_Batang',serif] font-bold tracking-[-0.02em]";

export default function HomeServices() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = CONTENT.services.items.find((item) => item.id === selectedId);

  return (
    <>
      <section id="services">
        <div className="bg-neutral-100 px-4 py-16 tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-[72px]">
          <div className="mb-11 flex max-w-[740px] flex-col gap-3">
            <Text as="h2" size="3xl" weight="bold" className={`${HEADING} break-keep leading-tight`}>{CONTENT.services.title}</Text>
            <Text size="md" className="leading-relaxed text-neutral-600">{CONTENT.services.description}</Text>
          </div>
          <div className="grid grid-cols-1 gap-5 tb:grid-cols-2">
            {CONTENT.services.items.map((item, index) => (
              <RevealOnScroll key={item.id} delay={index * 90}>
              <article className="relative h-[280px] rounded-xl border border-dashed border-neutral-300 bg-neutral-100">
                <div className="absolute inset-x-5 bottom-5 flex flex-col gap-2">
                  <Text as="h3" size="xl" weight="bold" className={`${HEADING} leading-snug text-neutral-900`}>{item.title}</Text>
                  <Text size="sm" className="leading-relaxed text-neutral-600">{item.desc}</Text>
                  <button
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className="flex self-end text-[13px] font-medium text-neutral-500 underline-offset-4 transition hover:text-neutral-900 hover:underline"
                  >
                    <Text as="span" size="sm" weight="medium">{CONTENT.services.buttonLabel}</Text>
                  </button>
                </div>
              </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Modal
        open={selectedItem !== undefined}
        title={selectedItem?.title ?? ""}
        closeLabel={CONTENT.services.modal.closeLabel}
        onClose={() => setSelectedId(null)}
      >
        <div className="grid min-h-52 place-items-center rounded-xl border border-dashed border-neutral-300 bg-neutral-100 p-6 text-center text-sm leading-7 text-neutral-500">
          <Text size="sm" className="leading-7 text-neutral-500">{CONTENT.services.modal.placeholder}</Text>
        </div>
      </Modal>
    </>
  );
}
