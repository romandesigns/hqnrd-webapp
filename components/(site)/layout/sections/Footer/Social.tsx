import { IconBrandFacebook, IconBrandInstagram } from "@/components/icons";

export function Social() {
  return (
    <div>
      <h3 className="uppercase text-xs font-bold">Social</h3>
      <ul className="space-y-6 py-4 md:py-10  text-muted-foreground [&>li]:hover:text-foreground cursor-pointer">
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-5">
            <IconBrandFacebook size={20} />
          </span>
          <span className="footer-link">Facebook</span>
        </li>
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-5">
            <IconBrandInstagram size={20} />
          </span>
          <span className="footer-link">Instagram</span>
        </li>
      </ul>
    </div>
  );
}
