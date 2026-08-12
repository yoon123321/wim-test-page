"use client";

import Text from "@/components/common/Text";
import { useCopy } from "./useCopy";
import { BODY, EYEBROW, HighlightTitle, Section } from "./primitives";

export default function TeamSection() {
  const { team } = useCopy();

  return (
    <Section label="Manager types" className="bg-[#f7f7f7]" innerClassName="flex flex-col gap-[44px]">
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[10px]">
          <Text as="div" className={EYEBROW}>{team.eyebrow}</Text>
          <HighlightTitle prefix={team.titlePrefix} highlight={team.titleHighlight} suffix={` ${team.titleSuffix}`} />
        </div>
        <Text as="div" className={BODY}>{team.description}</Text>
      </div>

      {/* 모바일은 가로 스냅 스크롤, 태블릿 이상은 3열 그리드 */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden tb:mx-0 tb:grid tb:grid-cols-3 tb:gap-6 tb:overflow-visible tb:px-0 tb:pb-0">
        {team.members.map((member, index) => (
          <div key={member.name} className="flex w-[85%] shrink-0 snap-center [scroll-snap-stop:always] flex-col rounded-[26px] bg-white p-6 shadow-[0_4px_22px_rgba(0,0,0,.07)] tb:w-auto tb:p-7">
            <div className="flex items-center gap-4">
              <Text as="div" size="sm" weight="bold" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#eeeeee] text-[#525252]">{String(index + 1).padStart(2, "0")}</Text>
              <div>
                <Text as="div" size="xs" weight="bold" className="text-[#737373]">{member.role}</Text>
                <Text as="div" size="xl" weight="bold" className="mt-1 tracking-[-.025em] text-[#161616]">{member.name}</Text>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-4">
              <Text as="div" size="md" className="text-pretty leading-[1.75] text-[#6b6b6b]">{member.desc}</Text>
              <div className="flex flex-wrap gap-2">
                {member.tags.map((tag) => <Text as="span" key={tag} size="xs" weight="bold" className="rounded-full bg-[#eeeeee] px-3 py-2 text-[#525252]">{tag}</Text>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
