import { notFound } from "next/navigation";
import { getWritingCategoryKeys, WritingCategoryPage } from "../../../../artist-site";

const locales = ["zh-cn", "zh-tw", "en"] as const;

type WritingCategoryRouteProps = {
  params: Promise<{
    locale: "zh-cn" | "zh-tw" | "en";
    category: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => getWritingCategoryKeys().map((category) => ({ locale, category })));
}

export default async function WritingCategoryRoute({ params }: WritingCategoryRouteProps) {
  const { locale, category } = await params;
  const categoryKeys = getWritingCategoryKeys();

  if (!locales.includes(locale) || !categoryKeys.includes(category as (typeof categoryKeys)[number])) {
    notFound();
  }

  return <WritingCategoryPage locale={locale} category={category as (typeof categoryKeys)[number]} />;
}
