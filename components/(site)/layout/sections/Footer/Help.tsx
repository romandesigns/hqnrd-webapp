import { IconZoomQuestion, IconDeviceMobile } from "@/components/icons";

export function Help() {
  return (
    <div>
      <h3 className="uppercase text-xs font-bold">Help</h3>
      <ul className="space-y-6 py-4 md:py-10  text-muted-foreground [&>li]:hover:text-foreground cursor-pointer">
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-5">
            <IconZoomQuestion size={20} />
          </span>
          <span className="footer-link">Frequently Asked Questions</span>
        </li>
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-5">
            <IconDeviceMobile size={20} />
          </span>
          <span className="footer-link">Download Mobile Version</span>
        </li>
      </ul>
    </div>
  );
}
