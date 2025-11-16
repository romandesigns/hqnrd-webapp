import { IconX } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Locale } from "@/i18n-config";

interface ModalProps {
  title?: string;
  className?: string;
  triggerLabel: string;
  slug: string; // <-- obligatorio
  Component: React.ComponentType<{
    lang: Locale;
    className?: string;
    slug: string;
  }>;
  lang: Locale;
}

export function Modal({
  triggerLabel,
  Component,
  className,
  lang,
  title,
  slug,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full max-w-md">
          {triggerLabel || "Open Dialog"}
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 gap-0" showCloseButton={false}>
        {/* HEADER */}
        <DialogHeader className="flex flex-row items-center justify-between p-2 py-1">
          <DialogTitle className="text-sm">{title}</DialogTitle>

          <DialogClose asChild>
            <Button size="icon" variant="ghost">
              <IconX />
            </Button>
          </DialogClose>
        </DialogHeader>

        {/* RENDER THE INNER COMPONENT */}
        <Component lang={lang} slug={slug} className={className} />
      </DialogContent>
    </Dialog>
  );
}
