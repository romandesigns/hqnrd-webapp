import { fetchQuery } from "convex/nextjs";
import { Category } from "@/components/features/Cards";
import { SectionHeading } from "@/components/features/Heading";
import { Content, Section } from "@/components/layout";
import { api } from "@/convex/_generated/api";
import type { Locale } from "@/i18n-config";

export async function Categories({ lang }: { lang: Locale }) {
  // 1. Fetch categories from Convex
  const categoriesArray = await fetchQuery(api.categories.getCategoriesAction);

  // 2. Resolve cover URLs in parallel
  const categories = await Promise.all(
    categoriesArray.map(async (category) => {
      const coverUrl = category.cover.coverUrl
        ? await fetchQuery(api.upload.getFileUrl, {
            storageId: category.cover.coverUrl,
          })
        : null;

      return {
        ...category,
        coverUrl,
        coverAlt: category.cover.coverAlt,
      };
    })
  );
console.log(categories)
  return (
    <Section>
      <Content className="px-40">
        <SectionHeading
          showBorders
          title="Select Categories"
          description="Browse our room categories and choose your stay"
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch justify-stretch gap-6">
          {categories.map((cat) => (
            <li key={cat._id} className="flex">
              <Category
                title={cat.labels.title.singular}
                coverUrl={cat.coverUrl}
                coverAlt={cat.coverAlt}
                slug={cat.slugs.plural}
                lang={lang}
                maxGuests={cat.maxGuests}
              />
            </li>
          ))}
        </ul>
      </Content>
    </Section>
  );
}
