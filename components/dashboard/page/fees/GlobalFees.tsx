import { fetchQuery } from "convex/nextjs";
import { Card, Submit } from "@/components/features";
import { HiddenInput } from "@/components/features/Form";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
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
        <Card
          Header={<p className="pb-4">Global Fees</p>}
          className="md:max-w-md lg:max-w-2xl p-4"
          aroundPadding
          headerClassName="px-0 pb-0"
          footerClassName="space-y-4 mt-4"
        >
          <form>
            <FieldGroup className="flex md:flex-row">
              <Field>
                <FieldLabel
                  className="text-xs"
                  htmlFor="checkout-7j9-card-name-43j"
                >
                  Locale Guests
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder={fees?.localGuestFee?.toString() || "0"}
                  required
                  type="number"
                  step={0.25}
                  name="localGuestFee"
                  min={0}
                />
              </Field>
              <Field>
                <FieldLabel
                  className="text-xs"
                  htmlFor="checkout-7j9-card-number-uw1"
                >
                  International Guests
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder={fees?.foreignGuestFee?.toString() || "0"}
                  required
                  type="number"
                  step={0.25}
                  name="foreignGuestFee"
                  min={0}
                />
              </Field>
            </FieldGroup>
            <HiddenInput name="lang" defaultValue={lang} />
            <div className="mt-4">
              <Submit
                size="block"
                variant="primary"
                type="submit"
                label="Submit"
                formAction={createGlobalFees}
              />
            </div>
          </form>
        </Card>
      </article>
    </MainSection>
  );
}
