import Image from "next/image";
import images from "@/public/assets/images.json";
import { HQNRD } from "@/constants";
import Link from "next/link";
import { Locale } from "@/i18n-config";

export function Brand({
  width = 25,
  height = 25,
  lang = "en",
  headingLevel = "h1",
}: {
  width?: number;
  height?: number;
  lang: Locale;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) {
  const HeadingTag = headingLevel; // dynamic heading

  return (
    <Link href={`/${lang}`} className="flex items-center space-x-2">
      <Image
        width={width}
        height={height}
        src={images.hotel_logo}
        alt={HQNRD.BRANDING.alt}
      />
      <div>
        <HeadingTag className="font-bold uppercase text-[0.8rem] mt-0.5">
          {HQNRD.BRANDING.LongName}
        </HeadingTag>
        <p className="text-[0.7rem] text-muted-foreground">
          {HQNRD.BRANDING.slogan}
        </p>
      </div>
    </Link>
  );
}
