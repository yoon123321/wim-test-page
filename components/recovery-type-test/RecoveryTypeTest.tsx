"use client";

/**
 * 기기관리(리커버리) 유형 테스트 — 인트로 → 10문항 → 로딩 → 결과
 * 데이터·채점 규칙: content/recovery-type-test.ts (원본 config.js / scoring.js 로직 그대로)
 *
 * 세션 저장(/api/submit)·이벤트 로그(/api/track)는 기존 메타 광고용 사이트 백엔드로 POST 한다.
 * NEXT_PUBLIC_RECOVERY_TEST_API 가 비어 있으면 전송하지 않는다 (CORS 열리기 전까지).
 */

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { TEST_CONFIG, type Axis, type Question } from "@/content/recovery-type-test";

const FONT_CSS = `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap");`;
const EN = "font-['EB_Garamond',serif] text-[13px] tracking-[0.18em] text-primary-main";
const BTN = "cursor-pointer rounded-full border-0 bg-primary-main px-9 py-[17px] text-center text-[16px] font-bold text-white no-underline";
const BTN_SUB = "cursor-pointer rounded-full border border-primary-main bg-white px-9 py-4 text-center text-[16px] font-bold text-primary-main no-underline";

const API = process.env.NEXT_PUBLIC_RECOVERY_TEST_API ?? "";
function post(path: string, body: object) {
  if (!API) return;
  fetch(API + path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), keepalive: true }).catch(() => {});
}
const utm = (k: string) => new URLSearchParams(location.search).get(k) ?? "";
function visitorId() {
  try {
    const v = localStorage.getItem("wim_care_vid") ?? crypto.randomUUID();
    localStorage.setItem("wim_care_vid", v);
    return v;
  } catch { return "anon"; }
}

type Answer = { questionId: string; optionId: string; axis: Axis; value: number };
type Screen = "intro" | "quiz" | "loading" | "result";

/* ── 채점 (원본 scoring.js calculateResult 그대로) ── */
function calculateResult(answers: Answer[]) {
  const { axisMax, tieBreakOrder, secondaryThresholds: th } = TEST_CONFIG;
  const eligibility = TEST_CONFIG.eligibility as Partial<Record<Axis, string>>;
  const axes = Object.keys(axisMax) as Axis[];
  const raw = Object.fromEntries(axes.map((a) => [a, 0])) as Record<Axis, number>;
  const byQ: Record<string, number> = {};
  answers.forEach((a) => { raw[a.axis] += a.value; byQ[a.questionId] = a.value; });
  const scores = Object.fromEntries(axes.map((a) => [a, Math.round((raw[a] / axisMax[a]) * 1000) / 10])) as Record<Axis, number>;
  const eligible = Object.fromEntries(axes.map((a) => [a, !eligibility[a] || (byQ[eligibility[a]!] ?? 0) >= 1])) as Record<Axis, boolean>;

  const pick = (cands: Axis[]): Axis | null => {
    if (!cands.length) return null;
    const max = Math.max(...cands.map((a) => scores[a]));
    const tied = cands.filter((a) => scores[a] === max);
    if (tied.length === 1) return tied[0];
    const rlc = tied.filter((a) => a !== "D");
    const pool = rlc.length ? rlc : tied;
    return (tieBreakOrder as Axis[]).find((a) => pool.includes(a)) ?? pool[0];
  };
  const candidates = axes.filter((a) => eligible[a]);
  const primaryType = pick(candidates) ?? "R";
  const secondary = pick(candidates.filter((a) => a !== primaryType));
  const secondaryScore = secondary ? scores[secondary] : 0;
  const stored = !!secondary && secondaryScore >= th.storeOnly;
  return {
    primaryType, scores, eligible,
    secondaryType: stored ? secondary : null,
    secondaryScore: stored ? secondaryScore : 0,
    secondaryShown: !!secondary && secondaryScore >= th.show,
  };
}
const tier = (s: number) => (s >= 80 ? "매우 높음" : s >= 60 ? "높은 편" : s >= 40 ? "보통" : "낮은 편");

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className={EN}>{children}</span>;
}
function Check({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5 break-keep text-[14.5px] leading-[1.7] text-gray-03">
      <span className="flex-none font-bold text-primary-main">✓</span>{children}
    </div>
  );
}

