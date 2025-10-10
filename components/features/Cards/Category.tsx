import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import images from "@/public/assets/images.json";
import { Card } from "./Default";

function ItemsCounter({ count, label }: { count?: number; label?: string }) {
  return (
    <div className="flex gap-2 text-xs font-sans items-center justify-between">
      <div className="flex text-[0.6rem]">
        <span className="text-muted-foreground dark:text-[var(--brand-warning)] font-bold rounded-full bg-muted dark:bg-[var(--brand-warning)]/6 w-7 h-7 flex items-center justify-center">
          {count}
        </span>
        <span className="p-0.5 px-2 rounded-full bg-muted dark:bg-[var(--brand-warning)]/6 text-muted-foreground dark:text-[var(--brand-warning)] font-semibold flex items-center">
          {label}
        </span>
      </div>
    </div>
  );
}

function CategoryHeader() {
  return (
    <div className="flex items-center justify-start gap-4">
      <ItemsCounter count={4} label="Units Available" />
      <ItemsCounter count={2} label="Max Guests per Unit" />
    </div>
  );
}

function CategoryFooter() {
  return (
    <Button
      variant={"primary"}
      size={"block"}
      asChild
      className="border-brand-primary font-sans uppercase font-bold shadow"
    >
      <Link href="#">Select</Link>
    </Button>
  );
}

export function Category() {
  return (
    <Card
      bodyClassName="p-0 overflow-hidden"
      className="font-sans"
      Header={<CategoryHeader />}
      Footer={<CategoryFooter />}
      aroundPadding
      footerClassName="p-4"
    >
      <figure className="relative h-52 rounded-md overflow-hidden flex items-center justify-center">
        <h3 className="relative z-[2] text-3xl uppercase font-black text-white">
          Basica
        </h3>
        <div className="absolute inset-0 bg-linear-0 from-neutral-950/85 via-neutral-950/50 to-neutral-950/20 z-1" />
        <Image
          src={images["images"][0]}
          alt="Category"
          className="object-cover"
          fill
        />
      </figure>
    </Card>
  );
}
