"use client";

import { useEffect, useState } from "react";
import { COMMON_CONTENT } from "@/content/common";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 360);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={COMMON_CONTENT.scrollToTopLabel}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-20 right-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-lg transition-[opacity,transform,background-color] duration-300 hover:bg-neutral-100 tb:bottom-6 tb:right-6 dt:bottom-8 dt:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="m5 12 5-5 5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
