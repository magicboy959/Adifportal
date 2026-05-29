import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { arContent } from "@/lib/i18n";

const media = [
  ["الأخبار", "تحديثات مؤسسية وإعلانات برامج ومحطات شراكة وإحاطات إقليمية."],
  ["المعرض", "توثيق بصري ميداني وتدريبي وشراكاتي ومجتمعي."],
  ["الفيديوهات", "شروحات قصيرة وتسجيلات فعاليات ومحتوى تدريبي وقصص ميدانية."],
  ["القصص", "سرد إنساني من البرامج والشركاء والمجتمعات وعمليات التغيير المؤسسي."]
];

export default function ArabicMediaPage() {
  return (
    <>
      <PageHeader {...arContent.pages.media} />
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="مركز اتصالات مؤسسي"
            text="مصمم للنشر التحريري وموارد الإعلام ومسارات القصص المحلية المستقبلية."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {media.map(([title, text]) => (
              <Card key={title}>
                <h2 className="text-2xl font-black text-navy">{title}</h2>
                <p className="mt-4 leading-7 text-slateText">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
