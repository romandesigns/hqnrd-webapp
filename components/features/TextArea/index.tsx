"use client";

import React from "react";
import { Textarea } from "@/components/ui/textarea";

type TextAreaProps = {
  name: string;
  maxLength?: number;
};

export function TextArea({ name, maxLength = 150 }: TextAreaProps) {
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= maxLength) {
      setValue(newValue);
    }
  };

  return (
    <div className="flex flex-col space-y-2 font-sans">
      <Textarea
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="min-h-24"
        aria-describedby={`${name}-counter`}
      />

      <div
        id={`${name}-counter`}
        className={`text-xs text-right ${
          value.length === maxLength
            ? "text-(--brand-danger)"
            : "text-muted-foreground"
        }`}
      >
        {value.length} / {maxLength}
      </div>
    </div>
  );
}
