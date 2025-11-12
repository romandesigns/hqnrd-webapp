"use server";
import { fetchMutation, fetchQuery } from "convex/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

// Creating  room
export async function createRoom(formData: FormData) {
  const data = {
    category: JSON.parse(formData.get("category") as string),
    unitNumber: Number(formData.get("unitNumber") as string),
    lang: formData.get("lang") as string,
  };
  revalidatePath(`/${data.lang}/dashboard/habitaciones/categoria`, "layout");
  redirect(`/${data.lang}/dashboard/habitaciones`);
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
