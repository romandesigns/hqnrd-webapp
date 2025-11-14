import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { DiscountFields } from "./fields";

export const createDiscounts = mutation({
  args: DiscountFields,
  handler: async (ctx, args) => {
    try {
      await ctx.db.insert("discounts", { ...args });
    } catch (e) {
      console.log(e);
      return new Error("Back end error");
    }
  },
});

export const getDiscounts = query({
  handler: async (ctx) => {
    const discounts = await ctx.db.query("discounts").collect();
    return discounts;
  },
});

export const updateDiscounts = mutation({
  args: {
    discountId: v.id("discounts"),
    ...DiscountFields,
  },
  handler: async (ctx, { discountId, firstDiscount, secondDiscount }) => {
    try {
      await ctx.db.patch(discountId, {
        firstDiscount,
        secondDiscount,
      });
    } catch (e) {
      console.log(e);
      return new Error("Back end error");
    }
  },
});
