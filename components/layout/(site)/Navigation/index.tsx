import { Brand } from "@/components/features";
import { Locale } from "@/i18n-config";
import clsx from "clsx";
import { DesktopMenu } from "./components/DesktopMenu";
import { MobileMenu } from "./components/MobileMenu";

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
        `w-full flex items-center justify-between font-sans sticky top-0 bg-background shadow-xs dark:shadow-black p-2 md:p-0 px-4 md:px-2`,
        className,
      )}
    >
      <div className="grid grid-cols-[auto_1fr] w-full max-width md:mx-auto">
        <Brand
          lang={lang}
          className="mr-auto max-md:[&_img]:max-w-[1.4rem]"
        />
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
