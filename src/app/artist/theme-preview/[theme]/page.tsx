import { notFound } from "next/navigation";
import { ThemePreviewPage, themePreviews, type ThemePreviewKey } from "../theme-preview-site";

type PageProps = {
  params: Promise<{
    theme: string;
  }>;
};

export function generateStaticParams() {
  return themePreviews.map((theme) => ({
    theme: theme.key,
  }));
}

export default async function Page({ params }: PageProps) {
  const { theme } = await params;

  if (!themePreviews.some((item) => item.key === theme)) {
    notFound();
  }

  return <ThemePreviewPage themeKey={theme as ThemePreviewKey} />;
}
