import { notFound } from "next/navigation";
import { ArtistSite } from "../artist-site";

const locales = ["zh-cn", "zh-tw", "en"] as const;

type ArtistLocalePageProps = {
  params: Promise<{
    locale: "zh-cn" | "zh-tw" | "en";
  }>;
};

export default async function ArtistLocalePage({ params }: ArtistLocalePageProps) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return <ArtistSite locale={locale} section="home" />;
}
