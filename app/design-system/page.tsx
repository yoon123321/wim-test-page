const FONT_CSS = `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;1,500&display=swap");`;

interface FontRow {
  name: string;
  size: number;
  lineHeight: string;
  weight: string;
  desc: string;
}

interface FontFamilyBlock {
  title: string;
  weightsLabel: string;
  lineHeightNote: string;
  fontFamily: string;
  italic?: boolean;
  rows: FontRow[];
}

const SIZES = [36, 30, 28, 26, 24, 22, 20, 18, 16, 14];
const WEIGHTS = ["B", "B", "B", "B", "B, M, D", "B, M, D", "B, M, D", "B, M, D", "B, M, D", "B, M, D"];
const DESCS = [
  "강조용 타이틀에 사용합니다.",
  "강조용 타이틀에 사용합니다.",
  "큰 타이틀에 사용합니다.",
  "큰 타이틀에 사용합니다.",
  "타이틀에 사용합니다.",
  "타이틀에 사용합니다.",
  "타이틀에 사용합니다.",
  "본문에 사용합니다.",
  "본문에 사용합니다.",
  "본문에 사용합니다.",
];

const buildRows = (names: string[], lineHeights: string[]): FontRow[] =>
  names.map((name, i) => ({ name, size: SIZES[i], lineHeight: lineHeights[i], weight: WEIGHTS[i], desc: DESCS[i] }));

const BLOCKS: FontFamilyBlock[] = [
  {
    title: "PRETENDARD",
    weightsLabel: "Regular, Medium, Bold",
    lineHeightNote: "줄높이 140%, 150%",
    fontFamily: "'Pretendard Variable', sans-serif",
    rows: buildRows(
      ["디스플레이 01", "디스플레이 02", "타이틀 01", "타이틀 02", "헤드라인 01", "헤드라인 02", "헤드라인 03", "바디 01", "바디 02", "바디 03"],
      ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "140%", "140%", "140%"]
    ),
  },
  {
    title: "ITC FRANKLIN GOTHIC LT PRO",
    weightsLabel: "Book, Medium, Demi",
    lineHeightNote: "줄높이 130%, 150%",
    fontFamily: "'ITC Franklin Gothic LT Pro', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    rows: buildRows(
      ["Display 01", "Display 02", "Title 01", "Title 02", "Headline 01", "Headline 02", "Headline 03", "Body 01", "Body 02", "Body 03"],
      ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"]
    ),
  },
  {
    title: "EB GARAMOND",
    weightsLabel: "Medium, Medium Italic",
    lineHeightNote: "줄높이 130%, 80%, 150%",
    fontFamily: "'EB Garamond', serif",
    italic: true,
    rows: [
      { name: "Display 01_BI", size: 120, lineHeight: "130%", weight: "M, MI", desc: "강조용 타이틀에 사용합니다" },
      { name: "Display 02_BI", size: 96, lineHeight: "80%", weight: "M, MI", desc: "강조용 타이틀에 사용합니다" },
      { name: "Display 03_BI", size: 64, lineHeight: "130%", weight: "M, MI", desc: "강조용 타이틀에 사용합니다" },
      { name: "Headline 01_BI", size: 56, lineHeight: "130%", weight: "M, MI", desc: "큰 타이틀에 사용합니다" },
      { name: "Headline 02_BI", size: 52, lineHeight: "130%", weight: "M, MI", desc: "큰 타이틀에 사용합니다" },
      { name: "Headline 03_BI", size: 46, lineHeight: "150%", weight: "M, MI", desc: "큰 타이틀에 사용합니다" },
      { name: "Title 01_BI", size: 32, lineHeight: "150%", weight: "M, MI", desc: "타이틀에 사용합니다" },
    ],
  },
];

const COLS = "grid-cols-[minmax(0,1.5fr)_64px_104px_96px_minmax(0,1.1fr)]";

const sampleWeight = (block: FontFamilyBlock, weight: string) => (block.italic ? 500 : weight === "B" ? 700 : 400);
const sampleStyle = (block: FontFamilyBlock, f: FontRow) => ({
  fontFamily: block.fontFamily,
  fontSize: f.size,
  lineHeight: f.lineHeight,
  fontWeight: sampleWeight(block, f.weight),
  fontStyle: block.italic ? ("italic" as const) : ("normal" as const),
});

function FontTable({ block }: { block: FontFamilyBlock }) {
  return (
    <section>
      {/* 상단 타이틀 바 */}
      <div className="flex flex-col gap-3 rounded-2xl bg-gradient-to-r from-[#4a763f] via-[#7aa367] to-[#c2d8ae] px-6 py-6 text-white tb:flex-row tb:items-center tb:justify-between tb:px-8">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold tracking-tight">{block.title}</span>
          <span className="h-4 w-px bg-white/50" />
          <span className="text-[15px] text-white/90">{block.weightsLabel}</span>
        </div>
        <div className="text-[13px] text-white/85">{block.lineHeightNote}&emsp;자간 0%</div>
      </div>

      {/* PC: 표 형태 */}
      <div className="hidden dt:block">
        <div className={`mt-3 grid ${COLS} items-center gap-x-8 border-b border-neutral-200 px-2 pb-4 pt-6 text-[14px] text-neutral-500`}>
          <span>Style</span>
          <span>Size</span>
          <span>Line Height</span>
          <span>Weight</span>
          <span>Description</span>
        </div>

        <div className="flex flex-col gap-2 pt-3">
          {block.rows.map((f) => (
            <div key={f.name} className={`grid ${COLS} items-center gap-x-8`}>
              <div className="flex items-center overflow-hidden rounded-2xl bg-[#e9f1e0] px-8 py-5">
                <span className="whitespace-nowrap" style={sampleStyle(block, f)}>
                  {f.name}
                </span>
              </div>
              <span className="text-[15px] text-neutral-700">{f.size}</span>
              <span className="text-[15px] text-neutral-700">{f.lineHeight}</span>
              <span className="text-[15px] text-neutral-700">{f.weight}</span>
              <span className="text-[15px] text-neutral-600">{f.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 모바일/태블릿: 카드 형태 */}
      <div className="mt-6 flex flex-col gap-3 dt:hidden">
        {block.rows.map((f) => (
          <div key={f.name} className="rounded-2xl border border-neutral-200 p-4">
            <div className="flex items-center overflow-hidden rounded-xl bg-[#e9f1e0] px-5 py-4">
              <span className="whitespace-nowrap" style={sampleStyle(block, f)}>
                {f.name}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 px-1 text-[13px] text-neutral-600">
              <span><span className="text-neutral-400">Size</span> {f.size}</span>
              <span><span className="text-neutral-400">Line Height</span> {f.lineHeight}</span>
              <span><span className="text-neutral-400">Weight</span> {f.weight}</span>
            </div>
            <p className="mt-1.5 px-1 text-[13px] text-neutral-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="w-full bg-white font-['Pretendard_Variable',sans-serif] text-neutral-900">
      <style dangerouslySetInnerHTML={{ __html: FONT_CSS }} />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-5 py-12 tb:px-8 tb:py-16 dt:px-10">
        {BLOCKS.map((block) => (
          <FontTable key={block.title} block={block} />
        ))}
      </div>
    </main>
  );
}
