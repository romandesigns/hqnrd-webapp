import { Locale } from "@/i18n-config";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconCheckupList } from "@tabler/icons-react";

export function Cart({ lang }: { lang: Locale }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"secondary"} className="relative text-md">
          <Badge asChild className="absolute -top-2 -right-3 pointer-events-none">
            <Link href={`/${lang}`}>0</Link>
          </Badge>
          <IconCheckupList />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
