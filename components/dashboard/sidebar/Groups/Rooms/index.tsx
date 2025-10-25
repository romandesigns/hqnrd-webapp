import { IconBedFilled, IconTagFilled } from '@/components/icons'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import type { Locale } from '@/i18n-config'

export function RoomsGroup({ lang }: { lang: Locale }) {
  const items = [
    {
      title: 'Category',
      url: `/${lang}/dashboard/habitaciones/categoria`,
      icon: IconTagFilled,
    },
    {
      title: 'Habitacion',
      url: `/${lang}/dashboard/habitaciones/habitacion`,
      icon: IconBedFilled,
    },
  ]
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Rooms</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
