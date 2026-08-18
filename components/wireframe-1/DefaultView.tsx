"use client";

import { useAB } from "@/components/common/ABProvider";
import HeroSection from "@/components/wireframe-1/HeroSection";
import DifferenceSection from "@/components/wireframe-1/DifferenceSection";
import DResultSection from "@/components/wireframe-1/DResultSection";
import ConcernsSection from "@/components/wireframe-1/ConcernsSection";
import DoctorSection from "@/components/wireframe-1/DoctorSection";
import RoadmapSection from "@/components/wireframe-1/RoadmapSection";
import DataReportSection from "@/components/wireframe-1/DataReportSection";
import CareSection from "@/components/wireframe-1/CareSection";
import ManagerDeviceSection from "@/components/wireframe-1/ManagerDeviceSection";
import TeamSection from "@/components/wireframe-1/TeamSection";
import ResultsSection from "@/components/wireframe-1/ResultsSection";
import ReviewsSection from "@/components/wireframe-1/ReviewsSection";
import PlansSection from "@/components/wireframe-1/PlansSection";
import FaqSection from "@/components/wireframe-1/FaqSection";
import FinalCtaSection from "@/components/wireframe-1/FinalCtaSection";

const GLOBAL_CSS = `
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
  body { margin: 0; background: #fff; color: #1c1c1c;
    font-family: "Pretendard Variable", system-ui, -apple-system, sans-serif; }
  a { color: #525252; text-decoration: none; }
  a:hover { color: #262626; }
  :focus-visible { outline: 2px solid #525252; outline-offset: 2px; }
  @keyframes worry-marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes worry-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
`;

/** A/B/C/D 기본 감량 페이지. E안은 WireframeEView 가 대신 렌더한다. */
export default function DefaultView() {
  const { variant } = useAB();
  if (variant === "E") return null;

  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <HeroSection />
      <DifferenceSection only="C" />
      <ConcernsSection />
      <DifferenceSection only="D" />
      <DResultSection />
      <DoctorSection />
      <RoadmapSection />
      <DataReportSection />
      <CareSection />
      <ManagerDeviceSection />
      <TeamSection />
      <ResultsSection />
      <ReviewsSection />
      <PlansSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
