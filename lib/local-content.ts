import { prisma } from "@/lib/db";
import type { Locale } from "@/lib/i18n";
import type { MediaItem, Publication } from "@/types/content";
import { publications as englishPublications } from "@/lib/site";

const arabicPublications: Publication[] = [
  {
    title: "من الاستجابة إلى التحول: ملاحظات ممارسة إقليمية",
    type: "Policy Brief",
    date: "2026",
    topic: "تغيير الأنظمة",
    excerpt: "إطار موجز لمواءمة العمل الطارئ والتعافي والبحث والتنمية المؤسسية."
  },
  {
    title: "الوصول التشغيلي وحماية المجتمع في البيئات الهشة",
    type: "Research Paper",
    date: "2026",
    topic: "الحماية",
    excerpt: "إرشادات قائمة على الأدلة للفرق الميدانية العاملة عبر التفويضات الإنسانية والتنموية."
  },
  {
    title: "تدريب المؤسسات المحلية من أجل تعاف مستدام",
    type: "Report",
    date: "2025",
    topic: "بناء القدرات",
    excerpt: "دروس لتعزيز أنظمة القطاع العام والمجتمع المدني والمجتمعات بعد الأزمات الحادة."
  }
];

export const publicationTypeLabels = {
  "Policy Brief": "موجز سياسات",
  "Research Paper": "ورقة بحثية",
  Report: "تقرير"
} satisfies Record<Publication["type"], string>;

const mediaItems: Record<Locale, MediaItem[]> = {
  en: [
    {
      title: "ADIF expands regional training hub",
      slug: "regional-training-hub",
      type: "story",
      excerpt: "A new training hub supports local institutions and accelerates recovery pathways.",
      publishedAt: "2026-04-04",
      image: null
    },
    {
      title: "DOORS research series launches",
      slug: "doors-research-series",
      type: "story",
      excerpt: "A field-focused research series documents systems change across the region.",
      publishedAt: "2026-03-11",
      image: null
    },
    {
      title: "ADIF field update video: readiness in practice",
      slug: "field-update-readiness",
      type: "video",
      excerpt: "A short video on emergency readiness and community protection operations.",
      publishedAt: "2026-02-27",
      image: null
    }
  ],
  ar: [
    {
      title: "أديف يعزز مركز التدريب الإقليمي",
      slug: "regional-training-hub-ar",
      type: "story",
      excerpt: "يدعم مركز التدريب المحلي المؤسسات ويعزز مسارات التعافي.",
      publishedAt: "2026-04-04",
      image: null
    },
    {
      title: "سلسلة أبحاث DOORS تنطلق",
      slug: "doors-research-series-ar",
      type: "story",
      excerpt: "سلسلة بحث ميداني تستعرض تغيير الأنظمة في الإقليم.",
      publishedAt: "2026-03-11",
      image: null
    },
    {
      title: "فيديو تحديث ميداني لأديف: الجاهزية في الممارسة",
      slug: "field-update-readiness-ar",
      type: "video",
      excerpt: "فيديو قصير عن الجاهزية الطارئة وحماية المجتمع.",
      publishedAt: "2026-02-27",
      image: null
    }
  ]
};

function normalizePublicationDate<T extends { date: string }>(publication: T): T {
  return {
    ...publication,
    date:
      publication.date && publication.date !== "Undated"
        ? publication.date.slice(0, 4)
        : publication.date || "Undated"
  };
}

function normalizeMediaItem<
T extends {
slug?: string | null;
excerpt?: string | null;
publishedAt?: string | null;
image?: string | null;
}
>(
item: T
): Omit<T, "slug" | "excerpt" | "publishedAt" | "image"> & {
slug?: string;
excerpt?: string;
publishedAt?: string;
image?: { asset?: { _ref: string } } | null;
} {
return {
...item,
slug: item.slug ?? undefined,
excerpt: item.excerpt ?? undefined,
publishedAt: item.publishedAt ?? undefined,
image: item.image && typeof item.image === "string" ? null : item.image
} as Omit<T, "slug" | "excerpt" | "publishedAt" | "image"> & {
slug?: string;
excerpt?: string;
publishedAt?: string;
image?: { asset?: { _ref: string } } | null;
};
}

export async function getPublications(locale: Locale): Promise<Publication[]> {
  // If no managed MySQL connection info is available, skip DB queries and
  // return the local bundled content. This prevents build-time Prisma
  // validation errors on platforms that inject DB credentials only at runtime.
  const hasDbEnv = !!(process.env.DB_HOST && process.env.DB_USER && process.env.DB_NAME) ||
    !!(process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('mysql://'));

  if (!hasDbEnv) {
    return locale === "ar" ? arabicPublications : englishPublications;
  }

  try {
    const items = await prisma.publication.findMany({
      where: { language: locale },
      orderBy: { createdAt: "desc" }
    });

    if (items.length) {
      return items.map((item) => normalizePublicationDate(item as Publication));
    }
  } catch {
    // Fall back to local data on DB errors.
  }

  return locale === "ar" ? arabicPublications : englishPublications;
}

export async function getPublicationPreview(locale: Locale, limit = 3): Promise<Publication[]> {
  const items = await getPublications(locale);
  return items.slice(0, limit);
}

export async function getMediaItems(locale: Locale): Promise<MediaItem[]> {
  const hasDbEnv = !!(process.env.DB_HOST && process.env.DB_USER && process.env.DB_NAME) ||
    !!(process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('mysql://'));

  if (!hasDbEnv) {
    return mediaItems[locale] ?? mediaItems.en;
  }

  try {
    const items = await prisma.mediaItem.findMany({
      where: { language: locale },
      orderBy: { createdAt: "desc" }
    });

    if (items.length) {
      return items.map((item) => normalizeMediaItem(item)) as MediaItem[];
    }
  } catch {
    // Fall back to local data on DB errors.
  }

  return mediaItems[locale] ?? mediaItems.en;
}
