import type { Icon } from "@tabler/icons-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import type { Locale } from "@/i18n-config";

interface RoomsGroupProps {
  lang: Locale;
  financeData: {
    title: string;
    url: string;
    icon: Icon;
    isActive: boolean;
    items: {
      title: string;
      url: string;
      icon: Icon;
    }[];
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
          {financeData?.map((subItem) => (
            <SidebarMenuItem key={subItem.title}>
              <SidebarMenuSubButton asChild>
                <Link href={subItem.url}>
                  {subItem.icon && <subItem.icon />}
                  <span>{subItem.title}</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
