"use client";

import { useEffect, useState } from "react";

export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();

      // 🧠 Skip if user has already dismissed it
      if (localStorage.getItem("install-dismissed")) return;

      setDeferredPrompt(e);

      // 🔹 Show after 6 seconds (fallback)
      const timer = setTimeout(() => setShowPrompt(true), 6000);

      // 🔹 Or show as soon as user scrolls a bit
      const onScroll = () => {
        if (window.scrollY > 200) {
          setShowPrompt(true);
          clearTimeout(timer);
          window.removeEventListener("scroll", onScroll);
        }
      };

      window.addEventListener("scroll", onScroll, { once: true });
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const dismissPrompt = () => {
    localStorage.setItem("install-dismissed", "true");
    setShowPrompt(false);
  };

  return { deferredPrompt, showPrompt, setShowPrompt, dismissPrompt };
}
