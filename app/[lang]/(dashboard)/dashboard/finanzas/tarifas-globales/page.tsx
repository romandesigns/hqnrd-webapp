import { GlobalFees } from "@/components/dashboard/page/fees";
import type { Locale } from "@/i18n-config";

export default async function GlobalFeesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <GlobalFees lang={lang} />;
}
