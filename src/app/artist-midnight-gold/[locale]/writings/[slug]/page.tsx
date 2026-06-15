import { notFound } from "next/navigation";
import { getWritingSlugs, WritingArticlePage } from "../../../artist-site";

const locales = ["zh-cn", "zh-tw", "en"] as const;

type WritingPageProps = {
  params: Promise<{
    locale: "zh-cn" | "zh-tw" | "en";
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => getWritingSlugs().map((slug) => ({ locale, slug })));
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { locale, slug } = await params;

  if (!locales.includes(locale) || !getWritingSlugs().includes(slug)) {
    notFound();
  }

  return <WritingArticlePage locale={locale} slug={slug} />;
}
