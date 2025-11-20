"use server";
import { fetchMutation, fetchQuery } from "convex/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

// Creating  room
export async function createRoom(formData: FormData) {
  console.log(formData);
  const category = JSON.parse(formData.get("category") as string);
  const data = {
    unitNumber: Number(formData.get("unitNumber") as string),
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
        tertiaryImage: formData.get("tertiaryuRoomImageGallery") as string,
        quaternaryImage: formData.get("quaternaryRoomImageGallery") as string,
      },
      layoutImage: formData.get("roomLayoutImage") as string,
      video: formData.get("roomVideo") as string,
    },
    pricePerNight: Number(formData.get("pricePerNight") as string),
    lang: formData.get("lang") as string,
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
  };

  // Inset room in database
  // Revalidate Path
  // revalidatePath(`/${data.lang}/dashboard/habitaciones`, "layout");
  // Redirect to rooms page
  // redirect(`/${data.lang}/dashboard/habitaciones`);
}

// Deleting Single Room
// export async function deleteRoom(formData: FormData) {
//   const clientData = {
//     categoryId: formData.get('categoryId') as Id<'categories'>,
//     lang: formData.get('lang') as string,
//   }
//   await fetchMutation(api.categories.deleteCategoryAction, {
//     categoryId: clientData.categoryId,
//   })
//   revalidatePath(
//     `/${clientData.lang}/dashboard/habitaciones/categoria`,
//     'layout',
//   )
// }
