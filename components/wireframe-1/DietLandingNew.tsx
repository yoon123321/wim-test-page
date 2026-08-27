"use client";

/**
 * 감량프로그램 랜딩 — 개선안(NEW) · 테일윈드 + 디자인 시스템 토큰 버전
 *
 * - 색상은 globals.css @theme 팔레트 토큰만 사용 (primary-*, gray-*, black, white)
 * - 문구·데이터는 content/diet-new.ts 에서 수정
 * - 1분 유형 검사(12문항) 모달, 3단계 여정 모달, 관리 8종 모달 포함
 * - 이미지 자리는 <ImageSlot src="...">로 실사 교체
 */

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  DIET_NEW_COPY,
  DIET_WORRIES,
  DIET_SURVEY,
  DIET_SURVEY_RESULTS,
  DIET_METRICS,
  DIET_ROADMAP,
  DIET_TEAM,
  DIET_REVIEWS,
  DIET_RATING_BARS,
  DIET_PLANS,
  DIET_PLAN_FEATURES,
  DIET_PLAN_STATES,
  DIET_FAQ,
  type DietStep,
} from "@/content/diet-new";

const FONT_CSS = `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap");`;

const EN = "font-['EB_Garamond',serif]";

/* SVG 전용 — 팔레트 토큰 CSS 변수 */
const V = {
  green: "var(--color-primary-main)",
  sage: "var(--color-primary-sub-01)",
  mint: "var(--color-primary-sub-02)",
  g1: "var(--color-gray-01)",
  g2: "var(--color-gray-02)",
  g3: "var(--color-gray-03)",
} as const;

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

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`${EN} text-[14px] tracking-[0.2em] ${light ? "text-primary-sub-02" : "text-primary-main"}`}>{children}</span>;
}

function Section({ id, bg = "bg-white", className = "", children }: { id?: string; bg?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`${bg} px-5 py-[54px] tb:px-6 tb:py-[100px] ${className}`}>
      <div className="mx-auto w-full dt:max-w-[1280px]">{children}</div>
    </section>
  );
}

function Modal({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-[90] grid place-items-center bg-black/70 p-6">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[88vh] w-full max-w-[560px] flex-col gap-4 overflow-auto rounded-[28px] bg-white px-[22px] py-[26px] tb:px-9 tb:pb-8 tb:pt-[34px]"
      >
        {children}
      </div>
    </div>
  );
}

/* ───────────────────────── 그래프 ───────────────────────── */

function WeightCurve() {
  return (
    <svg viewBox="0 0 900 340" className="block h-auto w-full" role="img" aria-label="관리 종료 후 체중 곡선 비교">
      <line x1="60" y1="290" x2="860" y2="290" stroke={V.g1} strokeWidth="1" />
      <line x1="60" y1="40" x2="60" y2="290" stroke={V.g1} strokeWidth="1" />
      <line x1="440" y1="34" x2="440" y2="296" stroke={V.g2} strokeWidth="1.5" strokeDasharray="6 6" />
      <text x="440" y="24" fontSize="15" fontWeight="700" textAnchor="middle" fill={V.green}>관리 종료</text>
      <line x1="60" y1="70" x2="860" y2="70" stroke={V.g1} strokeWidth="1" strokeDasharray="4 6" />
      <text x="52" y="75" fontSize="13" textAnchor="end" fill={V.g2}>시작 체중</text>
      <text x="52" y="245" fontSize="13" textAnchor="end" fill={V.g2}>목표</text>
      <path d="M60 70 C 190 82, 320 190, 440 240 C 530 262, 600 200, 690 148 C 760 108, 810 82, 860 74" fill="none" stroke={V.g2} strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
      <circle cx="860" cy="74" r="6" fill={V.g2} />
      <text x="846" y="52" fontSize="14.5" fontWeight="700" textAnchor="end" fill={V.g3}>일반 다이어트 — 다시 원래대로</text>
      <path d="M60 70 C 190 82, 320 190, 440 240 C 560 252, 660 244, 760 246 C 800 247, 830 246, 860 246" fill="none" stroke={V.green} strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="440" cy="240" r="7" fill={V.green} />
      <circle cx="860" cy="246" r="7.5" fill={V.green} />
      <text x="846" y="224" fontSize="15" fontWeight="700" textAnchor="end" fill={V.green}>윔 — 습관이 남아 유지</text>
      <text x="452" y="286" fontSize="13.5" fill={V.g2}>여기서부터가 진짜 관리 구간입니다</text>
    </svg>
  );
}

