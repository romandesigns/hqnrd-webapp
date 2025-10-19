import { RoomsFilter } from "@/components/features";
import { Container, Main } from "@/components/layout";
import {
  Categories,
  Discounts,
  Header,
  ScenicSpaces,
  Testimonials,
  Trending,
} from "@/components/page/home";
import { BackgroundGradient } from "@/components/ui/bgGradient";
import type { Locale } from "@/i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <Container lang={lang} showNavBar showFooter Header={Header}>
      <Main>
        <BackgroundGradient />
        <RoomsFilter lang={lang} />
        <Testimonials />
        <Discounts lang={lang} />
        <Categories lang={lang} />
        <ScenicSpaces lang={lang} />
        <Trending lang={lang} />
      </Main>
    </Container>
  );
}
