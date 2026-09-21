'use client';

/**
 * 히어로 섹션 — 배경(사진 또는 영상) 위에 가운데 정렬 카피.
 * 여러 페이지가 함께 쓰므로 배경·카피는 전부 props 로 받는다.
 */

import type { CSSProperties } from 'react';
import { HeroMedia } from '@/components/common/HeroMedia';
import { Typography } from '@/components/common/Typography';
import { useMobileViewportHeight } from '@/components/common/useMobileViewportHeight';

type HeroLayout = 'default' | 'diet-program';

export interface HeroSectionProps {
  image: string;
  imageMobile: string;
  /** 배경 영상. 넣으면 사진 위에 자동재생(무음·반복)으로 덮인다. 비우면 사진만 보인다. */
  video?: string;
  /** 모바일 전용 배경 영상 (없으면 video 를 그대로 쓴다) */
  videoMobile?: string;
  /** 비우면 히어로에 문구 없이 배경만 나온다. */
  titleLines?: readonly string[];
  sub?: string;
  subMobileLines?: readonly string[];
  eyebrowText?: string;
  eyebrowImage?: string;
  showSub?: boolean;
  mobileTopAligned?: boolean;
  layout?: HeroLayout;
  /** PC 히어로 높이(px). 메인만 640, 나머지 페이지는 550. */
  desktopHeight?: number;
  /**
   * 배경을 잘라내지 않고 원본 비율 그대로 보여줄 때의 가로/세로. (예: '1440/550')
   * 주면 높이를 고정하지 않고 화면 폭에 맞춰 높이가 따라온다.
   */
  ratio?: { mobile: string; desktop: string };
}

/** 모바일에서 히어로 위아래로 빠지는 고정 UI 높이 — 헤더 56 + 하단 상담 바 56, 경계선 2 제외 */
const MOBILE_CHROME = 56 + 56 - 2;

const SECTION_CLASS =
  'relative isolate flex h-[calc(100svh-110px)] flex-col items-center overflow-hidden text-center tb:h-[var(--hero-desktop-height)] tb:justify-center tb:pt-0';

/** 높이를 고정하지 않고 배경 비율대로 늘어나는 히어로 */
const SECTION_RATIO_CLASS =
  'relative isolate flex aspect-[var(--hero-ratio-mobile)] w-full flex-col items-center overflow-hidden text-center tb:aspect-[var(--hero-ratio-desktop)] tb:justify-center tb:pt-0';

function Lines({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((line, index) => (
        <span key={line}>
          {index > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

/** 레이아웃마다 크기 체계가 달라 타이포 설정을 각각 둔다 */
function HeroTitle({
  lines,
  layout
}: {
  lines: readonly string[];
  layout: HeroLayout;
}) {
  if (layout === 'diet-program') {
    return (
      <Typography
        as="h1"
        variant="ko-headline-01"
        weight="bold"
        tabletSize={42}
        desktopSize={42}
        className="mt-2 break-keep text-white tb:mt-5"
      >
        <span className="font-medium">{lines[0]}</span>
        {lines.slice(1).map((line) => (
          <span key={line}>
            <br />
            {line}
          </span>
        ))}
      </Typography>
    );
  }

  return (
    <Typography
      as="h1"
      mobile="headline-02"
      tablet="display-01"
      weight="bold"
      className="break-keep text-white"
    >
      <Lines items={lines} />
    </Typography>
  );
}

/** 감량 페이지만 모바일에서 줄바꿈 위치를 따로 지정한다 */
function HeroSub({
  sub,
  mobileLines,
  layout
}: {
  sub: string;
  mobileLines?: readonly string[];
  layout: HeroLayout;
}) {
  if (layout === 'diet-program') {
    return (
      <Typography
        as="p"
        variant="ko-body-02"
        tabletVariant="ko-headline-02"
        weight="regular"
        tabletWeight="medium"
        className="mt-[27px] text-white tb:mt-6 dt:[text-shadow:0_0_3px_rgba(0,0,0,0.25)]"
      >
        <span className="tb:hidden">
          <Lines items={mobileLines ?? [sub]} />
        </span>
        <span className="hidden tb:inline">{sub}</span>
      </Typography>
    );
  }

  return (
    <Typography
      as="p"
      mobile="body-03"
      tablet="headline-02"
      className="mt-[18px] text-white tb:mt-[26px]"
    >
      {sub}
    </Typography>
  );
}

export function HeroSection({
  image,
  imageMobile,
  video,
  videoMobile,
  titleLines,
  sub,
  subMobileLines,
  eyebrowText,
  eyebrowImage,
  showSub = true,
  mobileTopAligned = false,
  layout = 'default',
  desktopHeight = 640,
  ratio
}: HeroSectionProps) {
  const mobileViewportHeight = useMobileViewportHeight();
  const isDietProgram = layout === 'diet-program';
  const hasTitle = Boolean(titleLines && titleLines.length > 0);

  /** 모바일 세로 정렬 — PC 에서는 항상 가운데다 */
  const mobileAlign = isDietProgram
    ? 'justify-start pt-[70px]'
    : mobileTopAligned
      ? 'justify-start pt-16'
      : 'justify-center';

  return (
    <section
      className={`${ratio ? SECTION_RATIO_CLASS : SECTION_CLASS} ${mobileAlign}`}
      style={
        (ratio
          ? ({
              '--hero-ratio-mobile': ratio.mobile,
              '--hero-ratio-desktop': ratio.desktop
            } as CSSProperties)
          : ({
              // 모바일 실측 높이는 tb 미만에서만 채워진다.
              ...(mobileViewportHeight
                ? { height: `${mobileViewportHeight - MOBILE_CHROME}px` }
                : null),
              '--hero-desktop-height': `${desktopHeight}px`
            } as CSSProperties))
      }
    >
      <HeroMedia
        image={image}
        imageMobile={imageMobile}
        video={video}
        videoMobile={videoMobile}
      />

      {/* 카피 가독성용 딤 — 카피가 없으면 배경을 그대로 보여준다 */}
      {isDietProgram && hasTitle && (
        <div className="absolute inset-0 bg-black/10" />
      )}

      <div
        className="relative flex flex-col items-center px-5"
        style={
          isDietProgram
            ? { textShadow: '0 0 2px rgba(0, 0, 0, 0.25)' }
            : undefined
        }
      >
        {eyebrowText && (
          <Typography
            as="p"
            variant="ko-body-03"
            weight="regular"
            className="text-center text-white"
          >
            {eyebrowText}
          </Typography>
        )}

        {eyebrowImage && (
          <img
            src={eyebrowImage}
            alt="Wellness in Me"
            width={400}
            height={45}
            className="mb-5 h-auto w-50 object-contain tb:mb-7"
          />
        )}

        {titleLines && hasTitle && (
          <HeroTitle lines={titleLines} layout={layout} />
        )}

        {showSub && sub && (
          <HeroSub sub={sub} mobileLines={subMobileLines} layout={layout} />
        )}
      </div>
    </section>
  );
}
