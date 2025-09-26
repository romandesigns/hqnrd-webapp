import { ContactWidget } from "@/components/features";
import LottiePlayer from "@/components/features/Lottie";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import {heatBurts, googleSquare} from "@/public/assets/animated";
import { Highlighter } from "@/components/ui/highlighter";

export function Copy({ lang }: { lang: Locale }) {
  return (
    <div className="text-center lg:text-left flex flex-col space-y-3 lg:items-start justify-center items-center">
      <div className="flex items-center justify-center lg:justify-start  lg:-ml-4 p-1 border">
        <div className="flex items-center justify-start">
          <div>
            <LottiePlayer
            item={googleSquare}
            loop
            autoplay
            className="w-16 h-16"
          />
          </div>
          <div>
            <div>120 Reviews</div>
            <div>4.5 Rating</div>
          </div>
        </div>
      </div>
      <div className="text-sm text-muted-foreground lg:mr-auto">
        En el{" "}
        <span className="inline-flex items-center w-14 h-14 -mx-4 align-text-bottom translate-y-5">
          <LottiePlayer
            item={heatBurts}
            loop
            autoplay
            className="w-full h-full"
          />
        </span>
        del Cibao —{" "}
        <b className="font-bold">Salcedo, Provincia Hermanas Mirabal</b>
      </div>

      <h2 className="uppercase font-black text-2xl sm:text-4xl text-center lg:text-left leading-snug">
        Serenidad, comodidad e higiene —{" "}
        <Highlighter action="highlight" color="red">
          todo
        </Highlighter>{" "}
        en un mismo lugar
      </h2>

      <p className="text-[.7rem] sm:text-sm lg:text-sm text-muted-foreground italic lg:max-w-lg lg:mr-auto">
        De viaje o de paseo, nuestras unidades cuentan con todo lo necesario
        para ofrecerte una experiencia única.
      </p>

      <div className="flex justify-center space-x-4 mt-4 lg:mr-auto">
        <Button>Accede a tu cuenta</Button>
        <Button variant="bordered" className="!py-3">
          Ver habitaciones
        </Button>
      </div>
      <div className="hidden lg:flex w-full  mt-10">
        <ContactWidget
          className="items-start px-0 mx-0"
          lang={lang}
          btnVariant={"bordered"}
        />
      </div>
    </div>

    // <div>
    //   <p className="py-4 text-sm text-center text-muted-foreground">
    //     En el corazón del Cibao —{" "}
    //     <b className="font-bold">Salcedo, Provincia Hermanas Mirabal</b>
    //   </p>
    //   <h2 className="uppercase font-black text-4xl py-2 max-w-2xl text-center leading-snug mx-auto">
    //     Serenidad, comodidad e higiene — todo en un mismo lugar
    //   </h2>
    //   <p className="py-4 text-sm text-center max-w-lg mx-auto text-muted-foreground italic">
    //     De viaje o de paseo, nuestras unidades cuentan con todo lo necesario
    //     para ofrecerte una experiencia única.
    //   </p>
    //   <div className="flex justify-center space-x-4 mt-4">
    //     <Button>Accede a tu cuenta</Button>
    //     <Button variant={"secondary"}>Ver habitaciones</Button>
    //   </div>
    // </div>
  );
}
