"use client";

import Text from "@/components/common/Text";
import { useAB } from "@/components/common/ABProvider";
import { useCopy } from "./useCopy";
import { EYEBROW_SM, INNER, Slot } from "./primitives";

const ICON = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "#525252", strokeWidth: 2.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

/** credentials 순서에 맞춘 아이콘 (방패 / 초점 / 사람) */
const CREDENTIAL_ICONS = [
  <svg key="shield" {...ICON}><path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg>,
  <svg key="focus" {...ICON}><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="3" /></svg>,
  <svg key="person" {...ICON}><circle cx="10" cy="8" r="4" /><path d="M3 20c0-3.3 3.1-6 7-6" /><circle cx="17" cy="17" r="3" /><path d="m19.2 19.2 1.8 1.8" /></svg>,
];

export default function DoctorSection() {
  const { doctor } = useCopy();
  const { variant } = useAB();
  if (variant === "C" || variant === "D" || variant === "E") return null;

  return (
    <section data-screen-label="Doctor" className="bg-white pt-16 pb-16 tb:pt-20 tb:pb-20 dt:pt-[100px] dt:pb-[104px]">
      <div className={`${INNER} grid grid-cols-1 tb:grid-cols-[320px_minmax(0,1fr)] dt:grid-cols-[420px_minmax(0,1fr)] gap-10 dt:gap-[64px] items-stretch`}>
        <div className="relative min-h-[320px] tb:min-h-0 rounded-[28px] overflow-hidden shadow-[0_10px_36px_rgba(0,0,0,.13)]">
          <Slot label={doctor.photo} />
          <div className="absolute left-[20px] bottom-[20px] py-[14px] px-[18px] bg-white rounded-[16px] shadow-[0_6px_20px_rgba(0,0,0,.16)] flex flex-col gap-[3px]">
            <Text as="div" className="text-[15px] font-[800] text-[#161616] tracking-[-.02em]">{doctor.name}</Text>
            <Text as="div" className="text-[12px] text-[#7a7a7a]">{doctor.role}</Text>
          </div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <Text as="div" className={EYEBROW_SM}>{doctor.eyebrow}</Text>
            <Text as="div" size="3xl" weight="bold" className="tracking-[-.035em] text-[#161616] leading-[1.4]">{doctor.titleLines[0]}<br />{doctor.titleLines[1]}</Text>
            <Text as="div" className="text-[16px] leading-[1.8] text-[#6b6b6b] tracking-[-.01em] text-pretty">{doctor.description}</Text>
          </div>

          <Text as="div" className="py-[26px] px-[30px] bg-[#f7f7f7] rounded-[22px] text-[17px] leading-[1.75] font-[600] text-[#404040] tracking-[-.02em] text-pretty">{doctor.quote}</Text>

          {/* <div className="flex flex-col mt-auto">
            {doctor.credentials.map((credential, index) => (
              <div
                key={credential}
                className={`flex items-center gap-[14px] py-[15px] [border-top:1px_solid_#f0f0f0] ${index === doctor.credentials.length - 1 ? "[border-bottom:1px_solid_#f0f0f0]" : ""}`}
              >
                {CREDENTIAL_ICONS[index % CREDENTIAL_ICONS.length]}
                <Text as="div" className="text-[15px] text-[#3c3c3c] tracking-[-.01em]">{credential}</Text>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
