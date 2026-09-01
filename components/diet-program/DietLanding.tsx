"use client";

/**
 * 감량 프로그램 랜딩 — E안 (단일 파일)
 * Next.js App Router · React · TypeScript
 *
 * 설치
 *   1. 이 파일을 app/wireframe-d/page.tsx 로 저장합니다. 끝입니다.
 *      (별도 CSS 파일 없음 — 스타일은 파일 하단 STYLES 상수에 있습니다)
 *   2. app/layout.tsx 에 Pretendard 폰트를 로드합니다:
 *      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
 *   3. /wireframe-d 로 접속합니다.
 *
 * 구성
 *   · 문구와 데이터   — 파일 상단 상수 (여기만 고치면 화면에 반영)
 *   · 섹션 컴포넌트   — 12개
 *   · 스타일          — 하단 STYLES, 클래스 접두사 wd-, 모바일 ≤767px
 *
 * 대안 레이아웃
 *   <TeamSection variant="converge" | "funnel" />
 *   <CasesSection variant="records" />
 */

import { useState } from "react";
import HomeManagement from "@/components/home/HomeManagement";


import {
  HERO, WORRIES, WORRIES_COPY, DIFFERENCE, RESULT, ROADMAP, TEAM,
  CARE, CASES, REVIEWS_COPY, PLAN_FEATURES, PLANS_COPY, FAQ_COPY, FINAL_CTA,
} from "@/data/diet";


/* ─── primitives ──────────────────────────────────────── */

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#525252" : "#d4d4d4"} aria-hidden="true">
      <path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z" />
    </svg>
  );
}

