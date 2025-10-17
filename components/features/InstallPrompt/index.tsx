"use client";

import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HQNRD } from "@/constants";
import images from "@/public/assets/images.json";
import { useInstallPrompt } from "@/utils/hooks/useInstallPrompt";

export default function InstallPrompt() {
  const { deferredPrompt, showPrompt, setShowPrompt, dismissPrompt } =
    useInstallPrompt();

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    // 🔹 Trigger native PWA install prompt
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    // 🔹 If they accept or dismiss, close the modal
    setShowPrompt(false);
    // Optionally remember if user dismissed manually
    if (outcome === "dismissed") {
      dismissPrompt();
    }
  };

  return (
    <Dialog open={showPrompt} onOpenChange={setShowPrompt}>
      <DialogContent className="w-11/12 h-11/12 p-4 flex items-center justify-center flex-col">
        <DialogHeader className="flex-1 flex items-center justify-center">
          <div className="p-2  rounded-md dark:shadow-black shadow-md bg-background">
                      <Image
            width={50}
            height={50}
            src={images.hotel_logo}
            alt={HQNRD.BRANDING.alt}
          />
          </div>
          <DialogTitle className="text-md font-bold text-primary">
            HQNRD App Installation
          </DialogTitle>
          <DialogDescription className="text-xs">
            Add the <strong>Hotel Quinto Nivel RD</strong> app to your home
            screen for faster access and a better mobile experience.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row mt-auto w-full gap-2">
          <Button className="flex-1 h-10" onClick={handleInstall} variant={'primary'}>
            Install
          </Button>
          <Button
            variant="outline"
            className="flex-1 h-10"
            onClick={dismissPrompt}
          >
            Decline
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
