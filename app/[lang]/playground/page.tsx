import { Carousel } from "@/components/features";
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
      <main className="font-sans w-full items-center justify-center min-h-screen gap-16 pt-0">
        <div className="max-width bg-red-500 mx-auto center h-[80vh] !p-20">
          <h2 className=" ">Playground</h2>
          <Carousel />
        </div>
      </main>
    </Container>
  );
}
