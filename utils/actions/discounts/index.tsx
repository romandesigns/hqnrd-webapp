"use server";
import { fetchMutation } from "convex/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

// Creating  Global Fees
export async function createDiscounts(formData: FormData) {
  const clientData = {
    firstDiscount: Number(formData.get("firstDiscount") as string),
    secondDiscount: Number(formData.get("secondDiscount") as string),
    lang: formData.get("lang") as string,
  };
  const convexPayload = {
    firstDiscount: clientData.firstDiscount,
    secondDiscount: clientData.secondDiscount,
  };
  await fetchMutation(api.discounts.createDiscounts, convexPayload);
  revalidatePath(`/${clientData.lang}/dashboard/finanzas/descuentos`, "layout");
  redirect(`/${clientData.lang}/dashboard/finanzas/descuentos`);
}

// Update  Fees
export async function udpateFees(formData: FormData) {
  const clientData = {
    firstDiscount: Number(formData.get("firstDiscount") as string),
    secondDiscount: Number(formData.get("secondDiscount") as string),
    discountId: formData.get("discountId") as Id<"discounts">,
    lang: formData.get("lang") as string,
  };
  const convexPayload = {
    discountId: clientData.discountId,
    firstDiscount: clientData.firstDiscount,
    secondDiscount: clientData.secondDiscount,
  };
  await fetchMutation(api.discounts.updateDiscounts, convexPayload);
  revalidatePath(`/${clientData.lang}/dashboard/finanzas/descuentos`, "layout");
  redirect(`/${clientData.lang}/dashboard/finanzas/descuentos`);
}
