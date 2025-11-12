import { Input } from "@/components/ui/input";
import type { Locale } from "@/i18n-config";

export function HiddenInput({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue: Locale | string | number;
}) {
  return (
    <Input
      readOnly
      className="hidden"
      type="text"
      name={name}
      defaultValue={defaultValue}
    />
  );
}
