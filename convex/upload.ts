import { mutation } from './_generated/server'
import { v } from 'convex/values'

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl()
  },
})

export const updateRecord = mutation({
  args: {
    fileStorageId: v.string(),
    resource: v.string(),
    fileName: v.string(),
    documentId: v.string(),
  },
  handler: async (ctx, args) => {
    console.log(args)
    // Get resource type: User || Room
    // User: Avatar
    // Room: Card default image || room layout || Image Gallery || Video

    return ''
  },
})
