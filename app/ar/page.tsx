import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { DonationSection } from "@/components/sections/donation-section";
import { HeroContent } from "@/components/sections/hero";
import { RegionalMap } from "@/components/sections/regional-map";
import { StatsStrip } from "@/components/sections/stats-strip";
import { HoverLift, Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { arContent } from "@/lib/i18n";
import { credibility, framework, pillars } from "@/lib/site";
import { getPublicationPreview, publicationTypeLabels } from "@/lib/local-content";

const arStats = [
  { value: 3, suffix: "", label: "مراكز تشغيل إقليمية" },
  { value: 5, suffix: "+", label: "مجالات ممارسة متكاملة" },
  { value: 24, suffix: "/7", label: "نموذج جاهزية للاستجابة" },
  { value: 1, suffix: "", label: "منصة أثر موحدة" }
];

const arLocations = [
  {
    city: "نيروبي",
    role: "مركز استراتيجي للمانحين",
    detail: "إشراك الشركاء، والتنسيق الإقليمي، والدبلوماسية المؤسسية.",
    top: "29%",
    left: "55%"
  },
  {
    city: "كمبالا",
    role: "مركز العمليات",
    detail: "إدارة البرامج، والإدارة، والتدريب، ودعم التنفيذ.",
    top: "45%",
    left: "50%"
  },
  {
    city: "نيالا",
    role: "نواة التنفيذ الميداني",
    detail: "القرب من المجتمعات، وممارسة الحماية، وحلقات التعلم الميداني.",
    top: "30%",
    left: "36%"
  }
];

export default async function ArabicHomePage() {
  const home = arContent.home;
  const publications = await getPublicationPreview("ar");

  return (
    <>
      <HeroContent
        dir="rtl"
        content={{
          badge: home.heroBadge,
          title: home.heroTitle,
          text: home.heroText,
          primary: home.heroPrimary,
          secondary: home.heroSecondary,
          donation: home.donationButton,
          primaryHref: "/ar/about",
          secondaryHref: "/ar/publications",
          donationHref: "/ar/donate"
        }}
      />
      <StatsStrip stats={arStats} dir="rtl" />

      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="المهمة" title={home.missionTitle} text={home.missionText} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-navy/10 bg-muted p-8">
              <p className="text-2xl font-black leading-snug text-navy sm:text-3xl">
                {home.missionStatement}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {home.checks.map((item) => (
                  <p key={item} className="flex items-center gap-3 text-sm font-semibold text-navy">
                    <CheckCircle2 size={18} className="text-orange" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="الإطار الأساسي"
              title={home.frameworkTitle}
              text={home.frameworkText}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {framework.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card className="h-full">
                  <item.icon className="h-9 w-9 text-orange" />
                  <h3 className="mt-6 text-2xl font-black text-navy">{["الاستجابة", "التعافي", "التحول"][index]}</h3>
                  <p className="mt-4 leading-7 text-slateText">
                    {[
                      "عمل إنساني سريع وحماية وتنسيق ميداني للمجتمعات التي تواجه ضغوطا حادة.",
                      "مسارات تعاف تعيد الخدمات وسبل العيش والقدرات المحلية والثقة المؤسسية.",
                      "بحث وسياسات وتغيير في الأنظمة يحول الاستجابة للأزمات إلى أثر إقليمي مستدام."
                    ][index]}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="النظام المؤسسي"
              title={home.ecosystemTitle}
              text={home.ecosystemText}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <HoverLift key={pillar.title}>
                <Link href={["/ar/chance-doors#chance", "/ar/chance-doors#doors", "/ar/about"][index]} className="block h-full">
                  <Card className="h-full">
                    <div className="flex items-start justify-between gap-4">
                      <pillar.icon className="h-10 w-10 text-orange" />
                      <ArrowRight className="text-navy/30" size={22} />
                    </div>
                    <h3 className="mt-7 text-3xl font-black text-navy">{pillar.title}</h3>
                    <p className="mt-3 leading-7 text-slateText">
                      {[
                        "ذراع التنفيذ الإنساني والتنموي",
                        "معهد البحث والدراسات والتدريب",
                        "منصة تكامل للأثر المؤسسي طويل المدى"
                      ][index]}
                    </p>
                  </Card>
                </Link>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="الحضور الإقليمي"
              title={home.regionalTitle}
              text={home.regionalText}
              tone="dark"
            />
            <div className="mt-8">
              <Button asChild>
                <Link href="/ar/regional-presence">{home.regionalButton}</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <RegionalMap locations={arLocations} />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="الموثوقية المؤسسية"
              title={home.credibilityTitle}
              text={home.credibilityText}
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {credibility.map((item, index) => (
              <Card key={item.title} className="p-5">
                <item.icon className="h-8 w-8 text-orange" />
                <h3 className="mt-5 text-base font-black leading-snug text-navy">
                  {["حوكمة موجهة للمانحين", "برمجة قائمة على الأدلة", "معرفة ميدانية إقليمية", "تنفيذ يتمحور حول المجتمع", "وصول تشغيلي"][index]}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange">الشركاء</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-navy">{home.partnersTitle}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {home.partners.map((partner) => (
              <div key={partner} className="rounded-md border border-navy/10 bg-muted px-4 py-5 text-center text-sm font-black text-navy">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonationSection locale="ar" compact />

      <section className="bg-muted py-24">
        <div className="container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHeading eyebrow="المنشورات" title={home.publicationsTitle} text={home.publicationsText} />
            </Reveal>
            <Button asChild variant="outline">
              <Link href="/ar/publications">{home.allPublications}</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {publications.map((publication) => (
              <Card key={publication.title}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
                  {publicationTypeLabels[publication.type]} · {publication.date}
                </p>
                <h3 className="mt-4 text-xl font-black leading-snug text-navy">
                  {publication.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slateText">
                  {publication.excerpt}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container rounded-xl bg-navy p-8 text-white sm:p-12 lg:p-16">
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange">الشراكة</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                {home.ctaTitle}
              </h2>
            </div>
            <Button asChild size="lg">
              <Link href="/ar/contact">{home.ctaButton}</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
