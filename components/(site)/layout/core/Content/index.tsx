import React from "react";
import clsx from "clsx";

interface ContentProps {
  children?: React.ReactNode;
  className?: string;
}

export function Content({ children, className }: ContentProps) {
  return <div className={clsx("max-width mx-auto", className)}>{children}</div>;
}
