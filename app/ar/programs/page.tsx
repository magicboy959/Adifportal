import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { arContent } from "@/lib/i18n";
import { programs } from "@/lib/site";

const labels = ["الاستجابة الطارئة", "التعافي وسبل العيش", "أنظمة الحماية", "السلام والحقوق والعدالة الانتقالية", "السياسات والبحث", "التحول المؤسسي", "التدريب والقدرات"];

export default function ArabicProgramsPage() {
  return (
    <>
      <PageHeader {...arContent.pages.programs} />
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="محفظة البرامج"
            text="محفظة مرنة يمكن تنفيذها بشكل مستقل أو دمجها عبر إطار الاستجابة ← التعافي ← التحول."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Card key={program.title}>
                <program.icon className="h-9 w-9 text-orange" />
                <h2 className="mt-5 text-2xl font-black text-navy">{labels[index]}</h2>
                <p className="mt-4 leading-7 text-slateText">
                  مصممة للتنفيذ المسؤول، والتعلم الميداني، وتنسيق الشركاء، وقيمة مؤسسية قابلة للقياس.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
