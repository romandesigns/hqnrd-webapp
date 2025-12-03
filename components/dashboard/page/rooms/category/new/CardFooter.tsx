import { ImageUpload, Submit, TextArea } from "@/components/features";
import { HiddenInput } from "@/components/features/Form";
import { IconDeviceFloppy } from "@/components/icons";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { Locale } from "@/i18n-config";
import { createCategory } from "@/utils/actions";

export function CardFooter({ lang }: { lang: Locale }) {
  return (
    <form className="flex flex-col gap-4 carved">
      <div className="flex justify-end mt-8 [&_div]:max-w-20 [&_div]:first:ml-auto w-full">
        <ImageUpload
          fileName="coverUrl"
          labelStyle="ml-auto border-none [&_button]:right-auto [&_button]:bottom-auto [&_p]:hidden w-10 h-10 p-0 flex item-center justify-center"
          aspect={4 / 3}
        />
      </div>
      <FieldGroup className="gap-4">
        <FieldGroup className="flex-row">
          <Field>
            <FieldLabel htmlFor="categoryName">Enter Category Name</FieldLabel>
            <Input
              required
              placeholder="Name"
              className="peer w-full"
              type="text"
              id="categoryName"
              name="categoryName"
            />
            <HiddenInput name="lang" defaultValue={lang} />
          </Field>
          <Field>
            <FieldLabel htmlFor="maxGuests">Max Guest</FieldLabel>
            <Input
              required
              min={1}
              placeholder="0"
              className="peer w-full"
              type="number"
              id="maxGuests"
              name="maxGuests"
            />
          </Field>
        </FieldGroup>
        <Field>
          <FieldLabel htmlFor="description">Description</FieldLabel>
          <TextArea name="coverAlt" />
        </Field>
      </FieldGroup>
      <Submit
        formAction={createCategory}
        Icon={IconDeviceFloppy}
        label={"Save"}
        variant="primary"
        type="submit"
        size="block"
      />
    </form>
  );
}
