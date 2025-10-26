import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { CategoryFields } from "./fields";
import { revalidatePath } from 'next/cache'

export const createCategoryAction = mutation({
  args: CategoryFields,
  handler: async (ctx, args) => {
    try {
      await ctx.db.insert("categories", { ...args });
    } catch (e) {
      console.log(e);
      return new Error("Back end error");
    }
  },
});

export const getCategoriesAction = query({
    args: {},
    handler: async (ctx) => {
        const categories = await ctx.db.query("categories").collect();
        return categories || [];
    }
});

export const getCategoryByIdAction = query({
  args: {
    categoryId: v.id("categories"),
  },
  handler: async (ctx, args) => {
    const category = await ctx.db.get(args.categoryId);
    return category || null;
  },
});

export const deleteCategoryAction = mutation({
  args: {
    categoryId: v.id("categories"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.categoryId);
  },
});