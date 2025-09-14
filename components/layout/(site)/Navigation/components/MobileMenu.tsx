import { Brand, ModeToggle } from "@/components/features";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SignOutButton } from "@/components/ui/SignOutBtn";
import { Locale } from "@/i18n-config";
import { IconChevronDown, IconUser } from "@tabler/icons-react";
import { LockIcon, LogIn, LogOut } from "lucide-react";
import Link from "next/link";

import { RoomMenuItem } from "./RoomMenuItem";
import { Cart } from "./Cart";
import { roomsMenuItems } from "../data/menuItems";
import clsx from "clsx";
import { DrawerMenu } from "./Drawer";

export const MobileMenu = ({
  lang,
  className,
}: {
  lang: Locale;
  className?: string;
}) => {
  return (
    <ul className={clsx(`flex items-center gap-2 text-sm w-full max-width mx-auto`, className )}>
        <li>
          <Button asChild variant="link" className="w-full">
            <Link href={`/${lang}`} className="py-1">
              Inicio
            </Link>
          </Button>
        </li>
        <li>
          <ModeToggle />
        </li>
        <li>
          <Cart lang={lang} />
      </li>
      <li><DrawerMenu lang={lang} /></li>
      </ul>
  );
};
