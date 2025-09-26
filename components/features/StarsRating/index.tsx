import {
  IconStarFilled,
  IconStarHalfFilled,
  IconStarOff,
} from "@tabler/icons-react";
import React from "react";

export function StarsRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <IconStarFilled
          key={`full-${index}`}
          className="text-[var(--brand-warning)]"
          size={15}
        />
      ))}
      {hasHalfStar && (
        <IconStarHalfFilled size={15} className="text-[var(--brand-warning)]" />
      )}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <IconStarOff
          size={15}
          key={`empty-${index}`}
          className="text-[var(--brand-warning)]"
        />
      ))}
    </div>
  );
}
