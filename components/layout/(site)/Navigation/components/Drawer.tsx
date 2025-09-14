import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Locale } from "@/i18n-config";
import { IconCheckupList } from "@tabler/icons-react";
import Link from "next/link";
import { IconMenuDeep } from "@tabler/icons-react";

export function DrawerMenu({ lang }: { lang: Locale }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size={"icon"} variant={"bordered"} className="relative text-md">
          <IconMenuDeep />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[100vh] !max-h-[90vh] m-0">
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>Footer</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
