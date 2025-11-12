import { NewCategory } from "@/components/dashboard/page/rooms/category";
import type { CategoryParams } from "@/types";

export default async function Page({ params }: { params: CategoryParams }) {
  const { lang } = await params;
  return <NewCategory lang={lang} />;
}
