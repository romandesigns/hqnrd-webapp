import { Card } from "./Default";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import images from "@/public/assets/images.json";
import {
  IconWifi,
  IconBrandNetflix,
  IconParkingCircle,
  IconWheelchair,
  IconBrandYoutube,
  IconTeapot,
  IconAirConditioningDisabled,
  IconSunElectricity,
  IconPropeller,
  IconShare,
} from "@tabler/icons-react";
import Link from "next/link";

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

function CategoryHeader() {
  return "";
  //   return; (
  //     <div className="flex items-center justify-start gap-4">
  //       <ItemsCounter count={4} label="Units Available" />
  //       <ItemsCounter count={2} label="Max Guests per Unit" />
  //     </div>
  //   )
}

function CategoryFooter() {
  return (
    <>
      <div className=" flex flex-col relative gap-1 z-[2] pb-2">
        <div className="flex items-center justify-between">
          <h3 className="z-[2] text-md lg:text-sm uppercase font-bold  flex flex-col text-[var(--brand-warning)]">
            Deluxe Room
          </h3>
          <p className="font-bold text-sm lg:text-sm">$35,500/Night</p>
        </div>
        <ul className="flex gap-2">
          <li className="">
            <IconWifi size={15} />
          </li>
          <li className="">
            <IconBrandNetflix size={15} />
          </li>
          <li className="">
            <IconParkingCircle size={15} />
          </li>
          <li className="">
            <IconWheelchair size={15} />
          </li>
          <li className="">
            <IconBrandYoutube size={15} />
          </li>
          <li className="">
            <IconTeapot size={15} />
          </li>
          <li className="">
            <IconAirConditioningDisabled size={15} />
          </li>
          <li className="flex items-center justify-center">
            <IconSunElectricity size={16} />
          </li>
          <li className="flex items-center justify-center">
            <IconPropeller size={16} />
          </li>
        </ul>
        <ul className="text-[0.60rem] flex gap-1">
          <li className="p-0.5 px-1  bg-muted backdrop-blur-2xl rounded-full">
            Private Bathroom
          </li>
          <li className="p-0.5 px-1  bg-muted backdrop-blur-2xl rounded-full">
            Intercom
          </li>
          <li className="p-0.5 px-1  bg-muted backdrop-blur-2xl rounded-full">
            Kitchen
          </li>
          <li className="p-0.5 px-1  bg-muted backdrop-blur-2xl rounded-full">
            24.50 SQF
          </li>
          <li className="p-0.5 px-1  bg-muted backdrop-blur-2xl rounded-full">
            Balcony
          </li>
        </ul>
      </div>
      <Button
        variant={"secondary"}
        size={"block"}
        asChild
        className="border-brand-primary font-sans uppercase font-bold shadow"
      >
        <Link href="#">Select</Link>
      </Button>
    </>
  );
}

export function Room() {
  return (
    <Card
      bodyClassName="p-0.5 overflow-hidden"
      className="font-sans keen-slider__slide"
      Footer={
        <>
          <CategoryHeader /> <CategoryFooter />
        </>
      }
      footerClassName="p-2"
    >
      <div>
        <figure className="relative h-52 rounded-sm overflow-hidden flex items-end justify-start">
          <div className="absolute inset-0 bg-linear-0 from-neutral-950/85 via-neutral-950/50 to-neutral-950/20 z-1" />
          <Button
            size={"icon"}
            className="absolute top-2 right-2 z-10  shadow"
            variant={"outline"}
          >
            <IconShare size={18} className="text-white" />
          </Button>
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
