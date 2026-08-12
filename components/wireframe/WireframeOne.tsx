"use client";

import { useState } from "react";
import { Bar, ImgBox, Row, Section, Stack, C } from "./primitives";

const BUBBLES = [
  { left: 60, top: 48, w: 230, h: 86, rot: -2, bg: "#eee7da", tail: "18px 18px 18px 4px" },
  { left: 360, top: 26, w: 270, h: 74, rot: 1.5, bg: "#eae2d3", tail: "18px 18px 4px 18px" },
  { left: 690, top: 62, w: 210, h: 92, rot: -1, bg: "#eee7da", tail: "18px 18px 18px 4px" },
  { left: 140, top: 178, w: 290, h: 80, rot: 2, bg: "#e6dece", tail: "18px 18px 4px 18px" },
  { left: 500, top: 158, w: 250, h: 88, rot: -2.5, bg: "#eee7da", tail: "18px 18px 18px 4px" },
  { left: 250, top: 296, w: 240, h: 76, rot: 1, bg: "#e9e1d1", tail: "18px 18px 4px 18px" },
  { left: 560, top: 300, w: 270, h: 84, rot: -1.5, bg: "#ece5d7", tail: "18px 18px 18px 4px" },
];

const STEP_W = [56, 66, 48, 62, 56, 56];
const STEP_PREVIEW = [
  { w: 220, h: 120 },
  { w: 300, h: 180 },
  { w: 260, h: 150 },
  { w: 340, h: 210 },
  { w: 280, h: 160 },
  { w: 320, h: 190 },
];
const PLANS = [
  { pill: 70, title: 120, body: 80 },
  { pill: 88, title: 140, body: 70 },
  { pill: 80, title: 130, body: 86 },
];
const FAQS = [420, 360, 470, 330, 400];