function StarRow({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <div className={"wd-starRow"} aria-label={`${count} / ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <Star key={i} filled={i < count} />
      ))}
    </div>
  );
}

function PhotoSlot({ label }: { label: string }) {
  return (
    <div className={"wd-photoSlot"}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.6" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <div className={"wd-photoSlotLabel"}>{label}</div>
    </div>
  );
}

/* ─── HeroSection ─────────────────────────────────────── */

function HeroSection() {
  return (
    <section className={"wd-hero"} aria-labelledby="hero-title">
      <div className={"wd-heroGrid"} aria-hidden="true" />
      <div className={"wd-heroScrim"} aria-hidden="true" />
      <div className={"wd-heroBody"}>
        <p className={"wd-heroEyebrow"}>{HERO.eyebrow}</p>
        <h1 id="hero-title" className={"wd-heroTitle"}>
          {HERO.title}
        </h1>
        <p className={"wd-heroText"}>{HERO.body}</p>
        <div className={"wd-heroActions"}>
          <a href="/contact" className={`${"wd-heroButton"} ${"wd-heroButtonPrimary"}`}>{HERO.primaryCta}</a>
          <a href="/contact" className={`${"wd-heroButton"} ${"wd-heroButtonSecondary"}`}>{HERO.secondaryCta}</a>
        </div>
        <p className={"wd-heroNote"}>{HERO.note}</p>
      </div>
    </section>
  );
}

/* ─── WorriesSection ──────────────────────────────────── */

/** 데스크톱에서는 무한 마퀴, 모바일에서는 감싸진 태그 벽으로 표시됩니다. */
function WorriesSection() {
  const marquee = [...WORRIES, ...WORRIES];

  return (
    <section className={"wd-worries"} aria-labelledby="worries-title">
      <div className={"wd-worriesHead"}>
        <div className={"wd-worriesEyebrow"}>{WORRIES_COPY.eyebrow}</div>
        <h2 id="worries-title" className={"wd-worriesTitle"}>
          {WORRIES_COPY.title}
        </h2>
        <p className={"wd-worriesSub"}>{WORRIES_COPY.sub}</p>
      </div>

      <div className={"wd-marqueeWrap"}>
        <div className={"wd-marqueeRow"}>
          {marquee.map((text, i) => (
            <span key={i} className={"wd-worryChip"} aria-hidden={i >= WORRIES.length}>
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className={"wd-worriesStem"} aria-hidden="true">
        <div className={"wd-worriesStemLine"} />
        <div className={"wd-worriesStemDot"} />
      </div>

      <div className={"wd-domeWrap"}>
        <div className={"wd-dome"} aria-hidden="true" />
        <div className={"wd-domeBody"}>
          <p className={"wd-domeTitle"}>{WORRIES_COPY.domeTitle}</p>
          <p className={"wd-domeSub"}>{WORRIES_COPY.domeSub}</p>
          <p className={"wd-domeCtaText"}>{WORRIES_COPY.domeCtaText}</p>
          <a href="/contact" className={"wd-domeCtaButton"}>{WORRIES_COPY.domeCtaButton}</a>
        </div>
      </div>
    </section>
  );
}

/* ─── DifferenceSection ───────────────────────────────── */

function DifferenceSection() {
  return (
    <section className={`${"wd-section"} ${"wd-difference"}`} aria-labelledby="difference-title">
      <div className={`${"wd-inner"} ${"wd-differenceInner"}`}>
        <div className={"wd-diffKicker"}>
          <span aria-hidden="true">［</span>
          {DIFFERENCE.kicker}
          <span aria-hidden="true">］</span>
        </div>

        <div className={"wd-diffSteps"}>
          {DIFFERENCE.steps.map((step, i) => {
            const isResult = i === DIFFERENCE.steps.length - 1;
            return (
              <div key={step.title} className={"wd-rowCenter"} style={{ gap: 20 }}>
                {i > 0 && <div className={"wd-diffOp"}>{i === 1 ? "+" : "="}</div>}
                <div className={`${"wd-diffCircle"} ${isResult ? "wd-diffCircleResult" : ""}`}>
                  <div className={`${"wd-diffStepKicker"} ${isResult ? "wd-diffStepKickerLight" : ""}`}>{step.kicker}</div>
                  <div className={`${"wd-diffStepTitle"} ${isResult ? "wd-diffStepTitleLight" : ""}`}>{step.title}</div>
                  <div className={`${"wd-diffStepDesc"} ${isResult ? "wd-diffStepDescLight" : ""}`}>{step.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <h2 id="difference-title" className={"wd-diffTitle"}>
          {DIFFERENCE.title}
          <br />
          <span className={"wd-diffAccent"}>{DIFFERENCE.titleAccent}</span>
        </h2>

        <div className={"wd-diffRule"} aria-hidden="true" />

        <div className={"wd-diffBodyWrap"}>
          <p className={"wd-diffBody"}>{DIFFERENCE.body}</p>
          <p className={"wd-diffBodyStrong"}>{DIFFERENCE.bodyStrong}</p>
        </div>
      </div>
    </section>
  );
}

/* ─── ResultSection ───────────────────────────────────── */

function RadarChart() {
  return (
    <svg viewBox="0 0 300 290" style={{ width: "100%" }} role="img" aria-label={RESULT.radar.ariaLabel}>
      <polygon points="150,40 236.6,90 236.6,190 150,240 63.4,190 63.4,90" fill="none" stroke="#e5e5e5" strokeWidth="1" />
      <polygon points="150,74 207.2,107 207.2,173 150,206 92.8,173 92.8,107" fill="none" stroke="#eeeeee" strokeWidth="1" />
      <polygon points="150,107 178.6,123.5 178.6,156.5 150,173 121.4,156.5 121.4,123.5" fill="none" stroke="#f0f0f0" strokeWidth="1" />
      {[
        "150,40", "236.6,90", "236.6,190", "150,240", "63.4,190", "63.4,90",
      ].map((p) => {
        const [x, y] = p.split(",");
        return <line key={p} x1="150" y1="140" x2={x} y2={y} stroke="#f0f0f0" strokeWidth="1" />;
      })}
      <polygon points="150,55 227.9,95 193.3,165 150,195 115.4,160 111,117.5" fill="#a3a3a3" fillOpacity="0.18" stroke="#a3a3a3" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="150,85 189,117.5 219.3,180 150,225 72.1,185 76.4,97.5" fill="#404040" fillOpacity="0.12" stroke="#262626" strokeWidth="2.5" strokeLinejoin="round" />
      <text x="150" y="26" textAnchor="middle" fontSize="12" fill="#737373">{RESULT.radar.axes[0]}</text>
      <text x="252" y="84" textAnchor="start" fontSize="12" fill="#737373">{RESULT.radar.axes[1]}</text>
      <text x="252" y="200" textAnchor="start" fontSize="12" fill="#737373">{RESULT.radar.axes[2]}</text>
      <text x="150" y="264" textAnchor="middle" fontSize="12" fill="#737373">{RESULT.radar.axes[3]}</text>
      <text x="48" y="200" textAnchor="end" fontSize="12" fill="#737373">{RESULT.radar.axes[4]}</text>
      <text x="48" y="84" textAnchor="end" fontSize="12" fill="#737373">{RESULT.radar.axes[5]}</text>
    </svg>
  );
}

function ResultSection() {
  return (
    <section className={`${"wd-section"} ${"wd-result"}`} aria-labelledby="result-title">
      <div className={"wd-inner"}>
        <div className={"wd-resultBadge"}>{RESULT.badge}</div>
        <h2 id="result-title" className={"wd-resultTitle"}>{RESULT.title}</h2>
        <p className={"wd-resultSub"}>{RESULT.sub}</p>
        <p className={"wd-resultBody"}>{RESULT.body}</p>

        <div className={"wd-photoPair"}>
          <div className={"wd-photoCol"}>
            <PhotoSlot label="BEFORE" />
            <div className={"wd-photoCaption"}>{RESULT.before.label}</div>
            <div className={"wd-photoWeight"}>{RESULT.before.weight}</div>
          </div>
          <div className={"wd-photoCol"}>
            <PhotoSlot label="AFTER" />
            <div className={"wd-photoCaption"}>{RESULT.after.label}</div>
            <div className={"wd-photoWeight"}>{RESULT.after.weight}</div>
          </div>
          <div className={"wd-photoPin"} aria-hidden="true">{RESULT.badgeCenter}</div>
        </div>

        <div className={"wd-rule"} aria-hidden="true" />

        <div className={"wd-metricGrid"}>
          {RESULT.metrics.map((m) => (
            <div key={m.label} className={`${"wd-col"} ${"wd-gap8"}`}>
              <div className={"wd-metricLabel"}>{m.label}</div>
              <div className={"wd-metricValue"}>{m.value}</div>
            </div>
          ))}
        </div>

        <div className={"wd-radarCard"}>
          <RadarChart />
          <div className={`${"wd-col"} ${"wd-gap20"}`}>
            <div className={"wd-radarTitle"}>{RESULT.radar.title}</div>
            <p className={"wd-radarBody"}>{RESULT.radar.body}</p>
            <div className={`${"wd-col"} ${"wd-gap10"}`}>
              <div className={"wd-radarLegend"}>
                <span className={"wd-radarSwatchBefore"} aria-hidden="true" />
                {RESULT.radar.legendBefore}
              </div>
              <div className={`${"wd-radarLegend"} ${"wd-radarLegendStrong"}`}>
                <span className={"wd-radarSwatchAfter"} aria-hidden="true" />
                {RESULT.radar.legendAfter}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── RoadmapSection ──────────────────────────────────── */

function RoadmapSection() {
  return (
    <section className={`${"wd-section"} ${"wd-roadmap"}`} aria-labelledby="roadmap-title">
      <div className={`${"wd-inner"} ${"wd-gap16"}`}>
        <div className={`${"wd-col"} ${"wd-gap10"}`}>
          <div className={"wd-kicker"}>{ROADMAP.kicker}</div>
          <h2 id="roadmap-title" className={"wd-h2"}>{ROADMAP.title}</h2>
          <p className={"wd-lead"}>{ROADMAP.sub}</p>
        </div>

        <ol className={"wd-roadmapTrack"}>
          <div className={"wd-roadmapLine"} aria-hidden="true" />
          {ROADMAP.steps.map((step) => (
            <li key={step.n} className={"wd-roadmapStep"}>
              <div className={"wd-roadmapDot"} aria-hidden="true">{step.n}</div>
              <div>
                <h3 className={"wd-roadmapTitle"}>{step.title}</h3>
                <div className={"wd-roadmapLead"}>{step.lead}</div>
                <div className={"wd-roadmapDesc"}>{step.desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── TeamSection ─────────────────────────────────────── */

type TeamVariant = "cards" | "converge" | "funnel";

/**
 * cards    — 매니저 카드 3장 (A안, 기본)
 * converge — 세 전문 팀이 하나로 모이는 구조도 (B안)
 * funnel   — 구조도 + 전담 매니저 전달 단계까지 (C안)
 */
function TeamSection({ variant = "cards" }: { variant?: TeamVariant }) {
  return (
    <section className={`${"wd-section"} ${"wd-team"}`} aria-labelledby="team-title">
      <div className={`${"wd-inner"} ${"wd-gap44"}`}>
        <div className={`${"wd-col"} ${"wd-gap16"}`}>
          <div className={`${"wd-col"} ${"wd-gap10"}`}>
            <div className={"wd-kicker"}>{TEAM.kicker}</div>
            <h2 id="team-title" className={"wd-h2"}>{TEAM.title}</h2>
          </div>
          <p className={`${"wd-lead"} ${"wd-pre"}`}>{TEAM.sub}</p>
        </div>

        {variant === "cards" && (
          <div className={"wd-teamGrid"}>
            {TEAM.members.map((member) => (
              <article key={member.no} className={"wd-teamCard"}>
                <div className={`${"wd-rowCenter"} ${"wd-gap16"}`}>
                  <div className={"wd-teamAvatar"} aria-hidden="true">{member.no}</div>
                  <div>
                    <div className={"wd-teamRole"}>{member.role}</div>
                    <div className={"wd-teamName"}>{member.name}</div>
                  </div>
                </div>
                <div className={`${"wd-col"} ${"wd-gap16"}`} style={{ marginTop: 20 }}>
                  <p className={"wd-teamDesc"} style={{ margin: 0 }}>{member.desc}</p>
                  <div className={`${"wd-wrapRow"} ${"wd-gap8"}`}>
                    {member.tags.map((tag) => (
                      <span key={tag} className={"wd-teamTag"}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {variant === "converge" && (
          <div className={"wd-converge"}>
            <div className={"wd-convergeRow"}>
              {TEAM.specialists.map((t, i) => (
                <div key={t.name} className={`${"wd-convergeCol"} ${i > 0 ? "wd-convergeColDivided" : ""}`}>
                  <div className={"wd-convergeKicker"}>{t.kicker}</div>
                  <div className={"wd-convergeName"}>{t.name}</div>
                  <div className={"wd-convergeRole"}>{t.role}</div>
                  <div className={"wd-convergeNote"}>{t.note}</div>
                </div>
              ))}
            </div>

            <div className={"wd-convergeJoin"} aria-hidden="true">
              <div className={"wd-convergeStems"}>
                {[0, 1, 2].map((i) => (
                  <div key={i} className={"wd-convergeStemCell"}>
                    <div className={"wd-convergeStem"} />
                  </div>
                ))}
              </div>
              <div className={"wd-convergeBar"} />
              <div className={"wd-convergeDrop"} />
              <div className={"wd-convergeNode"} />
              <div className={"wd-convergeTail"} />
            </div>

            <div className={"wd-convergeHub"}>
              <div className={`${"wd-col"} ${"wd-gap8"}`}>
                <div className={"wd-convergeHubKicker"}>{TEAM.convergeHub.kicker}</div>
                <div className={"wd-convergeHubTitle"}>{TEAM.convergeHub.title}</div>
              </div>
            </div>

            <div className={"wd-convergeJoin"} aria-hidden="true">
              <div className={"wd-convergeTail"} />
              <div className={"wd-convergeNode"} />
              <div className={"wd-convergeDrop"} />
            </div>

            <div className={`${"wd-col"} ${"wd-gap10"}`} style={{ alignItems: "center" }}>
              <div className={"wd-convergeOutcome"}>{TEAM.outcomeTitle}</div>
              <div className={"wd-convergeOutcomeSub"}>{TEAM.outcomeSub}</div>
            </div>
          </div>
        )}

        {variant === "funnel" && (
          <div className={"wd-funnel"}>
            <div className={"wd-funnelTop"}>
              {TEAM.specialists.map((t) => (
                <div key={t.name} className={`${"wd-col"} ${"wd-gap6"}`} style={{ alignItems: "center", textAlign: "center", padding: "0 20px" }}>
                  <div className={"wd-convergeName"} style={{ fontSize: 18 }}>{t.name}</div>
                  <div className={"wd-convergeRole"} style={{ maxWidth: 180, fontSize: 12, color: "#8a8073" }}>{t.role}</div>
                </div>
              ))}
            </div>
            <div className={"wd-funnelMid"}>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.035em" }}>{TEAM.convergeTitle}</div>
            </div>
            <div className={"wd-funnelLow"}>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", color: "#2a2318" }}>{TEAM.deliveryTitle}</div>
            </div>
            <div className={`${"wd-col"} ${"wd-gap8"}`} style={{ marginTop: 26, alignItems: "center" }}>
              <div className={"wd-convergeOutcome"}>{TEAM.outcomeTitle}</div>
              <div className={"wd-convergeOutcomeSub"}>{TEAM.outcomeSub}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── CareSection ─────────────────────────────────────── */

function CareSection() {
  return (
    <section className={`${"wd-section"} ${"wd-care"}`} aria-labelledby="care-title">
      <div className={"wd-inner"}>
        <h2 id="care-title" className="sr-only">{CARE.title}</h2>
        <HomeManagement embedded />
      </div>
    </section>
  );
}

/* ─── CasesSection ────────────────────────────────────── */

type CasesVariant = "records" | "featured";

/**
 * featured — 대표 케이스 한 줄 + 페르소나 카드 3장 (C안, 기본)
 * records  — 케이스 기록 3건 (A안)
 */
function CasesSection({ variant = "featured" }: { variant?: CasesVariant }) {
  const personas = CASES.personas.slice(0, 3);
  const [personaIndex, setPersonaIndex] = useState(0);

  return (
    <section className={`${"wd-section"} ${"wd-cases"}`} aria-labelledby="cases-title">
      <div className={`${"wd-inner"} ${"wd-gap44"}`}>
        <div className={`${"wd-col"} ${"wd-gap32"}`}>
          <div className={`${"wd-col"} ${"wd-gap12"}`}>
            <div className={"wd-kicker"}>{CASES.kicker}</div>
            <h2 id="cases-title" className={"wd-h2"}>
              {CASES.title}
              <br />
              <span style={{ color: "#525252" }}>{CASES.titleAccent}</span>
            </h2>
          </div>

          {variant === "featured" && (
            <div className={`${"wd-col"} ${"wd-gap24"}`}>
              <div className={"wd-caseFeatured"}>
                <div className={`${"wd-col"} ${"wd-gap12"}`}>
                  <div className={"wd-caseFeaturedKicker"}>{CASES.featured.kicker}</div>
                  <p className={"wd-caseFeaturedTitle"} style={{ margin: 0 }}>{CASES.featured.title}</p>
                </div>
                <div className={"wd-caseStats"}>
                  {CASES.featured.stats.map((stat, i) => (
                    <div key={stat.label} className={`${"wd-caseStat"} ${i > 0 ? "wd-caseStatDivided" : ""}`}>
                      <div className={"wd-caseStatLabel"}>{stat.label}</div>
                      <div className={`${"wd-caseStatValue"} ${i === 3 ? "wd-caseStatValueSm" : ""}`}>{stat.value}</div>
                      <div className={"wd-caseStatNote"}>{stat.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={"wd-personaDesktopGrid"}>
                {personas.map((p) => (
                  <article key={p.persona} className={"wd-personaCard"}>
                    <div className={"wd-personaHead"}>
                      <span className={"wd-personaName"}>{p.persona}</span>
                      <span className={"wd-personaPlan"}>{p.plan}</span>
                    </div>
                    <div className={`${"wd-col"} ${"wd-gap4"}`} style={{ padding: "22px 24px 14px" }}>
                      <div className={"wd-personaLoss"}>{p.loss}</div>
                      <div className={"wd-personaRange"}>{p.range} · {p.period}</div>
                    </div>
                    <div style={{ padding: "0 24px 18px" }}>
                      <span className={"wd-personaSub"}>{p.sub}</span>
                    </div>
                    <p className={"wd-personaQuote"}>“{p.quote}”</p>
                  </article>
                ))}
              </div>

              <div className={"wd-personaCarousel"}>
                <div className={"wd-personaViewport"}>
                  <div className={"wd-personaTrack"} style={{ transform: `translateX(-${personaIndex * 100}%)` }}>
                    {personas.map((p) => (
                      <div key={p.persona} className={"wd-personaSlide"}>
                        <article className={"wd-personaCard"}>
                          <div className={"wd-personaHead"}>
                            <span className={"wd-personaName"}>{p.persona}</span>
                            <span className={"wd-personaPlan"}>{p.plan}</span>
                          </div>
                          <div className={`${"wd-col"} ${"wd-gap4"}`} style={{ padding: "22px 24px 14px" }}>
                            <div className={"wd-personaLoss"}>{p.loss}</div>
                            <div className={"wd-personaRange"}>{p.range} · {p.period}</div>
                          </div>
                          <div style={{ padding: "0 24px 18px" }}>
                            <span className={"wd-personaSub"}>{p.sub}</span>
                          </div>
                          <p className={"wd-personaQuote"}>“{p.quote}”</p>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={"wd-personaControls"}>
                  <button type="button" aria-label={CASES.prevAriaLabel} onClick={() => setPersonaIndex((personaIndex - 1 + personas.length) % personas.length)} className={"wd-personaArrow"}>←</button>
                  <div className={"wd-personaDots"}>
                    {personas.map((p, index) => (
                      <button key={p.persona} type="button" aria-label={`${index + 1}${CASES.dotAriaSuffix}`} onClick={() => setPersonaIndex(index)} className={`${"wd-personaDot"} ${personaIndex === index ? "wd-personaDotActive" : ""}`} />
                    ))}
                  </div>
                  <button type="button" aria-label={CASES.nextAriaLabel} onClick={() => setPersonaIndex((personaIndex + 1) % personas.length)} className={"wd-personaArrow"}>→</button>
                </div>
              </div>

              <p className={"wd-disclaimer"} style={{ margin: 0 }}>{CASES.disclaimer}</p>
            </div>
          )}

          {variant === "records" && (
            <div className={`${"wd-col"} ${"wd-gap20"}`}>
              {CASES.records.map((item) => (
                <article key={item.profile} className={"wd-recordCard"}>
                  <div className={"wd-recordAside"}>
                    <div className={"wd-recordProfile"}>{item.profile}</div>
                    <div className={"wd-recordLoss"}>{item.loss}</div>
                    <div className={"wd-recordMeta"}>{item.weight} · {item.period}</div>
                    <span className={"wd-recordFat"}>{item.fat}</span>
                  </div>
                  <div style={{ padding: "20px 32px" }}>
                    {item.details.map((d) => (
                      <div key={d.label} className={"wd-recordRow"}>
                        <span className={"wd-recordRowLabel"}>{d.label}</span>
                        <span className={`${"wd-recordRowValue"} ${d.label === CASES.quoteLabel ? "wd-recordRowQuote" : ""}`}>{d.value}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── ReviewsSection ──────────────────────────────────── */

function ReviewsSection() {
  return (
    <section className={`${"wd-section"} ${"wd-reviews"}`} aria-labelledby="reviews-title">
      <div className={`${"wd-inner"} ${"wd-gap40"}`}>
        <div className={"wd-reviewsHead"}>
          <div className={`${"wd-col"} ${"wd-gap10"}`} style={{ minWidth: 0 }}>
            <div className={"wd-kicker"}>{REVIEWS_COPY.kicker}</div>
            <h2 id="reviews-title" className={"wd-h2"}>
              {REVIEWS_COPY.title} <span style={{ color: "#525252" }}>{REVIEWS_COPY.titleAccent}</span>
            </h2>
          </div>
          <div className={"wd-rowCenter"} style={{ flexShrink: 0, alignItems: "baseline", gap: 10 }}>
            <div className={"wd-reviewsScore"}>{REVIEWS_COPY.score}</div>
            <div style={{ fontSize: 14, color: "#8a8a8a" }}>{REVIEWS_COPY.scoreNote}</div>
          </div>
        </div>

        <div className={"wd-reviewsGrid"}>
          {REVIEWS_COPY.items.map((r) => (
            <div key={r.tag + r.author} className={"wd-reviewCard"}>
              <div className={"wd-rowCenter"} style={{ justifyContent: "space-between", gap: 16 }}>
                <StarRow count={r.stars} />
                <div className={"wd-reviewTag"}>{r.tag}</div>
              </div>
              <p className={"wd-reviewBody"} style={{ margin: 0 }}>{r.body}</p>
              <div className={"wd-reviewAuthor"}>{r.author}</div>
            </div>
          ))}

          <div className={"wd-reviewHighlight"}>
            <div className={"wd-starRow"} style={{ flexShrink: 0 }}>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} filled />
              ))}
            </div>
            <p className={"wd-reviewHighlightBody"} style={{ margin: 0 }}>{REVIEWS_COPY.highlight.body}</p>
            <div className={"wd-reviewHighlightAuthor"}>{REVIEWS_COPY.highlight.author}</div>
          </div>
        </div>

        <div className={"wd-disclaimer"}>{REVIEWS_COPY.disclaimer}</div>
      </div>
    </section>
  );
}

/* ─── PlansSection ────────────────────────────────────── */

function PlansSection() {
  return (
    <section className={`${"wd-section"} ${"wd-plans"}`} aria-labelledby="plans-title">
      <div className={`${"wd-inner"} ${"wd-gap44"}`}>
        <div className={`${"wd-col"} ${"wd-gap14"}`}>
          <div className={"wd-kicker"}>{PLANS_COPY.kicker}</div>
          <h2 id="plans-title" className={"wd-h2"}>
            {PLANS_COPY.title}
            <br />
            <span style={{ color: "#525252" }}>{PLANS_COPY.titleAccent}</span>
          </h2>
          {PLANS_COPY.sub && (
            <p className={`${"wd-pre"} ${"wd-planIntro"}`}>
              {PLANS_COPY.sub}
            </p>
          )}
        </div>

        <div className={"wd-planGrid"}>
          {PLANS_COPY.plans.map((plan) => (
            <div key={plan.name} className={`${"wd-planCard"} ${plan.featured ? "wd-planCardFeatured" : ""}`}>
              {plan.featured && <div className={"wd-planBadge"}>{PLANS_COPY.featuredBadge}</div>}

              <div className={`${"wd-col"} ${"wd-gap10"}`}>
                <div className={"wd-planName"}>{plan.name}</div>
                <div className={"wd-planSubtitle"}>{plan.subtitle}</div>
                <div className={"wd-planTarget"}>{plan.target}</div>
              </div>

              <div className={"wd-col"}>
                {PLAN_FEATURES.map((text, i) => {
                  const state = plan.features[i] ?? "off";
                  const off = state === "off";
                  return (
                    <div key={text} className={`${"wd-planFeature"} ${off ? "wd-planFeatureOff" : ""}`}>
                      <span className={`${"wd-planMark"} ${off ? "wd-planMarkOff" : ""}`} aria-hidden="true">
                        {off ? "—" : "✓"}
                      </span>
                      {text}
                      {state === "option" && <span className={"wd-planOption"}>{PLANS_COPY.optionLabel}</span>}
                    </div>
                  );
                })}
              </div>

              <div className={`${"wd-col"} ${"wd-gap6"}`} style={{ marginTop: "auto" }}>
                <div className={"wd-planPriceLabel"}>{plan.priceLabel}</div>
                <div className={"wd-planPrice"}>{plan.priceValue}</div>
              </div>

              <a href="#contact" className={`${"wd-planCta"} ${plan.featured ? "wd-planCtaFeatured" : ""}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className={"wd-refund"} style={{ margin: 0 }}>
          <span className={"wd-refundLead"}>{PLANS_COPY.refundLead}</span>
          {PLANS_COPY.refundBody}
        </p>
      </div>
    </section>
  );
}

/* ─── FaqSection ──────────────────────────────────────── */

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={`${"wd-section"} ${"wd-faq"}`} aria-labelledby="faq-title">
      <div className={`${"wd-inner"} ${"wd-gap44"}`}>
        <div className={`${"wd-col"} ${"wd-gap16"}`}>
          <div className={"wd-faqKicker"}>{FAQ_COPY.kicker}</div>
          <h2 id="faq-title" className={"wd-faqTitle"}>{FAQ_COPY.title}</h2>
        </div>

        <div className={`${"wd-col"} ${"wd-gap14"}`}>
          {FAQ_COPY.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={"wd-faqItem"}>
                <button
                  type="button"
                  className={"wd-faqButton"}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={"wd-faqQuestion"}>{item.q}</span>
                  <span className={"wd-faqSign"} aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <div id={`faq-panel-${i}`} className={"wd-faqAnswer"} hidden={!isOpen}>
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── FinalCtaSection ─────────────────────────────────── */

function FinalCtaSection() {
  return (
    <section id="contact" className={`${"wd-section"} ${"wd-finalCta"}`} aria-labelledby="final-cta-title">
      <div className={`${"wd-inner"} ${"wd-finalCtaInner"}`}>
        <h2 id="final-cta-title" className={"wd-finalCtaTitle"}>{FINAL_CTA.title}</h2>
        <p className={"wd-finalCtaBody"}>{FINAL_CTA.body}</p>
        <div className={"wd-finalCtaRow"}>
          <button type="button" className={"wd-btnLight"}>{FINAL_CTA.primary}</button>
          <button type="button" className={"wd-btnOutline"}>{FINAL_CTA.secondary}</button>
        </div>
      </div>
    </section>
  );
}

/* ─── 페이지 ────────────────────────────────────────────── */

export default function DietLanding() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <main className="wd-page">
        <HeroSection />
        <WorriesSection />
        <DifferenceSection />
        <ResultSection />
        <RoadmapSection />
        <TeamSection variant="converge" />
        <CareSection />
        <CasesSection variant="featured" />
        <ReviewsSection />
        <PlansSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </>
  );
}

