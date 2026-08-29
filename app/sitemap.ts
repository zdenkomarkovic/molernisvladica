import type { MetadataRoute } from "next";
import { SERVICES, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/cenovnik`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}/usluge/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
