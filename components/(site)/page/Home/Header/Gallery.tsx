import { Button } from "@/components/ui/button";

export function Gallery() {
  return (
    <div className="border  aspect-video flex items-center justify-center p-1 rounded-md lg:p-4">
      <div className="grid grid-cols-4 grid-rows-2 gap-1 lg:gap-3 w-full h-full">
        <div className="rounded-md bg-red-500 row-span-2 col-span-2 row-start-1 row-end-4" />
        <div className="rounded-md bg-purple-500 col-start-3 col-end-4 row-start-1 row-end-2 " />
        <div className="rounded-md bg-green-500 col-start-4 col-end-5 row-start-1 row-end-2 " />
        <div className="rounded-md bg-blue-500 col-start-3 col-end-5 row-start-2 row-end-4 " />
      </div>
    </div>
  );
}
