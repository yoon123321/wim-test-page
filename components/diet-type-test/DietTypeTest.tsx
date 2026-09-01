"use client";

/**
 * 다이어트 유형 테스트 — 인트로 → 13문항 → 기본정보 → 결과
 * 데이터·채점: data/diet-type-test.ts (원본 index.html 로직 그대로)
 *
 * 결과 저장/클릭 트래킹은 기존 메타 광고용 사이트 백엔드로 POST 한다.
 * NEXT_PUBLIC_DIET_TEST_API 가 비어 있으면 전송하지 않는다 (CORS 열리기 전까지).
 */

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  QUESTIONS, TYPES, RECS, CARE_AXIS, EATING_PATTERN, WIM_STEPS, ZERO_SCORES,
  type Scores, type ScoreKey, type Effect, type DietTypeCode, type RecKey,
} from "@/data/diet-type-test";

const FONT_CSS = `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap");`;
const EN = "font-['EB_Garamond',serif] text-[13px] tracking-[0.18em] text-primary-main";
const BTN = "cursor-pointer rounded-full border-0 bg-primary-main px-9 py-[17px] text-center text-[16px] font-bold text-white disabled:opacity-40";

const API = process.env.NEXT_PUBLIC_DIET_TEST_API ?? "";
/* 유입경로: ?utm_source=meta 같은 광고 파라미터 → 없으면 referrer 도메인 → 없으면 homepage */
function getSource() {
  const utm = new URLSearchParams(location.search).get("utm_source");
  if (utm) return utm;
  try { if (document.referrer) return new URL(document.referrer).hostname.replace("www.", ""); } catch {}
  return "homepage";
}
function post(path: string, body: object) {
  if (!API) return;
  fetch(API + path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, source: getSource() }) }).catch(() => {});
}

type Screen = "intro" | "quiz" | "form" | "loading" | "result";

/* ── 채점 (원본 computeResult 그대로) ── */
function buildResult(s: Scores) {
  const code = ((s.M >= s.S ? "M" : "S") + (s.A >= s.R ? "A" : "R") + (s.C >= s.F ? "C" : "F") + (s.E >= s.T ? "E" : "T")) as DietTypeCode;
  const type = TYPES[code];

  const emotion = s.E >= 1.5 ? { label: "감정형", text: "스트레스와 감정이 식욕을 크게 올리는 편이에요." }
    : s.E <= 0.5 ? { label: "안정형", text: "감정과 식사가 비교적 분리되어 있어요." }
    : { label: "중간형", text: "감정이 식욕에 어느 정도 영향을 주는 편이에요." };
  const brake = s.IMPULSE >= 1 ? { label: "약함", text: "먹기 시작하면 멈추는 브레이크가 약한 편이에요. 한 번 어긋나면 되돌리기 어려워요." }
    : s.CONTROL >= 1 ? { label: "튼튼함", text: "먹고 싶은 순간에도 한 번 멈출 수 있는 편이에요." }
    : { label: "중간", text: "유혹 앞에서 흔들리는 날도, 스스로 잡아내는 날도 있어요." };
  const style = s.SUPPORT >= 1 ? { label: "동반형", text: "누가 함께 봐줄 때 더 오래 가는 편이에요." }
    : s.ALONE >= 1 ? { label: "독립형", text: "혼자 내 페이스대로 가는 관리가 편한 편이에요." }
    : { label: "중간형", text: "상황에 따라 혼자서도, 함께여도 잘 가요." };
  const profile = [["감정 트리거", emotion], ["조절 브레이크", brake], ["관리 스타일", style]] as const;

  const exp = s.NEW >= s.SEASONED ? "초보파" : "베테랑파";
  const eatKey = (Object.keys(EATING_PATTERN) as (keyof typeof EATING_PATTERN)[]).reduce((best, k) => (s[k] > s[best] ? k : best), "SNACK");
  const subs = [exp, EATING_PATTERN[eatKey].label];

  const careMode = (["ONSITE", "REMOTE", "DEVICE"] as const).reduce((best, k) => (s[k] > s[best] ? k : best), "ONSITE");
  const ranked = CARE_AXIS.map(([l, r], i) => ({ letter: code[i], margin: Math.abs(s[l as ScoreKey] - s[r as ScoreKey]) }))
    .sort((a, b) => b.margin - a.margin).slice(0, 2).map((x) => x.letter);
  const care = [...ranked, careMode].map((k) => RECS[k as RecKey]);

  const tone = s.FRESH >= s.DRAINED ? "컨디션이 좋은 편이니, 지금 페이스 그대로 시작해도 좋아요." : "컨디션 회복이 먼저일 수 있으니, 무리하지 않는 선에서 시작해요.";
  const program = careMode === "ONSITE"
    ? { title: "웰니스 시그니처가 잘 맞아요", desc: "전담 매니저와 매주 만나 생활 습관·운동까지 밀착 관리하는 대면 프로그램을 추천드려요. " + tone }
    : careMode === "DEVICE"
      ? { title: "기기 중심 관리가 잘 맞아요", desc: "코칭 부담 없이, 회복 기기로 컨디션과 몸 상태부터 관리하는 방식을 추천드려요. " + tone }
      : { title: "웰니스 라이트가 잘 맞아요", desc: "오가는 부담 없이, 임상 영양사가 앱·채팅으로 식사와 생활 습관을 피드백하는 비대면 프로그램을 추천드려요. " + tone };

  return { code, type, profile, subs, care, program };
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className={EN}>{children}</span>;
}

