import type { Icon as TablerIcon } from "@tabler/icons-react";
import clsx from "clsx";

interface ItemProps {
  label?: string;
  Icon?: TablerIcon;
  iconSize?: number;
  className?: string;
  count?: number;
}

interface FeaturedListProps {
  heading?: string;
  items?: ItemProps[];
  itemClassName?: string;
  className?: string;
  theme?: "label-badge" | "label" | "icon-label";
  accent?: "primary" | "secondary" | "muted";
  showLabel?: boolean;
  gap?: number;
}

export function Item({
  Icon,
  label,
  className,
  iconSize = 18,
  showLabel,
}: ItemProps & { showLabel?: boolean }) {
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
      {label && showLabel && <span data-label>{label}</span>}
    </li>
  );
}

export function FeaturedList({
  items,
  heading,
  itemClassName,
  theme,
  accent,
  showLabel,
  gap = 2,
}: FeaturedListProps) {
  return (
    <div className="font-sans space-y-4  text-muted-foreground">
      {heading && (
        <h4 className="uppercase text-xs text-primary font-bold mb-6">
          {heading}
        </h4>
      )}
      <ul
        className={clsx(`flex gap-${gap}`, {
          "[&_li]:bg-muted": accent === "muted" && theme === "label-badge",
          "[&_li]:bg-[var(--brand-primary)]/5 text-[var(--brand-primary)]":
            accent === "primary" && theme === "label-badge",
          "[&_li]:bg-[var(--brand-warning)]/5 text-[var(--brand-warning)]":
            accent === "secondary" && theme === "label-badge",
        })}
      >
        {items?.map((item) => (
          <Item
            {...item}
            className={itemClassName}
            key={item.label}
            showLabel={showLabel}
          />
        ))}
      </ul>
    </div>
  );
}
