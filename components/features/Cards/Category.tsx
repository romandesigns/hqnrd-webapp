import { Card } from "./Default";
import { ExternalLink, StarsRating } from "@/components/features";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import images from "@/public/assets/images.json";

function CategoryHeader() {
  return (
    <div className="flex gap-2 text-xs font-sans items-center justify-between">
      <h3 className="uppercase font-bold font-sans text-lg">Basica</h3>
      <div className="flex gap-2 text-sm">
        <span className="p-0.5 px-0 text-[var(--brand-warning)] font-bold">
          3
        </span>
        <span className="p-0.5 px-2 rounded-full bg-[var(--brand-warning)]/10 text-primary uppercase font-bold text-xs flex items-center">
          Units
        </span>
      </div>
    </div>
  );
}

export function Category() {
  return (
    <Card
      bodyClassName="p-0.5 overflow-hidden"
      className="max-w-96"
      Header={<CategoryHeader />}
      Footer={
        <Button
          variant={"secondary"}
          size={"block"}
          className="border-brand-primary font-sans uppercase font-bold shadow"
        >
          Select
        </Button>
      }
      footerClassName="p-4"
    >
      <figure className="relative h-52 rounded-md overflow-hidden">
        <div className="absolute inset-0 bg-linear-0 from-neutral-950/70 via-neutral-950/20 to-transparent z-1"/>
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
