import { Content } from "@/components/(site)/layout";
import { Category } from "@/components/features/Cards";
import { Locale } from "@/i18n-config";
import { SectionHeading } from "@/components/features/Heading";

export function Categories({ lang }: { lang: Locale }) {
  return (
    <section>
      <Content className="my-20 md:px-10">
        <SectionHeading title="Recent Testimonials" showBorders />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:p-8  gap-y-4 items-stretch justify-stretch gap-4">
          <li className="flex">
            <Category />
          </li>
          <li className="flex">
            <Category />
          </li>
          <li className="flex">
            <Category />
          </li>
          <li className="flex">
            <Category />
          </li>
          <li className="flex">
            <Category />
          </li>
          <li className="flex">
            <Category />
          </li>
        </ul>
      </Content>
    </section>
  );
}
