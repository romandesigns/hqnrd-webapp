import { IconZoomQuestion } from "@/components/icons";

export function Others() {
  return (
    <div>
      <h3 className="uppercase text-xs font-bold">Others</h3>
      <ul className="space-y-6 py-4 md:py-10  text-muted-foreground [&>li]:hover:text-foreground cursor-pointer">
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-5">
            <IconZoomQuestion size={20} />
          </span>
          <span className="footer-link">Frequently Asked Questions</span>
        </li>
      </ul>
    </div>
  );
}
