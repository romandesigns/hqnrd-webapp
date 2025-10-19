import clsx from "clsx";
import React from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function Header({ children, className }: HeaderProps) {
  return <header className={clsx("font-sans", className)}>{children}</header>;
}