export default function RecoveryTypeTest() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [picked, setPicked] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const session = useRef({ id: "", startedAt: 0, shownAt: 0 });

  const M = TEST_CONFIG.meta;
  const questions = TEST_CONFIG.questions;
  const q: Question = questions[qIndex];
  const result = useMemo(() => calculateResult(answers), [answers]);
  const T = TEST_CONFIG.types[result.primaryType];

  const track = (event_name: string, extra: object = {}) =>
    post("/api/track", {
      session_id: session.current.id,
      events: [{ session_id: session.current.id, visitor_id: visitorId(), test_version: TEST_CONFIG.version, event_name, result_type: "", question_id: "", timestamp: new Date().toISOString(), utm_source: utm("utm_source"), utm_campaign: utm("utm_campaign"), ...extra }],
      answers: [],
    });

  const start = () => {
    session.current = { id: crypto.randomUUID(), startedAt: Date.now(), shownAt: Date.now() };
    setAnswers([]); setQIndex(0); setCopied(false);
    track("test_started");
    setScreen("quiz");
  };

  const select = (opt: Question["options"][number]) => {
    if (picked) return;
    setPicked(opt.id);
    const answeredAt = new Date().toISOString();
    const next: Answer[] = [...answers.filter((a) => a.questionId !== q.id), { questionId: q.id, optionId: opt.id, axis: q.axis as Axis, value: opt.value }];
    setAnswers(next);
    post("/api/track", {
      session_id: session.current.id,
      events: [],
      answers: [{ session_id: session.current.id, visitor_id: visitorId(), test_version: TEST_CONFIG.version, question_id: q.id, selected_option_id: opt.id, selected_type: q.axis, score_value: opt.value, answered_at: answeredAt, response_ms: Date.now() - session.current.shownAt }],
    });
    setTimeout(() => {
      setPicked(null);
      session.current.shownAt = Date.now();
      if (qIndex < questions.length - 1) setQIndex(qIndex + 1);
      else finish(next);
    }, 320);
  };

  const finish = (final: Answer[]) => {
    setScreen("loading");
    setLoadingStep(0);
    TEST_CONFIG.loadingMessages.forEach((_, i) => setTimeout(() => setLoadingStep(i), 600 * i));
    setTimeout(() => {
      const r = calculateResult(final);
      post("/api/submit", {
        session_id: session.current.id, visitor_id: visitorId(), test_version: TEST_CONFIG.version,
        started_at: new Date(session.current.startedAt).toISOString(), completed_at: new Date().toISOString(),
        completion_status: "completed", duration_seconds: Math.round((Date.now() - session.current.startedAt) / 1000),
        result_type: r.primaryType, score_r: r.scores.R, score_l: r.scores.L, score_c: r.scores.C, score_d: r.scores.D,
        referrer: document.referrer, utm_source: utm("utm_source"), utm_medium: utm("utm_medium"), utm_campaign: utm("utm_campaign"), utm_content: utm("utm_content"),
        landing_path: location.pathname, device_type: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop", browser: navigator.userAgent,
        last_question_reached: "result", secondary_need: r.secondaryType ?? "", secondary_score: r.secondaryScore, eligible_d: r.eligible.D ? 1 : 0,
      });
      track("test_completed", { result_type: r.primaryType });
      setScreen("result");
      window.scrollTo({ top: 0 });
    }, 600 * TEST_CONFIG.loadingMessages.length + 200);
  };

  const share = () => {
    const text = `나의 리커버리 유형은 "${T.resultName}"이에요.\n${T.shareCaption}\n${location.href}`;
    if (navigator.share) navigator.share({ text, url: location.href }).catch(() => {});
    else navigator.clipboard.writeText(text).then(() => setCopied(true));
  };

  /* 결과용 파생 데이터 */
  const bars = (Object.keys(TEST_CONFIG.axisLabels) as Axis[])
    .map((a) => ({ a, label: TEST_CONFIG.axisLabels[a], score: result.scores[a] }))
    .sort((x, y) => y.score - x.score);
  const insights = (() => {
    const picked = questions.filter((qq) => qq.axis === result.primaryType).flatMap((qq) => {
      const a = answers.find((x) => x.questionId === qq.id);
      const o = qq.options.find((x) => x.id === a?.optionId);
      return o ? [o] : [];
    }).sort((x, y) => y.value - x.value);
    const top = picked.filter((p) => p.value >= 1).slice(0, 3);
    return top.length ? top : picked.slice(0, 1);
  })();

  return (
    <div className="min-h-screen bg-gray-00 font-['Pretendard_Variable',Pretendard,sans-serif] text-black antialiased">
      <style dangerouslySetInnerHTML={{ __html: FONT_CSS }} />
      <div className="mx-auto w-full max-w-[640px] px-5 pb-24 pt-28 tb:pt-36">

        {screen === "intro" && (
          <section className="flex flex-col items-center gap-6 text-center">
            <Kicker>{M.eyebrowText}</Kicker>
            <h1 className="m-0 break-keep text-[32px] leading-[1.25] tracking-[-0.03em] tb:text-[44px]">
              나는 왜<br /><em className="not-italic text-primary-main">쉬어도 그대로</em>일까?
            </h1>
            <p className="m-0 max-w-[460px] break-keep text-[16px] leading-[1.8] text-gray-03">{M.introLead}<br />{M.introSub}</p>
            <dl className="my-2 grid w-full grid-cols-3 gap-3">
              {[[M.duration.replace("약 ", "").replace(" 소요", ""), "소요 시간"], [`${questions.length}문항`, "선택형"], ["4유형", "결과"]].map(([n, l]) => (
                <div key={l} className="rounded-[18px] border border-gray-01 bg-white px-3 py-4">
                  <dt className="text-[20px] font-bold text-primary-main">{n}</dt>
                  <dd className="m-0 mt-1 text-[12.5px] text-gray-02">{l}</dd>
                </div>
              ))}
            </dl>
            <button type="button" onClick={start} className={`${BTN} w-full tb:w-auto`}>{M.startCta}</button>
            <p className="m-0 text-[12.5px] text-gray-02">{M.disclaimer}</p>
          </section>
        )}

        {screen === "quiz" && (
          <section className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <div className={`${EN} text-[15px]`}>Q{qIndex + 1} <small className="text-gray-02">/ {questions.length}</small></div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-gray-01">
                <div className="h-full bg-primary-main transition-[width] duration-300" style={{ width: `${((qIndex + 1) / questions.length) * 100}%` }} />
              </div>
            </div>
            <p className="m-0 break-keep text-[22px] font-bold leading-[1.4] tb:text-[26px]">{q.title}</p>
            <div className="flex flex-col gap-2.5">
              {q.options.map((opt, i) => {
                const on = picked === opt.id || (!picked && answers.some((a) => a.optionId === opt.id));
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => select(opt)}
                    className={`flex cursor-pointer items-center gap-3.5 break-keep rounded-[16px] border px-5 py-4 text-left text-[15px] leading-[1.55] transition ${
                      on ? "border-primary-main bg-primary-sub-03 font-bold" : "border-gray-01 bg-white hover:border-primary-sub-02"
                    }`}
                  >
                    <span className={`grid h-7 w-7 flex-none place-items-center rounded-full text-[12.5px] font-bold ${on ? "bg-primary-main text-white" : "bg-gray-00 text-gray-02"}`}>{"ABCD"[i]}</span>
                    {opt.text}
                  </button>
                );
              })}
            </div>
            {qIndex > 0 && (
              <button type="button" onClick={() => { setPicked(null); setQIndex(qIndex - 1); }} className="cursor-pointer self-start border-0 bg-transparent p-0 text-[14px] text-gray-02 underline">
                이전 문항으로
              </button>
            )}
          </section>
        )}

        {screen === "loading" && (
          <section className="flex flex-col items-center gap-5 py-24 text-center">
            <div className="h-11 w-11 animate-spin rounded-full border-[3px] border-gray-01 border-t-primary-main" />
            <p className="m-0 text-[17px] font-bold">{TEST_CONFIG.loadingMessages[loadingStep]}…</p>
          </section>
        )}

        {screen === "result" && (
          <section className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-3 text-center">
              <Kicker>Test Result</Kicker>
              <h1 className="m-0 break-keep text-[32px] leading-[1.25] tracking-[-0.03em] tb:text-[40px]">{T.resultName}</h1>
              <p className="m-0 break-keep text-[16px] text-gray-03">{T.head}</p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="m-0 text-[20px]">지금 내 몸의 신호</h2>
              <div className="flex flex-col gap-3.5 rounded-[20px] border border-gray-01 bg-white px-5 py-5">
                {bars.map((b) => (
                  <div key={b.a} className="grid grid-cols-[92px_1fr_64px] items-center gap-3 text-[13.5px]">
                    <span className={b.a === result.primaryType ? "font-bold text-primary-main" : "text-gray-03"}>{b.label}</span>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-00">
                      <div className={`h-full rounded-full ${b.a === result.primaryType ? "bg-primary-main" : "bg-primary-sub-02"}`} style={{ width: `${Math.max(4, b.score)}%` }} />
                    </div>
                    <span className="text-right text-gray-02">{tier(b.score)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="m-0 text-[20px]">왜 이런 결과가 나왔을까요</h2>
              <div className="flex flex-col gap-2.5 rounded-[20px] border border-gray-01 bg-white px-5 py-5">
                {insights.map((p) => <Check key={p.id}>{p.insight}</Check>)}
              </div>
            </div>

            {result.secondaryShown && result.secondaryType && (
              <div className="flex flex-col gap-4">
                <h2 className="m-0 text-[20px]">함께 높은 니즈</h2>
                <p className="m-0 break-keep rounded-[20px] bg-primary-sub-03 px-5 py-5 text-[15px] leading-[1.8] text-gray-03">
                  <b className="text-black">{TEST_CONFIG.axisLabels[result.secondaryType]}</b> 니즈도 높은 편이에요. {TEST_CONFIG.types[result.secondaryType].oneLiner}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-4">
              <h2 className="m-0 text-[20px]">이런 유형이에요</h2>
              <p className="m-0 break-keep text-[16px] leading-[1.9] text-gray-03">{T.description}</p>
              <div className="flex flex-col gap-2">
                <span className="text-[12.5px] font-bold text-gray-02">내 몸이 원하는 3가지</span>
                <div className="flex flex-wrap gap-2">
                  {T.needs.map((n) => <span key={n} className="rounded-full bg-primary-sub-03 px-3 py-1.5 text-[13px] font-bold text-primary-main">{n}</span>)}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="m-0 text-[20px]">나에게 맞는 케어</h2>
              <div className="rounded-[24px] bg-primary-main px-6 py-7 text-white">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="m-0 text-[20px] font-bold">{T.package.name}</h3>
                  <span className="text-[13px] text-white/60">{T.package.duration}</span>
                </div>
                <div className="mt-5 flex flex-col gap-4 border-t border-white/20 pt-5">
                  {T.package.devices.map((d) => (
                    <div key={d.name} className="flex flex-col gap-1">
                      <b className="text-[15.5px]">{d.name}</b>
                      <span className="break-keep text-[14px] text-white/85">{d.feel}</span>
                      <span className="break-keep text-[13px] text-white/60">{d.for}</span>
                      <details className="mt-1 text-[13.5px] leading-[1.7] text-white/75">
                        <summary className="cursor-pointer text-white/60">자세히 보기</summary>
                        <p className="m-0 mt-1.5 break-keep">{d.desc}</p>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="m-0 text-[20px]">이런 날 특히 추천해요</h2>
              <div className="flex flex-col gap-2.5 rounded-[20px] border border-gray-01 bg-white px-5 py-5">
                {T.package.situations.map((s) => <Check key={s}>{s}</Check>)}
              </div>
            </div>

            <p className="m-0 break-keep text-center text-[19px] font-bold leading-[1.6] text-primary-main">{T.oneLiner}</p>

            <div className="flex flex-col gap-3">
              <a href={TEST_CONFIG.cta.primaryUrl} target="_blank" rel="noreferrer" onClick={() => track("primary_cta_clicked")} className={BTN}>{TEST_CONFIG.cta.primary}</a>
              <Link href="/contact" onClick={() => track("secondary_cta_clicked")} className={BTN_SUB}>{TEST_CONFIG.cta.secondary}</Link>
              <div className="mt-2 flex flex-wrap justify-center gap-4 text-[14px]">
                <button type="button" onClick={share} className="cursor-pointer border-0 bg-transparent p-0 text-gray-03 underline">
                  {copied ? "링크를 복사했어요" : "내 결과 공유하기"}
                </button>
                <button type="button" onClick={() => { track("restart_clicked"); start(); }} className="cursor-pointer border-0 bg-transparent p-0 text-gray-02 underline">{TEST_CONFIG.cta.restart}</button>
              </div>
              <p className="m-0 text-center text-[12.5px] text-gray-02">{M.disclaimer}</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
