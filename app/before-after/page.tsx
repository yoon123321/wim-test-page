/**
 * 감량 사례 목록 — wim-homepage-2 의 /before-after 화면을 한 파일로 옮긴 것.
 * 문구·사진 경로는 아래 COPY 와 CASES 에서 고친다. 사진은 public/images/bna 에 있다.
 * 원본과 다른 점: 클릭 추적 없음, 상담 폼 대신 CONSULT_HREF 로 이동.
 */

'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BnaTestimonialsSection from './BnaTestimonialsSection';
import { CtaButton } from '@/components/common/CtaButton';
import { HeroMedia } from '@/components/common/HeroMedia';
import ProgramFinalCtaSection from '@/components/common/ProgramFinalCtaSection';
import { Container } from '@/components/common/SectionLayout';
import { Typography } from '@/components/common/Typography';
import { useMobileViewportHeight } from '@/components/common/useMobileViewportHeight';

/** 상담 버튼이 이동할 곳 */
const CONSULT_HREF = '/contact';

/* ───────────────────────── 데이터 ───────────────────────── */

const COPY = {
  /** 1. 영상 히어로 — video 경로를 채우면 사진 위에 자동 재생된다 */
  hero: {
    image: '/images/bna/hero-desktop.webp',
    imageMobile: '/images/bna/hero-mobile.webp',
    video: '',
    videoMobile: '',
    title: 'WIM에서 시작된, 진짜 변화의 기록',
    scrollLabel: '아래 내용 보기'
  },

  /** 2. 감량 사례 카드 */
  cases: {
    eyebrow: 'REAL CHANGE, REAL STORY',
    title: 'WIM과 함께 감량에 성공한 사람들의 이야기',
    cardCta: '자세히 보기',
    /** 카드 링크의 스크린리더 라벨. {title} 자리에 카드 제목이 들어간다 */
    cardAriaLabel: '{title} 자세히 보기'
  },

  /** 4. 마지막 CTA */
  finalCta: {
    title: '평생을 생각하면, 아깝지 않습니다.',
    testLabel: '3분 다이어트 유형 검사 (무료)',
    testHref: '/diet-type-test',
    inquiryLabel: '프로그램 문의'
  }
} as const;

type BnaCase = {
  /** 카드를 누르면 열리는 주소 */
  href: string;
  /** 줄바꿈(\n)으로 나눈다. 첫 줄은 보통 굵기, 나머지 줄은 굵게 */
  message: string;
  image: string;
  imageMobile: string;
  alt: string;
};

/** 사례 목록 — 순서가 곧 카드 순서다 */
const CASES: readonly BnaCase[] = [
  {
    href: '/before-after/case-01',
    message: '83kg였던 무용수 \n약 15kg 감량',
    image: '/images/bna/card-01.webp',
    imageMobile: '/images/bna/card-01-mobile.webp',
    alt: '감량 후 회원님의 모습'
  },
  {
    href: '/before-after/case-02',
    message: '95kg였던 개발자\n약 30kg 감량',
    image: '/images/bna/card-02.webp',
    imageMobile: '/images/bna/card-02-mobile.webp',
    alt: '감량 후 회원님의 모습'
  }
];

/* ───────────────────────── 1. 영상 히어로 ───────────────────────── */

function VideoHeroSection() {
  const copy = COPY.hero;
  const mobileViewportHeight = useMobileViewportHeight();

  return (
    <section
      className="relative isolate flex h-[var(--hero-mobile-height,calc(100svh-110px))] w-full flex-col items-center justify-center overflow-hidden text-center tb:aspect-[var(--hero-ratio-desktop)] tb:h-auto"
      style={
        {
          // 공통 히어로와 동일하게 헤더·하단 상담 바 높이를 제외한다.
          ...(mobileViewportHeight
            ? { '--hero-mobile-height': `${mobileViewportHeight - 110}px` }
            : {}),
          '--hero-ratio-desktop': '2880/1100'
        } as CSSProperties
      }
    >
      <HeroMedia
        image={copy.image}
        imageMobile={copy.imageMobile}
        video={copy.video || undefined}
        videoMobile={copy.videoMobile || undefined}
      />

      {/* 카피 가독성용 딤 */}
      <div className="absolute inset-0 bg-black/10" />

      <Typography
        as="h1"
        variant="ko-headline-01"
        weight="bold"
        mobileSize={24}
        tabletSize={36}
        desktopSize={36}
        className="relative break-keep px-5 text-white"
        style={{
          lineHeight: 1.5,
          letterSpacing: 0,
          textAlign: 'center',
          textShadow: '0 0 2px rgba(0, 0, 0, 0.25)'
        }}
      >
        <span className="tb:hidden">
          WIM에서 시작된,<br />
          진짜 변화의 기록
        </span>
        <span className="hidden tb:inline">{copy.title}</span>
      </Typography>
    </section>
  );
}

