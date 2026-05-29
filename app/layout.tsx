import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Noto_Sans_Arabic } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap"
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.legalName}`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png"
  },
  alternates: {
    canonical: site.url,
    languages: {
      en: site.url,
      ar: `${site.url}/ar`
    }
  },
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "ADIF Organization",
    "humanitarian action",
    "development systems",
    "African regional platform",
    "policy research",
    "institutional transformation"
  ],
  openGraph: {
    title: `${site.name} | ${site.legalName}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/images/adif-hero.png", width: 1600, height: 900 }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.legalName}`,
    description: site.description,
    images: ["/images/adif-hero.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${arabic.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
