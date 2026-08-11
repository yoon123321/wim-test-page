interface HeroProps {
  /** 실제 이미지 적용 시 페이지별 초점 위치 */
  imagePosition?: string;
  /** 페이지별로 이미지 영역의 좌우 배치를 바꿀 때 사용 */
  imageSide?: "left" | "right";
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
  imageDescription?: string;
}

export default function Hero({
  imagePosition = "center",
  imageSide = "right",
  eyebrow,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageDescription = "히어로 이미지 영역",
}: HeroProps) {
  const copy = (
    <div className="flex min-w-0 flex-1 flex-col justify-center">
      {eyebrow ? <p className="m-0 text-xs font-semibold tracking-[.18em] text-neutral-500">{eyebrow}</p> : <div className="h-3 w-36 rounded-sm bg-neutral-300" />}
      {title ? <h1 className="mt-10 max-w-[480px] text-4xl font-bold leading-tight text-neutral-800 dt:text-5xl">{title}</h1> : <><div className="mt-10 h-10 w-[88%] max-w-[440px] rounded bg-neutral-400" /><div className="mt-3 h-10 w-[72%] max-w-[360px] rounded bg-neutral-400" /></>}
      {description ? <p className="mt-8 max-w-[440px] text-base leading-7 text-neutral-600">{description}</p> : <div className="mt-8 space-y-3"><div className="h-3 w-[78%] max-w-[390px] rounded-sm bg-neutral-300" /><div className="h-3 w-[64%] max-w-[320px] rounded-sm bg-neutral-300" /></div>}
      <div className="mt-9 flex gap-3">
        {primaryButton ? <span className="rounded-full bg-neutral-700 px-6 py-3 text-sm font-semibold text-white">{primaryButton}</span> : <div className="h-10 w-32 rounded-full bg-neutral-400" />}
        {secondaryButton ? <span className="rounded-full border border-neutral-400 px-6 py-3 text-sm font-semibold text-neutral-700">{secondaryButton}</span> : <div className="h-10 w-28 rounded-full border border-neutral-400" />}
      </div>
    </div>
  );

  const image = (
    <div
      aria-label={`${imageDescription} · 초점 ${imagePosition}`}
      className="hero-image-placeholder min-h-64 flex-1 rounded-2xl border border-dashed border-neutral-400"
      style={{ backgroundPosition: imagePosition }}
    ><span className="flex h-full min-h-64 items-center justify-center text-sm text-neutral-500">{imageDescription}</span></div>
  );

  return (
    <section className="w-full border-b border-neutral-300 bg-white px-5 py-12 tb:px-8 tb:py-16 dt:px-10 dt:py-20">
      <style>{`
        .hero-image-placeholder {
          background:
            linear-gradient(to top right, transparent calc(50% - .5px), #d4d4d4 50%, transparent calc(50% + .5px)),
            linear-gradient(to bottom right, transparent calc(50% - .5px), #d4d4d4 50%, transparent calc(50% + .5px));
        }
      `}</style>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 tb:min-h-[400px] tb:flex-row tb:items-stretch tb:gap-12 dt:gap-20">
        {imageSide === "left" ? image : copy}
        {imageSide === "left" ? copy : image}
      </div>
    </section>
  );
}
