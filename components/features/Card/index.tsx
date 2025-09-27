import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  Header?: React.ReactNode;
  children: React.ReactNode;
  Footer?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  footerClassName?: string;
  bodyClassName?: string;
}

function isHeaderVisible(Header: React.ReactNode) {
  // Only filter out null, undefined, or false
  return Header !== null && Header !== undefined && Header !== false;
}

export function Card({
  Header,
  children,
  Footer,
  className,
  headerClassName,
  footerClassName,
  bodyClassName,
}: CardProps) {
  return (
    <section
      className={cn("bg-sidebar p-1 rounded-lg overflow-hidden", className)}
    >
      {isHeaderVisible(Header) && (
        <header className={cn("p-2", headerClassName)}>{Header}</header>
      )}
      <article
        className={cn(
          "p-4 bg-background/80 rounded-lg text-foreground border-b-[.10rem] border-border/70 inset-ring-[0.025rem] inset-ring-border",
          bodyClassName,
        )}
      >
        {children}
      </article>
      {Footer && (
        <footer
          className={cn("text-muted-foreground text-xs", footerClassName)}
        >
          {Footer}
        </footer>
      )}
    </section>
  );
}
