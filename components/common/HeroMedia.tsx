'use client';

import { useEffect, useRef } from 'react';
import { useIsMobileViewport } from '@/components/common/useIsMobileViewport';

export interface HeroMediaProps {
  image: string;
  imageMobile: string;
  /** 넣으면 사진 위에 자동재생(무음·반복)으로 덮인다 */
  video?: string;
  /** 모바일 전용 영상 (없으면 video 를 그대로 쓴다) */
  videoMobile?: string;
}

/** PC·모바일 배경 사진. 영상이 없거나 아직 못 틀었을 때 그대로 배경이 된다. */
function HeroImage({
  image,
  imageMobile
}: {
  image: string;
  imageMobile: string;
}) {
  return (
    <picture className="absolute inset-0 h-full w-full">
      <source media="(max-width: 767px)" srcSet={imageMobile} />
      <img src={image} alt="" className="h-full w-full object-cover" />
    </picture>
  );
}

/** 배경 영상. React 는 muted 를 속성으로 넣지 않아 자동재생이 막히므로 직접 지정한다. */
function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;
    element.muted = true;
    element.play().catch(() => {});
  }, [src]);

  return (
    <video
      key={src}
      ref={videoRef}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

/** 히어로 배경 — 사진을 깔고, 영상이 있으면 그 위에 얹는다. */
export function HeroMedia({
  image,
  imageMobile,
  video,
  videoMobile
}: HeroMediaProps) {
  const isMobile = useIsMobileViewport();
  // 폭을 알기 전에는 영상을 고르지 않는다. 그동안에는 사진만 보인다.
  const videoSrc =
    isMobile === null
      ? undefined
      : isMobile && videoMobile
        ? videoMobile
        : video;

  return (
    <>
      <HeroImage image={image} imageMobile={imageMobile} />
      {videoSrc && (
        <HeroVideo src={videoSrc} poster={isMobile ? imageMobile : image} />
      )}
    </>
  );
}
