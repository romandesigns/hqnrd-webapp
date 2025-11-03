import type { Locale } from '@/i18n-config'
import { Habitacion } from '@/components/dashboard/page/rooms'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  return <Habitacion lang={lang} />
}
