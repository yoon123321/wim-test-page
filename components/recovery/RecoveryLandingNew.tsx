"use client";

/**
 * 기기관리(리커버리) 랜딩 — 개선안(NEW) · 테일윈드 + 디자인 시스템 토큰 버전
 * 디자인 원본: wim-recovery-landing-v2.tsx (인라인 스타일 단일 파일) 을 레포 규칙에 맞게 옮긴 것.
 *
 * - 색상은 globals.css @theme 팔레트 토큰만 사용 (primary-*, gray-*, black, white)
 * - 문구·데이터는 data/recovery-new.ts 에서 수정
 * - 히어로(유형 검사 CTA) → 왜 회복인가 → 오늘의 조합 → 기기 5종 → 방문 기록 → 가격 → FAQ → 마무리 CTA
 * - 사진은 src 가 있으면 보여주고, 파일이 없으면 alt 문구를 자리표시로 그린다
 */

import { useState } from "react";
import Link from "next/link";
import {
  RECOVERY_COPY,
  RECOVERY_HERO_VIDEO,
  RECOVERY_DEVICES,
  RECOVERY_SITUATIONS,
  RECOVERY_COMBOS,
  RECOVERY_RECORDS,
  RECOVERY_THEMES,
  RECOVERY_TRIALS,
  RECOVERY_FAQ,
} from "@/data/recovery-new";

const FONT_CSS = `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap");`;

const EN = "font-['EB_Garamond',serif] font-medium";
const H2 = "m-0 break-keep text-[23px] font-bold leading-[1.45] tracking-[-0.025em] tb:text-[32px] tb:leading-[1.4]";

/** 사진 슬롯 — 파일이 없으면 alt 를 자리표시로 */
function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`overflow-hidden bg-gray-00 ${className}`}>
      {failed ? (
        <div className="grid h-full w-full place-items-center break-keep p-4 text-center text-[13px] text-gray-02">{alt}</div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- 디자인 원본 자산
        <img src={src} alt={alt} onError={() => setFailed(true)} className="block h-full w-full object-cover" />
      )}
    </div>
  );
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`${EN} text-[14px] tracking-[0.2em] ${light ? "text-primary-sub-02" : "text-primary-main"}`}>{children}</span>;
}

function Section({ id, bg = "bg-white", children }: { id: string; bg?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`${bg} px-5 py-14 tb:px-6 tb:py-24`}>
      <div className="mx-auto w-full max-w-[350px] tb:max-w-[688px] dt:max-w-[1280px]">{children}</div>
    </section>
  );
}

const lines = (arr: readonly string[]) =>
  arr.map((line, i) => (
    <span key={line}>
      {i > 0 && <br />}
      {line}
    </span>
  ));

