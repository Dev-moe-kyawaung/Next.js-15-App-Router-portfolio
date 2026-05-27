import { siteConfig } from "./data/site";
import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[];
}

export function generateSEO({
  title,
  description,
  image,
  keywords
}: SEOProps): Metadata {
  const pageTitle = title ? `${title} • ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description || siteConfig.description;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords || ["Android Developer", "Jetpack Compose", "Kotlin", "Mobile Development"],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
      type: "website",
      url: siteConfig.url
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage]
    }
  };
}
