import { Brand } from "@/components/features";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SignOutButton } from "@/components/ui/SignOutBtn";
import { Locale } from "@/i18n-config";
import {
  IconCheckupList,
  IconChevronDown,
  IconUser,
} from "@tabler/icons-react";
import { LockIcon, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default async function PlaygroundPage({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;

  const roomsMenuItems: {
    title: Record<Locale, string>;
    href: string;
    description: Record<Locale, string>;
  }[] = [
    {
      title: { es: "Básicas", en: "Basic" },
      href: "/habitaciones/basicas",
      description: {
        en: "Simple and cozy for one or two guests.",
        es: "Sencillas y acogedoras para una o dos personas.",
      },
    },
    {
      title: { es: "Standards", en: "Standard" },
      href: "/habitaciones/standards",
      description: {
        en: "Comfortable and practical stay.",
        es: "Estancia cómoda y práctica.",
      },
    },
    {
      title: { es: "Doble Camas", en: "Double Beds" },
      href: "/habitaciones/doble-camas",
      description: {
        en: "Two beds, perfect for friends.",
        es: "Dos camas, ideal para amigos.",
      },
    },
    {
      title: { es: "Dobles", en: "Double" },
      href: "/habitaciones/dobles",
      description: {
        en: "Cozy room with a double bed.",
        es: "Acogedora con cama doble.",
      },
    },
    {
      title: { es: "Familiares", en: "Family" },
      href: "/habitaciones/familiares",
      description: {
        en: "Spacious option for families.",
        es: "Espaciosa para familias.",
      },
    },
    {
      title: { es: "Ejecutivas", en: "Executive" },
      href: "/habitaciones/ejecutivas",
      description: {
        en: "Modern and premium comfort.",
        es: "Moderna y de confort premium.",
      },
    },
  ];

  function RoomMenuItem({
    title,
    href,
    description,
  }: {
    title: Record<Locale, string>;
    href: string;
    description: Record<Locale, string>;
  }) {
    return (
      <Link
        href={href}
        className="flex gap-2 p-4 fonts-sans hover:bg-accent m-1 rounded-md"
      >
        <figure className="relative h-20 w-full bg-red-500 rounded-sm" />
        <div className="h-full flex flex-col justify-start w-full">
          {/* title */}
          <p className="font-black text-xs uppercase">{title[lang]}</p>
          {/* description */}
          <p className="text-xs text-muted-foreground mt-1 font-semibold">
            {description[lang]}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2 className="uppercase font-black">Playground</h2>
      <nav className="w-full flex items-center justify-between max-width">
        <Brand lang={lang} />
        <ul className="flex items-center gap-6 text-sm">
          <Link href={`/${lang}`}>Inicio</Link>
          <li>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="link" className="p-0">
                  Habitaciones <IconChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="p-1 grid grid-cols-2 grid-rows-2 w-full max-w-[35rem]"
                align="center"
              >
                {roomsMenuItems.map((item, index) => (
                  <RoomMenuItem
                    key={index}
                    title={item.title}
                    href={item.href}
                    description={item.description}
                  />
                ))}
              </PopoverContent>
            </Popover>
          </li>
          <li>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size={"icon"}
                  variant={"outline"}
                  className="relative text-md"
                >
                  <Badge asChild className="absolute -top-2 -right-3">
                    <Link href="/">0</Link>
                  </Badge>
                  <IconCheckupList />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </li>
          <li>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="text-md px-1">
                  <p className="bg-primary p-1 ml-0.5 rounded-sm text-background">
                    <IconUser />
                  </p>
                  <span className="px-2 flex items-center gap-2">
                    Usuario
                    <span>
                      <IconChevronDown />
                    </span>
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-42 p-1" align="center">
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
                      variant="ghost"
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
      </nav>
    </div>
  );
}
