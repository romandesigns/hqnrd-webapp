import Image from "next/image";
import { Card } from "@/components/features";
import images from "@/public/assets/images.json";
import { SectionHeading } from "@/components/features/Heading";
import { Content } from "@/components/(site)/layout";
import { Locale } from "@/i18n-config";
import { JSX } from "react";
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
    <div className="text-md overflow-hidden rounded-br-md rounded-tl-md p-1 px-5 text-primary-foreground backdrop-blur-md">
      <h3 className="-mb-1 text-lg text-foreground font-bold uppercase">
        Rooms
      </h3>
      <p className="lg:text-md text-sm font-normal text-destructive">
        Interior
      </p>
    </div>
  );
}

export function ScenicSpaces({ lang }: { lang: Locale }): JSX.Element {
  return (
    <section>
      <Content className="flex justify-center w-full !max-w-7xl">
        <SectionHeading
          showBorders
          title="Our Scenic Spaces"
          description="Click the images to learn more"
        />
      </Content>
      <Content className="grid grid-cols-[50%_25%_25%] grid-rows-2 gap-2 !max-w-7xl flex-1 ">
        {/* Rooms Section */}
        <Card
          bodyClassName={"h-full p-0"}
          className={"h-full row-span-2"}
          Header={<Heading title="Rooms" description="Interior" />}
        >
          <figure className="w-full  relative overflow-hidden rounded-md bg-pink-500 block h-full">
            <div className="absolute inset-0 z-10 flex h-full w-full bg-black/25" />
            <Image
              src={images["images"][0]}
              alt="Rooms Interior"
              className="object-cover"
              fill={true}
            />
          </figure>
        </Card>

        {/* Rooftop Section */}
        <Card
          bodyClassName={""}
          className={""}
          Header={<Heading title="Rooms" description="Interior" />}
        >
          <figure className="relative  overflow-hidden rounded-md bg-green-500 ">
            <div className="absolute inset-0 z-10 flex h-full w-full bg-black/25" />
            <Image
              src={images["images"][1]}
              alt="Rooms Interior"
              fill={true}
              className="object-cover"
            />
          </figure>
        </Card>

        {/* Hallways Section */}
        <Card
          className={""}
          bodyClassName={""}
          Footer={<Heading title="Rooms" description="Interior" />}
        >
          <figure className="relative overflow-hidden  rounded-md bg-yellow-500">
            <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-black/25" />
            <Image
              src={images["images"][1]}
              alt="Rooms Interior"
              fill={true}
              className="object-cover"
            />
          </figure>
        </Card>

        {/* Exterior Section */}
        <Card
          className={"col-start-2 col-end-4"}
          bodyClassName={""}
          Footer={
            <div className="text-md overflow-hidden rounded-br-md rounded-tl-md text-primary-foreground">
              <h3 className="-mb-1 text-lg text-foreground font-bold uppercase">
                Hallways
              </h3>
              <p className="lg:text-md text-sm font-normal text-destructive">
                Interior
              </p>
            </div>
          }
        >
          <figure className="relative overflow-hidden rounded-md bg-yellow-500">
            <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-black/25" />
            <Image
              src={images["images"][1]}
              alt="Rooms Interior"
              fill={true}
              className="object-cover"
            />
          </figure>
        </Card>
      </Content>
    </section>
  );
}
