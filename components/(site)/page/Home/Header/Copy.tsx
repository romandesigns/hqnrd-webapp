import { ContactWidget } from "@/components/features";
import LottiePlayer from "@/components/features/Lottie";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import heartBurst from "@/public/assets/animated/heart-burst.json";

export function Copy({ lang }: { lang: Locale }) {
  return (
    <div className="text-center lg:text-left flex flex-col space-y-3 justify-center items-center">
      <div className="text-sm text-muted-foreground lg:mr-auto">
        En el{" "}
        <span className="inline-flex items-center w-14 h-14 -mx-4 align-text-bottom translate-y-5">
          <LottiePlayer
            item={heartBurst}
            loop
            autoplay
            className="w-full h-full"
          />
        </span>
        del Cibao —{" "}
        <b className="font-bold">Salcedo, Provincia Hermanas Mirabal</b>
      </div>

      <h2 className="uppercase font-black text-2xl sm:text-4xl text-center lg:text-left leading-snug">
        Serenidad, comodidad e higiene — todo en un mismo lugar
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
