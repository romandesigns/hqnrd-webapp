"use client";
import {
  IconChevronDown,
  IconMoodKid,
  IconUser,
  IconChevronUp,
} from "@tabler/icons-react";
import React from "react";
import { Button } from "./button";
import { Input } from "./input";

export function InputNumber({
  inputNumberLabel,
  name,
  iconName,
  iconSize,
  defaultValue,
}: {
  inputNumberLabel: string;
  name: string;
  iconName?: string;
  iconSize: number;
  defaultValue?: number;
}) {
  const [count, setCount] = React.useState(defaultValue || 0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  return (
    <div className="mt-0">
      <div className="flex items-center justify-start space-x-2 pb-2">
        {iconName === "FaUser" ? <IconUser size={18} /> : null}
        {iconName === "FaChild" ? <IconMoodKid size={17} /> : null}
        <label className="leading-nonec text-xs text-muted-foreground">
          {inputNumberLabel}
        </label>
      </div>
      <div className="flex items-center justify-center rounded-md">
        <div className="flex">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-r-none rounded-l-md bg-transparent px-5"
            onClick={increment}
          >
            <IconChevronUp />
          </Button>
        </div>
        <Input
          name={name}
          value={count}
          readOnly
          onChange={() => {}}
          className={`rounded-none h-0 text-[0.645rem] py-[.95rem] text-center ${count === 0 ? "text-muted-foreground" : ""}`}
        />
        <Button
          type="button"
          disabled={count === 0}
          size="icon"
          variant="outline"
          className="rounded-l-none rounded-r-md bg-transparent px-5"
          onClick={decrement}
        >
          <IconChevronDown />
        </Button>
      </div>
    </div>
  );
}
