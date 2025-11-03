'use client'

import { useQuery } from 'convex/react'
import { Spinner } from '@/components/ui/spinner'
import { api } from '@/convex/_generated/api'

export function CategoryItemsCount() {
  const categories = useQuery(api.categories.getCategoriesAction)

  return categories && categories.length > 0 ? (
    <div className='px-1 text-xs mb-2 text-muted-foreground flex items-center gap-2'>
      <span className='font-bold text-primary'>{categories?.length}</span>
      <span>Categorias</span>
    </div>
  ) : (
    <div className='px-1 mb-2 flex items-center justify-start gap-2'>
      <Spinner />
      <p className='text-muted-foreground text-xs'>Loading</p>
    </div>
  )
}
