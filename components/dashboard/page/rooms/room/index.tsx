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
import type { Locale } from "@/i18n-config";
import { createRoom } from "@/utils/actions/room";

export async function Habitacion({ lang }: { lang: Locale }) {
  const categories = await fetchQuery(api.categories.getCategoriesAction);
  return (
    <MainSection className="flex-1">
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
      <MainArticle className="flex justify-center items-center flex-1">
        <form className="w-full flex justify-center items-center">
          <Card
            Header={
              <h2 className="text-sm font-semibold font-sans px-3">
                Crear Habitación
              </h2>
            }
            className="max-w-2xl"
            bodyClassName="flex flex-col gap-4 p-6"
          >
            {/* Select room categories */}
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
            {/* Insert room number */}
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
              <HiddenInput name="lang" defaultValue={lang} />
            </div>
          </Card>
          <Submit
            label="Submit"
            formAction={createRoom}
            type="submit"
            variant="primary"
          />
        </form>
      </MainArticle>
    </MainSection>
  );
}
