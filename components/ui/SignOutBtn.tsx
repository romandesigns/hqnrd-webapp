"use client";

import { useClerk } from "@clerk/nextjs";
import type { Locale } from "@/i18n-config";
import { Button } from "./button";

export const SignOutButton = ({
  lang,
  children,
  className,
  btnVariant = "ghost",
}: {
  lang: Locale;
  children?: React.ReactNode;
  className?: string;
  btnVariant?: "ghost" | "primary" | "secondary" | "bordered" | "default";
}) => {
  const { signOut } = useClerk();

  return (
    // Clicking this button signs out a user
    // and redirects them to the home page "/".
    <Button
      size={"block"}
      variant={btnVariant}
      onClick={() => signOut({ redirectUrl: `/${lang}` })}
      className={`${className}`}
    >
      {children}
    </Button>
  );
};
