import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { CategoryFields } from "./fields";

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
  },
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

export const updateCategoryAction = mutation({
  args: {
    categoryId: v.id("categories"),
    maxGuests: v.number(),
    labels: v.object({
      title: v.object({
        plural: v.string(),
        singular: v.string(),
      }),
    }),
    slugs: v.object({
      plural: v.string(),
      singular: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.categoryId, {
      maxGuests: args.maxGuests,
      labels: args.labels,
      slugs: args.slugs,
    });
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
