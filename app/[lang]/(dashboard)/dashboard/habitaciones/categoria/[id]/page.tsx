import { EditCategory } from "@/components/dashboard/page/rooms/category";
import type { CategoryEditParams } from "@/types";

export default async function Page({ params }: { params: CategoryEditParams }) {
  const { lang, id } = await params;
  return <EditCategory lang={lang} categoryId={id} />;
}
