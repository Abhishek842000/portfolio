import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  image,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  const isHome = path === "/";
  const ogTitle = isHome
    ? `${siteConfig.fullName} · ${siteConfig.tagline}`
    : `${title} · ${siteConfig.fullName}`;

  return {
    title: isHome ? { absolute: ogTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: siteConfig.fullName,
      locale: "en_US",
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
