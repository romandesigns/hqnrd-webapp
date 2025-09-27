import { Content } from "@/components/(site)/layout";
import { Copy, Gallery } from "./features";
import { Locale } from "@/i18n-config";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="font-sans">
      <section>
        <Content className="grid grid-cols-1 gap-2 lg:grid-cols-2  lg:py-40">
          <>
            <Copy lang={lang} />
            <Gallery />
          </>
        </Content>
      </section>
    </header>
  );
}
