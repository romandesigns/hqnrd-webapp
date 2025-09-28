import { Content } from "@/components/(site)/layout";
import { Carousel } from "@/components/features";
import { Testimonial } from "@/components/features/Cards/Testimonial";
import { SectionHeading } from "@/components/features/Heading";

const options = {
  slides: { perView: 4, spacing: 10 },
};

export function Testimonials() {
  return (
    <section>
      <Content className="!max-w-[77rem]">
        <SectionHeading title="Recent Testimonials" className="" showBorders />
        <Carousel options={options} showDots>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <Testimonial key={index} />
          ))}
        </Carousel>
      </Content>
    </section>
  );
}
