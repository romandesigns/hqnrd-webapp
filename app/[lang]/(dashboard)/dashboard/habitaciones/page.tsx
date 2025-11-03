import type { Locale } from '@/i18n-config'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params

  return (
    <>
      <section className='p-2'>Habitaciones</section>
    </>
  )
}
