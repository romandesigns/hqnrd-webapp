import { v } from "convex/values";

export const CategoryFields = {
  labels: v.object({
    title: v.object({
      plural: v.string(),
      singular: v.string(),
    }),
  }),
  cover: v.object({
    coverUrl: v.string(),
    coverAlt: v.string(),
  }),
  slugs: v.object({
    plural: v.string(),
    singular: v.string(),
  }),
  maxGuests: v.number(),
};
