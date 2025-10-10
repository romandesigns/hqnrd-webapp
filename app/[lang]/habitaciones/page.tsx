import Image from "next/image";
import { Container, Content, Main } from "@/components/(site)/layout";
import { Trending } from "@/components/(site)/page/home";
import { Header } from "@/components/(site)/page/rooms";
import { Room as RoomCard } from "@/components/features/Cards";
import type { Locale } from "@/i18n-config";

export default async function HabitacionesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <Container lang={lang} showNavBar showFooter>
      <Header lang={lang} />
      <Main>
        <Content>
          <ul className="grid grid-cols-1  sm:grid-cols-2 sm:gap-1 md:gap-2 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 p-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
              (item, index) => (
                <li key={index}>
                  <RoomCard />
                </li>
              ),
            )}
          </ul>
        </Content>
        <Trending lang={lang} className="!py-20"/>
      </Main>
    </Container>
  );
}
