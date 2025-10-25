import clsx from "clsx";
import { DrawerMenu } from "@/components/layout/sections/Navigation/components/Drawer";
import { SidebarTrigger } from "@/components/ui/sidebar";
import type { Locale } from "@/i18n-config";

export function Navigation({
  lang = "en",
  className,
}: {
  lang: Locale;
  className?: string;
}) {
  return (
    <nav>
      <ul
        className={clsx(
          `w-full flex justify-between items-center p-2 shadow dark:shadow-black`,
          className,
        )}
      >
        <li>
          <SidebarTrigger />
        </li>
        <li className="block md:hidden">
          <DrawerMenu lang={lang}  />
        </li>
      </ul>
    </nav>
  );
}
