"use client";

import { Languages, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { copy, getLocaleFromPath, localizedPath, navByLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const locale = getLocaleFromPath(pathname);
  const navItems = navByLocale[locale];
  const text = copy[locale];
  const targetLocale = locale === "ar" ? "en" : "ar";
  const languageHref = localizedPath(pathname, targetLocale);

  return (
    <header
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur-xl"
    >
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-md px-3 py-2 text-sm font-semibold text-navy/75 transition hover:bg-navy/5 hover:text-navy",
                pathname === item.href && "bg-navy/5 text-navy"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={languageHref}
            className="focus-ring inline-flex h-11 items-center gap-2 rounded-md border border-navy/10 px-3 text-sm font-bold text-navy hover:bg-navy/5"
            aria-label={text.languageLabel}
          >
            <Languages size={17} />
            {text.language}
          </Link>
          <Button asChild variant="outline">
            <Link href={locale === "ar" ? "/ar/donate" : "/donate"}>
              {locale === "ar" ? "تبرع" : "Donate"}
            </Link>
          </Button>
          <Button asChild variant="navy">
            <Link href={locale === "ar" ? "/ar/contact" : "/contact"}>
              {text.partnerCta}
            </Link>
          </Button>
        </div>
        <button
          className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-navy/10 text-navy lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-navy/10 bg-white lg:hidden">
          <nav className="container grid gap-1 py-4" aria-label="Mobile navigation">
            <Link
              href={languageHref}
              onClick={() => setOpen(false)}
              className="focus-ring inline-flex items-center gap-2 rounded-md px-3 py-3 text-base font-semibold text-navy"
              aria-label={text.languageLabel}
            >
              <Languages size={18} />
              {text.language}
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-3 text-base font-semibold text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="outline" className="mt-2">
              <Link
                href={locale === "ar" ? "/ar/donate" : "/donate"}
                onClick={() => setOpen(false)}
              >
                {locale === "ar" ? "تبرع" : "Donate"}
              </Link>
            </Button>
            <Button asChild variant="navy" className="mt-2">
              <Link
                href={locale === "ar" ? "/ar/contact" : "/contact"}
                onClick={() => setOpen(false)}
              >
                {text.partnerCta}
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
