import { Content, Section } from "@/components/(site)/layout";
import { Category } from "@/components/features/Cards";
import { Locale } from "@/i18n-config";
import { SectionHeading } from "@/components/features/Heading";

export function Categories({ lang }: { lang: Locale }) {
  return (
    <Section>
      <Content className="md:px-10">
        <SectionHeading
          showBorders
          title="Select Categories"
          description="Browse our room categories and choose your stay"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch justify-stretch gap-6">
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
    </Section>
  );
}
