'use client';

import { useEffect, useState } from 'react';

/** tb 브레이크포인트(48rem) 미만이면 모바일로 본다 */
const MOBILE_QUERY = '(max-width: 767px)';

function watchViewport(sync: (isMobile: boolean) => void) {
  const query = window.matchMedia(MOBILE_QUERY);
  const handle = () => sync(query.matches);
  handle();
  query.addEventListener('change', handle);
  return () => query.removeEventListener('change', handle);
}

/**
 * 모바일 폭인지. 서버에서도 렌더되는 화면용.
 * 첫 렌더에서는 폭을 알 수 없어 null 이며, 이때는 어느 쪽도 확정하지 않는다.
 */
export function useIsMobileViewport() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => watchViewport(setIsMobile), []);
  return isMobile;
}

/**
 * 모바일 폭인지. 클릭한 뒤에만 마운트되는 화면(모달 등)용.
 * 서버 렌더를 거치지 않으므로 첫 렌더부터 폭을 바로 읽는다.
 */
export function useIsMobileScreen() {
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  );
  useEffect(() => watchViewport(setIsMobile), []);
  return isMobile;
}
