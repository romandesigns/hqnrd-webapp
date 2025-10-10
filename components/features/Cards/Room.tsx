import Image from "next/image";
import Link from "next/link";
import { FeaturedList } from "@/components/(site)/layout";
import {
  IconAirConditioningDisabled,
  IconBrandNetflix,
  IconBrandYoutube,
  IconParkingCircle,
  IconPropeller,
  IconShare,
  IconSunElectricity,
  IconTeapot,
  IconWheelchair,
  IconWifi,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import images from "@/public/assets/images.json";
import { ShareBtn } from "../ShareBtn";
import { Card } from "./Default";

function ItemsCounter({ count, label }: { count?: number; label?: string }) {
  return (
    <div className="flex gap-2 text-xs font-sans items-center justify-between">
      <div className="flex text-[0.6rem]">
        <span className="text-[var(--brand-warning)] font-bold rounded-full bg-[var(--brand-warning)]/6 w-7 h-7 flex items-center justify-center">
          {count}
        </span>
        <span className="p-0.5 px-2 rounded-full bg-[var(--brand-warning)]/4 text-[var(--brand-warning)] font-semibold flex items-center">
          {label}
        </span>
      </div>
    </div>
  );
}

function CategoryFooter() {
  const amenities = [
    {
      Icon: IconWifi,
      iconSize: 15,
      label: "WiFi",
    },
    {
      Icon: IconBrandNetflix,
      iconSize: 15,
      label: "NetFlix",
    },
    {
      Icon: IconParkingCircle,
      iconSize: 15,
      label: "Parking",
    },
    {
      Icon: IconWheelchair,
      iconSize: 15,
      label: "Wheelchair",
    },
    {
      Icon: IconBrandYoutube,
      iconSize: 15,
      label: "YouTube",
    },
    {
      Icon: IconTeapot,
      iconSize: 15,
      label: "Coffee Maker",
    },
    {
      Icon: IconAirConditioningDisabled,
      iconSize: 15,
      label: "Air Conditioning",
    },
    {
      Icon: IconSunElectricity,
      iconSize: 15,
      label: "Electricity 24/7",
    },
    {
      Icon: IconPropeller,
      iconSize: 15,
      label: "Fan",
    },
  ];

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
      <div className=" flex flex-col relative gap-1 z-[2] pb-2">
        <div className="flex items-center justify-between">
          <h3 className="z-[2] text-md lg:text-sm uppercase font-bold  flex flex-col text-[var(--brand-warning)]">
            Deluxe Room
          </h3>
          <p className="font-bold text-sm lg:text-xs text-primary">
            $3,500/Night
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FeaturedList items={amenities} />
          <span className="font-semibold inline-block">..15 +</span>
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
        <Link href="#">Explore</Link>
      </Button>
    </>
  );
}

export function Room() {
  return (
    <Card
      bodyClassName="p-0 overflow-hidden"
      className="font-sans keen-slider__slide"
      Footer={<CategoryFooter />}
      footerClassName="p-2"
      aroundPadding
    >
      <div>
        <figure className="relative h-52 rounded-sm overflow-hidden flex items-end justify-start">
          <div className="absolute inset-0 bg-linear-0 from-neutral-950/85 via-neutral-950/50 to-neutral-950/20 z-1" />
          <ShareBtn className="absolute text-primary-foreground top-2 right-2 z-10 hover:bg-white/20 dark:text-primary" />
          <Image
            src={images["images"][0]}
            alt="Category"
            className="object-cover"
            fill
          />
        </figure>
      </div>
    </Card>
  );
}