function Hexagon() {
  return (
    <svg viewBox="0 0 300 290" className="w-full max-w-[240px] tb:max-w-[300px]" role="img" aria-label="6개 지표 전후 비교 그래프">
      <polygon points="150,40 236.6,90 236.6,190 150,240 63.4,190 63.4,90" fill="none" stroke={V.g1} strokeWidth="1" />
      <polygon points="150,74 207.2,107 207.2,173 150,206 92.8,173 92.8,107" fill="none" stroke={V.g1} strokeWidth="1" />
      <polygon points="150,107 178.6,123.5 178.6,156.5 150,173 121.4,156.5 121.4,123.5" fill="none" stroke={V.g1} strokeWidth="1" />
      {[[150, 40], [236.6, 90], [236.6, 190], [150, 240], [63.4, 190], [63.4, 90]].map(([x, y]) => (
        <line key={`${x}-${y}`} x1="150" y1="140" x2={x} y2={y} stroke={V.g1} strokeWidth="1" />
      ))}
      <polygon points="150,55 227.9,95 193.3,165 150,195 115.4,160 111,117.5" fill={V.g2} fillOpacity="0.16" stroke={V.g2} strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="150,85 189,117.5 219.3,180 150,225 72.1,185 76.4,97.5" fill={V.green} fillOpacity="0.14" stroke={V.green} strokeWidth="2.5" strokeLinejoin="round" />
      <text x="150" y="26" textAnchor="middle" fontSize="12" fill={V.g3}>체중</text>
      <text x="252" y="84" textAnchor="start" fontSize="12" fill={V.g3}>체지방률</text>
      <text x="252" y="200" textAnchor="start" fontSize="12" fill={V.g3}>골격근량</text>
      <text x="150" y="264" textAnchor="middle" fontSize="12" fill={V.g3}>기초대사량</text>
      <text x="48" y="200" textAnchor="end" fontSize="12" fill={V.g3}>활동량</text>
      <text x="48" y="84" textAnchor="end" fontSize="12" fill={V.g3}>수면의 질</text>
    </svg>
  );
}

/* ───────────────────────── 페이지 ───────────────────────── */

