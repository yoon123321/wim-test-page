"use client";

import { useState } from "react";
import Hero from "@/components/common/Hero";
import Text from "@/components/common/Text";
import { WIREFRAME_ONE_CARE as CARE, WIREFRAME_ONE_HERO as HERO, WIREFRAME_ONE_TEXT as COPY } from "@/content/wireframe-1";

/* ------------------------------------------------------------------
   WIM 통합 다이어트 타워 — 랜딩 페이지 (Next.js App Router, 단일 파일)
   app/page.tsx 로 저장하면 그대로 동작합니다. (Tailwind CSS 필요)
   이미지 자리는 <Slot />(회색 플레이스홀더)로 두었습니다 —
   next/image 로 교체하세요.
------------------------------------------------------------------- */

function Slot({ label }: { label: string }) {
  return (
    <Text as="div" size="sm" className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#e5e5e5] tracking-[-0.01em] text-[#a3a3a3]">
      {label}
    </Text>
  );
}

const GLOBAL_CSS = `
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
  body { margin: 0; background: #fff; color: #1c1c1c;
    font-family: "Pretendard Variable", system-ui, -apple-system, sans-serif; }
  a { color: #525252; text-decoration: none; }
  a:hover { color: #262626; }
  :focus-visible { outline: 2px solid #525252; outline-offset: 2px; }
  @keyframes worry-marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes worry-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
`;

