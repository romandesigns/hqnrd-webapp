"use client";

import { useClerk } from "@clerk/nextjs";
import { Locale } from "@/i18n-config";

export const SignOutButton = ({
  lang,
  children,
  className,
}: {
  lang: Locale;
  children?: React.ReactNode;
  className?: string;
}) => {
  const { signOut } = useClerk();

  return (
    // Clicking this button signs out a user
    // and redirects them to the home page "/".
    <button
      onClick={() => signOut({ redirectUrl: `/${lang}` })}
      className={`${className}`}
    >
      {children}
    </button>
  );
};
