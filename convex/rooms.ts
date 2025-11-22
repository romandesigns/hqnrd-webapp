import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { RoomFields } from "./fields/room";

export const createRoom = mutation({
  args: RoomFields,
  handler: async (ctx, args) => {
    return await ctx.db.insert("rooms", { ...args });
  },
});

export const getRooms = query({
  handler: async (ctx) => {
    return await ctx.db.query("rooms").collect();
  },
});

export const deleteFileFromStorage = mutation({
  args: {
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    return await ctx.storage.delete(args.storageId);
  },
});
