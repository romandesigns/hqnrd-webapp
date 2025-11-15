import { fetchQuery } from "convex/nextjs";
import { RateForm } from "@/components/features/Form";
import { api } from "@/convex/_generated/api";
import type { Locale } from "@/i18n-config";
import { createDiscounts } from "@/utils/actions";
import { MainSection } from "../../main";

export async function Discounts({ lang }: { lang: Locale }) {
  const discounts = await fetchQuery(api.discounts.getDiscounts);
  const discount = discounts[discounts.length - 1];
  return (
    <MainSection>
      <article className="font-sans p-2 flex-1 flex items-center justify-center">
        <RateForm
          title="Discounts"
          leftLabel="5 Days Booking"
          rightLabel="15 Days Booking"
          leftPlaceholder={discount?.firstDiscount?.toString() || "0"}
          rightPlaceholder={discount?.secondDiscount?.toString() || "0"}
          formAction={createDiscounts}
          lang={lang}
          leftName="firstDiscount"
          rightName="secondDiscount"
        />
      </article>
    </MainSection>
  );
}
