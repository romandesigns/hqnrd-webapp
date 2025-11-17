import { fetchQuery } from "convex/nextjs";
import Link from "next/link";
import { MainArticle, MainSection } from "@/components/dashboard/main";
import { Navigation } from "@/components/dashboard/main/navigation";
import { Card, Submit } from "@/components/features";
import { HiddenInput } from "@/components/features/Form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
import { api } from "@/convex/_generated/api";
import type { Locale } from "@/i18n-config";
import { createRoom } from "@/utils/actions/room";
import { amenities } from "../../../../page/room/Amenities/amenities";

export async function Room({ lang }: { lang: Locale }) {
  const categories = await fetchQuery(api.categories.getCategoriesAction);
  return (
    <MainSection className="flex-1 flex flex-col">
      <Navigation lang={lang}>
        <Breadcrumb className="mr-auto">
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <Link
                href={`/${lang}/dashboard/habitaciones`}
                className="text-xs"
              >
                <BreadcrumbPage>Habitaciones</BreadcrumbPage>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <Link
              href={`/${lang}/dashboard/habitaciones/crear`}
              className="text-xs"
            >
              Crear
            </Link>
          </BreadcrumbList>
        </Breadcrumb>
      </Navigation>
      <MainArticle className="grow flex justify-stretch items-center flex-1 w-full h-full">
        <form className="w-full flex justify-center items-center flex-col  gap-8  py-6">
          {/* Basic Information */}
          <Card
            aroundPadding
            Header={
              <h2 className="text-sm font-semibold font-sans px-3">
                Basic Information
              </h2>
            }
            className="w-full max-w-2xl"
            bodyClassName="flex flex-col gap-4 p-6"
          >
            {/* Unit Number */}
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

            {/* Category */}
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
                        value={category.labels.title.plural}
                      >
                        {category.labels.title.plural}
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

            {/* Price Per Night */}
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

            {/* maxGuests */}
            <div>
              <Label
                htmlFor="maxGuests"
                className="font-sans mb-1 text-[0.7rem]  text-muted-foreground"
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

          {/* Gallery */}
          <Card
            aroundPadding
            Header={
              <h2 className="text-sm font-semibold font-sans px-3">Gallery</h2>
            }
            className="h-auto w-full max-w-2xl"
            bodyClassName="p-0!"
          >
            <div className="grid grid-cols-4 grid-rows-2 gap-1 p-2">
              <figure className="col-span-2 row-span-2 aspect-square rounded-sm bg-pink-500"></figure>
              <figure className="col-start-3 col-end-5 rounded-sm bg-purple-500"></figure>
              <figure className="col-start-3 col-end-4 row-start-2 row-end-3 rounded-sm bg-orange-500"></figure>
              <figure className="col-start-4 col-end-5 rounded-sm bg-yellow-500"></figure>
            </div>
          </Card>

          {/* Features */}
          <Card
            aroundPadding
            Header={
              <h2 className="text-sm font-semibold font-sans px-3">Features</h2>
            }
            className="w-full max-w-2xl"
            bodyClassName="flex flex-col gap-4 p-6"
          >
            <div className="grid grid-cols-3 gap-3 my-2 border-b pb-8">
              {/* Private Bathroom */}
              <div className="flex items-center space-x-2  grow">
                <Switch id="privateBathroom" name="privateBathroom" />
                <Label className="text-xs" htmlFor="privateBathroom">
                  Private Bathroom
                </Label>
              </div>

              {/* Balcony */}
              <div className="flex items-center space-x-2  grow">
                <Switch id="Balcony" name="balcony" />
                <Label className="text-xs" htmlFor="Balcony">
                  Balcony
                </Label>
              </div>

              <div className="flex items-center space-x-2  grow">
                <Switch id="Intercom" name="intercom" />
                <Label className="text-xs" htmlFor="Intercom">
                  Intercom
                </Label>
              </div>

              {/* Pet */}
              <div className="flex items-center space-x-2  grow">
                <Switch id="petFriendly" name="petFriendly" />
                <Label className="text-xs" htmlFor="petFriendly">
                  Pets Friendly
                </Label>
              </div>

              {/* Partking */}
              <div className="flex items-center space-x-2  grow">
                <Switch id="parking" name="parking" />
                <Label className="text-xs" htmlFor="parking">
                  Parking
                </Label>
              </div>

              {/* Disabiliy */}
              <div className="flex items-center space-x-2  grow">
                <Switch id="wheelChair" name="wheelChair" />
                <Label className="text-xs" htmlFor="wheelChair">
                  Wheel Chair Access
                </Label>
              </div>

              {/* Parking */}
              <div className="flex items-center space-x-2  grow">
                <Switch id="Parking" name="parking" />
                <Label htmlFor="Parking">Parking</Label>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              {/* Beds Count */}
              <div className="flex flex-col grow">
                <Label
                  htmlFor="beds"
                  className="font-sans mb-1 text-[0.7rem] text-muted-foreground"
                >
                  Beds
                </Label>
                <Input
                  id="beds"
                  name="beds"
                  type="number"
                  placeholder="0"
                  required
                />
              </div>

              {/* Max Guests */}
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
            {/* Bed Types */}
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
                {/* Beds Count */}
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
                {/* Extra Bed Types */}
                <div className="pt-4">
                  <Label
                    htmlFor="categories"
                    className="font-sans mb-1 text-[0.7rem]  text-muted-foreground"
                  >
                    Select Bed Type
                  </Label>
                  <Select name="extraBedType">
                    <SelectTrigger
                      id="extraBedType"
                      className="w-full font-sans"
                    >
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

          {/* Amenities */}
          <Card
            aroundPadding
            Header={
              <h2 className="text-sm font-semibold font-sans px-3">
                Amenities
              </h2>
            }
            className="w-full max-w-2xl"
            bodyClassName="flex flex-col gap-4 p-6"
          >
            <div className="grid grid-cols-3 gap-5 my-2 border-b pb-8">
              {amenities.map((amenity) => (
                <label
                  key={amenity.key}
                  className="flex items-center gap-2 cursor-pointer"
                  htmlFor={amenity.key}
                >
                  <Switch
                    id={amenity.key}
                    name={amenity.key}
                    value="true"
                    defaultChecked={false}
                  />
                  <span className="text-xs">{amenity.label}</span>
                </label>
              ))}
            </div>
          </Card>
          <HiddenInput name="lang" defaultValue={lang} />
          <Submit
            label="Create"
            formAction={createRoom}
            type="submit"
            variant="primary"
            className="w-full max-w-2xl mt-6"
          />
        </form>
      </MainArticle>
    </MainSection>
  );
}
