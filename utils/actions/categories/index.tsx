"use server";
import { fetchMutation } from "convex/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { stringFormatter } from "@/utils/stringFromatter";

const formatCategoryStr = (
  str: string,
  format:
    | "title"
    | "kebab"
    | "snake"
    | "camel"
    | "pascal"
    | "lowercase"
    | "uppercase",
  modifier: boolean,
) => stringFormatter.categoryFormatter(str, format, modifier);

// Creating  Category
export async function createCategory(formData: FormData) {
  const clientData = {
    categoryName: formData.get("categoryName") as string,
    maxGuests: Number(formData.get("maxGuests") as string),
    lang: formData.get("lang") as string,
  };
  const convexPayload = {
    maxGuests: clientData.maxGuests,
    labels: {
      title: {
        plural: formatCategoryStr(clientData.categoryName, "title", true),
        singular: formatCategoryStr(clientData.categoryName, "title", false),
      },
    },
    slugs: {
      plural: formatCategoryStr(clientData.categoryName, "kebab", true),
      singular: formatCategoryStr(clientData.categoryName, "kebab", false),
    },
  };
  await fetchMutation(api.categories.createCategoryAction, convexPayload);
  revalidatePath(
    `/${clientData.lang}/dashboard/habitaciones/categoria`,
    "layout",
  );
}

// Update  Category
export async function updateCategory(formData: FormData) {
  const clientData = {
    categoryName: formData.get("categoryName") as string,
    maxGuests: Number(formData.get("maxGuests") as string),
    lang: formData.get("lang") as string,
    categoryId: formData.get("categoryId") as Id<"categories">,
  };
  const convexPayload = {
    categoryId: formData.get("categoryId") as Id<"categories">,
    maxGuests: clientData.maxGuests,
    labels: {
      title: {
        plural: formatCategoryStr(clientData.categoryName, "title", true),
        singular: formatCategoryStr(clientData.categoryName, "title", false),
      },
    },
    slugs: {
      plural: formatCategoryStr(clientData.categoryName, "kebab", true),
      singular: formatCategoryStr(clientData.categoryName, "kebab", false),
    },
  };
  await fetchMutation(api.categories.updateCategoryAction, {
    ...convexPayload,
  });
  revalidatePath(
    `/${clientData.lang}/dashboard/habitaciones/categoria`,
    "layout",
  );
  redirect(`/${clientData.lang}/dashboard/habitaciones/categoria`);
}

// Deleting Single Category
export async function deleteCategory(formData: FormData) {
  const clientData = {
    categoryId: formData.get("categoryId") as Id<"categories">,
    lang: formData.get("lang") as string,
  };
  await fetchMutation(api.categories.deleteCategoryAction, {
    categoryId: clientData.categoryId,
  });
  revalidatePath(
    `/${clientData.lang}/dashboard/habitaciones/categoria`,
    "layout",
  );
}
