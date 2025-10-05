import { cn } from "@/lib/utils";

/**
 * A component that renders a section with a title and an optional description.
 * It can also display borders around the title.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.title] - The title to display in the section.
 * @param {string} [props.description] - The optional description to display below the title.
 * @param {boolean} [props.showBorders=false] - Whether to show borders around the title.
 *
 * @returns {JSX.Element} The rendered section component.
 */
export function SectionHeading({
  title,
  description,
  showBorders = false,
  className,
  postTitleClassName,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  showBorders?: boolean;
  className?: string;
  postTitleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center pb-20 font-sans",
        className,
      )}
    >
      {title && (
        <div className="flex w-full items-center justify-center">
          {showBorders && <div className="h-[0.15rem] w-1/5 bg-muted/25" />}
          <div>
            <div className="mx-2 rounded-full bg-muted/90 px-6 py-1 text-primary-muted">
              <p className="text-[0.73rem] lg:text-sm font-bold">{title}</p>
            </div>
          </div>
          {showBorders && <div className="h-[0.15rem] w-1/5 bg-muted/25" />}
        </div>
      )}

      {description && (
        <small
          className={cn(
            `text-sm post_title text-center text-muted-foreground font-medium mt-3`,
            postTitleClassName,
          )}
        >
          {description}
        </small>
      )}
    </div>
  );
}
