import { Card } from '@/components/features'
import type { Locale } from '@/i18n-config'
import { CategoryItems } from './CategoryItem'
import { CategoryItemsCount } from './CategoryItemCounter'
import { Navigation } from './Navigation'
import { CardFooter } from './CardFooter'
import { preloadQuery } from 'convex/nextjs'
import { api } from '@/convex/_generated/api'
import { IconTagOff } from '@/components/icons'

export async function Category({ lang }: { lang: Locale }) {
  const preloadedCategories = await preloadQuery(
    api.categories.getCategoriesAction,
  )
  return (
    <>
      <Navigation lang={lang} />
      <section className='p-2 flex-1 flex items-center justify-center'>
        <Card
          Header={<CategoryItemsCount />}
          Footer={<CardFooter lang={lang} />}
          className='max-w-3xl p-4'
          aroundPadding
          headerClassName='px-0 pb-0'
          footerClassName='space-y-4 mt-4'
          showElevatedSurface={preloadedCategories._valueJSON.length > 0}
        >
          {preloadedCategories._valueJSON.length !== 0 ? (
            <ul className='flex flex-col gap-4'>
              <CategoryItems
                preloadedCategories={preloadedCategories}
                lang={lang}
              />
            </ul>
          ) : (
            <div className='flex flex-col items-center justify-center bg-muted/10 rounnded-md border border-border-dashed text-muted-foreground p-8'>
              <IconTagOff />
              <p>No Categories Added</p>
            </div>
          )}
        </Card>
      </section>
    </>
  )
}
