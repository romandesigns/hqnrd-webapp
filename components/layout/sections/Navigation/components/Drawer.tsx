import { auth, currentUser } from "@clerk/nextjs/server";
import { IconMenuDeep } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
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
import { SignOutButton } from "@/components/ui/SignOutBtn";
import type { Locale } from "@/i18n-config";

export async function DrawerMenu({
  lang,
  className,
}: {
  lang: Locale;
  className?: string;
}) {
  const { isAuthenticated } = await auth();
  const user = await currentUser();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size={"icon"} variant={"bordered"} className="relative text-md">
          <IconMenuDeep />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className={clsx(
          `h-[100vh] !max-h-[100vh] m-0 font-sans px-4`,
          className,
        )}
      >
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
            <p className="text-sm text-muted-foreground">
              {isAuthenticated
                ? `${user?.firstName} ${user?.lastName}`
                : "Web Visitor"}{" "}
            </p>
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
            {isAuthenticated && (
              <li>
                <DrawerClose className="w-full" asChild>
                  <Link
                    href={`/${lang}/dashboard`}
                    className={clsx(
                      buttonVariants({ variant: "outline", size: "block" }),
                    )}
                  >
                    Dashboard
                  </Link>
                </DrawerClose>
              </li>
            )}
            <li className="py-4">
              <ContactWidget lang={lang} btnVariant={"bordered"} />
            </li>
            {isAuthenticated ? (
              <li className="mt-auto">
                <SignOutButton lang={lang} btnVariant="default">
                  Cerrar Sesión
                </SignOutButton>
              </li>
            ) : (
              <>
                <li className="mt-auto">
                  <Button size="block" asChild variant={"primary"}>
                    <Link href={`/${lang}/iniciar-sesion`}>Iniciar Sesión</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    size="block"
                    asChild
                    variant={"link"}
                    className="text-xs font-normal"
                  >
                    <Link href={`/${lang}/crear-cuenta`}>
                      No tienes cuenta aun?{" "}
                      <span className="underline font-semibold">
                        Registrate
                      </span>
                    </Link>
                  </Button>
                </li>
              </>
            )}
          </ul>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
