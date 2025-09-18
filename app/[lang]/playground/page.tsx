import { Container } from "@/components/layout";
import { Locale } from "@/i18n-config";

export default async function PlaygroundPage({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;

  return (
    <Container lang={lang} showNavBar showFooter>
      <div className="font-sans w-full items-center justify-center min-h-screen gap-16">
        <h2 className=" ">Playground</h2>
      </div>
    </Container>
  );
}
