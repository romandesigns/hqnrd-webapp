import { Locale } from "@/i18n-config";
import Link from "next/link";

export function RoomMenuItem({
  title,
  href,
  description,
  lang,
}: {
  title: Record<Locale, string>;
  href: string;
  description: Record<Locale, string>;
  lang: Locale;
}) {
  return (
    <Link
      href={href}
      className="flex gap-2 p-2 font-sans hover:bg-accent m-1 rounded-md"
    >
      <figure className="relative h-22 w-full bg-red-500 rounded-sm" />
      <div className="h-full flex flex-col justify-start w-full">
        {/* title */}
        <p className="font-black text-xs uppercase">{title[lang]}</p>
        {/* description */}
        <p className="text-xs text-muted-foreground mt-1 font-normal leading-relaxed">
          {description[lang]}
        </p>
      </div>
    </Link>
  );
}
