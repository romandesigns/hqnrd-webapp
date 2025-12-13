import { v } from "convex/values";
import { amenityValidatorShape } from "../../utils/amenities";

export const RoomFields = {
  unitNumber: v.number(),
  category: v.object({
    id: v.string(),
    maxGuests: v.number(),
    slugs: v.object({
      singular: v.string(),
      plural: v.string(),
    }),
    name: v.object({
      singular: v.string(),
      plural: v.string(),
    }),
  }),
  pricePerNight: v.number(),
  maxGuests: v.number(),
  mediaFiles: v.object({
    gallery: v.object({
      primaryImage: v.string(),
      secondaryImage: v.string(),
      tertiaryImage: v.string(),
      quaternaryImage: v.string(),
    }),
    layoutImage: v.string(),
  }),
  features: v.object({
    privateBathroom: v.boolean(),
    balcony: v.boolean(),
    intercom: v.boolean(),
    sizeSqm: v.number(),
    parking: v.boolean(),
    beds: v.number(),
    bedType: v.string(),
    maxOccupancy: v.number(),
    wheelChair: v.boolean(),
    petFriendly: v.boolean(),
    extraBedType: v.optional(v.string()),
    extraBed: v.optional(v.number()),
  }),
  amenities: v.object(amenityValidatorShape),
  // lang: v.string(),
  // createdAt: v.number(),
  // authorId: v.string(),
};
