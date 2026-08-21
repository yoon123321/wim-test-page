"use client";

/**
 * 기기관리(리커버리) 랜딩 — 개선안(NEW) · 테일윈드 + 디자인 시스템 토큰 버전
 *
 * - 색상은 globals.css @theme 팔레트 토큰만 사용 (primary-*, gray-*, black, white)
 * - 문구·데이터는 content/recovery-new.ts 에서 수정
 * - 상황별 조합 탭, 기기 5종 + 상세 모달, 관리 흐름, 인스타 기록, 가격 2탭, FAQ
 */

import { useRef, useState } from "react";
import {
  RECOVERY_COPY,
  RECOVERY_DEVICES,
  RECOVERY_SITUATIONS,
  RECOVERY_COMBOS,
  RECOVERY_COMBO_REVIEWS,
  RECOVERY_SIGNS,
  RECOVERY_INTRO_FACTS,
  RECOVERY_JOURNEY,
  RECOVERY_RECORDS,
  RECOVERY_THEMES,
  RECOVERY_TRIALS,
  RECOVERY_FAQ,
  type RecoveryDevice,
} from "@/content/recovery-new";

const FONT_CSS = `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap");`;

const EN = "font-['EB_Garamond',serif]";

function ImageSlot({ label, src, className = "aspect-[4/3] rounded-[20px]" }: { label: string; src?: string; className?: string }) {
  return (
    <div className={`grid place-items-center overflow-hidden bg-gray-01 ${className}`}>
      {src ? (
        <img src={src} alt={label} className="block h-full w-full object-cover" />
      ) : (
        <span className="break-keep p-3 text-center text-[12.5px] text-gray-02">{label}</span>
      )}
    </div>
  );
}

function Kicker({ children, light = false, size = "text-[14px]" }: { children: React.ReactNode; light?: boolean; size?: string }) {
  return <span className={`${EN} ${size} tracking-[0.2em] ${light ? "text-primary-sub-02" : "text-primary-main"}`}>{children}</span>;
}

function Section({ id, bg = "bg-white", className = "", children }: { id?: string; bg?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`${bg} px-5 py-[54px] tb:px-6 tb:py-[96px] ${className}`}>
      <div className="mx-auto w-full dt:max-w-[1280px]">{children}</div>
    </section>
  );
}

