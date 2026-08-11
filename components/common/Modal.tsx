"use client";

import { useEffect, type ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title: string;
  closeLabel?: string;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, title, closeLabel = "닫기", onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/55 p-4" role="presentation" onMouseDown={onClose}>
      <section role="dialog" aria-modal="true" aria-labelledby="common-modal-title" className="w-full max-w-3xl rounded-2xl bg-white p-5 shadow-2xl tb:p-7" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between gap-4">
          <h2 id="common-modal-title" className="text-xl font-bold tb:text-2xl">{title}</h2>
          <button type="button" onClick={onClose} aria-label={closeLabel} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-neutral-300 text-xl text-neutral-600">×</button>
        </div>
        <div className="mt-5">{children}</div>
      </section>
    </div>
  );
}
