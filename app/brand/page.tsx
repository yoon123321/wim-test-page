import BrandView from "@/components/brand/BrandView";

export default function Page() {
  return (
    <>
      {/* 히어로 — 윔센터 소개 영상 (문구 없이 영상만) */}
      <section aria-label="윔센터 소개 영상">
        <video
          src="/videos/wim-center-intro.mp4"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="pointer-events-none block h-[300px] w-full object-cover tb:h-[480px] dt:h-[560px]"
        />
      </section>
      <main className="min-h-screen bg-neutral-100">
        <BrandView />
      </main>
    </>
  );
}
