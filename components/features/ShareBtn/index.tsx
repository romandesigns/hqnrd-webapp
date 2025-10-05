import { IconShare } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function ShareBtn() {
  return (
    <div className="flex w-full items-center justify-start pt-3">
      <Button size="icon" variant="outline">
        <IconShare />
      </Button>
    </div>
  );
}
