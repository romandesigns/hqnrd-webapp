import { IconBrandWhatsapp, IconMail, IconMapPin } from "@/components/icons";
import { HQNRD } from "@/constants";
import { MenuList } from "../..";

export function Details({ className }: { className?: string }) {
  const items = [
    {
      href: HQNRD.CONTACT.whatsapp,
      label: "+1809-753-7500",
      isExternal: true,
      Icon: IconBrandWhatsapp,
      iconSize: 20,
    },
    {
      href: HQNRD.CONTACT.email,
      label: "hotelquintonivelrd@gmail.com",
      isExternal: true,
      Icon: IconMail,
      iconSize: 20,
    },
    {
      href: HQNRD.CONTACT.googleMap,
      label: "Calle de la Mujer #2, Urb, Salcedo 34000, RD",
      isExternal: true,
      Icon: IconMapPin,
      iconSize: 20,
    },
  ];
  return (
    <article className={className}>
      <MenuList items={items} heading="Contact" />
    </article>
  );
}
