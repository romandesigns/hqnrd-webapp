import { Content } from "@/components/layout";
import type { Locale } from "@/i18n-config";
import { Copy, Gallery } from "./features";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="font-sans">
      <section className="relative">
        <Content className="grid grid-cols-1 gap-2 lg:grid-cols-2  lg:pt-40 lg:pb-20 justify-center items-center mt-10">
          <Copy lang={lang} />
          <Gallery />
        </Content>
      </section>
    </header>
  );
}
