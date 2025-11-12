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