/* ─── 스타일 ────────────────────────────────────────────── */

const STYLES = `
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
/* 감량 프로그램 랜딩 D안 — 전 섹션 공용 스타일.
   브레이크포인트: 767px 이하 = 모바일. */

.wd-page {
  --ink: #161616;
  --ink-2: #3c3c3c;
  --muted: #6b6b6b;
  --muted-2: #8a8a8a;
  --line: #e5e5e5;
  --sand: #a3805a;
  --sand-100: #faf7f2;
  --sand-200: #f2ece1;
  --sand-300: #e8dfd0;
  --page-max: 1160px;

  color: var(--ink);
  font-family: "Pretendard Variable", Pretendard, system-ui, -apple-system, sans-serif;
}

.wd-page a { color: #525252; text-decoration: none; }
.wd-page a:hover { color: #262626; }
.wd-page :focus-visible { outline: 2px solid #525252; outline-offset: 2px; }

.wd-section { padding: 100px 0 110px; }
.wd-inner {
  width: 100%;
  max-width: var(--page-max);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
}
.wd-kicker {
  font-size: 13px;
  font-weight: 700;
  font-style: italic;
  letter-spacing: 0.16em;
  color: #737373;
}
.wd-h2 {
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.03em;
  color: var(--ink);
}
.wd-lead {
  font-size: 15px;
  line-height: 1.75;
  max-width: 560px;
  text-wrap: pretty;
  color: var(--muted);
}
.wd-pre { white-space: pre-line; }

/* ── HERO ─────────────────────────────── */
.wd-hero { position: relative; width: 100%; overflow: hidden; border-bottom: 1px solid #d4d4d4; }
.wd-heroGrid {
  position: absolute;
  inset: 0;
  background-color: #a3a3a3;
  background-image:
    linear-gradient(to top right, transparent calc(50% - 0.5px), rgba(255,255,255,0.35) 50%, transparent calc(50% + 0.5px)),
    linear-gradient(to bottom right, transparent calc(50% - 0.5px), rgba(255,255,255,0.35) 50%, transparent calc(50% + 0.5px));
  background-position: center;
}
.wd-heroScrim { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,0.2)); }
.wd-heroBody {
  position: relative;
  margin: 0 auto;
  display: flex;
  min-height: 560px;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 96px 40px;
}
.wd-heroEyebrow { margin: 0; font-size: 12px; font-weight: 600; letter-spacing: 0.18em; color: rgba(255,255,255,0.8); }
.wd-heroTitle {
  margin: 24px 0 0;
  max-width: 680px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  word-break: keep-all;
  white-space: pre-line;
  color: #fff;
}
.wd-heroText {
  margin: 24px 0 0;
  max-width: 600px;
  font-size: 16px;
  line-height: 1.75;
  word-break: keep-all;
  white-space: pre-line;
  color: rgba(255,255,255,0.9);
}
.wd-heroActions { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 34px; }
.wd-heroButton { display: inline-flex; min-height: 58px; align-items: center; justify-content: center; border-radius: 999px; padding: 0 38px; font-size: 15px; font-weight: 700; text-decoration: none; transition: transform .2s, background .2s, border-color .2s; }
.wd-heroButton:hover { transform: translateY(-2px); }
.wd-heroButtonPrimary { border: 1px solid #fff; background: #fff; color: #171717; }
.wd-heroButtonSecondary { border: 1px solid rgba(255,255,255,.55); background: rgba(255,255,255,.06); color: #fff; }
.wd-heroButtonSecondary:hover { border-color: #fff; background: rgba(255,255,255,.14); }
.wd-heroNote { margin: 16px 0 0; font-size: 13px; color: rgba(255,255,255,.62); }

/* ── 고민의 벽 ────────────────────────── */
.wd-worries { position: relative; overflow: hidden; background: #0b1020; padding: 90px 0 0; }
.wd-worriesHead {
  position: relative; z-index: 3; margin: 0 auto; display: flex; max-width: 760px;
  flex-direction: column; gap: 16px; padding: 0 16px; text-align: center;
}
.wd-worriesEyebrow { font-size: 15px; font-weight: 800; letter-spacing: 0.08em; color: #a3a3a3; }
.wd-worriesTitle { font-size: 36px; font-weight: 700; line-height: 1.4; letter-spacing: -0.02em; white-space: pre-line; color: #fff; }
.wd-worriesSub { font-size: 15px; line-height: 1.85; text-wrap: pretty; color: rgba(255,255,255,0.45); }
.wd-marqueeWrap {
  position: relative; margin: 64px auto 0; display: flex; width: 100%; max-width: 1000px;
  flex-direction: column; gap: 16px; overflow: hidden; padding: 4px 0;
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}
.wd-marqueeRow { display: flex; width: max-content; gap: 16px; animation: marqueeLeft 40s linear infinite; }
.wd-worryChip {
  width: fit-content; white-space: nowrap; border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.04);
  padding: 20px 24px; font-size: 16px; color: rgba(255,255,255,0.45);
}
@keyframes marqueeLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .wd-marqueeRow { animation: none; } }

.wd-worriesStem { position: relative; z-index: 3; margin-top: 32px; display: flex; flex-direction: column; align-items: center; }
.wd-worriesStemLine { height: 70px; width: 1px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), rgba(255,255,255,0.6)); }
.wd-worriesStemDot { height: 11px; width: 11px; border-radius: 999px; background: #d4d4d4; box-shadow: 0 0 22px 7px rgba(212,212,212,0.5); }
.wd-domeWrap { position: relative; margin-top: -12px; overflow: hidden; padding-bottom: 56px; }
.wd-dome {
  position: absolute; left: 50%; top: 40px; height: 1400px; width: 1400px;
  transform: translateX(-50%); border-radius: 999px;
  background: linear-gradient(to bottom, #8a8a8a, #5a5a5a, #2a2a2a);
}
.wd-domeBody {
  position: relative; z-index: 2; margin: 0 auto; display: flex; max-width: 920px;
  flex-direction: column; align-items: center; gap: 12px; padding: 80px 16px 0; text-align: center;
}
.wd-domeTitle { padding-top: 24px; font-size: 30px; font-weight: 700; color: rgba(255,255,255,0.85); }
.wd-domeSub { font-size: 14px; line-height: 1.4; letter-spacing: -0.02em; color: #fff; }
.wd-domeCtaText { margin: 20px 0 0; font-size: 15px; line-height: 1.7; color: rgba(255,255,255,.72); }
.wd-domeCtaButton { display: inline-flex; min-height: 50px; align-items: center; justify-content: center; margin-top: 4px; border: 1px solid rgba(255,255,255,.55); border-radius: 999px; padding: 0 28px; background: rgba(255,255,255,.08); color: #fff; font-size: 14px; font-weight: 700; text-decoration: none; transition: transform .2s, background .2s, border-color .2s; }
.wd-domeCtaButton:hover { transform: translateY(-2px); border-color: #fff; background: rgba(255,255,255,.16); }

/* ── 차별점 ───────────────────────────── */
.wd-difference { background: #fafaf8; }
.wd-differenceInner { align-items: center; text-align: center; }
.wd-diffKicker { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; letter-spacing: 0.14em; color: var(--sand); }
.wd-diffSteps { margin-top: 36px; display: flex; align-items: center; justify-content: center; gap: 20px; }
.wd-diffCircle {
  display: flex; height: 170px; width: 170px; flex-direction: column; align-items: center;
  justify-content: center; gap: 8px; border-radius: 999px; border: 1px solid #e2d8c6;
  background: #fff; padding: 16px; text-align: center;
}
.wd-diffCircleResult { border: 0; background: var(--sand); }
.wd-diffOp { font-size: 26px; font-weight: 700; color: #c9b596; }
.wd-diffStepKicker { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; color: #b09472; }
.wd-diffStepKickerLight { color: rgba(255,255,255,0.65); }
.wd-diffStepTitle { font-size: 19px; font-weight: 700; letter-spacing: -0.02em; color: var(--ink); }
.wd-diffStepTitleLight { color: #fff; }
.wd-diffStepDesc { font-size: 12px; line-height: 1.6; white-space: pre-line; color: var(--muted-2); }
.wd-diffStepDescLight { color: rgba(255,255,255,0.75); }
.wd-diffTitle { margin: 40px 0 0; font-size: 34px; font-weight: 700; line-height: 1.45; letter-spacing: -0.03em; color: var(--ink); }
.wd-diffAccent { color: var(--sand); }
.wd-diffRule { margin-top: 32px; height: 1px; width: 40px; background: #d8cbb8; }
.wd-diffBodyWrap { margin-top: 32px; display: flex; max-width: 600px; flex-direction: column; gap: 20px; }
.wd-diffBody { margin: 0; font-size: 16px; line-height: 1.9; white-space: pre-line; text-wrap: pretty; color: #5a5a5a; }
.wd-diffBodyStrong { margin: 0; font-size: 16px; font-weight: 600; line-height: 1.9; white-space: pre-line; text-wrap: pretty; color: var(--ink); }

/* ── 실제 결과 ────────────────────────── */
.wd-result { background: #fafafa; }
.wd-resultBadge {
  width: fit-content; border-radius: 999px; background: #f0f0f0; padding: 8px 16px;
  font-size: 13px; font-weight: 700; letter-spacing: -0.01em; color: #525252;
}
.wd-resultTitle { margin: 24px 0 0; font-size: 58px; font-weight: 700; line-height: 1.15; letter-spacing: -0.03em; color: var(--ink); }
.wd-resultSub { margin: 20px 0 0; max-width: 600px; font-size: 17px; font-weight: 500; line-height: 1.6; letter-spacing: -0.02em; text-wrap: pretty; color: var(--muted); }
.wd-resultBody { margin: 12px 0 0; max-width: 600px; font-size: 16px; line-height: 1.8; white-space: pre-line; text-wrap: pretty; color: var(--muted); }
.wd-photoPair { position: relative; margin: 48px auto 0; display: grid; width: 100%; max-width: 600px; grid-template-columns: 1fr 1fr; gap: 48px; }
.wd-photoCol { display: flex; flex-direction: column; }
.wd-photoSlot {
  display: flex; aspect-ratio: 4 / 5; width: 100%; flex-direction: column; align-items: center;
  justify-content: center; gap: 12px; border-radius: 16px; border: 2px dashed #d4d4d4;
  background: #f0f0f0; color: #a3a3a3;
}
.wd-photoSlotLabel { font-size: 13px; font-weight: 700; letter-spacing: 0.06em; color: #525252; }
.wd-photoCaption { margin-top: 16px; font-size: 13px; letter-spacing: 0.02em; color: var(--muted-2); }
.wd-photoWeight { margin-top: 4px; font-size: 30px; font-weight: 700; letter-spacing: -0.02em; color: var(--ink); }
.wd-photoPin {
  position: absolute; left: 50%; top: 38%; display: flex; height: 60px; width: 60px;
  transform: translate(-50%, -50%); align-items: center; justify-content: center;
  border-radius: 999px; background: #404040; font-size: 13px; font-weight: 700; color: #fff;
  box-shadow: 0 6px 18px rgba(0,0,0,0.22);
}
.wd-rule { margin-top: 56px; height: 1px; width: 100%; background: var(--line); }
.wd-metricGrid { margin-top: 32px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; }
.wd-metricLabel { font-size: 14px; color: var(--muted-2); }
.wd-metricValue { font-size: 26px; font-weight: 700; letter-spacing: -0.02em; color: var(--ink); }
.wd-radarCard {
  margin-top: 56px; display: grid; grid-template-columns: 340px minmax(0, 1fr);
  align-items: center; gap: 48px; border-radius: 20px; border: 1px solid #eee;
  background: #fff; padding: 36px 40px;
}
.wd-radarTitle { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; color: var(--ink); }
.wd-radarBody { margin: 0; font-size: 15px; line-height: 1.8; text-wrap: pretty; color: var(--muted); }
.wd-radarLegend { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #737373; }
.wd-radarLegendStrong { font-weight: 700; color: #262626; }
.wd-radarSwatchBefore { display: inline-block; width: 22px; height: 0; border-top: 2px dashed #a3a3a3; }
.wd-radarSwatchAfter { display: inline-block; width: 22px; height: 0; border-top: 3px solid #262626; }

/* ── 로드맵 ───────────────────────────── */
.wd-roadmap { background: #f7f7f7; }
.wd-roadmapTrack { position: relative; margin-top: 48px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); }
.wd-roadmapLine { position: absolute; left: 10%; right: 10%; top: 24px; height: 1px; background: #d4d4d4; }
.wd-roadmapStep { position: relative; display: flex; min-width: 0; flex-direction: column; align-items: center; padding: 0 16px; text-align: center; }
.wd-roadmapDot {
  position: relative; z-index: 1; display: grid; height: 48px; width: 48px; place-items: center;
  border-radius: 999px; border: 2px solid #525252; background: #f7f7f7;
  font-size: 18px; font-weight: 700; color: #404040;
}
.wd-roadmapTitle { margin: 20px 0 0; font-size: 18px; font-weight: 700; color: #171717; }
.wd-roadmapLead { margin-top: 8px; max-width: 200px; font-size: 14px; font-weight: 600; color: #525252; }
.wd-roadmapDesc { margin-top: 6px; max-width: 210px; font-size: 14px; line-height: 1.7; word-break: keep-all; color: #737373; }

/* ── 담당 팀 ──────────────────────────── */
.wd-team { background: #f7f7f7; }
.wd-teamGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.wd-teamCard { display: flex; flex-direction: column; border-radius: 26px; background: #fff; padding: 28px; box-shadow: 0 4px 22px rgba(0,0,0,0.07); }
.wd-teamAvatar {
  display: grid; height: 56px; width: 56px; flex-shrink: 0; place-items: center;
  border-radius: 999px; background: #eee; font-size: 14px; font-weight: 700; color: #525252;
}
.wd-teamRole { font-size: 12px; font-weight: 700; color: #737373; }
.wd-teamName { margin-top: 4px; font-size: 24px; font-weight: 700; letter-spacing: -0.025em; color: var(--ink); }
.wd-teamDesc { font-size: 16px; line-height: 1.75; text-wrap: pretty; color: var(--muted); }
.wd-teamTag { border-radius: 999px; background: #eee; padding: 8px 12px; font-size: 12px; font-weight: 700; color: #525252; }

.wd-converge { display: flex; flex-direction: column; align-items: center; border-radius: 28px; background: #fff; padding: 56px 56px 52px; box-shadow: 0 3px 18px rgba(0,0,0,0.05); }
.wd-convergeRow { display: grid; width: 100%; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.wd-convergeCol { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 0 24px; text-align: center; }
.wd-convergeColDivided { border-left: 1px solid var(--line); }
.wd-convergeKicker { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; color: #c9c9c9; }
.wd-convergeName { font-size: 20px; font-weight: 700; letter-spacing: -0.03em; color: var(--ink); }
.wd-convergeRole { max-width: 210px; font-size: 13px; line-height: 1.7; word-break: keep-all; color: #9a9a9a; }
.wd-convergeNote { font-size: 11px; font-weight: 700; color: #b09472; }
.wd-convergeJoin { margin-top: 34px; display: flex; width: 100%; flex-direction: column; align-items: center; }
.wd-convergeStems { display: grid; width: 100%; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.wd-convergeStemCell { display: flex; justify-content: center; }
.wd-convergeStem { height: 30px; width: 1px; background: #9a9a9a; }
.wd-convergeBar { height: 1px; width: 66.66%; background: #9a9a9a; }
.wd-convergeDrop { height: 34px; width: 1px; background: #9a9a9a; }
.wd-convergeNode { height: 7px; width: 7px; border-radius: 999px; background: #8a8a8a; }
.wd-convergeTail { height: 14px; width: 1px; background: #9a9a9a; }
.wd-convergeHub {
  display: grid; height: 186px; width: 186px; flex: none; place-items: center;
  border-radius: 999px; background: var(--ink); text-align: center; box-shadow: 0 0 0 12px rgba(22,22,22,0.04);
}
.wd-convergeHubKicker { font-size: 9px; font-weight: 700; letter-spacing: 0.22em; color: rgba(255,255,255,0.4); }
.wd-convergeHubTitle { font-size: 18px; font-weight: 700; line-height: 1.45; letter-spacing: -0.02em; white-space: pre-line; color: #fff; }
.wd-convergeOutcome { font-size: 28px; font-weight: 700; letter-spacing: -0.035em; color: var(--ink); }
.wd-convergeOutcomeSub { font-size: 14px; letter-spacing: -0.01em; color: #9a9a9a; }

.wd-funnel { display: flex; flex-direction: column; align-items: center; border-radius: 26px; background: #fff; padding: 48px 40px 44px; box-shadow: 0 3px 18px rgba(0,0,0,0.05); }
.wd-funnelTop {
  display: grid; width: 100%; grid-template-columns: repeat(3, minmax(0, 1fr));
  background: var(--sand-100); padding: 32px 28px;
  clip-path: polygon(0 0, 100% 0, 88% 100%, 12% 100%);
}
.wd-funnelMid {
  display: flex; width: 74%; flex-direction: column; align-items: center; justify-content: center;
  gap: 4px; background: var(--sand-200); padding: 26px 24px;
  clip-path: polygon(0 0, 100% 0, 86% 100%, 14% 100%); text-align: center;
}
.wd-funnelLow {
  display: flex; width: 52%; flex-direction: column; align-items: center; justify-content: center;
  background: var(--sand-300); padding: 24px 22px;
  clip-path: polygon(0 0, 100% 0, 82% 100%, 18% 100%); text-align: center;
}

/* ── 관리 요소 ────────────────────────── */
.wd-care { background: #fff; }
.wd-methodGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.wd-methodCard { min-height: 180px; border-radius: 20px; border: 1px solid #d4d4d4; background: #fff; padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
.wd-methodTitle { margin: 0; font-size: 24px; font-weight: 700; color: #262626; }
.wd-methodDesc { margin: 12px 0 0; font-size: 16px; line-height: 1.75; word-break: keep-all; color: #737373; }
.wd-programChip {
  display: flex; flex-wrap: wrap; align-items: center; gap: 0 6px; border-radius: 999px;
  border: 1px solid #d4d4d4; background: #fff; padding: 12px 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

/* ── 12주 케이스 ──────────────────────── */
.wd-cases { background: #fff; }
.wd-caseFeatured { display: flex; flex-direction: column; gap: 26px; border-radius: 26px; background: var(--sand-100); padding: 44px 48px 40px; }
.wd-caseFeaturedKicker { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; color: #b09472; }
.wd-caseFeaturedTitle { font-size: 38px; font-weight: 700; line-height: 1.3; letter-spacing: -0.04em; white-space: pre-line; color: var(--ink); }
.wd-caseStats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); align-items: end; border-top: 1px solid #e6ded1; padding-top: 24px; }
.wd-caseStat { display: flex; flex-direction: column; gap: 5px; }
.wd-caseStatDivided { border-left: 1px solid #e6ded1; padding-left: 28px; }
.wd-caseStatLabel { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; color: #b8ab98; }
.wd-caseStatValue { font-size: 34px; font-weight: 700; letter-spacing: -0.045em; line-height: 1; color: var(--ink); }
.wd-caseStatValueSm { font-size: 20px; letter-spacing: -0.03em; }
.wd-caseStatNote { font-size: 12px; line-height: 1.6; white-space: pre-line; color: #8a8073; }

.wd-personaDesktopGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.wd-personaCarousel { display: none; flex-direction: column; gap: 18px; }
.wd-personaViewport { overflow: hidden; border-radius: 22px; }
.wd-personaTrack { display: flex; transition: transform 420ms cubic-bezier(.22,.61,.36,1); }
.wd-personaSlide { min-width: 100%; }
.wd-personaCard { display: flex; flex-direction: column; border-radius: 22px; border: 1px solid #ebebeb; background: #fff; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.04); }
.wd-personaControls { display: flex; align-items: center; justify-content: center; gap: 16px; }
.wd-personaArrow { display: grid; width: 42px; height: 42px; place-items: center; border: 1px solid #d4d4d4; border-radius: 999px; background: #fff; color: #404040; font-size: 18px; cursor: pointer; transition: background .2s, border-color .2s; }
.wd-personaArrow:hover { border-color: #a3a3a3; background: #f5f5f5; }
.wd-personaDots { display: flex; align-items: center; gap: 7px; }
.wd-personaDot { width: 8px; height: 8px; padding: 0; border: 0; border-radius: 999px; background: #d4d4d4; cursor: pointer; transition: width .2s, background .2s; }
.wd-personaDotActive { width: 26px; background: #525252; }
.wd-personaHead { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 18px 24px; border-bottom: 1px solid #f2f2f2; }
.wd-personaName { font-size: 14px; font-weight: 700; letter-spacing: -0.01em; color: #262626; }
.wd-personaPlan { flex: none; border-radius: 999px; border: 1px solid var(--line); padding: 5px 11px; font-size: 11px; font-weight: 700; color: var(--muted-2); }
.wd-personaLoss { font-size: 32px; font-weight: 700; letter-spacing: -0.045em; line-height: 1; color: var(--ink); }
.wd-personaRange { font-size: 13px; color: var(--muted-2); }
.wd-personaSub { display: inline-block; border-radius: 999px; background: #f4f4f4; padding: 6px 12px; font-size: 12px; font-weight: 700; color: #525252; }
.wd-personaQuote { margin: 0; border-top: 1px solid #f2f2f2; background: #fbfbfb; padding: 20px 24px; font-size: 14px; line-height: 1.75; word-break: keep-all; color: #4a4a4a; }

.wd-recordCard { overflow: hidden; border-radius: 22px; border: 1px solid var(--line); background: #fff; box-shadow: 0 4px 14px rgba(0,0,0,0.07); display: grid; grid-template-columns: 230px minmax(0, 1fr); }
.wd-recordAside { display: flex; flex-direction: column; justify-content: center; background: #f5f5f5; padding: 28px; }
.wd-recordProfile { font-size: 14px; font-weight: 700; color: #737373; }
.wd-recordLoss { margin-top: 8px; font-size: 48px; font-weight: 700; letter-spacing: -0.04em; color: #262626; }
.wd-recordMeta { margin-top: 4px; font-size: 14px; color: #737373; }
.wd-recordFat { margin-top: 16px; width: fit-content; border-radius: 999px; border: 1px solid #d4d4d4; background: #fff; padding: 8px 12px; font-size: 12px; font-weight: 700; color: #525252; }
.wd-recordRow { display: grid; grid-template-columns: 58px minmax(0, 1fr); gap: 12px; padding: 14px 0; border-bottom: 1px solid var(--line); }
.wd-recordRow:last-child { border-bottom: 0; }
.wd-recordRowLabel { font-size: 14px; font-weight: 500; color: #737373; }
.wd-recordRowValue { font-size: 16px; line-height: 1.75; word-break: keep-all; color: #404040; }
.wd-recordRowQuote { font-style: italic; color: #737373; }

/* ── 후기 ─────────────────────────────── */
.wd-reviews { background: #f7f7f7; }
.wd-reviewsHead { display: flex; align-items: flex-end; justify-content: space-between; gap: 48px; }
.wd-reviewsScore { font-size: 34px; font-weight: 800; letter-spacing: -0.035em; line-height: 1; color: #525252; }
.wd-reviewsGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: start; gap: 20px; }
.wd-reviewCard { display: flex; flex-direction: column; gap: 16px; border-radius: 24px; background: #fff; padding: 34px 32px; box-shadow: 0 3px 18px rgba(0,0,0,0.06); }
.wd-reviewTag { border-radius: 999px; background: #eee; padding: 6px 14px; font-size: 12px; font-weight: 700; color: #525252; }
.wd-reviewBody { font-size: 16px; line-height: 1.8; text-wrap: pretty; color: var(--ink-2); }
.wd-reviewAuthor { font-size: 14px; color: var(--muted-2); }
.wd-reviewHighlight { grid-column: span 2; display: flex; align-items: center; gap: 28px; border-radius: 24px; background: #404040; padding: 32px; }
.wd-reviewHighlightBody { font-size: 18px; line-height: 1.75; font-weight: 600; letter-spacing: -0.02em; text-wrap: pretty; color: #fff; }
.wd-reviewHighlightAuthor { flex: none; margin-left: auto; text-align: right; white-space: pre-line; font-size: 14px; color: #bdbdbd; }
.wd-disclaimer { font-size: 12px; color: var(--muted-2); }

/* ── 플랜 ─────────────────────────────── */
.wd-plans { background: #fafafa; }
.wd-planIntro { max-width: 820px; margin: 8px 0 0; border-left: 3px solid #737373; border-radius: 0 14px 14px 0; background: #f0f0f0; padding: 16px 20px; font-size: 18px; font-weight: 600; line-height: 1.8; letter-spacing: -0.02em; color: #404040; }
.wd-planGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; align-items: stretch; }
.wd-planCard { position: relative; display: flex; flex-direction: column; gap: 26px; border-radius: 22px; background: #fff; padding: 36px 34px 34px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
.wd-planCardFeatured { border: 2px solid #525252; box-shadow: 0 8px 28px rgba(0,0,0,0.1); }
.wd-planBadge {
  position: absolute; left: 50%; top: -15px; transform: translateX(-50%); white-space: nowrap;
  border-radius: 999px; background: #404040; padding: 8px 16px; font-size: 12px; font-weight: 700; color: #fff;
}
.wd-planName { font-size: 14px; font-weight: 600; font-style: italic; letter-spacing: -0.01em; color: #737373; }
.wd-planSubtitle { font-size: 30px; font-weight: 700; letter-spacing: -0.03em; color: var(--ink); }
.wd-planTarget { font-size: 14px; line-height: 1.7; color: #7a7a7a; }
.wd-planFeature { display: flex; align-items: center; gap: 14px; padding: 14px 0; font-size: 14px; border-bottom: 1px solid #f3f3f3; color: #4a4a4a; }
.wd-planFeature:last-child { border-bottom: 0; }
.wd-planFeatureOff { color: #bcbcbc; }
.wd-planMark { font-weight: 700; color: #525252; }
.wd-planMarkOff { color: #c9c9c9; }
.wd-planOption { font-size: 11px; font-weight: 700; color: var(--muted-2); }
.wd-planPriceLabel { font-size: 14px; color: #9a9a9a; }
.wd-planPrice { font-size: 30px; font-weight: 700; letter-spacing: -0.03em; color: var(--ink); }
.wd-planCta {
  display: flex; height: 52px; align-items: center; justify-content: center; border-radius: 999px;
  font-size: 16px; font-weight: 700; background: #fff; color: #525252; border: 1px solid #d4d4d4;
}
.wd-planCtaFeatured { background: #404040; color: #fff; border: 0; }
.wd-planCta:hover { color: #525252; }
.wd-planCtaFeatured:hover { color: #fff; }
.wd-refund { padding: 26px 30px; background: #f5f5f5; border-radius: 18px; font-size: 14px; line-height: 1.8; text-wrap: pretty; color: #4a4a4a; }
.wd-refundLead { font-weight: 700; color: #404040; }

/* ── FAQ ──────────────────────────────── */
.wd-faq { background: #fafafa; }
.wd-faqKicker { font-size: 15px; font-weight: 600; font-style: italic; letter-spacing: 0.14em; color: #737373; }
.wd-faqTitle { font-size: 46px; font-weight: 800; letter-spacing: -0.035em; line-height: 1.3; color: var(--ink); }
.wd-faqItem { overflow: hidden; border-radius: 20px; background: #fff; box-shadow: 0 2px 14px rgba(0,0,0,0.06); }
.wd-faqButton {
  display: flex; width: 100%; cursor: pointer; align-items: center; justify-content: space-between;
  gap: 24px; padding: 30px 32px; text-align: left; background: transparent; border: 0; font-family: inherit;
}
.wd-faqQuestion { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; color: var(--ink); }
.wd-faqSign { font-size: 22px; line-height: 1; color: #525252; }
.wd-faqAnswer { padding: 0 32px 26px; font-size: 15px; line-height: 1.8; text-wrap: pretty; color: var(--muted); }

/* ── 마무리 CTA ───────────────────────── */
.wd-finalCta { background: var(--ink); }
.wd-finalCtaInner { align-items: center; text-align: center; }
.wd-finalCtaTitle { margin: 0; font-size: 38px; font-weight: 700; line-height: 1.4; letter-spacing: -0.03em; color: #fff; }
.wd-finalCtaBody { margin: 24px 0 0; max-width: 560px; font-size: 16px; line-height: 1.9; white-space: pre-line; text-wrap: pretty; color: rgba(255,255,255,0.6); }
.wd-finalCtaRow { margin-top: 40px; display: flex; justify-content: center; gap: 12px; }
.wd-btnLight {
  border-radius: 999px; background: #fff; padding: 16px 32px; font-size: 15px; font-weight: 700;
  letter-spacing: -0.01em; color: var(--ink); border: 0; cursor: pointer; font-family: inherit;
}
.wd-btnLight:hover { background: var(--line); }
.wd-btnOutline {
  border-radius: 999px; border: 1px solid rgba(255,255,255,0.3); background: transparent;
  padding: 16px 32px; font-size: 15px; font-weight: 700; letter-spacing: -0.01em; color: #fff;
  cursor: pointer; font-family: inherit;
}
.wd-btnOutline:hover { background: rgba(255,255,255,0.1); }

/* ── 공용 유틸 ────────────────────────── */
.wd-col { display: flex; flex-direction: column; }
.wd-row { display: flex; }
.wd-rowCenter { display: flex; align-items: center; }
.wd-wrapRow { display: flex; flex-wrap: wrap; }
.wd-gap4 { gap: 4px; }
.wd-gap6 { gap: 6px; }
.wd-gap8 { gap: 8px; }
.wd-gap10 { gap: 10px; }
.wd-gap12 { gap: 12px; }
.wd-gap14 { gap: 14px; }
.wd-gap16 { gap: 16px; }
.wd-gap20 { gap: 20px; }
.wd-gap24 { gap: 24px; }
.wd-gap32 { gap: 32px; }
.wd-gap40 { gap: 40px; }
.wd-gap44 { gap: 44px; }
.wd-starRow { display: flex; gap: 3px; }

/* ── 모바일 (≤767px) ──────────────────── */
@media (max-width: 767px) {
  .wd-section { padding: 64px 0; }
  .wd-inner { padding: 0 16px; }
  .wd-h2 { font-size: 24px; }
  .wd-lead { font-size: 15px; }

  .wd-heroBody { min-height: 420px; padding: 64px 16px; }
  .wd-heroEyebrow { font-size: 11px; }
  .wd-heroTitle { font-size: 30px; }
  .wd-heroText { font-size: 14px; }
  .wd-heroActions { width: 100%; flex-direction: column; gap: 10px; margin-top: 28px; }
  .wd-heroButton { width: 100%; min-height: 52px; padding: 0 18px; font-size: 14px; }
  .wd-heroNote { font-size: 11px; line-height: 1.6; }

  .wd-worriesTitle { font-size: 24px; }
  .wd-worriesSub { font-size: 14px; }
  .wd-marqueeWrap {
    margin-top: 40px; max-height: 220px; flex-direction: row; flex-wrap: wrap;
    justify-content: center; gap: 10px; padding: 0 16px;
    -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent);
    mask-image: linear-gradient(to bottom, black 60%, transparent);
  }
  .wd-marqueeRow { display: contents; }
  .wd-worryChip { border-radius: 999px; padding: 10px 16px; font-size: 13px; }
  .wd-domeBody { padding: 64px 16px 0; }
  .wd-domeTitle { font-size: 22px; }
  .wd-domeCtaText { margin-top: 16px; font-size: 13px; }
  .wd-domeCtaButton { width: 100%; max-width: 320px; }

  .wd-difference .wd-diffSteps { flex-direction: column; align-items: stretch; gap: 12px; width: 100%; }
  .wd-difference .wd-diffSteps .wd-rowCenter { flex-direction: column; width: 100%; gap: 12px; }
  .wd-difference .wd-diffCircle {
    width: 100%; height: auto; min-height: 0; border-radius: 16px; padding: 26px 20px; gap: 6px;
  }
  .wd-difference .wd-diffStepTitle { font-size: 22px; }
  .wd-difference .wd-diffStepDesc { font-size: 13px; white-space: normal; }
  .wd-diffTitle { font-size: 22px; }

  .wd-resultTitle { font-size: 36px; }
  .wd-photoPair { gap: 24px; }
  .wd-photoWeight { font-size: 24px; }
  .wd-photoPin { display: none; }
  .wd-metricGrid { grid-template-columns: 1fr; }
  .wd-metricValue { font-size: 24px; }
  .wd-radarCard { grid-template-columns: 1fr; gap: 24px; padding: 24px; }

  .wd-roadmapTrack { grid-template-columns: 1fr; gap: 28px; }
  .wd-roadmapLine { display: none; }
  .wd-roadmapStep { flex-direction: row; align-items: flex-start; gap: 16px; padding: 0; text-align: left; }
  .wd-roadmapDot { height: 40px; width: 40px; flex: none; font-size: 14px; }
  .wd-roadmapTitle { margin: 0; font-size: 16px; }
  .wd-roadmapLead { max-width: none; }
  .wd-roadmapDesc { max-width: none; font-size: 13px; }

  .wd-teamGrid { grid-template-columns: 1fr; }
  .wd-teamName { font-size: 18px; }
  .wd-teamDesc { font-size: 14px; }
  .wd-converge, .wd-funnel { padding: 30px 20px; }
  .wd-convergeRow, .wd-funnelTop { grid-template-columns: 1fr; gap: 20px; }
  .wd-convergeColDivided { border-left: 0; border-top: 1px solid var(--line); padding-top: 20px; }
  .wd-convergeStems { display: none; }
  .wd-convergeHub { height: 150px; width: 150px; }
  .wd-convergeOutcome { font-size: 21px; }
  .wd-funnelMid, .wd-funnelLow { width: 100%; clip-path: none; border-radius: 14px; }

  .wd-methodGrid { grid-template-columns: 1fr; }
  .wd-methodTitle { font-size: 18px; }
  .wd-methodDesc { font-size: 14px; }

  .wd-caseFeatured { padding: 26px 22px; }
  .wd-caseFeaturedTitle { font-size: 24px; }
  .wd-personaDesktopGrid { display: none; }
  .wd-personaCarousel { display: flex; }
  .wd-caseStats { grid-template-columns: 1fr 1fr; gap: 20px; }
  .wd-caseStatDivided { border-left: 0; padding-left: 0; }
  .wd-caseStatValue { font-size: 26px; }
  .wd-recordCard { grid-template-columns: 1fr; }

  .wd-reviewsHead { flex-direction: column; align-items: flex-start; gap: 24px; }
  .wd-reviewsGrid { grid-template-columns: 1fr; }
  .wd-reviewCard { padding: 24px 16px; }
  .wd-reviewBody { font-size: 14px; }
  .wd-reviewHighlight { grid-column: span 1; flex-direction: column; align-items: flex-start; gap: 16px; padding: 24px 16px; }
  .wd-reviewHighlightAuthor { margin-left: 0; text-align: left; font-size: 12px; }

  .wd-planGrid { display: flex; gap: 14px; overflow-x: auto; padding-bottom: 10px; scroll-snap-type: x mandatory; scrollbar-width: none; }
  .wd-planGrid::-webkit-scrollbar { display: none; }
  .wd-planIntro { padding: 14px 16px; font-size: 15px; line-height: 1.75; }
  .wd-planCard { width: 82vw; max-width: 320px; flex: 0 0 auto; scroll-snap-align: start; padding: 36px 24px 28px; }
  .wd-planSubtitle { font-size: 20px; }
  .wd-planFeature { font-size: 12px; padding: 12px 0; }
  .wd-planPrice { font-size: 20px; }
  .wd-refund { padding: 26px 20px; font-size: 12px; }

  .wd-faqTitle { font-size: 26px; }
  .wd-faqButton { gap: 16px; padding: 24px 20px; }
  .wd-faqQuestion { font-size: 16px; }
  .wd-faqAnswer { padding: 0 20px 24px; font-size: 14px; }

  .wd-finalCtaTitle { font-size: 24px; }
  .wd-finalCtaBody { font-size: 15px; }
  .wd-finalCtaRow { width: 100%; flex-direction: column; }
}

`;
