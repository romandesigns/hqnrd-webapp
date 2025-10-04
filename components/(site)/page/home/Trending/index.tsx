import { Content } from "@/components/(site)/layout";
import { Carousel } from "@/components/features";
import { Room as RoomCard } from "@/components/features/Cards";
import { SectionHeading } from "@/components/features/Heading";

const options = {
  slides: { perView: 4, spacing: 10 },
};

export function Trending() {
  return (
    <section>
      <Content className="mx-auto">
        <SectionHeading title="Trending" showBorders />
        {/* <Carousel options={options} showDots>
          {[1, 2, 3, 4, 5, 6].map((item, index) => ( */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <RoomCard />
        <RoomCard />
        <RoomCard />
    </div>
        {/* ))} */}
        {/* </Carousel> */}
      </Content>
    </section>
  );
}
