import { Content } from "@/components/(site)/layout";
import { Category } from "@/components/features/Cards";
import { Locale } from "@/i18n-config";

export function Categories({ lang }: { lang: Locale }) {
  return (
    <section>
      <Content className="py-20">
        <Category />
      </Content>
    </section>
  );
}
