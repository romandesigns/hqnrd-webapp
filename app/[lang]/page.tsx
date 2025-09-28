import { Container } from "@/components/(site)/layout";
import {
  Header,
  Testimonials,
  Categories,
} from "@/components/(site)/page/home";
import { RoomsFilter } from "@/components/features";
import { Locale } from "@/i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <Container lang={lang} showNavBar showFooter Header={Header}>
      <RoomsFilter lang={lang} />
      <Testimonials />
      <Categories lang={lang} />
    </Container>
  );
}
