"use client";

import Hero from "@/components/common/Hero";
import { useHero } from "./useCopy";

export default function HeroSection() {
  const hero = useHero();
  return <Hero imagePosition="center" {...hero} />;
}
