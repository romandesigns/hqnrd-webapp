import { v } from "convex/values";

export const DiscountsFields = {
  discounts: v.object({
    moreThanFiveDays: v.number(),
    moreThanEightDays: v.number(),
    execption: v.number(),
  }),
};
