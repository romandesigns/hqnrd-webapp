import type { Locale } from "@/i18n-config";
import { Category } from "@/components/dashboard/page/rooms";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
const { lang } = await params;
  return (
      <Category lang={lang} />
  );
}
