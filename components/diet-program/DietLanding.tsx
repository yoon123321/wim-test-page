"use client";

/**
 * 감량프로그램 랜딩 — 버전1
 *
 * wim-diet-body.html 시안을 React + Tailwind 로 옮긴 것.
 * 문구·수치는 data/diet.ts 에서 수정한다.
 *
 * 원본의 인라인 스타일 색은 프로젝트 팔레트 토큰으로 바꿨다.
 *   --wim-g0~g3, --wim-black, --wim-sage  →  gray-00~03, black, primary-sub-01
 * 시안 전용 초록 3종(green #1c4b39 / green-dark #14342a / mint #c3d4b6 / pale #eef1ea)은
 * 팔레트에 없어 아래 상수로 모아 두었다.
 */

import { createContext, useContext, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CaresSection, TestsSection } from "@/components/home/WimMainNew";
import { Typography } from "@/components/common/Typography";
import {
  DIET_COPY,
  DIET_WORRIES,
  DIET_CASES,
  DIET_HABITS,
  DIET_METRICS,
  DIET_AXES,
  DIET_ROADMAP,
  DIET_TEAM,
  DIET_PLANS,
  DIET_PLAN_FEATURES,
  DIET_RATING_BARS,
  DIET_REVIEWS,
  DIET_FAQ,
} from "@/data/diet";
import { DIET_NEW_COPY } from "@/data/diet-new";

/** 버전2 문구를 버전1 레이아웃에서 사용하는 동일한 문구 구조로 연결한다. */
const DIET_COPY_V2 = {
  hero: {
    eyebrow: DIET_NEW_COPY.hero.kicker,
    titleLines: DIET_NEW_COPY.hero.titleLines,
    sub: DIET_NEW_COPY.hero.description,
    imageLabel: DIET_NEW_COPY.hero.imageLabel,
    primaryCta: DIET_NEW_COPY.cta.primaryButton,
    secondaryCta: DIET_NEW_COPY.cta.secondaryButton,
  },
  problem: {
    eyebrow: DIET_NEW_COPY.problem.kicker,
    titleLines: DIET_NEW_COPY.problem.titleLines,
    subLines: DIET_NEW_COPY.problem.statementLines,
    caseIntroLines: [DIET_NEW_COPY.problem.description, DIET_NEW_COPY.problem.statementSub],
    caseIntroLabel: "자주 나오는 유형",
    ctaLead: DIET_NEW_COPY.problem.quizLabel,
    ctaLabel: DIET_NEW_COPY.problem.quizButton,
  },
  difference: {
    eyebrow: DIET_NEW_COPY.diff.eyebrow,
    titleLines: [DIET_NEW_COPY.diff.titleLines[0], DIET_NEW_COPY.diff.titleAccent],
    bodyLines: [...DIET_NEW_COPY.diff.bodyLines, DIET_NEW_COPY.diff.bodyStrong],
    steps: DIET_NEW_COPY.diff.steps.map((step) => ({ step: step.step, title: step.title, descLines: step.subLines })),
  },
  result: {
    eyebrow: DIET_NEW_COPY.result.badge,
    title: DIET_NEW_COPY.result.title,
    before: { label: DIET_NEW_COPY.result.before.cap, weight: DIET_NEW_COPY.result.before.kg, imageLabel: DIET_NEW_COPY.result.before.slot },
    after: { label: DIET_NEW_COPY.result.after.cap, weight: DIET_NEW_COPY.result.after.kg, imageLabel: DIET_NEW_COPY.result.after.slot },
    metricsLabel: "결과",
    moreLabel: DIET_NEW_COPY.result.moreLabel,
    keepEyebrow: DIET_NEW_COPY.result.stays.kicker,
    keepTitleLines: [DIET_NEW_COPY.result.stays.lead, DIET_NEW_COPY.result.stays.title],
    keepBody: DIET_NEW_COPY.result.stays.body,
    chart: {
      label: DIET_NEW_COPY.result.curve.badge,
      title: DIET_NEW_COPY.result.curve.title,
      endLabel: "관리 종료",
      startLabel: "시작 체중",
      goalLabel: "목표",
      normalLabel: "일반 다이어트 — 다시 원래대로",
      wimLabel: "윔 — 습관이 남아 유지",
      note: "여기서부터가 진짜 관리 구간입니다",
      caption: "체중 곡선 · 관리 종료 지점에서 두 곡선이 갈립니다",
    },
    axes: {
      label: DIET_NEW_COPY.result.hexagon.badge,
      title: DIET_NEW_COPY.result.hexagon.title,
      cardTitle: DIET_NEW_COPY.result.hexagon.cardTitle,
      cardBody: DIET_NEW_COPY.result.hexagon.cardBody,
      legendStart: DIET_NEW_COPY.result.hexagon.legendStart,
      legendAfter: DIET_NEW_COPY.result.hexagon.legendAfter,
    },
  },
  roadmap: {
    eyebrow: DIET_NEW_COPY.journey.kicker,
    title: DIET_NEW_COPY.journey.title,
    description: DIET_NEW_COPY.journey.description,
    detailLabel: DIET_NEW_COPY.journey.detailLabel,
  },
  team: {
    eyebrow: DIET_NEW_COPY.team.kicker,
    title: DIET_NEW_COPY.team.title,
    oneDesign: {
      eyebrow: DIET_NEW_COPY.team.oneDesign.kicker,
      title: DIET_NEW_COPY.team.oneDesign.title,
      body: DIET_NEW_COPY.team.oneDesign.body,
    },
    coaching: {
      eyebrow: DIET_NEW_COPY.team.coaching.kicker,
      title: DIET_NEW_COPY.team.coaching.title,
      body: DIET_NEW_COPY.team.coaching.body,
      managerEyebrow: DIET_NEW_COPY.team.coaching.managerKicker,
      managerName: DIET_NEW_COPY.team.coaching.managerName,
      youEyebrow: DIET_NEW_COPY.team.coaching.youKicker,
      youName: DIET_NEW_COPY.team.coaching.youName,
      arrowGive: DIET_NEW_COPY.team.coaching.arrowGive,
      arrowBack: DIET_NEW_COPY.team.coaching.arrowBack,
    },
  },
  plans: {
    eyebrow: DIET_NEW_COPY.plans.kicker,
    title: DIET_NEW_COPY.plans.title,
    descriptionLines: DIET_NEW_COPY.plans.descriptionLines,
    badge: DIET_NEW_COPY.plans.featuredBadge,
    optionLabel: DIET_NEW_COPY.plans.optionLabel,
    swipeHint: DIET_NEW_COPY.plans.swipeHint,
  },
  reviews: {
    eyebrow: DIET_NEW_COPY.reviews.kicker,
    titleLines: [DIET_NEW_COPY.reviews.title, DIET_NEW_COPY.reviews.description],
    ratingLabel: DIET_NEW_COPY.reviews.ratingKicker,
    ratingValue: DIET_NEW_COPY.reviews.rating,
    ratingMax: DIET_NEW_COPY.reviews.ratingSub,
    ratingCount: DIET_NEW_COPY.reviews.ratingNote,
  },
  faq: { eyebrow: DIET_NEW_COPY.faq.kicker, title: DIET_NEW_COPY.faq.title },
  contact: {
    titleLines: DIET_NEW_COPY.cta.titleLines,
    description: DIET_NEW_COPY.cta.description,
    primaryCta: DIET_NEW_COPY.cta.primaryButton,
    secondaryCta: DIET_NEW_COPY.cta.secondaryButton,
  },
} as const;

