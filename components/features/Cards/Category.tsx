import { Card } from "./Default";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import images from "@/public/assets/images.json";
import { IconUsers } from "@tabler/icons-react";
import Link from "next/link";

function CategoryHeader() {
  return (
    <div className="flex gap-2 px-3 text-xs font-sans items-center justify-between">
      <h3 className="uppercase font-bold font-sans text-lg">Basica</h3>
      <div className="flex gap-2 text-sm">
        <span className="p-0.5 px-0 text-[var(--brand-warning)] font-bold">
          3
        </span>
        <span className="p-0.5 px-2 rounded-full bg-[var(--brand-warning)]/10 text-primary uppercase font-bold text-xs flex items-center">
          Units Available
        </span>
      </div>
    </div>
  );
}

function CategoryFooter() {
  return (
    <Button
      variant={"secondary"}
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
      bodyClassName="p-0.5  overflow-hidden"
      className="font-sans"
      Header={<CategoryHeader />}
      Footer={<CategoryFooter />}
      footerClassName="p-4"
    >
      <figure className="relative h-52 rounded-md overflow-hidden">
        <div className="absolute z-10 bottom-2 left-2 p-2 text-white text-xs flex items-center">
          <div className="flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm  p-3 py-2 text-[var(--brand-warning)]">
            <IconUsers size={16} />4
          </div>
          <p className="bg-black/30 p-2 rounded-full text-[var(--brand-warning)]">
            Max guests per unit
          </p>
        </div>
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
