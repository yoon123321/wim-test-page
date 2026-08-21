"use client";

/**
 * 개선안(NEW) 메인 페이지 — 테일윈드 + 디자인 시스템 토큰 버전
 *
 * - 색상은 globals.css @theme 팔레트 토큰만 사용 (primary-*, gray-*, black, white)
 * - 문구·카드 데이터는 content/home-new.ts 에서 수정
 * - PC 1280 / 태블릿 688 / 모바일 350 대응 (tb: 768~, dt: 1200~)
 * - 이미지 자리는 <ImageSlot> — src 를 넘기면 실사가 들어감
 */

import { useRef, useState } from "react";
import {
  WIM_NEW_COPY,
  WIM_NEW_TESTS,
  WIM_NEW_CARES,
  WIM_NEW_NUMBERS,
  WIM_NEW_REVIEWS,
  WIM_NEW_PROGRAMS,
  type WimNewCard,
} from "@/content/home-new";

const FONT_CSS = `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap");`;

const DISPLAY = "font-['EB_Garamond',serif]";

/** 카드 톤 → 팔레트 토큰 매핑 */
const TONE_CARD: Record<NonNullable<WimNewCard["tone"]> | "plain", string> = {
  plain: "border-gray-01 bg-gray-00",
  green: "border-primary-sub-02 bg-primary-sub-03",
  sage: "border-primary-sub-01 bg-gray-00",
};

function ImageSlot({ label, src, className = "aspect-[4/3]" }: { label: string; src?: string; className?: string }) {
  return (
    <div className={`grid place-items-center overflow-hidden rounded-2xl bg-gray-01 ${className}`}>
      {src ? (
        <img src={src} alt={label} className="block h-full w-full object-cover" />
      ) : (
        <span className="break-keep p-3 text-center text-[12.5px] text-gray-02">{label}</span>
      )}
    </div>
  );
}

function Kicker({ text, light = false }: { text: string; light?: boolean }) {
  return <div className={`${DISPLAY} text-[13px] tracking-[0.2em] ${light ? "text-primary-sub-02" : "text-primary-main"}`}>{text}</div>;
}

function Section({ id, bg = "bg-white", children }: { id?: string; bg?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`${bg} px-5 py-[54px] tb:px-6 tb:py-[100px]`}>
      <div className="mx-auto w-full dt:max-w-[1280px]">{children}</div>
    </section>
  );
}

/* ────────────────────────────── 카드 · 모달 ────────────────────────────── */

function TileCard({ card, onOpen, className = "" }: { card: WimNewCard; onOpen: () => void; className?: string }) {
  return (
    <button
      type="button"
      aria-label={`${card.title} 자세히 보기`}
      onClick={onOpen}
      className={`flex cursor-pointer flex-col gap-2.5 rounded-3xl border border-dashed p-4 text-left transition hover:border-solid tb:min-h-[240px] tb:gap-3 tb:px-[22px] tb:py-6 ${TONE_CARD[card.tone ?? "plain"]} ${className}`}
    >
      <div className="flex items-center justify-between gap-2.5">
        <span className={`${DISPLAY} text-[16px] text-gray-02`}>{card.no}</span>
        <span className="flex-none whitespace-nowrap rounded-full bg-white px-[11px] py-1.5 text-[11px] font-bold text-gray-03">{card.badge}</span>
      </div>
      <div className="mt-auto flex flex-col gap-2.5">
        <h4 className="text-[15px] leading-[1.4] tracking-[-0.02em] tb:text-[20px]">{card.title}</h4>
        <p className="break-keep text-[12.5px] leading-[1.5] text-gray-03 tb:text-[14px] tb:leading-[1.6]">{card.line}</p>
        <span className="self-end text-[12px] font-bold text-primary-main tb:text-[13px]">{WIM_NEW_COPY.services.detailLabel}</span>
      </div>
    </button>
  );
}

