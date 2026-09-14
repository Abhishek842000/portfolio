import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.siteUrl}/`,
      lastModified: new Date(),
    },
  ];
}
