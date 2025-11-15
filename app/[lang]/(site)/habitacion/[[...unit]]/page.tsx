import { SignIn } from "@clerk/nextjs";
import { IconLockCancel } from "@tabler/icons-react";
import { fetchQuery } from "convex/nextjs";
import { redirect } from "next/navigation";
import { ContactWidget } from "@/components/features";
import { Container, Content, Main } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import type { Locale } from "@/i18n-config";
import type { RoomParams } from "@/types";

async function checkIfRoomExists({
  lang,
  unit,
}: {
  lang: Locale;
  unit: string[];
}) {
  const fetchedCategories = await fetchQuery(
    api.categories.getCategoriesAction,
  );

  if (unit.length !== 2) {
    redirect(`/${lang}/habitaciones`);
  }
  const category = fetchedCategories.filter(
    (cat) => cat.slugs.singular === unit[0],
  );
  return true;
}

export default async function RoomPage({ params }: { params: RoomParams }) {
  const param = await params;
  const segmentParam = JSON.parse(JSON.stringify(param));
  console.log(segmentParam);
  await checkIfRoomExists(segmentParam);

  return (
    <Container showNavBar showFooter>
      <header className="hqnrd-frosty-bg sticky top-10 lg:-top-8 bg-background/90 pb-6 backdrop-blur-md z-2 font-sans">
        <Content className="px-2! flex flex-col items-end justify-center lg:flex-row lg:justify-between pt-10">
            <div className="mb-4 flex flex-col items-center justify-center gap-2 lg:flex-1 lg:items-start lg:justify-start">
              <p className="font-bold text-sm text-muted-foreground lg:text-lg">
                Unit {segmentParam.unit[1]}
              </p>
              <h2 className="text-3xl font-black uppercase leading-6 lg:text-5xl lg:font-black">
                Doble Cama
              </h2>
            </div>
            <div className="lg:max-w-auto px-3 lg:px-0 flex w-full max-w-6xl items-center justify-center lg:w-auto lg:flex-col lg:justify-between">
              <Button className="w-full max-w-md lg:hidden">
                Make Reservation
              </Button>
              <ContactWidget
                lang={segmentParam.lang}
                className="hidden lg:block"
                btnVariant={"bordered"}
              />
            </div>
        </Content>
      </header>
      <Main className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h2 className="uppercase font-black">Rooms Page</h2>
      </Main>
    </Container>
  );
}
