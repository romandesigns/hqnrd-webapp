import { Card } from "./Default";
import { ExternalLink, StarsRating } from "@/components/features";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Testimonial() {
  return (
    <Card
      className="keen-slider__slide"
      Footer={
        <div>
          <div className="flex justify-start gap-2 items-center mb-2 font-sans border-b pb-1">
            <p className="font-bold text-sm">5.0</p>
            <StarsRating rating={4.5} />
          </div>
          <div className="font-sans flex justify-start gap-4 items-center pt-1">
            <div className="flex gap-2 text-xs">
              <span className="p-0.5 px-0 text-[var(--brand-warning)] font-bold">
                5.0
              </span>
              <span className="p-0.5 px-2 rounded-full bg-[var(--brand-warning)]/10 inline-block text-primary font-semibold text-[0.70rem]">
                Price
              </span>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="p-0.5 px-0 text-[var(--brand-warning)] font-bold">
                4.5
              </span>
              <span className="p-0.5 px-2 rounded-full bg-[var(--brand-warning)]/10 inline-block text-primary">
                Service
              </span>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="p-0.5 px-0 text-[var(--brand-warning)] font-bold">
                5.0
              </span>
              <span className="p-0.5 px-2 rounded-full bg-[var(--brand-warning)]/10 inline-block text-primary">
                Location
              </span>
            </div>
          </div>
        </div>
      }
      footerClassName="p-2 pt-3"
    >
      <div>
        <div className="flex gap-4 font-sans">
          <div className="overflow-hidden rounded-md relative top-0 left-0 w-16 h-16">
            <Image
              src={
                "https://lh3.googleusercontent.com/a-/ALV-UjWHBG9KKgAAWTU2FzVa_u9WJbLIe_BtVVNY0VO6ZvdDF03lMk1CYA=w250-h250"
              }
              alt="Hero Image"
              width={150}
              height={3150}
              className="relative z-10 object-cover"
            />
          </div>
          <div className="flex flex-col  box-sizing items-start justify-center">
            <div className="font-bold text-md">Justin F.</div>
            <span className="text-xs text-muted-foreground">
              <strong>Posted: </strong>Julio de 2021
            </span>
          </div>
        </div>
        <div className="leading-relaxed text-xs font-sans mt-4">
          Este fue un hotel muy lindo y limpio. Era moderno, muy limpio y
          espacioso. Había agua fría y caliente, los muebles eran bonitos y
          había un montón de comodidades ...
        </div>
        <ExternalLink href="#" className="inline-block">
          <Button
            variant="link"
            className="px-0 mt-4 text-[var(--brand-primary)] text-xs"
          >
            Read more reviews
          </Button>
        </ExternalLink>
      </div>
    </Card>
  );
}
