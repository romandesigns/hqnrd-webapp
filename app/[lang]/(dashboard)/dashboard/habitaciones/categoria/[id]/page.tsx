import { Category } from '@/components/dashboard/page/rooms/category/edit'
import type { CategoryEditParams } from '@/types'

export default async function Page({ params }: { params: CategoryEditParams }) {
  const { lang, id } = await params
  return <Category lang={lang} categoryId={id} />
}
