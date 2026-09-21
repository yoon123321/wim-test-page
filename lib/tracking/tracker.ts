'use client';

/**
 * 클릭 추적 — 테스트 페이지에는 수집 서버가 없어 동작하지 않는 자리만 맞춰 둔다.
 * 본 사이트(wim-homepage-2)의 lib/tracking/tracker.ts 를 그대로 옮기면 실제로 전송된다.
 */
export function trackClickEvent(
  _sectionKey: string,
  _options?: { pageUrl?: string; scrollRatio?: number }
): void {
  // no-op
}
