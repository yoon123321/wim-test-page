import Hero from "@/components/common/Hero";

const HEADING = "font-['Gowun_Batang',serif] font-bold tracking-[-0.02em]";

const CONTENT = {
  eyebrow: "BEFORE & AFTER",
  title: "변화의 기록",
  description: "프로그램을 함께한 회원님들의 실제 변화입니다. 결과는 개인의 상태와 참여도에 따라 다를 수 있습니다.",
  featured: [
    { id: "f-1", eyebrow: "윔챌린지", name: "박소담 위머의", title: "000kg\n감량 스토리" },
    { id: "f-2", eyebrow: "40대 직장인", name: "최규식 위머의", title: "000kg\n감량 스토리" },
  ],
  pill: "감량 후기",
  reviews: Array.from({ length: 6 }, (_, i) => ({
    id: `r-${i + 1}`,
    title: "[감량 전 몸무게 → 감량 후 몸무게] 제목을 입력해 주세요.",
    desc: "나이, 성별, 직업, 특징, 결제 프로그램 명을 입력하면 좋을 것 같아요.",
  })),
  gallery: {
    pill: "기기관리 후기",
    slides: [0, 1, 2, 3, 4],
    cta: {
      title: "나만의 다이어트 성공 스토리를 만들어 보세요.",
      desc: [
        "WIM에서 과학적이고 지속 가능한 다이어트 여정을 시작하세요.",
        "나를 이해하는 맞춤형 솔루션으로 건강한 라이프스타일을 만들어 갑니다.",
      ],
      primary: "상담 신청",
      secondary: "프로그램 보기",
    },
  },
} as const;

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="text-neutral-500">
      <path
        d={dir === "left" ? "M12 4 6 10l6 6" : "M8 4l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" className="text-[#4a763f]">
      <path d="M8 18 18 8 M10 8h8v8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BeforeAfterPage() {
  return (
    <main className="w-full bg-white font-['Noto_Sans_KR',sans-serif] text-neutral-900">
      <Hero
        imagePosition="center"
        eyebrow={CONTENT.eyebrow}
        title={CONTENT.title}
        description={CONTENT.description}
        primaryButton="상담 신청"
        secondaryButton="프로그램 보기"
        imageDescription="비포앤애프터 대표 이미지"
      />

      <section className="px-5 py-16 tb:px-10 tb:py-20 dt:px-[120px] dt:py-24">
        {/* 대표 스토리 카드 */}
        <div className="relative mx-auto w-full max-w-[1000px]">
          <div className="grid grid-cols-1 gap-4 tb:grid-cols-2">
            {CONTENT.featured.map((f) => (
              <article
                key={f.id}
                className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl bg-[#e9f1e0] p-7 tb:min-h-[280px]"
              >
                <span className="absolute right-6 top-6">
                  <ArrowIcon />
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[13px] text-neutral-500">{f.eyebrow}</span>
                  <span className="text-xl font-bold text-neutral-800">{f.name}</span>
                </div>
                <p className="whitespace-pre-line text-[34px] font-bold leading-tight text-[#5f7d4e] tb:text-[40px]">
                  {f.title}
                </p>
              </article>
            ))}
          </div>

          {/* 가운데 걸친 모델 이미지 자리 */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[150px] -translate-x-1/2 items-center justify-center rounded-xl bg-neutral-200/70 text-xs text-neutral-500 tb:flex">
            이미지
          </div>
        </div>

        {/* 감량 후기 버튼 */}
        <div className="mt-10 flex justify-center">
          <span className="rounded-full border border-neutral-400 px-6 py-2.5 text-sm font-medium text-neutral-700">
            {CONTENT.pill}
          </span>
        </div>

        {/* 후기 그리드 */}
        <div className="mx-auto mt-10 grid w-full max-w-[1000px] grid-cols-1 gap-x-10 gap-y-12 tb:grid-cols-2">
          {CONTENT.reviews.map((r, i) => (
            <article key={r.id} className="flex flex-col gap-4">
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl bg-neutral-100 text-sm text-neutral-400">
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#4a763f] text-lg font-bold text-white">
                  {i === 0 ? "+" : ""}
                </span>
                이미지 영역
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[15px] font-bold text-neutral-800">{r.title}</p>
                <p className="text-[13px] leading-relaxed text-neutral-500">{r.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 기기관리 후기 캐러셀 + CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-5 py-16 tb:px-10 tb:py-20 dt:px-[120px] dt:py-24">
        {/* 후기 버튼 */}
        <div className="flex justify-center">
          <span className="rounded-full bg-[#4a763f] px-6 py-2.5 text-sm font-medium text-white">
            {CONTENT.gallery.pill}
          </span>
        </div>

        {/* 캐러셀 */}
        <div className="relative mx-auto mt-10 w-full max-w-[1000px]">
          <button
            type="button"
            aria-label="이전"
            className="absolute -left-2 top-[150px] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md tb:-left-4 dt:-left-6"
          >
            <Chevron dir="left" />
          </button>

          <div className="flex justify-center gap-4 overflow-hidden">
            {CONTENT.gallery.slides.map((n) => (
              <div
                key={n}
                className={`aspect-[3/4] w-[220px] shrink-0 rounded-xl ${n === 2 ? "bg-neutral-300" : "bg-neutral-200"}`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="다음"
            className="absolute -right-2 top-[150px] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md tb:-right-4 dt:-right-6"
          >
            <Chevron dir="right" />
          </button>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-14 flex max-w-[640px] flex-col items-center gap-4 text-center">
          <h2 className={`${HEADING} text-2xl leading-snug tb:text-[26px]`}>{CONTENT.gallery.cta.title}</h2>
          <p className="text-[15px] leading-7 text-neutral-500">
            {CONTENT.gallery.cta.desc.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-[#4a763f] px-6 py-3 text-sm font-semibold text-white">
              {CONTENT.gallery.cta.primary}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#4a763f] px-6 py-3 text-sm font-semibold text-[#4a763f]">
              {CONTENT.gallery.cta.secondary}
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h9 M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
