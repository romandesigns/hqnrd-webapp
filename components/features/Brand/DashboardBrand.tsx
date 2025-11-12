import { HQNRD } from "@/constants";
import images from "@/public/assets/images.json";
import type { Locale } from "@/i18n-config";
import Link from "next/link";
import Image from "next/image";

export function DashboardBrand({ lang }: { lang: Locale }) {
  return (
    <Link href={`/${lang}/dashboard`} className="font-sans">
      <Image
        src={images.hotel_logo}
        alt={HQNRD.BRANDING.alt}
        height={20}
        width={20}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <div className="text-base font-semibold">
        <h1 className="truncate font-black uppercase text-[0.6rem] pt-1">
          {HQNRD.BRANDING.LongName}
        </h1>
        <p className="truncate  text-[0.65rem] text-muted-foreground font-normal">
          {HQNRD.BRANDING.slogan}
        </p>
      </div>
    </Link>
  );
}
