"use client";

/**
 * 개선안(NEW) 메인 페이지 — 피그마 WIM-Center-DESIGN 시안 구현
 *
 * - 모바일: 메인_MO_1 (360 기준) / PC: 메인_PC (1440, 콘텐츠 1280 기준)
 * - 색상은 globals.css @theme 팔레트 토큰만 사용 (primary-*, gray-*, black, white)
 * - 문구·카드 데이터는 content/home-new.ts 에서 수정
 * - 이미지·아이콘은 public/images/home-new (피그마 export 원본)
 */

import { useEffect, useRef, useState } from "react";
import {
  WIM_NEW_COPY,
  WIM_NEW_TESTS,
  WIM_NEW_CARES,
  WIM_NEW_NUMBERS,
  WIM_NEW_RATINGS,
  WIM_NEW_REVIEWS,
  WIM_NEW_PROGRAMS,
  WIM_NEW_ICONS,
  type WimNewTest,
  type WimNewCare,
} from "@/content/home-new";

const FONT_CSS = `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400&display=swap");`;

/**
 * 사진 위에 얹는 멀티플라이 레이어 — 색이라기보다 이미지 보정값이라
 * 팔레트 토큰이 아니라 여기 모아 둔다. 톤을 바꾸려면 이 네 줄만 손대면 된다.
 */
const HERO_SCRIM = "pointer-events-none absolute inset-0 mix-blend-multiply bg-[#939393] tb:bg-[#6b6b6b]";
const TILE_SCRIM =
  "pointer-events-none absolute inset-0 mix-blend-multiply bg-gradient-to-b from-[#e0e0e0] from-[16.588%] to-[#282828] to-[91.169%]";
const CARE_SCRIM =
  "pointer-events-none absolute inset-0 mix-blend-multiply bg-gradient-to-b from-[#e0e0e0] from-[16.588%] to-[#666666] to-[91.169%]";
const PROGRAM_SCRIM =
  "pointer-events-none absolute inset-0 mix-blend-multiply bg-gradient-to-b from-[#d1d1d1] from-[47.378%] to-[#234d35] to-[94.125%]";

/**
 * 사진이 없는 카드는 시안대로 그라데이션만 깔린다.
 * mobileSrc가 있으면 PC와 다른 사진을 breakpoint로 전환한다.
 */
function CardPhoto({
  src,
  mobileSrc,
  alt,
  position,
}: {
  src?: string;
  mobileSrc?: string;
  alt: string;
  position?: string;
}) {
  if (!src) return <div className="absolute inset-0 bg-primary-sub-01" />;
  if (mobileSrc) {
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본을 그대로 쓰는 정적 에셋 */}
        <img
          src={mobileSrc}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover tb:hidden"
          style={position ? { objectPosition: position } : undefined}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본을 그대로 쓰는 정적 에셋 */}
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 hidden h-full w-full object-cover tb:block"
          style={position ? { objectPosition: position } : undefined}
        />
      </>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- 피그마 원본을 그대로 쓰는 정적 에셋
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      style={position ? { objectPosition: position } : undefined}
    />
  );
}

function Eyebrow({ text, tone = "green" }: { text: string; tone?: "green" | "gray" | "light" }) {
  const color = tone === "green" ? "text-primary-main" : tone === "light" ? "text-gray-01" : "text-black";
  return <span className={`block text-mo-franklin-book-body-02 ${color}`}>{text}</span>;
}

/** 섹션 공통 — 모바일 20px 사이드 여백, PC 1280 컨테이너 */
function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full tb:max-w-[688px] dt:max-w-[1280px] ${className}`}>{children}</div>;
}

function Lines({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((line, i) => (
        <span key={line}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

/**
 * STEP 구분 세로 바 — 시안상 모바일과 PC의 구조가 다르다.
 *   모바일: 라벨 위에 따로 선다 (45px 고정)
 *   태블릿·PC: 라벨+제목 왼쪽에 붙어 그 높이만큼 늘어난다
 */
function StepDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-[45px] w-1 shrink-0 rounded-full bg-primary-main tb:h-[125px] tb:w-2 tb:self-stretch ${className}`}
    />
  );
}

