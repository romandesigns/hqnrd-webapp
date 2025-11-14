import { fetchQuery } from "convex/nextjs";
import { Card, Submit } from "@/components/features";
import { HiddenInput } from "@/components/features/Form";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
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
        <Card
          Header={<p className="pb-4">Discounts</p>}
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
                  5 Days Booking
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder={discount?.firstDiscount?.toString() || "0"}
                  required
                  type="number"
                  step={1}
                  name="firstDiscount"
                  min={0}
                />
              </Field>
              <Field>
                <FieldLabel
                  className="text-xs"
                  htmlFor="checkout-7j9-card-number-uw1"
                >
                  15 Days Booking
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder={discount?.secondDiscount?.toString() || "0"}
                  required
                  type="number"
                  step={1}
                  min={0}
                  name="secondDiscount"
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
                formAction={createDiscounts}
              />
            </div>
          </form>
        </Card>
      </article>
    </MainSection>
  );
}