export default function DietLandingNew() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [step, setStep] = useState<DietStep | null>(null);
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const COPY = DIET_NEW_COPY;

  const score = answers.length;
  const result = useMemo(() => DIET_SURVEY_RESULTS.find((r) => score <= r.max) ?? DIET_SURVEY_RESULTS[DIET_SURVEY_RESULTS.length - 1], [score]);

  const toggleAnswer = (i: number) => setAnswers((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  const closeSurvey = () => { setSurveyOpen(false); setShowResult(false); };

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
      <section id="top" className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <ImageSlot label={COPY.hero.imageLabel} className="h-full w-full rounded-none" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/80" />
        <div className="relative mx-auto flex w-full flex-col items-center gap-6 px-6 pb-20 pt-24 text-center tb:pb-[120px] tb:pt-32 dt:max-w-[1280px]">
          <Kicker light>{COPY.hero.kicker}</Kicker>
          <h1 className="m-0 max-w-[760px] break-keep text-[30px] leading-[1.3] tracking-[-0.035em] text-white tb:text-[48px]">{lines(COPY.hero.titleLines)}</h1>
          <p className="m-0 max-w-[600px] break-keep text-[16px] leading-[1.8] text-white/80 tb:text-[17px]">{COPY.hero.description}</p>
        </div>
      </section>

      {/* 고민의 벽 */}
      <Section id="problem" bg="bg-primary-main" className="overflow-hidden">
        <div className="flex flex-col gap-6 tb:gap-11">
          <div className="flex flex-col items-center gap-3.5 text-center">
            <Kicker light>{COPY.problem.kicker}</Kicker>
            <h2 className="m-0 break-keep text-[24px] leading-[1.42] tracking-[-0.03em] text-white tb:text-[36px] tb:leading-[1.4]">{lines(COPY.problem.titleLines)}</h2>
            <p className="m-0 break-keep text-[15px] leading-[1.8] text-white/55 tb:text-[16px]">{COPY.problem.description}</p>
          </div>

          {/* 고민 마퀴 */}
          <div className="relative -mx-5 overflow-hidden tb:-mx-6 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
            <div className="flex w-max animate-[wim-marquee_38s_linear_infinite] gap-3">
              {[...DIET_WORRIES, ...DIET_WORRIES].map((w, i) => (
                <span key={`${w}-${i}`} className="flex-none whitespace-nowrap rounded-full border border-white/15 px-5 py-3 text-[14.5px] text-white/70">{w}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <span className="h-16 w-px bg-gradient-to-b from-transparent to-white/50" />
            <p className="m-0 max-w-[640px] break-keep text-center text-[20px] font-bold leading-[1.5] text-white tb:text-[26px]">{lines(COPY.problem.statementLines)}</p>
            <p className="m-0 max-w-[560px] break-keep text-center text-[14.5px] leading-[1.8] text-white/60 tb:text-[15.5px]">{COPY.problem.statementSub}</p>
          </div>

          {/* 페르소나 카드 — 우선 카드 형태만 (실제 인물·문구는 추후 교체) */}
          <div className="mx-auto grid w-full max-w-[640px] grid-cols-1 gap-4 tb:grid-cols-2 tb:gap-5">
            {[1, 2].map((n) => (
              <div key={n} className="flex flex-col gap-4 rounded-[22px] border border-white/15 bg-white/5 p-5 tb:p-6">
                <ImageSlot label={`페르소나 ${n} 사진`} className="aspect-[4/3] rounded-[16px]" />
                <div className="flex flex-col gap-1.5">
                  <span className={`${EN} text-[13px] tracking-[0.14em] text-primary-sub-02`}>PERSONA 0{n}</span>
                  <span className="text-[18px] font-bold text-white">페르소나 이름 자리</span>
                  <span className="break-keep text-[14px] leading-[1.7] text-white/60">유형 설명이 들어갈 자리입니다.</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 rounded-[22px] border border-white/15 bg-white/5 p-[22px] text-center tb:justify-between tb:rounded-full tb:px-[30px] tb:py-[18px] tb:text-left">
            <span className="break-keep text-[15px] leading-[1.6] text-white/80">
              {COPY.problem.quizLabel} <span className="text-white/50">{COPY.problem.quizNote}</span>
            </span>
            <button
              type="button"
              onClick={() => setSurveyOpen(true)}
              className="flex-none cursor-pointer rounded-full bg-primary-sub-02 px-[26px] py-3.5 text-[14.5px] font-bold text-primary-main"
            >
              {COPY.problem.quizButton}
            </button>
          </div>
        </div>
      </Section>

      {/* 차별점 */}
      <Section>
        <div className="flex flex-col items-center gap-6 text-center tb:gap-9">
          <span className="text-[13px] font-bold tracking-[0.14em] text-primary-main">{COPY.diff.eyebrow}</span>
          <div className="flex w-full items-center justify-center gap-2 tb:gap-5">
            {COPY.diff.steps.map((s) => (
              <div key={s.step} className="flex aspect-square w-[104px] flex-col items-center justify-center gap-1 rounded-full border border-primary-sub-02 bg-primary-sub-03 p-2.5 text-center tb:w-[180px] tb:gap-2 tb:p-4">
                <span className={`${EN} text-[10.5px] tracking-[0.14em] text-primary-main tb:text-[13px]`}>{s.step}</span>
                <span className="text-[13.5px] font-bold tracking-[-0.02em] tb:text-[20px]">{s.title}</span>
                <span className="hidden text-[12.5px] leading-[1.6] text-gray-02 tb:block">{lines(s.subLines)}</span>
              </div>
            ))}
          </div>
          <h2 className="m-0 break-keep text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[34px] tb:leading-[1.45]">
            {lines(COPY.diff.titleLines)}
            <br />
            <span className="text-primary-main">{COPY.diff.titleAccent}</span>
          </h2>
          <div className="flex max-w-[620px] flex-col gap-4">
            <p className="m-0 break-keep text-[16px] leading-[1.9] text-gray-03">{lines(COPY.diff.bodyLines)}</p>
            <p className="m-0 break-keep text-[16px] font-semibold leading-[1.9]">{COPY.diff.bodyStrong}</p>
          </div>
        </div>
      </Section>

      {/* 실제 결과 */}
      <Section id="result">
        <div className="flex flex-col gap-6 tb:gap-11">
          <div className="flex flex-col gap-4">
            <span className="w-fit rounded-full bg-gray-00 px-[18px] py-[9px] text-[13px] font-bold text-gray-03">{COPY.result.badge}</span>
            <h2 className="m-0 max-w-[980px] break-keep text-[32px] leading-[1.3] tracking-[-0.04em] tb:text-[60px] tb:leading-[1.22]">{COPY.result.title}</h2>
          </div>

          <div className="mx-auto grid w-full grid-cols-1 items-center gap-7 dt:grid-cols-[minmax(0,520px)_minmax(0,1fr)] dt:justify-center dt:gap-14">
            <div className="relative grid grid-cols-2 gap-3.5 tb:gap-10">
              {[
                { ...COPY.result.before, accent: false },
                { ...COPY.result.after, accent: true },
              ].map((b) => (
                <div key={b.cap} className="flex flex-col gap-3.5">
                  <ImageSlot label={b.slot} className={`aspect-[4/5] rounded-[20px] ${b.accent ? "bg-primary-sub-03" : "bg-gray-00"}`} />
                  <div className="flex flex-col gap-1">
                    <span className={`${EN} text-[13px] tracking-[0.14em] ${b.accent ? "text-primary-main" : "text-gray-02"}`}>{b.cap}</span>
                    <span className={`text-[22px] font-bold tracking-[-0.03em] tb:text-[30px] ${b.accent ? "text-black" : "text-gray-03"}`}>{b.kg}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center gap-2.5 border-t border-gray-01 pt-7 text-center dt:flex-col dt:gap-6 dt:border-l dt:border-t-0 dt:pl-10 dt:pt-0">
              {DIET_METRICS.map((m) => (
                <div key={m.label} className="flex flex-1 flex-col gap-1 dt:flex-none dt:gap-1.5">
                  <span className="text-[11px] text-gray-02 tb:text-[14px]">{m.label}</span>
                  <span className="whitespace-nowrap text-[15px] font-bold tracking-[-0.02em] tb:text-[22px]">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/before-after" className="inline-flex items-center gap-2.5 rounded-full border border-gray-01 bg-gray-00 px-[30px] py-4 text-[15px] font-bold text-black no-underline transition hover:opacity-90">
              {COPY.result.moreLabel} <span aria-hidden="true" className="text-primary-main">→</span>
            </Link>
          </div>

          {/* 유지 */}
          <div className="mt-5 flex w-full flex-col items-start gap-4 border-t border-gray-01 pt-10 text-left">
            <Kicker>{COPY.result.stays.kicker}</Kicker>
            <p className="m-0 max-w-[900px] break-keep text-[16px] font-medium leading-[1.6] text-gray-03 tb:text-[18px]">{COPY.result.stays.lead}</p>
            <h3 className="m-0 max-w-[900px] break-keep text-[24px] font-bold leading-[1.32] tracking-[-0.03em] tb:text-[40px]">{COPY.result.stays.title}</h3>
            <p className="m-0 max-w-[620px] break-keep text-[15px] leading-[1.85] text-gray-03 tb:text-[16.5px]">{COPY.result.stays.body}</p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-3 dt:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] dt:gap-5">
            <figure className="m-0 flex flex-col gap-3">
              <div className="flex min-h-[46px] items-center gap-2.5">
                <span className="flex-none rounded-full bg-black px-3.5 py-1.5 text-[12.5px] font-bold text-white">{COPY.result.curve.badge}</span>
                <span className="break-keep text-[15px] font-bold leading-[1.5]">{COPY.result.curve.title}</span>
              </div>
              <div className="flex flex-1 items-center overflow-hidden rounded-3xl bg-gray-00 px-4 py-5 tb:px-9 tb:py-8">
                <WeightCurve />
              </div>
            </figure>

            <figure className="m-0 flex flex-col gap-3">
              <div className="flex min-h-[46px] items-center gap-2.5">
                <span className="flex-none rounded-full bg-gray-01 px-3.5 py-1.5 text-[12.5px] font-bold text-gray-03">{COPY.result.hexagon.badge}</span>
                <span className="break-keep text-[15px] font-bold leading-[1.5] text-primary-main">{COPY.result.hexagon.title}</span>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-3.5 rounded-3xl bg-gray-00 px-[18px] py-[22px] tb:gap-[18px] tb:px-7 tb:py-[30px]">
                <Hexagon />
                <div className="flex flex-col items-center gap-3 text-center">
                  <h3 className="m-0 break-keep text-[17px] leading-[1.4] tb:text-[20px]">{COPY.result.hexagon.cardTitle}</h3>
                  <p className="m-0 break-keep text-[13px] leading-[1.75] text-gray-03 tb:text-[14.5px]">{COPY.result.hexagon.cardBody}</p>
                  <div className="flex gap-[18px]">
                    <span className="flex items-center gap-2 text-[13px] text-gray-03"><span className="h-0.5 w-5 bg-gray-02" />{COPY.result.hexagon.legendStart}</span>
                    <span className="flex items-center gap-2 text-[13px] text-gray-03"><span className="h-[3px] w-5 bg-primary-main" />{COPY.result.hexagon.legendAfter}</span>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </Section>

      {/* 3단계 여정 */}
      <Section id="roadmap" bg="bg-gray-00">
        <div className="flex flex-col gap-6 tb:gap-11">
          <div className="flex flex-col gap-3.5">
            <Kicker>{COPY.journey.kicker}</Kicker>
            <h2 className="m-0 break-keep text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[36px] tb:leading-[1.4]">{COPY.journey.title}</h2>
            <p className="m-0 max-w-[620px] break-keep text-[16px] leading-[1.8] text-gray-03">{COPY.journey.description}</p>
          </div>
          <div className="relative">
            <span className="absolute left-2 right-2 top-[34px] hidden h-px bg-gray-01 tb:block" />
            <div className="relative grid grid-cols-1 gap-3 tb:grid-cols-3 tb:gap-5">
              {DIET_ROADMAP.map((r) => (
                <button
                  key={r.n}
                  type="button"
                  onClick={() => setStep(r)}
                  className="flex cursor-pointer flex-row items-start gap-3.5 rounded-[20px] border-0 bg-white p-[18px_20px] text-left tb:flex-col tb:rounded-[22px] tb:px-7 tb:py-8"
                >
                  <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-full bg-primary-sub-03 text-[15px] font-bold text-primary-main">{r.n}</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-[18px] font-bold tracking-[-0.02em] tb:text-[22px]">{r.title}</span>
                    <span className="text-[15px] font-bold text-primary-main">{r.lead}</span>
                    <p className="m-0 break-keep text-[13px] leading-[1.65] text-gray-03 tb:text-[14.5px] tb:leading-[1.8]">{r.desc}</p>
                    <span className="text-[13.5px] font-bold text-primary-main">{COPY.journey.detailLabel}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 담당 팀 */}
      <Section id="team" bg="bg-black">
        <div className="flex flex-col gap-6 tb:gap-10">
          <div className="flex flex-wrap items-end justify-between gap-6 tb:gap-10">
            <div className="flex flex-col gap-3.5">
              <Kicker light>{COPY.team.kicker}</Kicker>
              <h2 className="m-0 max-w-[760px] break-keep text-[24px] leading-[1.42] tracking-[-0.03em] text-white tb:text-[34px] tb:leading-[1.4]">{COPY.team.title}</h2>
            </div>
            <p className="m-0 max-w-[400px] break-keep text-[15.5px] leading-[1.8] text-white/55">{COPY.team.description}</p>
          </div>

          <div className="grid grid-cols-3 gap-2 tb:gap-5">
            {DIET_TEAM.map((t) => (
              <div key={t.name} className="flex flex-col gap-1.5 rounded-[22px] border border-white/15 bg-white/5 p-3.5 tb:gap-2.5 tb:px-8 tb:py-[30px]">
                <span className={`${EN} text-[11px] tracking-[0.16em] text-primary-sub-02 tb:text-[13px]`}>{t.kicker}</span>
                <span className="text-[15px] font-bold tracking-[-0.02em] text-white tb:text-[24px]">{t.name}</span>
                <span className="hidden break-keep text-[14.5px] leading-[1.7] text-white/60 tb:block">{t.role}</span>
                <span className="break-keep text-[12px] font-bold text-primary-sub-02 tb:mt-1 tb:text-[14px]">{t.note}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <svg viewBox="0 0 1200 70" preserveAspectRatio="none" className="h-[60px] w-full" role="img" aria-label="세 팀이 하나의 설계로 모입니다">
              <path d="M200 4 V 32 H 600" fill="none" stroke={V.mint} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M600 4 V 32" fill="none" stroke={V.mint} strokeWidth="2" strokeLinecap="round" />
              <path d="M1000 4 V 32 H 600" fill="none" stroke={V.mint} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M600 32 V 54" fill="none" stroke={V.mint} strokeWidth="2" strokeLinecap="round" />
              <path d="M592 48 L 600 66 L 608 48 Z" fill={V.mint} />
            </svg>
            <div className="flex w-full max-w-[760px] flex-col items-center gap-2.5 rounded-[26px] bg-primary-main px-6 py-7 text-center tb:px-11 tb:py-8">
              <span className={`${EN} text-[13px] tracking-[0.18em] text-primary-sub-02`}>{COPY.team.oneDesign.kicker}</span>
              <span className="text-[20px] font-bold tracking-[-0.02em] text-white tb:text-[26px]">{COPY.team.oneDesign.title}</span>
              <span className="break-keep text-[15px] leading-[1.7] text-white/75">{COPY.team.oneDesign.body}</span>
            </div>
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="h-[52px] w-full" role="img" aria-label="전담 매니저가 코칭합니다">
              <path d="M600 4 V 40" fill="none" stroke={V.sage} strokeWidth="2" strokeLinecap="round" />
              <path d="M592 34 L 600 54 L 608 34 Z" fill={V.sage} />
            </svg>

            <div className="flex w-full flex-col gap-5 rounded-3xl bg-white/5 p-5 tb:px-10 tb:py-[30px]">
              <div className="flex flex-col gap-2">
                <span className={`${EN} text-[13px] tracking-[0.18em] text-primary-sub-02`}>{COPY.team.coaching.kicker}</span>
                <span className="text-[19px] font-bold tracking-[-0.02em] text-white tb:text-[24px]">{COPY.team.coaching.title}</span>
                <span className="break-keep text-[15px] leading-[1.7] text-white/60">{COPY.team.coaching.body}</span>
              </div>

              <div className="grid grid-cols-1 items-center gap-3 tb:grid-cols-[minmax(0,1fr)_132px_minmax(0,1fr)] tb:gap-0">
                <div className="flex flex-col items-center gap-2 rounded-[20px] bg-white/5 px-7 py-[30px] text-center">
                  <span className={`${EN} text-[12.5px] tracking-[0.16em] text-primary-sub-02`}>{COPY.team.coaching.managerKicker}</span>
                  <span className="text-[22px] font-bold text-white">{COPY.team.coaching.managerName}</span>
                </div>

                <div className="flex flex-row items-center justify-center gap-7 px-2 py-1 tb:flex-col tb:gap-3.5 tb:py-0">
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="whitespace-nowrap text-[12px] font-bold tracking-[0.06em] text-primary-sub-02">{COPY.team.coaching.arrowGive}</span>
                    <svg viewBox="0 0 120 24" className="hidden h-6 w-full tb:block" role="img" aria-label="매니저가 고객에게 방향을 전달합니다">
                      <path d="M4 12 C 34 4, 78 4, 104 12" fill="none" stroke={V.mint} strokeWidth="2" strokeLinecap="round" />
                      <path d="M98 6.5 L 112 12 L 98 17.5" fill="none" stroke={V.mint} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg viewBox="0 0 24 70" className="block h-[70px] w-6 tb:hidden" role="img" aria-label="매니저가 고객에게 방향을 전달합니다">
                      <path d="M12 4 C 4 22, 4 44, 12 58" fill="none" stroke={V.mint} strokeWidth="2" strokeLinecap="round" />
                      <path d="M6.5 52 L 12 66 L 17.5 52" fill="none" stroke={V.mint} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <svg viewBox="0 0 120 24" className="hidden h-6 w-full tb:block" role="img" aria-label="고객의 기록이 매니저에게 전달됩니다">
                      <path d="M116 12 C 86 20, 42 20, 16 12" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round" />
                      <path d="M22 6.5 L 8 12 L 22 17.5" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg viewBox="0 0 24 70" className="block h-[70px] w-6 tb:hidden" role="img" aria-label="고객의 기록이 매니저에게 전달됩니다">
                      <path d="M12 66 C 20 48, 20 26, 12 12" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round" />
                      <path d="M6.5 18 L 12 4 L 17.5 18" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="whitespace-nowrap text-[12px] font-bold tracking-[0.06em] text-white/55">{COPY.team.coaching.arrowBack}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 rounded-[20px] bg-white/5 px-7 py-[30px] text-center">
                  <span className={`${EN} text-[12.5px] tracking-[0.16em] text-white/50`}>{COPY.team.coaching.youKicker}</span>
                  <span className="text-[22px] font-bold text-white">{COPY.team.coaching.youName}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {COPY.team.coaching.chips.map((c) => (
                  <span key={c} className="rounded-full bg-white/10 px-5 py-[11px] text-[14px] font-bold text-white">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 후기 */}
      <Section id="reviews" bg="bg-black">
        <div className="flex flex-col gap-6 tb:gap-9">
          <div className="flex flex-col gap-3.5">
            <Kicker light>{COPY.reviews.kicker}</Kicker>
            <h2 className="m-0 break-keep text-[24px] leading-[1.42] tracking-[-0.03em] text-white tb:text-[36px] tb:leading-[1.35]">{COPY.reviews.title}</h2>
            <p className="m-0 max-w-[520px] break-keep text-[16px] leading-[1.85] text-white/60">{COPY.reviews.description}</p>
          </div>

          <div className="grid grid-cols-1 items-start gap-5 dt:grid-cols-[300px_minmax(0,1fr)] dt:gap-10">
            <div className="flex flex-col items-center gap-2.5 rounded-[26px] bg-white/5 px-5 py-6 tb:px-7 tb:py-8">
              <span className={`${EN} text-[13px] tracking-[0.2em] text-primary-sub-02`}>{COPY.reviews.ratingKicker}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-[52px] font-bold leading-none tracking-[-0.05em] text-white tb:text-[68px]">{COPY.reviews.rating}</span>
                <span className="text-[22px] font-bold text-white/50">{COPY.reviews.ratingSub}</span>
              </div>
              <span className="text-[17px] tracking-[0.14em] text-primary-sub-02">★★★★★</span>
              <span className="text-[14px] text-white/60">{COPY.reviews.ratingNote}</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-3 tb:grid-cols-2">
                {DIET_REVIEWS.map((r, i) => {
                  const dark = i % 2 === 1;
                  return (
                    <figure key={r.author} className={`m-0 flex flex-col gap-2 rounded-[18px] px-[22px] py-5 ${dark ? "bg-primary-main" : "bg-white"}`}>
                      <span className={`text-[13px] tracking-[0.12em] ${dark ? "text-primary-sub-02" : "text-primary-main"}`}>★★★★★</span>
                      <blockquote className={`m-0 break-keep text-[14.5px] leading-[1.7] ${dark ? "text-white/90" : "text-black"}`}>{r.body}</blockquote>
                      <figcaption className={`text-[12.5px] ${dark ? "text-white/55" : "text-gray-02"}`}>{r.author}</figcaption>
                    </figure>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 gap-2 tb:flex tb:flex-wrap tb:gap-3">
                {DIET_RATING_BARS.map((b) => (
                  <div key={b.label} className="flex flex-col items-center gap-1.5 rounded-2xl bg-white/5 px-2 py-3 text-center tb:items-start tb:px-5 tb:py-3.5 tb:text-left">
                    <span className="text-[11.5px] text-white/55 tb:text-[13px]">{b.label}</span>
                    <span className="text-[17px] font-bold tracking-[-0.02em] text-white tb:text-[22px]">{b.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 플랜 */}
      <Section id="plans">
        <div className="flex flex-col gap-6 tb:gap-10">
          <div className="flex flex-col gap-3.5">
            <Kicker>{COPY.plans.kicker}</Kicker>
            <h2 className="m-0 break-keep text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[36px] tb:leading-[1.4]">{COPY.plans.title}</h2>
            <p className="m-0 max-w-[680px] break-keep text-[16px] leading-[1.85] text-gray-03">{lines(COPY.plans.descriptionLines)}</p>
          </div>

          {/* 모바일: 캐러셀 / 태블릿: 세로 / PC: 3열 */}
          <div className="-mx-5 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-5 pb-2 pt-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden tb:mx-0 tb:grid tb:grid-cols-1 tb:overflow-visible tb:px-0 tb:pb-0 tb:gap-5 dt:grid-cols-3">
            {DIET_PLANS.map((p, i) => {
              const featured = i === 1;
              const states = DIET_PLAN_STATES[p.name] ?? [];
              return (
                <div
                  key={p.name}
                  className={`relative flex w-[84%] shrink-0 snap-start flex-col gap-6 rounded-3xl p-7 tb:w-auto tb:px-8 tb:py-9 ${
                    featured ? "border-2 border-primary-main bg-primary-sub-03" : "border border-gray-01 bg-white"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-[13px] left-8 rounded-full bg-primary-main px-4 py-[7px] text-[12px] font-bold text-white">{COPY.plans.featuredBadge}</span>
                  )}
                  <div className="flex flex-col gap-2">
                    <span className={`${EN} text-[21px] tracking-[0.02em] ${featured ? "text-primary-main" : "text-black"}`}>{p.name}</span>
                    <span className="text-[14px] font-bold text-gray-03">{p.subtitle}</span>
                    <p className={`m-0 mt-1.5 break-keep text-[15px] font-bold leading-[1.65] ${featured ? "text-primary-main" : "text-gray-03"}`}>{p.target}</p>
                  </div>
                  <div className="flex flex-col gap-1 border-t border-gray-01 pt-5">
                    <span className="text-[12.5px] text-gray-02">{p.priceLabel}</span>
                    <span className="text-[19px] font-bold tracking-[-0.02em]">{p.priceValue}</span>
                  </div>
                  <div className="flex flex-col">
                    {DIET_PLAN_FEATURES.map((f, k) => {
                      const st = states[k] ?? "off";
                      return (
                        <div key={f} className={`flex items-center gap-2.5 py-[11px] ${k === 0 ? "" : "border-t border-gray-01/60"}`}>
                          <span className={`flex-none text-[13.5px] font-bold ${st === "off" ? "text-gray-02" : "text-primary-main"}`}>{st === "off" ? "—" : "✓"}</span>
                          <span className={`text-[14px] leading-[1.5] ${st === "off" ? "text-gray-02" : "text-gray-03"}`}>{f}</span>
                          {st === "option" && <span className="text-[11.5px] text-gray-02">{COPY.plans.optionLabel}</span>}
                        </div>
                      );
                    })}
                  </div>
                  <a
                    href="#contact"
                    className={`rounded-full px-6 py-[15px] text-center text-[14.5px] font-bold no-underline transition hover:opacity-90 ${
                      featured ? "bg-primary-main text-white" : "border border-primary-main bg-white text-primary-main"
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-[13px] text-gray-02 tb:hidden">
            <span aria-hidden="true">←</span>{COPY.plans.swipeHint}
          </div>

          <div className="flex flex-col rounded-[22px] bg-gray-00 px-6 py-7 tb:px-[34px] tb:py-[30px]">
            <a href="#contact" className="rounded-full bg-black px-6 py-[15px] text-center text-[14.5px] font-bold text-white no-underline transition hover:opacity-90">
              {COPY.plans.promoButton}
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" bg="bg-gray-00">
        <div className="flex flex-col gap-6 tb:gap-9">
          <div className="flex flex-col gap-3.5">
            <Kicker>{COPY.faq.kicker}</Kicker>
            <h2 className="m-0 text-[24px] leading-[1.42] tracking-[-0.03em] tb:text-[36px] tb:leading-[1.4]">{COPY.faq.title}</h2>
          </div>
          <div className="flex max-w-[900px] flex-col gap-3">
            {DIET_FAQ.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-[18px] bg-white">
                <button
                  type="button"
                  onClick={() => setFaqOpen((v) => (v === i ? null : i))}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 border-0 bg-transparent px-5 py-5 text-left text-[15px] font-bold tracking-[-0.02em] text-black tb:px-7 tb:py-6 tb:text-[16.5px]"
                >
                  {f.q}
                  <span className="flex-none text-[20px] font-medium text-primary-main">{faqOpen === i ? "−" : "+"}</span>
                </button>
                {faqOpen === i && <p className="m-0 break-keep px-5 pb-6 text-[15px] leading-[1.9] text-gray-03 tb:px-7">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 마무리 CTA */}
      <section id="contact" className="relative overflow-hidden bg-primary-main px-5 py-[54px] tb:px-6 tb:py-[116px]">
        <div className="absolute -right-[150px] -top-[180px] h-[440px] w-[440px] rounded-full bg-white/5" />
        <div className="relative mx-auto flex w-full flex-col items-center gap-6 text-center dt:max-w-[1280px]">
          <h2 className="m-0 max-w-[820px] break-keep text-[32px] leading-[1.3] tracking-[-0.04em] text-white tb:text-[56px]">{lines(COPY.cta.titleLines)}</h2>
          <p className="m-0 max-w-[560px] break-keep text-[16px] leading-[1.9] text-white/70 tb:text-[17px]">{COPY.cta.description}</p>
          <div className="mt-3.5 flex w-full flex-col items-stretch gap-3 tb:w-auto tb:flex-row">
            <button
              type="button"
              onClick={() => setSurveyOpen(true)}
              className="cursor-pointer rounded-full border-0 bg-primary-sub-02 px-9 py-[18px] text-center text-[16px] font-bold text-primary-main"
            >
              {COPY.cta.primaryButton}
            </button>
            <a href="#plans" className="rounded-full border border-white/40 px-9 py-[17px] text-center text-[16px] font-bold text-white no-underline transition hover:opacity-90">
              {COPY.cta.secondaryButton}
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

      {/* 3단계 모달 */}
      {step && (
        <Modal onClose={() => setStep(null)}>
          <span className={`${EN} text-[13px] tracking-[0.18em] text-primary-main`}>STEP {step.n}</span>
          <h3 className="m-0 break-keep text-[24px] leading-[1.35] tb:text-[28px]">{step.title}</h3>
          <span className="break-keep text-[16px] font-bold text-primary-main">{step.lead}</span>
          <p className="m-0 break-keep text-[15.5px] leading-[1.85] text-gray-03">{step.desc}</p>
          <div className="mt-1 flex flex-col gap-2.5 border-t border-gray-01 pt-[18px]">
            <span className="text-[12px] font-bold tracking-[0.1em] text-gray-02">{COPY.journey.modalListLabel}</span>
            {step.items.map((it) => (
              <div key={it.name} className="flex flex-col gap-1 border-b border-gray-01 py-3.5">
                <span className="break-keep text-[15.5px] font-bold leading-[1.5]">{it.name}</span>
                <p className="m-0 break-keep text-[14px] leading-[1.75] text-gray-03">{it.desc}</p>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => setStep(null)} className="mt-[18px] cursor-pointer self-start rounded-full border-0 bg-black px-[26px] py-[13px] text-[14px] font-bold text-white">
            {COPY.journey.modalCloseLabel}
          </button>
        </Modal>
      )}

      {/* 1분 유형 검사 */}
      {surveyOpen && (
        <Modal onClose={closeSurvey}>
          {!showResult ? (
            <>
              <div className="flex flex-col gap-1.5">
                <span className={`${EN} text-[13px] tracking-[0.18em] text-primary-main`}>{COPY.survey.kicker}</span>
                <span className="text-[13.5px] text-gray-02">{score} / {DIET_SURVEY.length} 선택</span>
                <span className="mt-1.5 break-keep text-[12.5px] leading-[1.65] text-gray-03">{COPY.survey.note}</span>
              </div>
              <p className="m-0 break-keep text-[20px] font-bold leading-[1.4] tb:text-[22px]">{COPY.survey.question}</p>
              <div className="flex flex-col gap-2">
                {DIET_SURVEY.map((q, i) => {
                  const on = answers.includes(i);
                  return (
                    <label
                      key={q}
                      className={`flex cursor-pointer items-center gap-3 break-keep rounded-[14px] border px-4 py-3.5 text-[14.5px] leading-[1.5] ${
                        on ? "border-primary-main bg-primary-sub-03" : "border-gray-01 bg-white"
                      }`}
                    >
                      <input type="checkbox" checked={on} onChange={() => toggleAnswer(i)} className="h-[18px] w-[18px] flex-none cursor-pointer accent-primary-main" />
                      {q}
                    </label>
                  );
                })}
              </div>
              <button type="button" onClick={() => setShowResult(true)} className="mt-2 cursor-pointer rounded-full border-0 bg-primary-main px-[26px] py-[15px] text-[15px] font-bold text-white">
                {COPY.survey.submitLabel}
              </button>
            </>
          ) : (
            <>
              <span className={`${EN} text-[13px] tracking-[0.18em] text-primary-main`}>{COPY.survey.resultKicker} · {score} / {DIET_SURVEY.length}</span>
              <h3 className="m-0 break-keep text-[24px] leading-[1.35] tb:text-[28px]">{result.title}</h3>
              <p className="m-0 break-keep text-[15.5px] leading-[1.85] text-gray-03">{result.body}</p>
              <div className="mt-2 flex flex-wrap gap-2.5">
                <a href="#contact" onClick={closeSurvey} className="rounded-full bg-primary-main px-[26px] py-3.5 text-[14.5px] font-bold text-white no-underline">
                  {COPY.survey.consultButton}
                </a>
                <button
                  type="button"
                  onClick={() => { setAnswers([]); setShowResult(false); }}
                  className="cursor-pointer rounded-full border border-gray-01 bg-white px-[26px] py-3.5 text-[14.5px] font-bold text-gray-03"
                >
                  {COPY.survey.retryButton}
                </button>
              </div>
            </>
          )}
        </Modal>
      )}
    </div>
  );
}
