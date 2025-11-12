import { IconTrash } from "@/components/icons";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export function Delete({ className }: { className?: string }) {
  return (
    <Button
      size="icon"
      variant="link"
      className={clsx("[&_svg]:text-(--brand-danger)", className)}
    >
      <IconTrash />
    </Button>
  );
}
