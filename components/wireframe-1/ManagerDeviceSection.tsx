import Text from "@/components/common/Text";
import { WIREFRAME_ONE_TEXT as COPY } from "@/content/wireframe-1";
import { BODY, Section } from "./primitives";

export default function ManagerDeviceSection() {
  const { managerDevice } = COPY;

  return (
    <Section label="Manager & Device" className="bg-white" innerClassName="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[12px]">
        <Text as="div" size="3xl" weight="bold" className="tracking-[-.03em] leading-[1.4] text-[#161616]">
          {managerDevice.title}
        </Text>
        <Text as="div" className={BODY}>{managerDevice.description}</Text>
      </div>

      <div className="grid grid-cols-1 gap-5 tb:grid-cols-2 tb:gap-6">
        {managerDevice.cards.map((card, index) => (
          <div
            key={card.title}
            className="flex flex-col gap-3 rounded-[22px] border border-[#ececec] bg-[#f7f7f7] p-7 tb:p-8"
          >
            <Text
              as="div"
              size="xs"
              weight="bold"
              className={`tracking-[.14em] ${index === 0 ? "text-[#4a763f]" : "text-[#737373]"}`}
            >
              {card.eyebrow}
            </Text>
            <Text as="div" size="xl" weight="bold" className="tracking-[-.025em] text-[#161616]">
              {card.title}
            </Text>
            <Text as="div" size="md" className="text-pretty leading-[1.75] text-[#6b6b6b]">
              {card.desc}
            </Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
