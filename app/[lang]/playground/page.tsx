import { Container } from "@/components/(site)/layout";
import { Locale } from "@/i18n-config";
import { Carousel } from "@/components/features";

export default async function PlaygroundPage({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;

  return (
    <Container lang={lang} showNavBar showFooter>
      <main className="font-sans w-full items-center flex-col justify-center min-h-screen gap-16 pt-0 h-screen flex ">
        <div className="max-width bg-red-500 mx-auto center h-[80vh] !p-20">
          <h2 className=" ">Playground</h2>
          {/* <Carousel /> */}
        </div>

        <h2>Thsi is a test</h2>

        <div className="flex flex-wrap gap-4">
          <div className="w-40 h-40 bg-[var(--sidebar-accent)]" />
          <div className="w-40 h-40 bg-[var(--sidebar)]" />
          <div className="w-40 h-40 bg-[var(--secondary)]" />
          <div className="w-40 h-40 bg-[var(--muted)]" />
          <div className="w-40 h-40 bg-[var(--card)]" />
          <div className="w-40 h-40 bg-[var(--popover)]" />
        </div>
      </main>
    </Container>
  );
}
