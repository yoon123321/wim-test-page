"use client";

import { useState } from "react";
import Modal from "@/components/common/Modal";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import Text from "@/components/common/Text";
import { useHomeContent } from "@/components/home/useHomeContent";
import HomeDiagnostics from "@/components/home/HomeDiagnostics";
import HomeManagement from "@/components/home/HomeManagement";

const HEADING = "font-['Gowun_Batang',serif] font-bold tracking-[-0.02em]";

export default function HomeServices() {
  const CONTENT = useHomeContent();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = CONTENT.services.items.find((item) => item.id === selectedId);

  return (
    <>
      <section id="services">
        <div className="bg-neutral-100 px-4 py-16 tb:px-10 tb:py-20 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-[72px]">
          <div className="mb-4 flex max-w-[740px] flex-col gap-3">
            <Text as="h2" size="3xl" weight="bold" className={`${HEADING} break-keep leading-tight`}>{CONTENT.services.title}</Text>
            <Text size="md" className="leading-relaxed text-neutral-600">{CONTENT.services.description}</Text>
          </div>
          <HomeDiagnostics />
          <HomeManagement />
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
