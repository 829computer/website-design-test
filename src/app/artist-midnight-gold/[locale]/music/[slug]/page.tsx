import { notFound } from "next/navigation";
import { getMusicSlugs, MusicWorkPage } from "../../../artist-site";

const locales = ["zh-cn", "zh-tw", "en"] as const;

type MusicWorkRouteProps = {
  params: Promise<{
    locale: "zh-cn" | "zh-tw" | "en";
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => getMusicSlugs().map((slug) => ({ locale, slug })));
}

export default async function MusicWorkRoute({ params }: MusicWorkRouteProps) {
  const { locale, slug } = await params;

  if (!locales.includes(locale) || !getMusicSlugs().includes(slug)) {
    notFound();
  }

  return <MusicWorkPage locale={locale} slug={slug} />;
}
