import Image from "next/image";
import ConvexTasks from "./ConvexTasks";
import { Suspense } from 'react';


export default function PlaygroundPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h2 className="uppercase font-black">Task List</h2>
          <Suspense fallback={<div className="w-screen h-screen bg-red">Loading...</div>}>
           <ConvexTasks/>
        </Suspense>
    </div>
  );
}
