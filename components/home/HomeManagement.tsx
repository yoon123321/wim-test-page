"use client";

import { useRef, useState } from "react";
import Text from "@/components/common/Text";
import { useAB } from "@/components/common/ABProvider";

const ITEMS = [
  { number: "01", badge: "대면", caption: "주차별 조정 흐름", title: "대면 관리", description: "매주 만나 계획을 다시 맞춥니다", visual: "timeline" },
  { number: "02", badge: "비대면 · 앱", caption: "앱 기록 · 혈당 추적", title: "비대면 관리", description: "매일의 기록을 앱으로 봅니다", visual: "app" },
  { number: "03", badge: "기기", caption: "피로 · 회복 곡선", title: "기기 관리", description: "피로와 부종을 먼저 풀어줍니다", visual: "recovery" },
  { number: "04", badge: "영양", caption: "탄단지 구성", title: "영양 교육", description: "오늘 저녁에 쓸 기준을 배웁니다", visual: "nutrition" },
  { number: "05", badge: "운동", caption: "개인별 운동 가이드", title: "운동 교육", description: "내 몸에 맞는 운동 기준을 배웁니다", visual: "maintain" },
] as const;

function ManagementVisual({ type }: { type: (typeof ITEMS)[number]["visual"] }) {
  if (type === "timeline") return (
    <svg viewBox="0 0 280 130" className="h-28 w-full tb:h-32" aria-hidden="true">
      <path d="M30 70h220" stroke="#d4d4d4" strokeWidth="3"/>
      {[48,108,168,228].map((x, i) => <g key={x}><rect x={x-10} y={42-i*2} width="20" height={28+i*2} rx="7" fill={i === 3 ? "#737373" : "#e5e5e5"}/><circle cx={x} cy="70" r="9" fill="#fafafa" stroke={i === 3 ? "#737373" : "#bdbdbd"} strokeWidth="3"/><text x={x} y="103" textAnchor="middle" fill="#737373" fontSize="11">{i+1}주</text></g>)}
    </svg>
  );
  if (type === "app") return (
    <svg viewBox="0 0 280 130" className="h-28 w-full tb:h-32" aria-hidden="true">
      <rect x="38" y="10" width="66" height="108" rx="16" fill="none" stroke="#a3a3a3" strokeWidth="3"/><path d="M48 91c12-2 14-38 25-38s13 32 23 32" fill="none" stroke="#737373" strokeWidth="4" strokeLinecap="round"/><circle cx="73" cy="53" r="5" fill="#525252"/>
      {[30,55,80,105].map((y,i)=><rect key={y} x="126" y={y} width={[105,78,92,64][i]} height="12" rx="6" fill={i===0 ? "#737373" : "#d4d4d4"}/>)}
    </svg>
  );
  if (type === "recovery") return (
    <svg viewBox="0 0 280 130" className="h-28 w-full tb:h-32" aria-hidden="true">
      <path d="M24 102h232M28 40c36 8 58 66 105 66s74-58 119-72" fill="none" stroke="#737373" strokeWidth="4" strokeLinecap="round"/><path d="M28 72c58 13 141 11 224 2" fill="none" stroke="#d4d4d4" strokeWidth="2" strokeDasharray="5 6"/><circle cx="133" cy="106" r="6" fill="#525252"/>
    </svg>
  );
  if (type === "nutrition") return (
    <svg viewBox="0 0 280 130" className="h-28 w-full tb:h-32" aria-hidden="true">
      <circle cx="105" cy="65" r="43" fill="none" stroke="#e5e5e5" strokeWidth="18"/><path d="M105 22a43 43 0 0 1 39 61" fill="none" stroke="#737373" strokeWidth="18"/><path d="M144 83a43 43 0 0 1-60 18" fill="none" stroke="#a3a3a3" strokeWidth="18"/>
      {[37,64,91].map((y,i)=><g key={y}><circle cx="178" cy={y} r="5" fill={["#737373","#a3a3a3","#e5e5e5"][i]}/><rect x="190" y={y-3} width={[42,34,28][i]} height="6" rx="3" fill="#bdbdbd"/></g>)}
    </svg>
  );
  return (
    <svg viewBox="0 0 280 130" className="h-28 w-full tb:h-32" aria-hidden="true">
      <path d="M35 96c28-2 31-45 55-45 25 0 29 30 54 30s31-23 52-23c19 0 26 15 49 15" fill="none" stroke="#737373" strokeWidth="4" strokeLinecap="round"/><path d="M35 105h210" stroke="#d4d4d4"/><circle cx="90" cy="51" r="5" fill="#525252"/><circle cx="196" cy="58" r="5" fill="#a3a3a3"/>
    </svg>
  );
}

