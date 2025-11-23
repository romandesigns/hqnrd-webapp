import type { Icon } from "@tabler/icons-react";
import { fetchQuery } from "convex/nextjs";
import Image from "next/image";
import Link from "next/link";
import { FeaturedList } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import type { Doc, Id } from "@/convex/_generated/dataModel";
import type { Locale } from "@/i18n-config";
import images from "@/public/assets/images.json";
import { getRandomRoomAmenities } from "@/utils/shared/getRandomAmenities";
import { Share } from "../Buttons";
import { Card } from "./Default";

function ItemsCounter({ count, label }: { count?: number; label?: string }) {
  return (
    <div className="flex gap-2 text-xs font-sans items-center justify-between">
      <div className="flex text-[0.6rem]">
        <span className="text-(--brand-warning) font-bold rounded-full bg-(--brand-warning)/6 w-7 h-7 flex items-center justify-center">
          {count}
        </span>
        <span className="p-0.5 px-2 rounded-full bg-(--brand-warning)/4 text-(--brand-warning) font-semibold flex items-center">
          {label}
        </span>
      </div>
    </div>
  );
}

function CategoryFooter({
  title,
  pricePerNight,
  amenities,
  totalAmenities,
  lang,
  slug,
  unitNumber,
}: {
  title: string;
  pricePerNight: number;
  lang: Locale;
  unitNumber?: string;
  slug: string;
  amenities: {
    label: string;
    Icon: React.ComponentType<{ size?: number }>;
    iconSize?: number;
  }[];
  totalAmenities: number;
}) {
  const features = [
    {
      label: "Private Bathroom",
    },
    {
      label: "Intercom",
    },
    {
      label: "Kitchen",
    },
    {
      label: "24.50 SQF",
    },
    {
      label: "Balcony",
    },
  ];

  return (
    <>
      <div className=" flex flex-col relative gap-1 z-2 pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-md lg:text-sm uppercase font-bold  flex flex-col text-(--brand-warning)">
            {title}
          </h3>
          <p className="font-bold text-sm lg:text-xs text-primary">
            {pricePerNight}
            /Night
          </p>
        </div>
        <div className="flex items-center gap-2 py-2">
          <FeaturedList items={amenities} />
          <span className="font-semibold inline-block">
            ..{totalAmenities - amenities.length} +
          </span>
        </div>
        <FeaturedList
          gap={1}
          theme="label-badge"
          accent="muted"
          items={features}
          showLabel
          itemClassName="p-0.5 px-1.5 [&_span[data-label]]:text-[0.6rem] bg-muted backdrop-blur-2xl rounded-full"
        />
      </div>
      <Button
        variant={"primary"}
        size={"block"}
        asChild
        className="border-brand-primary font-sans uppercase font-bold shadow"
      >
        <Link href={`/${lang}/habitacion/${slug}/${String(unitNumber)}`}>
          Explore
        </Link>
      </Button>
    </>
  );
}

export async function Room({
  room,
  lang,
}: {
  room: Doc<"rooms"> & { _id: Id<"rooms"> };
  lang: Locale;
}) {
  const { selected: randomAmenities, totalAvailable } = getRandomRoomAmenities(
    room.amenities,
    8,
  );
  const fileUrl = await fetchQuery(api.upload.getFileUrl, {
    storageId: room.mediaFiles.gallery.primaryImage,
  });

  return (
    <Card
      bodyClassName="p-0 overflow-hidden"
      className="font-sans keen-slider__slide"
      Footer={
        <CategoryFooter
          lang={lang}
          pricePerNight={room.pricePerNight}
          title={room.category.name.singular}
          amenities={randomAmenities}
          totalAmenities={totalAvailable}
          slug={room.category.slugs.singular}
          unitNumber={room.unitNumber}
        />
      }
      footerClassName="p-2"
      aroundPadding
    >
      <div>
        <figure className="relative h-52 rounded-sm overflow-hidden flex items-end justify-start">
          <div className="absolute inset-0 bg-linear-0 from-neutral-950/85 via-neutral-950/50 to-neutral-950/20 z-1" />
          <Share className="absolute text-primary-foreground top-2 right-2 z-10 hover:bg-white/20 dark:text-primary" />
          {fileUrl && (
            <Image src={fileUrl} alt="Category" className="object-cover" fill />
          )}
        </figure>
      </div>
    </Card>
  );
}
