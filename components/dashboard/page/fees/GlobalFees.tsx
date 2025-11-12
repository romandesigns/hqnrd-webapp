import Link from "next/link";
import { Navigation } from "@/components/dashboard/main";
import { Card, Submit } from "@/components/features";
import { HiddenInput } from "@/components/features/Form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { Locale } from "@/i18n-config";
import { createGlobalFees } from "@/utils/actions/finances";
import { MainSection } from "../../main";

export async function GlobalFees({ lang }: { lang: Locale }) {
  return (
    <MainSection>
      <article className="font-sans p-2 flex-1 flex items-center justify-center">
        <Card
          Header={<p className="pb-4">Global Fees</p>}
          Footer={
            <div>
              <Submit
                size="block"
                variant="primary"
                type='submit'
                label="Submit"
                formAction={createGlobalFees}
              />
            </div>
          }
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
                  placeholder="0"
                  required
                  type="number"
                  step={0.25}
                  name="localGuestsFees"
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
                  placeholder="0"
                  required
                  type="number"
                  step={0.25}
                  name="foreignGuestsFees"
                />
              </Field>
            </FieldGroup>
            <HiddenInput name="lang" defaultValue={lang} />
          </form>
        </Card>
      </article>
    </MainSection>
  );
}
