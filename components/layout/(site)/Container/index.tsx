import React from "react";
import { Navigation } from "../..";
import { Footer } from "../..";
import { Locale } from "@/i18n-config";

interface ContainerProps {
  showNavBar?: boolean;
  showFooter?: boolean;
  children: React.ReactNode;
  lang: Locale;
  navClassNames?: string;
  footerClassNames?: string;
}

export function Container({
  showNavBar = false,
  showFooter = false,
  children,
  lang = "en",
  navClassNames,
  footerClassNames,
}: ContainerProps) {
  return (
    <>
      {showNavBar && <Navigation lang={lang} className={navClassNames} />}
      {children && children}
      {showFooter && <Footer lang={lang} className={footerClassNames} />}
    </>
  );
}
