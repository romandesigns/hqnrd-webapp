import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'
import type { Locale } from '@/i18n-config'
import { RoomsGroup } from './Groups'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { DashboardBrand } from '@/components/features'

export function AppSidebar({ lang }: { lang: Locale }) {
  return (
    <Sidebar variant='floating' collapsible='icon' className='font-sans'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-transparent active:bg-transparent'
            >
              <DashboardBrand lang={lang} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <RoomsGroup lang={lang} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
