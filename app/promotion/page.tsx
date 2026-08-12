import Hero from "@/components/common/Hero";

const HEADING = "font-['Gowun_Batang',serif] font-bold tracking-[-0.02em]";

const CONTENT = {
  eyebrow: "PROMOTION",
  title: "이달의 프로모션",
  description: "지금 진행 중인 혜택으로 더 가볍게 시작하세요. 프로모션은 예고 없이 조기 종료될 수 있습니다.",
  cards: [
    {
      id: "p-1",
      badge: "BEST",
      period: "2026.08.01 - 08.31",
      title: "감량 프로그램 첫 등록 20% 할인",
      desc: "첫 방문 회원님을 위한 시작 혜택. 8주 감량 프로그램을 특별가로 만나보세요.",
      discount: "20%",
    },
    {
      id: "p-2",
      badge: "HOT",
      period: "2026.08.01 - 08.31",
      title: "기기관리 5회 + 1회 추가 증정",
      desc: "인프라레드·에어프레셔 등 기기관리 패키지 결제 시 1회를 더 드립니다.",
      discount: "+1회",
    },
    {
      id: "p-3",
      badge: "EVENT",
      period: "상시 진행",
      title: "친구 추천 시 2만원 적립",
      desc: "함께 등록하는 친구와 나 모두에게 적립 혜택을 드립니다.",
      discount: "2만원",
    },
    {
      id: "p-4",
      badge: "NEW",
      period: "2026.08.15 - 09.15",
      title: "직장인 야간반 오픈 기념 특가",
      desc: "퇴근 후 방문 가능한 야간반 신규 오픈. 오픈 기간 한정 특별가로 운영합니다.",
      discount: "15%",
    },
  ],
  notice: {
    title: "유의 사항",
    items: [
      "모든 프로모션은 중복 적용되지 않습니다.",
      "혜택 및 기간은 센터 사정에 따라 변경될 수 있습니다.",
      "자세한 내용은 상담을 통해 안내받으실 수 있습니다.",
    ],
  },
  cta: {
    title: "지금 바로 혜택을 받아보세요.",
    desc: "상담 신청 시 진행 중인 프로모션을 함께 안내해 드립니다.",
    primary: "상담 신청",
    secondary: "프로그램 보기",
  },
} as const;

export default function PromotionPage() {
  return (
    <main className="w-full bg-white font-['Noto_Sans_KR',sans-serif] text-neutral-900">
      <Hero
        imagePosition="center"
        eyebrow={CONTENT.eyebrow}
        title={CONTENT.title}
        description={CONTENT.description}
        primaryButton="상담 신청"
        secondaryButton="프로그램 보기"
        imageDescription="프로모션 대표 이미지"
      />

      {/* 프로모션 카드 그리드 */}
      <section className="px-4 py-16 tb:px-10 tb:py-20 dt:px-[120px] dt:py-24">
        <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 gap-5 tb:grid-cols-2">
          {CONTENT.cards.map((c) => (
            <article
              key={c.id}
              className="group flex flex-col gap-5 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 transition hover:border-[#4a763f] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="inline-flex w-fit items-center rounded-full bg-[#e9f1e0] px-3 py-1 text-[12px] font-bold tracking-wide text-[#4a763f]">
                    {c.badge}
                  </span>
                  <span className="text-[13px] text-neutral-500">{c.period}</span>
                </div>
                <span className="whitespace-nowrap text-[28px] font-bold leading-none text-[#5f7d4e] tb:text-[32px]">
                  {c.discount}
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className={`${HEADING} text-[19px] leading-snug tb:text-xl`}>{c.title}</h3>
                <p className="text-[14px] leading-relaxed text-neutral-500">{c.desc}</p>
              </div>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4a763f]">
                자세히 보기
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="transition group-hover:translate-x-1">
                  <path d="M3 8h9 M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
          ))}
        </div>

        {/* 유의 사항 */}
        <div className="mx-auto mt-12 w-full max-w-[1000px] rounded-2xl bg-neutral-50 p-7">
          <p className="text-sm font-bold text-neutral-700">{CONTENT.notice.title}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {CONTENT.notice.items.map((n) => (
              <li key={n} className="flex gap-2 text-[13px] leading-relaxed text-neutral-500">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-16 text-center tb:px-10 tb:py-20 dt:px-[120px] dt:py-24">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-4">
          <h2 className={`${HEADING} text-2xl leading-snug tb:text-[26px]`}>{CONTENT.cta.title}</h2>
          <p className="text-[15px] leading-7 text-neutral-500">{CONTENT.cta.desc}</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-[#4a763f] px-6 py-3 text-sm font-semibold text-white">
              {CONTENT.cta.primary}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#4a763f] px-6 py-3 text-sm font-semibold text-[#4a763f]">
              {CONTENT.cta.secondary}
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
