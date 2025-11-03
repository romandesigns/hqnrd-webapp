import { Category } from '@/components/dashboard/page/rooms/category/new'
import type { CategoryParams } from '@/types'

export default async function Page({ params }: { params: CategoryParams }) {
  const { lang } = await params
  return <Category lang={lang} />
}
