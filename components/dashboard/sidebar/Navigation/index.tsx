import { IconBellFilled } from "@/components/icons";
import { DrawerMenu } from "@/components/layout/sections/Navigation/components/Drawer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import type { Locale } from "@/i18n-config";

export function Navigation({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <nav className="flex items-center p-2">
      <SidebarTrigger />
      <Separator
        orientation="vertical"
        className="mx-2 data-[orientation=vertical]:h-4"
      />
      {children}
      <ul className="ml-auto">
        <li className="">
          <Button size="icon" variant="secondary">
            <IconBellFilled />
          </Button>
        </li>
        <li className="block md:hidden">
          <DrawerMenu lang={lang} className="ml-auto" />
        </li>
      </ul>
    </nav>
  );
}
