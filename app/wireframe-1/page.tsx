import DefaultView from "@/components/wireframe-1/DefaultView";
import WireframeEView from "@/components/wireframe-1/WireframeEView";

/* ------------------------------------------------------------------
   WIM 통합 다이어트 타워 — 랜딩 페이지
   A/B/C/D 안은 DefaultView(섹션 조합), E안은 WireframeEView(단일 파일)로 분기.
------------------------------------------------------------------- */

export default function Page() {
  return (
    <>
      <DefaultView />
      <WireframeEView />
    </>
  );
}
