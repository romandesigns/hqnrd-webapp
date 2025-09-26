import { Container } from "@/components/(site)/layout";
import Image from "next/image";
import { Locale } from "@/i18n-config";

export default async function HabitacionesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <Container lang={lang} showNavBar showFooter>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        Habitaciones Page
      </div>
    </Container>
  );
}
