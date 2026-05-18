import type { Metadata } from "next";
import { SITE_URL, siteConfig } from "@/data/site";

export function createMetadata({
  title,
  description,
  path = "",
  image = "/images/hero-jaggery-powder.png",
  keywords = [],
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Pure Organic Jaggery | Powder, Cubes & Chocolate`;
  const desc = description ?? siteConfig.description;
  const url = `${SITE_URL}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const defaultKeywords = [
    "Guric jaggery",
    "organic jaggery powder",
    "pure jaggery cubes",
    "chemical free jaggery",
    "jaggery chocolate",
    "desi ghee jaggery",
    "natural sweetener India",
    "Maharashtra jaggery",
    "guric.in",
  ];

  return {
    title: fullTitle,
    description: desc,
    keywords: [...defaultKeywords, ...keywords],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description: desc,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
