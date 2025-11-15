import { fetchQuery } from "convex/nextjs";
import { RateForm } from "@/components/features/Form";
import { api } from "@/convex/_generated/api";
import type { Locale } from "@/i18n-config";
import { createGlobalFees } from "@/utils/actions/finances";
import { MainSection } from "../../main";

export async function GlobalFees({ lang }: { lang: Locale }) {
  const globalFees = await fetchQuery(api.fees.getGlobalFees);
  const fees = globalFees[globalFees.length - 1];
  return (
    <MainSection>
      <article className="font-sans p-2 flex-1 flex items-center justify-center">
        <RateForm
          title="Global Fees"
          leftLabel="Locale Guests"
          rightLabel="International Guests"
          leftPlaceholder={fees?.localGuestFee?.toString() || "0"}
          rightPlaceholder={fees?.foreignGuestFee?.toString() || "0"}
          formAction={createGlobalFees}
          lang={lang}
          leftName="localGuestFee"
          rightName="foreignGuestFee"
        />
      </article>
    </MainSection>
  );
}