/* ───────────────────────── 2. 감량 사례 카드 ───────────────────────── */

const CARD_BASE =
  'relative isolate overflow-hidden rounded-[16px] bg-[#E5E5E5] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-main tb:rounded-[20px]';

/** 카드가 여러 장일 때 — 같은 너비로 나란히 둔다 */
const CARD_CLASS = `${CARD_BASE} aspect-[320/220] tb:aspect-auto tb:h-[450px] tb:min-w-0 tb:flex-1`;

/** 카드가 한 장일 때 — 사진 비율 그대로 가운데 둔다 */
const SINGLE_CARD_CLASS = `${CARD_BASE} mx-auto block aspect-[1260/900] w-full max-w-[640px]`;

function CaseCard({ item, single }: { item: BnaCase; single: boolean }) {
  const messageLines = item.message.split('\n').map((line) => line.trim());

  return (
    <Link
      href={item.href}
      aria-label={COPY.cases.cardAriaLabel.replace('{title}', messageLines.join(' '))}
      className={single ? SINGLE_CARD_CLASS : CARD_CLASS}
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={item.imageMobile} />
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width:768px) 50vw, 100vw"
          className="object-cover"
        />
      </picture>

      <div className="absolute inset-0 flex max-w-[560px] flex-col justify-end p-5 tb:p-7 dt:p-8">
        <Typography
          as="h3"
          variant="ko-headline-02"
          tabletVariant="ko-display-01"
          weight="medium"
          mobileSize={22}
          tabletSize={36}
          desktopSize={36}
          className="break-keep text-primary-main"
          style={{ lineHeight: 1.5, letterSpacing: 0 }}
        >
          {messageLines.map((line, lineIndex) => (
            <span
              key={lineIndex}
              className={lineIndex === 0 ? 'block' : 'block font-bold'}
            >
              {line}
            </span>
          ))}
        </Typography>
        <CtaButton
          as="span"
          label={COPY.cases.cardCta}
          variant="primary"
          className="mt-6.5 w-fit px-3 tb:mt-[50px] tb:px-6"
          contentClassName="font-normal tracking-[0]"
        />
      </div>
    </Link>
  );
}

/** 여러 장이면 나란히, 한 장이면 가운데 */
function CasesSection() {
  return (
    <section className="bg-white px-5 pb-6 pt-10 tb:py-20 wide:px-0 dt:pb-[61px] dt:pt-24">
      <Container className="flex flex-col px-0 wide:px-0">
        <header className="text-center">
          <Typography
            as="p"
            variant="ko-body-04"
            tabletVariant="ko-body-03"
            weight="regular"
            tabletWeight="bold"
            desktopWeight="bold"
            mobileSize={14}
            tabletSize={16}
            desktopSize={16}
            className="text-primary-main"
            style={{ lineHeight: 1.5, letterSpacing: 0, textAlign: 'center' }}
          >
            {COPY.cases.eyebrow}
          </Typography>
          <Typography
            as="h2"
            variant="ko-headline-03"
            tabletVariant="ko-display-02"
            desktopVariant="ko-display-01"
            weight="bold"
            mobileSize={24}
            tabletSize={36}
            desktopSize={36}
            className="mt-1 break-keep text-black tb:mt-3"
            style={{ lineHeight: 1.5, letterSpacing: 0, textAlign: 'center' }}
          >
            <span className="tb:hidden">
              WIM과 함께 감량에 성공한<br />
              사람들의 이야기
            </span>
            <span className="hidden tb:inline">{COPY.cases.title}</span>
          </Typography>
        </header>

        <div className="mt-9 flex flex-col gap-4 tb:mt-11 tb:flex-row tb:gap-5 dt:mt-20">
          {CASES.map((item) => (
            <CaseCard key={item.href} item={item} single={CASES.length === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── 4. 마지막 CTA ───────────────────────── */

function FinalCtaSection() {
  const copy = COPY.finalCta;
  return (
    <ProgramFinalCtaSection
      title={copy.title}
      className="py-8 tb:py-12"
      titleClassName="!leading-normal"
      actionsClassName="mt-7"
    >
      <CtaButton label={copy.testLabel} href={copy.testHref} variant="white" />
      <CtaButton
        label={copy.inquiryLabel}
        href={CONSULT_HREF}
        variant="outline-white"
        icon={false}
      />
    </ProgramFinalCtaSection>
  );
}

/* ───────────────────────── 페이지 ───────────────────────── */

export default function Page() {
  return (
    <div className="overflow-hidden bg-white font-pretendard text-wim-black">
      {/* 1. 영상 히어로 */}
      <VideoHeroSection />

      {/* 2. 감량 사례 카드 */}
      <CasesSection />

      {/* 3. 더 많은 변화 — 회원 사례 캐러셀 */}
      <BnaTestimonialsSection />

      {/* 4. 평생을 생각하면, 아깝지 않습니다. */}
      <FinalCtaSection />
    </div>
  );
}
