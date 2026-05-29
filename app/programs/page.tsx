import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { programs } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Programs",
  "Explore ADIF programs across emergency response, recovery, livelihoods, protection, research, policy, and institutional transformation.",
  "/programs"
);

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Integrated programs for complex regional challenges."
        description="ADIF programs are structured to connect immediate field delivery with recovery systems, policy learning, and institutional capacity."
      />
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="Program portfolio"
            text="A modular portfolio that can be deployed independently or integrated across the Respond → Recover → Transform framework."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.title}>
                <program.icon className="h-9 w-9 text-orange" />
                <h2 className="mt-5 text-2xl font-black text-navy">{program.title}</h2>
                <p className="mt-4 leading-7 text-slateText">
                  Designed for accountable implementation, community participation, field learning, partner coordination, and measurable institutional value.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
