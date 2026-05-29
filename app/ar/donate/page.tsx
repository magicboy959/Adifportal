import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { DonationSection } from "@/components/sections/donation-section";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { arContent, copy } from "@/lib/i18n";

export default function ArabicDonatePage() {
  const site = copy.ar.site;

  return (
    <>
      <PageHeader {...arContent.pages.donate} />
      <DonationSection locale="ar" compact />
      <section className="bg-muted py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="مسار التبرع"
            title="مسار مؤسسي واضح للدعم."
            text="لحماية المانحين والمجتمعات، تؤكد أديف مواءمة البرنامج ومتطلبات الامتثال وتفاصيل التحويل قبل استقبال الدعم."
          />
          <div className="grid gap-4">
            {[
              ["1. أرسل استفسارا", "شارك مجال الدعم، والجهة، والموقع، والبرنامج المفضل."],
              ["2. مواءمة المساهمة", "تؤكد أديف نافذة البرنامج المناسبة، وتوقعات التقارير، واحتياجات الامتثال."],
              ["3. استلام تفاصيل التبرع", "يوفر الفريق تعليمات التحويل أو الشراكة المعتمدة عبر القنوات الرسمية."]
            ].map(([title, text]) => (
              <Card key={title} className="p-5">
                <h2 className="text-xl font-black text-navy">{title}</h2>
                <p className="mt-3 leading-7 text-slateText">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container rounded-xl bg-navy p-8 text-white sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange">
                التواصل الرسمي
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                اطلب تعليمات التبرع المعتمدة من أديف.
              </h2>
              <div className="mt-6 grid gap-3 text-sm text-white/72">
                <p className="flex items-center gap-3">
                  <Mail size={18} className="text-orange" />
                  {site.email}
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={18} className="text-orange" />
                  {site.phones.join(" / ")}
                </p>
              </div>
            </div>
            <Button asChild size="lg">
              <Link href="/ar/contact">تواصل مع فريق التبرعات</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
