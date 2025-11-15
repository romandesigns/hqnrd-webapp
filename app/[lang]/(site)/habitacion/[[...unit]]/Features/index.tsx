import React from "react";
import { twMerge } from "tailwind-merge";
import { Card } from "@/components/features";
import { featuresList } from "./featureLis";

export function Features() {
  return (
    <Card
      className="w-full"
      Header={<h3 className="font-bold text-xl px-2">Features</h3>}
    >
      <ul className="flex flex-wrap items-center justify-start gap-2 lg:grid lg:grid-cols-4 lg:grid-rows-2">
        {featuresList.map((feature) => (
          <li key={feature.id} className={twMerge(`p-0.5 flex-1`)}>
            <div className="p-1 bg-muted flex flex-1 items-center gap-2 rounded-md">
              <span
                className={twMerge(
                  `flex ${feature.color} dark:text-card h-8 w-8 items-center justify-center rounded-md`,
                )}
              >
                <feature.Icon />
              </span>
              <span className="ml-1 text-xs text-muted-foreground uppercase font-semibold">
                {feature.text}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
