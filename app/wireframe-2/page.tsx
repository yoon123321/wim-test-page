import WireframeTwo from "@/components/wireframe/WireframeTwo";
import Hero from "@/components/common/Hero";
import { WIREFRAME_TWO_CONTENT as CONTENT } from "@/content/wireframe-2";

export default function Page() {
  return (
    <>
      <Hero imagePosition="center" {...CONTENT.hero} />
      <main className="min-h-screen bg-neutral-100">
        <WireframeTwo />
      </main>
    </>
  );
}
