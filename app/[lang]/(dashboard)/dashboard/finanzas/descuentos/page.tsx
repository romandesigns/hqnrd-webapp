import { Discounts } from "@/components/dashboard/page/fees";
import type { Locale } from "@/i18n-config";

export default async function DiscountsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <Discounts lang={lang} />;
}
