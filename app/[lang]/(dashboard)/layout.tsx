import { Navigation } from '@/components/dashboard/main/Navigation'
import { AppSidebar } from '@/components/dashboard/sidebar'
import { Main } from '@/components/layout'
import { SidebarProvider } from '@/components/ui/sidebar'
import type { Locale } from '@/i18n-config'

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}>) {
  const { lang } = await params
  return (
    <SidebarProvider>
      <AppSidebar lang={lang} />
      <Main className='flex-1 flex flex-col'>
        {/* <Navigation lang={lang} /> */}
        {children}
      </Main>
    </SidebarProvider>
  )
}