export default function RecoveryLandingNew() {
  const [situation, setSituation] = useState(0);
  const [device, setDevice] = useState<RecoveryDevice | null>(null);
  const [tab, setTab] = useState<"theme" | "single">("theme");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const COPY = RECOVERY_COPY;

  const combo = RECOVERY_COMBOS[situation];

  // 방문 기록(RECORDS) 캐러셀
  const recTrackRef = useRef<HTMLDivElement>(null);
  const [recActive, setRecActive] = useState(0);

  const recStep = () => {
    const card = recTrackRef.current?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 16 : 0;
  };
  const moveRec = (direction: number) => {
    recTrackRef.current?.scrollBy({ left: direction * recStep(), behavior: "smooth" });
  };
  const updateRecActive = () => {
    const track = recTrackRef.current;
    const step = recStep();
    if (!track || !step) return;
    setRecActive(Math.min(RECOVERY_RECORDS.length - 1, Math.round(track.scrollLeft / step)));
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

      {/* 페이지 내 앵커 내비 (전역 헤더 아래 고정) */}
      <div className="sticky top-16 z-20 border-b border-gray-01 bg-white/90 backdrop-blur-[10px]">
        <div className="mx-auto flex h-[56px] w-full items-center justify-between gap-6 px-5 tb:px-6 dt:max-w-[1280px]">
          <nav className="hidden items-center gap-7 dt:flex">
            {COPY.nav.map((n) => (
              <a key={n.href} href={n.href} className="text-[14.5px] font-medium text-gray-03 no-underline transition hover:opacity-90">{n.label}</a>
            ))}
          </nav>
          <a href="#contact" className="ml-auto flex-none rounded-full bg-primary-main px-[22px] py-[11px] text-[14px] font-bold text-white no-underline transition hover:opacity-90">
            {COPY.navCta}
          </a>
        </div>
      </div>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <ImageSlot label={COPY.hero.imageLabel} className="h-full w-full rounded-none" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        <div className="relative mx-auto flex w-full flex-col items-center gap-6 px-6 pb-[80px] pt-[90px] text-center tb:pb-[116px] tb:pt-[124px] dt:max-w-[1280px]">
          <Kicker light>{COPY.hero.kicker}</Kicker>
          <h1 className="m-0 max-w-[820px] break-keep text-[30px] leading-[1.32] tracking-[-0.035em] text-white tb:text-[46px]">{lines(COPY.hero.titleLines)}</h1>
          <p className="m-0 max-w-[620px] break-keep text-[15.5px] leading-[1.85] text-white/80 tb:text-[16.5px]">{COPY.hero.description}</p>
          <div className="mt-3.5 flex w-full flex-col items-stretch gap-3 tb:w-auto tb:flex-row">
            <a href="#contact" className="rounded-full bg-primary-sub-02 px-8 py-[17px] text-center text-[15.5px] font-bold text-primary-main no-underline transition hover:opacity-90">
              {COPY.hero.primaryButton}
            </a>
            <a href="#devices" className="rounded-full border border-white/40 px-8 py-4 text-center text-[15.5px] font-bold text-white no-underline transition hover:opacity-90">
              {COPY.hero.secondaryButton}
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <Section id="intro">
        <div className="flex flex-col gap-6 tb:gap-11">
          <div className="grid grid-cols-1 items-center gap-6 dt:grid-cols-[minmax(0,1fr)_minmax(0,340px)] dt:gap-14">
            <div className="flex flex-col gap-5">
              <Kicker>{COPY.intro.kicker}</Kicker>
              <h2 className="m-0 break-keep text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[40px] tb:leading-[1.35]">
                {lines(COPY.intro.titleLines)}
                <br />
                <span className="text-primary-main">{COPY.intro.titleAccent}</span>
              </h2>
              <p className="m-0 max-w-[460px] break-keep text-[15px] leading-[1.85] text-gray-03 tb:text-[16.5px]">{lines(COPY.intro.descriptionLines)}</p>
              <div className="mt-2 grid grid-cols-3 border-y border-gray-01">
                {RECOVERY_INTRO_FACTS.map((v) => (
                  <div key={v.label} className="flex flex-col gap-1 py-3.5 tb:gap-[5px] tb:py-5">
                    <span className="break-keep text-[11.5px] text-gray-02 tb:text-[13px]">{v.label}</span>
                    <span className="text-[19px] font-bold tracking-[-0.03em] text-primary-main tb:text-[26px]">{v.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <ImageSlot label={COPY.intro.photoLabel} className="aspect-[4/3] rounded-[26px] bg-gray-00 tb:aspect-[16/10] dt:aspect-[4/5]" />
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3.5">
              <span className="flex-none text-[15px] font-bold tracking-[-0.02em] text-black">{COPY.intro.signsTitle}</span>
              <span className="h-px flex-1 bg-gray-01" />
              <span className="flex-none text-[13.5px] text-gray-02">{COPY.intro.signsNote}</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 tb:gap-3 dt:grid-cols-4">
              {RECOVERY_SIGNS.map((s) => (
                <div key={s.title} className="flex flex-col gap-2 rounded-[18px] bg-gray-00 px-4 py-3.5 tb:gap-2.5 tb:px-5 tb:py-[18px]">
                  <span className="break-keep text-[14.5px] font-bold leading-[1.4] tb:text-[16.5px]">{s.title}</span>
                  <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-white px-3 py-1.5 text-[11.5px] font-bold text-primary-main tb:px-3.5 tb:text-[12.5px]">
                    <span aria-hidden="true">→</span>{s.combo}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5 rounded-[22px] bg-primary-main p-[22px] tb:px-9 tb:py-[26px] tb:gap-8">
            <div className="flex flex-wrap items-baseline gap-4">
              <Kicker light size="text-[12.5px]">{COPY.intro.turn.kicker}</Kicker>
              <h3 className="m-0 break-keep text-[20px] leading-[1.4] text-white tb:text-[24px]">{COPY.intro.turn.title}</h3>
            </div>
            <a href="#combos" className="flex-none rounded-full bg-primary-sub-02 px-[26px] py-3.5 text-[14.5px] font-bold text-primary-main no-underline transition hover:opacity-90">
              {COPY.intro.turn.button}
            </a>
          </div>
        </div>
      </Section>

      {/* COMBOS */}
      <Section id="combos" bg="bg-primary-sub-03">
        <div className="flex flex-col gap-6 tb:gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <Kicker>{COPY.combos.kicker}</Kicker>
            <h2 className="m-0 text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[34px] tb:leading-[1.4]">{COPY.combos.title}</h2>
            <p className="m-0 max-w-[680px] break-keep text-[16px] leading-[1.8] text-gray-03">{COPY.combos.description}</p>
          </div>

          <div className="-mx-5 flex flex-wrap justify-center gap-2.5 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden tb:mx-0 tb:px-0">
            {RECOVERY_SITUATIONS.map((s, i) => {
              const on = situation === i;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSituation(i)}
                  className={`flex-none cursor-pointer whitespace-nowrap rounded-full border px-[26px] py-[13px] text-[14.5px] font-bold transition ${
                    on ? "border-primary-main bg-primary-main text-white" : "border-gray-01 bg-white text-gray-03"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-[26px] border border-gray-01 bg-white">
            <div className="grid grid-cols-1 items-center gap-6 px-[22px] py-6 dt:grid-cols-[minmax(0,1fr)_320px] dt:gap-8 dt:px-9 dt:py-[34px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {combo.steps.map((st) => (
                    <span key={st} className="rounded-full bg-primary-sub-03 px-4 py-[9px] text-[13.5px] font-bold text-primary-main">{st}</span>
                  ))}
                </div>
                <h3 className={`${EN} m-0 text-[24px] font-medium leading-[1.3] tb:text-[30px]`}>{combo.title}</h3>
                <p className="m-0 max-w-[620px] break-keep text-[15.5px] leading-[1.85] text-gray-03">{combo.desc}</p>
                <a href="#contact" className="mt-1 w-fit rounded-full border border-primary-main px-6 py-[13px] text-[14px] font-bold text-primary-main no-underline transition hover:opacity-90">
                  {COPY.combos.moreButton}
                </a>
              </div>
              <ImageSlot label={combo.photo} />
            </div>

            <div className="border-t border-gray-01 bg-gray-00 px-[22px] py-6 dt:px-9 dt:py-[30px]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h4 className="m-0 text-[17px] leading-[1.4]">{COPY.combos.reviewsTitle}</h4>
                <span className="text-[13px] text-gray-02">{COPY.combos.reviewsNote}</span>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-6 tb:grid-cols-2 tb:gap-8">
                {RECOVERY_COMBO_REVIEWS[situation].map((r) => (
                  <figure key={r.meta} className="m-0 flex flex-col gap-2.5">
                    <div className="flex items-center gap-3">
                      <span className="text-[13px] tracking-[0.1em] text-primary-main">★★★★★</span>
                      <span className="text-[13.5px] font-bold text-gray-03">{r.label}</span>
                    </div>
                    <blockquote className="m-0 break-keep text-[15px] leading-[1.85] text-black">{r.body}</blockquote>
                    <figcaption className="text-[12.5px] text-gray-02">{r.meta}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <p className="m-0 break-keep text-center text-[15px] leading-[1.7] text-gray-03">
            {COPY.combos.footNormal}<strong className="text-primary-main">{COPY.combos.footStrong}</strong>
          </p>
        </div>
      </Section>

      {/* DEVICES */}
      <Section id="devices" className="tb:py-[100px]">
        <div className="flex flex-col gap-6 tb:gap-11">
          <div className="flex flex-col items-center gap-3 text-center">
            <Kicker>{COPY.devices.kicker}</Kicker>
            <h2 className="m-0 text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[34px] tb:leading-[1.4]">{COPY.devices.title}</h2>
            <p className="m-0 text-[16px] leading-[1.8] text-gray-03">{COPY.devices.description}</p>
          </div>
          <div className="flex flex-col gap-3 tb:gap-[22px]">
            {RECOVERY_DEVICES.map((d, i) => (
              <article
                key={d.name}
                className={`grid grid-cols-1 items-center gap-3.5 rounded-[26px] border border-gray-01 p-[18px] tb:gap-10 tb:px-[30px] tb:py-[26px] ${
                  i % 2 === 1 ? "bg-gray-00" : "bg-white"
                } ${d.flip ? "tb:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]" : "tb:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]"}`}
              >
                <ImageSlot label={d.photo} src={d.src} className={`aspect-[16/10] rounded-[18px] bg-gray-00 ${d.flip ? "tb:order-2" : ""}`} />
                <div className={`flex flex-col gap-2.5 tb:gap-3 ${d.flip ? "tb:order-1" : ""}`}>
                  <Kicker size="text-[13.5px]">{d.kicker}</Kicker>
                  <h3 className="m-0 break-keep text-[20px] leading-[1.4] tracking-[-0.03em] tb:text-[26px] tb:leading-[1.35]">{d.name}</h3>
                  <p className="m-0 break-keep text-[13.5px] leading-[1.7] text-gray-03 tb:text-[15.5px] tb:leading-[1.85]">{d.desc}</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {d.tags.map((t) => (
                      <span key={t} className="rounded-full bg-primary-main px-[13px] py-[7px] text-[12px] font-bold text-white tb:px-4 tb:py-2 tb:text-[13px]">{t}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setDevice(d)}
                    className="mt-2.5 w-fit cursor-pointer rounded-full border border-gray-02 bg-transparent px-[22px] py-3 text-[13.5px] font-bold text-gray-03"
                  >
                    {COPY.devices.detailButton}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* JOURNEY */}
      <Section id="journey" bg="bg-gray-00" className="tb:py-[100px]">
        <div className="flex flex-col gap-6 tb:gap-10">
          <div className="flex flex-col gap-3.5">
            <Kicker>{COPY.journey.kicker}</Kicker>
            <h2 className="m-0 max-w-[760px] break-keep text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[34px] tb:leading-[1.4]">{COPY.journey.title}</h2>
            <p className="m-0 max-w-[620px] break-keep text-[16px] leading-[1.8] text-gray-03">{COPY.journey.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 tb:grid-cols-3 tb:gap-4 dt:grid-cols-5">
            {RECOVERY_JOURNEY.map((j) => (
              <div key={j.no} className="flex flex-col gap-3 rounded-[22px] bg-white px-4 py-[18px] tb:px-6 tb:py-7">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-sub-03 text-[14px] font-bold text-primary-main">{j.no}</span>
                <span className="break-keep text-[15px] font-bold leading-[1.35] tb:text-[18px]">{j.title}</span>
                <p className="m-0 hidden break-keep text-[14px] leading-[1.75] text-gray-03 tb:block">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* RECORDS */}
      <Section id="records" bg="bg-primary-main">
        <div className="flex flex-col gap-6 tb:gap-9">
          <div className="relative flex flex-col items-center gap-3 text-center">
            <Kicker light>{COPY.records.kicker}</Kicker>
            <h2 className="m-0 text-[24px] leading-[1.42] tracking-[-0.03em] text-white tb:text-[32px] tb:leading-[1.4]">{COPY.records.title}</h2>
            <p className="m-0 break-keep text-[15.5px] leading-[1.8] text-white/65">{COPY.records.description}</p>
            <div className="hidden gap-2 tb:absolute tb:bottom-0 tb:right-0 tb:flex">
              <button
                type="button"
                onClick={() => moveRec(-1)}
                aria-label="이전 기록"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/40 bg-transparent text-xl text-white transition hover:bg-white/10"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => moveRec(1)}
                aria-label="다음 기록"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/40 bg-transparent text-xl text-white transition hover:bg-white/10"
              >
                →
              </button>
            </div>
          </div>
          <div
            ref={recTrackRef}
            onScroll={updateRecActive}
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden tb:-mx-6 tb:px-6"
          >
            {RECOVERY_RECORDS.map((ig) => (
              <article key={ig.handle} className="w-[76vw] flex-none snap-start overflow-hidden rounded-[22px] bg-white tb:w-[260px]">
                <ImageSlot label={ig.photo} className="aspect-square rounded-none" />
                <div className="flex flex-col gap-2 px-5 pb-[22px] pt-[18px]">
                  <span className="text-[12.5px] font-bold text-gray-02">{ig.handle}</span>
                  <p className="m-0 break-keep text-[14.5px] leading-[1.7] text-black">{ig.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="-mt-2 flex justify-center gap-2" aria-hidden="true">
            {RECOVERY_RECORDS.map((ig, index) => (
              <span key={ig.handle} className={`h-2 rounded-full transition-all ${recActive === index ? "w-8 bg-white" : "w-2 bg-white/30"}`} />
            ))}
          </div>
          <a href="#contact" className="flex items-center gap-2.5 self-center rounded-full border border-white/45 px-[26px] py-3.5 text-[14.5px] font-bold text-white no-underline transition hover:opacity-90">
            <span aria-hidden="true">◎</span>{COPY.records.moreButton}
          </a>
        </div>
      </Section>

      {/* PASSES */}
      <Section id="passes" className="tb:py-[100px]">
        <div className="flex flex-col gap-6 tb:gap-9">
          <div className="flex gap-1.5 self-center rounded-full border border-gray-01 bg-gray-00 p-1 tb:p-1.5">
            {([["theme", COPY.passes.themeTab], ["single", COPY.passes.singleTab]] as const).map(([key, label]) => {
              const on = tab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  className={`cursor-pointer rounded-full border-0 px-3.5 py-[11px] text-[13px] font-bold transition tb:px-[30px] tb:py-[13px] tb:text-[14.5px] ${
                    on ? "bg-primary-main text-white" : "bg-transparent text-gray-02"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {tab === "theme" ? (
            <>
              <div className="flex flex-col items-center gap-3 text-center">
                <Kicker>{COPY.passes.themeKicker}</Kicker>
                <h2 className="m-0 text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[32px] tb:leading-[1.4]">{COPY.passes.themeTitle}</h2>
              </div>
              <div className="grid grid-cols-1 gap-3.5 tb:gap-5 dt:grid-cols-2">
                {RECOVERY_THEMES.map((t) => (
                  <article key={t.name} className="relative flex flex-col gap-3.5 overflow-hidden rounded-[26px] border border-gray-01 bg-white px-5 py-[22px] tb:gap-[18px] tb:px-[30px] tb:py-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="m-0 break-keep text-[19px] leading-[1.35] tb:text-[24px]">{t.name}</h3>
                        <span className="w-fit rounded-full bg-primary-sub-03 px-3.5 py-1.5 text-[12.5px] font-bold text-primary-main">{COPY.passes.timePrefix} {t.time}</span>
                      </div>
                      <span className="flex h-[62px] w-[62px] flex-none flex-col items-center justify-center rounded-full bg-primary-main leading-[1.1] text-white tb:h-[74px] tb:w-[74px]">
                        <span className="text-[18px] font-bold tracking-[-0.03em] tb:text-[22px]">{t.off}</span>
                        <span className="text-[11px] tracking-[0.1em] opacity-80">OFF</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-[15px] text-gray-02 line-through">{t.was}</span>
                      <span className="text-[28px] font-bold tracking-[-0.04em] text-primary-main tb:text-[34px]">{t.now}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {t.items.map((it) => (
                        <span key={it} className="rounded-full bg-gray-00 px-3.5 py-2 text-[13px] font-bold text-gray-03">{it}</span>
                      ))}
                    </div>
                    <p className="m-0 break-keep text-[13.5px] leading-[1.7] text-gray-03 tb:text-[14.5px] tb:leading-[1.8]">{t.desc}</p>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center gap-3 text-center">
                <Kicker>{COPY.passes.singleKicker}</Kicker>
                <h2 className="m-0 text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[32px] tb:leading-[1.4]">{COPY.passes.singleTitle}</h2>
              </div>
              <div className="flex flex-col">
                {RECOVERY_TRIALS.map((t, i) => (
                  <article key={t.name} className={`grid grid-cols-1 items-center gap-3 p-5 tb:grid-cols-[minmax(0,1fr)_240px] tb:gap-8 tb:px-[30px] tb:py-[26px] ${i === 0 ? "" : "border-t border-gray-01"}`}>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="m-0 break-keep text-[17px] leading-[1.35] tb:text-[21px]">{t.name}</h3>
                        {t.time && <span className="flex-none rounded-full bg-primary-sub-03 px-3 py-[5px] text-[12.5px] font-bold text-primary-main">{t.time}</span>}
                      </div>
                      <p className="m-0 max-w-[620px] break-keep text-[13px] leading-[1.65] text-gray-03 tb:text-[14.5px] tb:leading-[1.7]">{t.desc}</p>
                    </div>
                    <div className="flex flex-row flex-wrap items-baseline gap-2.5 tb:flex-col tb:items-end tb:gap-1">
                      <span className="text-[14px] text-gray-02 line-through">{t.was}</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[15px] font-bold text-primary-main">{t.off}</span>
                        <span className="text-[22px] font-bold tracking-[-0.03em] text-black tb:text-[26px]">{t.now}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <p className="m-0 break-keep text-[13.5px] leading-[1.7] text-gray-02">{COPY.passes.note}</p>
            </>
          )}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" bg="bg-gray-00" className="tb:py-[100px]">
        <div className="flex flex-col gap-6 tb:gap-[34px]">
          <div className="flex flex-col gap-3.5">
            <Kicker>{COPY.faq.kicker}</Kicker>
            <h2 className="m-0 text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[34px] tb:leading-[1.4]">{COPY.faq.title}</h2>
          </div>
          <div className="flex max-w-[900px] flex-col gap-3">
            {RECOVERY_FAQ.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-[18px] bg-white">
                <button
                  type="button"
                  onClick={() => setFaqOpen((v) => (v === i ? null : i))}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 border-0 bg-transparent px-5 py-[18px] text-left text-[15px] font-bold tracking-[-0.02em] text-black tb:px-[26px] tb:py-[22px] tb:text-[16px]"
                >
                  {f.q}
                  <span className="flex-none text-[20px] font-medium text-primary-main">{faqOpen === i ? "−" : "+"}</span>
                </button>
                {faqOpen === i && <p className="m-0 break-keep px-5 pb-6 text-[15px] leading-[1.9] text-gray-03 tb:px-[26px]">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden bg-primary-sub-03 px-5 py-[54px] tb:px-6 tb:py-[96px]">
        <div className="absolute -right-[130px] -top-[150px] h-[400px] w-[400px] rounded-full bg-primary-sub-02" />
        <div className="relative mx-auto flex w-full flex-col items-center gap-[22px] text-center dt:max-w-[1280px]">
          <h2 className="m-0 max-w-[700px] break-keep text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[36px] tb:leading-[1.4]">{COPY.contact.title}</h2>
          <p className="m-0 max-w-[560px] break-keep text-[16px] leading-[1.9] text-gray-03">{COPY.contact.description}</p>
          <div className="mt-3 flex w-full flex-col items-stretch gap-3 tb:w-auto tb:flex-row">
            <a href="#contact" className="rounded-full bg-primary-main px-[34px] py-[17px] text-center text-[15.5px] font-bold text-white no-underline transition hover:opacity-90">
              {COPY.contact.primaryButton}
            </a>
            <a href="#contact" className="rounded-full border border-primary-main px-[34px] py-4 text-center text-[15.5px] font-bold text-primary-main no-underline transition hover:opacity-90">
              {COPY.contact.secondaryButton}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-5 py-11 tb:px-6">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-5 dt:max-w-[1280px]">
          <span className="flex items-baseline gap-2">
            <span className="text-[17px] font-bold text-white">{COPY.footer.brandKo}</span>
            <span className={`${EN} text-[15px] tracking-[0.1em] text-primary-sub-02`}>{COPY.footer.brandEn}</span>
          </span>
          <span className="text-[13.5px] text-white/50">{COPY.footer.copyright}</span>
        </div>
      </footer>

      {/* 기기 상세 모달 */}
      {device && (
        <div onClick={() => setDevice(null)} className="fixed inset-0 z-[60] grid place-items-center bg-black/65 p-6">
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[88vh] w-full max-w-[720px] flex-col gap-5 overflow-auto rounded-[26px] bg-white px-[22px] pb-6 pt-[26px] tb:px-[34px] tb:pb-7 tb:pt-8"
          >
            <div className="flex items-baseline justify-between gap-5">
              <h3 className="m-0 text-[20px] leading-[1.35] tb:text-[24px]">{device.name}</h3>
              <Kicker size="text-[13.5px]">{device.kicker}</Kicker>
            </div>
            <ImageSlot label={device.photo} src={device.src} className="aspect-video rounded-[18px] bg-gray-00" />
            <p className="m-0 break-keep text-[15.5px] leading-[1.85] text-gray-03">{device.desc}</p>
            <button type="button" onClick={() => setDevice(null)} className="cursor-pointer self-start rounded-full border-0 bg-black px-[26px] py-[13px] text-[14px] font-bold text-white">
              {COPY.devices.modalCloseLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
