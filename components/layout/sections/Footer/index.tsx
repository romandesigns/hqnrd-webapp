import clsx from "clsx";
import { Brand, Card } from "@/components/features";
import type { Locale } from "@/i18n-config";
import { Affiliates } from "./Affiliates";
import { Details } from "./Details";
import { GoogleMap } from "./GoogleMap";
import { Help } from "./Help";
import { Social } from "./Social";

export const Footer = ({
  lang,
  className,
}: {
  lang: Locale;
  className?: string;
}) => {
  return (
    <footer className={clsx(`py-10 pb-2 px-2`, className)}>
      <Card
        horizontalPadding
        bodyClassName="font-sans [&_ul_li]:hover:underline"
        className="max-w-[95rem] mx-auto"
        Header={
          <div className="flex justify-start items-center p-2 lg:px-12">
            <Brand lang={lang} />
          </div>
        }
        Footer={
          <div className="text-[0.5rem] font-bold text-center py-4 text-[var(--brand-warning)] uppercase">
            Designed and developed by WavyStack
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14 lg:px-10 py-8 pb-0">
          <Details />
          <Social />
          <Help />
          <Affiliates />
        </div>
        <div className="gap-y-14 lg:px-10 py-8 pb-0">
          <GoogleMap className="w-full md:max-w-md" />
        </div>
      </Card>
    </footer>
  );
};
