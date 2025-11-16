import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { IconX } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Locale } from "@/i18n-config";

interface ModalProps {
  title?: string;
  cardBodyClassName?: string;
  formClassName?: string;
  triggerLabel: string;
  Component: React.ComponentType<{
    lang: Locale;
    className?: string;
    slug?: string;
  }>;
  lang: Locale;
}

export function Modal({
  triggerLabel,
  Component,
  cardBodyClassName,
  formClassName,
  lang,
  title,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full max-w-md">{triggerLabel || "Open Dialog"}</Button>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0" showCloseButton={false}>
        <DialogHeader className="items-center justify-between  flex-row p-2 py-1">
          <DialogTitle className="inline-block text-sm">{title}</DialogTitle>
          <DialogClose asChild>
            <Button size={"icon"} variant={"ghost"}>
              <IconX />
            </Button>
          </DialogClose>
        </DialogHeader>
        <Component
          lang={lang}
          cardBodyClassName={cardBodyClassName}
          formClassName={formClassName}
        />
      </DialogContent>
    </Dialog>
  );
}
