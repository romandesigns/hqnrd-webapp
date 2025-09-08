import { Brand } from "@/components/features";
import { Locale } from "@/i18n-config";

export const Navigation = ({ lang }: { lang: Locale }) => {
  return (
    <nav className="py-2">
      {/* Desktop */}
      <ul className="w-full px-2 max-width mx-auto flex items-center">
        <li className="mr-auto">
          <Brand lang={lang} headingLevel="h1" className="font-sans" />
        </li>
        <li>Home</li>
        <li>Rooms</li>
        <li>AUTH</li>
      </ul>
    </nav>
  );
};
