import clsx from "clsx";
import { ModeToggle } from "@/components/features";
import type { Locale } from "@/i18n-config";
import { Cart } from "../components/Cart";
import { DrawerMenu } from "../components/Drawer";

export const MobileMenu = ({
  lang,
  className,
}: {
  lang: Locale;
  className?: string;
}) => {
  return (
    <ul
      className={clsx(
        `flex items-center gap-4 text-sm w-full max-width mx-auto py-2`,
        className,
      )}
    >
      <li>
        <ModeToggle />
      </li>
      <li>
        <Cart lang={lang} />
      </li>
      <li>
        <DrawerMenu lang={lang} />
      </li>
    </ul>
  );
};
