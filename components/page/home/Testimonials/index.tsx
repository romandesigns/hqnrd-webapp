import { Carousel, ExternalLink } from "@/components/features";
import { Testimonial } from "@/components/features/Cards/Testimonial";
import { SectionHeading } from "@/components/features/Heading";
import { Content, Section } from "@/components/layout";
import { HQNRD } from "@/constants";

const options = {
  slides: { perView: 4, spacing: 5 },
};

export function Testimonials() {
  return (
    <Section>
      <Content>
        <SectionHeading
          showBorders
          title="Recent Testimonials"
          description={
            <>
              More than{" "}
              <ExternalLink
                href={HQNRD.CONTACT.comments}
                className="text-[var(--brand-warning)] underline"
              >
                120
              </ExternalLink>{" "}
              Google reviews and counting
            </>
          }
        />
        <Carousel options={options} showDots>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <Testimonial key={index} />
          ))}
        </Carousel>
      </Content>
    </Section>
  );
}
