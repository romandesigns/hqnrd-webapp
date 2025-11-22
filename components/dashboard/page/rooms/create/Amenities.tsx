import { Card } from "@/components/features";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { amenities } from "@/utils/shared/amenities";

export function Amenities() {
  return (
    <Card
      aroundPadding
      Header={
        <h2 className="text-sm font-semibold font-sans px-3">Amenities</h2>
      }
      className="w-full max-w-3xl"
      bodyClassName="flex flex-col gap-4 p-6"
    >
      <div className="grid grid-cols-3 gap-5 my-2 border-b pb-8">
        {amenities.map((amenity) => (
          <div key={amenity.key} className="flex items-center gap-2">
            <Switch
              id={amenity.key}
              name={amenity.key}
              defaultChecked={false}
            />
            <Label htmlFor={amenity.key} className="text-xs">
              {amenity.label}
            </Label>
          </div>
        ))}
      </div>
    </Card>
  );
}
