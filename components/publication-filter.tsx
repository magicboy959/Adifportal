"use client";

import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { getLocaleFromPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Publication } from "@/types/content";

const filters = ["All", "Research Paper", "Report", "Policy Brief"] as const;
const filterLabels = {
  en: {
    All: "All",
    "Research Paper": "Research Paper",
    Report: "Report",
    "Policy Brief": "Policy Brief",
    search: "Search research, reports, and briefs"
  },
  ar: {
    All: "الكل",
    "Research Paper": "ورقة بحثية",
    Report: "تقرير",
    "Policy Brief": "موجز سياسات",
    search: "ابحث في الأبحاث والتقارير والموجزات"
  }
};

export function PublicationFilter({
  publications
}: {
  publications: Publication[];
}) {
  const locale = getLocaleFromPath(usePathname());
  const labels = filterLabels[locale];
  const items = publications;
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const results = useMemo(() => {
    return items.filter((publication) => {
      const matchesType = filter === "All" || publication.type === filter;
      const haystack = `${publication.title} ${publication.excerpt} ${publication.topic}`.toLowerCase();
      return matchesType && haystack.includes(query.toLowerCase());
    });
  }, [filter, items, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-xl border border-navy/10 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block flex-1">
          <span className="sr-only">Search publications</span>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slateText" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.search}
            className="focus-ring h-12 w-full rounded-md border border-navy/10 bg-muted pl-11 pr-4 text-sm text-navy"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "focus-ring rounded-md border px-4 py-2 text-sm font-semibold transition",
                filter === item
                  ? "border-navy bg-navy text-white"
                  : "border-navy/10 bg-white text-navy hover:bg-muted"
              )}
            >
              {labels[item]}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {results.map((publication) => (
          <Card key={publication.title}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
              {labels[publication.type]} · {publication.date}
            </p>
            <h2 className="mt-4 text-xl font-black leading-snug text-navy">
              {publication.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-slateText">{publication.excerpt}</p>
            <p className="mt-6 text-sm font-bold text-navy">{publication.topic}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
