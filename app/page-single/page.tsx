import WimDeviceWireframe from "@/components/WimDeviceWireframe";
import Hero from "@/components/common/Hero";
import { PAGE_SINGLE_CONTENT } from "@/content/page-single";

export default function PageSingle() {
  return (
    <>
      <Hero
        imagePosition="center"
        eyebrow={PAGE_SINGLE_CONTENT.hero.eyebrow}
        title={PAGE_SINGLE_CONTENT.hero.title}
        description={PAGE_SINGLE_CONTENT.hero.description}
      />
      <WimDeviceWireframe />
    </>
  );
}
