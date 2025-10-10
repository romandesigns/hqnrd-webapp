"use client";

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
import { useInstallPrompt } from "@/utils/hooks/useInstallPrompt";

export default function InstallPrompt() {
  const {
    deferredPrompt,
    showPrompt,
    setShowPrompt,
    dismissPrompt,
  } = useInstallPrompt();

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
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-primary">
            Install HQNRD App
          </DialogTitle>
          <DialogDescription>
            Add the <strong>Hotel Quinto Nivel RD</strong> app to your home
            screen for faster access and a better mobile experience.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end space-x-2">
          <Button variant="outline" onClick={dismissPrompt}>
            Maybe later
          </Button>
          <Button onClick={handleInstall}>Install</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
