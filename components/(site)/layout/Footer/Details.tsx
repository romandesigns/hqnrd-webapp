import React from "react";
import {
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconWorldWww,
} from "@tabler/icons-react";

export function Details() {
  return (
    <div>
      <h3 className="uppercase text-xs font-bold">Contact</h3>
      <ul className="space-y-6 py-4 text-xs md:py-10 md:text-[0.90rem] text-muted-foreground [&>li]:hover:text-foreground cursor-pointer">
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-6">
            <IconBrandWhatsapp />
          </span>
          <span>+1809-753-7500</span>
        </li>
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-6">
            <IconMail />
          </span>
          <span>hotelquintonivelrd@gmail.com</span>
        </li>
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-6">
            <IconMapPin />
          </span>
          <span>Calle de la Mujer #2, Urb, Salcedo 34000, RD</span>
        </li>
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-6">
            <IconWorldWww />
          </span>
          <span>https://hotelquintonivelrd.com</span>
        </li>
      </ul>
    </div>
  );
}
