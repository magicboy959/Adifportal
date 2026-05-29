import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMetadata(
  title: string,
  description: string,
  path = ""
): Metadata {
  const url = `${site.url}${path}`;

  return {
    title: `${title} | ${site.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: "/images/adif-hero.png", width: 1600, height: 900 }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: ["/images/adif-hero.png"]
    }
  };
}
