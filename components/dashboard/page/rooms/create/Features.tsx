import { Card } from "@/components/features";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
import { Switch } from "@/components/ui/switch";
import { HQNRD } from "@/constants";
import { features } from "./utils/Features";

export function Features() {
  return (
    <Card
      aroundPadding
      Header={
        <h2 className="text-sm font-semibold font-sans px-3">Features</h2>
      }
      className="w-full max-w-3xl"
      bodyClassName="flex flex-col gap-4 p-6"
    >
      <div className="grid grid-cols-3 gap-3 my-2 border-b pb-8">
        {features.map((feature) => (
          <div className={feature.className} key={feature.name}>
            <Switch id={feature.name} name={feature.name} />
            <Label className="text-xs" htmlFor={feature.name}>
              {feature.label}
            </Label>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col grow">
          <Label
            htmlFor="beds"
            className="font-sans mb-1 text-[0.7rem] text-muted-foreground"
          >
            Beds
          </Label>
          <Input id="beds" name="beds" type="number" placeholder="0" required />
        </div>
        <div className="flex flex-col grow">
          <Label
            htmlFor="sizeSqm"
            className="font-sans mb-1 text-[0.7rem] text-muted-foreground"
          >
            Size Sqm
          </Label>
          <Input
            id="sizeSqm"
            name="sizeSqm"
            type="number"
            placeholder="0"
            required
          />
        </div>
      </div>
      <div>
        <Label
          htmlFor="categories"
          className="font-sans mb-1 text-[0.7rem]  text-muted-foreground"
        >
          Select Bed Type
        </Label>
        <Select name="bedType">
          <SelectTrigger id="bedType" className="w-full font-sans">
            <SelectValue placeholder="Bed Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {HQNRD.BEDTYPES.map((bedType) => (
                <SelectItem key={bedType} value={bedType}>
                  {bedType}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Collapsible>
        <CollapsibleTrigger className="text-xs underline text-(--brand-primary) mb-4">
          Add Extra Bed Option
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex flex-col grow">
            <Label
              htmlFor="extraBed"
              className="font-sans mb-1 text-[0.7rem] text-muted-foreground"
            >
              Extra Bed Count
            </Label>
            <Input
              id="extraBed"
              name="extraBed"
              type="number"
              placeholder="0"
              required
            />
          </div>
          <div className="pt-4">
            <Label
              htmlFor="categories"
              className="font-sans mb-1 text-[0.7rem]  text-muted-foreground"
            >
              Select Bed Type
            </Label>
            <Select name="extraBedType">
              <SelectTrigger id="extraBedType" className="w-full font-sans">
                <SelectValue placeholder="Bed Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {HQNRD.BEDTYPES.map((bedType) => (
                    <SelectItem key={bedType} value={bedType}>
                      {bedType}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
