import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import type { Locale } from "@/i18n-config";
import { RoomsGroup } from "./Groups";
import Header from "./Header";

export function AppSidebar({ lang }: { lang: Locale }) {
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <Header lang={lang} />
      </SidebarHeader>
      <SidebarContent>
        <RoomsGroup lang={lang} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
