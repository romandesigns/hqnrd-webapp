import { DrawerMenu } from '@/components/layout/sections/Navigation/components/Drawer'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Locale } from '@/i18n-config'
import Link from 'next/link'

export function Navigation({ lang }: { lang: Locale }) {
  return (
    <nav className='flex items-center p-2'>
      <SidebarTrigger />
      <Separator
        orientation='vertical'
        className='mx-2 data-[orientation=vertical]:h-4'
      />
      <Breadcrumb className='mr-auto'>
        <BreadcrumbList>
          <BreadcrumbItem className='hidden md:block'>
            <Link href={`/${lang}/dashboard/habitactiones`} className='text-xs'>
              Habitaciones
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className='hidden md:block' />
          <BreadcrumbItem className='text-xs'>
            <BreadcrumbPage>Categorias</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='block md:hidden'>
        <DrawerMenu lang={lang} className='ml-auto' />
      </div>
    </nav>
  )
}
