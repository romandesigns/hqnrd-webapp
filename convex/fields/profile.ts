import { v } from "convex/values";
import { HQNRD } from "../../constants";

export const ProfileFields = {
  firstName: v.optional(v.string()),
  lastName: v.optional(v.string()),
  username: v.optional(v.string()),
  banned: v.boolean(),
  createdAt: v.number(),
  email: v.string(),
  emailVerificationStatus: v.optional(v.string()),
  avatarUrl: v.optional(v.string()),
  phone: v.optional(v.string()),
  phoneVerificationStatus: v.optional(v.string()),
  clerkId: v.string(),
  locked: v.boolean(),
  status: v.string(),
  role: v.union(
    v.literal(HQNRD.ROLES.ADMIN),
    v.literal(HQNRD.ROLES.MANAGER),
    v.literal(HQNRD.ROLES.RECEPTIONIST),
    v.literal(HQNRD.ROLES.GUEST),
  ),
};
