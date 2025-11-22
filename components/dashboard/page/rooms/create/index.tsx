import Link from "next/link";
import { MainArticle, MainSection } from "@/components/dashboard/main";
import { Navigation } from "@/components/dashboard/main/navigation";
import { Submit } from "@/components/features";
import { HiddenInput } from "@/components/features/Form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Locale } from "@/i18n-config";
import { createRoom } from "@/utils/actions/room";
import { Amenities } from "./Amenities";
import { Details } from "./Details";
import { Features } from "./Features";
import { Gallery } from "./Gallery";

export async function RoomForm({ lang }: { lang: Locale }) {
  return (
    <MainSection className="flex-1 flex flex-col">
      <Navigation lang={lang}>
        <Breadcrumb className="mr-auto">
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <Link
                href={`/${lang}/dashboard/habitaciones`}
                className="text-xs"
              >
                <BreadcrumbPage>Habitaciones</BreadcrumbPage>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <Link
              href={`/${lang}/dashboard/habitaciones/crear`}
              className="text-xs"
            >
              Crear
            </Link>
          </BreadcrumbList>
        </Breadcrumb>
      </Navigation>
      <MainArticle className="grow flex justify-stretch items-center flex-1 w-full h-full">
        <form className="w-full flex justify-center items-center flex-col  gap-8  py-6">
          <Details />
          <Gallery />
          <Features />
          <Amenities />
          <HiddenInput name="lang" defaultValue={lang} />
          <Submit
            label="Create"
            formAction={createRoom}
            type="submit"
            variant="primary"
            className="w-full max-w-3xl mt-6"
          />
        </form>
      </MainArticle>
    </MainSection>
  );
}
