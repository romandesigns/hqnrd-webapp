import React from "react";
import { Navigation, Footer } from "../..";
import { Locale } from "@/i18n-config";

interface ContainerProps {
  showNavBar?: boolean;
  showFooter?: boolean;
  children: React.ReactNode;
  lang?: Locale;
  navClassNames?: string;
  footerClassNames?: string;
  Header?: React.ComponentType<{ lang: Locale }>;
}

export function Container({
  showNavBar = false,
  showFooter = false,
  children,
  lang = "en",
  navClassNames,
  footerClassNames,
  Header,
}: ContainerProps) {
  return (
    <>
      {showNavBar && <Navigation lang={lang} className={navClassNames} />}
      {Header && <Header lang={lang} />}
      {children}
      {showFooter && <Footer lang={lang} className={footerClassNames} />}
    </>
  );
}
