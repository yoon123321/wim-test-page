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
import { Typography } from "@/components/common/Typography";
import { useVariant } from "@/components/common/VariantProvider";
import { useMobileViewportHeight } from "@/components/common/useMobileViewportHeight";
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
  return <Typography font="franklin" mobile="body-02" weight="regular" className={`block ${color}`}>{text}</Typography>;
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
          <Typography
            as="h3"
            id="test-modal-title"
            mobile="headline-03"
            desktop="title-02"
            weight="bold"
            className="break-keep pr-8 text-primary-main">
            {detail.title}
          </Typography>
          <Typography as="p" mobile="body-02" desktop="body-02" className="mt-[18px] break-keep text-black dt:!leading-[150%]">
            <Lines items={detail.descLines} />
          </Typography>
          <div className="mt-[35px]">
            <div className="flex flex-wrap gap-[6px]">
              {detail.tags.map((tag) => (
                <Typography
                  as="span"
                  key={tag}
                  mobile="body-03"
                  className="rounded-[4px] bg-primary-sub-03 px-[10px] py-[6px] text-primary-main dt:inline-flex dt:h-[35px] dt:items-center dt:justify-center dt:gap-[10px] dt:px-[15px] dt:py-[5px]">
                  {tag}
                </Typography>
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

        <Typography
          as="h3"
          id="care-modal-title"
          mobile="headline-03"
          desktop="title-02"
          weight="bold"
          className="break-keep pr-8 text-primary-main">
          {care.detail.title}
        </Typography>
        <Typography as="p" mobile="body-02" desktop="body-02" className="mt-[10px] break-keep text-black dt:mt-3 dt:!leading-[150%]">
          {care.detail.description}
        </Typography>
        <div className="mt-7 dt:mt-7">
          <div className="flex flex-wrap gap-[6px]">
            {care.detail.tags.map((tag) => (
              <Typography
                as="span"
                key={tag}
                mobile="body-03"
                className="rounded-[4px] bg-white px-[10px] py-[6px] text-primary-main dt:inline-flex dt:h-[35px] dt:items-center dt:justify-center dt:gap-[10px] dt:px-[15px] dt:py-[5px]">
                {tag}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** 히어로 A안 — 원본 시안: 전면 배경 사진 위에 가운데 정렬 카피/CTA */
export function HeroA({
  titleLines,
  showSub = true,
  showCta = true,
}: { titleLines?: readonly string[]; showSub?: boolean; showCta?: boolean } = {}) {
  const COPY = WIM_NEW_COPY;
  return (
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
        <Typography as="h1" mobile="headline-02" tablet="display-01" weight="bold" className="break-keep text-white">
          <Lines items={titleLines ?? COPY.hero.titleLines} />
        </Typography>
        {showSub && (
          <Typography as="p" mobile="body-03" tablet="headline-02" className="mt-[18px] text-white tb:mt-[26px]">
            {COPY.hero.sub}
          </Typography>
        )}

        {showCta && (
          <div className="mt-12 flex flex-col items-center gap-2.5 tb:mt-[76px] tb:flex-row tb:gap-[18px]">
            <a
              href="#contact"
              className="flex h-[35px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-primary-main from-[39.892%] to-primary-accent px-[23px] text-white no-underline transition hover:opacity-90 tb:h-[50px] tb:bg-none tb:bg-primary-sub-02 tb:text-primary-main">
              <Typography mobile="body-03" tablet="headline-03" weight="bold" tabletWeight="medium">{COPY.hero.primaryCta}</Typography>
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
              className="flex h-[35px] w-[170px] items-center justify-center rounded-full border border-white text-white no-underline transition hover:bg-white/10 tb:h-[50px] tb:w-[200px] tb:border-[1.5px] tb:px-6">
              <Typography mobile="body-03" tablet="headline-03" weight="medium">{COPY.hero.secondaryCta}</Typography>
            </a>
          </div>
        )}
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
      <img
        src={WIM_NEW_ICONS.chevron}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[60px] left-1/2 h-[10px] w-[32px] -translate-x-1/2 tb:bottom-24 tb:h-[23px] tb:w-[33px]"
      />
    </section>
  );
}

/**
 * 히어로 B안 — A/B 테스트용 대안 레이아웃.
 * 전면 배경 사진 대신 좌(카피+CTA) / 우(사진 카드) 분할 구조,
 * 어두운 배경 위 흰 글자 대신 밝은 배경 위 검정·그린 글자를 쓴다.
 * 카피·CTA 문구는 A안과 동일한 콘텐츠를 그대로 재사용한다.
 */
function HeroB() {
  const COPY = WIM_NEW_COPY;
  const viewportHeight = useMobileViewportHeight();
  return (
    <section
      className="flex h-[calc(100svh-112px)] flex-col justify-center bg-black px-5 tb:h-[640px]"
      style={viewportHeight ? { height: viewportHeight - 112 } : undefined}
    >
      <Container className="flex flex-col items-center text-center">
        <Typography as="p" mobile="body-03" tablet="headline-02" className="text-white/70">
          {COPY.heroB.sub}
        </Typography>
        <Typography as="h1" mobile="headline-02" tablet="display-01" weight="bold" className="mt-[14px] break-keep text-white tb:mt-5">
          <Lines items={COPY.heroB.titleLines} />
        </Typography>
      </Container>
    </section>
  );
}

/** STEP 01 — 6가지 검사 카드 (호출부에서 section/Container로 감싸서 사용) */
export function TestsSection() {
  const COPY = WIM_NEW_COPY;
  const [activeTest, setActiveTest] = useState<WimNewTest | null>(null);
  return (
    <>
      <div className="flex flex-col items-start gap-[26px] tb:flex-row tb:items-end tb:gap-5">
        <StepDivider />
        <div className="min-w-0 flex-1">
          <Eyebrow text={COPY.step1.label} tone="gray" />
          <Typography as="h2" mobile="headline-01" tablet="display-02" weight="bold" className="mt-1.5 break-keep text-primary-main">
            {COPY.step1.title}
          </Typography>
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
              <Typography mobile="body-03" className="absolute right-[32px] top-[35px] hidden flex-col items-end text-white dt:flex">
                <span className="flex items-center gap-[7px]">
                  {COPY.step1.detailLabel.replace("-->", "").trim()}
                  {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
                  <img src={WIM_NEW_ICONS.arrow} alt="" aria-hidden="true" className="h-[12px] w-[12px]" />
                </span>
                <span className="mt-[6px] h-px w-[86px] bg-gradient-to-r from-white/10 to-white" />
              </Typography>

              <div className="absolute inset-x-0 bottom-0 flex flex-col px-[16px] pb-[16px] dt:px-[32px] dt:pb-[30px]">
                <Typography as="h3" mobile="body-02" desktop="title-02" weight="bold" className="break-keep text-white">
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
                </Typography>
                <Typography as="p" mobile="body-03" desktop="body-02" mobileSize={13} className="mt-[6px] break-keep text-white dt:mt-2.5">
                  <span className="dt:hidden">
                    <Lines items={test.lines} />
                  </span>
                  <span className="hidden dt:inline">{test.lines.join(" ")}</span>
                </Typography>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {activeTest && <TestDetailModal test={activeTest} onClose={() => setActiveTest(null)} />}
    </>
  );
}

/** 인트로 섹션 — 소개 카피 + 사진 */
export function IntroSection({
  titleLines,
  showDesc = true,
  showTestChips = false,
}: { titleLines?: readonly string[]; showDesc?: boolean; showTestChips?: boolean } = {}) {
  const COPY = WIM_NEW_COPY;
  return (
    <section className="bg-white px-5 py-[54px] tb:py-[110px]">
      <Container className="flex flex-col gap-[30px] dt:flex-row dt:items-center dt:gap-[60px]">
        <div className="flex flex-col dt:flex-1">
          <Typography mobile="body-03" tablet="body-02" className="text-gray-02 tb:text-gray-03">
            {COPY.intro.eyebrow}
          </Typography>
          <Typography as="h2" mobile="headline-01" tablet="display-01" weight="bold" className="mt-2 break-keep text-primary-main tb:mt-[9px]">
            <Lines items={titleLines ?? COPY.intro.titleLines} />
          </Typography>
          {showDesc && (
            <Typography as="p" mobile="body-03" tablet="headline-03" weight="medium" className="mt-[28px] break-keep text-black tb:mt-[36px]">
              <Lines items={COPY.intro.descLines} />
            </Typography>
          )}
          {showTestChips && (
            <div className="mt-[18px] flex flex-wrap gap-[8px] tb:mt-[24px]">
              {WIM_NEW_TESTS.map((test) => (
                <Typography
                  as="span"
                  key={test.title}
                  mobile="body-03"
                  className="rounded-full border border-primary-sub-02 bg-primary-sub-03 px-[14px] py-[7px] text-primary-main">
                  {test.title}
                </Typography>
              ))}
            </div>
          )}
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
  );
}

export default function WimMainNew() {
  const COPY = WIM_NEW_COPY;
  const { heroVariant } = useVariant();
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
  const [activeCare, setActiveCare] = useState<WimNewCare | null>(null);
  const [reviewsExpanded, setReviewsExpanded] = useState(false);

  const careStep = () => {
    const track = careTrackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 15 : 0;
  };
  /** 화살표 클릭 — 카드 한 장만큼 다음으로 넘긴다 */
  const moveCareNext = () => {
    const track = careTrackRef.current;
    const step = careStep();
    if (!track || !step) return;
    track.scrollBy({ left: step, behavior: "smooth" });
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
    const w = Math.min(
      first.offsetWidth * 1.5,
      Math.max(first.offsetWidth * 1.25, screenRight - cardLeft),
    );
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

      {/* ─────────────── HERO (A/B, 헤더 스위치로 전환) ─────────────── */}
      {heroVariant === "b" ? <HeroB /> : <HeroA />}

      {/* ─────────────── INTRO ─────────────── */}
      <IntroSection />

      {/* ─────────────── STEP 01 / STEP 02 ─────────────── */}
      <section id="services" className="bg-gray-00 px-5 pb-[54px] pt-[38px] tb:pb-[110px] tb:pt-[80px]">
        <Container>
          {/* 브랜드 선언 */}
          <p className="break-keep text-black">
            <Typography mobile="headline-03" weight="medium" className="tb:hidden">
              <Lines items={COPY.philosophy.normalLines} />
            </Typography>
            <br className="tb:hidden" />
            <Typography mobile="headline-03" weight="bold" className="tb:hidden">
              <Lines items={COPY.philosophy.boldLines} />
            </Typography>
            <Typography mobile="title-01" desktop="display-01" weight="medium" className="hidden tb:inline">
              {COPY.philosophy.normalLines.join(" ")}
            </Typography>
            <br className="hidden tb:inline" />
            <Typography mobile="title-01" desktop="display-01" weight="bold" className="hidden tb:inline">
              {COPY.philosophy.boldLines.join(" ")}
            </Typography>
          </p>

          {/* STEP 01 — 6가지 검사 */}
          <div className="mt-[26px] tb:mt-[34px]">
            <TestsSection />
          </div>

          {/* STEP 02 — 관리 캐러셀 */}
          <div className="mt-[26px] flex flex-col items-start gap-[26px] tb:mt-[34px] tb:flex-row tb:items-end tb:gap-5">
            <StepDivider className="hidden tb:block" />
            <div className="min-w-0 flex-1">
              <Eyebrow text={COPY.step2.label} tone="gray" />
              <Typography as="h2" mobile="headline-01" tablet="display-02" weight="bold" className="mt-1.5 break-keep text-primary-main">
                {COPY.step2.title}
              </Typography>
            </div>
            {/* 모바일에서는 캐러셀 아래에 따로 노출한다 */}
            <Typography mobile="body-03" className="hidden shrink-0 self-end text-primary-main dt:block">
              {COPY.step2.swipeHint}
            </Typography>
          </div>

          <div
            ref={careTrackRef}
            onScroll={updateCareActive}
            className="mt-[36px] mr-[calc(50%-50vw)] flex snap-x snap-mandatory gap-[10px] overflow-x-auto pb-3 pr-[calc(50vw-50%)] [scrollbar-width:none] tb:gap-[15px] dt:mr-0 dt:pr-0 [&::-webkit-scrollbar]:hidden">
            {WIM_NEW_CARES.map((care, careIndex) => {
              // 마지막 카드는 끝에 닿기 전까지 옆으로 늘어나 "더 있다"는 신호를 준다.
              // 높이는 aspect 대신 h-* 로 고정해서, 폭이 변해도 줄 높이가 흔들리지 않는다.
              const isPeek = careIndex === carePeek.index;
              return (
              <div
                key={care.no}
                style={{
                  ...(isPeek ? { width: carePeek.width } : null),
                }}
                className={`relative isolate h-[150px] shrink-0 snap-start overflow-hidden rounded-[10px] tb:h-[246px] dt:h-[357px] dt:rounded-[20px] ${
                  isPeek ? "" : "w-[205px] tb:w-[calc((100%-15px)/2)] dt:w-[calc((100%-45px)/4)]"
                }`}>
              <button
                type="button"
                onClick={() => setActiveCare(care)}
                aria-label={`${care.title} 자세히 보기`}
                className="absolute inset-0 h-full w-full cursor-pointer border-0 bg-transparent p-0 text-left font-inherit">
                <div className={`absolute inset-0 ${isPeek ? "care-peek-content" : ""}`}>
                  <CardPhoto src={care.image} mobileSrc={care.imageMobile} alt={care.imageAlt} />
                  <div className={CARE_SCRIM} />

                  <Typography mobile="body-02" desktop="display-01" weight="bold" className="absolute left-[16px] top-[12px] text-white dt:left-[32px] dt:top-[18px]">
                    {care.no}
                  </Typography>
                  {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
                  <img
                    src={WIM_NEW_ICONS.plus}
                    alt=""
                    aria-hidden="true"
                    className="absolute right-[12px] top-[12px] h-[20px] w-[20px] dt:hidden"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex flex-col px-[16px] pb-[16px] dt:px-[32px] dt:pb-[37px]">
                    <Typography as="h3" mobile="body-02" desktop="title-02" weight="bold" className="break-keep text-white">
                      {care.title}
                    </Typography>
                    <Typography as="p" mobile="body-03" desktop="body-02" mobileSize={13} className="mt-[6px] break-keep text-white dt:mt-[8px]">
                      {care.line}
                    </Typography>
                    <Typography mobile="body-03" className="mt-[14px] hidden flex-col text-white dt:flex">
                      {COPY.step2.detailLabel}
                      <span className="mt-[6px] h-px w-[86px] bg-gradient-to-r from-white/10 to-white" />
                    </Typography>
                  </div>
                </div>

              </button>

                {isPeek && (
                  <span
                    aria-hidden="true"
                    className="care-peek-fade pointer-events-none absolute inset-y-0 right-0 z-10 w-3/4"
                  />
                )}

                {isPeek && (
                  <button
                    type="button"
                    onClick={moveCareNext}
                    aria-label="다음 관리 방식 보기"
                    className="absolute left-[200px] top-1/2 z-20 hidden h-[36px] w-[36px] -translate-y-1/2 cursor-pointer border-0 bg-transparent p-0 transition hover:opacity-80 dt:block">
                    {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
                    <img src={WIM_NEW_ICONS.careArrow} alt="" aria-hidden="true" className="block h-[36px] w-[36px]" />
                  </button>
                )}
              </div>
              );
            })}
            {careActive < WIM_NEW_CARES.length - 1 && (
              <button
                type="button"
                onClick={moveCareNext}
                aria-label="다음 관리 방식 보기"
                className="sticky right-[20px] z-20 -ml-[36px] block h-[36px] w-[36px] shrink-0 cursor-pointer self-center border-0 bg-transparent p-0 transition hover:opacity-80 dt:hidden">
                {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
                <img src={WIM_NEW_ICONS.careArrow} alt="" aria-hidden="true" className="block h-[36px] w-[36px]" />
              </button>
            )}
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
            <Typography as="h2" mobile="headline-01" tablet="display-01" weight="bold" className="mt-2 break-keep text-white tb:mt-4">
              {COPY.results.title}
            </Typography>
            <Typography as="p" mobile="body-03" tablet="headline-03" className="mt-[18px] break-keep text-gray-02 tb:mt-8 tb:opacity-55">
              <span className="tb:hidden">
                <Lines items={COPY.results.footnoteLines} />
              </span>
              <span className="hidden tb:inline">{COPY.results.footnoteLines.join(" ")}</span>
            </Typography>
          </div>

          <ul className="mt-[42px] grid list-none grid-cols-2 gap-[10px] p-0 tb:mt-12 tb:gap-[16px] dt:grid-cols-4">
            {WIM_NEW_NUMBERS.map((n) => (
              <li
                key={n.label}
                className="flex h-[80px] flex-col items-center justify-center rounded-[10px] bg-white shadow-[0_4px_7.3px_rgba(0,0,0,0.15)] tb:h-[165px] tb:rounded-[20px] pb-1">
                <span className="flex items-baseline gap-1">
                  <Typography mobile={n.small ? "headline-01" : "title-02"} weight="bold" tabletSize={n.small ? 50 : 56} className="text-primary-main">
                    {n.value}
                  </Typography>
                  {n.unit ? (
                    <Typography mobile="body-02" weight="semibold" tabletSize={32} className="text-gray-02">{n.unit}</Typography>
                  ) : null}
                </span>
                <Typography mobile="body-03" tablet="headline-01" weight="semibold" tabletWeight="medium" className="mt-[2px] break-keep text-primary-main">
                  {n.label}
                </Typography>
              </li>
            ))}
          </ul>

          <ul className="mt-[20px] flex list-none flex-wrap justify-center gap-[8px] p-0 tb:mt-[30px] tb:gap-[14px]">
            {WIM_NEW_RATINGS.map((r) => (
              <li key={r.label} className="flex h-[26px] items-center justify-center rounded-full border-[0.75px] border-gray-01 px-[13px] text-gray-01 tb:h-[36px] tb:px-[21px]">
                <Typography mobile="body-03" tablet="headline-03" tabletWeight="medium">
                  {r.label}&nbsp;<span className="font-semibold tb:font-bold">{r.value}</span>
                </Typography>
              </li>
            ))}
          </ul>

          {/* REVIEWS */}
          <div className="mt-[72px] flex flex-col items-center text-center tb:mt-[110px]">
            <Eyebrow text={COPY.reviews.eyebrow} tone="light" />
            <Typography as="h2" mobile="headline-01" tablet="display-01" weight="bold" className="mt-[10px] break-keep text-white tb:mt-6">
              <span className="tb:hidden">
                <Lines items={COPY.reviews.titleLines} />
              </span>
              <span className="hidden tb:inline">{COPY.reviews.titleLines.join(" ")}</span>
            </Typography>
            <Typography as="p" mobile="body-03" tablet="headline-03" tabletWeight="medium" className="mt-[16px] break-keep text-white tb:mt-7">
              {COPY.reviews.sub}
            </Typography>
          </div>

          <div className="relative mt-[50px] tb:left-1/2 tb:w-screen tb:-translate-x-1/2 tb:overflow-hidden tb:mt-16">
            <ul className="flex list-none flex-col gap-[10px] p-0 tb:mx-auto tb:w-max tb:flex-row tb:gap-[12px] tb:pb-3">
              {visibleReviews.map((review, index) => (
                <li
                  key={review.tag}
                  className={`${!reviewsExpanded && index >= 2 ? "hidden tb:flex" : "flex"} min-h-[110px] flex-col rounded-[10px] border border-review-line bg-review-surface p-[14px] tb:min-h-[205px] tb:w-[246px] tb:shrink-0 tb:rounded-[20px] tb:p-[20px] ${
                    Math.abs(index - reviewCenterIndex) === 0
                      ? "tb:bg-review-surface"
                      : Math.abs(index - reviewCenterIndex) === 1
                        ? "tb:bg-[#3E875FB2]"
                        : "tb:bg-review-line"
                  }`}>
                  <div className="flex items-start justify-between gap-3">
                    <Typography mobile="body-03" weight="medium" mobileSize={13} className="flex h-[23px] shrink-0 items-center rounded-full border-[0.75px] border-white px-[10px] text-white tb:h-[30px]">
                      {review.tag}
                    </Typography>
                    <Typography mobile="body-03" className="text-right text-gray-01 tb:hidden">
                      {review.who}
                    </Typography>
                  </div>
                  <Typography as="p" mobile="body-03" weight="semibold" className="mt-[16px] break-keep text-white tb:mt-[24px]">
                    {review.body}
                  </Typography>
                  <Typography mobile="body-03" className="mt-auto hidden pt-[12px] text-gray-00 tb:block">
                    {review.who}
                  </Typography>
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

          {!reviewsExpanded && visibleReviews.length > 2 && (
            <button
              type="button"
              onClick={() => setReviewsExpanded(true)}
              aria-expanded={reviewsExpanded}
              className="mx-auto mt-[20px] flex h-[35px] items-center justify-center rounded-full border border-gray-01 px-[24px] text-white transition hover:bg-white/10 tb:hidden">
              <Typography mobile="body-03" weight="medium">더 알아보기</Typography>
            </button>
          )}
        </Container>
      </section>

      {/* ─────────────── CASES ─────────────── */}
      <section id="cases" className="bg-white px-5 py-[27px] tb:py-[63px]">
        <Container>
          <div className="rounded-[10px] bg-primary-tint px-5 py-[26px] tb:rounded-[25px] tb:px-[40px] tb:py-[56px] dt:px-[27px]">
            <div className="flex flex-col items-center text-center">
              <Eyebrow text={COPY.cases.eyebrow} tone="gray" />
              <Typography as="h2" mobile="headline-01" tablet="display-01" weight="bold" className="mt-[2px] break-keep text-primary-main">
                <span className="tb:hidden">
                  <Lines items={COPY.cases.titleLines} />
                </span>
                <span className="hidden tb:inline">{COPY.cases.titleLines.join(" ")}</span>
              </Typography>
              <Typography as="p" mobile="body-03" tablet="headline-03" tabletWeight="medium" className="mt-[19px] break-keep text-black tb:mt-[43px] tb:text-primary-main">
                <span className="tb:hidden">
                  <Lines items={COPY.cases.descLines} />
                </span>
                <span className="hidden tb:inline">{COPY.cases.descLines.join(" ")}</span>
              </Typography>
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
                    <Typography as="h3" mobile="headline-03" tablet="display-02" weight="bold" className="break-keep text-white">
                      {program.title}
                    </Typography>
                    <Typography as="p" mobile="body-03" tablet="body-02" className="mt-[8px] break-keep text-white tb:mt-[16px]">
                      <span className="tb:hidden">{program.descLines.join(" ")}</span>
                      <span className="hidden tb:inline">
                        <Lines items={program.descLines} />
                      </span>
                    </Typography>
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
          <Typography as="h2" mobile="body-01" tablet="display-01" weight="bold" className="break-keep text-primary-main">
            {COPY.cta.title}
          </Typography>
          <a
            href="#contact"
            className="mt-[14px] flex h-[26px] items-center justify-center gap-[5px] rounded-full bg-gradient-to-r from-primary-main from-[39.892%] to-primary-accent px-[23px] text-white no-underline transition hover:opacity-90 tb:mt-[28px] tb:h-[50px] tb:gap-[10px]">
            <Typography mobile="body-03" tablet="headline-03" tabletWeight="medium">{COPY.cta.buttonLabel}</Typography>
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
                  <Typography mobile="body-03" tablet="body-02" weight="bold" className="w-[64px] shrink-0 text-primary-sub-02 tb:w-[75px]">
                    {block.label}
                  </Typography>
                  <div className="flex flex-col">
                    <Typography mobile="body-03" tablet="body-02" weight="bold" className="text-white">
                      {block.strong}
                    </Typography>
                    {block.rows.map((row) => (
                      <Typography
                        key={row.day}
                        mobile="body-03"
                        className="mt-[8px] flex gap-[16px] tb:gap-[27px]">
                        <span className="w-[75px] shrink-0 text-white font-semibold">{row.day}</span>
                        <span className="text-gray-01">{row.time}</span>
                      </Typography>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex gap-[24px] dt:gap-[25px]">
                <Typography mobile="body-03" tablet="body-02" weight="bold" className="w-[64px] shrink-0 text-primary-sub-02 tb:w-[75px]">
                  {COPY.footer.address.label}
                </Typography>
                <div className="flex flex-col">
                  <Typography mobile="body-03" tablet="body-02" weight="bold" className="break-keep text-white">
                    <span className="dt:hidden">
                      <Lines items={COPY.footer.address.strongLines} />
                    </span>
                    <span className="hidden dt:inline">{COPY.footer.address.strongLines.join(" ")}</span>
                  </Typography>
                  <Typography mobile="body-03" weight="medium" className="mt-[8px] text-white">
                    {COPY.footer.address.walk}
                  </Typography>
                  <Typography mobile="body-03" className="mt-[8px] text-gray-01">
                    {COPY.footer.address.parking}
                  </Typography>
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
                <Typography as="div" mobile="body-03" mobileSize={11} className="flex justify-between gap-[11px] text-gray-01">
                  <span>{COPY.footer.copyright}</span>
                  <a href="#contact" className="text-gray-01 underline decoration-gray-01 underline-offset-[4px]">
                    <Typography mobile="body-03" mobileSize={11} weight="bold">{COPY.footer.terms}</Typography>
                  </a>
                </Typography>
                <Typography as="div" mobile="body-03" mobileSize={9} className="flex flex-wrap gap-x-[14px] gap-y-[4px] text-gray-01">
                  {COPY.footer.business.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {activeCare && <CareDetailModal care={activeCare} onClose={() => setActiveCare(null)} />}
    </div>
  );
}

/** 버전 2의 최종 CTA와 푸터를 다른 메인 시안에서도 그대로 재사용합니다. */
export function WimMainBottom() {
  const COPY = WIM_NEW_COPY;

  return (
    <>
      <section id="contact" className="bg-primary-sub-03 px-5 py-[32px] tb:py-[62px]">
        <Container className="flex flex-col items-center text-center">
          <Typography as="h2" mobile="body-01" tablet="display-01" weight="bold" className="break-keep text-primary-main">
            {COPY.cta.title}
          </Typography>
          <a
            href="#contact"
            className="mt-[14px] flex h-[26px] items-center justify-center gap-[5px] rounded-full bg-gradient-to-r from-primary-main from-[39.892%] to-primary-accent px-[23px] text-white no-underline transition hover:opacity-90 tb:mt-[28px] tb:h-[50px] tb:gap-[10px]">
            <Typography mobile="body-03" tablet="headline-03" tabletWeight="medium">{COPY.cta.buttonLabel}</Typography>
            {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
            <img src={WIM_NEW_ICONS.arrow} alt="" aria-hidden="true" className="h-[9px] w-[9px] tb:h-[17px] tb:w-[17px]" />
          </a>
        </Container>
      </section>

      <footer className="bg-primary-sub-01 pb-[32px] pt-[36px] tb:pb-[40px] tb:pt-[60px]">
        <div className="mx-auto w-full px-5 dt:max-w-[1440px] dt:px-20">
          <div className="flex items-end gap-[4px] tb:h-[26px] tb:w-[152px] tb:gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
            <img src={WIM_NEW_ICONS.logoWim} alt="WIM" className="h-[14px] w-[50px] tb:h-full tb:w-auto" />
            {/* eslint-disable-next-line @next/next/no-img-element -- 피그마 원본 */}
            <img src={WIM_NEW_ICONS.logoCenter} alt="Center" className="h-[13px] w-auto tb:h-full tb:w-auto" />
          </div>

          <div className="mt-[28px] tb:mt-[36px]">
            <div className="flex flex-col gap-[32px] dt:flex-row dt:gap-10">
              {COPY.footer.info.map((block) => (
                <div key={block.label} className="flex gap-[24px] dt:gap-[25px]">
                  <Typography mobile="body-03" tablet="body-02" weight="bold" className="w-[64px] shrink-0 text-primary-sub-02 tb:w-[75px]">
                    {block.label}
                  </Typography>
                  <div className="flex flex-col">
                    <Typography mobile="body-03" tablet="body-02" weight="bold" className="text-white">
                      {block.strong}
                    </Typography>
                    {block.rows.map((row) => (
                      <Typography key={row.day} mobile="body-03" className="mt-[8px] flex gap-[16px] tb:gap-[27px]">
                        <span className="w-[75px] shrink-0 font-semibold text-white">{row.day}</span>
                        <span className="text-gray-01">{row.time}</span>
                      </Typography>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex gap-[24px] dt:gap-[25px]">
                <Typography mobile="body-03" tablet="body-02" weight="bold" className="w-[64px] shrink-0 text-primary-sub-02 tb:w-[75px]">
                  {COPY.footer.address.label}
                </Typography>
                <div className="flex flex-col">
                  <Typography mobile="body-03" tablet="body-02" weight="bold" className="break-keep text-white">
                    <span className="dt:hidden"><Lines items={COPY.footer.address.strongLines} /></span>
                    <span className="hidden dt:inline">{COPY.footer.address.strongLines.join(" ")}</span>
                  </Typography>
                  <Typography mobile="body-03" weight="medium" className="mt-[8px] text-white">{COPY.footer.address.walk}</Typography>
                  <Typography mobile="body-03" className="mt-[8px] text-gray-01">{COPY.footer.address.parking}</Typography>
                </div>
              </div>
            </div>

            <div className="mt-[34px] flex items-center justify-end gap-[6px] tb:mt-[50px] tb:gap-[10px]">
              {WIM_NEW_ICONS.sns.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element -- 피그마 원본
                <img key={src} src={src} alt="" aria-hidden="true" className="h-[28px] w-[28px] tb:h-[43px] tb:w-[43px]" />
              ))}
            </div>

            <div className="mt-[12px] h-px w-full bg-gray-01/40 tb:mt-[22px]" />
            <div className="mt-[11px] flex flex-col gap-[10px] tb:mt-[24px]">
              <div className="flex flex-col gap-[8px]">
                <Typography as="div" mobile="body-03" mobileSize={11} className="flex justify-between gap-[11px] text-gray-01">
                  <span>{COPY.footer.copyright}</span>
                  <a href="#contact" className="text-gray-01 underline decoration-gray-01 underline-offset-[4px]">
                    <Typography mobile="body-03" mobileSize={11} weight="bold">{COPY.footer.terms}</Typography>
                  </a>
                </Typography>
                <Typography as="div" mobile="body-03" mobileSize={9} className="flex flex-wrap gap-x-[14px] gap-y-[4px] text-gray-01">
                  {COPY.footer.business.map((line) => <span key={line}>{line}</span>)}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
