import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { arContent } from "@/lib/i18n";
import { framework, pillars } from "@/lib/site";

export default function ArabicAboutPage() {
  const page = arContent.pages.about;

  return (
    <>
      <PageHeader {...page} />
      <section className="py-24">
        <div className="container grid gap-5 lg:grid-cols-2">
          {[
            ["الرؤية", "مجتمعات آمنة وعادلة وقادرة على الصمود وبناء مستقبل مستدام للجميع."],
            ["الرسالة", "دمج المساعدة الإنسانية والسلام وحقوق الإنسان والتنمية والبحث والتدريب وبناء القدرات والدعم المؤسسي عبر السياقات الإقليمية الهشة."],
            ["الفلسفة", "تفتح أديف أبوابا عملية للفرص عبر ربط العمل الميداني بإنتاج المعرفة والمشاركة المجتمعية والتحول المؤسسي."],
            ["الحوكمة", "صممت أديف لشراكات مسؤولة وإدارة برامج شفافة وموثوقية موجهة للمانحين وروابط قوية بين التنفيذ والبحث وقياس الأثر."]
          ].map(([title, text]) => (
            <Card key={title}>
              <h2 className="text-2xl font-black text-navy">{title}</h2>
              <p className="mt-4 leading-7 text-slateText">{text}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-muted py-24">
        <div className="container">
          <SectionHeading
            eyebrow="النموذج المؤسسي"
            title="منصة واحدة بثلاث وظائف يعزز بعضها بعضا."
            text="تنفذ CHANCE البرامج الإنسانية والتنموية، وتنتج DOORS المعرفة وتبني القدرات، وتدمج ADIF كلا المسارين في أثر إقليمي طويل المدى."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Card key={pillar.title}>
                <pillar.icon className="h-9 w-9 text-orange" />
                <h3 className="mt-5 text-2xl font-black text-navy">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-slateText">
                  {["ذراع التنفيذ الإنساني والتنموي", "معهد البحث والدراسات والتدريب", "منصة تكامل للأثر المؤسسي طويل المدى"][index]}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container">
          <SectionHeading eyebrow="المنهج" title="الاستجابة والتعافي والتحول كدورة مؤسسية واحدة." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {framework.map((item, index) => (
              <Card key={item.title}>
                <item.icon className="h-9 w-9 text-orange" />
                <h3 className="mt-5 text-2xl font-black text-navy">{["الاستجابة", "التعافي", "التحول"][index]}</h3>
                <p className="mt-3 leading-7 text-slateText">
                  {[
                    "عمل إنساني سريع وتنسيق ميداني للمجتمعات تحت الضغط.",
                    "مسارات تعاف تعيد الخدمات وسبل العيش والثقة المؤسسية.",
                    "بحث وسياسات وتغيير نظم يحول الاستجابة إلى أثر مستدام."
                  ][index]}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
