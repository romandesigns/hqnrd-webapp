import clsx from "clsx";
import type React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section
      className={clsx("font-sans py-20 pt-10 lg:py-30 lg:pt-0", className)}
    >
      {children}
    </section>
  );
}
