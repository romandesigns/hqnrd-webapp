import { fetchQuery } from "convex/nextjs";
import { MainSection } from "@/components/dashboard/main";
import { Room as RoomCard } from "@/components/features/Cards";
import { api } from "@/convex/_generated/api";
import type { Locale } from "@/i18n-config";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const preloadedTasks = await fetchQuery(api.rooms.getRooms, {});

  return (
    <MainSection>
      <section className="p-2">
        <h1 className="text-2xl font-semibold mb-4">Habitaciones</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-1 md:gap-2 lg:gap-6 md:grid-cols-2 lg:grid-cols-5">
          {preloadedTasks.map((room) => (
            <li key={room._id.toString()}>
              <RoomCard room={room} lang={lang} />
            </li>
          ))}
        </ul>
      </section>
    </MainSection>
  );
}
