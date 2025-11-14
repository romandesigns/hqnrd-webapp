import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { FinanceFields } from "./fields";

export const createGloabalFeesAction = mutation({
  args: FinanceFields,
  handler: async (ctx, args) => {
    try {
      await ctx.db.insert("fees", { ...args });
    } catch (e) {
      console.log(e);
      return new Error("Back end error");
    }
  },
});

export const getGlobalFees = query({
  handler: async (ctx) => {
    const fees = await ctx.db.query("fees").collect();
    return fees;
  },
});

export const updateFeesAction = mutation({
  args: {
    feesId: v.id("fees"),
    ...FinanceFields,
  },
  handler: async (ctx, { feesId, localGuestFee, foreignGuestFee }) => {
    try {
      await ctx.db.patch(feesId, {
        localGuestFee,
        foreignGuestFee,
      });
    } catch (e) {
      console.log(e);
      return new Error("Back end error");
    }
  },
});
