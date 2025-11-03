import { AppSidebar } from '@/components/dashboard/sidebar'
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
      {children}
    </SidebarProvider>
  )
}