export default function WireframeOne() {
  const [bubble, setBubble] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [plan, setPlan] = useState(1);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div
      style={{
        width: 1081,
        margin: "0 auto",
        background: C.page,
        border: `1.5px solid ${C.line}`,
        borderRadius: 8,
        boxShadow: "0 1px 3px rgba(0,0,0,.06)",
        paddingBottom: 40,
        fontFamily: "Figtree,system-ui,sans-serif",
      }}
    >
      <Section n="01" pad="60px 105px 40px">
        <Row gap={60} style={{ alignItems: "flex-start" }}>
          <div style={{ flex: "0 0 450px" }}>
            <Bar w={200} h={15} />
            <Bar w={440} h={48} color={C.barStrong} style={{ marginTop: 57 }} />
            <Bar w={440} h={48} color={C.barStrong} style={{ marginTop: 13 }} />
            <Stack gap={12} style={{ marginTop: 46 }}>
              <Bar w={200} h={14} />
              <Bar w={275} h={14} />
              <Bar w={230} h={14} />
            </Stack>
            <Row gap={14} style={{ marginTop: 44 }}>
              <div style={{ width: 150, height: 40, borderRadius: 999, border: "1.5px solid #a49c8f", background: C.fill }} />
              <div style={{ width: 120, height: 40, borderRadius: 999, border: "1.5px dashed #bdb4a4" }} />
            </Row>
          </div>
          <ImgBox h={420} style={{ flex: 1 }} />
        </Row>
      </Section>

      {/* 02 말풍선 벽 — 클릭 시 해당 말풍선만 강조 */}
      <Section n="02" pad="24px 105px 40px">
        <Row gap={14} style={{ alignItems: "center" }}>
          <div style={{ width: 56, height: 18, borderRadius: 999, background: C.ink, opacity: 0.75 }} />
          <Bar w={280} h={11} />
        </Row>
        <div
          style={{
            position: "relative",
            height: 700,
            marginTop: 28,
            border: "1.5px dashed #bdb4a4",
            borderRadius: 20,
            background: "#f6f1e6",
          }}
        >
          {BUBBLES.map((b, i) => (
            <div
              key={i}
              onClick={() => setBubble(bubble === i ? null : i)}
              style={{
                position: "absolute",
                left: b.left,
                top: b.top,
                width: b.w,
                height: b.h,
                borderRadius: b.tail,
                transform: `rotate(${b.rot}deg)`,
                background: b.bg,
                cursor: "pointer",
                transition: "opacity .2s, border .2s",
                border: bubble === i ? `2px solid ${C.active}` : "1.5px solid #b9b0a0",
                opacity: bubble === null || bubble === i ? 1 : 0.45,
              }}
            />
          ))}
          <div style={{ position: "absolute", left: 462, top: 404, width: 2, height: 60, background: "#c2b9a8" }} />
          <div
            style={{
              position: "absolute",
              left: 150,
              top: 480,
              width: 640,
              height: 150,
              border: `2px solid ${C.active}`,
              borderRadius: "26px 26px 26px 6px",
              background: "#e2dac9",
            }}
          />
        </div>
      </Section>

      {/* 03 로드맵 — 단계 클릭 시 미리보기 변경 */}
      <Section n="03" pad="24px 105px 40px">
        <Row gap={14} style={{ alignItems: "center" }}>
          <div style={{ width: 64, height: 18, borderRadius: 999, background: C.ink, opacity: 0.75 }} />
          <Bar w={230} h={11} />
        </Row>
        <Bar w={90} h={10} style={{ marginTop: 33 }} />
        <Bar w={420} h={26} color={C.barStrong} style={{ marginTop: 22 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", marginTop: 56, alignItems: "start" }}>
          {STEP_W.map((w, i) => (
            <div key={i} onClick={() => setStep(i)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  border: "1.5px solid #a49c8f",
                  background: step === i ? C.ink : C.fill,
                  transition: "background .2s",
                }}
              />
              <Bar w={w} color={step === i ? "#b3a891" : C.bar} />
            </div>
          ))}
        </div>
        <ImgBox
          h={380}
          radius={20}
          style={{
            marginTop: 44,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
          }}
        >
          <Bar w={STEP_PREVIEW[step].w} h={24} color={C.barStrong} />
          <div
            style={{
              width: 420,
              height: STEP_PREVIEW[step].h,
              borderRadius: 12,
              border: "1.5px solid #bdb4a4",
              background: "#efe8db",
              transition: "height .25s",
            }}
          />
        </ImgBox>
      </Section>

      {/* 04 설명 + 지표 + 3열 */}
      <Section n="04" pad="24px 105px 40px">
        <Row gap={14} style={{ alignItems: "center" }}>
          <div style={{ width: 56, height: 18, borderRadius: 999, background: C.ink, opacity: 0.75 }} />
          <Bar w={250} h={11} />
        </Row>
        <Row gap={44} style={{ alignItems: "flex-start", marginTop: 28 }}>
          <ImgBox w={300} h={300} style={{ flex: "0 0 300px" }} />
          <div style={{ flex: 1 }}>
            <Bar w={120} h={9} />
            <Bar w={280} h={22} color={C.barStrong} style={{ marginTop: 26 }} />
            <Bar w={300} h={22} color={C.barStrong} style={{ marginTop: 9 }} />
            <Stack gap={9} style={{ marginTop: 24 }}>
              <Bar w={350} h={11} />
              <Bar w={290} h={11} />
            </Stack>
            <Row gap={150} style={{ marginTop: 70 }}>
              {[
                [52, 60],
                [34, 48],
                [40, 66],
              ].map(([a, b], i) => (
                <Stack key={i}>
                  <Bar w={a} h={18} color={C.barStrong} />
                  <Bar w={b} />
                </Stack>
              ))}
            </Row>
          </div>
        </Row>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 36, marginTop: 56 }}>
          {[120, 160, 140].map((w, i) => (
            <Stack key={i} gap={14}>
              <div style={{ width: 26, height: 26, borderRadius: 999, border: "1.5px solid #a49c8f" }} />
              <Bar w={w} h={14} color={C.barStrong} />
              <Stack gap={7}>
                <Bar />
                <Bar w={["60%", "72%", "88%"][i]} />
              </Stack>
            </Stack>
          ))}
        </div>
      </Section>

      {/* 05 비교 */}
      <Section n="05" pad="24px 105px 40px">
        <Row gap={14} style={{ alignItems: "center" }}>
          <div style={{ width: 56, height: 18, borderRadius: 999, background: C.ink, opacity: 0.75 }} />
          <Bar w={250} h={11} />
        </Row>
        <Row gap={44} style={{ alignItems: "flex-start", marginTop: 28 }}>
          <ImgBox w={400} h={470} style={{ flex: "0 0 400px", position: "relative" }}>
            <div style={{ position: "absolute", left: 199, top: 0, width: 2, height: "100%", background: "#a49c8f" }} />
            <div
              style={{
                position: "absolute",
                left: 178,
                top: 214,
                width: 44,
                height: 44,
                borderRadius: 999,
                border: `2px solid ${C.active}`,
                background: "#f6f1e6",
              }}
            />
          </ImgBox>
          <div style={{ flex: 1 }}>
            <Bar w={70} />
            <Bar w={250} h={28} color={C.barStrong} style={{ marginTop: 30 }} />
            <Bar w={280} h={28} color={C.barStrong} style={{ marginTop: 10 }} />
            <div style={{ marginTop: 36 }}>
              {[
                [56, 64],
                [66, 52],
                [56, 36],
              ].map(([a, b], i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: i === 0 ? "0 0 14px" : "14px 0",
                    borderBottom: `1.5px solid ${C.lineSoft}`,
                  }}
                >
                  <Bar w={a} h={11} />
                  <Bar w={b} h={16} color={C.barStrong} />
                </div>
              ))}
            </div>
            <Row gap={100} style={{ marginTop: 48 }}>
              <Stack>
                <Bar w={110} h={24} color={C.barStrong} />
                <Bar w={52} />
              </Stack>
              <Stack>
                <Bar w={56} h={24} color={C.barStrong} />
                <Bar w={52} />
              </Stack>
            </Row>
          </div>
        </Row>
      </Section>

      {/* 06 요금제 — 카드 선택 */}
      <Section n="06" pad="44px 105px 40px">
        <Bar w={150} />
        <Bar w={200} h={26} color={C.barStrong} style={{ marginTop: 31 }} />
        <Bar w={250} h={26} color={C.barStrong} style={{ marginTop: 10 }} />
        <Stack gap={9} style={{ marginTop: 24 }}>
          <Bar w={410} h={12} />
          <Bar w={320} h={12} />
        </Stack>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 26, marginTop: 60 }}>
          {PLANS.map((p, i) => (
            <div
              key={i}
              onClick={() => setPlan(i)}
              style={{
                height: 440,
                borderRadius: 20,
                padding: 32,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                cursor: "pointer",
                transition: "border .2s, background .2s",
                border: plan === i ? `2px solid ${C.active}` : `1.5px solid ${C.line}`,
                background: plan === i ? "#f2ecdf" : "#f6f1e6",
              }}
            >
              <div style={{ width: p.pill, height: 22, borderRadius: 999, background: "#e2dac9" }} />
              <Bar w={p.title} h={22} color={C.barStrong} style={{ marginTop: 8 }} />
              <Bar h={11} />
              <Bar w={`${p.body}%`} h={11} />
              <div style={{ flex: 1 }} />
              <div
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 999,
                  border: "1.5px solid #a49c8f",
                  background: plan === i ? C.barStrong : "transparent",
                  transition: "background .2s",
                }}
              />
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 66,
            padding: "0 33px 22px",
            borderBottom: `1.5px solid ${C.line}`,
          }}
        >
          <Bar w={180} h={18} color={C.barStrong} />
          <Row gap={16}>
            {[44, 52, 48].map((w, i) => (
              <div key={i} style={{ width: w, height: 14, borderRadius: 999, background: "#e2dac9" }} />
            ))}
          </Row>
        </div>

        {[
          [110, 130, 100],
          [120, 126, 170],
        ].map((row, r) => (
          <div key={r} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: r === 0 ? 32 : 24 }}>
            {row.map((w, i) => (
              <div
                key={i}
                style={{
                  border: `1.5px solid ${C.lineSoft}`,
                  borderRadius: 16,
                  background: "#faf6ec",
                  padding: 24,
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <Row gap={10}>
                  {(r === 0 ? [34, 44, 40] : [44, 40]).map((t, k) => (
                    <div key={k} style={{ width: t, height: 12, borderRadius: 999, background: C.fill }} />
                  ))}
                </Row>
                <Row gap={12} style={{ alignItems: "center", marginTop: 14 }}>
                  <Bar w={22} h={12} color="#c2b9a8" />
                  <Bar w={w} h={15} color={C.barStrong} />
                </Row>
                <Stack gap={7}>
                  <Bar />
                  <Bar w="70%" />
                </Stack>
              </div>
            ))}
          </div>
        ))}

        <div
          style={{
            border: `1.5px solid ${C.lineSoft}`,
            borderRadius: 16,
            background: "#faf6ec",
            padding: "24px 33px",
            boxSizing: "border-box",
            marginTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Stack gap={12}>
            <Row gap={12} style={{ alignItems: "center" }}>
              <Bar w={22} h={12} color="#c2b9a8" />
              <Bar w={110} h={15} color={C.barStrong} />
            </Row>
            <Bar w={300} />
          </Stack>
          <Row gap={10}>
            {[44, 40, 34].map((w, i) => (
              <div key={i} style={{ width: w, height: 12, borderRadius: 999, background: C.fill }} />
            ))}
          </Row>
        </div>

        <Bar w={230} h={9} color="#e2dac9" style={{ margin: "34px 0 0 33px" }} />
        <Stack
          gap={9}
          style={{
            border: "1.5px dashed #bdb4a4",
            borderRadius: 16,
            background: "#f2ecdf",
            padding: "26px 22px",
            boxSizing: "border-box",
            marginTop: 70,
          }}
        >
          <Bar h={11} />
          <Bar w="78%" h={11} />
        </Stack>
      </Section>

      {/* 07 FAQ — 행 클릭 시 아코디언 */}
      <Section n="07" pad="110px 105px 60px">
        <Bar w={60} h={12} />
        <Bar w={340} h={36} color={C.barStrong} style={{ marginTop: 38 }} />
        <div style={{ marginTop: 56, borderBottom: `1.5px solid ${C.lineSoft}` }}>
          {FAQS.map((w, i) => (
            <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{ borderTop: `1.5px solid ${C.lineSoft}`, cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 0" }}>
                <Bar w={w} h={14} />
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 999,
                    border: `1.5px solid ${open === i ? C.active : "#b9b0a0"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "border-color .2s",
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: 999, background: open === i ? "#c2b9a8" : "transparent" }} />
                </div>
              </div>
              {open === i && (
                <Stack gap={9} style={{ padding: "0 0 26px" }}>
                  <Bar w="82%" h={11} color={C.fill} />
                  <Bar w="64%" h={11} color={C.fill} />
                </Stack>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
