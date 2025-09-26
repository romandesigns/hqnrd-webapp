import { Copy } from "./Copy";
import { Gallery } from "./Gallery";
import { Locale } from "@/i18n-config";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="font-sans">
      <section className="grid grid-cols-1 gap-2 lg:grid-cols-2  px-4 max-width mx-auto lg:py-40">
        <Copy lang={lang} />
        <Gallery />
      </section>
    </header>
  );
}
