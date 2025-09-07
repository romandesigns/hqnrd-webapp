import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { ProfileFields } from "./fields";

export const createProfile = mutation({
  args: ProfileFields,
  handler: async (ctx, args) => {
    try {
      await ctx.db.insert("profiles", { ...args });
    } catch (e) {
      console.log(e);
      return new Error("Back end error");
    }
  },
});

export const updateUserAvatar = mutation({
  args: {
    profileId: v.id("profiles"),
    avatarUrl: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.profileId, {
      avatarUrl: args.avatarUrl,
    });
  },
});

export const deleteUserAvatar = mutation({
  args: {
    profileId: v.id("profiles"),
    avatarUrl: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.profileId, {
      avatarUrl:
        "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18zMW9hNXA3djAweFdYdkt4TDlGY0ViNVc2YlciLCJyaWQiOiJ1c2VyXzMyNndVT2t2Z0pCbzZmQkFROXhPTm1OdWs4WSIsImluaXRpYWxzIjoiUkYifQ",
    });
  },
});
