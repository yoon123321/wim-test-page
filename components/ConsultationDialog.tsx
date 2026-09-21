'use client';

import { useState, type ReactNode } from 'react';
import Modal from '@/components/common/Modal';

interface ConsultationDialogProps {
  trigger: ReactNode;
  trackingKey?: string;
}

/**
 * 상담 신청 다이얼로그 — 테스트 페이지용 자리 채움.
 *
 * 본 사이트(wim-homepage-2)의 ConsultationDialog 는 shadcn/ui · react-hook-form ·
 * zod · 상담 신청 API 까지 물고 있어 이 프로젝트에는 옮기지 않았다.
 * 여기서는 프로젝트에 이미 있는 Modal 로 껍데기만 맞춰 두었고,
 * props(trigger, trackingKey)는 원본과 같아 나중에 그대로 갈아끼울 수 있다.
 */
export default function ConsultationDialog({ trigger }: ConsultationDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} className="contents">
        {trigger}
      </span>
      <Modal open={open} title="상담 신청" onClose={() => setOpen(false)}>
        <p className="text-sm leading-7 text-neutral-600">
          상담 신청 폼이 들어갈 자리입니다. (테스트 페이지에서는 동작하지 않습니다)
        </p>
      </Modal>
    </>
  );
}
