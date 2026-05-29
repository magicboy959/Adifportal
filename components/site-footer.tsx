"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { copy, getLocaleFromPath, navByLocale } from "@/lib/i18n";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const navItems = navByLocale[locale];
  const text = copy[locale];
  const site = text.site;

  return (
    <footer dir={locale === "ar" ? "rtl" : "ltr"} className="bg-navy text-white">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <Logo
            src="/images/adif-logo-footer-display.png"
            sizes="144px"
            imageClassName="h-24"
          />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/72">
            {site.description} {text.footerDescription}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
            {text.footerPlatform}
          </h2>
          <div className="mt-5 grid gap-3">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-white"
              >
                {item.label}
                <ArrowUpRight size={14} className="opacity-0 transition group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
            {text.footerContact}
          </h2>
          <div className="mt-5 grid gap-4 text-sm text-white/72">
            <p className="flex gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-orange" />
              <span>{site.address}</span>
            </p>
            <p className="flex gap-3">
              <Phone size={18} className="mt-1 shrink-0 text-orange" />
              <span>{site.phones.join(" / ")}</span>
            </p>
            <p className="flex gap-3">
              <Mail size={18} className="mt-1 shrink-0 text-orange" />
              <span>{site.email}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-6 py-6 text-xs text-white/55">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.name}. {text.rights}</p>
            <p>{text.framework}</p>
          </div>
          <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4">
            <Link
              href={locale === "ar" ? "/ar/privacy" : "/privacy"}
              className="text-white/55 transition hover:text-white"
            >
              {locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <span className="text-white/20">•</span>
            <Link
              href={locale === "ar" ? "/ar/terms-conditions" : "/terms-conditions"}
              className="text-white/55 transition hover:text-white"
            >
              {locale === "ar" ? "شروط والأحكام" : "Terms & Conditions"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