const DietCopyContext = createContext<typeof DIET_COPY | typeof DIET_COPY_V2>(DIET_COPY);
const useDietCopy = () => useContext(DietCopyContext);

/** 모바일 캐러셀에서 카드 사이 간격(px) — gap-3 과 맞춰 둔다 */
const CASE_DECK_GAP = 12;

/** 시안 전용 초록 — 프로젝트 팔레트에 없는 값이라 여기 모아 둔다 */
const C = {
  green: "#1c4b39",
  greenDark: "#14342a",
  mint: "#c3d4b6",
  pale: "#eef1ea",
} as const;

/* ─────────────────────────── 공통 조각 ─────────────────────────── */

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`px-6 py-[72px] tb:py-[100px] ${className}`}>
      <div className="mx-auto w-full max-w-[1280px]">{children}</div>
    </section>
  );
}

function Eyebrow({ children, tone = "mint" }: { children: React.ReactNode; tone?: "mint" | "green" | "gray" }) {
  const color = tone === "mint" ? C.mint : tone === "green" ? C.green : undefined;
  return (
    <span
      className={`text-[14px] tracking-[0.2em] ${tone === "gray" ? "text-gray-02" : ""}`}
      style={color ? { color } : undefined}>
      {children}
    </span>
  );
}

function Lines({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((line, i) => (
        <span key={line}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

/** 사진이 들어갈 자리 — src 를 넘기면 실사로 바뀐다 */
function ImageSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`grid place-items-center break-keep bg-gray-00 p-4 text-center text-[13px] text-gray-02 ${className}`}>
      {label}
    </div>
  );
}

/* ─────────────────────────── 섹션들 ─────────────────────────── */

function Hero() {
  const C0 = useDietCopy().hero;
  return (
    <section id="top" className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/diet/diet_hero.png"
          alt={C0.imageLabel}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(29,30,30,0.55),rgba(29,30,30,0.82))]" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 px-6 pb-[120px] pt-[128px] text-center">
        <Eyebrow>{C0.eyebrow}</Eyebrow>
        <h1 className="max-w-[800px] break-keep text-[32px] leading-[1.32] text-white tb:text-[46px]">
          <Lines items={C0.titleLines} />
        </h1>
        <p className="max-w-[640px] break-keep text-[15px] leading-[1.8] text-white/80 tb:text-[17px]">{C0.sub}</p>
      </div>
    </section>
  );
}

/** 식습관 타입 10종 아이콘 — 원본 라인 아이콘 path */
const HABIT_ICON_PATHS: Record<string, string> = {
  "음료·에이드": "M7 4h10l-1.2 15a2 2 0 0 1-2 1.9h-3.6a2 2 0 0 1-2-1.9zM7.4 9h9.2",
  과식: "M3.5 11h17a8.5 8.5 0 0 1-17 0zM12 11V6M12 4.5v.6M5 21h14",
  탄수화물: "M4 13.5c0-4 3.6-7 8-7s8 3 8 7c0 2.2-1.6 4-4 4H8c-2.4 0-4-1.8-4-4zM8.5 8.2 7 5M12 7.6V4.4M15.5 8.2 17 5",
  디저트: "M5 12h14l-1 8H6zM6.5 12a5.5 5.5 0 0 1 11 0M12 6.5V4M12 4a1.4 1.4 0 1 0 0-.1",
  "빨리 먹기": "M13 2.5 4.5 13.6H11l-1 7.9 8.5-11.1H12z",
  "끼니 거름": "M6.5 3h11v3.2L12 12l5.5 5.8V21h-11v-3.2L12 12 6.5 6.2zM5 3h14M5 21h14",
  정크푸드: "M5 10.5c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5zM4 13.5h16M6 16.5h12c-.4 2.3-1.6 3.5-3.5 3.5h-5c-1.9 0-3.1-1.2-3.5-3.5z",
  음주: "M6 3h12l-1.2 5.6A5 5 0 0 1 12 12a5 5 0 0 1-4.8-3.4zM12 12v7M8.5 19.5h7",
  야식: "M20 14.2A8.2 8.2 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2z",
  "잦은 모임":
    "M8.5 11a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zM2.8 20c0-3.4 2.6-5.6 5.7-5.6s5.7 2.2 5.7 5.6M16 5.2a3 3 0 0 1 0 5.9M17.4 14.8c2.3.5 3.8 2.4 3.8 5.2",
};

