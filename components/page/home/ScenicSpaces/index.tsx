import Image from "next/image";
import type { JSX } from "react";
import { Card } from "@/components/features";
import { SectionHeading } from "@/components/features/Heading";
import { Content, Section } from "@/components/layout";
import type { Locale } from "@/i18n-config";
import images from "@/public/assets/images.json";

/**
 * The `ScenicSpaces` component renders a section showcasing various scenic spaces.
 * It includes a heading section and a grid layout of images with descriptive overlays.
 *
 * @returns {JSX.Element} The JSX code for the ScenicSpaces component.
 *
 * @component
 * @example
 * return (
 *   <ScenicSpaces />
 * )
 */

function Heading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-br-md rounded-tl-md font-sans text-primary-foreground backdrop-blur-md">
      <h3 className="-mb-1 text-[0.7rem] md:text-lg text-foreground font-bold uppercase">
        {title}
      </h3>
      <p className="text-[0.65rem] md:text-xs font-semibold text-[var(--brand-warning)]">
        {description}
      </p>
    </div>
  );
}

export function ScenicSpaces({ lang }: { lang: Locale }): JSX.Element {
  return (
    <Section>
      <Content className="flex justify-center w-full">
        <SectionHeading
          showBorders
          title="Our Scenic Spaces"
          description="Click the images to learn more"
        />
      </Content>
      <Content className="grid grid-cols-[50%_25%_25%] grid-rows-2 gap-1 flex-1 ">
        {/* Rooms Section */}
        <Card
          aroundPadding
          headerClassName="p-1 lg:p-2"
          bodyClassName={"flex-1 p-0"}
          className={"h-full row-span-2 flex flex-col"}
          Header={<Heading title="Rooms" description="Interior" />}
        >
          <div className="!p-0  lg:p-1 h-full">
            <figure className="w-full  relative overflow-hidden rounded-md block h-full aspect-square">
              <div className="absolute inset-0 z-10 flex h-full w-full bg-black/25" />
              <Image
                src={images["images"][0]}
                alt="Rooms Interior"
                className="object-cover rounded-md"
                fill={true}
              />
            </figure>
          </div>
        </Card>

        {/* Rooftop Section */}
        <Card
          aroundPadding
          headerClassName="p-1 lg:p-2"
          bodyClassName={"flex-1 p-0 pr-1 overflow-hidden"}
          className={" flex flex-col"}
          Header={<Heading title="Rooms" description="Interior" />}
        >
          <div className="!p-0  lg:p-1 h-full overflow-hidden">
            <figure className="relative  overflow-hidden rounded-md aspect-square h-full">
              <div className="absolute inset-0 z-10 flex h-full w-full bg-black/25" />
              <Image
                src={images["images"][1]}
                alt="Rooms Interior"
                fill={true}
                className="object-cover rounded-md"
              />
            </figure>
          </div>
        </Card>

        {/* Hallways Section */}
        <Card
          aroundPadding
          headerClassName="p-1 lg:p-2"
          bodyClassName={"flex-1 p-0 pr-1 overflow-hidden"}
          className={" flex flex-col"}
          Header={<Heading title="Rooms" description="Interior" />}
        >
          <div className="!p-0  lg:p-1 h-full overflow-hidden">
            <figure className="relative  overflow-hidden rounded-md aspect-square h-full">
              <div className="absolute inset-0 z-10 flex h-full w-full bg-black/25" />
              <Image
                src={images["images"][1]}
                alt="Rooms Interior"
                fill={true}
                className="object-cover"
              />
            </figure>
          </div>
        </Card>

        {/* Exterior Section */}
        <Card
          aroundPadding
          headerClassName="p-1 lg:p-2"
          bodyClassName={"flex-1 p-0"}
          className={"col-start-2 col-end-4  flex flex-col"}
          Header={<Heading title="Hallways" description="Interior" />}
        >
          <div className="!p-0  lg:p-1 h-full overflow-hidden">
            <figure className="relative overflow-hidden rounded-md aspect-video h-full">
              <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-black/25" />
              <Image
                src={images["images"][1]}
                alt="Rooms Interior"
                fill={true}
                className="object-cover"
              />
            </figure>
          </div>
        </Card>
      </Content>
    </Section>
  );
}
