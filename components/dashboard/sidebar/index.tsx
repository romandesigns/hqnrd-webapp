import { DashboardBrand } from "@/components/features";
import {
  IconBedFilled,
  IconCirclePlus,
  IconDoor,
  IconEdit,
  IconFrame,
  IconMapPinDollar,
  IconTicket,
} from "@/components/icons";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { Locale } from "@/i18n-config";
import { FinanceGroup, RoomsGroup } from "./Groups";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const lang = props.lang as Locale;
  // This is sample data.
  const data = {
    rooms: [
      {
        title: "Categorias",
        icon: IconFrame,
        isActive: false,
        url: `/${lang}/dashboard/habitaciones/categoria`,
      },
      {
        title: "Habitaciones",
        url: "#",
        icon: IconBedFilled,
        isActive: false,
        items: [
          {
            title: "Ver todas",
            url: `/${lang}/dashboard/habitaciones`,
            icon: IconDoor,
          },
          {
            title: "Crear",
            url: `/${lang}/dashboard/habitaciones/crear`,
            icon: IconCirclePlus,
          },
        ],
      },
    ],
    finance: [
      {
        title: "Tarifas Globales",
        url: `/${lang}/dashboard/finanzas/tarifas-globales`,
        icon: IconMapPinDollar,
      },
      {
        title: "Descuentos",
        url: `/${lang}/dashboard/finanzas/descuentos`,
        icon: IconTicket,
      },
    ],
  };

  return (
    <Sidebar variant="floating" collapsible="icon" className="font-sans">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-transparent active:bg-transparent"
            >
              <DashboardBrand lang={lang} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <RoomsGroup lang={lang} roomsData={data.rooms} />
        <FinanceGroup lang={lang} financeData={data.finance} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
