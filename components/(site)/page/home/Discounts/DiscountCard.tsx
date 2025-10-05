import React from "react";
import Image from "next/image";
import { HQNRD } from "@/constants";
import { Card } from "@/components/features";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function DiscountCard({
  discountPercent,
  ctaText,
  src,
  blurDataURL,
}: {
  discountPercent?: number;
  ctaText?: string;
  src: string;
  blurDataURL?: string;
}) {
  return (
    <Card
      Header={
        <h3 className="uppercase font-black text-center !text-sm p-4 py-2">
          Discount Available
        </h3>
      }
      Footer={
        <p className="py-4 text-xs w-full text-center font-semibold text-[var(--brand-warning)]">
          {ctaText}
        </p>
      }
      bodyClassName="p-0"
      className="max-w-lg w-full"
    >
      <div className="relative flex-1">
        <div className="absolute rounded-md inset-4 flex items-center justify-center bg-background/40 z-[2] backdrop-blur-xl overflow-hidden">
          <p className="relative z-[1] text-9xl font-black">
            {discountPercent ?? 0}%
          </p>
          <FlickeringGrid
            className="absolute bottom-0 top-0 left-0 right-0 w-full h-full z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)] opacity-50"
            squareSize={4}
            gridGap={6}
            color="white"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
        </div>
        <Image
          src={src}
          width={500}
          height={500}
          alt={`${HQNRD.BRANDING.LongName}-Discount`}
          className="rounded-md z-1 relative"
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
        />
        <div className="absolute rounded-md inset-0 bg-linear-to-t from-sidebar bg-sidebar/20 overflow-hidden to-sidebar" />
      </div>
    </Card>
  );
}
