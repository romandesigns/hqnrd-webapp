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
    foreignGuestFee: Number(formData.get("foreignGuestFee") as string),
    lang: formData.get("lang") as string,
  };
  const convexPayload = {
    localGuestFee: clientData.localGuestFee,
    foreignGuestFee: clientData.foreignGuestFee,
  };
  await fetchMutation(api.fees.createGloabalFeesAction, convexPayload);
  revalidatePath(
    `/${clientData.lang}/dashboard/finanzas/tarifas-globales`,
    "layout",
  );
  redirect(`/${clientData.lang}/dashboard/finanzas/tarifas-globales`);
}

// Update  Fees
export async function updateFees(formData: FormData) {
  const clientData = {
    localGuestFee: Number(formData.get("localGuestFee") as string),
    foreignGuestFee: Number(formData.get("foreignGuestFee") as string),
    feesId: Number(formData.get("feesId") as Id<"fees">),
    lang: formData.get("lang") as string,
  };
  const convexPayload = {
    feesId: clientData.feesId,
    localGuestFee: clientData.localGuestFee,
    foreignGuestFee: clientData.foreignGuestFee,
  };
  await fetchMutation(api.fees.updateFeesAction, convexPayload);
  revalidatePath(
    `/${clientData.lang}/dashboard/finanzas/tarifas-globales`,
    "layout",
  );
  redirect(`/${clientData.lang}/dashboard/finanzas/tarifas-globales`);
}
