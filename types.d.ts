import type { Id } from "./convex/_generated/dataModel";

export type CategoryEditParams = Promise<{
  lang: Locale;
  id: Id<"categories">;
}>;
export type CategoryParams = Promise<{ lang: Locale }>;
export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;
export type RoomParams = Promise<{
  params: Promise<{   lang: Locale,unit: string[] }>;  
}>;