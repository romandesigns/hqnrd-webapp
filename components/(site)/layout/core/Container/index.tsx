import type React from "react";
import type { Locale } from "@/i18n-config";
import { Footer, Navigation } from "../..";

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
