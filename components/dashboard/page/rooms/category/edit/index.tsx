import { preloadQuery } from "convex/nextjs";
import Link from "next/link";
import { Navigation } from "@/components/dashboard/main";
import { Card } from "@/components/features";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import type { Locale } from "@/i18n-config";
import { CardFooter } from "./CardFooter";

export async function Category({
  lang,
  categoryId,
}: {
  lang: Locale;
  categoryId: Id<"categories">;
}) {
  const preloadedCategory = await preloadQuery(
    api.categories.getCategoryByIdAction,
    { categoryId },
  );

  const category = JSON.parse(JSON.stringify(preloadedCategory._valueJSON));

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
              <Link
                href={`/${lang}/dashboard/habitaciones/categoria`}
                className="text-xs"
              >
                Categorias
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem className="text-xs">
              <BreadcrumbPage>Editando</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Navigation>
      <article className="p-2 flex-1 flex items-center justify-center">
        <Card
          Header={
            <p className="font-sans text-xs text-(--brand-warning)">Editando</p>
          }
          Footer={<CardFooter lang={lang} categoryId={categoryId} />}
          className="md:max-w-md lg:max-w-2xl p-4"
          aroundPadding
          headerClassName="px-0 pb-0"
          footerClassName="space-y-4 mt-4"
          showElevatedSurface={!category._id}
        >
          <ul className="border-b bg-transparent pb-4 pt-6 text-muted-foreground flex flex-col gap-2 font-sans">
            <li className="font-bold text-2xl">
              {category.labels.title.plural}
            </li>
            <li className="font-bold text-lg">
              {category.labels.title.singular}
            </li>
          </ul>
        </Card>
      </article>
    </section>
  );
}
