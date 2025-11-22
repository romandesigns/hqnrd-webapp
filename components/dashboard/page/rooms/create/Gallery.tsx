import { Card, ImageUpload } from "@/components/features";
import { items } from "./utils/ImageUploadList";

export function Gallery() {
  return (
    <Card
      aroundPadding
      Header={<h2 className="text-sm font-semibold font-sans px-3">Gallery</h2>}
      className="h-auto w-full max-w-3xl"
      bodyClassName="p-0! bg-transparent! border-0! shadow-none!"
    >
      <div className="grid grid-cols-4 grid-rows-2 gap-1 lg:gap-3 w-full h-82">
        {items.map((item) => (
          <div className={item.className} key={item.fileName}>
            <ImageUpload
              fileName="roomLayoutImage"
              aspect={item.aspect}
              labelStyle="flex w-full h-full bg-neutral-800/50 dark:shadow-black dark:shadow-sm rounded-md hover:bg-neutral-800/70"
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
      <hr className="py-10" />
      <div className="grid grid-cols-1 mb-6 px-3 gap-3 items-start">
        <div className="w-full">
          <div className="aspect-square w-full">
            <ImageUpload
              fileName="roomLayoutImage"
              aspect={1 / 1}
              labelStyle="flex w-full h-full bg-neutral-800/50 dark:shadow-black dark:shadow-sm rounded-md hover:bg-neutral-800/70"
              placeholder="Upload Image"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
