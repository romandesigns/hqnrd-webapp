import { Button } from "@/components/ui/button";

export function Gallery() {
  return (
    <div className="border bg-accent/50 aspect-video flex items-center justify-center p-1 rounded-md lg:p-4 relative">
      <div className="grid grid-cols-4 grid-rows-2 gap-1 lg:gap-3 w-full h-full">
        <div className="rounded-md bg-red-500 row-span-2 col-span-2 row-start-1 row-end-4" />
        <div className="rounded-md bg-purple-500 col-start-3 col-end-4 row-start-1 row-end-2 " />
        <div className="rounded-md bg-green-500 col-start-4 col-end-5 row-start-1 row-end-2 " />
        <div className="rounded-md bg-blue-500 col-start-3 col-end-5 row-start-2 row-end-4 " />
      </div>
      <div className="absolute rounded-full -bottom-8  w-full h-4">
        <div className="absolute top-0 backdrop-blur-lg bottom-0 left-0 right-0 w-full h-full"/>
        <div className="rounded-full w-full h-full bg-black blur-2xl dark:blur-lg"/>
      </div>
    </div>
  );
}
