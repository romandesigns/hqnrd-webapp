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
import { Container, Navigation } from "@/components/layout";

export default async function PlaygroundPage({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;

  return (
    <Container lang={lang} showNavBar showFooter>
      <div className="font-sans w-full items-center justify-center min-h-screen gap-16">
        <h2 className=" ">Playground</h2>
      </div>
    </Container>
  );
}
