import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { framework, pillars } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About",
  "Learn about ADIF Organization's vision, mission, philosophy, governance, and integrated organizational model.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About ADIF"
        title="A regional institution designed for integrated action."
        description="ADIF brings together delivery, evidence, policy, and institutional strengthening to generate durable public-interest impact."
      />
      <section className="py-24">
        <div className="container grid gap-5 lg:grid-cols-2">
          {[
            ["Vision", "Safe, just, and resilient communities capable of building a sustainable future for all."],
            ["Mission", "To integrate humanitarian assistance, peace, human rights, development, research, training, capacity building, and institutional support across fragile regional contexts."],
            ["Philosophy", "ADIF opens practical doors to opportunity by linking field action, knowledge production, community participation, and institutional transformation."],
            ["Governance", "ADIF is structured for accountable partnerships, transparent program management, donor-facing credibility, and strong links between implementation, research, and impact measurement."]
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
            eyebrow="Organizational Model"
            title="One platform, three mutually reinforcing functions."
            text="CHANCE implements humanitarian and development programs, DOORS produces knowledge and builds capacity, and ADIF integrates both into long-term regional impact."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title}>
                <pillar.icon className="h-9 w-9 text-orange" />
                <h3 className="mt-5 text-2xl font-black text-navy">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-slateText">{pillar.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Method"
            title="Respond, recover, and transform as one institutional cycle."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {framework.map((item) => (
              <Card key={item.title}>
                <item.icon className="h-9 w-9 text-orange" />
                <h3 className="mt-5 text-2xl font-black text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-slateText">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
