import Text from "@/components/common/Text";
import { EYEBROW, HighlightTitle, Section } from "./primitives";

/* 12주 체중 추이 (68.4 → 55.1kg) — SVG 좌표로 미리 계산한 값 */
const WEIGHT_POINTS = "20,35 80,67 140,95 200,114 260,133 320,147 380,160";
const WEIGHT_AREA = `${WEIGHT_POINTS} 380,180 20,180`;
const WEEK_LABELS = ["0주", "2주", "4주", "6주", "8주", "10주", "12주"];

/* Before → After 지표: pct = 진행 막대 채움 비율(%) */
const METRICS = [
  { label: "체지방률", before: "34.8%", after: "24.1%", pct: 42 },
  { label: "기초대사량", before: "1,320", after: "1,410 kcal", pct: 78 },
  { label: "허리둘레", before: "86cm", after: "70cm", pct: 55 },
];

const STEPS = [
  { no: "01", title: "데이터 수집", desc: "체성분·혈액·수면·활동량을 12주간 주기적으로 기록합니다." },
  { no: "02", title: "분석 & 적용", desc: "개인 대사 패턴을 분석해 식이·운동·약물 처방을 실시간으로 조정합니다." },
  { no: "03", title: "지속 설계", desc: "감량 이후에도 다시 찌지 않는 대사 환경을 데이터로 유지합니다." },
];

export default function DataReportSection() {
  return (
    <Section label="Data report" className="bg-white" innerClassName="flex flex-col gap-[16px]">
      {/* 헤더 */}
      <div className="flex flex-col gap-[10px]">
        <Text as="div" className={EYEBROW}>DATA-DRIVEN DESIGN</Text>
        <HighlightTitle prefix="데이터로 설계하는, " highlight="다시 찌지 않는 몸" />
        <Text as="div" className="text-[15px] leading-[1.75] text-[#6b6b6b] max-w-[600px] text-pretty">
          감량은 결과가 아니라 과정의 기록입니다. 우리는 회원의 데이터를 읽고, 대사 패턴에 맞춰
          설계를 조정해 &lsquo;빠지는 몸&rsquo;이 아니라 &lsquo;유지되는 몸&rsquo;을 만듭니다.
        </Text>
      </div>

      {/* 리포트 카드 : 차트 + 지표 */}
      <div className="mt-6 grid grid-cols-1 gap-6 tb:grid-cols-[1.4fr_1fr]">
        {/* 왼쪽 — 12주 체중 추이 차트 */}
        <div className="rounded-[20px] border border-[#eeeeee] bg-[#fafafa] p-6 tb:p-8">
          <div className="flex items-baseline justify-between">
            <Text as="div" weight="bold" className="text-[15px] text-[#161616]">12주 체중 추이</Text>
            <Text as="div" weight="bold" className="text-[14px] text-[#525252]">68.4kg → 55.1kg</Text>
          </div>
          <svg viewBox="0 0 400 200" className="mt-5 w-full" role="img" aria-label="12주 체중 추이 그래프">
            {/* 가로 눈금선 */}
            {[20, 60, 100, 140, 180].map((y) => (
              <line key={y} x1="20" y1={y} x2="380" y2={y} stroke="#ededed" strokeWidth="1" />
            ))}
            {/* 면적 + 라인 */}
            <polygon points={WEIGHT_AREA} fill="#525252" fillOpacity="0.08" />
            <polyline points={WEIGHT_POINTS} fill="none" stroke="#404040" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {WEIGHT_POINTS.split(" ").map((p) => {
              const [cx, cy] = p.split(",");
              return <circle key={p} cx={cx} cy={cy} r="3.5" fill="#fff" stroke="#404040" strokeWidth="2" />;
            })}
          </svg>
          {/* x축 라벨 */}
          <div className="mt-2 flex justify-between px-[4px]">
            {WEEK_LABELS.map((w) => (
              <Text key={w} as="span" className="text-[11px] text-[#a3a3a3]">{w}</Text>
            ))}
          </div>
        </div>

        {/* 오른쪽 — Before/After 지표 막대 */}
        <div className="flex flex-col justify-center gap-6 rounded-[20px] border border-[#eeeeee] bg-white p-6 tb:p-8">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <Text as="span" className="text-[13px] text-[#737373]">{m.label}</Text>
                <Text as="span" weight="bold" className="text-[14px] text-[#161616]">
                  <span className="text-[#a3a3a3] line-through">{m.before}</span>
                  <span className="mx-1 text-[#a3a3a3]">→</span>
                  {m.after}
                </Text>
              </div>
              <div className="h-[8px] w-full overflow-hidden rounded-full bg-[#eeeeee]">
                <div className="h-full rounded-full bg-[#525252]" style={{ width: `${m.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 적용 방식 3단계 */}
      <div className="mt-6 grid grid-cols-1 gap-4 tb:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.no} className="flex flex-col gap-3 rounded-[20px] border border-[#eeeeee] bg-[#fafafa] p-6">
            <Text as="div" weight="bold" className="text-[13px] tracking-[.12em] text-[#a3a3a3]">{s.no}</Text>
            <Text as="div" weight="bold" className="text-[18px] tracking-[-.02em] text-[#161616]">{s.title}</Text>
            <Text as="div" className="text-[14px] leading-[1.7] text-[#6b6b6b] text-pretty">{s.desc}</Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
