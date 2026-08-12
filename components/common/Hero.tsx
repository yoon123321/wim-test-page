import Text from "@/components/common/Text";

interface HeroProps {
  /** 실제 이미지 적용 시 페이지별 초점 위치 */
  imagePosition?: string;
  /** 콘텐츠 정렬 (기본 좌측) */
  align?: "left" | "center";
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
  imageDescription?: string;
}

export default function Hero({
  imagePosition = "center",
  align = "center",
  eyebrow,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageDescription = "히어로 이미지 영역",
}: HeroProps) {
  const alignBox = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section className="relative w-full overflow-hidden border-b border-neutral-300">
      <style>{`
        .hero-image-placeholder {
          background-color: #a3a3a3;
          background-image:
            linear-gradient(to top right, transparent calc(50% - .5px), rgba(255,255,255,.35) 50%, transparent calc(50% + .5px)),
            linear-gradient(to bottom right, transparent calc(50% - .5px), rgba(255,255,255,.35) 50%, transparent calc(50% + .5px));
        }
      `}</style>

      {/* 배경 이미지 */}
      <div
        aria-label={`${imageDescription} · 초점 ${imagePosition}`}
        className="hero-image-placeholder absolute inset-0"
        style={{ backgroundPosition: imagePosition }}
      />
      {/* 가독성 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

      {/* 콘텐츠 */}
      <div
        className={`relative mx-auto flex min-h-[420px] w-full max-w-[1200px] flex-col justify-center px-4 py-16 tb:min-h-[480px] tb:px-8 tb:py-20 dt:min-h-[560px] dt:px-10 dt:py-24 ${alignBox}`}
      >
        {eyebrow ? (
          <Text as="p" size="xs" weight="semibold" className="m-0 tracking-[.18em] text-white/80">{eyebrow}</Text>
        ) : (
          <div className="h-3 w-36 rounded-sm bg-white/40" />
        )}

        {title ? (
          <Text as="h1" size="display" weight="bold" className="mt-6 max-w-[680px] break-keep leading-tight text-white">{title}</Text>
        ) : (
          <>
            <div className="mt-6 h-10 w-[88%] max-w-[440px] rounded bg-white/40" />
            <div className="mt-3 h-10 w-[72%] max-w-[360px] rounded bg-white/40" />
          </>
        )}

        {description ? (
          <Text as="p" size="md" className="mt-6 max-w-[600px] break-keep leading-7 text-white/90">{description}</Text>
        ) : (
          <div className={`mt-6 space-y-3 ${align === "center" ? "flex flex-col items-center" : ""}`}>
            <div className="h-3 w-[78%] max-w-[390px] rounded-sm bg-white/30" />
            <div className="h-3 w-[64%] max-w-[320px] rounded-sm bg-white/30" />
          </div>
        )}

        {/* <div className="mt-9 flex gap-3">
          {primaryButton ? (
            <span className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-800">{primaryButton}</span>
          ) : (
            <div className="h-10 w-32 rounded-full bg-white/70" />
          )}
          {secondaryButton ? (
            <span className="rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white">{secondaryButton}</span>
          ) : (
            <div className="h-10 w-28 rounded-full border border-white/60" />
          )}
        </div> */}
      </div>
    </section>
  );
}
