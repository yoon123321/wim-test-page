import { HeroSection } from '@/components/common/HeroSection';
import { BRAND_COPY } from '@/data/brand';

/**
 * 0. 영상 히어로 — 영상에 문구가 들어 있어 화면 위에는 카피를 얹지 않는다.
 * 영상·포스터는 data/brand.ts 의 BRAND_COPY.videoHero 에서 고친다. (RecoveryPage 참고)
 */
export default function BrandVideoHeroSection() {
  return (
    <HeroSection
      layout="diet-program"
      ratio={{ mobile: '360/570', desktop: '1440/550' }}
      image={BRAND_COPY.videoHero.image}
      imageMobile={BRAND_COPY.videoHero.imageMobile}
      video={BRAND_COPY.videoHero.video}
      videoMobile={BRAND_COPY.videoHero.videoMobile}
    />
  );
}
