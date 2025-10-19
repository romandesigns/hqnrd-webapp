import { SectionHeading } from "@/components/features/Heading";
import { Content, Section } from "@/components/layout";
import type { Locale } from "@/i18n-config";
import images from "@/public/assets/images.json";
import DiscountCard from "./DiscountCard";

export function Discounts({ lang }: { lang: Locale }) {
  const discounts = {
    shortStay: 5,
    longStay: 8,
  };

  return (
    <Section>
      <Content>
        <SectionHeading
          showBorders
          title={
            <>
              Discounts{" "}
              <span className="text-[var(--brand-warning)]">AVAILABLE</span>{" "}
              TODAY
            </>
          }
          description="Check out our latest discounts and offers."
        />
      </Content>
      <Content className="flex justify-center items-stretch flex-col gap-8 md:flex-row p-4 !py-2 h-full">
        <DiscountCard
          discountPercent={discounts.shortStay}
          ctaText={`Available when booking ${discounts.shortStay} days or more`}
          src={images.images[0]}
        />
        <DiscountCard
          discountPercent={discounts.longStay}
          ctaText={`Available when booking ${discounts.longStay} days or more`}
          src={images.images[1]}
          blurDataURL={images.images[-1]} // Using the last image as a placeholder
        />
      </Content>
    </Section>
  );
}
