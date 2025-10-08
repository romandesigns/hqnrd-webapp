import { Container, Content, Section } from "@/components/(site)/layout";
import { Locale } from "@/i18n-config";
import { Carousel } from "@/components/features";
import images from "@/public/assets/images.json";
import { Category, Room, Testimonial } from "@/components/features/Cards";

export default async function PlaygroundPage({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;

  function Heading({ label }: { label?: string }) {
    return <h3 className="text-lg  font-bold uppercase">{label}</h3>;
  }

  return (
    <Container lang={lang} showNavBar showFooter>
      <main className="font-sans w-full items-center flex-col justify-center min-h-screen gap-16 pt-0 h-screen flex ">
        <div className="max-width bg-red-500 mx-auto center h-[80vh] !p-20">
          <h2 className=" ">Playground</h2>
          {/* <Carousel /> */}
        </div>

        <Heading label="Cards" />
        {/* ========== Cards ==========  */}
        <Section>
          <Content className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Category />
            <Room />
            <Testimonial />
          </Content>
        </Section>

        {/* ========== Color Palette ==========  */}
        <Heading label="color palette" />
        <Section>
          <div className="flex flex-wrap gap-4">
            <div className="w-40 h-40 bg-[var(--sidebar-accent)]" />
            <div className="w-40 h-40 bg-[var(--sidebar)]" />
            <div className="w-40 h-40 bg-[var(--secondary)]" />
            <div className="w-40 h-40 bg-[var(--muted)]" />
            <div className="w-40 h-40 bg-[var(--card)]" />
            <div className="w-40 h-40 bg-[var(--popover)]" />
          </div>
        </Section>
      </main>
    </Container>
  );
}
