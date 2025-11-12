"use client";

import { IconEdit } from "@/components/icons";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export function Edit({ className }: { className?: string }) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className={clsx("[&_svg]:text-(--brand-warning)", className)}
    >
      <IconEdit />
    </Button>
  );
}
