import { notFound } from "next/navigation";
import { getMusicCategoryKeys, MusicCategoryPage } from "../../../../artist-site";

const locales = ["zh-cn", "zh-tw", "en"] as const;

type MusicCategoryRouteProps = {
  params: Promise<{
    locale: "zh-cn" | "zh-tw" | "en";
    category: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => getMusicCategoryKeys().map((category) => ({ locale, category })));
}

export default async function MusicCategoryRoute({ params }: MusicCategoryRouteProps) {
  const { locale, category } = await params;
  const categoryKeys = getMusicCategoryKeys();

  if (!locales.includes(locale) || !categoryKeys.includes(category as (typeof categoryKeys)[number])) {
    notFound();
  }

  return <MusicCategoryPage locale={locale} category={category as (typeof categoryKeys)[number]} />;
}
