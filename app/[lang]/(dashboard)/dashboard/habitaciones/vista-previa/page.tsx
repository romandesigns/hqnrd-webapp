import type { Locale } from "@/i18n-config";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <p>Habitacion Preview</p>;
}
