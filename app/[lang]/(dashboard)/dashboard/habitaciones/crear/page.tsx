import { Main } from "@/components/layout";
import type { Locale } from "@/i18n-config";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return <Main className="flex-1 flex flex-col">Crear Habitacion</Main>;
}
