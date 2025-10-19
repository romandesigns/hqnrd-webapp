import { Brand } from "@/components/features";
import type { Locale } from "@/i18n-config";

export default function Header({ lang }: { lang: Locale }) {
  return <Brand lang={lang} className="[&_h1]:text-white" />;
}
