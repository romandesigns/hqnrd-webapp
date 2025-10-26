'use server'
import { stringFormatter } from '@/utils/stringFromatter'
import { revalidatePath } from 'next/cache'
import { api } from '@/convex/_generated/api'
import { ConvexHttpClient } from 'convex/browser'
import { fetchMutation, fetchQuery } from 'convex/nextjs'
import { Id } from '@/convex/_generated/dataModel'

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

const formatCategoryStr = (
  str: string,
  format:
    | 'title'
    | 'kebab'
    | 'snake'
    | 'camel'
    | 'pascal'
    | 'lowercase'
    | 'uppercase',
  modifier: boolean,
) => stringFormatter.categoryFormatter(str, format, modifier)

// Creating  Category
export async function createCategory(formData: FormData) {
  const clientData = {
    category_name: formData.get('category_name') as string,
    max_guest: Number(formData.get('max_guest') as string),
    lang: formData.get('lang') as string,
  }
  const convexPayload = {
    max_guests: clientData.max_guest,
    labels: {
      title: {
        plural: formatCategoryStr(clientData.category_name, 'title', true),
        singular: formatCategoryStr(clientData.category_name, 'title', false),
      },
    },
    slugs: {
      plural: formatCategoryStr(clientData.category_name, 'kebab', true),
      singular: formatCategoryStr(clientData.category_name, 'kebab', false),
    },
  }
  await fetchMutation(api.categories.createCategoryAction, convexPayload)
  revalidatePath(
    `/${clientData.lang}/dashboard/habitaciones/categoria`,
    'layout',
  )
}

// Deleting Single Category
export async function deleteCategory(formData: FormData) {
  const clientData = {
    categoryId: formData.get('categoryId') as Id<'categories'>,
    lang: formData.get('lang') as string,
  }
  await fetchMutation(api.categories.deleteCategoryAction, {
    categoryId: clientData.categoryId,
  })
  revalidatePath(
    `/${clientData.lang}/dashboard/habitaciones/categoria`,
    'layout',
  )
}
