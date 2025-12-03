import { preloadQuery } from "convex/nextjs";
import Link from "next/link";
import { Navigation } from "@/components/dashboard/main";
import { Card } from "@/components/features";
import { IconTagOff } from "@/components/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { api } from "@/convex/_generated/api";
import type { Locale } from "@/i18n-config";
import { CardFooter } from "./CardFooter";
import { CategoryItems } from "./CategoryItem";
import { CategoryItemsCount } from "./CategoryItemCounter";

export async function Category({ lang }: { lang: Locale }) {
  const preloadedCategories = await preloadQuery(
    api.categories.getCategoriesAction,
  );

  return (
    <section className="flex flex-col flex-1">
      <Navigation lang={lang}>
        <Breadcrumb className="mr-auto">
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <Link
                href={`/${lang}/dashboard/habitactiones`}
                className="text-xs"
              >
                Habitaciones
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem className="text-xs">
              <BreadcrumbPage>Categorias</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Navigation>
      <article className="p-2 flex-1 flex items-center justify-center">
        <Card
          Header={<CategoryItemsCount />}
          Footer={<CardFooter lang={lang} />}
          className="md:max-w-md lg:max-w-2xl p-4"
          aroundPadding
          headerClassName="px-0 pb-0"
          footerClassName="space-y-4 mt-4"
          showElevatedSurface={preloadedCategories._valueJSON.length > 0}
        >
          {preloadedCategories._valueJSON.length !== 0 ? (
            <>
              <div className="grid grid-cols-3">
                <p className="bg-red-500">Category</p>
                <p className="bg-purple-500">Guest Count</p>
                <p className="bg-yellow-500">Cover</p>
              </div>
              <ul className="flex flex-col gap-4">
                <CategoryItems
                  preloadedCategories={preloadedCategories}
                  lang={lang}
                />
              </ul>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center bg-muted/10 rounnded-md border border-border-dashed text-muted-foreground p-8">
              <IconTagOff />
              <p>No Categories Added</p>
            </div>
          )}
        </Card>
      </article>
    </section>
  );
}
