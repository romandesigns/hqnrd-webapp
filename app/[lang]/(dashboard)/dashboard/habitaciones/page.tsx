import { fetchQuery } from "convex/nextjs";
import { MainSection } from "@/components/dashboard/main";
import { api } from "@/convex/_generated/api";
import type { Locale } from "@/i18n-config";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const preloadedTasks = await fetchQuery(api.rooms.getRooms, {});
  console.log(preloadedTasks);
  return (
    <MainSection lang={lang} currentPage="habitaciones">
      <section className="p-2">Habitaciones</section>
    </MainSection>
  );
}
