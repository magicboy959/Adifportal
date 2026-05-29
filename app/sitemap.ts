import type { MetadataRoute } from "next";
import { navItems, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const englishRoutes = ["", ...navItems.map((item) => item.href)];
  const arabicRoutes = ["/ar", ...navItems.map((item) => `/ar${item.href}`)];
  const routes = [...englishRoutes, ...arabicRoutes];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
