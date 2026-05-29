import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const englishPublications = [
  {
    title: "From Response to Transformation: Regional Practice Notes",
    type: "Policy Brief",
    date: "2026",
    topic: "Systems change",
    excerpt:
      "A concise framework for aligning emergency action, recovery, research, and institutional development."
  },
  {
    title: "Operational Access and Community Protection in Fragile Settings",
    type: "Research Paper",
    date: "2026",
    topic: "Protection",
    excerpt:
      "Evidence-informed guidance for field teams working across humanitarian and development mandates."
  },
  {
    title: "Training Local Institutions for Durable Recovery",
    type: "Report",
    date: "2025",
    topic: "Capacity building",
    excerpt:
      "Lessons for strengthening public, civil society, and community systems after acute crisis."
  }
];

const arabicPublications = [
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

const mediaItems = {
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

async function main() {
  await prisma.publication.createMany({
    data: [...englishPublications.map((publication) => ({ ...publication, language: "en" })), ...arabicPublications.map((publication) => ({ ...publication, language: "ar" }))]
  });

  await prisma.mediaItem.createMany({
    data: [...mediaItems.en.map((item) => ({ ...item, language: "en" })), ...mediaItems.ar.map((item) => ({ ...item, language: "ar" }))]
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
