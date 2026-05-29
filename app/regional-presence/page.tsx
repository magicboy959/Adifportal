import { PageHeader } from "@/components/page-header";
import { RegionalMap } from "@/components/sections/regional-map";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { locations } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Regional Presence",
  "ADIF regional presence across Nairobi, Kampala, and Nyala.",
  "/regional-presence"
);

export default function RegionalPresencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Regional Presence"
        title="Strategic hubs connected to field implementation."
        description="ADIF links donor engagement, operations management, and community-proximate implementation across Nairobi, Kampala, and Nyala."
      />
      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              title="A regional model built for proximity and credibility."
              text="The platform connects institutional partnership spaces with operational systems and field learning."
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
          <RegionalMap />
        </div>
      </section>
    </>
  );
}
