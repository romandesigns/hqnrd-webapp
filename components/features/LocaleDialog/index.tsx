"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Locale } from "@/i18n-config";
import { cx, VariantProps } from "class-variance-authority";
import { Languages } from "lucide-react";
import { LocaleSwitcher } from "../LocaleSwitcher";

export function LocaleDialog({
  lang,
  btnVariant,
  className,
}: {
  lang: Locale;
  btnVariant: VariantProps<typeof Button>["variant"];
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={btnVariant} size="icon" className={cx(className)}>
          <Languages />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Idiom</DialogTitle>
        </DialogHeader>
        <LocaleSwitcher lang={lang} />
      </DialogContent>
    </Dialog>
  );
}
