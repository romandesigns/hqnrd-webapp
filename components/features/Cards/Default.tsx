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
    <div
      className={cn(
        "bg-sidebar/80 dark:bg-popover p-0.5 rounded-lg overflow-hidden flex-1",
        className,
      )}
    >
      {isHeaderVisible(Header) && (
        <header className={cn("p-2", headerClassName)}>{Header}</header>
      )}
      <article
        className={cn(
          "p-4 bg-background/80 dark:bg-card dark:shadow-black dark:shadow-sm rounded-sm text-foreground shadow border-border/70 inset-ring-[0.025rem] inset-ring-border dark:border-t dark:border-t-neutral-800",
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
    </div>
  );
}
