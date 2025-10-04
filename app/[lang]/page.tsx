import { Container } from "@/components/(site)/layout";
import {
  Header,
  Testimonials,
  Categories,
  ScenicSpaces,
  Trending,
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
      <div className="h-[60vh] w-full absolute inset-0 -z-10 overflow-hidden opacity-50 lg:opacity-100">
        {/* Aurora Dream — Colorful Glows on Transparent Background */}
        <div className="bg-linear-180 from-transparent via-transparent to-background z-[10] absolute inset-0" />
        <div
          className="absolute inset-0 z-0 opacity-45 dark:opacity-25"
          style={{
            background: `
            radial-gradient(ellipse 80% 60% at 10% 35%, color-mix(in oklch, var(--brand-primary) 75%, var(--brand-warning) 25%), transparent 70%),
            radial-gradient(ellipse 65% 50% at 40% 50%, color-mix(in oklch, var(--brand-warning) 70%, var(--brand-primary) 30%), transparent 70%),
            radial-gradient(ellipse 70% 60% at 80% 70%, color-mix(in oklch, var(--brand-primary) 60%, var(--brand-warning) 40%), transparent 75%),
            radial-gradient(ellipse 60% 48% at 75% 20%, color-mix(in oklch, var(--brand-warning) 55%, var(--brand-primary) 45%), transparent 70%)
      `,
            backgroundColor: "transparent",
          }}
        />
        {/* Your content goes here */}
      </div>
      <RoomsFilter lang={lang} />
      <Testimonials />
      <Categories lang={lang} />
      <ScenicSpaces lang={lang} />
      <Trending lang={lang} />
    </Container>
  );
}
