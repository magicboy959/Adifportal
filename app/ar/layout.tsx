import type { Metadata } from "next";
import type { ReactNode } from "react";
import { copy } from "@/lib/i18n";

export const metadata: Metadata = {
  title: `${copy.ar.site.name} | ${copy.ar.site.legalName}`,
  description: copy.ar.site.description,
  alternates: {
    canonical: `${copy.ar.site.url}/ar`,
    languages: {
      en: copy.ar.site.url,
      ar: `${copy.ar.site.url}/ar`
    }
  },
  openGraph: {
    title: `${copy.ar.site.name} | ${copy.ar.site.legalName}`,
    description: copy.ar.site.description,
    url: `${copy.ar.site.url}/ar`,
    siteName: copy.ar.site.name,
    locale: "ar",
    type: "website",
    images: [{ url: "/images/adif-hero.png", width: 1600, height: 900 }]
  }
};

export default function ArabicLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="ar" dir="rtl">
      {children}
    </div>
  );
}
