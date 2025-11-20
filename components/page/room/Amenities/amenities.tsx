import type { Icon } from "@tabler/icons-react";
import type { IconType } from "react-icons/lib";
import {
  GrFan,
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
  IconSunElectricity,
  IconTableRow,
  IconTeapot,
  IconToolsKitchen3,
  IconWashMachine,
  IconWheelchair,
  IconWifi,
  MdOutlineDinnerDining,
  PiTowel,
} from "@/components/icons";
import { amenities as baseAmenities } from "../../../../utils/shared/amenities";

export type AmenityKey =
  | "pi_towel"
  | "dinning_table"
  | "gr_fan"
  | "air_conditioning"
  | "table_top"
  | "microwave"
  | "kitchen"
  | "iron"
  | "stove"
  | "disability_friendly"
  | "refrigerator"
  | "youtube"
  | "closet"
  | "netflix"
  | "toaster"
  | "coffee_maker"
  | "wifi"
  | "water_hot_cold"
  | "electric_keys"
  | "laundry"
  | "blender"
  | "smart_tv"
  | "couch"
  | "rooftop_access"
  | "beverage_included"
  | "energy_24_7";

export interface BaseAmenity {
  key: AmenityKey;
  label: string;
}

const iconMap: Record<AmenityKey, Icon | IconType> = {
  dinning_table: MdOutlineDinnerDining,
  pi_towel: PiTowel,
  gr_fan: GrFan,
  air_conditioning: IconAirConditioning,
  table_top: IconTableRow,
  microwave: IconMicrowave,
  kitchen: IconToolsKitchen3,
  iron: IconIroning1,
  stove: IconCooker,
  disability_friendly: IconWheelchair,
  refrigerator: IconFridge,
  youtube: IconBrandYoutube,
  closet: IconHanger,
  netflix: IconBrandNetflix,
  toaster: IconBread,
  coffee_maker: IconTeapot,
  wifi: IconWifi,
  water_hot_cold: IconDropletBolt,
  electric_keys: IconKey,
  laundry: IconWashMachine,
  blender: IconBlender,
  smart_tv: IconDeviceTv,
  couch: IconBrandCouchdb,
  rooftop_access: IconHomeStar,
  beverage_included: IconBottle,
  energy_24_7: IconSunElectricity,
};

export const amenities = baseAmenities.map((item) => ({
  ...item,
  Icon: iconMap[item.key as AmenityKey],
}));
