'use client'

import { Button } from '@/components/ui/button'
import { IconEdit, IconTrash } from '@/components/icons'
import { Id } from '@/convex/_generated/dataModel'
import { Preloaded, usePreloadedQuery } from 'convex/react'
import type { Locale } from '@/i18n-config'
import { deleteCategory } from '@/utils/actions/categories'
import { api } from '@/convex/_generated/api'

export function CategoryItems({
  preloadedCategories,
  lang,
}: {
  preloadedCategories: Preloaded<typeof api.categories.getCategoriesAction>
  lang: Locale
}) {
  const categories = usePreloadedQuery(preloadedCategories)

  const handleDeleteCategory = async (
    categoryId: Id<'categories'>,
    lang: Locale,
  ) => {
    const formData = new FormData()
    formData.append('categoryId', categoryId)
    formData.append('lang', lang)
    await deleteCategory(formData)
  }

  return categories?.map(catItem => (
    <li className='flex items-center justify-between' key={catItem._id}>
      <p className='font-medium text-sm'>{catItem.labels.title.plural}</p>
      <div className='text-xs flex items-center gap-2'>
        <Button size='icon' variant='ghost'>
          <IconEdit className='text-(--brand-warning)' />
        </Button>
        <Button
          size='icon'
          variant='ghost'
          onClick={() => handleDeleteCategory(catItem._id, lang)}
        >
          <IconTrash className='text-(--brand-danger)' />
        </Button>
      </div>
    </li>
  ))
}
