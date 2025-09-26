import { Locale } from "@/i18n-config";
import clsx from "clsx";
import React from "react";

export const Content = ({
  lang,
  children,
  className,
}: {
  lang: Locale;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx(`max-width mx-auto p-2`, className)}>{children}</div>
  );
};
