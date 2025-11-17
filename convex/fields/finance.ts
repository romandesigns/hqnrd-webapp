import { v } from "convex/values";

export const FinanceFields = {
  localGuestFee: v.number(),
  foreignGuestFee: v.number(),
  lateCheckoutFee: v.number(),
  itbs: v.optional(v.number()),
};
