import { IconBrandAirbnb, IconBuildingSkyscraper } from "@/components/icons";
import { MenuList } from "../..";

export function Affiliates({ className }: { className?: string }) {
  const items = [
    {
      href: "#",
      label: "Hotel Quinto Nivel RD - AirB&B",
      isExternal: true,
      Icon: IconBrandAirbnb,
      iconSize: 20,
    },
    {
      href: "https://www.airbnb.com/rooms/plus/23068908",
      label: "Hotel Quinto Nivel RD - Expedia",
      isExternal: true,
      Icon: IconBuildingSkyscraper,
      iconSize: 20,
    },
  ];
  return (
    <article className={className}>
      <MenuList items={items} heading="Affiliates" />
    </article>
  );
}
