import Hero from "@/components/common/Hero";

const HEADING = "font-['Gowun_Batang',serif] font-bold tracking-[-0.02em]";

const CONTENT = {
  eyebrow: "CONTACT",
  title: "상담 문의",
  description: "궁금한 점을 남겨 주시면 상담 매니저가 순차적으로 연락드립니다. 상담은 무료입니다.",
  fields: [
    { id: "name", label: "이름", type: "text", placeholder: "성함을 입력해 주세요", required: true },
    { id: "phone", label: "연락처", type: "tel", placeholder: "010-0000-0000", required: true },
    { id: "email", label: "이메일", type: "email", placeholder: "example@email.com", required: false },
  ],
  categories: ["감량 프로그램", "기기관리 프로그램", "기타 문의"],
  messageLabel: "문의 내용",
  messagePlaceholder: "상담받고 싶은 내용을 자유롭게 적어 주세요.",
  agree: "개인정보 수집 및 이용에 동의합니다.",
  submit: "상담 신청하기",
  info: {
    title: "센터 안내",
    items: [
      { label: "주소", value: "서울특별시 강남구 테헤란로 000, 0층" },
      { label: "전화", value: "02-000-0000" },
      { label: "운영시간", value: "평일 10:00 – 20:00 · 토 10:00 – 15:00 · 일/공휴일 휴무" },
    ],
  },
  directions: {
    eyebrow: "DIRECTIONS",
    title: "찾아오는 길",
    address: "서울특별시 강남구 테헤란로 000, 0층",
    mapPlaceholder: "지도 영역",
    routes: [
      { label: "지하철", value: "2호선 강남역 0번 출구에서 도보 5분" },
      { label: "버스", value: "간선 000, 000 · 지선 0000 정류장 하차 후 도보 3분" },
      { label: "주차", value: "건물 지하 주차장 이용 가능 (상담 시 2시간 무료)" },
    ],
  },
} as const;

export default function ContactPage() {
  return (
    <main className="w-full bg-white font-['Noto_Sans_KR',sans-serif] text-neutral-900">
      <Hero imagePosition="center" />

      {/* 찾아오는 길 */}
      <section className="bg-neutral-50 px-4 py-16 tb:px-10 tb:py-20 dt:px-[120px] dt:py-24">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">{CONTENT.directions.eyebrow}</span>
          <h2 className={`${HEADING} text-2xl leading-snug tb:text-3xl`}>{CONTENT.directions.title}</h2>
          <p className="text-base leading-8 text-neutral-600">{CONTENT.directions.address}</p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-[1000px] grid-cols-1 gap-8 dt:grid-cols-[1.4fr_1fr] dt:gap-12">
          {/* 지도 자리 */}
          <div className="flex h-[280px] items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-white text-sm text-neutral-400 tb:h-[360px]">
            {CONTENT.directions.mapPlaceholder}
          </div>

          {/* 교통편 안내 */}
          <dl className="flex flex-col gap-6 dt:h-fit">
            {CONTENT.directions.routes.map((route) => (
              <div key={route.label} className="flex flex-col gap-1.5 border-b border-neutral-200 pb-6 last:border-b-0 last:pb-0">
                <dt className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-500">{route.label}</dt>
                <dd className="text-[15px] leading-relaxed text-neutral-700">{route.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
