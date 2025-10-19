import { IconDeviceMobile, IconZoomQuestion } from "@/components/icons";
import { MenuList } from "../..";

export function Help({ className }: { className?: string }) {
  const items = [
    {
      href: "#",
      label: "Frequently Asked Questions",
      isExternal: true,
      Icon: IconZoomQuestion,
      iconSize: 20,
    },
    {
      href: "#",
      label: "Download Mobile Version",
      isExternal: true,
      Icon: IconDeviceMobile,
      iconSize: 20,
    },
  ];
  return (
    <article className={className}>
      <MenuList items={items} heading="Help" />
    </article>
  );
}
