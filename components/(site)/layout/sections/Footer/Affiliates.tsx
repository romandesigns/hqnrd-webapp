import { IconBrandAirbnb, IconBuildingSkyscraper } from "@/components/icons";

export function Affiliates({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h3 className="uppercase text-xs font-bold">Affiliates</h3>
      <ul className="space-y-6 py-4  md:py-10 text-muted-foreground [&>li]:hover:text-foreground cursor-pointer">
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-5">
            <IconBrandAirbnb size={18} />
          </span>
          <span className="footer-link">Hotel Quinto Nivel RD - AirB&B</span>
        </li>
        <li className="flex items-center justify-start gap-2">
          <span className="icon-highlight w-5">
            <IconBuildingSkyscraper size={20} />
          </span>
          <span className="footer-link">Hotel Quinto Nivel RD - Expedia</span>
        </li>
      </ul>
    </div>
  );
}
