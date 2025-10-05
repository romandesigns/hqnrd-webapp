import React from "react";
import clsx from "clsx";

interface ContentProps {
  children?: React.ReactNode;
  className?: string;
}

export function Content({ children, className }: ContentProps) {
  return (
    <div className={clsx("max-w-screen-xl mx-auto p-2 my-20 md:px-10", className)}>
      {children}
    </div>
  );
}