/** videoHero: 버전3(개선안 C)에서 히어로 배경을 옥시젠챔버 영상으로 */
export default function RecoveryLandingNew({ videoHero = false }: { videoHero?: boolean } = {}) {
  const [situation, setSituation] = useState(0);
  const [tab, setTab] = useState<"theme" | "single">("single");
  const [faqOpen, setFaqOpen] = useState<number>(0);
  const COPY = RECOVERY_COPY;
  const combo = RECOVERY_COMBOS[situation];

  return (
    <div className="bg-white font-['Pretendard_Variable',Pretendard,sans-serif] text-black antialiased">
      <style dangerouslySetInnerHTML={{ __html: FONT_CSS }} />

      {/* 히어로 */}
      <section id="top" className="relative overflow-hidden bg-gradient-to-b from-primary-deeper to-black">
        {/* 버전3(개선안 C): 문구 없이 영상만 */}
        {videoHero && (
          <video
            src={RECOVERY_HERO_VIDEO.video}
            aria-label={RECOVERY_HERO_VIDEO.label}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            className="pointer-events-none block h-[420px] w-full object-cover tb:h-[640px]"
          />
        )}
        {!videoHero && (
        <div className="relative mx-auto flex w-full max-w-[350px] flex-col items-center gap-[18px] px-5 pb-[88px] pt-24 text-center tb:max-w-[688px] tb:gap-[26px] tb:pb-[140px] tb:pt-[152px] dt:max-w-[1280px]">
          <span className={`${EN} text-[13.5px] tracking-[0.28em] text-primary-sub-02`}>{COPY.hero.kicker}</span>
          <h1 className="m-0 max-w-[900px] break-keep text-[30px] font-bold leading-[1.4] tracking-[-0.025em] text-white tb:text-[48px] tb:leading-[1.36]">
            {lines(COPY.hero.titleLines)}
          </h1>
          <p className="m-0 max-w-[620px] break-keep text-[15px] leading-[1.8] text-white/70 tb:text-[17px] tb:leading-[1.85]">{lines(COPY.hero.descriptionLines)}</p>
          <Link
            href={COPY.hero.ctaHref}
            className="mt-2 w-full rounded-full bg-primary-sub-02 px-6 py-[17px] text-center text-[16px] font-bold text-primary-deeper no-underline transition hover:opacity-90 tb:mt-[18px] tb:w-auto tb:px-[42px] tb:py-[18px]"
          >
            {COPY.hero.ctaButton}
          </Link>
        </div>
        )}
      </section>

      {/* 왜 회복인가 */}
      <Section id="intro">
        <div className="grid grid-cols-1 items-center gap-6 tb:gap-8 dt:grid-cols-[minmax(0,1fr)_340px] dt:gap-14">
          <div className="flex flex-col gap-5">
            <Kicker>{COPY.intro.kicker}</Kicker>
            <h2 className={H2}>
              {lines(COPY.intro.titleLines)}
              <br />
              <span className="text-primary-main">{COPY.intro.titleAccent}</span>
            </h2>
            <p className="m-0 max-w-[460px] break-keep text-[15px] leading-[1.85] text-gray-03 tb:text-[16.5px]">{COPY.intro.description}</p>
          </div>
          <Photo src={COPY.intro.photo.src} alt={COPY.intro.photo.alt} className="aspect-[4/3] rounded-[26px] tb:aspect-[16/10] dt:aspect-[4/5]" />
        </div>
      </Section>

      {/* 오늘의 조합 */}
      <Section id="combos" bg="bg-primary-sub-03">
        <div className="flex flex-col gap-6 tb:gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <Kicker>{COPY.combos.kicker}</Kicker>
            <h2 className={H2}>{COPY.combos.title}</h2>
            <p className="m-0 max-w-[680px] break-keep text-[15px] leading-[1.8] text-gray-03 tb:text-[16px]">{COPY.combos.description}</p>
          </div>

          {/* 목표 선택(테마) → 사진 → 조합 설명 순서, 모바일·PC 동일한 세로 흐름 */}
          <div className="mx-auto flex w-full max-w-[760px] flex-col gap-3.5 tb:gap-6">
            <div className="flex flex-col gap-3">
              <span className={`${EN} text-[12.5px] tracking-[0.18em] text-gray-02`}>{COPY.combos.selectLabel}</span>
              <div className="grid grid-cols-2 gap-2 tb:grid-cols-4">
                {RECOVERY_SITUATIONS.map((label, i) => {
                  const on = situation === i;
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setSituation(i)}
                      aria-pressed={on}
                      className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-full border-2 px-4 py-2.5 text-left text-[14px] font-bold tracking-[-0.01em] transition tb:justify-center tb:py-3.5 tb:text-[15px] ${
                        on ? "border-primary-main bg-primary-main text-white shadow-[0_8px_20px_rgba(21,94,53,.28)]" : "border-primary-sub-02 bg-white text-primary-main shadow-sm"
                      }`}
                    >
                      {label}
                      <span aria-hidden="true" className="text-[15px] font-medium tb:hidden">→</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <Photo src={combo.src} alt={combo.alt} className="aspect-[16/9] rounded-[20px] tb:rounded-[26px]" />

            <div className="flex flex-col gap-2.5 tb:gap-[18px]">
              <div className="flex flex-wrap gap-2">
                {combo.steps.map((s) => (
                  <span key={s} className="rounded-full bg-white px-4 py-2 text-[13.5px] font-bold text-primary-main tb:px-5 tb:py-[11px] tb:text-[15px]">{s}</span>
                ))}
              </div>
              <h3 className={`${EN} m-0 text-[24px] leading-[1.2] tracking-[-0.025em] tb:text-[38px]`}>{combo.title}</h3>
              <p className="m-0 break-keep text-[14px] leading-[1.7] text-gray-03 tb:text-[17px]">{combo.desc}</p>
            </div>
          </div>

          <p className="m-0 break-keep text-center text-[15px] leading-[1.7] text-gray-03">
            {COPY.combos.footNormal}<strong className="text-primary-main">{COPY.combos.footStrong}</strong>
          </p>
        </div>
      </Section>

      {/* 기기 5종 */}
      <Section id="devices">
        <div className="flex flex-col gap-6 tb:gap-11">
          <div className="flex flex-col items-center gap-3 text-center">
            <Kicker>{COPY.devices.kicker}</Kicker>
            <h2 className={H2}>{COPY.devices.title}</h2>
          </div>
          <div className="flex flex-col gap-3 tb:gap-[22px]">
            {RECOVERY_DEVICES.map((d) => (
              <article
                key={d.name}
                className={`grid grid-cols-1 items-center gap-3.5 rounded-[26px] border border-gray-01 p-[18px] tb:gap-10 tb:px-[30px] tb:py-[26px] ${
                  d.flip ? "bg-gray-00 dt:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]" : "bg-white dt:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]"
                }`}
              >
                <Photo src={d.src} alt={d.alt} className={`aspect-[16/10] rounded-[18px] ${d.flip ? "dt:order-2" : ""}`} />
                <div className={`flex flex-col gap-2.5 tb:gap-3 ${d.flip ? "dt:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`${EN} text-[13.5px] tracking-[0.16em] text-primary-main`}>{d.kicker}</span>
                    {d.badge && <span className="rounded-full border border-primary-main px-[11px] py-1 text-[12px] font-bold text-primary-main">{d.badge}</span>}
                  </div>
                  <h3 className="m-0 break-keep text-[20px] font-bold leading-[1.4] tracking-[-0.025em] tb:text-[26px] tb:leading-[1.35]">{d.name}</h3>
                  <p className="m-0 break-keep text-[15px] font-medium leading-[1.6] text-primary-main tb:text-[16.5px]">{d.lead}</p>
                  <p className="m-0 break-keep text-[13.5px] leading-[1.7] text-gray-03 tb:text-[15.5px] tb:leading-[1.85]">{d.desc}</p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {d.tags.map((t) => (
                      <span key={t} className="rounded-full bg-primary-sub-03 px-3 py-1.5 text-[12.5px] font-bold text-primary-main">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>


      {/* 방문 기록 */}
      <Section id="records" bg="bg-primary-main">
        <div className="flex flex-col gap-6 tb:gap-9">
          <div className="flex flex-col items-center gap-3 text-center">
            <Kicker light>{COPY.records.kicker}</Kicker>
            <h2 className={`${H2} text-white`}>{COPY.records.title}</h2>
            <p className="m-0 break-keep text-[15px] leading-[1.8] text-white/65 tb:text-[15.5px]">{COPY.records.description}</p>
          </div>
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 pt-1 [scrollbar-width:none] tb:-mx-6 tb:px-6 [&::-webkit-scrollbar]:hidden">
            {RECOVERY_RECORDS.map((r) => (
              <article key={r.handle} className="w-[250px] flex-none snap-start overflow-hidden rounded-[22px] bg-white tb:w-[260px]">
                <Photo src={r.src} alt={r.alt} className="aspect-square" />
                <div className="flex flex-col gap-2 px-5 pb-[22px] pt-[18px]">
                  <span className="text-[12.5px] font-bold text-gray-02">{r.handle}</span>
                  <p className="m-0 break-keep text-[14.5px] leading-[1.7] text-black">{r.body}</p>
                </div>
              </article>
            ))}
          </div>
          <a
            href={COPY.records.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 self-center rounded-full border border-white/45 px-[26px] py-3.5 text-[14.5px] font-bold text-white no-underline transition hover:opacity-90"
          >
            <span aria-hidden="true">◎</span>{COPY.records.moreButton}
          </a>
        </div>
      </Section>

      {/* 가격 */}
      <Section id="passes">
        <div className="flex flex-col gap-6 tb:gap-9">
          <div className="flex self-center gap-1.5 rounded-full border border-gray-01 bg-gray-00 p-1 tb:p-1.5">
            {(["theme", "single"] as const).map((k) => {
              const on = tab === k;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setTab(k)}
                  aria-pressed={on}
                  className={`cursor-pointer rounded-full border-0 px-4 py-3 text-[13.5px] font-bold transition tb:px-[30px] tb:py-[13px] tb:text-[15px] ${on ? "bg-primary-main text-white" : "bg-transparent text-gray-03"}`}
                >
                  {k === "theme" ? COPY.passes.themeTab : COPY.passes.singleTab}
                </button>
              );
            })}
          </div>

          {tab === "single" && (
            <>
              <div className="flex flex-col items-center gap-3 text-center">
                <Kicker>{COPY.passes.singleKicker}</Kicker>
                <h2 className={H2}>{COPY.passes.singleTitle}</h2>
              </div>
              <div className="flex flex-col divide-y divide-gray-01 overflow-hidden rounded-[26px] border border-gray-01 bg-white">
                {RECOVERY_TRIALS.map((t) => (
                  <article key={t.name} className="grid grid-cols-1 gap-3 p-5 tb:grid-cols-[minmax(0,1fr)_200px] tb:gap-5 tb:px-7 tb:py-6 dt:grid-cols-[minmax(0,1fr)_240px]">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="m-0 break-keep text-[17px] font-bold leading-[1.35] tracking-[-0.025em] tb:text-[21px]">{t.name}</h3>
                        {t.time && <span className="flex-none rounded-full bg-primary-sub-03 px-3 py-[5px] text-[12.5px] font-bold text-primary-main">{t.time}</span>}
                      </div>
                      <p className="m-0 max-w-[620px] break-keep text-[13px] leading-[1.65] text-gray-03 tb:text-[14.5px] tb:leading-[1.7]">{t.desc}</p>
                    </div>
                    <div className="flex flex-row flex-wrap items-baseline gap-2.5 tb:flex-col tb:items-end tb:gap-1">
                      <span className="text-[13px] text-gray-02 line-through tb:text-[14px]">{t.was}</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[15px] font-bold text-primary-main">{t.off}</span>
                        <span className="text-[22px] font-bold tracking-[-0.03em] tb:text-[26px]">{t.now}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <p className="m-0 break-keep text-[13.5px] leading-[1.7] text-gray-02">{COPY.passes.singleNote}</p>
            </>
          )}

          {tab === "theme" && (
            <>
              <div className="flex flex-col items-center gap-3 text-center">
                <Kicker>{COPY.passes.themeKicker}</Kicker>
                <h2 className={H2}>{COPY.passes.themeTitle}</h2>
              </div>
              <div className="grid grid-cols-1 gap-3.5 dt:grid-cols-2 dt:gap-5">
                {RECOVERY_THEMES.map((t) => (
                  <article key={t.name} className="flex flex-col gap-3.5 rounded-[26px] border border-gray-01 bg-white px-5 py-[22px] tb:gap-5 tb:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="m-0 break-keep text-[19px] font-bold leading-[1.35] tracking-[-0.025em] tb:text-[24px]">{t.name}</h3>
                        <span className="w-fit rounded-full bg-primary-sub-03 px-3.5 py-1.5 text-[12.5px] font-bold text-primary-main">{COPY.passes.timePrefix} {t.time}</span>
                      </div>
                      <span className="grid h-[62px] w-[62px] flex-none place-items-center rounded-full bg-primary-main text-center leading-none text-white tb:h-[72px] tb:w-[72px]">
                        <span className="text-[18px] font-bold tracking-[-0.03em] tb:text-[22px]">{t.off}</span>
                        <span className="text-[11px] tracking-[0.1em] opacity-80">OFF</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-[15px] text-gray-02 line-through">{t.was}</span>
                      <span className="text-[28px] font-bold tracking-[-0.04em] text-primary-main tb:text-[34px]">{t.now}</span>
                    </div>
                    <div className="flex flex-col gap-2.5 border-t border-gray-01 pt-[18px]">
                      <span className="text-[12.5px] font-bold tracking-[0.08em] text-gray-02">{COPY.passes.itemsLabel}</span>
                      <div className="flex flex-wrap gap-[7px]">
                        {t.items.map((i) => (
                          <span key={i} className="whitespace-nowrap rounded-full bg-gray-00 px-3.5 py-2 text-[13px] font-bold text-gray-03">{i}</span>
                        ))}
                      </div>
                    </div>
                    <p className="m-0 break-keep text-[13.5px] leading-[1.7] text-gray-03 tb:text-[14.5px] tb:leading-[1.75]">{t.desc}</p>
                    <Link href="/contact" className="mt-auto rounded-full bg-primary-main px-6 py-3.5 text-center text-[14.5px] font-bold text-white no-underline transition hover:opacity-90">
                      {COPY.passes.bookButton}
                    </Link>
                  </article>
                ))}
              </div>
              <p className="m-0 break-keep text-[13.5px] leading-[1.7] text-gray-02">{COPY.passes.themeNote}</p>
            </>
          )}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" bg="bg-gray-00">
        <div className="flex flex-col gap-6 tb:gap-[34px]">
          <div className="flex flex-col gap-3.5">
            <Kicker>{COPY.faq.kicker}</Kicker>
            <h2 className={H2}>{COPY.faq.title}</h2>
          </div>
          <div className="flex max-w-[900px] flex-col gap-3">
            {RECOVERY_FAQ.map((f, i) => {
              const open = faqOpen === i;
              return (
                <div key={f.q} className="overflow-hidden rounded-[18px] bg-white">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setFaqOpen(open ? -1 : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent px-5 py-[18px] text-left text-[14.5px] font-bold tracking-[-0.02em] text-black tb:gap-5 tb:px-[26px] tb:py-[22px] tb:text-[16px]"
                  >
                    {f.q}
                    <span className="flex-none text-[20px] font-medium text-primary-main">{open ? "−" : "+"}</span>
                  </button>
                  {open && <p className="m-0 break-keep px-5 pb-5 text-[14px] leading-[1.8] text-gray-03 tb:px-[26px] tb:pb-6 tb:text-[15px] tb:leading-[1.9]">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 마무리 CTA */}
      <section id="contact" className="relative overflow-hidden bg-primary-sub-03 px-5 py-14 tb:px-6 tb:py-24">
        <div aria-hidden="true" className="absolute -right-[130px] -top-[150px] h-[400px] w-[400px] rounded-full bg-primary-sub-02" />
        <div className="relative mx-auto flex w-full max-w-[350px] flex-col items-center gap-[22px] text-center tb:max-w-[688px] dt:max-w-[1280px]">
          <h2 className="m-0 max-w-[700px] break-keep text-[26px] font-bold leading-[1.4] tracking-[-0.025em] tb:text-[40px]">{COPY.contact.title}</h2>
          <p className="m-0 max-w-[560px] break-keep text-[15px] leading-[1.9] text-gray-03 tb:text-[16px]">{COPY.contact.description}</p>
          <div className="mt-3 flex w-full flex-col items-stretch gap-3 tb:w-auto tb:flex-row">
            <Link href={COPY.contact.primaryHref} className="rounded-full bg-primary-main px-[34px] py-[17px] text-center text-[15.5px] font-bold text-white no-underline transition hover:opacity-90">
              {COPY.contact.primaryButton}
            </Link>
            <a
              href={COPY.contact.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary-main px-[34px] py-4 text-center text-[15.5px] font-bold text-primary-main no-underline transition hover:opacity-90"
            >
              {COPY.contact.secondaryButton}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
