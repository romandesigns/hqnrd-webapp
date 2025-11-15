import type { Icon } from "@tabler/icons-react";
import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import type { Locale } from "@/i18n-config";

interface RoomsGroupProps {
  lang: Locale;
  financeData: {
    title: string;
    url: string;
    icon: Icon;
  }[];
}

export function FinanceGroup({ lang, financeData }: RoomsGroupProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        {lang === "en" ? "Finance" : "Finanzas"}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {financeData?.map(
            (item: { title: string; url: string; icon: Icon }) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuSubButton asChild>
                  <Link href={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuItem>
            ),
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
