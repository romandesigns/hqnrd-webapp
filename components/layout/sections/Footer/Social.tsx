import { IconBrandFacebook, IconBrandInstagram } from "@/components/icons";
import { MenuList } from "../..";

export function Social({ className }: { className?: string }) {
  const items = [
    {
      href: "#",
      label: "Facebook",
      isExternal: true,
      Icon: IconBrandFacebook,
      iconSize: 20,
    },
    {
      href: "https://www.airbnb.com/rooms/plus/23068908",
      label: "Instagram",
      isExternal: true,
      Icon: IconBrandInstagram,
      iconSize: 20,
    },
  ];
  return (
    <article className={className}>
      <MenuList items={items} heading="Social" />
    </article>
  );
}
