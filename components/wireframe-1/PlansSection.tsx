import Text from "@/components/common/Text";
import { WIREFRAME_ONE_TEXT as COPY } from "@/content/wireframe-1";
import { EYEBROW, Section } from "./primitives";

/** 가운데 요금제를 추천 카드로 강조한다 */
const FEATURED_INDEX = 1;

export default function PlansSection() {
  const { plans } = COPY;

  return (
    <Section label="Plans" className="bg-[#fafafa]" innerClassName="flex flex-col gap-[44px]">
      <div className="flex flex-col gap-[14px]">
        <Text as="div" className={EYEBROW}>{plans.eyebrow}</Text>
        <Text as="div" size="3xl" weight="bold" className="tracking-[-.03em] text-[#161616] leading-[1.4]">
          {plans.titleLines[0]}
          <br />
          <Text as="span" size="3xl" weight="bold" className="text-[#525252]">{plans.titleLines[1]}</Text>
        </Text>
        <Text as="div" size="md" className="leading-[1.8] text-[#6b6b6b] tracking-[-.01em]">{plans.descLines[0]}<br />{plans.descLines[1]}</Text>
      </div>

      <div className="grid grid-cols-1 tb:grid-cols-3 gap-[24px] items-stretch">
        {plans.items.map((plan, index) => {
          const featured = index === FEATURED_INDEX;
          return (
            <div key={plan.name} className={`relative flex flex-col gap-[26px] rounded-[22px] bg-white px-[34px] pb-[34px] pt-9 ${featured ? "border-2 border-[#525252] shadow-[0_8px_28px_rgba(0,0,0,.10)]" : "shadow-[0_4px_20px_rgba(0,0,0,.07)]"}`}>
              {featured && (
                <Text as="div" size="xs" weight="bold" className="absolute left-1/2 top-[-15px] -translate-x-1/2 whitespace-nowrap rounded-full bg-[#404040] px-4 py-2 text-white">{plans.popularBadge}</Text>
              )}

              <div className="flex flex-col gap-2.5">
                <Text as="div" size="sm" weight="semibold" className="italic tracking-[-.01em] text-[#737373]">{plan.name}</Text>
                <Text as="div" size="2xl" weight="bold" className="tracking-[-.03em] text-[#161616]">{plan.subtitle}</Text>
                <Text as="div" size="sm" className="leading-[1.7] text-[#7a7a7a]">{plan.target}</Text>
              </div>

              <div className="flex flex-col">
                {plan.features.map((feature, featureIndex) => (
                  <Text as="div" key={feature} size="sm" className={`flex gap-3.5 py-3.5 text-[#4a4a4a] ${featureIndex < plan.features.length - 1 ? "border-b border-[#f3f3f3]" : ""}`}>
                    <Text as="span" size="sm" weight="bold" className="text-[#525252]">✓</Text>{feature}
                  </Text>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-1.5">
                <Text as="div" size="sm" className="text-[#9a9a9a]">{plan.priceLabel}</Text>
                <Text as="div" size="2xl" weight="bold" className="tracking-[-.03em] text-[#161616]">{plan.priceValue}</Text>
              </div>

              <a href="#" className={`flex h-[52px] items-center justify-center rounded-full ${featured ? "bg-[#404040] text-white" : "border border-[#d4d4d4] bg-white text-[#525252]"}`}>
                <Text as="span" size="md" weight="bold">{plan.cta}</Text>
              </a>
            </div>
          );
        })}
      </div>

      <Text as="div" size="sm" className="py-[26px] px-[30px] bg-[#f5f5f5] rounded-[18px] leading-[1.8] text-[#4a4a4a] text-pretty">
        <Text as="span" weight="bold" className="text-[#404040]">{plans.refundTitle}</Text> {plans.refundBody}
      </Text>
    </Section>
  );
}
