"use client";

import { useState } from "react";
import { RECOVERY_CONTENT as CONTENT } from "@/data/recovery";
import Modal from "@/components/common/Modal";
import Text from "@/components/common/Text";
import ProcessRoadmap from "@/components/common/ProcessRoadmap";

const section = "border-t border-dashed border-neutral-300 px-4 py-12 tb:px-8 tb:py-16 dt:px-[max(40px,calc((100vw-1200px)/2))] dt:py-20";
const inner = "mx-auto w-full max-w-[1200px]";

const COMBINATION_REVIEWS = [
  [
    { label: "근육 회복", body: "웨이트 끝나고 인프라레드 30분 후 크라이오로 마무리했는데, 다음 날 근육통이 거의 없었습니다. 순서를 정해주셔서 고민할 게 없었어요.", meta: "30대 남성 · 5회권 이용" },
    { label: "Contrast Therapy", body: "몸을 데운 다음 한 번에 식히는 흐름이 확실히 다릅니다. 3분이 짧게 느껴질 정도로 개운했어요.", meta: "40대 남성 · 10회권 이용" },
  ],
  [
    { label: "붓기 제거", body: "오래 서 있으면 다리가 무거웠는데 관리 후 신발이 헐렁하게 느껴졌어요. 다음 날까지 가벼움이 이어졌습니다.", meta: "30대 여성 · 5회권 이용" },
    { label: "Lymphatic Care", body: "그날 붓기 상태를 먼저 확인하고 압력을 조절해 주셔서 편안하게 받을 수 있었습니다.", meta: "40대 여성 · 3회권 이용" },
  ],
  [
    { label: "피로 회복", body: "일이 몰린 주에 몸이 무겁고 집중도 안 됐는데, 관리받고 나니 잠도 깊게 잤습니다.", meta: "30대 남성 · 10회권 이용" },
    { label: "Recovery Protocol", body: "무조건 강한 관리가 아니라 그날 컨디션에 맞춰 순서를 바꿔주는 점이 좋았습니다.", meta: "40대 여성 · 5회권 이용" },
  ],
  [
    { label: "순환·대사", body: "손발이 차고 몸이 잘 붓는 편인데 관리 후 몸이 따뜻해지고 훨씬 가벼웠습니다.", meta: "30대 여성 · 5회권 이용" },
    { label: "Metabolic Boost", body: "운동하기 힘든 날에도 부담 없이 받을 수 있어 꾸준히 관리하기 좋았습니다.", meta: "50대 여성 · 10회권 이용" },
  ],
] as const;

const INSTAGRAM_RECORDS = [
  { handle: "@runner_jw", body: "운동 끝나고 크라이오 3분. 다음 날이 다르다", photo: "인스타 게시물\n(크라이오 캡슐 앞)" },
  { handle: "@seoyeon.log", body: "종아리 붓기 관리 4주차 기록", photo: "인스타 게시물\n(에어프레셔 이용 중)" },
  { handle: "@mindful_hj", body: "야근 주간 리셋. 옥시챔버 40분", photo: "인스타 게시물\n(옥시챔버 내부)" },
  { handle: "@daily_kyu", body: "사우나보다 짧고 확실한 인프라레드", photo: "인스타 게시물\n(인프라레드 캡슐)" },
  { handle: "@yoonso_fit", body: "감량 정체기에 찾은 회복 루틴", photo: "인스타 게시물\n(윔펄스테라피)" },
] as const;

function Photo({ lines, className = "" }: { lines: readonly string[]; className?: string }) {
  return (
    <div
      className={`grid min-h-44 place-content-center rounded-xl border border-dashed border-neutral-400 bg-[repeating-linear-gradient(135deg,#f5f5f5_0_6px,#e5e5e5_6px_12px)] px-4 text-center text-xs leading-5 text-neutral-500 ${className}`}
    >
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </div>
  );
}

function Heading({ title, subtitle }: { title: string; subtitle: React.ReactNode }) {
  return (
    <div className="mt-7 text-center">
      <h2 className="text-2xl font-bold tracking-tight tb:text-3xl">{title}</h2>
      <p className="mt-3 text-sm text-neutral-500 tb:text-base">{subtitle}</p>
    </div>
  );
}

