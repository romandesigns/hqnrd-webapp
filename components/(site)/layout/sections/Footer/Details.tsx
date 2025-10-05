import {
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconWorldWww,
} from "@/components/icons";
import React from "react";

export function Details() {
  return (
    <div>
      <h3 className="uppercase text-xs font-bold">Contact</h3>
      <ul className="space-y-6 py-4  md:py-10  text-muted-foreground [&>li]:hover:text-foreground cursor-pointer">
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-6">
            <IconBrandWhatsapp size={21} />
          </span>
          <span className="footer-link">+1809-753-7500</span>
        </li>
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-6">
            <IconMail size={20} />
          </span>
          <span className="footer-link">hotelquintonivelrd@gmail.com</span>
        </li>
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-6">
            <IconMapPin size={20} />
          </span>
          <span className="footer-link">
            Calle de la Mujer #2, Urb, Salcedo 34000, RD
          </span>
        </li>
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-6">
            <IconWorldWww size={20} />
          </span>
          <span className="footer-link">https://hotelquintonivelrd.com</span>
        </li>
      </ul>
    </div>
  );
}
