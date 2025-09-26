import { ContactWidget } from "@/components/features";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Locale } from "@/i18n-config";
import { IconMenuDeep } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";

export function DrawerMenu({ lang }: { lang: Locale }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size={"icon"} variant={"bordered"} className="relative text-md">
          <IconMenuDeep />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[100vh] !max-h-[90vh] m-0 font-sans px-4">
        <DrawerHeader className="flex items-center justify-center">
          <div>
            <div className="shadow rounded-md p-1 dark:shadow-black my-4">
              <Avatar className="h-20 w-20 rounded-sm">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  <DrawerTitle>CN</DrawerTitle>
                </AvatarFallback>
              </Avatar>
            </div>
            <p className="text-sm text-muted-foreground">Web Visitor</p>
          </div>
        </DrawerHeader>
        <DrawerFooter className="mt-0 w-full h-full">
          <ul className="h-full flex flex-col items-stretch gap-4 px-4 justify-center py-4">
            <li>
              <DrawerClose className="w-full" asChild>
                <Link
                  href={`/${lang}`}
                  className={clsx(
                    buttonVariants({ variant: "outline", size: "block" }),
                  )}
                >
                  Inicio
                </Link>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose className="w-full" asChild>
                <Link
                  href={`/${lang}/habitaciones`}
                  className={clsx(
                    buttonVariants({ variant: "outline", size: "block" }),
                  )}
                >
                  Habitaciones
                </Link>
              </DrawerClose>
            </li>
            {/* <li>
              <DrawerClose className="w-full" asChild>
                <Link
                  href={`/${lang}/playground`}
                  className={clsx(
                    buttonVariants({ variant: "outline", size: "block" }),
                  )}
                >
                  Playground
                </Link>
              </DrawerClose>
            </li> */}
            <li className="py-4">
              <ContactWidget lang={lang} btnVariant={"bordered"} />
            </li>
            <li className="mt-auto">
              {/* <DrawerClose className="w-full"> */}
              <Button size="block">Iniciar Sesion</Button>
              {/* </DrawerClose> */}
            </li>
            <li>
              {/* <DrawerClose className="w-full"> */}
              <Button
                size="block"
                asChild
                variant={"link"}
                className="text-xs font-normal"
              >
                <Link href={`/${lang}/crear-cuenta`}>
                  No tienes cuenta aun?{" "}
                  <span className="underline font-semibold">Registrate</span>
                </Link>
              </Button>
              {/* </DrawerClose> */}
            </li>
          </ul>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
