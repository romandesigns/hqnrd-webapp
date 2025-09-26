import { ContactWidget, StarsRating } from "@/components/features";
import LottiePlayer from "@/components/features/Lottie";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { heatBurts, googleSquare } from "@/public/assets/animated";
import { Highlighter } from "@/components/ui/highlighter";
import { NumberTicker } from "@/components/ui/number-ticker";

export function Copy({ lang }: { lang: Locale }) {
  return (
    <div className="text-center lg:text-left flex flex-col space-y-3 lg:items-start justify-center items-center">
      <div className="flex items-center justify-center lg:justify-start  lg:-ml-4 p-1">
        <div className="flex items-end justify-start">
          <div className="-translate-y-2">
            <LottiePlayer
              item={googleSquare}
              loop
              autoplay
              className="w-14 h-14"
            />
          </div>
          <div>
            <div>
              <NumberTicker
                value={4.5}
                decimalPlaces={2}
                className="text-4xl font-bold tracking-tighter whitespace-pre-wrap text-black dark:text-white"
              />
              <StarsRating rating={4.5} />
            </div>
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
        Serenidad, comodidad e higiene <br /> — todo en un mismo lugar
      </h2>
      <p className="text-[.7rem] sm:text-sm lg:text-sm text-muted-foreground italic lg:max-w-lg lg:mr-auto">
        De viaje o de paseo, nuestras unidades cuentan con todo lo necesario
        para ofrecerte una experiencia única.
      </p>
      <div className="flex justify-center space-x-4 mt-4 lg:mr-auto">
        <Button size={"lg"} variant="primary">
          Accede a tu cuenta
        </Button>
        <Button variant="bordered" size={"lg"}>
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
  );
}
