import type { Icon } from "@tabler/icons-react";
import {
  IconBath,
  IconBedFilled,
  IconBrandIntercom,
  IconRulerMeasure,
  IconTrafficCone,
  IconVideo,
  IconWindow,
} from "@/components/icons";

interface FeatureItem {
  id: number;
  color: string;
  Icon: Icon;
  text: string;
}

export const featuresList: FeatureItem[] = [
  {
    id: 1,
    color: "bg-pink-100",
    Icon: IconBath,
    text: "Private",
  },
  {
    id: 2,
    color: "bg-green-100",
    Icon: IconWindow,
    text: "Balcony",
  },
  {
    id: 3,
    color: "bg-cyan-100",
    Icon: IconRulerMeasure,
    text: "258 Sqf",
  },
  {
    id: 4,
    color: "bg-sky-100",
    Icon: IconTrafficCone,
    text: "Parking",
  },
  {
    id: 5,
    color: "bg-violet-100",
    Icon: IconWindow,
    text: "Rooftop",
  },
  {
    id: 6,
    color: "bg-lime-100",
    Icon: IconBedFilled,
    text: "1.5 Beds",
  },
  {
    id: 7,
    color: "bg-emerald-100",
    Icon: IconVideo,
    text: "Surveillance",
  },
  {
    id: 8,
    color: "bg-amber-100",
    Icon: IconBrandIntercom,
    text: "Intercom",
  },
];
