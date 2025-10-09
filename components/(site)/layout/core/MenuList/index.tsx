import type { Icon as TablerIcon } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import type React from "react";
import { ExternalLink } from "@/components/features";

interface ItemComponentProps {
  children?: React.ReactNode;
  className?: string;
}

interface ItemProps {
  href?: string;
  label?: string;
  isInternal?: boolean;
  isExternal?: boolean;
  Icon?: TablerIcon;
  iconSize?: number;
  className?: string;
}

interface MenuProps {
  heading?: string;
  items?: ItemProps[];
  itemClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Item({
  isInternal,
  isExternal,
  iconSize = 18,
  href = "#",
  Icon,
  label,
  className,
}: ItemProps) {
  return (
    <li
      className={clsx(
        "flex text-xs  lg:text-xs items-center space-x-2",
        className,
      )}
    >
      {Icon && (
        <span data-icon>
          <Icon size={iconSize} aria-hidden="true" />
        </span>
      )}
      {label &&
        (isInternal ? (
          <Link href={href}>{label}</Link>
        ) : isExternal ? (
          <ExternalLink href={href}>{label}</ExternalLink>
        ) : (
          <span data-label>{label}</span>
        ))}
    </li>
  );
}

export function ItemComponent({ children, className }: ItemComponentProps) {
  return <li className={clsx("", className)}>{children}</li>;
}

export function MenuList({
  heading,
  items,
  itemClassName,
  children,
}: MenuProps) {
  return (
    <div className="font-sans space-y-4  text-muted-foreground">
      {heading && (
        <h3 className="uppercase text-xs text-primary font-bold mb-6">
          {heading}
        </h3>
      )}
      <ul className="[&>li]:hover:text-foreground cursor-pointer space-y-6">
        {!children &&
          items?.map((item) => (
            <Item {...item} key={item.label} className={itemClassName} />
          ))}
        {children && (
          <ItemComponent className={itemClassName}>{children}</ItemComponent>
        )}
      </ul>
    </div>
  );
}
