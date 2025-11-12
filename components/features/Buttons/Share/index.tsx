import { IconShare } from "@/components/icons";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export function Share({ className }: { className?: string }) {
  return (
    <Button size="icon" variant="link" className={clsx("", className)}>
      <IconShare />
    </Button>
  );
}
