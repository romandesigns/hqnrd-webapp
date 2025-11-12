"use server";
import { fetchMutation } from "convex/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";


// Creating  Global Fees
export async function createGlobalFees(formData: FormData) {
  const clientData = {
    localGuestFee: Number(formData.get("localGuestFee") as string),
    foreighGuestFee: Number(formData.get("foreighGuestFee") as string),
    lang: formData.get("lang") as string,
  };
  const convexPayload = {
    localGuests: clientData.localGuestFee,
    foreighGuests: clientData.foreighGuestFee,
  };
  console.log(clientData, convexPayload)
  await fetchMutation(api.fees.createGloabalFeesAction, convexPayload);
  revalidatePath(
    `/${clientData.lang}/dashboard/finanzas/tarifas-globales`,
    "layout",
  );
  redirect(`/${clientData.lang}/dashboard/finanzas/tarifas-globales`);
}

// Update  Category
// export async function updateGlobalFees(formData: FormData) {
//   const clientData = {
//     categoryName: formData.get("categoryName") as string,
//     maxGuests: Number(formData.get("maxGuests") as string),
//     lang: formData.get("lang") as string,
//     categoryId: formData.get("categoryId") as Id<"categories">,
//   };
//   const convexPayload = {
//     categoryId: formData.get("categoryId") as Id<"categories">,
//     maxGuests: clientData.maxGuests,
//     labels: {
//       title: {
//         plural: formatCategoryStr(clientData.categoryName, "title", true),
//         singular: formatCategoryStr(clientData.categoryName, "title", false),
//       },
//     },
//     slugs: {
//       plural: formatCategoryStr(clientData.categoryName, "kebab", true),
//       singular: formatCategoryStr(clientData.categoryName, "kebab", false),
//     },
//   };
//   await fetchMutation(api.categories.updateCategoryAction, {
//     ...convexPayload,
//   });
//   revalidatePath(
//     `/${clientData.lang}/dashboard/habitaciones/categoria`,
//     "layout",
//   );
//   redirect(`/${clientData.lang}/dashboard/habitaciones/categoria`);
// }

// Deleting Single Category
// export async function deleteGlobalFees(formData: FormData) {
//   const clientData = {
//     categoryId: formData.get("categoryId") as Id<"categories">,
//     lang: formData.get("lang") as string,
//   };
//   await fetchMutation(api.categories.deleteCategoryAction, {
//     categoryId: clientData.categoryId,
//   });
//   revalidatePath(
//     `/${clientData.lang}/dashboard/habitaciones/categoria`,
//     "layout",
//   );
// }
