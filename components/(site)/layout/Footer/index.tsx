import { Locale } from "@/i18n-config";
import clsx from "clsx";

export const Footer = ({
  lang,
  className,
}: {
  lang: Locale;
  className?: string;
}) => {
  return <footer className={clsx(``, className)}>Footer</footer>;
};
