import { Brand, Card } from "@/components/features";
import { Locale } from "@/i18n-config";
import clsx from "clsx";
import { Details } from "./Details";
import { Social } from "./Social";
import { Affiliates } from "./Affiliates";
import { Map } from "./Map";
import { Help } from "./Help";

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
        className="max-w-[95rem] mx-auto"
        Header={
          <div className="flex justify-start items-center p-2 lg:px-12">
            <Brand lang={lang} />
          </div>
        }
        Footer={
          <div className="text-[0.5rem] font-semibold text-center py-4 text-[var(--brand-warning)] uppercase">
            Designed and developed by WavyStack
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:px-10 py-8 pb-0">
          <Details />
          <div>
            <Social />
            <Help />
          </div>
          <Affiliates className="mt-4" />
          <Map />
        </div>
      </Card>
    </footer>
  );
};
