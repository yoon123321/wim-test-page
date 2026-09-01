import BrandView from "@/components/brand/BrandView";
import Hero from "@/components/common/Hero";
import { BRAND_CONTENT as CONTENT } from "@/data/brand";

export default function Page() {
  return (
    <>
      <Hero imagePosition="center" {...CONTENT.hero} />
      <main className="min-h-screen bg-neutral-100">
        <BrandView />
      </main>
    </>
  );
}