function CardModal({ card, onClose }: { card: WimNewCard | null; onClose: () => void }) {
  if (!card) return null;
  return (
    <div onClick={onClose} className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-6">
      <div
        onClick={(e) => e.stopPropagation()}
        className="grid max-h-[84vh] w-full max-w-[760px] grid-cols-1 overflow-auto rounded-[28px] bg-white shadow-[0_24px_60px_rgba(27,28,27,.24)] tb:max-h-[88vh] tb:grid-cols-[minmax(0,260px)_minmax(0,1fr)]"
      >
        <div className={`grid place-items-center px-[18px] py-5 tb:px-[26px] tb:py-[34px] ${card.tone === "green" ? "bg-primary-sub-03" : "bg-gray-00"}`}>
          <span className={`${DISPLAY} text-[46px] text-primary-main`}>{card.no}</span>
        </div>
        <div className="flex flex-col gap-3.5 px-[22px] py-6 tb:px-9 tb:pb-8 tb:pt-9">
          <span className="text-[11.5px] font-bold tracking-[0.12em] text-primary-main">{card.no} · {card.badge}</span>
          <h4 className="text-[21px] leading-[1.4] tracking-[-0.03em] tb:text-[26px]">{card.title}</h4>
          <p className="break-keep text-[15.5px] leading-[1.9] text-gray-03">{card.body}</p>
          <div className="mt-1.5 flex flex-col gap-[9px] border-t border-gray-01 pt-4">
            <span className="text-[11px] font-bold tracking-[0.1em] text-gray-02">{card.listLabel}</span>
            {card.items.map((it) => (
              <span key={it} className="break-keep text-[14.5px] leading-[1.6]">· {it}</span>
            ))}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="mt-5 self-start cursor-pointer rounded-full bg-black px-6 py-3 text-[13.5px] font-bold text-white"
          >
            {WIM_NEW_COPY.services.modalCloseLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────── 페이지 ────────────────────────────── */

export default function WimMainNew() {
  const [testModal, setTestModal] = useState<WimNewCard | null>(null);
  const [careModal, setCareModal] = useState<WimNewCard | null>(null);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const COPY = WIM_NEW_COPY;

  // STEP 02 관리 캐러셀 (PC·모바일 공통)
  const careTrackRef = useRef<HTMLDivElement>(null);
  const [careActive, setCareActive] = useState(0);

  const careStep = () => {
    const track = careTrackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 16 : 0;
  };
  const moveCare = (direction: number) => {
    careTrackRef.current?.scrollBy({ left: direction * careStep(), behavior: "smooth" });
  };
  const updateCareActive = () => {
    const track = careTrackRef.current;
    const step = careStep();
    if (!track || !step) return;
    setCareActive(Math.min(WIM_NEW_CARES.length - 1, Math.round(track.scrollLeft / step)));
  };

  // CASES 프로그램 캐러셀 (모바일 전용)
  const caseTrackRef = useRef<HTMLDivElement>(null);
  const [caseActive, setCaseActive] = useState(0);

  const updateCaseActive = () => {
    const track = caseTrackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    setCaseActive(Math.min(WIM_NEW_PROGRAMS.length - 1, Math.round(track.scrollLeft / (card.offsetWidth + 16))));
  };

  const lines = (arr: readonly string[]) =>
    arr.map((line, i) => (
      <span key={line}>
        {i > 0 && <br />}
        {line}
      </span>
    ));

  return (
    <div className="bg-white font-['Pretendard_Variable',Pretendard,sans-serif] text-black antialiased">
      <style dangerouslySetInnerHTML={{ __html: FONT_CSS }} />

      {/* HERO */}
      <section className="relative grid min-h-[620px] place-items-center overflow-hidden bg-black px-6 py-[110px] text-center">
        <div className="absolute inset-0">
          <ImageSlot label={COPY.hero.imageLabel} className="h-full w-full rounded-none" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/25" />
        <div className="relative max-w-[820px]">
          <Kicker text={COPY.hero.kicker} light />
          <h1 className="mt-7 break-keep text-[30px] leading-[1.35] tracking-[-0.035em] text-white tb:text-[50px]">{lines(COPY.hero.titleLines)}</h1>
          <p className="mt-[26px] text-[16px] leading-[1.8] text-white/85 tb:text-[18px]">{COPY.hero.description}</p>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about">
        <div className="grid grid-cols-1 items-center gap-8 dt:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] dt:gap-16">
          <div className="flex flex-col items-start gap-5">
            <div className="break-keep text-[14px] font-bold tracking-[0.06em] text-primary-main">{COPY.about.eyebrow}</div>
            <h2 className="break-keep text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[38px] tb:leading-[1.4]">{lines(COPY.about.titleLines)}</h2>
            <p className="max-w-[560px] break-keep text-[16px] leading-[1.95] text-gray-03">{lines(COPY.about.descriptionLines)}</p>
          </div>
          <ImageSlot label={COPY.about.imageLabel} />
        </div>
      </Section>

      {/* SERVICES — 검사 6종 · 관리 8종 */}
      <Section id="services" bg="bg-gray-00">
        <div className="max-w-[740px]">
          <h2 className="break-keep text-[24px] leading-[1.45] tracking-[-0.03em] tb:text-[33px]">{lines(COPY.services.titleLines)}</h2>
        </div>

        {/* STEP 01 검사 */}
        <div className="mt-12 flex flex-col gap-2.5">
          <span className="text-[13px] font-bold tracking-[0.14em] text-primary-main">{COPY.services.step1Label}</span>
          <h3 className="text-[20px] leading-[1.4] tracking-[-0.03em] tb:text-[26px]">{COPY.services.step1Title}</h3>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 tb:gap-5 dt:grid-cols-3">
          {WIM_NEW_TESTS.map((c) => <TileCard key={c.no} card={c} onOpen={() => setTestModal(c)} />)}
        </div>

        {/* STEP 02 관리 — 캐러셀 (PC·모바일 공통) */}
        <div className="mt-14 flex items-end justify-between gap-6 tb:mt-[72px]">
          <div className="flex flex-col gap-2.5">
            <span className="text-[13px] font-bold tracking-[0.14em] text-primary-main">{COPY.services.step2Label}</span>
            <h3 className="break-keep text-[20px] leading-[1.4] tracking-[-0.03em] tb:text-[26px]">{COPY.services.step2Title}</h3>
            <span className="mt-1 text-[13px] text-gray-02">
              {String(careActive + 1).padStart(2, "0")} / {String(WIM_NEW_CARES.length).padStart(2, "0")} · {COPY.services.swipeHint}
            </span>
          </div>
          <div className="hidden shrink-0 gap-2 tb:flex">
            <button
              type="button"
              onClick={() => moveCare(-1)}
              aria-label={COPY.services.prevAriaLabel}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-gray-01 bg-white text-xl transition hover:bg-gray-01"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => moveCare(1)}
              aria-label={COPY.services.nextAriaLabel}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-gray-01 bg-white text-xl transition hover:bg-gray-01"
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={careTrackRef}
          onScroll={updateCareActive}
          className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {WIM_NEW_CARES.map((c) => (
            <TileCard
              key={c.no}
              card={c}
              onOpen={() => setCareModal(c)}
              className="w-[76vw] shrink-0 snap-start tb:w-[calc((100%_-_16px)/2)] dt:w-[calc((100%_-_48px)/4)]"
            />
          ))}
        </div>
        <div className="mt-2 flex justify-center gap-2" aria-hidden="true">
          {WIM_NEW_CARES.map((c, index) => (
            <span key={c.no} className={`h-2 rounded-full transition-all ${careActive === index ? "w-8 bg-primary-main" : "w-2 bg-gray-01"}`} />
          ))}
        </div>
      </Section>

      {/* NUMBERS (RESULTS) */}
      <Section bg="bg-black">
        <div className="flex flex-col items-center gap-5 text-center">
          <Kicker text={COPY.numbers.kicker} light />
          <h2 className="break-keep text-[24px] leading-[1.42] tracking-[-0.03em] text-white tb:text-[38px] tb:leading-[1.35]">{COPY.numbers.title}</h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1360px] grid-cols-2 gap-3 tb:mt-14 tb:gap-5 dt:grid-cols-4">
          {WIM_NEW_NUMBERS.map((n) => (
            <div key={n.label} className="flex flex-col items-center gap-2.5 rounded-[26px] bg-white px-4 py-7 tb:gap-3.5 tb:rounded-[32px] tb:px-6 tb:py-12">
              <span className={`${DISPLAY} text-[30px] font-bold leading-none tracking-[-0.02em] text-primary-main tb:text-[44px]`}>
                {n.value}
                {n.unit ? <span className="ml-0.5 text-[0.55em] align-baseline">{n.unit}</span> : null}
              </span>
              <span className="break-keep text-center text-[13px] font-bold text-black tb:text-[15px]">{n.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 tb:mt-12 tb:gap-3">
          {COPY.numbers.badges.map((b) => (
            <span key={b} className="whitespace-nowrap rounded-full border border-white/20 px-4 py-2.5 text-[12.5px] text-white/80 tb:px-5 tb:py-3 tb:text-[14px]">
              {b}
            </span>
          ))}
        </div>
        <p className="mt-6 break-keep text-center text-[12.5px] text-white/55 tb:mt-8 tb:text-[13.5px]">{COPY.numbers.footnote}</p>
      </Section>

      {/* REVIEWS */}
      <Section id="reviews" bg="bg-primary-main">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Kicker text={COPY.reviews.kicker} light />
            <h2 className="break-keep text-[24px] leading-[1.42] tracking-[-0.03em] text-white tb:text-[36px] tb:leading-[1.35]">{COPY.reviews.title}</h2>
          </div>
          <div className="flex items-baseline gap-2.5">
            <span className="text-[32px] font-bold tracking-[-0.03em] text-white">{COPY.reviews.rating}</span>
            <span className="text-[15px] text-white/65">{COPY.reviews.ratingSub}</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-5 tb:grid-cols-2 dt:grid-cols-5">
          {WIM_NEW_REVIEWS.map((r, i) => {
            const dark = i % 2 === 1;
            return (
              <figure
                key={r.tag}
                className={`m-0 flex-col gap-3 rounded-[22px] p-6 ${dark ? "bg-black/30 text-white/90" : "bg-white text-black"} ${
                  !reviewsOpen && i >= 2 ? "hidden tb:flex" : "flex"
                }`}
              >
                <span className={`w-fit rounded-full px-3 py-1.5 text-[11.5px] font-bold ${dark ? "bg-white/15 text-primary-sub-02" : "bg-primary-sub-03 text-primary-main"}`}>
                  {r.tag}
                </span>
                <blockquote className="m-0 break-keep text-[14px] leading-[1.8]">{r.body}</blockquote>
                <figcaption className="text-[12px] opacity-70">{r.who}</figcaption>
              </figure>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setReviewsOpen((v) => !v)}
          className="mt-5 w-full cursor-pointer rounded-full border border-white/30 bg-transparent px-5 py-[15px] text-[14px] font-bold text-white tb:hidden"
        >
          {reviewsOpen ? COPY.reviews.foldLabel : COPY.reviews.moreLabel}
        </button>
      </Section>

      {/* PROGRAMS */}
      <Section id="cases">
        <div className="rounded-[28px] bg-primary-sub-03 px-5 py-8 tb:px-14 tb:py-16">
          <div className="flex flex-col gap-4">
            <Kicker text={COPY.cases.kicker} />
            <h2 className="break-keep text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[36px] tb:leading-[1.3]">{COPY.cases.title}</h2>
            <p className="max-w-[560px] break-keep text-[16px] leading-[1.8] text-gray-03">{COPY.cases.description}</p>
          </div>
          {/* 모바일: 캐러셀 / 태블릿·PC: 그리드 */}
          <div
            ref={caseTrackRef}
            onScroll={updateCaseActive}
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden tb:grid tb:grid-cols-1 tb:gap-5 tb:overflow-visible tb:pb-0 dt:grid-cols-3"
          >
            {WIM_NEW_PROGRAMS.map((p) => (
              <a
                key={p.title}
                href="#contact"
                className="flex w-[80vw] shrink-0 snap-start flex-col gap-4 rounded-3xl bg-white p-4 text-inherit no-underline shadow-[0_2px_10px_rgba(27,28,27,.06)] transition hover:opacity-90 tb:w-auto"
              >
                <ImageSlot label={p.slot} className="aspect-[16/11]" />
                <div className="flex flex-col gap-2.5 px-2 pb-2.5">
                  <h3 className="text-[20px] leading-[1.4] tracking-[-0.02em]">{p.title}</h3>
                  <span className="break-keep text-[14px] leading-[1.7] text-gray-03">{p.desc}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-2 flex justify-center gap-2 tb:hidden" aria-hidden="true">
            {WIM_NEW_PROGRAMS.map((p, index) => (
              <span key={p.title} className={`h-2 rounded-full transition-all ${caseActive === index ? "w-8 bg-primary-main" : "w-2 bg-white"}`} />
            ))}
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section id="contact" className="relative overflow-hidden bg-primary-sub-03 px-5 py-[54px] tb:px-6 tb:py-[100px]">
        <div className="absolute -right-[140px] -top-[160px] h-[400px] w-[400px] rounded-full bg-primary-sub-02" />
        <div className="relative mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
          <h2 className="break-keep text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[40px] tb:leading-[1.4]">{lines(COPY.cta.titleLines)}</h2>
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-primary-main px-10 py-[18px] text-[17px] font-bold text-white no-underline transition hover:opacity-90"
          >
            {COPY.cta.buttonLabel}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-5 py-11 tb:px-6">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-5 dt:max-w-[1280px]">
          <span className="flex items-baseline gap-2">
            <span className="text-[17px] font-bold text-white">{COPY.footer.brandKo}</span>
            <span className={`${DISPLAY} text-[15px] tracking-[0.1em] text-primary-sub-02`}>{COPY.footer.brandEn}</span>
          </span>
          <span className="text-[13.5px] text-white/50">{COPY.footer.copyright}</span>
        </div>
      </footer>

      <CardModal card={testModal} onClose={() => setTestModal(null)} />
      <CardModal card={careModal} onClose={() => setCareModal(null)} />
    </div>
  );
}
