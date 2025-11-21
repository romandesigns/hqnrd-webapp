"use server";
import { fetchMutation } from "convex/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

// Import your amenities list
import { amenities } from "@/utils/shared/amenities";

// Creating room
export async function createRoom(formData: FormData) {
  const category = JSON.parse(formData.get("category") as string);
  const AMENITY_KEYS = amenities.map((a) => a.key);

  const selectedAmenities = AMENITY_KEYS.reduce(
    (acc, key) => {
      acc[key] = formData.get(key) === "on";
      return acc;
    },
    {} as Record<string, boolean>,
  );
  const lang = formData.get("lang") as string;
  const data = {
    unitNumber: Number(formData.get("unitNumber") as string),
    maxGuests: Number(formData.get("maxGuests") as string),
    category: {
      id: category._id as Id<"categories">,
      maxGuests: category.maxGuests as number,
      slugs: {
        singular: category.slugs.singular as string,
        plural: category.slugs.plural as string,
      },
      name: {
        singular: category.labels.title.singular as string,
        plural: category.labels.title.plural as string,
      },
    },
    mediaFiles: {
      gallery: {
        primaryImage: formData.get("primaryRoomImageGallery") as string,
        secondaryImage: formData.get("secondaryRoomImageGallery") as string,
        tertiaryImage: formData.get("tertiaryRoomImageGallery") as string,
        quaternaryImage: formData.get("quaternaryRoomImageGallery") as string,
      },
      layoutImage: formData.get("roomLayoutImage") as string,
    },
    pricePerNight: Number(formData.get("pricePerNight") as string),
    // Existing features — untouched
    features: {
      privateBathroom: formData.get("privateBathroom") === "on",
      balcony: formData.get("balcony") === "on",
      intercom: formData.get("intercom") === "on",
      sizeSqm: Number(formData.get("sizeSqm") as string),
      parking: formData.get("parking") === "on",
      beds: Number(formData.get("beds") as string),
      bedType: formData.get("bedType") as string,
      maxOccupancy: Number(formData.get("maxOccupancy") as string),
      wheelChair: formData.get("wheelChair") === "on",
      petFriendly: formData.get("petFriendly") === "on",
      extraBedType: formData.get("extraBedType") as string,
      extraBed: Number(formData.get("extraBed") as string),
    },
    // 🔥 NEW: Fully dynamic amenities
    amenities: selectedAmenities,
  };

  console.log("FINAL ROOM PAYLOAD:", data);

  // ---------------------------------------------
  // 🔥 3. DATABASE INSERT (READY WHEN YOU ARE)
  // ---------------------------------------------
  await fetchMutation(api.rooms.createRoom, data);

  revalidatePath(`/${lang}/dashboard/habitaciones`, "layout");
  redirect(`/${lang}/dashboard/habitaciones`);
}
