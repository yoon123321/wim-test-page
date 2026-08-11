import Hero from "@/components/common/Hero";
import { BP_CHECK_CONTENT as CONTENT } from "@/content/bp-check";

export default function Page() {
  return (
    <><Hero imagePosition="center" /><main className="p-5 tb:p-8 dt:p-10 font-sans">
      <h1 className="text-xl font-bold">{CONTENT.title}</h1>

      {/* 현재 구간이 뭔지 색과 글자로 표시 */}
      <div className="mt-6 rounded-lg p-8 text-center text-2xl font-bold text-white bg-rose-500 tb:bg-amber-500 dt:bg-emerald-600">
        <span className="mb:inline hidden">{CONTENT.viewportLabels.mobile}</span>
        <span className="hidden tb-only:inline">{CONTENT.viewportLabels.tablet}</span>
        <span className="hidden dt:inline">{CONTENT.viewportLabels.desktop}</span>
      </div>

      {/* 3단계 레이아웃 변화 */}
      <div className="mt-6 flex flex-col gap-3 tb:flex-row">
        {CONTENT.columns.map((column) => <div key={column} className="flex-1 rounded bg-neutral-200 p-6 text-center">{column}</div>)}
      </div>

      <p className="mt-6 text-sm text-neutral-600">
        {CONTENT.description}
      </p>
    </main></>
  );
}
