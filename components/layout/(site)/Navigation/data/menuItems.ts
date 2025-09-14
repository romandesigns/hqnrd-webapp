import { Locale } from "@/i18n-config";

export const roomsMenuItems: {
  title: Record<Locale, string>;
  href: string;
  description: Record<Locale, string>;
}[] = [
  {
    title: { es: "Básicas", en: "Basic" },
    href: "/habitaciones/basicas",
    description: {
      en: "Simple and cozy for one or two guests.",
      es: "Sencillas y acogedoras para una o dos personas.",
    },
  },
  {
    title: { es: "Standards", en: "Standard" },
    href: "/habitaciones/standards",
    description: {
      en: "Comfortable and practical stay.",
      es: "Estancia cómoda y práctica.",
    },
  },
  {
    title: { es: "Doble Camas", en: "Double Beds" },
    href: "/habitaciones/doble-camas",
    description: {
      en: "Two beds, perfect for friends.",
      es: "Dos camas, ideal para amigos.",
    },
  },
  {
    title: { es: "Dobles", en: "Double" },
    href: "/habitaciones/dobles",
    description: {
      en: "Cozy room with a double bed.",
      es: "Acogedora con cama doble.",
    },
  },
  {
    title: { es: "Familiares", en: "Family" },
    href: "/habitaciones/familiares",
    description: {
      en: "Spacious option for families.",
      es: "Espaciosa para familias.",
    },
  },
  {
    title: { es: "Ejecutivas", en: "Executive" },
    href: "/habitaciones/ejecutivas",
    description: {
      en: "Modern and premium comfort.",
      es: "Moderna y de confort premium.",
    },
  },
];
