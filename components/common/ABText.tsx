"use client";

import { useAB } from "./ABProvider";

/**
 * A/B 문구 전환 컴포넌트 (목업 전용).
 * 헤더의 A/B 토글 값에 따라 a 또는 b 를 보여준다.
 *
 *   <ABText a="상담 신청" b="무료로 내 몸 확인하기" />
 *
 * 문자열뿐 아니라 <br/> 등이 섞인 노드도 넣을 수 있다.
 */
export default function ABText({ a, b }: { a: React.ReactNode; b: React.ReactNode }) {
  const { variant } = useAB();
  return <>{variant === "A" ? a : b}</>;
}
