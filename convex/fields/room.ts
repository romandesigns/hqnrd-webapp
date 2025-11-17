import { v } from "convex/values";
import { amenityValidatorShape } from "../../utils/amenities";

export const RoomFields = {
  /* ------------------------------------ */
  /*  BASIC INFO                          */
  /* ------------------------------------ */
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

  /* ------------------------------------ */
  /*  MEDIA FILES                         */
  /* ------------------------------------ */
  mediaFiles: v.optional(
    v.object({
      layout: v.optional(v.string()),
      walkthrough: v.optional(v.string()),
      images: v.object({
        ratioSquared: v.string(),
        ratioLandscape: v.string(),
        ratioSquaredSmL: v.string(),
        ratioSquaredSmR: v.string(),
      }),
    }),
  ),

  /* ------------------------------------ */
  /*  FEATURES (STRUCTURAL DATA)          */
  /* ------------------------------------ */
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
    extraBedType: v.string(),
    extraBed: v.number(),
  }),

  /* ------------------------------------ */
  /*  AMENITIES (ICONS & SERVICES)        */
  /* ------------------------------------ */
  amenities: v.optional(v.object(amenityValidatorShape)),

  /* ------------------------------------ */
  /*  METADATA                            */
  /* ------------------------------------ */
  createdAt: v.number(),
  authorId: v.string(),
};
