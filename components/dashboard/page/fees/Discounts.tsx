import Link from "next/link";
import { Navigation } from "@/components/dashboard/main";
import { Card, Submit } from "@/components/features";
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
import { MainSection } from "../../main";

export function Discounts({ lang }: { lang: Locale }) {
  return (
    <MainSection>
      <article className="font-sans p-2 flex-1 flex items-center justify-center">
        <Card
          Header={<p className="pb-4">Discounts</p>}
          Footer={
            <div>
              <Submit
                size="block"
                variant="primary"
                lang={lang}
                label="Submit"
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
                  5 Days Booking
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="0"
                  required
                  type="number"
                  step={0.25}
                  name="fiveDaysBooking"
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
                  placeholder="0"
                  required
                  type="number"
                  step={0.25}
                  name="moreThanFifteenDaysBooking"
                />
              </Field>
            </FieldGroup>
          </form>
        </Card>
      </article>
    </MainSection>
  );
}
