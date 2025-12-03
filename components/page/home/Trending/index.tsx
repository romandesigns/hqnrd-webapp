import clsx from "clsx";
import { fetchQuery } from "convex/nextjs";
import { Carousel } from "@/components/features";
import { Room as RoomCard } from "@/components/features/Cards";
import { SectionHeading } from "@/components/features/Heading";
import { Content, Section } from "@/components/layout";
import { api } from "@/convex/_generated/api";
import type { Locale } from "@/i18n-config";
import { getRandomRoomAmenities } from "@/utils/shared/getRandomAmenities";

const options = {
  slides: { perView: 4, spacing: 10 },
  breakpoints: {
    "(max-width: 579px)": {
      slides: { perView: 1, spacing: 5 },
    },
    "(min-width: 580px) and (max-width: 999px)": {
      slides: { perView: 2, spacing: 5 },
    },
    "(min-width: 1000px)": {
      slides: { perView: 3, spacing: 10 },
    },
  },
};

export async function Trending({
  lang,
  className,
}: {
  lang?: Locale;
  className?: string;
}) {
  const rooms = await fetchQuery(api.rooms.getRooms);

  console.log(rooms);
  return (
    <Section className={clsx("", className)}>
      <Content>
        <SectionHeading
          title="Trending"
          showBorders
          description="Experience our most loved stays this week"
        />
        <Carousel options={options} showDots>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <RoomCard key={index} lang={lang} />
          ))}
        </Carousel>
      </Content>
    </Section>
  );
}
