import { Container } from "@/components/(site)/layout";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/(site)/page/Home/Header";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <Container lang={lang} showNavBar showFooter>
      <Header />
    </Container>
  );
}