function HabitIcon({ name, color }: { name: string; color: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] flex-none tb:h-[21px] tb:w-[21px]"
      fill="none"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d={HABIT_ICON_PATHS[name]} />
    </svg>
  );
}

/** 원인 / 결과 / 결론 앞에 붙는 배지 + 안내 문장 한 줄 */
function CaseStepLine({ badge, tone, children }: { badge: string; tone: "cause" | "result" | "conclusion"; children: string }) {
  const badgeStyle = {
    cause: { background: "var(--color-primary-main)", color: "#fff" },
    result: { background: "var(--color-primary-sub-02)", color: "var(--color-primary-main)" },
    conclusion: { background: "var(--color-black)", color: "#fff" },
  }[tone];

  return (
    <div className="flex items-baseline gap-2">
      <Typography
        mobile="body-03"
        desktopSize={12}
        weight="bold"
        className="flex h-7 flex-none items-center rounded-full px-3 tb:h-6 tb:px-2.5"
        style={badgeStyle}>
        {badge}
      </Typography>
      <Typography mobile="body-03" weight="medium" className="break-keep" style={{ color: "var(--color-primary-sub-01)" }}>
        {children}
      </Typography>
    </div>
  );
}

/** 유형 카드 한 장 — 원인 / 결과 / 결론 3단 */
function CaseCard({ item }: { item: (typeof DIET_CASES)[number] }) {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <article className="flex flex-col gap-4 rounded-[14px] bg-white px-4 py-5 tb:gap-5 tb:rounded-[20px] tb:px-[26px] tb:py-7">
      {/* 제목 줄 — 모바일에선 팔레트 이름이 아래 줄로 내려간다 */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <Typography
          mobile="body-03"
          desktopSize={12}
          weight="bold"
          className="flex h-8 flex-none items-center rounded-full px-3.5 tracking-[0.1em] tb:h-[30px]"
          style={{ background: "var(--color-primary-sub-03)", color: "var(--color-primary-main)" }}>
          {item.no}
        </Typography>
        <Typography as="h3" mobile="headline-03" desktop="headline-02" weight="bold" className="m-0 min-w-0 break-keep">
          {item.title}
        </Typography>
        <Typography
          mobile="body-03"
          desktopSize={11}
          weight="semibold"
          className="basis-full whitespace-nowrap text-gray-02 tb:ml-auto tb:basis-auto">
          {item.palette.label}
        </Typography>
      </div>

      <CaseStepLine badge="원인" tone="cause">
        기질 × 식생활 패턴에서 시작합니다.
      </CaseStepLine>

      {/* 기질 × 식생활 패턴 — 모바일 세로, PC 좌우 */}
      <div className="grid grid-cols-[minmax(0,1fr)_14px_minmax(0,1fr)] items-center gap-1.5 tb:grid-cols-[minmax(0,1fr)_18px_minmax(0,1fr)] tb:gap-2.5">
        {item.groups.map((group, groupIndex) => (
          <div key={group.label} className="contents">
            {groupIndex > 0 && (
              <Typography mobile="body-03" desktopSize={15} weight="bold" className="text-center text-gray-02">
                ×
              </Typography>
            )}
            <div className="flex min-w-0 flex-col gap-2 rounded-[14px] border border-gray-01 px-2.5 py-3 tb:gap-[9px] tb:px-3 tb:py-3.5">
              <Typography mobile="body-03" desktopSize={13} weight="bold" style={{ color: "var(--color-primary-main)" }}>
                {group.label} <span className="font-medium text-gray-02">{group.note}</span>
              </Typography>
              {group.rows.map((row) => (
                <div key={row.label} className="flex flex-col gap-1.5 border-t border-gray-01 pt-2 tb:flex-row tb:items-center tb:gap-2.5 tb:pt-[9px]">
                  <Typography mobile="body-03" desktopSize={12} weight="medium" className="min-w-0 flex-1 break-keep text-gray-03">
                    {row.label} <b className="font-bold" style={{ color: "var(--color-primary-main)" }}>{row.value}</b>
                  </Typography>
                  <span className="relative block h-[5px] w-full flex-none rounded-full bg-gray-01 tb:w-[88px]">
                    <span
                      className="block h-[5px] rounded-full"
                      style={{
                        width: `${row.percent}%`,
                        background: row.tone === "soft" ? item.palette.soft : item.palette.strong,
                      }}
                    />
                    <span aria-hidden="true" className="absolute -inset-y-px left-1/3 w-px bg-white/90" />
                    <span aria-hidden="true" className="absolute -inset-y-px left-2/3 w-px bg-white/90" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 그래서 ↓ */}
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-gray-01" />
        <Typography mobile="body-03" desktopSize={13} weight="medium" className="text-gray-03">
          그래서
        </Typography>
        <span
          className="grid h-7 w-7 flex-none place-items-center rounded-full text-[14px]"
          style={{ background: "var(--color-primary-sub-03)", color: "var(--color-primary-main)" }}>
          ↓
        </span>
        <span className="h-px flex-1 bg-gray-01" />
      </div>

      {/* 결과 — 식습관 타입 */}
      <div className="flex flex-col gap-3">
        <CaseStepLine badge="결과" tone="result">
          그 결과, 이런 식습관으로 나타납니다.
        </CaseStepLine>

        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <Typography mobile="body-02" desktopSize={15} weight="bold">
            {item.habitLabel}
          </Typography>
          <Typography mobile="body-03" desktopSize={13} weight="bold" className="break-keep" style={{ color: "var(--color-primary-main)" }}>
            {item.habitNote}
          </Typography>
        </div>

        {/* 모바일 2열(아이콘 옆) · PC 5열(아이콘 위) */}
        <ul className="m-0 grid list-none grid-cols-2 gap-px overflow-hidden rounded-[12px] bg-gray-01 p-px tb:grid-cols-5">
          {DIET_HABITS.map((habit) => {
            const level = item.habitsStrong.includes(habit)
              ? "strong"
              : item.habitsSoft.includes(habit)
                ? "soft"
                : "off";
            const tile = {
              strong: { background: "var(--color-primary-main)", color: "#fff" },
              soft: { background: "var(--color-primary-sub-03)", color: "var(--color-primary-main)" },
              off: { background: "var(--color-gray-00)", color: "var(--color-gray-02)" },
            }[level];
            const stroke = level === "strong" ? "#fff" : level === "soft" ? "#155E35" : "#A1A0A1";
            return (
              <li
                key={habit}
                className="flex min-h-[42px] flex-row items-center justify-center gap-1.5 px-2 py-1.5 text-center tb:min-h-[56px] tb:flex-col tb:gap-1 tb:px-[3px] tb:py-2"
                style={tile}>
                <HabitIcon name={habit} color={stroke} />
                <Typography mobile="body-03" desktopSize={11.5} weight="bold" className="break-keep">
                  {habit}
                </Typography>
              </li>
            );
          })}
        </ul>
      </div>

      <CaseStepLine badge="결론" tone="conclusion">
        그래서 이렇게 관리합니다.
      </CaseStepLine>

      <div
        className="flex items-start gap-3 rounded-[16px] px-3.5 py-4 text-white tb:gap-3.5 tb:px-[18px] tb:py-5"
        style={{ background: "var(--color-primary-main)" }}>
        <span
          aria-hidden="true"
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/45 text-[15px] tb:h-[34px] tb:w-[34px]">
          →
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-2.5 tb:gap-3">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <Typography mobile="body-03" desktopSize={13} weight="bold" className="flex-none whitespace-nowrap text-white/70">
              관리 포인트
            </Typography>
            <Typography mobile="headline-03" desktop="headline-02" weight="bold" className="min-w-0 break-keep">
              {item.point}
            </Typography>
          </div>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-dashed border-white/30 pt-2.5 tb:pt-[9px]">
            <Typography mobile="body-03" desktopSize={11} weight="bold" className="flex-none whitespace-nowrap text-white/70">
              키워드
            </Typography>
            <Typography mobile="body-03" desktopSize={12.5} weight="medium" className="min-w-0 break-keep">
              {item.keywords}
            </Typography>
          </div>

          <div className="flex flex-col gap-2.5 border-t border-dashed border-white/30 pt-3">
            <button
              type="button"
              aria-expanded={detailOpen}
              onClick={() => setDetailOpen((open) => !open)}
              className="cursor-pointer self-start border-0 bg-transparent p-0 text-left">
              <Typography mobile="body-03" desktopSize={13} weight="bold" style={{ color: "var(--color-primary-sub-02)" }}>
                {detailOpen ? "결론 상세 접기 ▲" : "결론 상세 보기 ▼"}
              </Typography>
            </button>
            {detailOpen && (
              <Typography as="p" mobile="body-02" desktopSize={14} className="m-0 break-keep text-white/90 !leading-[1.8]">
                {item.detail}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/** 유형 카드 묶음 — 모바일은 좌우 스와이프, tb 부터는 그리드 */
function CaseDeck() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const readIndex = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | undefined;
    if (!track || !first) return;
    const step = first.getBoundingClientRect().width + CASE_DECK_GAP;
    setIndex(Math.min(DIET_CASES.length - 1, Math.max(0, Math.round(track.scrollLeft / step))));
  };

  const goTo = (next: number) => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | undefined;
    if (!track || !first) return;
    track.scrollTo({ left: next * (first.getBoundingClientRect().width + CASE_DECK_GAP), behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        ref={trackRef}
        onScroll={readIndex}
        className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 [-ms-overflow-style:none] [scrollbar-width:none] tb:mx-0 tb:grid tb:grid-cols-1 tb:gap-5 tb:overflow-visible tb:px-0 tb:[&::-webkit-scrollbar]:block dt:grid-cols-2 dt:items-start [&::-webkit-scrollbar]:hidden">
        {DIET_CASES.map((item) => (
          <div key={item.no} className="w-[90%] flex-none snap-start tb:w-auto">
            <CaseCard item={item} />
          </div>
        ))}
      </div>

      {/* 인디케이터 — 모바일 전용 */}
      <div className="flex justify-center gap-2 tb:hidden">
        {DIET_CASES.map((item, i) => (
          <button
            key={item.no}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${item.no} ${item.title} 보기`}
            aria-current={i === index}
            className="h-2 cursor-pointer rounded-full border-0 p-0 transition-all duration-300"
            style={{ width: i === index ? 22 : 8, background: i === index ? C.mint : "rgba(255,255,255,0.28)" }}
          />
        ))}
      </div>
    </div>
  );
}

function Problem() {
  const C0 = useDietCopy().problem;
  return (
    <section id="problem" className="overflow-hidden px-6 py-[96px]" style={{ background: C.greenDark }}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-11">
        <div className="flex flex-col items-center gap-3.5 text-center">
          <Eyebrow>{C0.eyebrow}</Eyebrow>
          <h2 className="m-0 break-keep text-[26px] leading-[1.42] text-white tb:text-[34px]">
            <Lines items={C0.titleLines} />
          </h2>
        </div>

        {/* 고민 마퀴 — 두 벌을 이어 붙여 끊김 없이 흐른다 */}
        <div className="relative -mx-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max gap-3 [animation:wim-marquee_38s_linear_infinite]">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex gap-3" aria-hidden={dup === 1}>
                {DIET_WORRIES.map((worry) => (
                  <span
                    key={worry}
                    className="flex-none whitespace-nowrap rounded-full border border-white/15 px-5 py-3 text-[14.5px] text-white/70">
                    {worry}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 마퀴 아래에 오는 굵은 선언 + 유형 안내 */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="m-0 break-keep text-[22px] font-bold leading-[1.45] text-white tb:text-[26px]">
            <Lines items={C0.subLines} />
          </p>
          <p className="m-0 break-keep text-[15px] font-medium leading-[1.8] text-white/70 tb:text-[17px]">
            <Lines items={C0.caseIntroLines} />
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-[17px] font-bold" style={{ color: C.mint }}>
            {C0.caseIntroLabel}
          </span>
        </div>

        <CaseDeck />

        <div className="flex flex-col items-center gap-3.5">
          <span className="text-[14.5px] text-white/70">{C0.ctaLead}</span>
          <Link
            href="/contact"
            className="rounded-full px-7 py-3.5 text-[15px] font-bold no-underline transition hover:opacity-90"
            style={{ background: C.mint, color: C.greenDark }}>
            {C0.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Difference() {
  const C0 = useDietCopy().difference;
  return (
    <Section id="difference" className="bg-white">
      {/* 가운데 정렬 · 원 두 개를 + 로 잇는다 (원본 시안) */}
      <div className="flex flex-col items-center gap-9 text-center">
        <span className="text-[13px] font-medium tracking-[0.14em]" style={{ color: C.green }}>
          {C0.eyebrow}
        </span>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {C0.steps.map((step, i) => (
            <div key={step.step} className="flex items-center gap-5">
              {i > 0 && (
                <span aria-hidden="true" className="text-[26px] font-bold" style={{ color: C.mint }}>
                  +
                </span>
              )}
              <div
                className="flex h-[180px] w-[180px] flex-col items-center justify-center gap-1.5 rounded-full px-6"
                style={{ background: C.pale }}>
                <span className="text-[13px] font-medium tracking-[0.14em]" style={{ color: C.green }}>
                  {step.step}
                </span>
                <span className="text-[20px] font-bold tracking-[-0.02em]">{step.title}</span>
                <p className="m-0 break-keep text-[12.5px] leading-[1.6] text-gray-02">
                  <Lines items={step.descLines} />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 두 번째 줄만 초록 */}
        <h2 className="m-0 break-keep text-[26px] leading-[1.42] tb:text-[31px]">
          {C0.titleLines[0]}
          <br />
          <span style={{ color: C.green }}>{C0.titleLines[1]}</span>
        </h2>

        <div className="flex flex-col gap-3">
          <p className="m-0 break-keep text-[16px] leading-[1.9] text-gray-03">
            <Lines items={C0.bodyLines.slice(0, 2)} />
          </p>
          <p className="m-0 break-keep text-[16px] font-semibold leading-[1.9]">{C0.bodyLines[2]}</p>
        </div>
      </div>
    </Section>
  );
}

function Result() {
  const C0 = useDietCopy().result;
  return (
    <Section id="result" className="bg-white">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3.5">
          <Eyebrow tone="gray">{C0.eyebrow}</Eyebrow>
          <h2 className="m-0 break-keep text-[28px] leading-[1.35] tb:text-[54px]">{C0.title}</h2>
        </div>

        {/* 비포 · 애프터 */}
        <div className="grid grid-cols-1 gap-4 tb:grid-cols-2">
          {[C0.before, C0.after].map((side) => (
            <div key={side.label} className="flex flex-col gap-3 rounded-[20px] bg-white p-5">
              <ImageSlot label={side.imageLabel} className="aspect-[4/5] rounded-[14px]" />
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[13px] text-gray-02">{side.label}</span>
                <span className="text-[22px] font-bold tracking-[-0.02em]">{side.weight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 수치 */}
        <div className="flex flex-col gap-4">
          <span className="text-[12px] font-bold text-gray-02">{C0.metricsLabel}</span>
          <div className="grid grid-cols-1 gap-4 tb:grid-cols-3">
            {DIET_METRICS.map((m) => (
              <div key={m.label} className="flex flex-col gap-1.5 rounded-[16px] bg-white px-6 py-5">
                <span className="text-[13px] text-gray-02">{m.label}</span>
                <span className="text-[19px] font-bold tracking-[-0.02em]" style={{ color: C.green }}>
                  {m.value}
                </span>
              </div>
            ))}
          </div>
          <a href="#reviews" className="self-start text-[14px] font-bold no-underline" style={{ color: C.green }}>
            {C0.moreLabel}
          </a>
        </div>

        {/* 유지 — AND IT STAYS */}
        <div className="flex flex-col gap-3">
          <span className="text-[14px] font-medium tracking-[0.14em]" style={{ color: C.green }}>
            {C0.keepEyebrow}
          </span>
          <p className="m-0 text-[18px] font-medium text-gray-03">{C0.keepTitleLines[0]}</p>
          <h3 className="m-0 break-keep text-[28px] font-bold leading-[1.35] tb:text-[40px]">
            {C0.keepTitleLines[1]}
          </h3>
          <p className="m-0 max-w-[760px] break-keep text-[16.5px] leading-[1.85] text-gray-03">{C0.keepBody}</p>
        </div>

        {/* 결과(체중 곡선) · 이유(여섯 축) 두 장 */}
        <div className="grid grid-cols-1 gap-5 dt:grid-cols-2">
          {/* 왼쪽 — 체중 곡선 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="rounded-full bg-black px-3 py-1 text-[12.5px] font-bold text-white">{C0.chart.label}</span>
              <span className="break-keep text-[15px] font-bold">{C0.chart.title}</span>
            </div>
            <div className="rounded-[20px] bg-gray-00 p-5 tb:p-7">
              <svg
                viewBox="0 0 900 340"
                role="img"
                aria-label="관리 종료 후 체중 곡선 비교 — 일반 다이어트는 원래 체중으로 돌아가고, 윔은 유지됩니다"
                className="block h-auto w-full">
                <line x1="60" y1="290" x2="860" y2="290" stroke="var(--color-gray-01)" strokeWidth="1" />
                <line x1="60" y1="40" x2="60" y2="290" stroke="var(--color-gray-01)" strokeWidth="1" />

                <line x1="440" y1="34" x2="440" y2="296" stroke="var(--color-gray-02)" strokeWidth="1.5" strokeDasharray="6 6" />
                <text x="440" y="24" fontSize="15" fontWeight="700" textAnchor="middle" fill={C.green}>
                  {C0.chart.endLabel}
                </text>

                <line x1="60" y1="70" x2="860" y2="70" stroke="var(--color-gray-01)" strokeWidth="1" strokeDasharray="4 6" />
                <text x="52" y="75" fontSize="13" textAnchor="end" fill="var(--color-gray-02)">
                  {C0.chart.startLabel}
                </text>
                <text x="52" y="245" fontSize="13" textAnchor="end" fill="var(--color-gray-02)">
                  {C0.chart.goalLabel}
                </text>

                {/* 일반 다이어트 — 되돌아간다 */}
                <path
                  d="M60 70 C 190 82, 320 190, 440 240 C 530 262, 600 200, 690 148 C 760 108, 810 82, 860 74"
                  fill="none"
                  stroke="var(--color-gray-02)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="8 8"
                />
                <circle cx="860" cy="74" r="6" fill="var(--color-gray-02)" />
                <text x="846" y="52" fontSize="14.5" fontWeight="700" textAnchor="end" fill="var(--color-gray-03)">
                  {C0.chart.normalLabel}
                </text>

                {/* 윔 — 유지된다 */}
                <path
                  d="M60 70 C 190 82, 320 190, 440 240 C 560 252, 660 244, 760 246 C 800 247, 830 246, 860 246"
                  fill="none"
                  stroke={C.green}
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                <circle cx="440" cy="240" r="7" fill={C.green} />
                <circle cx="860" cy="246" r="7.5" fill={C.green} />
                <text x="846" y="224" fontSize="15" fontWeight="700" textAnchor="end" fill={C.green}>
                  {C0.chart.wimLabel}
                </text>

                <text x="452" y="286" fontSize="13.5" fill="var(--color-gray-02)">
                  {C0.chart.note}
                </text>
              </svg>
            </div>
          </div>

          {/* 오른쪽 — 여섯 축 레이더 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span
                className="rounded-full px-3 py-1 text-[12.5px] font-bold text-white"
                style={{ background: C.green }}>
                {C0.axes.label}
              </span>
              <span className="break-keep text-[15px] font-bold">{C0.axes.title}</span>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-[20px] bg-gray-00 p-5 tb:p-7">
              <svg viewBox="0 0 300 290" role="img" aria-label="6개 지표 전후 비교 그래프" className="w-full max-w-[300px]">
                {/* 눈금 육각형 3겹 */}
                <polygon points="150,40 236.6,90 236.6,190 150,240 63.4,190 63.4,90" fill="none" stroke="#e3e2e0" strokeWidth="1" />
                <polygon points="150,74 207.2,107 207.2,173 150,206 92.8,173 92.8,107" fill="none" stroke="#e3e2e0" strokeWidth="1" />
                <polygon points="150,107 178.6,123.5 178.6,156.5 150,173 121.4,156.5 121.4,123.5" fill="none" stroke="#e3e2e0" strokeWidth="1" />
                {/* 축 6개 */}
                <line x1="150" y1="140" x2="150" y2="40" stroke="#e3e2e0" strokeWidth="1" />
                <line x1="150" y1="140" x2="236.6" y2="90" stroke="#e3e2e0" strokeWidth="1" />
                <line x1="150" y1="140" x2="236.6" y2="190" stroke="#e3e2e0" strokeWidth="1" />
                <line x1="150" y1="140" x2="150" y2="240" stroke="#e3e2e0" strokeWidth="1" />
                <line x1="150" y1="140" x2="63.4" y2="190" stroke="#e3e2e0" strokeWidth="1" />
                <line x1="150" y1="140" x2="63.4" y2="90" stroke="#e3e2e0" strokeWidth="1" />
                {/* 시작 */}
                <polygon
                  points="150,55 227.9,95 193.3,165 150,195 115.4,160 111,117.5"
                  fill="#a1a0a1"
                  fillOpacity="0.16"
                  stroke="#a1a0a1"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
                {/* 관리 후 */}
                <polygon
                  points="150,85 189,117.5 219.3,180 150,225 72.1,185 76.4,97.5"
                  fill={C.green}
                  fillOpacity="0.14"
                  stroke={C.green}
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                {DIET_AXES.map((axis, i) => {
                  const pos = (
                    [
                      { x: 150, y: 26, anchor: "middle" },
                      { x: 252, y: 84, anchor: "start" },
                      { x: 252, y: 200, anchor: "start" },
                      { x: 150, y: 264, anchor: "middle" },
                      { x: 48, y: 200, anchor: "end" },
                      { x: 48, y: 84, anchor: "end" },
                    ] as const
                  )[i];
                  return (
                    <text key={axis.label} x={pos.x} y={pos.y} textAnchor={pos.anchor} fontSize="12" fill="#5d5d5d">
                      {axis.label}
                    </text>
                  );
                })}
              </svg>

              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-[17px] font-bold">{C0.axes.cardTitle}</span>
                <p className="m-0 break-keep text-[14px] leading-[1.75] text-gray-03">{C0.axes.cardBody}</p>
                <div className="mt-1 flex items-center gap-5">
                  <span className="flex items-center gap-2 text-[12.5px] text-gray-03">
                    <span className="h-0.5 w-5 bg-gray-02" /> {C0.axes.legendStart}
                  </span>
                  <span className="flex items-center gap-2 text-[12.5px] text-gray-03">
                    <span className="h-0.5 w-5" style={{ background: C.green }} /> {C0.axes.legendAfter}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Roadmap() {
  const C0 = useDietCopy().roadmap;
  return (
    <Section id="roadmap" className="bg-white">
      <div className="flex flex-col gap-8 tb:gap-11">
        <div className="flex flex-col gap-3.5">
          <Eyebrow tone="green">{C0.eyebrow}</Eyebrow>
          <h2 className="m-0 break-keep text-[26px] leading-[1.42] tb:text-[33px]">{C0.title}</h2>
          <p className="m-0 text-[15.5px] leading-[1.8] text-gray-03">{C0.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 tb:grid-cols-3 tb:gap-5">
          {DIET_ROADMAP.map((step) => (
            <div key={step.n} className="flex flex-col gap-3 rounded-[20px] bg-gray-00 px-7 py-8">
              <span
                className="grid h-[34px] w-[34px] place-items-center rounded-full text-[15px] font-bold text-white"
                style={{ background: C.green }}>
                {step.n}
              </span>
              <span className="text-[20px] font-bold tracking-[-0.02em]">{step.title}</span>
              <span className="text-[14.5px] font-bold" style={{ color: C.green }}>
                {step.lead}
              </span>
              <p className="m-0 break-keep text-[14px] leading-[1.75] text-gray-03">{step.desc}</p>
              <a href="#plans" className="mt-1 text-[13.5px] font-bold no-underline" style={{ color: C.green }}>
                {C0.detailLabel}
              </a>
            </div>
          ))}
        </div>

        {/* 버전2에서 사용하는 검사 6가지 · 관리 8가지 공용 섹션 */}
        <div className="mt-6 border-t border-gray-01 pt-12 tb:mt-10 tb:pt-16">
          <TestsSection singleRow hideCardDesc titleBelow />
          <div className="mt-[26px] tb:mt-[34px]">
            <CaresSection />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Team() {
  const C0 = useDietCopy().team;
  return (
    <Section id="team" className="bg-black">
      <div className="flex flex-col gap-8 tb:gap-11">
        <div className="flex flex-col gap-3.5">
          <Eyebrow>{C0.eyebrow}</Eyebrow>
          <h2 className="m-0 max-w-[760px] break-keep text-[26px] leading-[1.42] text-white tb:text-[34px]">
            {C0.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 tb:grid-cols-3 tb:gap-5">
          {DIET_TEAM.map((member) => (
            <div key={member.eyebrow} className="flex flex-col gap-2.5 rounded-[20px] border border-white/10 p-7">
              <span className="text-[12px] tracking-[0.14em]" style={{ color: C.mint }}>
                {member.eyebrow}
              </span>
              <span className="text-[20px] font-bold tracking-[-0.02em] text-white">{member.name}</span>
              <p className="m-0 break-keep text-[14px] leading-[1.7] text-white/60">{member.desc}</p>
              <span className="mt-1 text-[13px] font-bold" style={{ color: C.mint }}>
                {member.note}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 tb:gap-5 dt:grid-cols-2">
          <div className="flex flex-col gap-3 rounded-[20px] p-7" style={{ background: C.greenDark }}>
            <Eyebrow>{C0.oneDesign.eyebrow}</Eyebrow>
            <span className="text-[20px] font-bold tracking-[-0.02em] text-white">{C0.oneDesign.title}</span>
            <p className="m-0 break-keep text-[14.5px] leading-[1.8] text-white/70">{C0.oneDesign.body}</p>
          </div>

          <div className="flex flex-col gap-4 rounded-[20px] p-7" style={{ background: C.greenDark }}>
            <Eyebrow>{C0.coaching.eyebrow}</Eyebrow>
            <span className="break-keep text-[20px] font-bold tracking-[-0.02em] text-white">{C0.coaching.title}</span>
            <p className="m-0 break-keep text-[14.5px] leading-[1.8] text-white/70">{C0.coaching.body}</p>

            <div className="mt-1 flex items-center gap-3">
              <div className="flex flex-1 flex-col gap-1 rounded-[14px] bg-white/10 px-4 py-3">
                <span className="text-[11px] tracking-[0.12em]" style={{ color: C.mint }}>
                  {C0.coaching.managerEyebrow}
                </span>
                <span className="text-[14.5px] font-bold text-white">{C0.coaching.managerName}</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-[11.5px] text-white/60">
                <span>{C0.coaching.arrowGive} →</span>
                <span>← {C0.coaching.arrowBack}</span>
              </div>
              <div className="flex flex-1 flex-col gap-1 rounded-[14px] bg-white/10 px-4 py-3">
                <span className="text-[11px] tracking-[0.12em]" style={{ color: C.mint }}>
                  {C0.coaching.youEyebrow}
                </span>
                <span className="text-[14.5px] font-bold text-white">{C0.coaching.youName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Plans() {
  const C0 = useDietCopy().plans;
  return (
    <Section id="plans" className="bg-white">
      <div className="flex flex-col gap-8 tb:gap-11">
        <div className="flex flex-col gap-3.5">
          <Eyebrow tone="green">{C0.eyebrow}</Eyebrow>
          <h2 className="m-0 break-keep text-[26px] leading-[1.42] tb:text-[36px]">{C0.title}</h2>
          <p className="m-0 max-w-[620px] break-keep text-[15.5px] leading-[1.8] text-gray-03">
            <Lines items={C0.descriptionLines} />
          </p>
        </div>

        {/* 모바일은 가로 스크롤, PC 는 3열 */}
        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] tb:mx-0 tb:grid tb:grid-cols-3 tb:gap-5 tb:overflow-visible tb:px-0 [&::-webkit-scrollbar]:hidden">
          {DIET_PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`flex w-[300px] shrink-0 snap-start flex-col gap-5 rounded-[22px] border border-gray-02/50 bg-white p-7 tb:w-auto ${
                plan.featured ? "ring-2" : ""
              }`}
              style={plan.featured ? { boxShadow: `0 0 0 2px ${C.green}` } : undefined}>
              <div className="flex flex-col gap-2">
                {plan.featured && (
                  <span
                    className="w-fit rounded-full px-3 py-1 text-[11.5px] font-bold text-white"
                    style={{ background: C.green }}>
                    {C0.badge}
                  </span>
                )}
                <span className="text-[22px] font-bold tracking-[-0.02em]">{plan.name}</span>
                <span className="text-[13px] font-bold" style={{ color: C.green }}>
                  {plan.kind}
                </span>
                <p className="m-0 break-keep text-[13.5px] font-bold leading-[1.65] text-gray-03">{plan.target}</p>
              </div>

              <div className="flex flex-col gap-1 border-t border-gray-01 pt-5">
                <span className="text-[12.5px] text-gray-02">{plan.priceNote}</span>
                <span className="text-[19px] font-bold tracking-[-0.02em]">{plan.price}</span>
              </div>

              <div className="flex flex-col">
                {DIET_PLAN_FEATURES.map((feature, i) => {
                  const on = plan.included[i];
                  return (
                    <div
                      key={feature}
                      className={`flex items-center gap-2.5 py-[11px] ${i === 0 ? "" : "border-t border-gray-01"}`}>
                      <span
                        className="flex-none text-[13.5px] font-bold"
                        style={{ color: on ? C.green : "#c9c9c9" }}>
                        {on ? "✓" : "—"}
                      </span>
                      <span className={`flex-1 text-[14px] leading-[1.5] ${on ? "text-gray-03" : "text-gray-02"}`}>
                        {feature}
                      </span>
                      {!on && <span className="text-[11.5px] text-gray-02">{C0.optionLabel}</span>}
                    </div>
                  );
                })}
              </div>

              <Link
                href="/contact"
                className="mt-auto rounded-full py-3.5 text-center text-[14.5px] font-bold no-underline transition hover:opacity-90"
                style={
                  plan.featured
                    ? { background: C.green, color: "#fff" }
                    : { background: C.pale, color: C.green }
                }>
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>

        <span className="text-center text-[13px] text-gray-02 tb:hidden">{C0.swipeHint}</span>
      </div>
    </Section>
  );
}

function Reviews() {
  const C0 = useDietCopy().reviews;
  return (
    <Section id="reviews" className="bg-black">
      <div className="flex flex-col gap-8 tb:gap-11">
        <div className="flex flex-col gap-3.5">
          <Eyebrow tone="green">{C0.eyebrow}</Eyebrow>
          <h2 className="m-0 break-keep text-[26px] leading-[1.42] text-white tb:text-[33px]">
            <Lines items={C0.titleLines} />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 dt:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
          {/* 평점 */}
          <div className="flex flex-col gap-4 rounded-[20px] border border-white/10 p-7">
            <span className="text-[12px] tracking-[0.14em]" style={{ color: C.mint }}>
              {C0.ratingLabel}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-[46px] font-bold leading-none tracking-[-0.03em] text-white">
                {C0.ratingValue}
              </span>
              <span className="text-[15px] text-gray-02">{C0.ratingMax}</span>
            </div>
            <span className="text-[14px]" style={{ color: C.mint }}>
              ★★★★★
            </span>
            <span className="text-[12.5px] text-white/60">{C0.ratingCount}</span>

            <div className="mt-1 flex flex-col gap-2.5">
              {DIET_RATING_BARS.map((bar) => (
                <div key={bar.label} className="flex items-center gap-3">
                  <span className="w-[76px] shrink-0 text-[12.5px] text-white/70">{bar.label}</span>
                  <span className="relative block h-1.5 flex-1 rounded-full bg-white/15">
                    <span
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ width: `${bar.percent}%`, background: C.mint }}
                    />
                  </span>
                  <span className="w-[34px] shrink-0 text-right text-[12.5px] font-bold" style={{ color: C.mint }}>
                    {bar.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 후기 */}
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 tb:grid-cols-2">
            {DIET_REVIEWS.map((review) => (
              <li key={review.who} className="flex flex-col gap-2.5 rounded-[18px] bg-white p-6">
                <span className="text-[13px]" style={{ color: C.green }}>
                  ★★★★★
                </span>
                <p className="m-0 break-keep text-[14.5px] leading-[1.75]">{review.body}</p>
                <span className="mt-auto text-[12.5px] text-gray-02">{review.who}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Faq() {
  const C0 = useDietCopy().faq;
  const [open, setOpen] = useState<string | null>(DIET_FAQ[0].q);
  return (
    <Section id="faq" className="bg-white">
      <div className="flex flex-col gap-8 tb:gap-11">
        <div className="flex flex-col gap-3.5">
          <Eyebrow tone="green">{C0.eyebrow}</Eyebrow>
          <h2 className="m-0 text-[26px] leading-[1.42] tb:text-[36px]">{C0.title}</h2>
        </div>

        <div className="flex flex-col gap-3">
          {DIET_FAQ.map((item) => {
            const isOpen = open === item.q;
            return (
              <div key={item.q} className="overflow-hidden rounded-[18px] bg-white">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.q)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-6 py-5 text-left">
                  <span className="break-keep text-[15.5px] font-bold">{item.q}</span>
                  <span className="flex-none text-[18px]" style={{ color: C.green }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="m-0 break-keep px-6 pb-6 text-[14.5px] leading-[1.85] text-gray-03">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const C0 = useDietCopy().contact;
  return (
    <section id="contact" className="px-6 py-[116px]" style={{ background: C.greenDark }}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 text-center">
        <h2 className="m-0 max-w-[760px] break-keep text-[28px] leading-[1.35] text-white tb:text-[44px]">
          <Lines items={C0.titleLines} />
        </h2>
        <p className="m-0 text-[15.5px] leading-[1.8] text-white/75">{C0.description}</p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-white px-7 py-3.5 text-[15px] font-bold no-underline transition hover:opacity-90"
            style={{ color: C.green }}>
            {C0.primaryCta}
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/50 px-7 py-3.5 text-[15px] font-bold text-white no-underline transition hover:bg-white/10">
            {C0.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 페이지 ─────────────────────────── */

export default function DietLanding({ copyVariant = "base" }: { copyVariant?: "base" | "improved" }) {
  const copy = copyVariant === "improved" ? DIET_COPY_V2 : DIET_COPY;
  return (
    <DietCopyContext.Provider value={copy}>
      <main className="w-full bg-white font-pretendard text-black antialiased">
        <Hero />
        <Problem />
        <Difference />
        <Result />
        <Roadmap />
        <Team />
        <Plans />
        <Reviews />
        <Faq />
        <Contact />
      </main>
    </DietCopyContext.Provider>
  );
}