export default function DietTypeTest() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<(Effect[] | undefined)[]>([]);
  const [picked, setPicked] = useState<number | null>(null);
  const [gender, setGender] = useState<"여성" | "남성" | null>(null);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [formErr, setFormErr] = useState(false);
  const [copied, setCopied] = useState(false);

  const scores = useMemo(() => {
    const s: Scores = { ...ZERO_SCORES };
    answers.forEach((fx) => fx?.forEach((e) => { s[e.a as ScoreKey] += e.w; }));
    return s;
  }, [answers]);
  const result = useMemo(() => buildResult(scores), [scores]);

  const q = QUESTIONS[qIndex];

  const selectAnswer = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    setAnswers((prev) => { const next = [...prev]; next[qIndex] = q.options[i].fx; return next; });
    setTimeout(() => {
      setPicked(null);
      if (qIndex < QUESTIONS.length - 1) setQIndex(qIndex + 1);
      else setScreen("form");
    }, 320);
  };

  const submitForm = () => {
    const h = parseFloat(height), w = parseFloat(weight);
    if (!gender || !(h > 0) || !(w > 0)) { setFormErr(true); return; }
    setFormErr(false);
    setScreen("loading");
    setTimeout(() => {
      const bmi = +(w / ((h / 100) * (h / 100))).toFixed(1);
      post("/api/submit", { gender, height: h, weight: w, bmi, code: result.code, name: result.type.name, scores });
      setScreen("result");
      window.scrollTo({ top: 0 });
    }, 1200);
  };

  const restart = () => {
    setAnswers([]); setQIndex(0); setPicked(null); setGender(null); setHeight(""); setWeight(""); setFormErr(false); setCopied(false);
    setScreen("intro");
  };

  const share = () => {
    const text = `나의 다이어트 유형은 "${result.type.name}"이에요. 당신의 유형도 확인해 보세요.\n${location.href}`;
    if (navigator.share) navigator.share({ text, url: location.href }).catch(() => {});
    else navigator.clipboard.writeText(text).then(() => setCopied(true));
  };

  const trackCta = () => post("/api/track-click", { code: result.code, name: result.type.name });

  return (
    <div className="min-h-screen bg-gray-00 font-['Pretendard_Variable',Pretendard,sans-serif] text-black antialiased">
      <style dangerouslySetInnerHTML={{ __html: FONT_CSS }} />
      <div className="mx-auto w-full max-w-[640px] px-5 pb-24 pt-28 tb:pt-36">

        {screen === "intro" && (
          <section className="flex flex-col items-center gap-6 text-center">
            <Kicker>다이어트 유형 테스트</Kicker>
            <h1 className="m-0 break-keep text-[32px] leading-[1.25] tracking-[-0.03em] tb:text-[44px]">
              나는 <em className="not-italic text-primary-main">어떤 다이어터</em>일까?
            </h1>
            <p className="m-0 max-w-[460px] break-keep text-[16px] leading-[1.8] text-gray-03">
              자꾸 실패하는 데는 이유가 있어요. 내 다이어트 유형을 확인하고, 나에게 맞는 관리 전략을 알아보세요.
            </p>
            <dl className="my-2 grid w-full grid-cols-3 gap-3">
              {[["3분", "소요 시간"], ["13문항", "+ 기본 정보"], ["16유형", "결과"]].map(([n, l]) => (
                <div key={l} className="rounded-[18px] border border-gray-01 bg-white px-3 py-4">
                  <dt className="text-[20px] font-bold text-primary-main">{n}</dt>
                  <dd className="m-0 mt-1 text-[12.5px] text-gray-02">{l}</dd>
                </div>
              ))}
            </dl>
            <button type="button" onClick={() => setScreen("quiz")} className={`${BTN} w-full tb:w-auto`}>내 유형 확인하기</button>
            <p className="m-0 break-keep text-[12.5px] leading-[1.7] text-gray-02">해당 검사는 간단한 무료 테스트이며, 정식 검사는 유료 상담 예약 시 받아보실 수 있어요.</p>
          </section>
        )}

        {screen === "quiz" && (
          <section className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <div className={`${EN} text-[15px]`}>{String(qIndex + 1).padStart(2, "0")} <small className="text-gray-02">/ {QUESTIONS.length}</small></div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-gray-01">
                <div className="h-full bg-primary-main transition-[width] duration-300" style={{ width: `${Math.round(((qIndex + 1) / QUESTIONS.length) * 100)}%` }} />
              </div>
            </div>
            <p className="m-0 break-keep text-[22px] font-bold leading-[1.4] tb:text-[26px]">{q.text}</p>
            <div className="flex flex-col gap-2.5">
              {q.options.map((opt, i) => (
                <button
                  key={opt.t}
                  type="button"
                  onClick={() => selectAnswer(i)}
                  className={`cursor-pointer break-keep rounded-[16px] border px-5 py-4 text-left text-[15px] leading-[1.55] transition ${
                    picked === i ? "border-primary-main bg-primary-sub-03 font-bold" : "border-gray-01 bg-white hover:border-primary-sub-02"
                  }`}
                >
                  {opt.t}
                </button>
              ))}
            </div>
            {qIndex > 0 && (
              <button type="button" onClick={() => { setPicked(null); setQIndex(qIndex - 1); }} className="cursor-pointer self-start border-0 bg-transparent p-0 text-[14px] text-gray-02 underline">
                이전 문항으로
              </button>
            )}
          </section>
        )}

        {screen === "form" && (
          <section className="flex flex-col gap-5">
            <Kicker>Almost Done</Kicker>
            <h2 className="m-0 break-keep text-[24px] leading-[1.35] tb:text-[28px]">거의 다 왔어요!<br />결과 계산에 필요한 정보만 알려주세요</h2>
            <p className="m-0 break-keep text-[15px] leading-[1.8] text-gray-03">체성분 기준을 함께 봐야 정확한 결과를 드릴 수 있어요.</p>
            {formErr && <p className="m-0 rounded-[12px] bg-red-50 px-4 py-3 text-[14px] text-red-600">모든 항목을 입력해 주세요.</p>}
            <div className="flex flex-col gap-2">
              <span className="text-[13.5px] font-bold text-gray-03">성별</span>
              <div className="grid grid-cols-2 gap-2">
                {(["여성", "남성"] as const).map((g) => (
                  <button key={g} type="button" onClick={() => setGender(g)} className={`cursor-pointer rounded-[14px] border py-3.5 text-[15px] ${gender === g ? "border-primary-main bg-primary-sub-03 font-bold" : "border-gray-01 bg-white"}`}>
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-2 text-[13.5px] font-bold text-gray-03">
                키 (cm)
                <input type="number" inputMode="decimal" min={120} max={220} placeholder="160" value={height} onChange={(e) => setHeight(e.target.value)} className="rounded-[14px] border border-gray-01 bg-white px-4 py-3.5 text-[16px] font-normal text-black outline-none focus:border-primary-main" />
              </label>
              <label className="flex flex-col gap-2 text-[13.5px] font-bold text-gray-03">
                체중 (kg)
                <input type="number" inputMode="decimal" min={25} max={250} placeholder="60" value={weight} onChange={(e) => setWeight(e.target.value)} className="rounded-[14px] border border-gray-01 bg-white px-4 py-3.5 text-[16px] font-normal text-black outline-none focus:border-primary-main" />
              </label>
            </div>
            <button type="button" onClick={submitForm} className={`${BTN} mt-2`}>결과 보기</button>
          </section>
        )}

        {screen === "loading" && (
          <section className="flex flex-col items-center gap-5 py-24 text-center">
            <div className="h-11 w-11 animate-spin rounded-full border-[3px] border-gray-01 border-t-primary-main" />
            <p className="m-0 text-[17px] font-bold">응답을 분석하고 있어요…</p>
            <span className="text-[13.5px] text-gray-02">{QUESTIONS.length}개 답변을 기반으로 유형과 케어 방향을 계산해요</span>
          </section>
        )}

        {screen === "result" && (
          <section className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-3 text-center">
              <Kicker>My Diet Type</Kicker>
              <h1 className="m-0 break-keep text-[32px] leading-[1.25] tracking-[-0.03em] tb:text-[40px]">{result.type.name}</h1>
              <p className="m-0 break-keep text-[16px] text-gray-03">{result.type.tag}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {result.type.tags.map((t) => <span key={t} className="rounded-full bg-primary-sub-03 px-3 py-1.5 text-[13px] font-bold text-primary-main">{t}</span>)}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="m-0 break-keep text-[16px] leading-[1.9] text-gray-03">
                {result.type.desc.split(result.type.emphasis).map((part, i, arr) => (
                  <span key={i}>{part}{i < arr.length - 1 && <b className="text-black">{result.type.emphasis}</b>}</span>
                ))}
              </p>
              <div className="flex flex-wrap gap-2">
                {result.subs.map((s) => <span key={s} className="rounded-full border border-gray-01 bg-white px-3 py-1.5 text-[13px] text-gray-03">{s}</span>)}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Kicker>My Profile</Kicker>
              <h2 className="m-0 text-[22px]">나의 성향 프로필</h2>
              <div className="flex flex-col divide-y divide-gray-01 rounded-[20px] border border-gray-01 bg-white px-5">
                {result.profile.map(([label, v]) => (
                  <div key={label} className="flex flex-col gap-1 py-4 tb:flex-row tb:gap-4">
                    <span className="w-[110px] flex-none text-[13.5px] font-bold text-gray-02">{label}</span>
                    <span className="break-keep text-[14.5px] leading-[1.7] text-gray-03"><b className="text-black">{v.label}</b> — {v.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Kicker>Why It Failed</Kicker>
              <h2 className="m-0 text-[22px]">왜 반복됐을까</h2>
              <p className="m-0 break-keep text-[16px] leading-[1.9] text-gray-03">{result.type.caution}</p>
              <div className="rounded-[20px] bg-primary-sub-03 px-5 py-5">
                <span className={EN}>The Real Need</span>
                <p className="m-0 mt-2 break-keep text-[15.5px] font-bold leading-[1.7] text-primary-main">{result.type.need}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Kicker>Care Fit</Kicker>
              <h2 className="m-0 text-[22px]">이런 방식이 잘 맞아요</h2>
              <div className="flex flex-col gap-3">
                {result.care.map((c) => (
                  <div key={c.title} className="rounded-[20px] border border-gray-01 bg-white px-5 py-4">
                    <h3 className="m-0 text-[16px] font-bold">{c.title}</h3>
                    <p className="m-0 mt-1 break-keep text-[14px] leading-[1.7] text-gray-03">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Kicker>Recommended Program</Kicker>
              <h2 className="m-0 text-[22px]">나에게 맞는 케어</h2>
              <div className="rounded-[24px] bg-primary-main px-6 py-7 text-white">
                <h3 className="m-0 text-[20px] font-bold">{result.program.title}</h3>
                <p className="m-0 mt-2 break-keep text-[15px] leading-[1.8] text-white/80">{result.program.desc}</p>
                <div className="mt-6 flex flex-col gap-4 border-t border-white/20 pt-5">
                  <span className="text-[12.5px] font-bold tracking-[0.1em] text-white/60">이렇게 진행돼요</span>
                  {WIM_STEPS.map((st) => (
                    <div key={st.n} className="flex gap-3">
                      <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-primary-sub-02 text-[13px] font-bold text-primary-main">{st.n}</span>
                      <div>
                        <h4 className="m-0 text-[15px] font-bold">{st.h}</h4>
                        <p className="m-0 mt-1 break-keep text-[13.5px] leading-[1.7] text-white/75">{st.p}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2 flex flex-col items-center gap-4 rounded-[24px] border border-gray-01 bg-white px-6 py-8 text-center">
                <h3 className="m-0 break-keep text-[20px] leading-[1.4]">내 유형에 맞는 관리,<br />상담에서 확인해 보세요</h3>
                <p className="m-0 text-[14.5px] text-gray-03">전화·카톡 상담은 <b className="text-primary-main">무료</b>예요. 부담 없이 물어보세요.</p>
                <Link href="/contact" onClick={trackCta} className={`${BTN} w-full no-underline tb:w-auto`}>내 유형으로 1:1 상담 신청하기</Link>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-[14px]">
                <button type="button" onClick={share} className="cursor-pointer border-0 bg-transparent p-0 text-gray-03 underline">
                  {copied ? "링크를 복사했어요" : "내 다이어트 유형 공유하기"}
                </button>
                <button type="button" onClick={restart} className="cursor-pointer border-0 bg-transparent p-0 text-gray-02 underline">테스트 다시 하기</button>
              </div>
              <p className="m-0 break-keep text-center text-[12.5px] leading-[1.7] text-gray-02">이 테스트는 참고용 자가 점검 도구예요.<br />정확한 평가는 WIM CENTER의 정식 검사에서 확인할 수 있어요.</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
