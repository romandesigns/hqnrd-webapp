import { Locale } from "@/i18n-config";
import clsx from "clsx";
import React from "react";

export const Content = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx(`max-width mx-auto p-2 my-20 md:px-10`, className)}>
      {children}
    </div>
  );
};
