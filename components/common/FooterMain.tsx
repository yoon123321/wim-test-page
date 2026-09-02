import Link from "next/link";
import { Typography } from "./Typography";
import { WIM_NEW_COPY, WIM_NEW_ICONS } from "@/data/home-new";

export default function FooterMain() {
  const COPY = WIM_NEW_COPY.footer;

  return (
    <footer className="border-t border-gray-01 bg-gray-00 pb-8 pt-9 tb:pb-10 tb:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-5 tb:px-10 dt:px-0">
        <Link href="/" aria-label="윔센터 홈" className="flex w-fit items-end gap-2 no-underline">
          <img src="/images/main/icons/header-logo-wim.svg" alt="WIM" className="h-[18px] w-auto tb:h-[24px]" />
          <span
            aria-hidden="true"
            className="h-[17px] w-[58px] bg-primary-main [mask-image:url('/images/main/icons/header-logo-center.svg')] [mask-repeat:no-repeat] [mask-size:100%_100%] tb:h-[23px] tb:w-[80px]"
          />
        </Link>

        <div className="mt-8 flex flex-col gap-8 dt:flex-row dt:gap-8">
          {COPY.info.map((block) => (
            <div key={block.label} className="flex gap-5">
              <Typography mobile="body-03" tablet="body-02" weight="bold" className="w-[64px] shrink-0 text-primary-main tb:w-[75px]">
                {block.label}
              </Typography>
              <div className="flex flex-col">
                <Typography mobile="body-03" tablet="body-02" weight="bold" className="text-primary-sub-01">{block.strong}</Typography>
                {block.rows.map((row) => (
                  <Typography key={row.day} mobile="body-03" className="mt-2 flex gap-4 text-primary-sub-01 tb:gap-7">
                    <span className="w-[75px] shrink-0 font-semibold text-primary-sub-01">{row.day}</span>
                    <span>{row.time}</span>
                  </Typography>
                ))}
              </div>
            </div>
          ))}

          <div className="flex gap-5">
            <Typography mobile="body-03" tablet="body-02" weight="bold" className="w-[64px] shrink-0 text-primary-main tb:w-[75px]">
              {COPY.address.label}
            </Typography>
            <div className="flex flex-col">
              <Typography mobile="body-03" tablet="body-02" weight="bold" className="break-keep text-primary-sub-01">
                {COPY.address.strongLines.join(" ")}
              </Typography>
              <div className="mt-2 flex flex-col gap-2 tb:flex-row tb:items-center tb:gap-3">
                <Typography mobile="body-03" weight="medium" className="text-primary-sub-01">{COPY.address.walk}</Typography>
                <Typography mobile="body-03" className="text-primary-sub-01">{COPY.address.parking}</Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 flex items-center justify-end gap-2 tb:mt-12">
          {WIM_NEW_ICONS.sns.map((src) => (
            <img key={src} src={src} alt="" aria-hidden="true" className="h-8 w-8 tb:h-10 tb:w-10" />
          ))}
        </div>

        <div className="mt-4 h-px w-full bg-gray-01" />
        <div className="mt-4 flex flex-col gap-2 text-gray-02">
          <Typography as="div" mobile="body-03" mobileSize={11} className="flex justify-between gap-4">
            <span>{COPY.copyright}</span>
            <Link href="/contact" className="font-bold text-gray-03 underline underline-offset-4">{COPY.terms}</Link>
          </Typography>
          <Typography as="div" mobile="body-03" mobileSize={9} className="flex flex-wrap gap-x-4 gap-y-1">
            {COPY.business.map((line) => <span key={line}>{line}</span>)}
          </Typography>
        </div>
      </div>
    </footer>
  );
}
