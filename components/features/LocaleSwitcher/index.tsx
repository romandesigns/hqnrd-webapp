"use client";

import { i18n, Locale } from "@/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import clsx from "clsx";
import { HQNRD } from "@/constants";

export const redirectedPathName = (locale: Locale, pathName: string) => {
  if (!pathName) return "/";
  const segments = pathName.split("/");
  segments[1] = locale;
  return segments.join("/");
};

export function LocaleSwitcher({ lang }: { lang: string }) {
  const pathName = usePathname();
  return (
    <ul className="grid grid-cols-2 grid-rows-[10rem] gap-6 py-6">
      {i18n.locales.map((locale) => {
        return (
          <li
            key={locale}
            className={twMerge(
              `w-full h-full rounded-md hover:border`,
              clsx({
                "text-[var(--brand-primary)]": locale === lang,
                "border border-[var(--brand-primary)] bg-[var(--brand-primary)]/10":
                  locale === lang,
              }),
            )}
          >
            <Link href={redirectedPathName(locale, pathName)}>
              <div className="font-sans flex w-full h-full flex-col space-y-2.5 items-center justify-center">
                <div className="flex flex-col w-full border border-transparent transition-all duration-200 ease-in-out  px-4 rounded-md items-center justify-center">
                  <Image
                    src={`/${HQNRD.LOCALEFLAGS}/${
                      locale === "en" ? "us" : "do"
                    }.svg`}
                    width={120}
                    height={120}
                    alt="Image"
                    className="object-cover"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <p className="font-medium">
                  {locale === "en" ? "English" : "Spanish"}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
