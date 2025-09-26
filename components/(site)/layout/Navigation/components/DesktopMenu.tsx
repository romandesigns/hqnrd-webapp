import { ModeToggle } from "@/components/features";
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

import clsx from "clsx";
import { roomsMenuItems } from "../data/menuItems";
import { Cart } from "./Cart";
import { RoomMenuItem } from "./RoomMenuItem";

export const DesktopMenu = ({
  lang,
  className,
}: {
  lang: Locale;
  className?: string;
}) => {
  return (
    <>
      <ul
        className={clsx(
          `flex items-center gap-6 text-sm w-full max-width mx-auto`,
          className,
        )}
      >
        <li>
          <Button asChild variant="link" className="w-full">
            <Link href={`/${lang}`} className="py-1">
              Inicio
            </Link>
          </Button>
        </li>
        {/* <li>
          <Button asChild variant="link" className="w-full">
            <Link href={`/${lang}/playground`} className="py-1">
              Playground
            </Link>
          </Button>
        </li> */}
        <li>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="link" className="p-0">
                Habitaciones <IconChevronDown />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="p-2 grid grid-cols-2 grid-rows-[1fr_1fr_auto] w-full max-w-[35rem]"
              align="center"
            >
              {roomsMenuItems.map((item, index) => (
                <RoomMenuItem
                  key={index}
                  title={item.title}
                  href={item.href}
                  description={item.description}
                  lang={lang}
                />
              ))}
              <div className="p-2 w-full col-span-full">
                <Button
                  size={"block"}
                  variant={"outline"}
                  className="cursor-pointer"
                >
                  View All
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </li>
        <li>
          <ModeToggle />
        </li>
        <li>
          <Cart lang={lang} />
        </li>
        <li>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="flex justify-between text-md h-9 !px-1"
              >
                <p className="bg-primary p-1 rounded-sm text-background">
                  <IconUser />
                </p>
                <span className="flex items-center gap-2">
                  Usuario
                  <span>
                    <IconChevronDown />
                  </span>
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-42 p-1 shadow-xs" align="center">
              <ul className="p-1 flex flex-col gap-2">
                <li className="hover:bg-accent rounded-md p-1 px-2">
                  <Link
                    href={`/${lang}/iniciar-sesion`}
                    className="py-1 flex items-center justify-start gap-2"
                  >
                    <LogIn size={20} />{" "}
                    <span className="text-sm">Iniciar Sesión</span>
                  </Link>
                </li>
                <li className="hover:bg-accent rounded-md p-1">
                  <SignOutButton
                    lang={lang}
                    className="w-full flex items-center justify-start gap-2 p-1"
                  >
                    <LogOut size={20} />
                    <span className="text-sm">Cerrar Sesión</span>
                  </SignOutButton>
                </li>
                <li className="">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/${lang}/crear-cuenta`} className="py-1">
                      <LockIcon /> Crear Cuenta
                    </Link>
                  </Button>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </li>
      </ul>
    </>
  );
};
