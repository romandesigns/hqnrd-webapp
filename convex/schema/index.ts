import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import {
  CategoryFields,
  DiscountsFields,
  FinanceFields,
  ProfileFields,
} from "../fields";

export default defineSchema({
  profiles: defineTable(v.object(ProfileFields)),
  categories: defineTable(v.object(CategoryFields)),
  fees: defineTable(v.object(FinanceFields)),
  discounts: defineTable(v.object(DiscountsFields)),
});
