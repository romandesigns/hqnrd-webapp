import { Container, Main, Section } from "@/components/layout";
import type { Locale } from "@/i18n-config";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <Section className="h-full p-4">
      <p>Dashboard Main</p>
    </Section>
  );
}
