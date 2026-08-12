"use client";

import Text from "@/components/common/Text";
import { useCopy } from "./useCopy";
import { EYEBROW, Section, StarRating } from "./primitives";

export default function ReviewsSection() {
  const { reviews } = useCopy();

  return (
    <Section label="Reviews" className="bg-[#f7f7f7]" innerClassName="flex flex-col gap-[40px]">
      <div className="flex flex-col items-start justify-between gap-6 dt:flex-row dt:items-end dt:gap-12">
        <div className="flex min-w-0 flex-col gap-[10px]">
          <Text as="div" className={EYEBROW}>{reviews.eyebrow}</Text>
          <Text as="div" size="3xl" weight="bold" className="leading-[1.35] tracking-[-.03em] text-[#161616]">
            {reviews.titlePrefix}{" "}
            <Text as="span" size="3xl" weight="bold" className="block text-[#525252] dt:inline">{reviews.titleHighlight}</Text>
          </Text>
        </div>
        <div className="flex shrink-0 items-baseline gap-[10px]">
          <Text as="div" className="text-[34px] font-[800] text-[#525252] tracking-[-.035em] leading-[1]">{reviews.ratingValue}</Text>
          <Text as="div" className="text-[14px] text-[#8a8a8a]">{reviews.ratingNote}</Text>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 tb:grid-cols-2 tb:gap-5">
        {reviews.cards.map((review, index) => (
          <div key={review.author} className="flex flex-col gap-3 rounded-[24px] bg-white px-4 py-6 shadow-[0_3px_18px_rgba(0,0,0,.06)] tb:gap-4 tb:px-7 tb:py-7 dt:px-8 dt:py-[34px]">
            <div className="flex items-center justify-between gap-4">
              <StarRating score={index === 2 ? 4 : 5} />
              <Text as="div" size="xs" weight="bold" className="rounded-full bg-[#eeeeee] px-3.5 py-1.5 text-[#525252]">{review.tag}</Text>
            </div>
            <Text as="div" size="md" className="text-pretty leading-[1.8] text-[#3c3c3c]">{review.body}</Text>
            <Text as="div" size="sm" className="text-[#8a8a8a]">{review.author}</Text>
          </div>
        ))}

        <div className="col-span-1 flex flex-col items-start gap-4 rounded-[24px] bg-[#404040] px-4 py-6 tb:col-span-2 tb:flex-row tb:items-center tb:gap-7 tb:px-8 tb:py-8">
          <StarRating score={5} size={18} color="#d4d4d4" />
          <Text as="div" className="text-[18px] leading-[1.75] font-[600] text-white tracking-[-.02em] text-pretty">{reviews.featured.quote}</Text>
          <Text as="div" size="sm" className="flex-none text-left text-[#bdbdbd] tb:ml-auto tb:text-right">{reviews.featured.name}<br />{reviews.featured.result}</Text>
        </div>
      </div>

      <Text as="div" className="text-[12px] text-[#8a8a8a]">{reviews.disclaimer}</Text>
    </Section>
  );
}
