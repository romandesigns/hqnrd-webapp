import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/components/features/Menu";
import { LocaleDialog } from "@/components/features/LocaleDialog";
import { ExternalLink } from "@/components/features/ExternalLink";
import { MessageCircle, Map, Mail } from "lucide-react";
import { HQNRD } from "@/constants";
import { VariantProps } from "class-variance-authority";

export function ContactWidget({
  lang,
  direction = "horizontal",
  showBorders,
  className,
  btnVariant,
  btnClassNames,
}: {
  lang: Locale;
  direction?: "horizontal" | "vertical";
  showBorders?: boolean;
  className?: string;
  btnVariant?: VariantProps<typeof Button>["variant"];
  btnClassNames?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      {showBorders && <div className="h-0.5 w-full bg-secondary" />}
      <ul
        className={cn(
          `flex items-center justify-center gap-2 space-x-0.5 px-2 ${
            direction === "horizontal" ? "flex-row" : "flex-col"
          }`,
        )}
      >
        <MenuItem className="block">
          <Button
            size="icon"
            variant={btnVariant}
            className={cn(btnClassNames)}
            asChild
          >
            <ExternalLink href={HQNRD.CONTACT.googleMap}>
              <Map />
            </ExternalLink>
          </Button>
        </MenuItem>
        <MenuItem className="block">
          <Button
            size="icon"
            variant={btnVariant}
            className={cn(btnClassNames)}
          >
            <ExternalLink href={HQNRD.CONTACT.whatsapp}>
              <MessageCircle />
            </ExternalLink>
          </Button>
        </MenuItem>
        <MenuItem className="block">
          <LocaleDialog
            lang={lang}
            btnVariant={btnVariant}
            className={cn(btnClassNames)}
          />
        </MenuItem>
        <MenuItem className="block">
          <Button
            size="icon"
            variant={btnVariant}
            className={cn(btnClassNames)}
          >
            <ExternalLink href={HQNRD.CONTACT.email}>
              <Mail />
            </ExternalLink>
          </Button>
        </MenuItem>
      </ul>
      {showBorders && <div className="h-0.5 w-full bg-secondary" />}
    </div>
  );
}
