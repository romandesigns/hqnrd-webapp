import Image from "next/image";
import { ContactWidget } from "@/components/features";
import { Content } from "@/components/layout";
import { Header as HeaderSection } from "@/components/layout/sections/Header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Locale } from "@/i18n-config";
import images from "@/public/assets/images.json";

export function Header({ lang }: { lang: Locale }) {
  return (
    <HeaderSection className="py-10 p-2  sticky top-8 z-30 bg-background/95 backdrop-blur-sm">
      <Content className="w-full">
        <div className="z-2 relative w-full flex flex-col items-center justify-center gap-6">
          <h2 className="uppercase font-bold text-lg text-center md:block hidden text-muted-foreground">
            Start Booking Today!
          </h2>
          <Select>
            <SelectTrigger className="w-full max-w-md">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <ContactWidget
            lang={lang}
            btnVariant={"bordered"}
            className="hidden md:flex"
          />
        <div className="text-xs font-medium text-muted-foreground text-center lg:text-left w-full">
          Showing{" "}
          <span className="p-0.5 bg-(--brand-warning)/6 text-(--brand-warning) px-2 rounded-md mx-2 font-bold">
            4
          </span>{" "}
          Basic rooms
        </div>
        </div>
        <div className="">
          <div className="bg-linear-to-b from-background/70 via-background/95 to-background absolute inset-0 z-1  rounded-lg backdrop-blur-sm" />
          <Image
            src={images.images[1]}
            alt="Header Image"
            fill
            className="object-cover"
          />
        </div>
      </Content>
    </HeaderSection>
  );
}
