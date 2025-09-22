import { Container } from "@/components/layout";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import { Button } from "@/components/ui/button";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <Container lang={lang} showNavBar showFooter>
      <header className="py-54 font-sans">
        <p className="py-4 text-sm text-center text-muted-foreground">
          En el corazón del Cibao —{" "}
          <b className="font-bold">Salcedo, Provincia Hermanas Mirabal</b>
        </p>
        <h2 className="uppercase font-black text-4xl py-2 max-w-2xl text-center leading-snug mx-auto">
          Serenidad, comodidad e higiene — todo en un mismo lugar
        </h2>
        <p className="py-4 text-sm text-center max-w-lg mx-auto text-muted-foreground italic">
          De viaje o de paseo, nuestras unidades cuentan con todo lo necesario
          para ofrecerte una experiencia única.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Button>Accede a tu cuenta</Button>
          <Button variant={"secondary"}>Ver habitaciones</Button>
        </div>
      </header>
    </Container>
  );
}