export default function HomeManagement() {
  const { variant } = useAB();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  if (variant !== "E") return null;

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 280) + 16), behavior: "smooth" });
  };

  const updateActive = () => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    setActive(Math.min(ITEMS.length - 1, Math.round(track.scrollLeft / (card.offsetWidth + 16))));
  };

  return (
    <div className="mt-20 border-t border-neutral-300 pt-14">
      <Text as="span" size="xs" weight="bold" className="tracking-[0.18em] text-neutral-500">STEP 02 · 관리</Text>
      <div className="mt-4 flex items-end justify-between gap-5">
        <div>
          <Text as="h3" size="3xl" weight="bold" className="break-keep leading-tight text-neutral-900">맞춤 설계로 이렇게 관리합니다</Text>
          <Text size="sm" className="mt-6 text-neutral-500">{String(active + 1).padStart(2, "0")} / {String(ITEMS.length).padStart(2, "0")} · 옆으로 넘겨 관리 방식을 확인하세요</Text>
        </div>
        <div className="hidden shrink-0 gap-2 tb:flex">
          <button type="button" onClick={() => move(-1)} aria-label="이전 카드" className="grid h-12 w-12 place-items-center rounded-full border border-neutral-300 bg-white text-xl transition hover:bg-neutral-200">←</button>
          <button type="button" onClick={() => move(1)} aria-label="다음 카드" className="grid h-12 w-12 place-items-center rounded-full border border-neutral-300 bg-white text-xl transition hover:bg-neutral-200">→</button>
        </div>
      </div>

      <div ref={trackRef} onScroll={updateActive} className="mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ITEMS.map((item) => (
          <a key={item.number} href="#contact" className="flex min-h-[390px] w-[82vw] max-w-[330px] shrink-0 snap-start flex-col rounded-[28px] border border-dashed border-neutral-300 bg-white p-6 transition hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg tb:w-[calc((100%_-_16px)/2)] tb:max-w-none tb:p-8 dt:w-[calc((100%_-_48px)/4)]">
            <div className="flex items-center justify-between">
              <Text as="span" size="lg" weight="bold" className="text-neutral-400">{item.number}</Text>
              <Text as="span" size="xs" weight="medium" className="whitespace-nowrap rounded-full bg-neutral-100 px-4 py-2 text-neutral-600">{item.badge}</Text>
            </div>
            <div className="mt-8"><ManagementVisual type={item.visual} /></div>
            <Text as="span" size="xs" className="mt-2 text-neutral-500">{item.caption}</Text>
            <div className="mt-auto pt-10">
              <Text as="h4" size="xl" weight="bold" className="text-neutral-900">{item.title}</Text>
              <Text size="sm" className="mt-3 break-keep leading-relaxed text-neutral-600">{item.description}</Text>
              <span className="mt-6 flex justify-end text-sm font-semibold text-neutral-600">자세히 보기&nbsp;→</span>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-2" aria-hidden="true">
        {ITEMS.map((item, index) => <span key={item.number} className={`h-2 rounded-full transition-all ${active === index ? "w-8 bg-neutral-600" : "w-2 bg-neutral-300"}`} />)}
      </div>
    </div>
  );
}
