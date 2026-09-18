import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services/dockage", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services/restaurant", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/restaurant/reserve", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/services/fuel", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/services/gift-shop", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/mow-life", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/book", priority: 0.95, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
