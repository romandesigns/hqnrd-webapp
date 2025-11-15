import clsx from "clsx";
import type React from "react";

interface ContentProps {
  children?: React.ReactNode;
  className?: string;
}

export function Content({ children, className }: ContentProps) {
  return (
    <div className={clsx("max-width mx-auto px-20", className)}>{children}</div>
  );
}
