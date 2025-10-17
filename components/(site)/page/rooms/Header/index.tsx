import { Content } from "@/components/(site)/layout";
import { Header as HeaderSection } from "@/components/(site)/layout/sections/Header";
import { ContactWidget } from "@/components/features";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Locale } from "@/i18n-config";

export function Header({ lang }: { lang: Locale }) {
  return (
    <HeaderSection className="py-10 lg:py-30 lg:pb-5 p-2">
      <Content className="flex flex-col items-center justify-center gap-6">
        <div>
          <h2 className="uppercase font-bold text-lg text-center md:block hidden">
            Choose a Category From Our Catalog
          </h2>
          <h2 className="uppercase font-bold text-lg text-center block md:hidden">
            Choose From Our Catalog
          </h2>
          <p className="text-sm text-center text-muted-foreground">
            Every unit offers the same premium quality
          </p>
        </div>
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
          <span className="p-0.5 bg-[var(--brand-primary)]/6 text-[var(--brand-primary)] px-2 rounded-md mx-2 font-bold">
            4
          </span>{" "}
          Basic rooms
        </div>
      </Content>
    </HeaderSection>
  );
}
