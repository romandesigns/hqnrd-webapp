import { Container, Main } from "@/components/layout";
import type { Locale } from "@/i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <Container lang={lang}>
      <Main className="h-full p-4">
        <p>Dashboarsdssdsdsdsddsddsddsdd</p>
      </Main>
    </Container>
  );
}
