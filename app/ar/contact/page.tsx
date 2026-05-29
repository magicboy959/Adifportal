import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { arContent, copy } from "@/lib/i18n";

export default function ArabicContactPage() {
  const site = copy.ar.site;

  return (
    <>
      <PageHeader {...arContent.pages.contact} />
      <section className="py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            <Card>
              <MapPin className="h-8 w-8 text-orange" />
              <h2 className="mt-5 text-xl font-black text-navy">العنوان</h2>
              <p className="mt-3 leading-7 text-slateText">{site.address}</p>
            </Card>
            <Card>
              <Phone className="h-8 w-8 text-orange" />
              <h2 className="mt-5 text-xl font-black text-navy">الهاتف</h2>
              <p className="mt-3 leading-7 text-slateText">{site.phones.join(" / ")}</p>
            </Card>
            <Card>
              <Mail className="h-8 w-8 text-orange" />
              <h2 className="mt-5 text-xl font-black text-navy">البريد الإلكتروني</h2>
              <p className="mt-3 leading-7 text-slateText">{site.email}</p>
            </Card>
            <Card>
              <Globe2 className="h-8 w-8 text-orange" />
              <h2 className="mt-5 text-xl font-black text-navy">الموقع الإلكتروني</h2>
              <p className="mt-3 leading-7 text-slateText">www.adiforganization.org</p>
            </Card>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
