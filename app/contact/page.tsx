import { Mail, MapPin, Phone, Globe2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact",
  "Contact ADIF Organization in Kampala, Uganda.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Connect with ADIF Organization."
        description="For partnerships, programs, research, media, and institutional collaboration, contact the ADIF team."
      />
      <section className="py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            <Card>
              <MapPin className="h-8 w-8 text-orange" />
              <h2 className="mt-5 text-xl font-black text-navy">Address</h2>
              <p className="mt-3 leading-7 text-slateText">{site.address}</p>
            </Card>
            <Card>
              <Phone className="h-8 w-8 text-orange" />
              <h2 className="mt-5 text-xl font-black text-navy">Phone</h2>
              <p className="mt-3 leading-7 text-slateText">{site.phones.join(" / ")}</p>
            </Card>
            <Card>
              <Mail className="h-8 w-8 text-orange" />
              <h2 className="mt-5 text-xl font-black text-navy">Email</h2>
              <p className="mt-3 leading-7 text-slateText">{site.email}</p>
            </Card>
            <Card>
              <Globe2 className="h-8 w-8 text-orange" />
              <h2 className="mt-5 text-xl font-black text-navy">Website</h2>
              <p className="mt-3 leading-7 text-slateText">www.adiforganization.org</p>
            </Card>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
