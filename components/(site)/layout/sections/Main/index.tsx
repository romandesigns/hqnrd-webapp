import clsx from "clsx";
import React from "react";

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export const Main: React.FC<MainProps> = ({ children, className }) => (
  <main className={clsx("font-sans", className)}>{children}</main>
);
