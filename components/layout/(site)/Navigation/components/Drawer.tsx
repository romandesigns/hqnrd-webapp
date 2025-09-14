import { Locale } from "@/i18n-config";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconCheckupList } from "@tabler/icons-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerMenu({ lang }: { lang: Locale }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size={"icon"} variant={"outline"} className="relative text-md">
          <Badge asChild className="absolute -top-2 -right-3">
            <Link href={`/${lang}`}>0</Link>
          </Badge>
          <IconCheckupList />
        </Button>
      </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  );
}
