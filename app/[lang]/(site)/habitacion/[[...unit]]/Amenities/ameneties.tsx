import type { Icon } from "@tabler/icons-react";
import {
  IconAirConditioning,
  IconBlender,
  IconBottle,
  IconBrandCouchdb,
  IconBrandNetflix,
  IconBrandYoutube,
  IconBread,
  IconCooker,
  IconDeviceTv,
  IconDropletBolt,
  IconFridge,
  IconHanger,
  IconHomeStar,
  IconIroning1,
  IconKey,
  IconMicrowave,
  IconPropeller,
  IconTableRow,
  IconTeapot,
  IconToolsKitchen3,
  IconWashMachine,
  IconWheelchair,
  IconWifi,
} from "@/components/icons";

interface Amenity {
  Icon: Icon;
  label: string;
}

export const amenities: Amenity[] = [
  {
    Icon: IconAirConditioning,
    label: "Air Conditioner",
  },
  {
    Icon: IconTableRow,
    label: "Table Top",
  },
  {
    Icon: IconMicrowave,
    label: "Microwave",
  },
  {
    Icon: IconToolsKitchen3,
    label: "Kitchen",
  },
  {
    Icon: IconIroning1,
    label: "Iron",
  },
  {
    Icon: IconCooker,
    label: "Stove",
  },
  {
    Icon: IconWheelchair,
    label: "Disability Friendly",
  },
  {
    Icon: IconFridge,
    label: "Refrigerator",
  },
  {
    Icon: IconBrandYoutube,
    label: "YouTube",
  },
  {
    Icon: IconHanger,
    label: "Closet",
  },
  {
    Icon: IconBrandNetflix,
    label: "NetFlix",
  },
  {
    Icon: IconBread,
    label: "Toaster",
  },
  {
    Icon: IconTeapot,
    label: "Coffee Maker",
  },
  {
    Icon: IconWifi,
    label: "Wifi",
  },
  {
    Icon: IconDropletBolt,
    label: "Water Hot/Cold",
  },
  {
    Icon: IconKey,
    label: "Electric Keys",
  },
  {
    Icon: IconWashMachine,
    label: "Laundry",
  },
  {
    Icon: IconBlender,
    label: "Blender",
  },
  {
    Icon: IconDeviceTv,
    label: "Smart TV",
  },
  {
    Icon: IconPropeller,
    label: "Ceiling Fan",
  },
  {
    Icon: IconBrandCouchdb,
    label: "Coach",
  },
  {
    Icon: IconHomeStar,
    label: "Rooftop Access",
  },
  {
    Icon: IconBottle,
    label: "Beverage Included",
  },
];
