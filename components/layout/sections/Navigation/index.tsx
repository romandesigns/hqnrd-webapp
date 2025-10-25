import clsx from "clsx";
import { Brand } from "@/components/features";
import type { Locale } from "@/i18n-config";
import { DesktopMenu, MobileMenu } from "./features";

export const Navigation = ({
  lang,
  className,
}: {
  lang: Locale;
  className?: string;
}) => {
  return (
    <nav
      className={clsx(
        `w-full flex items-center justify-between font-sans sticky top-0 bg-background/85 backdrop-blur-2xl shadow-sm dark:shadow-black p-2 py-1 z-50`,
        className,
      )}
    >
      <div className="grid grid-cols-[auto_1fr] w-full max-width md:mx-auto">
        <Brand lang={lang} className="mr-auto max-md:[&_img]:max-w-[1.4rem]" />
        <DesktopMenu
          lang={lang}
          className={clsx(
            `md:flex items-center justify-end p-0 md:py-2 hidden`,
            className,
          )}
        />
        <MobileMenu
          lang={lang}
          className={clsx(
            `flex items-center justify-end p-0 md:hidden`,
            className,
          )}
        />
      </div>
    </nav>
  );
};
