import { MainSection } from "@/components/dashboard/main";
import type { Locale } from "@/i18n-config";

export async function AllRooms({ lang }: { lang: Locale }) {
  return (
    <MainSection>
      <article className="font-sans p-2 flex-1 flex items-center justify-center">
        Rooms
      </article>
    </MainSection>
  );
}
