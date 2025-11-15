import { Card, Submit } from "@/components/features";
import { HiddenInput } from "@/components/features/Form";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { Locale } from "@/i18n-config";

export async function RateForm({
  lang,
  title,
  leftLabel,
  rightLabel,
  formAction,
  leftPlaceholder,
  rightPlaceholder,
  leftName,
  rightName,
}: {
  lang: Locale;
  title: string;
  leftLabel: string;
  rightLabel: string;
  formAction: (formData: FormData) => Promise<void>;
  leftPlaceholder?: string;
  rightPlaceholder?: string;
  leftName?: string;
  rightName?: string;
}) {
  return (
    <Card
      Header={<p className="pb-4">{title}</p>}
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
              {leftLabel}
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder={leftPlaceholder}
              required
              type="number"
              name={leftName}
              min={0}
            />
          </Field>
          <Field>
            <FieldLabel
              className="text-xs"
              htmlFor="checkout-7j9-card-number-uw1"
            >
              {rightLabel}
            </FieldLabel>
            <Input
              id="checkout-7j9-card-number-uw1"
              placeholder={rightPlaceholder}
              required
              type="number"
              name={rightName}
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
            formAction={formAction}
          />
        </div>
      </form>
    </Card>
  );
}
