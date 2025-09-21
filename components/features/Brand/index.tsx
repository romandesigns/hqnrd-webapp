import Image from "next/image";
import images from "@/public/assets/images.json";
import { HQNRD } from "@/constants";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import clsx from "clsx";

export function Brand({
  width = 26,
  height = 26,
  lang = "en",
  headingLevel = "h1",
  className = "",
}: {
  width?: number;
  height?: number;
  lang: Locale;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}) {
  const HeadingTag = headingLevel;

  return (
    <Link
      href={`/${lang}`}
      className={clsx("flex items-center space-x-2", className)}
    >
      <Image
        width={width}
        height={height}
        src={images.hotel_logo}
        alt={HQNRD.BRANDING.alt}
      />
      <div>
        <HeadingTag className="font-black uppercase text-[0.7rem] pt-1">
          {HQNRD.BRANDING.LongName}
        </HeadingTag>
        <p className="text-[0.65rem] text-muted-foreground font-medium">
          {HQNRD.BRANDING.slogan}
        </p>
      </div>
    </Link>
  );
}