export default function Page() {
  const [tab, setTab] = useState(0);
  const [faq, setFaq] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [reveal, setReveal] = useState(50);

  const toggleFaq = (k: number) => setFaq((cur) => (cur === k ? null : k));

  const tabStyle = (k: number) =>
    k === tab
      ? "flex items-center justify-center py-[8px] px-[18px] rounded-[999px] bg-[#161616] text-white text-[13px] font-[700] tracking-[-.01em] cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,.16)] [transition:all_.25s]"
      : "flex items-center justify-center py-[8px] px-[18px] rounded-[999px] bg-transparent text-[#8a8a8a] text-[13px] font-[700] tracking-[-.01em] cursor-pointer hover:text-[#404040] [transition:all_.25s]";

  const faqBody = (k: number) =>
    faq === k
      ? "block pt-[0] px-[32px] pb-[26px] text-[15px] leading-[1.8] text-[#6b6b6b] text-pretty"
      : "hidden";

  const faqMark = (k: number) =>
    faq === k
      ? "text-[22px] text-[#525252] leading-[1] rotate-[45deg] [transition:transform_.2s]"
      : "text-[22px] text-[#525252] leading-[1] [transition:transform_.2s]";

  const flipInner =
    "absolute inset-0 [transition:transform_.6s_cubic-bezier(.4,.2,.2,1)] [transform-style:preserve-3d] " +
    (flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]");

  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Hero imagePosition="center" {...HERO} />

      <section data-screen-label="Worries improved A - wall" className="relative overflow-hidden bg-[#0b1020] pt-[90px] pb-0">
        {/* 헤더 */}
        <div className="relative z-[3] mx-auto flex max-w-[760px] flex-col gap-4 px-4 text-center">
          <Text as="div" className="text-[15px] font-[800] tracking-[.08em] text-[#a3a3a3]">{COPY.text016}</Text>
          <Text as="div" size="3xl" weight="bold" className="leading-[1.4] tracking-[-.02em] text-white">
            {COPY.text017}
            <br />
            {COPY.text018}
          </Text>
          <Text as="div" className="text-pretty text-[14px] leading-[1.85] text-white/45 tb:text-[15px]">{COPY.text019}</Text>
        </div>

        {/* 고민의 벽 — 데스크톱 (좌우로 천천히 흐름) */}
        <div className="relative mx-auto mt-[64px] hidden w-full max-w-[1000px] flex-col gap-4 overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] dt:flex">
          <div className="flex w-max gap-4" style={{ animation: "worry-marquee-left 40s linear infinite" }}>
            {[...[COPY.text003, COPY.text004, COPY.text005, COPY.text006, COPY.text007, COPY.text008, COPY.text009], ...[COPY.text003, COPY.text004, COPY.text005, COPY.text006, COPY.text007, COPY.text008, COPY.text009]].map((w, i) => (
              <Text as="span" key={`a-${i}`} className="w-fit whitespace-nowrap rounded-2xl border border-white/[.07] bg-white/[.04] px-6 py-5 text-[16px] text-white/45">{w}</Text>
            ))}
          </div>
          <div className="flex w-max gap-4" style={{ animation: "worry-marquee-right 46s linear infinite" }}>
            {[...[COPY.text010, COPY.text011, COPY.text012, COPY.text013, COPY.text014, COPY.text015], ...[COPY.text010, COPY.text011, COPY.text012, COPY.text013, COPY.text014, COPY.text015]].map((w, i) => (
              <Text as="span" key={`b-${i}`} className="w-fit whitespace-nowrap rounded-2xl border border-white/[.07] bg-white/[.04] px-6 py-5 text-[16px] text-white/45">{w}</Text>
            ))}
          </div>
        </div>

        {/* 고민의 벽 — 모바일/태블릿 */}
        <div className="relative mx-auto mt-10 flex max-h-[220px] flex-wrap justify-center gap-2.5 overflow-hidden px-4 dt:hidden">
          {[COPY.text003, COPY.text004, COPY.text005, COPY.text006, COPY.text007, COPY.text008, COPY.text009, COPY.text010, COPY.text011, COPY.text012, COPY.text013, COPY.text014, COPY.text015].map((w) => (
            <Text as="span" key={w} className="rounded-full border border-white/[.07] bg-white/[.05] px-4 py-2.5 text-[13px] text-white/45">{w}</Text>
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-b from-transparent to-[#0b1020]"></div>
        </div>

        {/* 연결 포인트 + 라인 */}
        <div className="relative z-[3] mt-8 flex flex-col items-center">
          <div className="h-[70px] w-px bg-gradient-to-b from-transparent via-white/25 to-white/60"></div>
          <div className="h-[11px] w-[11px] rounded-full bg-neutral-300 shadow-[0_0_22px_7px_rgba(212,212,212,.5)]"></div>
        </div>

        {/* teal 돔 */}
        <div className="relative -mt-3 overflow-hidden pb-[56px]">
          <div className="absolute left-1/2 top-[40px] h-[1400px] w-[1400px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#8a8a8a] via-[#5a5a5a] to-[#2a2a2a]"></div>
          <div className="relative z-[2] mx-auto flex max-w-[920px] flex-col items-center gap-3 px-4 pt-[64px] text-center tb:pt-[80px]">
            <Text as="div" className="text-[14px] text-white/85 tb:text-[15px]">{COPY.text002}</Text>
            <Text as="div" size="2xl" weight="bold" className="leading-[1.4] tracking-[-.02em] text-white">
              단 {COPY.text020}{COPY.text021}
            </Text>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[COPY.text022, COPY.text024, COPY.text026].map((t) => (
                <Text as="span" key={t} className="rounded-full bg-white px-4 py-2.5 text-[15px] font-[700] tracking-[-.02em] text-[#2a2a2a]">{t}</Text>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Doctor" className="bg-white pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[104px]">
        <div className="w-full max-w-[1160px] mx-auto px-4 tb:px-8 dt:px-0 grid grid-cols-1 tb:grid-cols-[320px_minmax(0,1fr)] dt:grid-cols-[420px_minmax(0,1fr)] gap-10 dt:gap-[64px] items-stretch">
          <div className="relative min-h-[320px] tb:min-h-0 rounded-[28px] overflow-hidden shadow-[0_10px_36px_rgba(0,0,0,.13)]">
            <Slot label={COPY.text028} />
            <div className="absolute left-[20px] bottom-[20px] py-[14px] px-[18px] bg-white rounded-[16px] shadow-[0_6px_20px_rgba(0,0,0,.16)] flex flex-col gap-[3px]">
              <Text as="div" className="text-[15px] font-[800] text-[#161616] tracking-[-.02em]">{COPY.text029}</Text>
              <Text as="div" className="text-[12px] text-[#7a7a7a]">{COPY.text030}</Text>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[12px]">
              <Text as="div" className="text-[11px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text031}</Text>
              <Text as="div" size="3xl" weight="bold" className="tracking-[-.035em] text-[#161616] leading-[1.4]">{COPY.text032}<br />{COPY.text033}</Text>
              <Text as="div" className="text-[16px] leading-[1.8] text-[#6b6b6b] tracking-[-.01em] text-pretty">{COPY.text034}</Text>
            </div>

            <Text as="div" className="py-[26px] px-[30px] bg-[#f7f7f7] rounded-[22px] text-[17px] leading-[1.75] font-[600] text-[#404040] tracking-[-.02em] text-pretty">{COPY.text035}</Text>

            <div className="flex flex-col mt-auto">
              <div className="flex items-center gap-[14px] py-[15px] [border-top:1px_solid_#f0f0f0]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6z"></path><path d="m9 12 2 2 4-4"></path></svg>
                <Text as="div" className="text-[15px] text-[#3c3c3c] tracking-[-.01em]">{COPY.text036}</Text>
              </div>
              <div className="flex items-center gap-[14px] py-[15px] [border-top:1px_solid_#f0f0f0]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <Text as="div" className="text-[15px] text-[#3c3c3c] tracking-[-.01em]">{COPY.text037}</Text>
              </div>
              <div className="flex items-center gap-[14px] py-[15px] [border-top:1px_solid_#f0f0f0] [border-bottom:1px_solid_#f0f0f0]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="8" r="4"></circle><path d="M3 20c0-3.3 3.1-6 7-6"></path><circle cx="17" cy="17" r="3"></circle><path d="m19.2 19.2 1.8 1.8"></path></svg>
                <Text as="div" className="text-[15px] text-[#3c3c3c] tracking-[-.01em]">{COPY.text038}</Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Roadmap 4" className="bg-[#f7f7f7] pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-4 tb:px-8 dt:px-0 flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[10px]">
            <Text as="div" className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text041}</Text>
            <Text as="div" size="3xl" weight="bold" className="tracking-[-.03em] text-[#161616] leading-[1.4]">{COPY.text042}<Text as="span" size="3xl" weight="bold" className="text-[#525252]">{COPY.text043}</Text>{COPY.text044}</Text>
          </div>

          <div className="mt-[46px] hidden px-10 tb:block">
            <div className="relative">
              <div className="absolute left-[63px] right-[63px] top-[23px] h-[3px] rounded-full bg-[#e5e5e5]"></div>
              <div className="relative grid grid-cols-4">
                <div className="flex flex-col items-center gap-[14px]"><Text as="div" className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#525252] text-[16px] font-[800] text-white shadow-[0_0_0_6px_#f7f7f7]">{COPY.text045}</Text><Text as="div" className="whitespace-nowrap text-[13px] font-[700] text-[#525252]">{COPY.text046}</Text></div>
                <div className="flex flex-col items-center gap-[14px]"><Text as="div" className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#525252] text-[16px] font-[800] text-white shadow-[0_0_0_6px_#f7f7f7]">{COPY.text047}</Text><Text as="div" className="whitespace-nowrap text-[13px] font-[700] text-[#525252]">{COPY.text048}</Text></div>
                <div className="flex flex-col items-center gap-[14px]"><Text as="div" className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#525252] text-[16px] font-[800] text-white shadow-[0_0_0_6px_#f7f7f7]">{COPY.text049}</Text><Text as="div" className="whitespace-nowrap text-[13px] font-[700] text-[#525252]">{COPY.text050}</Text></div>
                <div className="flex flex-col items-center gap-[14px]"><Text as="div" className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#525252] text-[16px] font-[800] text-white shadow-[0_0_0_6px_#f7f7f7]">{COPY.text051}</Text><Text as="div" className="whitespace-nowrap text-[13px] font-[700] text-[#525252]">{COPY.text052}</Text></div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 tb:grid-cols-2 dt:grid-cols-4">
            <div className="flex flex-col gap-[12px] py-[32px] px-[28px] bg-white rounded-[24px] shadow-[0_3px_18px_rgba(0,0,0,.06)]">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[#eeeeee] flex items-center justify-center">
                <Text as="span" className="font-[800] tb:hidden">{COPY.text045}</Text><svg className="hidden tb:block" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <Text as="div" className="text-[11px] font-[800] tracking-[.12em] text-[#737373]">{COPY.text053}</Text>
              <Text as="div" className="text-[18px] font-[800] tracking-[-.025em] text-[#161616] leading-[1.45]">{COPY.text054}</Text>
              <Text as="div" className="text-[14px] leading-[1.7] text-[#6b6b6b] text-pretty">{COPY.text055}</Text>
            </div>
            <div className="flex flex-col gap-[12px] py-[32px] px-[28px] bg-white rounded-[24px] shadow-[0_3px_18px_rgba(0,0,0,.06)]">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[#eeeeee] flex items-center justify-center">
                <Text as="span" className="font-[800] tb:hidden">{COPY.text047}</Text><svg className="hidden tb:block" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="8" r="4"></circle><path d="M3 20c0-3.3 3.1-6 7-6"></path><circle cx="17" cy="17" r="3"></circle><path d="m19.2 19.2 1.8 1.8"></path></svg>
              </div>
              <Text as="div" className="text-[11px] font-[800] tracking-[.12em] text-[#737373]">{COPY.text056}</Text>
              <Text as="div" className="text-[18px] font-[800] tracking-[-.025em] text-[#161616] leading-[1.45]">{COPY.text057}</Text>
              <Text as="div" className="text-[14px] leading-[1.7] text-[#6b6b6b] text-pretty">{COPY.text058}</Text>
            </div>
            <div className="flex flex-col gap-[12px] py-[32px] px-[28px] bg-white rounded-[24px] shadow-[0_3px_18px_rgba(0,0,0,.06)]">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[#eeeeee] flex items-center justify-center">
                <Text as="span" className="font-[800] tb:hidden">{COPY.text049}</Text><svg className="hidden tb:block" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"></rect><path d="M11 18h2"></path></svg>
              </div>
              <Text as="div" className="text-[11px] font-[800] tracking-[.12em] text-[#737373]">{COPY.text059}</Text>
              <Text as="div" className="text-[18px] font-[800] tracking-[-.025em] text-[#161616] leading-[1.45]">{COPY.text060}</Text>
              <Text as="div" className="text-[14px] leading-[1.7] text-[#6b6b6b] text-pretty">{COPY.text061}</Text>
            </div>
            <div className="flex flex-col gap-[12px] py-[32px] px-[28px] bg-[#404040] rounded-[24px]">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[rgba(255,255,255,.14)] flex items-center justify-center">
                <Text as="span" className="font-[800] text-white tb:hidden">{COPY.text051}</Text><svg className="hidden tb:block" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4d4d4" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m7 14 3-4 3 3 5-6"></path></svg>
              </div>
              <Text as="div" className="text-[11px] font-[800] tracking-[.12em] text-[#a3a3a3]">{COPY.text062}</Text>
              <Text as="div" className="text-[18px] font-[800] tracking-[-.025em] text-white leading-[1.45]">{COPY.text063}</Text>
              <Text as="div" className="text-[14px] leading-[1.7] text-[#dedede] text-pretty">{COPY.text064}</Text>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Care elements" className="bg-white pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-4 tb:px-8 dt:px-0 flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[10px]">
              <Text as="div" className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text065}</Text>
              <Text as="div" size="3xl" weight="bold" className="tracking-[-.03em] text-[#161616] leading-[1.4]">{COPY.text066}<Text as="span" size="3xl" weight="bold" className="text-[#525252]">{COPY.text067}</Text>{COPY.text068}</Text>
            </div>
            <Text as="div" className="text-[15px] leading-[1.75] text-[#6b6b6b] max-w-[560px] text-pretty">{COPY.text069}</Text>
          </div>

          <div className="inline-flex gap-[4px] p-[4px] bg-[#efefef] rounded-[999px] self-start">
            <div className={tabStyle(0)} onClick={() => setTab(0)}><Text as="span" size="sm" weight="bold">{COPY.text070}</Text></div>
            <div className={tabStyle(1)} onClick={() => setTab(1)}><Text as="span" size="sm" weight="bold">{COPY.text071}</Text></div>
            <div className={tabStyle(2)} onClick={() => setTab(2)}><Text as="span" size="sm" weight="bold">{COPY.text072}</Text></div>
          </div>

          <div className="flex flex-col gap-5 rounded-[24px] bg-[#f7f7f7] px-4 py-6 tb:gap-6 tb:rounded-[32px] tb:px-[52px] tb:py-[48px]">
            <div className="grid grid-cols-1 tb:grid-cols-2 gap-[20px]">
              <div className="flex flex-col gap-[14px] rounded-[20px] bg-white px-5 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:rounded-[24px] tb:px-8 tb:py-[34px]">
                <div className="flex items-center justify-between gap-[16px]">
                  <div className="w-[48px] h-[48px] rounded-[14px] bg-[#eeeeee] flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </div>
                  <Text as="div" className="py-[6px] px-[14px] rounded-[999px] bg-[#f7f7f7] text-[12px] font-[700] text-[#525252] whitespace-nowrap">{CARE[tab].items[0].tag}</Text>
                </div>
                <Text as="div" className="text-[20px] font-[800] tracking-[-.025em] text-[#161616]">{CARE[tab].items[0].t}</Text>
                <Text as="div" className="text-[15px] leading-[1.75] text-[#6b6b6b] text-pretty">{CARE[tab].items[0].d}</Text>
              </div>
              <div className="flex flex-col gap-[14px] rounded-[20px] bg-white px-5 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:rounded-[24px] tb:px-8 tb:py-[34px]">
                <div className="flex items-center justify-between gap-[16px]">
                  <div className="w-[48px] h-[48px] rounded-[14px] bg-[#eeeeee] flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m7 14 3-4 3 3 5-6"></path></svg>
                  </div>
                  <Text as="div" className="py-[6px] px-[14px] rounded-[999px] bg-[#f7f7f7] text-[12px] font-[700] text-[#525252] whitespace-nowrap">{CARE[tab].items[1].tag}</Text>
                </div>
                <Text as="div" className="text-[20px] font-[800] tracking-[-.025em] text-[#161616]">{CARE[tab].items[1].t}</Text>
                <Text as="div" className="text-[15px] leading-[1.75] text-[#6b6b6b] text-pretty">{CARE[tab].items[1].d}</Text>
              </div>
            </div>
          </div>
        </div>
      </section><section data-screen-label="Manager types" className="bg-[#f7f7f7] pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
      <div className="w-full max-w-[1160px] mx-auto px-4 tb:px-8 dt:px-0 flex flex-col gap-[44px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[10px]">
            <Text as="div" className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text073}</Text>
            <Text as="div" size="3xl" weight="bold" className="tracking-[-.03em] text-[#161616] leading-[1.4]">{COPY.text074}<Text as="span" size="3xl" weight="bold" className="text-[#525252]">{COPY.text075}</Text> {COPY.text076}</Text>
          </div>
          <Text as="div" className="text-[15px] leading-[1.75] text-[#6b6b6b] max-w-[560px] text-pretty">{COPY.text077}</Text>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden tb:mx-0 tb:grid tb:grid-cols-3 tb:gap-6 tb:overflow-visible tb:px-0 tb:pb-0">
          <div className="flex w-[85%] shrink-0 snap-center [scroll-snap-stop:always] flex-col rounded-[26px] bg-white p-6 shadow-[0_4px_22px_rgba(0,0,0,.07)] tb:w-auto tb:p-7">
            <div className="flex items-center gap-4"><Text as="div" size="sm" weight="bold" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#eeeeee] text-[#525252]">01</Text><div><Text as="div" className="text-[11px] font-[700] text-[#737373]">{COPY.text079}</Text><Text as="div" className="mt-1 text-[20px] font-[800] tracking-[-.025em] text-[#161616]">{COPY.text080}</Text></div></div>
            <div className="mt-5 flex flex-col gap-4">
              <Text as="div" className="text-[15px] leading-[1.75] text-[#6b6b6b] text-pretty">{COPY.text081}</Text>
              <div className="flex flex-wrap gap-2"><Text as="span" className="rounded-full bg-[#eeeeee] px-3 py-2 text-xs font-[700] text-[#525252]">{COPY.text082}</Text><Text as="span" className="rounded-full bg-[#eeeeee] px-3 py-2 text-xs font-[700] text-[#525252]">{COPY.text083}</Text></div>
            </div>
          </div>

          <div className="flex w-[85%] shrink-0 snap-center [scroll-snap-stop:always] flex-col rounded-[26px] bg-white p-6 shadow-[0_4px_22px_rgba(0,0,0,.07)] tb:w-auto tb:p-7">
            <div className="flex items-center gap-4"><Text as="div" size="sm" weight="bold" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#eeeeee] text-[#525252]">02</Text><div><Text as="div" className="text-[11px] font-[700] text-[#737373]">{COPY.text085}</Text><Text as="div" className="mt-1 text-[20px] font-[800] tracking-[-.025em] text-[#161616]">{COPY.text086}</Text></div></div>
            <div className="mt-5 flex flex-col gap-4">
              <Text as="div" className="text-[15px] leading-[1.75] text-[#6b6b6b] text-pretty">{COPY.text087}</Text>
              <div className="flex flex-wrap gap-2"><Text as="span" className="rounded-full bg-[#eeeeee] px-3 py-2 text-xs font-[700] text-[#525252]">{COPY.text088}</Text><Text as="span" className="rounded-full bg-[#eeeeee] px-3 py-2 text-xs font-[700] text-[#525252]">{COPY.text089}</Text></div>
            </div>
          </div>

          <div className="flex w-[85%] shrink-0 snap-center [scroll-snap-stop:always] flex-col rounded-[26px] bg-white p-6 shadow-[0_4px_22px_rgba(0,0,0,.07)] tb:w-auto tb:p-7">
            <div className="flex items-center gap-4"><Text as="div" size="sm" weight="bold" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#eeeeee] text-[#525252]">03</Text><div><Text as="div" className="text-[11px] font-[700] text-[#737373]">{COPY.text091}</Text><Text as="div" className="mt-1 text-[20px] font-[800] tracking-[-.025em] text-[#161616]">{COPY.text092}</Text></div></div>
            <div className="mt-5 flex flex-col gap-4">
              <Text as="div" className="text-[15px] leading-[1.75] text-[#6b6b6b] text-pretty">{COPY.text093}</Text>
              <div className="flex flex-wrap gap-2"><Text as="span" className="rounded-full bg-[#eeeeee] px-3 py-2 text-xs font-[700] text-[#525252]">{COPY.text094}</Text><Text as="span" className="rounded-full bg-[#eeeeee] px-3 py-2 text-xs font-[700] text-[#525252]">{COPY.text095}</Text></div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section data-screen-label="Results B - slider" className="bg-white pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-4 tb:px-8 dt:px-0 flex flex-col gap-[44px]">
          <div className="grid grid-cols-1 dt:grid-cols-[520px_1fr] gap-10 dt:gap-[72px] items-center">
            <div className="relative w-full max-w-[520px] h-[420px] tb:h-[560px] [perspective:1400px]">
              <div className={flipInner}>
                <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-[#f0f0f0] shadow-[0_10px_40px_rgba(0,0,0,.14)] [backface-visibility:hidden]">
                  <div className="absolute inset-0"><Slot label={COPY.text098} /></div>
                  <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}><Slot label={COPY.text099} /></div>
                  <div className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_14px_rgba(0,0,0,.3)] pointer-events-none" style={{ left: `${reveal}%` }}></div>
                  <Text as="div" className="absolute left-[18px] top-[18px] py-[8px] px-[16px] rounded-[999px] bg-[rgba(0,0,0,.5)] text-white text-[12px] font-[700] tracking-[.08em]">{COPY.text100}</Text>
                  <Text as="div" className="absolute right-[18px] top-[18px] py-[8px] px-[16px] rounded-[999px] bg-[#525252] text-white text-[12px] font-[700] tracking-[.08em]">{COPY.text101}</Text>
                  <input type="range" min={0} max={100} value={reveal} onChange={(e) => setReveal(Number(e.target.value))} className="absolute left-0 right-0 bottom-0 top-0 w-full h-full opacity-0 cursor-[ew-resize] m-[0]" aria-label={COPY.text102} />
                  <div onClick={() => setFlipped((f) => !f)} className="absolute left-[50%] bottom-[22px] -translate-x-1/2 flex items-center gap-[8px] py-[13px] px-[22px] rounded-[999px] bg-[rgba(255,255,255,.94)] text-[#404040] text-[14px] font-[700] tracking-[-.01em] cursor-pointer shadow-[0_6px_20px_rgba(0,0,0,.22)] z-[3]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#404040" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"></path><path d="M21 4v5h-5"></path></svg>
                    <Text as="span" size="sm" weight="bold">{flipped ? COPY.flipToPhoto : COPY.flipToDetails}</Text>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-[#404040] shadow-[0_10px_40px_rgba(0,0,0,.14)] [backface-visibility:hidden] [transform:rotateY(180deg)] py-[44px] px-[40px] flex flex-col items-center justify-center gap-[22px]">
                  <div className="self-start flex flex-col gap-[6px]">
                    <Text as="div" className="text-[11px] font-[700] italic tracking-[.16em] text-[#a3a3a3]">{COPY.text103}</Text>
                    <Text as="div" className="text-[20px] font-[800] text-white tracking-[-.025em]">{COPY.text104}</Text>
                  </div>
                  <svg width="250" height="250" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                    <polygon points="150,40 245.3,95 245.3,205 150,260 54.7,205 54.7,95" stroke="rgba(255,255,255,.22)" strokeWidth="1"></polygon>
                    <polygon points="150,77 213.2,113.5 213.2,186.5 150,223 86.8,186.5 86.8,113.5" stroke="rgba(255,255,255,.16)" strokeWidth="1"></polygon>
                    <polygon points="150,111.5 188.1,128 178.6,166.5 150,199.5 116.7,169.3 121.4,133.5" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.45)" strokeWidth="1.5" strokeDasharray="4 4"></polygon>
                    <polygon points="150,62 221.4,108.8 231,196.8 150,227 73.8,194 78.6,108.8" fill="#a3a3a3" fillOpacity=".28" stroke="#d4d4d4" strokeWidth="2.5"></polygon>
                  </svg>
                  <div className="w-full grid grid-cols-1 tb:grid-cols-2 gap-y-[10px] gap-x-[28px]">
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><Text as="span">{COPY.text105}</Text><Text as="span" className="font-[700] text-white">{COPY.text106}</Text></div>
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><Text as="span">{COPY.text107}</Text><Text as="span" className="font-[700] text-white">{COPY.text108}</Text></div>
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><Text as="span">{COPY.text109}</Text><Text as="span" className="font-[700] text-white">{COPY.text110}</Text></div>
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><Text as="span">{COPY.text111}</Text><Text as="span" className="font-[700] text-white">{COPY.text112}</Text></div>
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><Text as="span">{COPY.text113}</Text><Text as="span" className="font-[700] text-white">{COPY.text114}</Text></div>
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><Text as="span">{COPY.text115}</Text><Text as="span" className="font-[700] text-white">{COPY.text116}</Text></div>
                  </div>
                  <div onClick={() => setFlipped((f) => !f)} className="flex items-center gap-[8px] py-[13px] px-[22px] rounded-[999px] bg-[rgba(255,255,255,.14)] text-white text-[14px] font-[700] tracking-[-.01em] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"></path><path d="M3 4v5h5"></path></svg>
                    <Text as="span" size="sm" weight="bold">{flipped ? COPY.flipToPhoto : COPY.flipToDetails}</Text>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[36px]">
              <div className="flex flex-col gap-[12px]">
                <Text as="div" className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text117}</Text>
                <Text as="div" size="3xl" weight="bold" className="tracking-[-.035em] text-[#161616] leading-[1.35]">{COPY.text118}<br /><Text as="span" size="3xl" weight="bold" className="text-[#525252]">{COPY.text119}</Text></Text>
              </div>

              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex justify-between items-baseline"><Text as="span" className="text-[15px] text-[#6b6b6b]">{COPY.text120}</Text><Text as="span" className="text-[22px] font-[800] text-[#525252] tracking-[-.02em]">{COPY.text121}</Text></div>
                  <div className="h-[10px] rounded-[999px] bg-[#f0f0f0] overflow-hidden"><div className="w-[76%] h-full rounded-[999px] bg-[#525252]"></div></div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex justify-between items-baseline"><Text as="span" className="text-[15px] text-[#6b6b6b]">{COPY.text122}</Text><Text as="span" className="text-[22px] font-[800] text-[#525252] tracking-[-.02em]">{COPY.text123}</Text></div>
                  <div className="h-[10px] rounded-[999px] bg-[#f0f0f0] overflow-hidden"><div className="w-[64%] h-full rounded-[999px] bg-[#525252]"></div></div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex justify-between items-baseline"><Text as="span" className="text-[15px] text-[#6b6b6b]">{COPY.text124}</Text><Text as="span" className="text-[22px] font-[800] text-[#161616] tracking-[-.02em]">{COPY.text125}</Text></div>
                  <div className="h-[10px] rounded-[999px] bg-[#f0f0f0] overflow-hidden"><div className="w-[97%] h-full rounded-[999px] bg-[#d4d4d4]"></div></div>
                </div>
              </div>

              <div className="flex pt-[8px]">
                <div className="flex flex-col gap-[5px] pr-[36px]"><Text as="div" className="text-[30px] font-[800] text-[#525252] tracking-[-.03em]">{COPY.text126}</Text><Text as="div" className="text-[13px] text-[#8a8a8a]">{COPY.text127}</Text></div>
                <div className="flex flex-col gap-[5px] pl-[36px] [border-left:1px_solid_#e5e5e5]"><Text as="div" className="text-[30px] font-[800] text-[#525252] tracking-[-.03em]">{COPY.text128}</Text><Text as="div" className="text-[13px] text-[#8a8a8a]">{COPY.text129}</Text></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Reviews" className="bg-[#f7f7f7] pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-4 tb:px-8 dt:px-0 flex flex-col gap-[40px]">
          <div className="flex flex-col items-start justify-between gap-6 dt:flex-row dt:items-end dt:gap-12">
            <div className="flex min-w-0 flex-col gap-[10px]">
              <Text as="div" className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text130}</Text>
              <Text as="div" size="3xl" weight="bold" className="leading-[1.35] tracking-[-.03em] text-[#161616]">
                {COPY.text131}{" "}
                <Text as="span" size="3xl" weight="bold" className="block text-[#525252] dt:inline">{COPY.text132}</Text>
              </Text>
            </div>
            <div className="flex shrink-0 items-baseline gap-[10px]">
              <Text as="div" className="text-[34px] font-[800] text-[#525252] tracking-[-.035em] leading-[1]">{COPY.text133}</Text>
              <Text as="div" className="text-[14px] text-[#8a8a8a]">{COPY.text134}</Text>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 tb:grid-cols-2 tb:gap-5">
            <div className="flex flex-col gap-3 rounded-[24px] bg-white px-4 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:gap-4 tb:px-7 tb:py-7 dt:px-8 dt:py-[34px]">
              <div className="flex items-center justify-between gap-[16px]">
                <div className="flex gap-[3px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                </div>
                <Text as="div" className="py-[6px] px-[13px] rounded-[999px] bg-[#eeeeee] text-[12px] font-[700] text-[#525252]">{COPY.text135}</Text>
              </div>
              <Text as="div" className="text-[16px] leading-[1.8] text-[#3c3c3c] text-pretty">{COPY.text136}</Text>
              <Text as="div" className="text-[13px] text-[#8a8a8a]">{COPY.text137}</Text>
            </div>

            <div className="flex flex-col gap-3 rounded-[24px] bg-white px-4 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:gap-4 tb:px-7 tb:py-7 dt:px-8 dt:py-[34px]">
              <div className="flex items-center justify-between gap-[16px]">
                <div className="flex gap-[3px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                </div>
                <Text as="div" className="py-[6px] px-[13px] rounded-[999px] bg-[#eeeeee] text-[12px] font-[700] text-[#525252]">{COPY.text138}</Text>
              </div>
              <Text as="div" className="text-[16px] leading-[1.8] text-[#3c3c3c] text-pretty">{COPY.text139}</Text>
              <Text as="div" className="text-[13px] text-[#8a8a8a]">{COPY.text140}</Text>
            </div>

            <div className="flex flex-col gap-3 rounded-[24px] bg-white px-4 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:gap-4 tb:px-7 tb:py-7 dt:px-8 dt:py-[34px]">
              <div className="flex items-center justify-between gap-[16px]">
                <div className="flex gap-[3px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                </div>
                <Text as="div" className="py-[6px] px-[13px] rounded-[999px] bg-[#eeeeee] text-[12px] font-[700] text-[#525252]">{COPY.text141}</Text>
              </div>
              <Text as="div" className="text-[16px] leading-[1.8] text-[#3c3c3c] text-pretty">{COPY.text142}</Text>
              <Text as="div" className="text-[13px] text-[#8a8a8a]">{COPY.text143}</Text>
            </div>

            <div className="flex flex-col gap-3 rounded-[24px] bg-white px-4 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:gap-4 tb:px-7 tb:py-7 dt:px-8 dt:py-[34px]">
              <div className="flex items-center justify-between gap-[16px]">
                <div className="flex gap-[3px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                </div>
                <Text as="div" className="py-[6px] px-[13px] rounded-[999px] bg-[#eeeeee] text-[12px] font-[700] text-[#525252]">{COPY.text144}</Text>
              </div>
              <Text as="div" className="text-[16px] leading-[1.8] text-[#3c3c3c] text-pretty">{COPY.text145}</Text>
              <Text as="div" className="text-[13px] text-[#8a8a8a]">{COPY.text146}</Text>
            </div>

            <div className="col-span-1 flex flex-col items-start gap-4 rounded-[24px] bg-[#404040] px-4 py-6 tb:col-span-2 tb:flex-row tb:items-center tb:gap-7 tb:px-8 tb:py-8">
              <div className="flex gap-[3px] flex-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
              </div>
              <Text as="div" className="text-[18px] leading-[1.75] font-[600] text-white tracking-[-.02em] text-pretty">{COPY.text147}</Text>
              <Text as="div" size="sm" className="flex-none text-left text-[#bdbdbd] tb:ml-auto tb:text-right">{COPY.text148}<br />{COPY.text149}</Text>
            </div>
          </div>
          <Text as="div" className="text-[12px] text-[#8a8a8a]">{COPY.text150}</Text>
        </div>
      </section>

      <section data-screen-label="Plans" className="bg-[#fafafa] pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-4 tb:px-8 dt:px-0 flex flex-col gap-[44px]">
          <div className="flex flex-col gap-[14px]">
            <Text as="div" className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text151}</Text>
            <Text as="div" size="3xl" weight="bold" className="tracking-[-.03em] text-[#161616] leading-[1.4]">{COPY.text152}<br /><Text as="span" size="3xl" weight="bold" className="text-[#525252]">{COPY.text153}</Text></Text>
            <Text as="div" size="md" className="leading-[1.8] text-[#6b6b6b] tracking-[-.01em]">{COPY.text154}<br />{COPY.text155}</Text>
          </div>

          <div className="grid grid-cols-1 tb:grid-cols-3 gap-[24px] items-stretch">
            <div className="flex flex-col gap-[26px] pt-[36px] px-[34px] pb-[34px] bg-white rounded-[22px] shadow-[0_4px_20px_rgba(0,0,0,.07)]">
              <div className="flex flex-col gap-[10px]">
                <Text as="div" className="text-[14px] italic font-[600] text-[#737373] tracking-[-.01em]">{COPY.text156}</Text>
                <Text as="div" className="text-[23px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text157}</Text>
                <Text as="div" className="text-[14px] leading-[1.7] text-[#7a7a7a]">{COPY.text158}</Text>
              </div>
              <div className="flex flex-col">
                <Text as="div" className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text159}</Text>                <Text as="div" className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text160}</Text>                <Text as="div" className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text161}</Text>                <Text as="div" className="flex gap-[12px] py-[14px] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text162}</Text>              </div>
              <div className="flex flex-col gap-[6px] mt-auto">
                <Text as="div" className="text-[13px] text-[#9a9a9a]">{COPY.text163}</Text>
                <Text as="div" className="text-[22px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text164}</Text>
              </div>
              <a href="#" className="flex items-center justify-center h-[52px] rounded-[999px] bg-white text-[#525252] [border:1.5px_solid_#d4d4d4]"><Text as="span" size="md" weight="bold">{COPY.text165}</Text></a>
            </div>

            <div className="relative flex flex-col gap-[26px] pt-[36px] px-[34px] pb-[34px] bg-white rounded-[22px] [border:2px_solid_#525252] shadow-[0_8px_28px_rgba(0,0,0,.10)]">
              <Text as="div" className="absolute left-[50%] top-[-15px] -translate-x-1/2 py-[7px] px-[16px] rounded-[999px] bg-[#404040] text-white text-[12px] font-[700] whitespace-nowrap">{COPY.text166}</Text>
              <div className="flex flex-col gap-[10px]">
                <Text as="div" className="text-[14px] italic font-[600] text-[#737373] tracking-[-.01em]">{COPY.text167}</Text>
                <Text as="div" className="text-[23px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text168}</Text>
                <Text as="div" className="text-[14px] leading-[1.7] text-[#7a7a7a]">{COPY.text169}</Text>
              </div>
              <div className="flex flex-col">
                <Text as="div" className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text170}</Text>                <Text as="div" className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text171}</Text>                <Text as="div" className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text172}</Text>                <Text as="div" className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text173}</Text>                <Text as="div" className="flex gap-[12px] py-[14px] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text174}</Text>              </div>
              <div className="flex flex-col gap-[6px] mt-auto">
                <Text as="div" className="text-[13px] text-[#9a9a9a]">{COPY.text175}</Text>
                <Text as="div" className="text-[22px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text176}</Text>
              </div>
              <a href="#" className="flex items-center justify-center h-[52px] rounded-[999px] bg-[#404040] text-white"><Text as="span" size="md" weight="bold">{COPY.text177}</Text></a>
            </div>

            <div className="flex flex-col gap-[26px] pt-[36px] px-[34px] pb-[34px] bg-white rounded-[22px] shadow-[0_4px_20px_rgba(0,0,0,.07)]">
              <div className="flex flex-col gap-[10px]">
                <Text as="div" className="text-[14px] italic font-[600] text-[#737373] tracking-[-.01em]">{COPY.text178}</Text>
                <Text as="div" className="text-[23px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text179}</Text>
                <Text as="div" className="text-[14px] leading-[1.7] text-[#7a7a7a]">{COPY.text180}</Text>
              </div>
              <div className="flex flex-col">
                <Text as="div" className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text181}</Text>                <Text as="div" className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text182}</Text>                <Text as="div" className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text183}</Text>                <Text as="div" className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text184}</Text>                <Text as="div" className="flex gap-[12px] py-[14px] text-[14px] text-[#4a4a4a]"><Text as="span" className="text-[#525252] font-[700]">✓</Text>{COPY.text185}</Text>              </div>
              <div className="flex flex-col gap-[6px] mt-auto">
                <Text as="div" className="text-[13px] text-[#9a9a9a]">{COPY.text186}</Text>
                <Text as="div" className="text-[22px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text187}</Text>
              </div>
              <a href="#" className="flex items-center justify-center h-[52px] rounded-[999px] bg-white text-[#525252] [border:1.5px_solid_#d4d4d4]"><Text as="span" size="md" weight="bold">{COPY.text188}</Text></a>
            </div>
          </div>

          <Text as="div" size="sm" className="py-[26px] px-[30px] bg-[#f5f5f5] rounded-[18px] leading-[1.8] text-[#4a4a4a] text-pretty"><Text as="span" weight="bold" className="text-[#404040]">{COPY.text189}</Text> {COPY.text190}</Text>
        </div>
      </section>

      <section data-screen-label="FAQ" className="bg-[#fafafa] pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-4 tb:px-8 dt:px-0 flex flex-col gap-[44px]">
          <div className="flex flex-col gap-[16px]">
            <Text as="div" className="text-[15px] font-[600] italic tracking-[.14em] text-[#737373]">{COPY.text191}</Text>
            <Text as="div" className="text-[46px] font-[800] tracking-[-.035em] text-[#161616] leading-[1.3]">{COPY.text192}</Text>
          </div>

          <div className="flex flex-col gap-[14px]">
            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(0)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <Text as="div" className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text193}</Text>
                <Text as="div" className={faqMark(0)}>+</Text>
              </div>
              <Text as="div" className={faqBody(0)}>{COPY.text194}</Text>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(1)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <Text as="div" className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text195}</Text>
                <Text as="div" className={faqMark(1)}>+</Text>
              </div>
              <Text as="div" className={faqBody(1)}>{COPY.text196}</Text>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(2)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <Text as="div" className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text197}</Text>
                <Text as="div" className={faqMark(2)}>+</Text>
              </div>
              <Text as="div" className={faqBody(2)}>{COPY.text198}</Text>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(3)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <Text as="div" className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text199}</Text>
                <Text as="div" className={faqMark(3)}>+</Text>
              </div>
              <Text as="div" className={faqBody(3)}>{COPY.text200}</Text>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(4)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <Text as="div" className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text201}</Text>
                <Text as="div" className={faqMark(4)}>+</Text>
              </div>
              <Text as="div" className={faqBody(4)}>{COPY.text202}</Text>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(5)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <Text as="div" className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text203}</Text>
                <Text as="div" className={faqMark(5)}>+</Text>
              </div>
              <Text as="div" className={faqBody(5)}>{COPY.text204}</Text>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
