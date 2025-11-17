import { v } from "convex/values";
import { type Amenity, amenities } from "../shared/amenities";

export const amenityValidatorShape = Object.fromEntries(
  amenities.map((a: Amenity) => [a.key, v.boolean()]),
);
