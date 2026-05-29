import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { donationBands, donationPriorities } from "@/lib/site";

type DonationSectionProps = {
  locale?: "en" | "ar";
  compact?: boolean;
};

const arPriorities = [
  {
    title: "جاهزية الاستجابة الطارئة",
    text: "دعم التقييم السريع، وإحالات الحماية، والتنسيق الميداني، وقدرة الاستجابة المسؤولة."
  },
  {
    title: "التعافي وسبل العيش",
    text: "مساعدة المجتمعات على استعادة الاستقرار عبر التعافي العملي والمهارات ومسارات سبل العيش المحلية."
  },
  {
    title: "البحث وبناء القدرات",
    text: "الاستثمار في بحوث DOORS والتدريب والتعلم السياساتي وتقوية المؤسسات المحلية."
  }
];

const arBands = [
  { amount: "$50", label: "مساهمة في الجاهزية الميدانية" },
  { amount: "$250", label: "دعم للتعافي المجتمعي" },
  { amount: "$1,000", label: "شريك أثر مؤسسي" }
];

export function DonationSection({ locale = "en", compact = false }: DonationSectionProps) {
  const isArabic = locale === "ar";
  const priorities = isArabic
    ? donationPriorities.map((priority, index) => ({
        ...priority,
        title: arPriorities[index].title,
        text: arPriorities[index].text
      }))
    : donationPriorities;
  const bands = isArabic ? arBands : donationBands;
  const donateHref = isArabic ? "/ar/donate" : "/donate";
  const contactHref = isArabic ? "/ar/contact" : "/contact";

  return (
    <section className={compact ? "bg-white py-16" : "bg-white py-24"} dir={isArabic ? "rtl" : "ltr"}>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={isArabic ? "الدعم والتبرع" : "Donate"}
              title={
                isArabic
                  ? "ساهم في تحويل الاستجابة إلى أثر طويل المدى."
                  : "Help turn response into long-term regional impact."
              }
              text={
                isArabic
                  ? "يدعم تبرعك جاهزية الاستجابة، والتعافي المجتمعي، والبحث والتدريب الذي يقوي المؤسسات المحلية."
                  : "Your contribution supports emergency readiness, community recovery, research, training, and the institutional systems that make impact last."
              }
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href={contactHref}>
                  {isArabic ? "طلب تفاصيل التبرع" : "Request donation details"}
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={donateHref}>{isArabic ? "استكشف مجالات الدعم" : "Explore giving areas"}</Link>
              </Button>
            </div>
            <div className="mt-8 rounded-xl border border-navy/10 bg-muted p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-orange" />
                <p className="text-sm leading-6 text-slateText">
                  {isArabic
                    ? "تتعامل أديف مع استفسارات الدعم عبر مسار مؤسسي واضح للتحقق، والمواءمة البرمجية، وإصدار تفاصيل التحويل أو الشراكة المناسبة."
                    : "ADIF handles donation inquiries through an institutional process for verification, program alignment, and appropriate transfer or partnership details."}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {bands.map((band) => (
                <Card key={band.label} className="p-5">
                  <p className="text-3xl font-black text-navy">{band.amount}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slateText">{band.label}</p>
                </Card>
              ))}
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {priorities.map((priority) => (
                <Card key={priority.title} className="h-full">
                  <priority.icon className="h-9 w-9 text-orange" />
                  <h3 className="mt-5 text-xl font-black leading-snug text-navy">
                    {priority.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slateText">{priority.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
