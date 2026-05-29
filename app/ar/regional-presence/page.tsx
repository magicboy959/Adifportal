import { PageHeader } from "@/components/page-header";
import { RegionalMap } from "@/components/sections/regional-map";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { arContent } from "@/lib/i18n";

const locations = [
  { city: "نيروبي", role: "مركز استراتيجي للمانحين", detail: "إشراك الشركاء والتنسيق الإقليمي والدبلوماسية المؤسسية.", top: "29%", left: "55%" },
  { city: "كمبالا", role: "مركز العمليات", detail: "إدارة البرامج والإدارة والتدريب ودعم التنفيذ.", top: "45%", left: "50%" },
  { city: "نيالا", role: "نواة التنفيذ الميداني", detail: "القرب من المجتمعات وممارسة الحماية وحلقات التعلم الميداني.", top: "30%", left: "36%" }
];

export default function ArabicRegionalPresencePage() {
  return (
    <>
      <PageHeader {...arContent.pages.regional} />
      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              title="نموذج إقليمي مبني على القرب والموثوقية."
              text="تربط المنصة بين مساحات الشراكة المؤسسية وأنظمة التشغيل والتعلم الميداني."
            />
            <div className="mt-8 grid gap-4">
              {locations.map((location) => (
                <Card key={location.city} className="p-5">
                  <h2 className="text-xl font-black text-navy">{location.city}</h2>
                  <p className="mt-1 text-sm font-bold text-orange">{location.role}</p>
                  <p className="mt-3 text-sm leading-6 text-slateText">{location.detail}</p>
                </Card>
              ))}
            </div>
          </div>
          <RegionalMap locations={locations} />
        </div>
      </section>
    </>
  );
}