export default function RecoveryLanding() {
  const [situation, setSituation] = useState(0);
  const [faq, setFaq] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState<number | null>(null);
  const [priceTab, setPriceTab] = useState<"device" | "allInOne">("device");

  return (
    <div className="w-full bg-white text-neutral-800">
      <div className="flex flex-col">
      <section className={`${section} order-2`}>
        <div className={inner}>
          <Heading title={CONTENT.devices.title} subtitle={CONTENT.devices.subtitle} />
          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden tb:mt-10 tb:block tb:space-y-10 tb:overflow-visible tb:pb-0">
            {CONTENT.devices.items.map((device, deviceIndex) => (
              <article key={device.name} className="grid w-[84vw] max-w-[330px] shrink-0 snap-start gap-5 rounded-2xl border border-neutral-300 bg-white p-4 tb:w-auto tb:max-w-none tb:grid-cols-2 tb:items-center tb:gap-8 tb:p-6">
                <Photo lines={device.photo} className="h-56 tb:h-64" />
                <div className="flex h-full flex-col">
                  <p className="text-[11px] font-semibold tracking-[.16em] text-neutral-500">{device.kicker}</p>
                  <h3 className="mt-3 text-xl font-bold tb:text-2xl">{device.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{device.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {device.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-neutral-700 px-3 py-2 text-xs font-semibold text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedDevice(deviceIndex)}
                    className="mt-7 self-end rounded-full border border-neutral-400 px-4 py-2.5 text-xs font-semibold text-neutral-700 transition hover:bg-neutral-100 tb:mt-auto"
                  >
                    {CONTENT.devices.detailButtonLabel}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${section} order-3 overflow-hidden bg-neutral-100`}>
        <div className={inner}>
          <Heading title="다녀간 사람들의 기록" subtitle="인스타그램에 올라온 방문 후기를 그대로 가져옵니다" />
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {INSTAGRAM_RECORDS.map((record) => (
              <article key={record.handle} className="w-[82vw] max-w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-sm tb:w-[calc((100%_-_32px)/3)] tb:max-w-none dt:w-[calc((100%_-_48px)/4)]">
                <div className="grid aspect-square place-content-center bg-[repeating-linear-gradient(135deg,#fafafa_0_8px,#ededed_8px_16px)] px-5 text-center text-xs leading-6 text-neutral-500">
                  <span className="whitespace-pre-line">{record.photo}</span>
                </div>
                <div className="min-h-[94px] p-4">
                  <p className="text-xs font-bold text-neutral-500">{record.handle}</p>
                  <p className="mt-2 break-keep text-sm leading-6 text-neutral-700">{record.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-neutral-400 bg-white px-6 py-3 text-sm font-semibold transition hover:bg-neutral-200">
              <span aria-hidden="true">◎</span>
              인스타그램에서 더 보기
            </a>
          </div>
        </div>
      </section>

      <section className={`${section} order-1 bg-neutral-100 py-8 tb:py-16 dt:py-20`}>
        <div className={inner}>
          <div className="text-center">
            <h2 className="text-xl font-bold tracking-tight tb:text-3xl">{CONTENT.combinations.title}</h2>
            <p className="mt-2 text-xs leading-5 text-neutral-500 tb:mt-3 tb:text-base tb:leading-7">
              {CONTENT.combinations.subtitle}
              <br className="hidden tb:block" />
              <span className="hidden tb:inline">{CONTENT.combinations.guidancePrefix}<strong>{CONTENT.combinations.guidanceStrong}</strong></span>
            </p>
          </div>
          <div className="mt-4 flex flex-nowrap justify-start gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden tb:mt-9 tb:flex-wrap tb:justify-center tb:gap-2.5 tb:overflow-visible tb:pb-0">
            {CONTENT.combinations.situations.map((item, index) => (
              <button
                key={item}
                onClick={() => setSituation(index)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition tb:px-6 tb:py-3 tb:text-sm ${situation === index ? "border-neutral-700 bg-neutral-700 text-white" : "border-neutral-300 bg-white hover:border-neutral-500"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-3 overflow-hidden rounded-[20px] border border-neutral-300 bg-white tb:mt-7 tb:rounded-[24px]">
            <div className="relative grid min-h-[260px] overflow-hidden tb:min-h-0 tb:grid-cols-[1fr_290px] tb:items-center tb:gap-7 tb:p-8">
              <div className="absolute inset-0 z-10 order-2 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 text-white tb:static tb:order-1 tb:block tb:bg-none tb:p-0 tb:text-neutral-800">
                <div className="flex flex-wrap items-center gap-2">
                  {CONTENT.combinations.combos[situation].steps.map((step) => (
                    <span key={step} className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-neutral-800 tb:bg-neutral-200 tb:text-neutral-700">{step}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-base font-bold tb:mt-7 tb:text-2xl">{CONTENT.combinations.combos[situation].courseTitle}</h3>
                <p className="mt-2 line-clamp-2 max-w-[720px] text-xs leading-5 text-white/85 tb:mt-4 tb:line-clamp-none tb:text-base tb:leading-7 tb:text-neutral-600">{CONTENT.combinations.combos[situation].courseDescription}</p>
                <a href="#contact" className="mt-3 inline-flex self-start rounded-full border border-white/70 px-4 py-2 text-[11px] font-semibold text-white transition hover:bg-white/10 tb:mt-7 tb:border-neutral-400 tb:px-5 tb:py-3 tb:text-xs tb:text-neutral-800 tb:hover:bg-neutral-100">더 알아보기</a>
              </div>
              <div className="absolute inset-0 order-1 tb:static tb:order-2">
                <Photo lines={CONTENT.combinations.combos[situation].photo} className="h-full min-h-0 rounded-none border-0 tb:h-40 tb:rounded-xl tb:border" />
              </div>
            </div>
            <div className="border-t border-neutral-200 bg-neutral-50 p-3 tb:p-8">
              <div className="flex flex-col gap-2 tb:flex-row tb:items-center tb:justify-between">
                <h3 className="text-sm font-bold tb:text-lg">이 목적으로 받은 후기</h3>
                <p className="hidden text-xs text-neutral-500 tb:block">선택한 목적으로 방문한 회원 후기</p>
              </div>
              <div className="mt-2 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden tb:mt-6 tb:grid tb:grid-cols-2 tb:gap-10 tb:overflow-visible tb:pb-0">
                {COMBINATION_REVIEWS[situation].map((review, reviewIndex) => (
                  <figure key={review.label} className={`m-0 w-full shrink-0 snap-start rounded-xl border border-neutral-200 bg-white p-3 tb:w-auto tb:rounded-none tb:border-0 tb:bg-transparent tb:p-0 ${reviewIndex > 0 ? "hidden tb:block" : ""}`}>
                    <div className="flex items-center gap-3 text-xs font-bold text-neutral-600">
                      <span className="tracking-[.12em]">★★★★★</span>
                      <span>{review.label}</span>
                    </div>
                    <blockquote className="mt-2 line-clamp-2 text-xs leading-5 text-neutral-700 tb:mt-4 tb:line-clamp-none tb:text-base tb:leading-7">{review.body}</blockquote>
                    <figcaption className="mt-2 text-[11px] text-neutral-500 tb:mt-4 tb:text-xs">{review.meta}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <section className={section}>
        <div className={inner}>
          <div className="mb-10 flex justify-center">
            <div className="inline-flex rounded-full border border-neutral-300 bg-neutral-100 p-1">
              <button type="button" onClick={() => setPriceTab("device")} className={`rounded-full px-7 py-3 text-sm font-bold transition ${priceTab === "device" ? "bg-neutral-700 text-white shadow-sm" : "text-neutral-500"}`}>기기</button>
              <button type="button" onClick={() => setPriceTab("allInOne")} className={`rounded-full px-7 py-3 text-sm font-bold transition ${priceTab === "allInOne" ? "bg-neutral-700 text-white shadow-sm" : "text-neutral-500"}`}>올인원</button>
            </div>
          </div>

          {priceTab === "device" ? (
          <div>
            <p className="text-center text-[11px] font-bold tracking-[.18em] text-neutral-500">{CONTENT.passes.trialEyebrow}</p>
            <h2 className="mt-3 text-center text-2xl font-bold tracking-tight tb:text-3xl">{CONTENT.passes.trialTitle}</h2>
            <div className="mt-7 grid grid-cols-2 gap-3 tb:grid-cols-5">
              {CONTENT.passes.trials.map((trial) => (
                <article key={trial.name} className="rounded-2xl border border-neutral-300 bg-white p-4 last:col-span-2 tb:p-5 tb:last:col-span-1">
                  <p className="text-sm font-bold text-neutral-800">{trial.name}</p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">{trial.desc}</p>
                  {trial.duration && (
                    <p className="mt-2 text-[11px] text-neutral-400">※시술 시간은 {trial.duration}입니다.</p>
                  )}
                  <p className="mt-4 text-xs text-neutral-400 line-through">{trial.originalPrice}</p>
                  <p className="mt-1 text-lg font-bold tracking-tight text-neutral-900 tb:text-xl">
                    {trial.discountPercent} {trial.price}
                  </p>
                </article>
              ))}
            </div>
          </div>
          ) : (
          <div>
          <Heading title={CONTENT.passes.allInOneTitle} subtitle="" />
          <div className="mx-auto mt-9 grid max-w-[720px] gap-4 tb:grid-cols-2">
            {CONTENT.passes.allInOnePackages.map((pkg) => (
              <article key={pkg.name} className="rounded-2xl border border-neutral-300 p-6">
                <h3 className="text-lg font-bold">{pkg.name}</h3>
                <p className="mt-2 text-xs text-neutral-500">시술시간 {pkg.duration}</p>
                <p className="mt-5 text-xs text-neutral-400 line-through">정가 {pkg.originalPrice}</p>
                <p className="mt-1 text-xl font-bold text-neutral-900">
                  ({pkg.discountPercent} OFF) 특가 {pkg.salePrice}
                </p>
                <p className="mt-4 text-xs font-semibold text-neutral-600">
                  프로그램 구성: [{pkg.composition.join("+")}]
                </p>
                <div className="mt-4 space-y-2 text-left text-sm leading-relaxed text-neutral-600">
                  {pkg.description.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          </div>
          )}
        </div>
      </section>
      <section className={`${section} bg-neutral-100`}>
        <div className={inner}>
          <div className="flex flex-col gap-3">
            <Text as="span" size="xs" weight="bold" className="italic tracking-[.16em] text-neutral-500">
              {CONTENT.roadmap.eyebrow}
            </Text>
            <Text as="h2" size="3xl" weight="bold" className="max-w-[760px] break-keep leading-[1.4] text-neutral-900">
              {CONTENT.roadmap.title}
            </Text>
            <Text size="md" className="max-w-[620px] break-keep leading-7 text-neutral-500">
              {CONTENT.roadmap.description}
            </Text>
          </div>
          <ProcessRoadmap steps={CONTENT.roadmap.steps} surfaceClassName="bg-neutral-100" />
        </div>
      </section>
      <section className={`${section} bg-neutral-100`}>
        <div className={inner}>
          <Heading title={CONTENT.faq.title} subtitle="" />
          <div className="mt-8 divide-y divide-neutral-300 border-y border-neutral-300">
            {[CONTENT.faq.openedQuestion, ...CONTENT.faq.questions].map((question, index) => (
              <div key={question}>
                <button onClick={() => setFaq(faq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold tb:text-base">
                  <span>{question.replace(/^[▼▶]\s*/, "")}</span>
                  <span>{faq === index ? "−" : "+"}</span>
                </button>
                {faq === index && (
                  <div className="pb-5 text-sm leading-7 text-neutral-600">
                    {index === 0 ? (
                      <>
                        {CONTENT.faq.openedAnswer} <strong>{CONTENT.faq.openedWarning}</strong>
                      </>
                    ) : (
                      "답변 내용이 들어갈 자리입니다."
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={`${inner} text-center`}>
          <Heading title={CONTENT.cta.title} subtitle={CONTENT.cta.subtitle} />
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-neutral-700 px-6 py-3 text-sm font-semibold text-white">{CONTENT.cta.primaryLabel}</button>
            <button className="rounded-full border border-neutral-500 px-6 py-3 text-sm font-semibold">{CONTENT.cta.secondaryLabel}</button>
          </div>
        </div>
      </section>
      <Modal
        open={selectedDevice !== null}
        title={selectedDevice === null ? "" : CONTENT.devices.items[selectedDevice].name}
        closeLabel={CONTENT.devices.modalCloseLabel}
        onClose={() => setSelectedDevice(null)}
      >
        <div className="grid aspect-video place-items-center rounded-xl border border-dashed border-neutral-400 bg-neutral-100 text-sm font-semibold text-neutral-500">
          {CONTENT.devices.modalVideoLabel}
        </div>
      </Modal>
    </div>
  );
}