/** 검사 카드 클릭 시 뜨는 상세 모달 */
function TestDetailModal({ test, onClose }: { test: WimNewTest; onClose: () => void }) {
  const { detail } = test;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="test-modal-title"
        className="relative w-full max-w-[340px] rounded-[16px] bg-white px-[29px] pb-[37px] pt-[60px] shadow-[0_2px_9px_rgba(0,0,0,0.45)] dt:w-[418px] dt:max-w-none dt:px-[38px] dt:pb-[64px] dt:pt-[70px]"
        onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-[19px] top-[19px] grid h-[24px] w-[24px] cursor-pointer place-items-center rounded-full border-0 bg-gray-01 text-white transition hover:bg-gray-02">
          <span className="text-[16px] font-light leading-none">×</span>
        </button>
        <div className="flex flex-col">
          <h3
            id="test-modal-title"
            className="break-keep pr-8 text-primary-main text-pretendard-bold-headline-03 dt:font-pretendard dt:text-[26px] dt:font-bold dt:leading-[150%]">
            {detail.title}
          </h3>
          <p className="mt-[18px] break-keep text-black text-mo-pretendard-regular-body-02 dt:font-pretendard dt:text-[16px] dt:font-normal dt:leading-[150%]">
            <Lines items={detail.descLines} />
          </p>
          <div className="mt-[35px]">
            <div className="flex flex-wrap gap-[6px]">
              {detail.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[4px] bg-primary-sub-03 px-[10px] py-[6px] text-primary-main text-mo-pretendard-regular-body-03 dt:inline-flex dt:h-[35px] dt:items-center dt:justify-center dt:gap-[10px] dt:px-[15px] dt:py-[5px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 관리 카드 클릭 시 뜨는 상세 모달 */
function CareDetailModal({ care, onClose }: { care: WimNewCare; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="care-modal-title"
        className="relative w-[280px] rounded-[16px] bg-primary-sub-03 px-[30px] pb-[37px] pt-[44px] shadow-[0_2px_9px_rgba(0,0,0,0.45)] tb:w-full tb:max-w-[386px] dt:w-[500px] dt:max-w-none dt:pb-[60px] dt:pt-[62px]"
        onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-[14px] top-[14px] grid h-[24px] w-[24px] cursor-pointer place-items-center rounded-full border-0 bg-primary-sub-02 text-white transition hover:opacity-80 dt:right-[19px] dt:top-[19px] dt:h-[30px] dt:w-[30px]">
          <span className="text-[16px] font-light leading-none dt:text-[20px]">×</span>
        </button>

        <h3
          id="care-modal-title"
          className="break-keep pr-8 text-primary-main text-pretendard-bold-headline-03 dt:font-pretendard dt:text-[26px] dt:font-bold dt:leading-[150%]">
          {care.detail.title}
        </h3>
        <p className="mt-[10px] break-keep text-black text-mo-pretendard-regular-body-02 dt:mt-3 dt:font-pretendard dt:text-[16px] dt:font-normal dt:leading-[150%]">
          {care.detail.description}
        </p>
        <div className="mt-7 dt:mt-7">
          <div className="flex flex-wrap gap-[6px]">
            {care.detail.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[4px] bg-white px-[10px] py-[6px] text-primary-main text-mo-pretendard-regular-body-03 dt:inline-flex dt:h-[35px] dt:items-center dt:justify-center dt:gap-[10px] dt:px-[15px] dt:py-[5px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WimMainNew() {
  const COPY = WIM_NEW_COPY;
  const visibleReviews = WIM_NEW_REVIEWS.slice(0, 7);
  const reviewCenterIndex = Math.floor(visibleReviews.length / 2);

  const careTrackRef = useRef<HTMLDivElement>(null);
  const [careActive, setCareActive] = useState(0);
  /**
   * 오른쪽 끝에 걸친 카드의 인덱스. 그 뒤에 카드가 더 있을 때만 값이 잡히고,
   * 그 카드는 화면 끝까지 늘어나며 블러 처리돼 "더 있다"는 신호를 준다.
   * 끝까지 스크롤해 뒤에 카드가 없으면 -1 이 되어 평범한 카드로 돌아간다.
   */
  const [carePeek, setCarePeek] = useState<{ index: number; width: number }>({ index: -1, width: 0 });
  const [activeTest, setActiveTest] = useState<WimNewTest | null>(null);
  const [activeCare, setActiveCare] = useState<WimNewCare | null>(null);

  const careStep = () => {
    const track = careTrackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 15 : 0;
  };
  const updateCareActive = () => {
    const track = careTrackRef.current;
    const step = careStep();
    if (!track || !step) return;
    setCareActive(Math.min(WIM_NEW_CARES.length - 1, Math.round(track.scrollLeft / step)));
    setCarePeek(computeCarePeek());
  };

  /**
   * 늘어난 카드 폭에 영향받지 않도록, 기본 카드 폭(첫 카드) 기준으로 계산한다.
   * 이렇게 해야 늘어남 → 위치 이동 → 다시 계산이 서로 물려 깜빡이지 않는다.
   */
  const computeCarePeek = () => {
    const track = careTrackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return { index: -1, width: 0 };
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const step = first.offsetWidth + gap;
    if (!step) return { index: -1, width: 0 };

    // 판정은 "컨테이너 폭" 기준 — 트랙은 화면 끝까지 열려 있으므로(pr-*) 그만큼 뺀다.
    // 그래야 컨테이너 안에 마지막으로 걸치는 카드(예: 04번)가 대상이 된다.
    const padRight = parseFloat(getComputedStyle(track).paddingRight || "0") || 0;
    const contentRight = track.scrollLeft + track.clientWidth - padRight;
    const lastVisible = Math.floor((contentRight - 1) / step);
    if (lastVisible >= WIM_NEW_CARES.length - 1) return { index: -1, width: 0 };

    // 늘어나는 끝은 "화면 끝"까지
    const cardLeft = lastVisible * step;
    const screenRight = track.scrollLeft + track.clientWidth;
    const w = Math.max(first.offsetWidth * 1.25, screenRight - cardLeft);
    return { index: lastVisible, width: Math.round(w) };
  };

  // 처음 그려질 때와 화면 폭이 바뀔 때도 다시 계산한다.
  // (카드가 다 들어와 스크롤이 없으면 늘어나는 카드도 없다)
  useEffect(() => {
    const track = careTrackRef.current;
    const sync = () => setCarePeek(computeCarePeek());
    sync();
    // 창 크기뿐 아니라 컨테이너 폭이 바뀌는 경우(폰트 로드 등)도 잡는다
    const observer = new ResizeObserver(sync);
    if (track) observer.observe(track);
    window.addEventListener("resize", sync);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <div className="bg-white text-black antialiased">
      <style dangerouslySetInnerHTML={{ __html: FONT_CSS }} />

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative isolate flex h-[460px] flex-col items-center justify-center overflow-hidden text-center tb:h-[640px]">
        {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
        <img
          src={COPY.hero.imageMobile}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover blur-[2px] tb:hidden"
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
        <img
          src={COPY.hero.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover blur-[2px] tb:block"
        />
        {/* <div className={HERO_SCRIM} /> */}

        <div className="relative flex flex-col items-center px-5">
          <h1 className="break-keep text-white text-mo-pretendard-bold-headline-02 tb:text-pretendard-bold-display-01">
            <Lines items={COPY.hero.titleLines} />
          </h1>
          <p className="mt-[18px] text-white tb:mt-[26px] text-mo-pretendard-regular-body-03 tb:text-pretendard-regular-headline-02">
            {COPY.hero.sub}
          </p>

          <div className="mt-12 flex flex-col items-center gap-2.5 tb:mt-[76px] tb:flex-row tb:gap-[18px]">
            <a
              href="#contact"
              className="flex h-[35px]  items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-primary-main from-[39.892%] to-primary-accent text-white no-underline transition hover:opacity-90 tb:h-[50px] px-[23px] tb:bg-none tb:bg-primary-sub-02 tb:text-primary-main text-mo-pretendard-bold-body-03 tb:text-pretendard-medium-headline-03">
              {COPY.hero.primaryCta}
              {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
              <img src={WIM_NEW_ICONS.arrow} alt="" aria-hidden="true" className="h-[11px] w-[11px] tb:hidden" />
              {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
              <img
                src={WIM_NEW_ICONS.arrowGreen}
                alt=""
                aria-hidden="true"
                className="hidden h-[17px] w-[17px] tb:block"
              />
            </a>
            <a
              href="#services"
              className="flex w-[170px]  h-[35px] items-center justify-center rounded-full border border-white text-white no-underline transition hover:bg-white/10 tb:h-[50px] tb:px-6 tb:border-[1.5px] text-mo-pretendard-medium-body-03 tb:text-pretendard-medium-headline-03 tb:w-[200px]">
              {COPY.hero.secondaryCta}
            </a>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
        <img
          src={WIM_NEW_ICONS.chevron}
          alt=""
          aria-hidden="true"
          className="absolute bottom-[60px] left-1/2 h-[10px] w-[32px] -translate-x-1/2 tb:bottom-24 tb:h-[23px] tb:w-[33px]"
        />
      </section>

      {/* ─────────────── INTRO ─────────────── */}
      <section className="bg-white px-5 py-[54px] tb:py-[110px]">
        <Container className="flex flex-col gap-[30px] dt:flex-row dt:items-center dt:gap-[60px]">
          <div className="flex flex-col dt:flex-1">
            <span className="text-gray-02 tb:text-gray-03 text-mo-pretendard-regular-body-03 tb:text-pretendard-regular-body-02">
              {COPY.intro.eyebrow}
            </span>
            <h2 className="mt-2 break-keep text-primary-main tb:mt-[9px] text-mo-pretendard-bold-headline-01 tb:text-pretendard-bold-display-01">
              <Lines items={COPY.intro.titleLines} />
            </h2>
            <p className="mt-[28px] break-keep text-black tb:mt-[36px] text-mo-pretendard-medium-body-03 tb:text-pretendard-medium-headline-03">
              <Lines items={COPY.intro.descLines} />
            </p>
          </div>
          <div className="relative aspect-[320/200] w-full overflow-hidden rounded-[7px] dt:aspect-[640/360] dt:w-[640px] dt:shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
            <img
              src={COPY.intro.image}
              alt={COPY.intro.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* ─────────────── STEP 01 / STEP 02 ─────────────── */}
      <section id="services" className="bg-gray-00 px-5 pb-[54px] pt-[38px] tb:pb-[110px] tb:pt-[80px]">
        <Container>
          {/* 브랜드 선언 */}
          <p className="break-keep text-black">
            <span className="tb:hidden text-mo-pretendard-medium-headline-03">
              <Lines items={COPY.philosophy.normalLines} />
            </span>
            <br className="tb:hidden" />
            <span className="tb:hidden text-mo-pretendard-bold-headline-03">
              <Lines items={COPY.philosophy.boldLines} />
            </span>
            <span className="hidden tb:inline text-pretendard-medium-display-01">
              {COPY.philosophy.normalLines.join(" ")}
            </span>
            <br className="hidden tb:inline" />
            <span className="hidden tb:inline text-pretendard-bold-display-01">
              {COPY.philosophy.boldLines.join(" ")}
            </span>
          </p>

          {/* STEP 01 — 6가지 검사 */}
          <div className="mt-[26px] flex flex-col items-start gap-[26px] tb:mt-[34px] tb:flex-row tb:items-end tb:gap-5">
            <StepDivider />
            <div className="min-w-0 flex-1">
              <Eyebrow text={COPY.step1.label} tone="gray" />
              <h2 className="mt-1.5 break-keep text-primary-main text-mo-pretendard-bold-headline-01 tb:text-pretendard-bold-display-02">
                {COPY.step1.title}
              </h2>
            </div>
          </div>

          <ul className="mt-[43px] grid list-none grid-cols-2 gap-[10px] p-0 tb:gap-[15px] dt:grid-cols-3 dt:gap-[13px]">
            {WIM_NEW_TESTS.map((test) => (
              <li
                key={test.title}
                className="relative isolate aspect-[155/170] overflow-hidden rounded-[10px] dt:aspect-[418/330] dt:rounded-[20px]">
                <button
                  type="button"
                  onClick={() => setActiveTest(test)}
                  aria-label={`${test.title} 자세히 보기`}
                  className="absolute inset-0 h-full w-full cursor-pointer text-left">
                  <CardPhoto
                    src={test.image}
                    mobileSrc={test.imageMobile}
                    alt={test.imageAlt}
                    position={test.position}
                  />

                  {/* 모바일: 우상단 + 아이콘 / PC: 우상단 자세히 보기 */}
                  {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
                  <img
                    src={WIM_NEW_ICONS.plus}
                    alt=""
                    aria-hidden="true"
                    className="absolute right-[12px] top-[12px] h-[20px] w-[20px] dt:hidden"
                  />
                  <span className="absolute right-[32px] top-[35px] hidden flex-col items-end font-pretendard text-[14px] font-normal text-white dt:flex">
                    <span className="flex items-center gap-[7px]">
                      {COPY.step1.detailLabel.replace("-->", "").trim()}
                      {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
                      <img src={WIM_NEW_ICONS.arrow} alt="" aria-hidden="true" className="h-[12px] w-[12px]" />
                    </span>
                    <span className="mt-[6px] h-px w-[86px] bg-gradient-to-r from-white/10 to-white" />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 flex flex-col px-[16px] pb-[16px] dt:px-[32px] dt:pb-[30px]">
                    <h3 className="break-keep text-white text-mo-pretendard-bold-body-02 dt:text-pretendard-bold-title-02">
                      {test.title === "자율 신경 및 스트레스 측정" ? (
                        <>
                          <span className="dt:hidden">
                            자율 신경 및<br />
                            스트레스 측정
                          </span>
                          <span className="hidden dt:inline">{test.title}</span>
                        </>
                      ) : (
                        test.title
                      )}
                    </h3>
                    <p className="mt-[6px] break-keep text-[13px] text-white dt:mt-2.5 dt:text-pretendard-regular-body-02">
                      <span className="dt:hidden">
                        <Lines items={test.lines} />
                      </span>
                      <span className="hidden dt:inline">{test.lines.join(" ")}</span>
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {/* STEP 02 — 관리 캐러셀 */}
          <div className="mt-[26px] flex flex-col items-start gap-[26px] tb:mt-[34px] tb:flex-row tb:items-end tb:gap-5">
            <StepDivider className="hidden tb:block" />
            <div className="min-w-0 flex-1">
              <Eyebrow text={COPY.step2.label} tone="gray" />
              <h2 className="mt-1.5 break-keep text-primary-main text-mo-pretendard-bold-headline-01 tb:text-pretendard-bold-display-02">
                {COPY.step2.title}
              </h2>
            </div>
            {/* 모바일에서는 캐러셀 아래에 따로 노출한다 */}
            <span className="hidden shrink-0 self-end text-primary-main text-mo-pretendard-regular-body-03 dt:block">
              {COPY.step2.swipeHint}
            </span>
          </div>

          <div
            ref={careTrackRef}
            onScroll={updateCareActive}
            className="mt-[36px] mr-[calc(50%-50vw)] flex snap-x snap-mandatory gap-[10px] overflow-x-auto pb-3 pr-[calc(50vw-50%)] [scrollbar-width:none] tb:gap-[15px] [&::-webkit-scrollbar]:hidden">
            {WIM_NEW_CARES.map((care, careIndex) => {
              // 마지막 카드는 끝에 닿기 전까지 옆으로 늘어나 "더 있다"는 신호를 준다.
              // 높이는 aspect 대신 h-* 로 고정해서, 폭이 변해도 줄 높이가 흔들리지 않는다.
              const isPeek = careIndex === carePeek.index;
              return (
              <button
                type="button"
                key={care.no}
                onClick={() => setActiveCare(care)}
                aria-label={`${care.title} 자세히 보기`}
                style={{
                  filter: isPeek ? "blur(3px)" : "blur(0px)",
                  ...(isPeek ? { width: carePeek.width } : null),
                }}
                className={`relative isolate h-[150px] shrink-0 cursor-pointer snap-start overflow-hidden rounded-[10px] border-0 p-0 text-left font-inherit transition-[filter] duration-300 ease-out tb:h-[246px] dt:h-[357px] dt:rounded-[20px] ${
                  isPeek ? "" : "w-[205px] tb:w-[calc((100%-15px)/2)] dt:w-[calc((100%-45px)/4)]"
                }`}>
                <CardPhoto src={care.image} mobileSrc={care.imageMobile} alt={care.imageAlt} />
                <div className={CARE_SCRIM} />

                <span className="absolute left-[16px] top-[12px] text-white dt:left-[32px] dt:top-[18px] text-mo-pretendard-bold-body-02 dt:text-pretendard-bold-display-01">
                  {care.no}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
                <img
                  src={WIM_NEW_ICONS.plus}
                  alt=""
                  aria-hidden="true"
                  className="absolute right-[12px] top-[12px] h-[20px] w-[20px] dt:hidden"
                />

                <div className="absolute inset-x-0 bottom-0 flex flex-col px-[16px] pb-[16px] dt:px-[32px] dt:pb-[37px]">
                  <h3 className="break-keep text-white text-mo-pretendard-bold-body-02 dt:text-pretendard-bold-title-02">
                    {care.title}
                  </h3>
                  <p className="mt-[6px] break-keep text-[13px] text-white dt:mt-[8px] dt:text-pretendard-regular-body-02">
                    {care.line}
                  </p>
                  <span className="mt-[14px] hidden flex-col text-white dt:flex text-mo-pretendard-regular-body-03">
                    {COPY.step2.detailLabel}
                    <span className="mt-[6px] h-px w-[86px] bg-gradient-to-r from-white/10 to-white" />
                  </span>
                </div>
              </button>
              );
            })}
          </div>

          <div className="mt-[10px] flex items-center justify-center gap-2 dt:hidden" aria-hidden="true">
            {WIM_NEW_CARES.map((care, index) => (
              <span
                key={care.no}
                className={`h-[5px] rounded-full transition-all ${careActive === index ? "w-[24px] bg-primary-main" : "w-[5px] bg-gray-01"}`}
              />
            ))}
          </div>
          {/* <p className="mt-[10px] text-center text-[13px] leading-[1.5] text-gray-02 dt:hidden">
            {COPY.step2.swipeHint}
          </p> */}
        </Container>
      </section>

      {/* ─────────────── RESULTS · REVIEWS ─────────────── */}
      <section className="bg-[linear-gradient(180deg,#2F5F44_47.65%,#20362A_100%)] px-5 py-[48px] tb:py-[60px]">
        <Container>
          {/* RESULTS */}
          <div className="flex flex-col items-center text-center">
            <Eyebrow text={COPY.results.eyebrow} tone="light" />
            <h2 className="mt-2 break-keep text-white tb:mt-4 text-mo-pretendard-bold-headline-01 tb:text-pretendard-bold-display-01">
              {COPY.results.title}
            </h2>
            <p className="mt-[18px] break-keep text-gray-02 tb:mt-8 tb:opacity-55 text-mo-pretendard-regular-body-03 tb:text-pretendard-regular-headline-03">
              <span className="tb:hidden">
                <Lines items={COPY.results.footnoteLines} />
              </span>
              <span className="hidden tb:inline">{COPY.results.footnoteLines.join(" ")}</span>
            </p>
          </div>

          <ul className="mt-[42px] grid list-none grid-cols-2 gap-[10px] p-0 tb:mt-12 tb:gap-[16px] dt:grid-cols-4">
            {WIM_NEW_NUMBERS.map((n) => (
              <li
                key={n.label}
                className="flex h-[80px] flex-col items-center justify-center rounded-[10px] bg-white shadow-[0_4px_7.3px_rgba(0,0,0,0.15)] tb:h-[165px] tb:rounded-[20px] pb-1">
                <span className="flex items-baseline gap-1">
                  <span
                    className={`text-primary-main ${n.small ? "text-mo-pretendard-bold-headline-01 tb:text-[50px]" : "text-mo-pretendard-bold-title-02 tb:text-[56px]"}`}>
                    {n.value}
                  </span>
                  {n.unit ? (
                    <span className="text-gray-02 tb:text-[32px] text-mo-pretendard-semibold-body-02">{n.unit}</span>
                  ) : null}
                </span>
                <span className="mt-[2px] break-keep text-primary-main  text-mo-pretendard-semibold-body-03 tb:text-pretendard-medium-headline-01">
                  {n.label}
                </span>
              </li>
            ))}
          </ul>

          <ul className="mt-[20px] flex list-none flex-wrap justify-center gap-[8px] p-0 tb:mt-[30px] tb:gap-[14px]">
            {WIM_NEW_RATINGS.map((r) => (
              <li
                key={r.label}
                className="flex h-[26px] items-center justify-center rounded-full border-[0.75px] border-gray-01 px-[13px] text-gray-01 tb:h-[36px] tb:px-[21px] text-mo-pretendard-regular-body-03 tb:text-pretendard-medium-headline-03">
                {r.label}&nbsp;
                <span className="font-pretendard-semibold tb:font-pretendard-bold">{r.value}</span>
              </li>
            ))}
          </ul>

          {/* REVIEWS */}
          <div className="mt-[72px] flex flex-col items-center text-center tb:mt-[110px]">
            <Eyebrow text={COPY.reviews.eyebrow} tone="light" />
            <h2 className="mt-[10px] break-keep text-white tb:mt-6 text-mo-pretendard-bold-headline-01 tb:text-pretendard-bold-display-01">
              <span className="tb:hidden">
                <Lines items={COPY.reviews.titleLines} />
              </span>
              <span className="hidden tb:inline">{COPY.reviews.titleLines.join(" ")}</span>
            </h2>
            <p className="mt-[16px] break-keep text-white tb:mt-7 text-mo-pretendard-regular-body-03 tb:text-pretendard-medium-headline-03">
              {COPY.reviews.sub}
            </p>
          </div>

          <div className="relative mt-[50px] tb:left-1/2 tb:w-screen tb:-translate-x-1/2 tb:overflow-hidden tb:mt-16">
            <ul className="flex list-none flex-col gap-[10px] p-0 tb:mx-auto tb:w-max tb:flex-row tb:gap-[12px] tb:pb-3">
              {visibleReviews.map((review, index) => (
                <li
                  key={review.tag}
                  className={`flex min-h-[110px] flex-col rounded-[10px] border border-review-line bg-review-surface p-[14px] tb:min-h-[205px] tb:w-[246px] tb:shrink-0 tb:rounded-[20px] tb:p-[20px] ${
                    Math.abs(index - reviewCenterIndex) === 0
                      ? "tb:bg-review-surface"
                      : Math.abs(index - reviewCenterIndex) === 1
                        ? "tb:bg-[#3E875FB2]"
                        : "tb:bg-review-line"
                  }`}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-[23px] shrink-0 items-center rounded-full border-[0.75px] border-white px-[10px] text-[13px] text-white tb:h-[30px] font-pretendard-medium tb:text-pretendard-medium-body-03">
                      {review.tag}
                    </span>
                    <span className="text-right text-gray-01 tb:hidden text-mo-pretendard-regular-body-03">
                      {review.who}
                    </span>
                  </div>
                  <p className="mt-[16px] break-keep text-white tb:mt-[24px] text-mo-pretendard-semibold-body-03">
                    {review.body}
                  </p>
                  <span className="mt-auto hidden pt-[12px] text-gray-00 tb:block text-mo-pretendard-regular-body-03">
                    {review.who}
                  </span>
                </li>
              ))}
            </ul>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 z-10 hidden h-[205px] w-[120px] bg-primary-deep/25 backdrop-blur-[6px] [-webkit-mask-image:linear-gradient(to_right,#000_0%,#000_12%,transparent_100%)] [mask-image:linear-gradient(to_right,#000_0%,#000_12%,transparent_100%)] tb:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 z-10 hidden h-[205px] w-[120px] bg-primary-deep/25 backdrop-blur-[6px] [-webkit-mask-image:linear-gradient(to_left,#000_0%,#000_12%,transparent_100%)] [mask-image:linear-gradient(to_left,#000_0%,#000_12%,transparent_100%)] tb:block"
            />
          </div>
        </Container>
      </section>

      {/* ─────────────── CASES ─────────────── */}
      <section id="cases" className="bg-white px-5 py-[27px] tb:py-[63px]">
        <Container>
          <div className="rounded-[10px] bg-primary-tint px-5 py-[26px] tb:rounded-[25px] tb:px-[40px] tb:py-[56px] dt:px-[27px]">
            <div className="flex flex-col items-center text-center">
              <Eyebrow text={COPY.cases.eyebrow} tone="gray" />
              <h2 className="mt-[2px] break-keep text-primary-main text-mo-pretendard-bold-headline-01 tb:text-pretendard-bold-display-01">
                <span className="tb:hidden">
                  <Lines items={COPY.cases.titleLines} />
                </span>
                <span className="hidden tb:inline">{COPY.cases.titleLines.join(" ")}</span>
              </h2>
              <p className="mt-[19px] break-keep text-black tb:mt-[43px] tb:text-primary-main text-mo-pretendard-regular-body-03 tb:text-pretendard-medium-headline-03">
                <span className="tb:hidden">
                  <Lines items={COPY.cases.descLines} />
                </span>
                <span className="hidden tb:inline">{COPY.cases.descLines.join(" ")}</span>
              </p>
            </div>

            <ul className="mt-[43px] flex list-none flex-col gap-[11px] p-0 tb:mt-[90px] tb:gap-[20px] dt:flex-row">
              {WIM_NEW_PROGRAMS.map((program) => (
                <li
                  key={program.title}
                  className="relative isolate aspect-[300/200] overflow-hidden rounded-[10px] tb:rounded-[20px] dt:aspect-[395/430] dt:flex-1">
                  <CardPhoto
                    src={program.image}
                    mobileSrc={program.imageMobile}
                    alt={program.imageAlt}
                    position={program.position}
                  />
              

                  {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
                  <img
                    src={WIM_NEW_ICONS.arrowBox}
                    alt=""
                    aria-hidden="true"
                    className="absolute right-[20px] top-[20px] h-[20px] w-[20px] tb:right-[39px] tb:top-[37px] tb:h-[25px] tb:w-[25px]"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex flex-col px-[20px] pb-[20px] tb:px-[39px] tb:pb-[42px]">
                    <h3 className="break-keep text-white text-mo-pretendard-bold-headline-03 tb:text-pretendard-bold-display-02">
                      {program.title}
                    </h3>
                    <p className="mt-[8px] break-keep text-white tb:mt-[16px] text-mo-pretendard-regular-body-03 tb:text-pretendard-regular-body-02">
                      <span className="tb:hidden">{program.descLines.join(" ")}</span>
                      <span className="hidden tb:inline">
                        <Lines items={program.descLines} />
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section id="contact" className="bg-primary-sub-03 px-5 py-[32px] tb:py-[62px]">
        <Container className="flex flex-col items-center text-center">
          <h2 className="break-keep text-primary-main text-mo-pretendard-bold-body-01 tb:text-pretendard-bold-display-01">
            {COPY.cta.title}
          </h2>
          <a
            href="#contact"
            className="mt-[14px] flex h-[26px] items-center justify-center gap-[5px] rounded-full bg-gradient-to-r from-primary-main from-[39.892%] to-primary-accent px-[23px] text-white no-underline transition hover:opacity-90 tb:mt-[28px] tb:h-[50px] tb:gap-[10px] text-mo-pretendard-regular-body-03 tb:text-pretendard-medium-headline-03">
            {COPY.cta.buttonLabel}
            {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
            <img
              src={WIM_NEW_ICONS.arrow}
              alt=""
              aria-hidden="true"
              className="h-[9px] w-[9px] tb:h-[17px] tb:w-[17px]"
            />
          </a>
        </Container>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer className="bg-primary-sub-01 pb-[32px] pt-[36px] tb:pb-[40px] tb:pt-[60px]">
        <div className="mx-auto w-full px-5 dt:max-w-[1440px] dt:px-20">
          {/* 로고 — 푸터 맨 위 */}
          <div className="flex items-end gap-[4px] tb:h-[26px] tb:w-[152px] tb:gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
            <img src={WIM_NEW_ICONS.logoWim} alt="WIM" className="h-[14px] w-[50px] tb:h-full tb:w-auto" />
            {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
            <img src={WIM_NEW_ICONS.logoCenter} alt="Center" className="h-[13px] w-auto tb:h-full tb:w-auto" />
          </div>

          <div className="mt-[28px] tb:mt-[36px]">
            <div className="flex flex-col  gap-[32px] dt:flex-row  dt:gap-10">
              {COPY.footer.info.map((block) => (
                <div key={block.label} className="flex gap-[24px] dt:gap-[25px]">
                  <span className="w-[64px] shrink-0 text-primary-sub-02 tb:w-[75px] text-mo-pretendard-bold-body-03 tb:text-pretendard-bold-body-02">
                    {block.label}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-white text-mo-pretendard-bold-body-03 tb:text-pretendard-bold-body-02">
                      {block.strong}
                    </span>
                    {block.rows.map((row) => (
                      <span
                        key={row.day}
                        className="mt-[8px] flex gap-[16px] tb:gap-[27px] text-mo-pretendard-regular-body-03">
                        <span className="w-[75px] shrink-0 text-white font-semibold">{row.day}</span>
                        <span className="text-gray-01">{row.time}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex gap-[24px] dt:gap-[25px]">
                <span className="w-[64px] shrink-0 text-primary-sub-02 tb:w-[75px] text-mo-pretendard-bold-body-03 tb:text-pretendard-bold-body-02">
                  {COPY.footer.address.label}
                </span>
                <div className="flex flex-col">
                  <span className="break-keep text-white text-mo-pretendard-bold-body-03 tb:text-pretendard-bold-body-02">
                    <span className="dt:hidden">
                      <Lines items={COPY.footer.address.strongLines} />
                    </span>
                    <span className="hidden dt:inline">{COPY.footer.address.strongLines.join(" ")}</span>
                  </span>
                  <span className="mt-[8px] text-white text-mo-pretendard-medium-body-03">
                    {COPY.footer.address.walk}
                  </span>
                  <span className="mt-[8px] text-gray-01 text-mo-pretendard-regular-body-03">
                    {COPY.footer.address.parking}
                  </span>
                </div>
              </div>
            </div>

            {/* SNS — 시안상 가로선 위, 우측 정렬 */}
            <div className="mt-[34px] flex items-center justify-end gap-[6px] tb:mt-[50px] tb:gap-[10px]">
              {WIM_NEW_ICONS.sns.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element -- 피그마 원본
                <img
                  key={src}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="h-[28px] w-[28px] tb:h-[43px] tb:w-[43px]"
                />
              ))}
            </div>

            <div className="mt-[12px] h-px w-full bg-gray-01/40 tb:mt-[22px]" />

            <div className="mt-[11px] flex flex-col gap-[10px] tb:mt-[24px]">
              <div className="flex flex-col gap-[8px]">
                <div className="flex justify-between gap-[11px] text-[11px] text-gray-01 tb:text-pretendard-regular-body-03">
                  <span>{COPY.footer.copyright}</span>
                  <a
                    href="#contact"
                    className="text-gray-01 underline decoration-gray-01 underline-offset-[4px] font-pretendard-bold">
                    {COPY.footer.terms}
                  </a>
                </div>
                <div className="flex flex-wrap gap-x-[14px] gap-y-[4px] text-[9px] text-gray-01 tb:text-pretendard-regular-body-03">
                  {COPY.footer.business.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {activeTest && <TestDetailModal test={activeTest} onClose={() => setActiveTest(null)} />}
      {activeCare && <CareDetailModal care={activeCare} onClose={() => setActiveCare(null)} />}
    </div>
  );
}
