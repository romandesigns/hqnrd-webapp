import { Content } from "@/components/layout";

export function Gallery() {
  return (
    <Content className="px-2! lg:px-0!">
      <div className="grid grid-cols-4 grid-rows-2 gap-1 p-2">
        <figure className="col-span-2 row-span-2 aspect-square rounded-sm bg-pink-500"></figure>
        <figure className="col-start-3 col-end-5 rounded-sm bg-purple-500"></figure>
        <figure className="col-start-3 col-end-4 row-start-2 row-end-3 rounded-sm bg-orange-500"></figure>
        <figure className="col-start-4 col-end-5 rounded-sm bg-yellow-500"></figure>
      </div>
    </Content>
  );
}
