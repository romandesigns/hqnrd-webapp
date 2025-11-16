import { fetchQuery } from "convex/nextjs";
import { redirect } from "next/navigation";
import { ContactWidget, Modal } from "@/components/features";
import { ReservationForm } from "@/components/features/Form";
import { Container, Content, Main, Section } from "@/components/layout";
import { Trending } from "@/components/page/home";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import type { Locale } from "@/i18n-config";
import type { RoomParams } from "@/types";
import { Amenities } from "./Amenities";
import { Description } from "./Description";
import { Features } from "./Features";
import { Media } from "./Media";

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
      <header className="hqnrd-frosty-bg sticky top-10 lg:top-10 bg-background/90 pb-6 backdrop-blur-3xl z-2 font-sans">
        <Content className="px-2! flex flex-col items-end justify-center lg:flex-row lg:justify-between pt-10">
          <div className="mb-4 flex flex-col items-center justify-center gap-2 lg:flex-1 w-full lg:items-start lg:justify-start">
            <p className="font-bold text-sm text-muted-foreground lg:text-lg">
              Unit {segmentParam.unit[1]}
            </p>
            <h2 className="text-3xl font-black uppercase leading-6 lg:text-5xl lg:font-black">
              Doble Cama
            </h2>
          </div>
          <div className="lg:max-w-auto px-3 lg:px-0 flex w-full max-w-6xl items-center justify-center lg:w-auto lg:flex-col lg:justify-between lg:hidden">
            {/* <Button className="w-full max-w-md lg:hidden">
              Make Reservation
            </Button> */}
            <Modal
              title="Reservation Form"
              triggerLabel="Make Reservation"
              subheading=""
              lang={segmentParam.lang}
              leftCTAlabel=""
              rightCTAlabel=""
              componentClass="p-0!"
              formClassName="p-0!"
              Component={ReservationForm }
            />
            <ContactWidget
              lang={segmentParam.lang}
              className="hidden lg:block"
              btnVariant={"bordered"}
            />
          </div>
        </Content>
      </header>
      <Content className="px-2! pt-10 lg:px-0!">
        <div className="grid grid-cols-4 grid-rows-2 gap-1 p-2">
          <figure className="col-span-2 row-span-2 aspect-square rounded-sm bg-pink-500"></figure>
          <figure className="col-start-3 col-end-5 rounded-sm bg-purple-500"></figure>
          <figure className="col-start-3 col-end-4 row-start-2 row-end-3 rounded-sm bg-orange-500"></figure>
          <figure className="col-start-4 col-end-5 rounded-sm bg-yellow-500"></figure>
        </div>
      </Content>
      <div className="font-sans max-width mx-auto lg:grid lg:grid-cols-[65%_35%] gap-6 lg:px-0 lg:gap-10 py-10 lg:pt-20">
        <Main>
          <Content className="px-2!">
            <article className="space-y-10">
              <Features />
              <Description />
              <Amenities />
              <Media />
            </article>
          </Content>
        </Main>
        <aside className="pr-10">
          <ReservationForm  title="Reservation Form" className="hidden" lang={segmentParam.lang} />
        </aside>
      </div>
      <Content className="px-2! [&_div]:px-0! py-20">
        <Trending lang={segmentParam.lang} className="pb-0!" />
      </Content>
    </Container>
  );
}
