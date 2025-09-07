import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { ProfileFields } from "../fields";

export default defineSchema({
  profiles: defineTable(v.object(ProfileFields)),
});
