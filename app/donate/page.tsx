import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { DonationSection } from "@/components/sections/donation-section";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "Donate",
  "Support ADIF Organization's humanitarian response, recovery, research, training, and institutional transformation work.",
  "/donate"
);

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Support integrated humanitarian and development impact."
        description="ADIF welcomes donor and partner contributions aligned with emergency response, recovery, research, training, and long-term institutional transformation."
      />
      <DonationSection compact />
      <section className="bg-muted py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Donation Process"
            title="A clear institutional route for giving."
            text="To protect donors and communities, ADIF confirms program alignment, compliance requirements, and transfer details before receiving support."
          />
          <div className="grid gap-4">
            {[
              ["1. Send an inquiry", "Share your giving interest, organization, location, and preferred program area."],
              ["2. Align the contribution", "ADIF confirms the appropriate program window, reporting expectations, and compliance needs."],
              ["3. Receive donation details", "The team provides verified transfer or partnership instructions through official channels."]
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
                Official Contact
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Request verified donation instructions from ADIF.
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
              <Link href="/contact">Contact donation team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
