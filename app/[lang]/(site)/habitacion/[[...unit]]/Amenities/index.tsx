import { Card } from "@/components/features";
import { amenities } from "./ameneties";

export function Amenities() {
  return (
    <Card
      aroundPadding
      Header={<h3 className="font-bold text-lg px-2">Amenities</h3>}
    >
      <ul className="grid w-full grid-cols-2 gap-6 py-2 sm:grid-cols-3 md:grid-cols-4">
        {amenities.map((amenity, idx) => (
          <li key={idx} className="flex items-center justify-start">
            <span className="order-2 text-[.8rem]">{amenity.label}</span>
            <span className="order-1 mr-1 h-5 w-5">
              <amenity.Icon size={18} className="text-muted-foreground" />
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
