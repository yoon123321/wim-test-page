import BrandFinalCtaSection from '@/components/brand/sections/BrandFinalCtaSection';
import BrandHeroSection from '@/components/brand/sections/BrandHeroSection';
import BrandVideoHeroSection from '@/components/brand/sections/BrandVideoHeroSection';
import LongevityGapSection from '@/components/brand/sections/LongevityGapSection';
import MetabolicDominoSection from '@/components/brand/sections/MetabolicDominoSection';
import ObesogenicSection from '@/components/brand/sections/ObesogenicSection';
import OurAnswerSection from '@/components/brand/sections/OurAnswerSection';
import PhilosophySection from '@/components/brand/sections/PhilosophySection';
import ThreeMApproachSection from '@/components/brand/sections/ThreeMApproachSection';
import TwoPhasesSection from '@/components/brand/sections/TwoPhasesSection';
import { Container } from '@/components/common/SectionLayout';

/** 브랜드 스토리 페이지. 문구는 data/brand.ts 에서 고친다. */
export default function BrandPage() {
  return (
    <div className="overflow-hidden bg-white font-pretendard text-wim-black">
      {/* 0. 영상 히어로 */}
      <BrandVideoHeroSection />

      {/* 1. 우리는 건강하게 오래 사는 것을 설계합니다. */}
      <BrandHeroSection />

      {/* 2. WHY LONGEVITY — 기대수명과 건강수명의 간격 */}
      <LongevityGapSection />

      {/* 3. WEIGHT COMES FIRST — 대사 도미노 */}
      <MetabolicDominoSection />

      {/* 4. THE ENVIRONMENT — 비만 유발 사회 */}
      <ObesogenicSection />

      {/* 5. OUR ANSWER */}
      <OurAnswerSection />

      {/* 6. OUR PHILOSOPHY — 세 가지 원칙 */}
      <PhilosophySection />

      {/* 7. OUR METHODOLOGY — 3M Approach */}
      <ThreeMApproachSection />

      <section aria-label="브랜드 소개 영상" className="bg-wim-white pt-12 tb:pt-20">
        <Container>
          <div className="mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-[10px] bg-black tb:hidden">
            <iframe
              src="https://www.youtube.com/embed/dO66F6YfskA"
              title="브랜드 소개 영상 모바일 버전"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
          <div className="mx-auto hidden aspect-video w-full max-w-[840px] overflow-hidden rounded-[10px] bg-black tb:block">
            <iframe
              src="https://www.youtube.com/embed/PSwdsD3OiHw"
              title="브랜드 소개 영상"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </Container>
      </section>

      {/* 8. THE DESIGN, IN ORDER — 설계의 두 단계 */}
      <TwoPhasesSection />

      {/* 9. BEGIN YOUR DESIGN */}
      <BrandFinalCtaSection />
    </div>
  );
}
