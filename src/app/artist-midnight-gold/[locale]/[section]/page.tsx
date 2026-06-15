import { notFound } from "next/navigation";
import { ArtistSite } from "../../artist-site";

const locales = ["zh-cn", "zh-tw", "en"] as const;
const sections = ["about", "artists", "video", "music", "news", "writings", "terms-conditions"] as const;

type ArtistSectionPageProps = {
  params: Promise<{
    locale: "zh-cn" | "zh-tw" | "en";
    section: (typeof sections)[number];
  }>;
};

export default async function ArtistSectionPage({ params }: ArtistSectionPageProps) {
  const { locale, section } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  if (!sections.includes(section)) {
    notFound();
  }

  return <ArtistSite locale={locale} section={section} />;
}
