import { v } from "convex/values";

export const DiscountFields = {
  firstDiscount: v.number(),
  secondDiscount: v.number(),
  execption: v.optional(v.number()),
};
