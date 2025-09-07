import Image from "next/image";
import ConvexTasks from "./ConvexTasks";
import { Suspense } from "react";
import { Card } from "@/components/features";

export default function PlaygroundPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2 className="uppercase font-black">Card Component</h2>
      <Card />
    </div>
  );
}
