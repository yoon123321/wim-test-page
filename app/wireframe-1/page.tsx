"use client";

import { useState } from "react";
import Hero from "@/components/common/Hero";
import { WIREFRAME_ONE_CARE as CARE, WIREFRAME_ONE_TEXT as COPY } from "@/content/wireframe-1";

/* ------------------------------------------------------------------
   WIM 통합 다이어트 타워 — 랜딩 페이지 (Next.js App Router, 단일 파일)
   app/page.tsx 로 저장하면 그대로 동작합니다. (Tailwind CSS 필요)
   이미지 자리는 <Slot />(회색 플레이스홀더)로 두었습니다 —
   next/image 로 교체하세요.
------------------------------------------------------------------- */

function Slot({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#e5e5e5] text-[13px] tracking-[-0.01em] text-[#a3a3a3]">
      {label}
    </div>
  );
}

const GLOBAL_CSS = `
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
  body { margin: 0; background: #fff; color: #1c1c1c;
    font-family: "Pretendard Variable", system-ui, -apple-system, sans-serif; }
  a { color: #525252; text-decoration: none; }
  a:hover { color: #262626; }
  :focus-visible { outline: 2px solid #525252; outline-offset: 2px; }
`;

export default function Page() {
  const [tab, setTab] = useState(0);
  const [faq, setFaq] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [reveal, setReveal] = useState(50);

  const toggleFaq = (k: number) => setFaq((cur) => (cur === k ? null : k));

  const tabStyle = (k: number) =>
    k === tab
      ? "flex items-center justify-center py-[15px] px-[34px] rounded-[999px] bg-[#525252] text-white text-[16px] font-[700] tracking-[-.01em] cursor-pointer [transition:all_.2s]"
      : "flex items-center justify-center py-[15px] px-[34px] rounded-[999px] bg-white text-[#737373] text-[16px] font-[700] tracking-[-.01em] cursor-pointer shadow-[inset_0_0_0_1.5px_#e5e5e5] [transition:all_.2s]";

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
      <Hero imagePosition="center" />

      <section data-screen-label="Worries improved A - wall" className="bg-[#f0f0f0] pt-[100px] pb-[96px]">
        <div className="w-full max-w-[1160px] mx-auto px-5 tb:px-8 dt:px-0 flex items-center gap-[12px] pb-[36px]">
          <div className="py-[6px] px-[12px] rounded-[999px] bg-[#525252] text-white text-[11px] font-[700] tracking-[.08em]">{COPY.text001}</div>
          <div className="text-[14px] text-[#8a8a8a]">{COPY.text002}</div>
        </div>

        <div className="relative w-full max-w-[1160px] h-[320px] tb:h-[420px] mx-auto overflow-hidden">
          <div className="absolute left-0 right-0 bottom-0 h-[150px] bg-[linear-gradient(180deg,rgba(240,240,240,0)_0%,rgba(240,240,240,.92)_68%,#f0f0f0_100%)] z-[2]"></div>
          <div className="absolute left-[10px] top-[6px] rotate-[-3deg] bg-white text-[#8f8f8f] text-[15px] py-[16px] px-[24px] rounded-[999px_999px_6px_999px] shadow-[0_3px_14px_rgba(0,0,0,.07)] whitespace-nowrap opacity-[.6]">{COPY.text003}</div>
          <div className="absolute left-[330px] top-0 rotate-[2deg] bg-white text-[#8f8f8f] text-[15px] py-[16px] px-[24px] rounded-[999px_999px_999px_6px] shadow-[0_3px_14px_rgba(0,0,0,.07)] whitespace-nowrap opacity-[.6]">{COPY.text004}</div>
          <div className="absolute left-[700px] top-[10px] rotate-[-2deg] bg-white text-[#8f8f8f] text-[15px] py-[16px] px-[24px] rounded-[999px_999px_999px_6px] shadow-[0_3px_14px_rgba(0,0,0,.07)] whitespace-nowrap opacity-[.6]">{COPY.text005}</div>
          <div className="absolute left-[960px] top-[2px] rotate-[3deg] bg-white text-[#8f8f8f] text-[15px] py-[16px] px-[24px] rounded-[999px_999px_6px_999px] shadow-[0_3px_14px_rgba(0,0,0,.07)] whitespace-nowrap opacity-[.6]">{COPY.text006}</div>

          <div className="absolute left-[76px] top-[74px] rotate-[-2deg] bg-white text-[#6b6b6b] text-[17px] py-[19px] px-[28px] rounded-[999px_999px_6px_999px] shadow-[0_4px_18px_rgba(0,0,0,.09)] whitespace-nowrap opacity-[.85]">{COPY.text007}</div>
          <div className="absolute left-[470px] top-[66px] rotate-[2deg] bg-white text-[#6b6b6b] text-[17px] py-[19px] px-[28px] rounded-[999px_999px_999px_6px] shadow-[0_4px_18px_rgba(0,0,0,.09)] whitespace-nowrap opacity-[.85]">{COPY.text008}</div>
          <div className="absolute left-[872px] top-[80px] rotate-[-3deg] bg-white text-[#6b6b6b] text-[17px] py-[19px] px-[28px] rounded-[999px_999px_999px_6px] shadow-[0_4px_18px_rgba(0,0,0,.09)] whitespace-nowrap opacity-[.85]">{COPY.text009}</div>

          <div className="absolute left-[16px] top-[158px] rotate-[1deg] bg-white text-[#3c3c3c] text-[19px] font-[600] py-[22px] px-[32px] rounded-[999px_999px_6px_999px] shadow-[0_6px_26px_rgba(0,0,0,.13)] whitespace-nowrap">{COPY.text010}</div>
          <div className="absolute left-[396px] top-[170px] rotate-[-2deg] bg-[#404040] text-white text-[19px] font-[600] py-[22px] px-[32px] rounded-[999px_999px_999px_6px] shadow-[0_8px_30px_rgba(0,0,0,.28)] whitespace-nowrap">{COPY.text011}</div>
          <div className="absolute left-[812px] top-[162px] rotate-[2deg] bg-white text-[#3c3c3c] text-[19px] font-[600] py-[22px] px-[32px] rounded-[999px_999px_999px_6px] shadow-[0_6px_26px_rgba(0,0,0,.13)] whitespace-nowrap">{COPY.text012}</div>

          <div className="absolute left-[120px] top-[256px] rotate-[-1deg] bg-white text-[#4a4a4a] text-[17px] py-[19px] px-[28px] rounded-[999px_999px_6px_999px] shadow-[0_4px_18px_rgba(0,0,0,.09)] whitespace-nowrap">{COPY.text013}</div>
          <div className="absolute left-[530px] top-[268px] rotate-[2deg] bg-white text-[#4a4a4a] text-[17px] py-[19px] px-[28px] rounded-[999px_999px_999px_6px] shadow-[0_4px_18px_rgba(0,0,0,.09)] whitespace-nowrap">{COPY.text014}</div>
          <div className="absolute left-[880px] top-[258px] rotate-[-2deg] bg-white text-[#4a4a4a] text-[17px] py-[19px] px-[28px] rounded-[999px_999px_999px_6px] shadow-[0_4px_18px_rgba(0,0,0,.09)] whitespace-nowrap">{COPY.text015}</div>
        </div>

        <div className="w-full max-w-[1160px] mt-[24px] mx-auto mb-[0] relative z-[3] pt-8 px-5 pb-8 tb:pt-[40px] tb:px-[52px] tb:pb-[46px] bg-white rounded-[28px] shadow-[0_8px_44px_rgba(0,0,0,.10)] flex flex-col gap-[26px]">
          <div className="flex items-end justify-between gap-[40px]">
            <div className="flex flex-col gap-[8px] max-w-[600px]">
              <div className="text-[10px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text016}</div>
              <div className="text-[22px] font-[800] tracking-[-.03em] text-[#161616] leading-[1.45]">{COPY.text017}<span className="text-[#525252]">{COPY.text018}</span></div>
              <div className="text-[14px] leading-[1.65] text-[#6b6b6b] tracking-[-.01em] text-pretty">{COPY.text019}</div>
            </div>
            <div className="flex-none flex items-baseline gap-[8px]">
              <div className="text-[26px] font-[800] text-[#525252] tracking-[-.035em] leading-[1]">{COPY.text020}</div>
              <div className="text-[13px] text-[#8a8a8a]">{COPY.text021}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 tb:grid-cols-3 gap-[18px]">
            <div className="flex flex-col gap-[12px] py-[26px] px-[24px] bg-[#f7f7f7] rounded-[20px]">
              <div className="w-[46px] h-[46px] rounded-[999px] bg-white flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <div className="text-[17px] font-[800] tracking-[-.025em] text-[#161616]">{COPY.text022}</div>
              <div className="text-[14px] leading-[1.65] text-[#6b6b6b] text-pretty">{COPY.text023}</div>
            </div>
            <div className="flex flex-col gap-[12px] py-[26px] px-[24px] bg-[#f7f7f7] rounded-[20px]">
              <div className="w-[46px] h-[46px] rounded-[999px] bg-white flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="8" r="4"></circle><path d="M3 20c0-3.3 3.1-6 7-6"></path><circle cx="17" cy="17" r="3"></circle><path d="m19.2 19.2 1.8 1.8"></path></svg>
              </div>
              <div className="text-[17px] font-[800] tracking-[-.025em] text-[#161616]">{COPY.text024}</div>
              <div className="text-[14px] leading-[1.65] text-[#6b6b6b] text-pretty">{COPY.text025}</div>
            </div>
            <div className="flex flex-col gap-[12px] py-[26px] px-[24px] bg-[#f7f7f7] rounded-[20px]">
              <div className="w-[46px] h-[46px] rounded-[999px] bg-white flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m7 14 3-4 3 3 5-6"></path></svg>
              </div>
              <div className="text-[17px] font-[800] tracking-[-.025em] text-[#161616]">{COPY.text026}</div>
              <div className="text-[14px] leading-[1.65] text-[#6b6b6b] text-pretty">{COPY.text027}</div>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Doctor" className="bg-white pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[104px]">
        <div className="w-full max-w-[1160px] mx-auto px-5 tb:px-8 dt:px-0 grid grid-cols-1 tb:grid-cols-[320px_minmax(0,1fr)] dt:grid-cols-[420px_minmax(0,1fr)] gap-10 dt:gap-[64px] items-stretch">
          <div className="relative rounded-[28px] overflow-hidden shadow-[0_10px_36px_rgba(0,0,0,.13)]">
            <Slot label={COPY.text028} />
            <div className="absolute left-[20px] bottom-[20px] py-[14px] px-[18px] bg-white rounded-[16px] shadow-[0_6px_20px_rgba(0,0,0,.16)] flex flex-col gap-[3px]">
              <div className="text-[15px] font-[800] text-[#161616] tracking-[-.02em]">{COPY.text029}</div>
              <div className="text-[12px] text-[#7a7a7a]">{COPY.text030}</div>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[12px]">
              <div className="text-[11px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text031}</div>
              <div className="text-[32px] font-[800] tracking-[-.035em] text-[#161616] leading-[1.4]">{COPY.text032}<br />{COPY.text033}</div>
              <div className="text-[16px] leading-[1.8] text-[#6b6b6b] tracking-[-.01em] text-pretty">{COPY.text034}</div>
            </div>

            <div className="py-[26px] px-[30px] bg-[#f7f7f7] rounded-[22px] text-[17px] leading-[1.75] font-[600] text-[#404040] tracking-[-.02em] text-pretty">{COPY.text035}</div>

            <div className="flex flex-col mt-auto">
              <div className="flex items-center gap-[14px] py-[15px] [border-top:1px_solid_#f0f0f0]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6z"></path><path d="m9 12 2 2 4-4"></path></svg>
                <div className="text-[15px] text-[#3c3c3c] tracking-[-.01em]">{COPY.text036}</div>
              </div>
              <div className="flex items-center gap-[14px] py-[15px] [border-top:1px_solid_#f0f0f0]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <div className="text-[15px] text-[#3c3c3c] tracking-[-.01em]">{COPY.text037}</div>
              </div>
              <div className="flex items-center gap-[14px] py-[15px] [border-top:1px_solid_#f0f0f0] [border-bottom:1px_solid_#f0f0f0]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="8" r="4"></circle><path d="M3 20c0-3.3 3.1-6 7-6"></path><circle cx="17" cy="17" r="3"></circle><path d="m19.2 19.2 1.8 1.8"></path></svg>
                <div className="text-[15px] text-[#3c3c3c] tracking-[-.01em]">{COPY.text038}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Roadmap 4" className="bg-[#f7f7f7] pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-5 tb:px-8 dt:px-0 flex flex-col gap-[16px]">
          <div className="flex items-center gap-[12px] pb-[22px]">
            <div className="py-[6px] px-[12px] rounded-[999px] bg-[#525252] text-white text-[11px] font-[700] tracking-[.08em]">{COPY.text039}</div>
            <div className="text-[14px] text-[#8a8a8a]">{COPY.text040}</div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text041}</div>
            <div className="text-[34px] font-[800] tracking-[-.03em] text-[#161616] leading-[1.4]">{COPY.text042}<span className="text-[#525252]">{COPY.text043}</span>{COPY.text044}</div>
          </div>

          <div className="relative mt-9 px-0 tb:mt-[46px] tb:px-10">
            <div className="absolute bottom-[23px] left-[22px] top-[23px] w-[3px] rounded-full bg-[#e5e5e5] tb:bottom-auto tb:left-[63px] tb:right-[63px] tb:h-[3px] tb:w-auto"></div>
            <div className="relative grid grid-cols-1 gap-5 tb:grid-cols-4 tb:gap-0">
              <div className="flex flex-row items-center gap-[14px] tb:flex-col"><div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#525252] text-[16px] font-[800] text-white shadow-[0_0_0_6px_#f7f7f7]">{COPY.text045}</div><div className="text-[13px] font-[700] text-[#525252]">{COPY.text046}</div></div>
              <div className="flex flex-row items-center gap-[14px] tb:flex-col"><div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#525252] text-[16px] font-[800] text-white shadow-[0_0_0_6px_#f7f7f7]">{COPY.text047}</div><div className="text-[13px] font-[700] text-[#525252]">{COPY.text048}</div></div>
              <div className="flex flex-row items-center gap-[14px] tb:flex-col"><div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#525252] text-[16px] font-[800] text-white shadow-[0_0_0_6px_#f7f7f7]">{COPY.text049}</div><div className="text-[13px] font-[700] text-[#525252]">{COPY.text050}</div></div>
              <div className="flex flex-row items-center gap-[14px] tb:flex-col"><div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#525252] text-[16px] font-[800] text-white shadow-[0_0_0_6px_#f7f7f7]">{COPY.text051}</div><div className="text-[13px] font-[700] text-[#525252]">{COPY.text052}</div></div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 tb:grid-cols-2 dt:grid-cols-4">
            <div className="flex flex-col gap-[12px] py-[32px] px-[28px] bg-white rounded-[24px] shadow-[0_3px_18px_rgba(0,0,0,.06)]">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[#eeeeee] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <div className="text-[11px] font-[800] tracking-[.12em] text-[#737373]">{COPY.text053}</div>
              <div className="text-[18px] font-[800] tracking-[-.025em] text-[#161616] leading-[1.45]">{COPY.text054}</div>
              <div className="text-[14px] leading-[1.7] text-[#6b6b6b] text-pretty">{COPY.text055}</div>
            </div>
            <div className="flex flex-col gap-[12px] py-[32px] px-[28px] bg-white rounded-[24px] shadow-[0_3px_18px_rgba(0,0,0,.06)]">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[#eeeeee] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="8" r="4"></circle><path d="M3 20c0-3.3 3.1-6 7-6"></path><circle cx="17" cy="17" r="3"></circle><path d="m19.2 19.2 1.8 1.8"></path></svg>
              </div>
              <div className="text-[11px] font-[800] tracking-[.12em] text-[#737373]">{COPY.text056}</div>
              <div className="text-[18px] font-[800] tracking-[-.025em] text-[#161616] leading-[1.45]">{COPY.text057}</div>
              <div className="text-[14px] leading-[1.7] text-[#6b6b6b] text-pretty">{COPY.text058}</div>
            </div>
            <div className="flex flex-col gap-[12px] py-[32px] px-[28px] bg-white rounded-[24px] shadow-[0_3px_18px_rgba(0,0,0,.06)]">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[#eeeeee] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"></rect><path d="M11 18h2"></path></svg>
              </div>
              <div className="text-[11px] font-[800] tracking-[.12em] text-[#737373]">{COPY.text059}</div>
              <div className="text-[18px] font-[800] tracking-[-.025em] text-[#161616] leading-[1.45]">{COPY.text060}</div>
              <div className="text-[14px] leading-[1.7] text-[#6b6b6b] text-pretty">{COPY.text061}</div>
            </div>
            <div className="flex flex-col gap-[12px] py-[32px] px-[28px] bg-[#404040] rounded-[24px]">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[rgba(255,255,255,.14)] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4d4d4" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m7 14 3-4 3 3 5-6"></path></svg>
              </div>
              <div className="text-[11px] font-[800] tracking-[.12em] text-[#a3a3a3]">{COPY.text062}</div>
              <div className="text-[18px] font-[800] tracking-[-.025em] text-white leading-[1.45]">{COPY.text063}</div>
              <div className="text-[14px] leading-[1.7] text-[#dedede] text-pretty">{COPY.text064}</div>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Care elements" className="bg-white pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-5 tb:px-8 dt:px-0 flex flex-col gap-[40px]">
          <div className="flex items-end justify-between gap-[48px]">
            <div className="flex flex-col gap-[10px]">
              <div className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text065}</div>
              <div className="text-[34px] font-[800] tracking-[-.03em] text-[#161616] leading-[1.4]">{COPY.text066}<span className="text-[#525252]">{COPY.text067}</span>{COPY.text068}</div>
            </div>
            <div className="text-[15px] leading-[1.75] text-[#6b6b6b] text-right max-w-[340px] text-pretty">{COPY.text069}</div>
          </div>

          <div className="flex gap-[10px]">
            <div className={tabStyle(0)} onClick={() => setTab(0)}>{COPY.text070}</div>
            <div className={tabStyle(1)} onClick={() => setTab(1)}>{COPY.text071}</div>
            <div className={tabStyle(2)} onClick={() => setTab(2)}>{COPY.text072}</div>
          </div>

          <div className="flex flex-col gap-[24px] py-[48px] px-[52px] bg-[#f7f7f7] rounded-[32px]">
            <div className="text-[19px] font-[700] text-[#404040] tracking-[-.02em]">{CARE[tab].note}</div>
            <div className="grid grid-cols-1 tb:grid-cols-2 gap-[20px]">
              <div className="flex flex-col gap-[14px] py-[34px] px-[32px] bg-white rounded-[24px] shadow-[0_3px_18px_rgba(0,0,0,.06)]">
                <div className="flex items-center justify-between gap-[16px]">
                  <div className="w-[48px] h-[48px] rounded-[14px] bg-[#eeeeee] flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </div>
                  <div className="py-[6px] px-[14px] rounded-[999px] bg-[#f7f7f7] text-[12px] font-[700] text-[#525252] whitespace-nowrap">{CARE[tab].items[0].tag}</div>
                </div>
                <div className="text-[20px] font-[800] tracking-[-.025em] text-[#161616]">{CARE[tab].items[0].t}</div>
                <div className="text-[15px] leading-[1.75] text-[#6b6b6b] text-pretty">{CARE[tab].items[0].d}</div>
              </div>
              <div className="flex flex-col gap-[14px] py-[34px] px-[32px] bg-white rounded-[24px] shadow-[0_3px_18px_rgba(0,0,0,.06)]">
                <div className="flex items-center justify-between gap-[16px]">
                  <div className="w-[48px] h-[48px] rounded-[14px] bg-[#eeeeee] flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m7 14 3-4 3 3 5-6"></path></svg>
                  </div>
                  <div className="py-[6px] px-[14px] rounded-[999px] bg-[#f7f7f7] text-[12px] font-[700] text-[#525252] whitespace-nowrap">{CARE[tab].items[1].tag}</div>
                </div>
                <div className="text-[20px] font-[800] tracking-[-.025em] text-[#161616]">{CARE[tab].items[1].t}</div>
                <div className="text-[15px] leading-[1.75] text-[#6b6b6b] text-pretty">{CARE[tab].items[1].d}</div>
              </div>
            </div>
          </div>
        </div>
      </section><section data-screen-label="Manager types" className="bg-[#f7f7f7] pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
      <div className="w-full max-w-[1160px] mx-auto px-5 tb:px-8 dt:px-0 flex flex-col gap-[44px]">
        <div className="flex items-end justify-between gap-[48px]">
          <div className="flex flex-col gap-[10px]">
            <div className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text073}</div>
            <div className="text-[34px] font-[800] tracking-[-.03em] text-[#161616] leading-[1.4]">{COPY.text074}<span className="text-[#525252]">{COPY.text075}</span> {COPY.text076}</div>
          </div>
          <div className="text-[15px] leading-[1.75] text-[#6b6b6b] text-right max-w-[330px] text-pretty">{COPY.text077}</div>
        </div>

        <div className="grid grid-cols-1 tb:grid-cols-3 gap-[24px]">
          <div className="flex flex-col bg-white rounded-[26px] overflow-hidden shadow-[0_4px_22px_rgba(0,0,0,.07)]">
            <div className="relative h-[260px] bg-[#f0f0f0]"><Slot label={COPY.text078} /></div>
            <div className="pt-[30px] px-[28px] pb-[32px] flex flex-col gap-[12px]">
              <div className="self-start py-[6px] px-[13px] rounded-[999px] bg-[#eeeeee] text-[12px] font-[700] text-[#525252]">{COPY.text079}</div>
              <div className="text-[21px] font-[800] tracking-[-.025em] text-[#161616]">{COPY.text080}</div>
              <div className="text-[15px] leading-[1.75] text-[#6b6b6b] text-pretty">{COPY.text081}</div>
              <div className="flex flex-col gap-[8px] pt-[6px]">
                <div className="flex items-center gap-[9px] text-[14px] text-[#4a4a4a]"><div className="w-[5px] h-[5px] rounded-[999px] bg-[#525252]"></div>{COPY.text082}</div>
                <div className="flex items-center gap-[9px] text-[14px] text-[#4a4a4a]"><div className="w-[5px] h-[5px] rounded-[999px] bg-[#525252]"></div>{COPY.text083}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-[26px] overflow-hidden shadow-[0_4px_22px_rgba(0,0,0,.07)]">
            <div className="relative h-[260px] bg-[#f0f0f0]"><Slot label={COPY.text084} /></div>
            <div className="pt-[30px] px-[28px] pb-[32px] flex flex-col gap-[12px]">
              <div className="self-start py-[6px] px-[13px] rounded-[999px] bg-[#eeeeee] text-[12px] font-[700] text-[#525252]">{COPY.text085}</div>
              <div className="text-[21px] font-[800] tracking-[-.025em] text-[#161616]">{COPY.text086}</div>
              <div className="text-[15px] leading-[1.75] text-[#6b6b6b] text-pretty">{COPY.text087}</div>
              <div className="flex flex-col gap-[8px] pt-[6px]">
                <div className="flex items-center gap-[9px] text-[14px] text-[#4a4a4a]"><div className="w-[5px] h-[5px] rounded-[999px] bg-[#525252]"></div>{COPY.text088}</div>
                <div className="flex items-center gap-[9px] text-[14px] text-[#4a4a4a]"><div className="w-[5px] h-[5px] rounded-[999px] bg-[#525252]"></div>{COPY.text089}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-[26px] overflow-hidden shadow-[0_4px_22px_rgba(0,0,0,.07)]">
            <div className="relative h-[260px] bg-[#f0f0f0]"><Slot label={COPY.text090} /></div>
            <div className="pt-[30px] px-[28px] pb-[32px] flex flex-col gap-[12px]">
              <div className="self-start py-[6px] px-[13px] rounded-[999px] bg-[#eeeeee] text-[12px] font-[700] text-[#525252]">{COPY.text091}</div>
              <div className="text-[21px] font-[800] tracking-[-.025em] text-[#161616]">{COPY.text092}</div>
              <div className="text-[15px] leading-[1.75] text-[#6b6b6b] text-pretty">{COPY.text093}</div>
              <div className="flex flex-col gap-[8px] pt-[6px]">
                <div className="flex items-center gap-[9px] text-[14px] text-[#4a4a4a]"><div className="w-[5px] h-[5px] rounded-[999px] bg-[#525252]"></div>{COPY.text094}</div>
                <div className="flex items-center gap-[9px] text-[14px] text-[#4a4a4a]"><div className="w-[5px] h-[5px] rounded-[999px] bg-[#525252]"></div>{COPY.text095}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section data-screen-label="Results B - slider" className="bg-white pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-5 tb:px-8 dt:px-0 flex flex-col gap-[44px]">
          <div className="flex items-center gap-[12px]">
            <div className="py-[6px] px-[12px] rounded-[999px] bg-[#525252] text-white text-[11px] font-[700] tracking-[.08em]">{COPY.text096}</div>
            <div className="text-[14px] text-[#8a8a8a]">{COPY.text097}</div>
          </div>

          <div className="grid grid-cols-1 dt:grid-cols-[520px_1fr] gap-10 dt:gap-[72px] items-center">
            <div className="relative w-full max-w-[520px] h-[420px] tb:h-[560px] [perspective:1400px]">
              <div className={flipInner}>
                <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-[#f0f0f0] shadow-[0_10px_40px_rgba(0,0,0,.14)] [backface-visibility:hidden]">
                  <div className="absolute inset-0"><Slot label={COPY.text098} /></div>
                  <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}><Slot label={COPY.text099} /></div>
                  <div className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_14px_rgba(0,0,0,.3)] pointer-events-none" style={{ left: `${reveal}%` }}></div>
                  <div className="absolute left-[18px] top-[18px] py-[8px] px-[16px] rounded-[999px] bg-[rgba(0,0,0,.5)] text-white text-[12px] font-[700] tracking-[.08em]">{COPY.text100}</div>
                  <div className="absolute right-[18px] top-[18px] py-[8px] px-[16px] rounded-[999px] bg-[#525252] text-white text-[12px] font-[700] tracking-[.08em]">{COPY.text101}</div>
                  <input type="range" min={0} max={100} value={reveal} onChange={(e) => setReveal(Number(e.target.value))} className="absolute left-0 right-0 bottom-0 top-0 w-full h-full opacity-0 cursor-[ew-resize] m-[0]" aria-label={COPY.text102} />
                  <div onClick={() => setFlipped((f) => !f)} className="absolute left-[50%] bottom-[22px] -translate-x-1/2 flex items-center gap-[8px] py-[13px] px-[22px] rounded-[999px] bg-[rgba(255,255,255,.94)] text-[#404040] text-[14px] font-[700] tracking-[-.01em] cursor-pointer shadow-[0_6px_20px_rgba(0,0,0,.22)] z-[3]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#404040" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"></path><path d="M21 4v5h-5"></path></svg>
                    {flipped ? COPY.flipToPhoto : COPY.flipToDetails}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-[#404040] shadow-[0_10px_40px_rgba(0,0,0,.14)] [backface-visibility:hidden] [transform:rotateY(180deg)] py-[44px] px-[40px] flex flex-col items-center justify-center gap-[22px]">
                  <div className="self-start flex flex-col gap-[6px]">
                    <div className="text-[11px] font-[700] italic tracking-[.16em] text-[#a3a3a3]">{COPY.text103}</div>
                    <div className="text-[20px] font-[800] text-white tracking-[-.025em]">{COPY.text104}</div>
                  </div>
                  <svg width="250" height="250" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                    <polygon points="150,40 245.3,95 245.3,205 150,260 54.7,205 54.7,95" stroke="rgba(255,255,255,.22)" strokeWidth="1"></polygon>
                    <polygon points="150,77 213.2,113.5 213.2,186.5 150,223 86.8,186.5 86.8,113.5" stroke="rgba(255,255,255,.16)" strokeWidth="1"></polygon>
                    <polygon points="150,111.5 188.1,128 178.6,166.5 150,199.5 116.7,169.3 121.4,133.5" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.45)" strokeWidth="1.5" strokeDasharray="4 4"></polygon>
                    <polygon points="150,62 221.4,108.8 231,196.8 150,227 73.8,194 78.6,108.8" fill="#a3a3a3" fillOpacity=".28" stroke="#d4d4d4" strokeWidth="2.5"></polygon>
                  </svg>
                  <div className="w-full grid grid-cols-1 tb:grid-cols-2 gap-y-[10px] gap-x-[28px]">
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><span>{COPY.text105}</span><span className="font-[700] text-white">{COPY.text106}</span></div>
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><span>{COPY.text107}</span><span className="font-[700] text-white">{COPY.text108}</span></div>
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><span>{COPY.text109}</span><span className="font-[700] text-white">{COPY.text110}</span></div>
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><span>{COPY.text111}</span><span className="font-[700] text-white">{COPY.text112}</span></div>
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><span>{COPY.text113}</span><span className="font-[700] text-white">{COPY.text114}</span></div>
                    <div className="flex justify-between text-[13px] text-[#bdbdbd]"><span>{COPY.text115}</span><span className="font-[700] text-white">{COPY.text116}</span></div>
                  </div>
                  <div onClick={() => setFlipped((f) => !f)} className="flex items-center gap-[8px] py-[13px] px-[22px] rounded-[999px] bg-[rgba(255,255,255,.14)] text-white text-[14px] font-[700] tracking-[-.01em] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"></path><path d="M3 4v5h5"></path></svg>
                    {flipped ? COPY.flipToPhoto : COPY.flipToDetails}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[36px]">
              <div className="flex flex-col gap-[12px]">
                <div className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text117}</div>
                <div className="text-[38px] font-[800] tracking-[-.035em] text-[#161616] leading-[1.35]">{COPY.text118}<br /><span className="text-[#525252]">{COPY.text119}</span></div>
              </div>

              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex justify-between items-baseline"><span className="text-[15px] text-[#6b6b6b]">{COPY.text120}</span><span className="text-[22px] font-[800] text-[#525252] tracking-[-.02em]">{COPY.text121}</span></div>
                  <div className="h-[10px] rounded-[999px] bg-[#f0f0f0] overflow-hidden"><div className="w-[76%] h-full rounded-[999px] bg-[#525252]"></div></div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex justify-between items-baseline"><span className="text-[15px] text-[#6b6b6b]">{COPY.text122}</span><span className="text-[22px] font-[800] text-[#525252] tracking-[-.02em]">{COPY.text123}</span></div>
                  <div className="h-[10px] rounded-[999px] bg-[#f0f0f0] overflow-hidden"><div className="w-[64%] h-full rounded-[999px] bg-[#525252]"></div></div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex justify-between items-baseline"><span className="text-[15px] text-[#6b6b6b]">{COPY.text124}</span><span className="text-[22px] font-[800] text-[#161616] tracking-[-.02em]">{COPY.text125}</span></div>
                  <div className="h-[10px] rounded-[999px] bg-[#f0f0f0] overflow-hidden"><div className="w-[97%] h-full rounded-[999px] bg-[#d4d4d4]"></div></div>
                </div>
              </div>

              <div className="flex pt-[8px]">
                <div className="flex flex-col gap-[5px] pr-[36px]"><div className="text-[30px] font-[800] text-[#525252] tracking-[-.03em]">{COPY.text126}</div><div className="text-[13px] text-[#8a8a8a]">{COPY.text127}</div></div>
                <div className="flex flex-col gap-[5px] pl-[36px] [border-left:1px_solid_#e5e5e5]"><div className="text-[30px] font-[800] text-[#525252] tracking-[-.03em]">{COPY.text128}</div><div className="text-[13px] text-[#8a8a8a]">{COPY.text129}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Reviews" className="bg-[#f7f7f7] pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-5 tb:px-8 dt:px-0 flex flex-col gap-[40px]">
          <div className="flex flex-col items-start justify-between gap-6 dt:flex-row dt:items-end dt:gap-12">
            <div className="flex min-w-0 flex-col gap-[10px]">
              <div className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text130}</div>
              <div className="text-[28px] font-[800] leading-[1.35] tracking-[-.03em] text-[#161616] tb:text-[32px] dt:text-[34px]">
                {COPY.text131}{" "}
                <span className="block text-[#525252] dt:inline">{COPY.text132}</span>
              </div>
            </div>
            <div className="flex shrink-0 items-baseline gap-[10px]">
              <div className="text-[34px] font-[800] text-[#525252] tracking-[-.035em] leading-[1]">{COPY.text133}</div>
              <div className="text-[14px] text-[#8a8a8a]">{COPY.text134}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 tb:grid-cols-2 tb:gap-5">
            <div className="flex flex-col gap-3 rounded-[24px] bg-white px-5 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:gap-4 tb:px-7 tb:py-7 dt:px-8 dt:py-[34px]">
              <div className="flex items-center justify-between gap-[16px]">
                <div className="flex gap-[3px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                </div>
                <div className="py-[6px] px-[13px] rounded-[999px] bg-[#eeeeee] text-[12px] font-[700] text-[#525252]">{COPY.text135}</div>
              </div>
              <div className="text-[16px] leading-[1.8] text-[#3c3c3c] text-pretty">{COPY.text136}</div>
              <div className="text-[13px] text-[#8a8a8a]">{COPY.text137}</div>
            </div>

            <div className="flex flex-col gap-3 rounded-[24px] bg-white px-5 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:gap-4 tb:px-7 tb:py-7 dt:px-8 dt:py-[34px]">
              <div className="flex items-center justify-between gap-[16px]">
                <div className="flex gap-[3px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                </div>
                <div className="py-[6px] px-[13px] rounded-[999px] bg-[#eeeeee] text-[12px] font-[700] text-[#525252]">{COPY.text138}</div>
              </div>
              <div className="text-[16px] leading-[1.8] text-[#3c3c3c] text-pretty">{COPY.text139}</div>
              <div className="text-[13px] text-[#8a8a8a]">{COPY.text140}</div>
            </div>

            <div className="flex flex-col gap-3 rounded-[24px] bg-white px-5 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:gap-4 tb:px-7 tb:py-7 dt:px-8 dt:py-[34px]">
              <div className="flex items-center justify-between gap-[16px]">
                <div className="flex gap-[3px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                </div>
                <div className="py-[6px] px-[13px] rounded-[999px] bg-[#eeeeee] text-[12px] font-[700] text-[#525252]">{COPY.text141}</div>
              </div>
              <div className="text-[16px] leading-[1.8] text-[#3c3c3c] text-pretty">{COPY.text142}</div>
              <div className="text-[13px] text-[#8a8a8a]">{COPY.text143}</div>
            </div>

            <div className="flex flex-col gap-3 rounded-[24px] bg-white px-5 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:gap-4 tb:px-7 tb:py-7 dt:px-8 dt:py-[34px]">
              <div className="flex items-center justify-between gap-[16px]">
                <div className="flex gap-[3px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#525252" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                </div>
                <div className="py-[6px] px-[13px] rounded-[999px] bg-[#eeeeee] text-[12px] font-[700] text-[#525252]">{COPY.text144}</div>
              </div>
              <div className="text-[16px] leading-[1.8] text-[#3c3c3c] text-pretty">{COPY.text145}</div>
              <div className="text-[13px] text-[#8a8a8a]">{COPY.text146}</div>
            </div>

            <div className="col-span-1 flex flex-col items-start gap-4 rounded-[24px] bg-[#404040] px-5 py-6 tb:col-span-2 tb:flex-row tb:items-center tb:gap-7 tb:px-8 tb:py-8">
              <div className="flex gap-[3px] flex-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4d4d4" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"></path></svg>
              </div>
              <div className="text-[18px] leading-[1.75] font-[600] text-white tracking-[-.02em] text-pretty">{COPY.text147}</div>
              <div className="flex-none text-left text-[13px] text-[#bdbdbd] tb:ml-auto tb:text-right">{COPY.text148}<br />{COPY.text149}</div>
            </div>
          </div>
          <div className="text-[12px] text-[#8a8a8a]">{COPY.text150}</div>
        </div>
      </section>

      <section data-screen-label="Plans" className="bg-[#fafafa] pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-5 tb:px-8 dt:px-0 flex flex-col gap-[44px]">
          <div className="flex flex-col gap-[14px]">
            <div className="text-[13px] font-[700] italic tracking-[.16em] text-[#737373]">{COPY.text151}</div>
            <div className="text-[34px] font-[800] tracking-[-.03em] text-[#161616] leading-[1.4]">{COPY.text152}<br /><span className="text-[#525252]">{COPY.text153}</span></div>
            <div className="text-[16px] leading-[1.8] text-[#6b6b6b] tracking-[-.01em]">{COPY.text154}<br />{COPY.text155}</div>
          </div>

          <div className="grid grid-cols-1 tb:grid-cols-3 gap-[24px] items-stretch">
            <div className="flex flex-col gap-[26px] pt-[36px] px-[34px] pb-[34px] bg-white rounded-[22px] shadow-[0_4px_20px_rgba(0,0,0,.07)]">
              <div className="flex flex-col gap-[10px]">
                <div className="text-[14px] italic font-[600] text-[#737373] tracking-[-.01em]">{COPY.text156}</div>
                <div className="text-[23px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text157}</div>
                <div className="text-[14px] leading-[1.7] text-[#7a7a7a]">{COPY.text158}</div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text159}</div>
                <div className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text160}</div>
                <div className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text161}</div>
                <div className="flex gap-[12px] py-[14px] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text162}</div>
              </div>
              <div className="flex flex-col gap-[6px] mt-auto">
                <div className="text-[13px] text-[#9a9a9a]">{COPY.text163}</div>
                <div className="text-[22px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text164}</div>
              </div>
              <a href="#" className="flex items-center justify-center h-[52px] rounded-[999px] bg-white text-[#525252] text-[15px] font-[700] [border:1.5px_solid_#d4d4d4]">{COPY.text165}</a>
            </div>

            <div className="relative flex flex-col gap-[26px] pt-[36px] px-[34px] pb-[34px] bg-white rounded-[22px] [border:2px_solid_#525252] shadow-[0_8px_28px_rgba(0,0,0,.10)]">
              <div className="absolute left-[50%] top-[-15px] -translate-x-1/2 py-[7px] px-[16px] rounded-[999px] bg-[#404040] text-white text-[12px] font-[700] whitespace-nowrap">{COPY.text166}</div>
              <div className="flex flex-col gap-[10px]">
                <div className="text-[14px] italic font-[600] text-[#737373] tracking-[-.01em]">{COPY.text167}</div>
                <div className="text-[23px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text168}</div>
                <div className="text-[14px] leading-[1.7] text-[#7a7a7a]">{COPY.text169}</div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text170}</div>
                <div className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text171}</div>
                <div className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text172}</div>
                <div className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text173}</div>
                <div className="flex gap-[12px] py-[14px] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text174}</div>
              </div>
              <div className="flex flex-col gap-[6px] mt-auto">
                <div className="text-[13px] text-[#9a9a9a]">{COPY.text175}</div>
                <div className="text-[22px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text176}</div>
              </div>
              <a href="#" className="flex items-center justify-center h-[52px] rounded-[999px] bg-[#404040] text-white text-[15px] font-[700]">{COPY.text177}</a>
            </div>

            <div className="flex flex-col gap-[26px] pt-[36px] px-[34px] pb-[34px] bg-white rounded-[22px] shadow-[0_4px_20px_rgba(0,0,0,.07)]">
              <div className="flex flex-col gap-[10px]">
                <div className="text-[14px] italic font-[600] text-[#737373] tracking-[-.01em]">{COPY.text178}</div>
                <div className="text-[23px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text179}</div>
                <div className="text-[14px] leading-[1.7] text-[#7a7a7a]">{COPY.text180}</div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text181}</div>
                <div className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text182}</div>
                <div className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text183}</div>
                <div className="flex gap-[12px] py-[14px] [border-bottom:1px_solid_#f3f3f3] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text184}</div>
                <div className="flex gap-[12px] py-[14px] text-[14px] text-[#4a4a4a]"><span className="text-[#525252] font-[700]">✓</span>{COPY.text185}</div>
              </div>
              <div className="flex flex-col gap-[6px] mt-auto">
                <div className="text-[13px] text-[#9a9a9a]">{COPY.text186}</div>
                <div className="text-[22px] font-[800] tracking-[-.03em] text-[#161616]">{COPY.text187}</div>
              </div>
              <a href="#" className="flex items-center justify-center h-[52px] rounded-[999px] bg-white text-[#525252] text-[15px] font-[700] [border:1.5px_solid_#d4d4d4]">{COPY.text188}</a>
            </div>
          </div>

          <div className="py-[26px] px-[30px] bg-[#f5f5f5] rounded-[18px] text-[14px] leading-[1.8] text-[#4a4a4a] text-pretty"><span className="font-[700] text-[#404040]">{COPY.text189}</span> {COPY.text190}</div>
        </div>
      </section>

      <section data-screen-label="FAQ" className="bg-[#fafafa] pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[110px]">
        <div className="w-full max-w-[1160px] mx-auto px-5 tb:px-8 dt:px-0 flex flex-col gap-[44px]">
          <div className="flex flex-col gap-[16px]">
            <div className="text-[15px] font-[600] italic tracking-[.14em] text-[#737373]">{COPY.text191}</div>
            <div className="text-[46px] font-[800] tracking-[-.035em] text-[#161616] leading-[1.3]">{COPY.text192}</div>
          </div>

          <div className="flex flex-col gap-[14px]">
            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(0)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <div className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text193}</div>
                <div className={faqMark(0)}>+</div>
              </div>
              <div className={faqBody(0)}>{COPY.text194}</div>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(1)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <div className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text195}</div>
                <div className={faqMark(1)}>+</div>
              </div>
              <div className={faqBody(1)}>{COPY.text196}</div>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(2)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <div className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text197}</div>
                <div className={faqMark(2)}>+</div>
              </div>
              <div className={faqBody(2)}>{COPY.text198}</div>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(3)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <div className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text199}</div>
                <div className={faqMark(3)}>+</div>
              </div>
              <div className={faqBody(3)}>{COPY.text200}</div>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(4)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <div className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text201}</div>
                <div className={faqMark(4)}>+</div>
              </div>
              <div className={faqBody(4)}>{COPY.text202}</div>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0_2px_14px_rgba(0,0,0,.06)] overflow-hidden">
              <div onClick={() => toggleFaq(5)} className="flex items-center justify-between gap-[24px] py-[30px] px-[32px] cursor-pointer">
                <div className="text-[17px] font-[700] text-[#161616] tracking-[-.02em]">{COPY.text203}</div>
                <div className={faqMark(5)}>+</div>
              </div>
              <div className={faqBody(5)}>{COPY.text204}</div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
