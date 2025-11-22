import { fetchQuery } from "convex/nextjs";
import { Card } from "@/components/features";
import { HiddenInput } from "@/components/features/Form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/convex/_generated/api";

export async function Details() {
  const categories = await fetchQuery(api.categories.getCategoriesAction);
  return (
    <Card
      aroundPadding
      Header={
        <h2 className="text-sm font-semibold font-sans px-3">
          Basic Information
        </h2>
      }
      className="w-full max-w-3xl"
      bodyClassName="flex flex-col gap-4 p-6"
    >
      <div>
        <Label
          htmlFor="unit-number"
          className="font-sans mb-1 text-[0.7rem]  text-muted-foreground"
        >
          Unit number
        </Label>
        <Input
          id="unit-number"
          name="unitNumber"
          type="number"
          placeholder="0"
          required
        />
      </div>
      <div>
        <Label
          htmlFor="categories"
          className="font-sans mb-1 text-[0.7rem]  text-muted-foreground"
        >
          Select Room Categories
        </Label>
        <Select name="roomCategory">
          <SelectTrigger id="categories" className="w-full font-sans">
            <SelectValue placeholder="Categorias" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((category) => (
                <SelectItem
                  key={category._id}
                  value={category.labels.title.singular}
                >
                  {category.labels.title.singular}
                  <HiddenInput
                    name="category"
                    defaultValue={JSON.stringify(category)}
                  />
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label
          htmlFor="pricePerNight"
          className="font-sans mb-1 text-[0.7rem]  text-muted-foreground"
        >
          Price Per Night
        </Label>
        <Input
          id="pricePerNight"
          name="pricePerNight"
          type="number"
          placeholder="0"
          required
        />
      </div>
      <div>
        <Label
          htmlFor="maxGuests"
          className="font-sans mb-1 text-[0.7rem] text-muted-foreground"
        >
          Max Guests Per Unit
        </Label>
        <Input
          id="maxGuests"
          name="maxGuests"
          type="number"
          placeholder="0"
          required
        />
      </div>
    </Card>
  );
}
