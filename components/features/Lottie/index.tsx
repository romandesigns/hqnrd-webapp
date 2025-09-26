"use client";

import clsx from "clsx";
import Lottie from "lottie-react";

interface LottiePlayerProps {
  item: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export default function LottiePlayer({
  item,
  loop,
  autoplay,
  className,
}: LottiePlayerProps) {
  return (
    <div className={clsx(className)}>
      <Lottie animationData={item} loop={loop} autoplay={autoplay} />
    </div>
  );
}
