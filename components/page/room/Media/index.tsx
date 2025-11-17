import { Card } from "@/components/features";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function Media() {
  return (
    <div className="w-full h-full pb-10">
      <div className="grid grid-cols-1 items-stretch gap-2 lg:grid-cols-[1.2fr_2fr] lg:grid-rows-[auto]">
        {/* Layout Section */}
        <Card Header={<h3 className="font-bold text-lg px-2">Layout</h3>}>
          <div className="flex w-full flex-col aspect-square">
            <div className="" />
          </div>
        </Card>

        {/* Walkthrough Section */}
        <Card
          bodyClassName="h-full flex"
          Header={<h3 className="font-bold text-lg px-2">Walkthrough</h3>}
        >
          <div className="">
            {/* <div className='relative'>
              <HeroVideoDialog
                className='hidden dark:block'
                animationStyle='from-center'
                videoSrc='https://cdn.pixabay.com/video/2025/01/19/253436_large.mp4'
                thumbnailSrc='/video/poster.gif'
                thumbnailAlt='Hero Video'
              />
            </div> */}
            {/* <HeroVideoDialog
              videoSrc='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
              thumbnailSrc='/video/poster.gif'
              thumbnailAlt='Video thumbnail'
            /> */}
          </div>
        </Card>
      </div>
    </div>
  );
}
