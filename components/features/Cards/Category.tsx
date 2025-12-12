import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n-config";
import images from "@/public/assets/images.json";
import { Card } from "./Default";

function ItemsCounter({ count, label }: { count?: number; label?: string }) {
  return (
    <div className="flex gap-2 text-xs font-sans items-center justify-between">
      <div className="flex text-[0.6rem]">
        <span className="text-muted-foreground dark:text-(--brand-warning) font-bold rounded-full bg-muted dark:bg-(--brand-warning)/20 w-6 h-6 flex items-center justify-center">
          {count}
        </span>
        <span className="p-0.5 px-2 rounded-full bg-muted dark:bg-(--brand-warning)/20 text-muted-foreground dark:text-(--brand-warning) font-semibold flex items-center">
          {label}
        </span>
      </div>
    </div>
  );
}

function CategoryHeader({ maxGuests }: { maxGuests: number }) {
  return (
    <div className="flex items-center justify-start gap-4 z-2">
      <ItemsCounter count={4} label="Units Available" />
      <ItemsCounter count={maxGuests} label="Guests per Unit" />
    </div>
  );
}

function CategoryFooter({ slug, lang }: { slug: string; lang: Locale }) {
  return (
    <Button
      variant={"primary"}
      size={"block"}
      asChild
      className="border-brand-primary font-sans uppercase font-bold shadow"
    >
      <Link href={`/${lang}/habitaciones/${slug}`}>Select</Link>
    </Button>
  );
}

export function Category({
  title,
  coverUrl,
  coverAlt,
  slug,
  lang,
  maxGuests,
}: {
  title: string;
  coverUrl: string | null;
  coverAlt: string | null;
  slug: string;
  lang: Locale;
  maxGuests: number;
}) {
  return (
    <Card
      bodyClassName="p-0 overflow-hidden"
      className="font-sans"
      Footer={<CategoryFooter lang={lang} slug={slug} />}
      aroundPadding
      footerClassName="p-4"
    >
      <figure className="relative h-52 rounded-md overflow-hidden flex items-end justify-start">
        <div className="flex flex-col items-start z-2 p-2 px-4">
          <h3 className="relative  text-lg uppercase font-black font-sans text-white">
            {title}
          </h3>
          <CategoryHeader maxGuests={maxGuests} />
        </div>
        <div className="absolute inset-0 bg-linear-0 from-neutral-950/95 via-neutral-950/60 to-neutral-950/40 z-1" />
        <Image
          src={coverUrl}
          alt={coverAlt || "No image"}
          className="object-cover"
          fill
        />
      </figure>
    </Card>
  );
}
