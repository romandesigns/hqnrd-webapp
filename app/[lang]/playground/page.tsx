import Image from 'next/image'
import ConvexTasks from './ConvexTasks'
import { Suspense } from 'react'
import { Brand, Card } from '@/components/features'
import { i18n, Locale } from '@/i18n-config'

export default async function PlaygroundPage({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>
}>) {
  const { lang } = await params
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <h2 className='uppercase font-black'>Playground</h2>
    </div>
  )
}
