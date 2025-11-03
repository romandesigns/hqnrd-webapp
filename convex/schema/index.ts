import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { CategoryFields, ProfileFields } from "../fields";

export default defineSchema({
  profiles: defineTable(v.object(ProfileFields)),
  categories: defineTable(v.object(CategoryFields)),
});
