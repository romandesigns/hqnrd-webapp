import type React from "react";
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
import { Card } from "../Cards";

interface ModalProps<T extends object> {
  title?: string;
  className?: string;
  triggerLabel: string;
  Component: React.ComponentType<T>;
  componentProps: T;
}

export function Modal<T extends object>({
  triggerLabel,
  Component,
  className,
  componentProps,
  title,
}: ModalProps<T>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full max-w-md">
          {triggerLabel || "Open Dialog"}
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 gap-0" showCloseButton={false}>
        {/* HEADER */}
        <Card bodyClassName="p-0! border-0 shadow-none outline-none bg-transparent shadow-none">
          <DialogHeader className="flex flex-row items-center justify-between p-2 py-1 bg-transparent rounded-b-none">
            <DialogTitle className="text-sm">{title}</DialogTitle>

            <DialogClose asChild>
              <Button size="icon" variant="ghost">
                <IconX />
              </Button>
            </DialogClose>
          </DialogHeader>
        </Card>

        {/* COMPONENTE DINÁMICO */}
        <Component {...componentProps} className={className} />
      </DialogContent>
    </Dialog>
  );
}
