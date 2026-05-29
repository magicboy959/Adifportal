import { site } from "@/lib/site";

export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

export function localizedPath(pathname: string, locale: Locale) {
  const cleanPath = pathname === "/" ? "" : pathname;
  const withoutLocale = cleanPath.replace(/^\/ar(?=\/|$)/, "") || "/";

  if (locale === "ar") {
    return withoutLocale === "/" ? "/ar" : `/ar${withoutLocale}`;
  }

  return withoutLocale;
}

export const navByLocale = {
  en: [
    { label: "About", href: "/about" },
    { label: "CHANCE & DOORS", href: "/chance-doors" },
    { label: "Programs", href: "/programs" },
    { label: "Publications", href: "/publications" },
    { label: "Regional Presence", href: "/regional-presence" },
    { label: "Media", href: "/media" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/contact" }
  ],
  ar: [
    { label: "عن أديف", href: "/ar/about" },
    { label: "CHANCE و DOORS", href: "/ar/chance-doors" },
    { label: "البرامج", href: "/ar/programs" },
    { label: "المنشورات", href: "/ar/publications" },
    { label: "الحضور الإقليمي", href: "/ar/regional-presence" },
    { label: "المركز الإعلامي", href: "/ar/media" },
    { label: "تبرع", href: "/ar/donate" },
    { label: "اتصل بنا", href: "/ar/contact" }
  ]
};

export const copy = {
  en: {
    site,
    language: "العربية",
    languageLabel: "Switch to Arabic",
    partnerCta: "Partner with ADIF",
    footerPlatform: "Platform",
    footerContact: "Contact",
    footerDescription:
      "ADIF connects field operations, policy intelligence, and institutional transformation across the region.",
    rights: "All rights reserved.",
    framework: "Respond → Recover → Transform",
    contactForm: {
      name: "Name",
      organization: "Organization",
      email: "Email",
      interest: "Area of interest",
      message: "Message",
      submit: "Send inquiry",
      options: ["Partnership", "Donation inquiry", "Programs", "Research and training", "Media inquiry"]
    }
  },
  ar: {
    site: {
      ...site,
      name: "منظمة أديف",
      legalName: "العمل من أجل التكامل والتنمية والأثر",
      description:
        "منصة إقليمية متكاملة تجمع العمل الإنساني، وأنظمة التنمية، والبحث، والسياسات، والتحول المؤسسي.",
      address: "أوغندا - كمبالا - أروى بارك بلازا - C3-490"
    },
    language: "English",
    languageLabel: "Switch to English",
    partnerCta: "الشراكة مع أديف",
    footerPlatform: "المنصة",
    footerContact: "التواصل",
    footerDescription:
      "تربط أديف العمليات الميدانية بالمعرفة السياساتية والتحول المؤسسي في الإقليم.",
    rights: "جميع الحقوق محفوظة.",
    framework: "الاستجابة ← التعافي ← التحول",
    contactForm: {
      name: "الاسم",
      organization: "الجهة",
      email: "البريد الإلكتروني",
      interest: "مجال الاهتمام",
      message: "الرسالة",
      submit: "إرسال الاستفسار",
      options: ["الشراكة", "استفسار تبرع", "البرامج", "البحث والتدريب", "استفسار إعلامي"]
    }
  }
};

export const arContent = {
  home: {
    heroBadge: "منصة إقليمية للأثر الإنساني والتحول المؤسسي",
    heroTitle: "العمل من أجل التكامل والتنمية والأثر",
    heroText:
      "تدمج أديف العمل الإنساني، وأنظمة التنمية، والبحث، والسياسات، والتحول المؤسسي عبر السياقات الإقليمية الأفريقية.",
    heroPrimary: "استكشف أديف",
    heroSecondary: "عرض المنشورات",
    missionTitle: "منصة متكاملة للأثر الإقليمي.",
    missionText:
      "تربط أديف بين سرعة العمل الإنساني وأفق التنمية والبحث والسياسات والتحول المؤسسي طويل المدى.",
    missionStatement:
      "نعمل في المناطق المتأثرة بالنزاعات وصعبة الوصول، حيث تعمل أديف كجسر يصل إلى المجتمعات والواقع الميداني، بما في ذلك مناطق مثل نيالا.",
    checks: ["ممارسة تتمحور حول الإنسان", "حوكمة جاهزة للمانحين", "معرفة ميدانية إقليمية", "تعلم يربط السياسات بالتطبيق"],
    frameworkTitle: "الاستجابة ← التعافي ← التحول",
    frameworkText:
      "نموذج منضبط لتحويل الاستجابة للأزمات إلى مسارات تعافٍ وتغيير مؤسسي طويل المدى.",
    ecosystemTitle: "تعمل CHANCE و DOORS كبنية أثر واحدة.",
    ecosystemText:
      "صممت أديف التنفيذ والبحث والتدريب وتطوير السياسات وتعزيز المؤسسات بحيث يدعم كل عنصر الآخر.",
    regionalTitle: "حضور ميداني واتصال إقليمي.",
    regionalText:
      "يربط نموذج أديف بين إشراك المانحين، وإدارة العمليات، والتنفيذ الميداني عبر مراكز استراتيجية.",
    regionalButton: "استكشف النموذج الإقليمي",
    credibilityTitle: "مصممة للمانحين والشركاء وأنظمة المصلحة العامة.",
    credibilityText:
      "تجمع المنصة بين الحوكمة المنضبطة والقرب العملي من المجتمعات والمؤسسات.",
    partnersTitle: "مصممة لتعاون مؤسسي جاد.",
    partners: ["وكالات مانحة", "مؤسسات عامة", "مجتمع مدني", "شركاء بحثيون"],
    publicationsTitle: "بحث ومعرفة سياساتية.",
    publicationsText:
      "منشورات مختارة من أديف و DOORS للشركاء والممارسين والمؤسسات الإقليمية.",
    allPublications: "كل المنشورات",
    donationEyebrow: "الدعم والتبرع",
    donationTitle: "ساهم في تحويل الاستجابة إلى أثر طويل المدى.",
    donationText:
      "يدعم تبرعك جاهزية الاستجابة، والتعافي المجتمعي، والبحث والتدريب الذي يقوي المؤسسات المحلية.",
    donationButton: "طلب تفاصيل التبرع",
    donationSecondary: "استكشف مجالات الدعم",
    ctaTitle: "اعمل مع أديف من أجل أثر إقليمي متكامل.",
    ctaButton: "تواصل مع أديف"
  },
  pages: {
    about: {
      eyebrow: "عن أديف",
      title: "مؤسسة إقليمية مصممة للعمل المتكامل.",
      description:
        "تجمع أديف بين التنفيذ، والأدلة، والسياسات، وتعزيز المؤسسات لتحقيق أثر مستدام يخدم المصلحة العامة."
    },
    chance: {
      eyebrow: "CHANCE",
      title: "مجتمع للأمل والتقدم والمشاركة المدنية الجديدة.",
      description:
        "CHANCE هو ذراع أديف التنفيذي للسلام والعدالة والاستجابة الإنسانية والتعافي وإعادة الإعمار والتنمية المستدامة، مع اعتبار السودان أولوية استراتيجية."
    },
    doors: {
      eyebrow: "DOORS",
      title: "مركز للمعرفة والقيادة والتحول المؤسسي.",
      description:
        "تعمل DOORS عند تقاطع التدريب وبناء القدرات والبحث والدراسات والاستشارات والدفاع عن حقوق الإنسان والتعليم والثقافة وبناء السلام."
    },
    programs: {
      eyebrow: "البرامج",
      title: "برامج متكاملة للتحديات الإقليمية المعقدة.",
      description:
        "تربط برامج أديف بين التنفيذ الميداني الفوري وأنظمة التعافي والتعلم السياساتي والقدرات المؤسسية."
    },
    publications: {
      eyebrow: "المنشورات",
      title: "أوراق بحثية وتقارير وموجزات سياسات.",
      description:
        "مكتبة منشورات جاهزة للربط بنظام إدارة المحتوى، موجهة للمانحين والممارسين وجمهور السياسات."
    },
    regional: {
      eyebrow: "الحضور الإقليمي",
      title: "مراكز استراتيجية متصلة بالتنفيذ الميداني.",
      description:
        "تربط أديف إشراك المانحين وإدارة العمليات والتنفيذ القريب من المجتمعات عبر نيروبي وكمبالا ونيالا."
    },
    media: {
      eyebrow: "المركز الإعلامي",
      title: "الأخبار والمعرض والفيديوهات والقصص.",
      description:
        "مركز اتصالات جاهز لإدارة المحتوى يعرض عمل أديف الإقليمي وصوتها المؤسسي وأثرها الإنساني."
    },
    donate: {
      eyebrow: "الدعم والتبرع",
      title: "ادعم منصة إقليمية تربط العمل الإنساني بالتنمية والتحول.",
      description:
        "تستقبل أديف استفسارات الدعم المؤسسي والفردي للبرامج الإنسانية، والتعافي، والبحث، وبناء القدرات."
    },
    contact: {
      eyebrow: "اتصل بنا",
      title: "تواصل مع منظمة أديف.",
      description:
        "للشراكات والبرامج والبحث والإعلام والتعاون المؤسسي، تواصل مع فريق أديف."
    }
  }
};
