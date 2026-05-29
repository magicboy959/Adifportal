import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "CHANCE & DOORS",
  "CHANCE and DOORS are ADIF's integrated implementation, research, training, and institutional transformation arms.",
  "/chance-doors"
);

const chanceAreas = [
  ["Humanitarian Operations", "Coordinated field delivery for communities affected by disaster, conflict, displacement, fragility, and service disruption."],
  ["Peace and Transitional Justice", "Support for peacebuilding, good governance, reconciliation, safe communities, and rights-based recovery after conflict."],
  ["Women and Youth Leadership", "Programs that expand access to education, leadership, labor markets, decision-making, and peacebuilding roles."],
  ["Recovery and Reconstruction", "Rapid-impact and medium-term projects in shelter, water, protection, reintegration, and community stability."],
  ["Livelihoods and Food Security", "Community-based economic interventions, agriculture, food security, skills, and local market recovery."],
  ["Climate and Environmental Governance", "Community adaptation, natural resource protection, environmental conservation, and climate-responsive local practice."],
  ["Technology and Innovation", "Digital and innovative solutions that improve access to education, healthcare, information, and program effectiveness."],
  ["Protection, Education, and Human Rights", "Protection systems for children, women, youth, displaced people, and communities affected by violence."]
];

const chanceGroups = [
  "Women and girls",
  "Youth",
  "Children in emergencies and displacement",
  "Persons with disabilities",
  "Elderly people",
  "Rural and marginalized communities",
  "Refugees, IDPs, and returnees",
  "Victims of conflict and gender-based violence"
];

const chanceOffices = [
  "Protection, Education, and Human Rights Office",
  "Health and Nutrition Office",
  "Food Security Office",
  "Emergency and Humanitarian Response Office",
  "Recovery and Reconstruction Office",
  "Development and Sustainable Development Office"
];

const doorsStructure = [
  ["The Compass", "Strategic Planning Office responsible for direction, policy frameworks, coordination, and strategic alignment."],
  ["Knowledge Hub", "Studies and Research Office producing evidence-based contextual studies, analysis, recommendations, and intellectual resources."],
  ["Executive Arm", "Capacity Building Office that designs and delivers training, curricula, manuals, workshops, and practical programs."],
  ["Quality and Impact Unit", "Monitoring and Evaluation Office ensuring program quality, accountability, indicators, learning, and continuous improvement."]
];

const doorsPrograms = [
  "Young Leaders Development Program",
  "Training of Trainers (TOT)",
  "Digital Literacy for Entrepreneurs",
  "Women’s Leadership Development Program",
  "Community Project Management Program",
  "Community Negotiation and Dialogue Platform",
  "Peace from Within Initiative",
  "DOORS Scholarship Platform",
  "Culture, arts, heritage, and child creativity programs"
];

export default function ChanceDoorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="CHANCE & DOORS"
        title="Implementation and knowledge, working as one impact system."
        description="CHANCE delivers humanitarian, peace, recovery, and development programs. DOORS produces knowledge, builds capacity, supports institutions, and measures impact."
      />

      <section id="chance" className="scroll-mt-24 py-24">
        <div className="container">
          <SectionHeading
            eyebrow="CHANCE"
            title="Community for Hope, Advancement, and New Civic Engagement."
            text="CHANCE is ADIF’s implementation arm for peace, justice, humanitarian response, recovery, reconstruction, and sustainable development, with Sudan as a strategic priority."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {chanceAreas.map(([title, text]) => (
              <Card key={title}>
                <h2 className="text-2xl font-black text-navy">{title}</h2>
                <p className="mt-4 leading-7 text-slateText">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="CHANCE Strategic Focus"
            title="Sudan-focused, regionally connected."
            text="Although CHANCE operates regionally, Sudan remains a strategic priority because of conflict, transition challenges, displacement, food insecurity, and multidimensional fragility."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Vision", "Safe, just, and resilient communities capable of building a sustainable future for all."],
              ["Mission", "Promote dignity and social justice through peace, human rights, development, capacity building, community support, and humanitarian assistance."],
              ["Aspiration", "Become a regional force for change through innovative solutions, effective partnerships, and programs that create a real difference."],
              ["Approach", "Bridge local, regional, and international actors through evidence-based programs, strong partnerships, and robust evaluation."]
            ].map(([title, text]) => (
              <Card key={title}>
                <h2 className="text-2xl font-black text-navy">{title}</h2>
                <p className="mt-4 leading-7 text-slateText">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="CHANCE Target Groups"
              title="Priority communities and beneficiaries."
              text="CHANCE focuses on groups most affected by crisis, exclusion, displacement, and fragile local systems."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {chanceGroups.map((group) => (
                <div key={group} className="rounded-md border border-navy/10 bg-white px-4 py-3 text-sm font-bold text-navy">
                  {group}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="CHANCE Program Offices"
              title="Sector offices for integrated delivery."
              text="CHANCE organizes technical delivery through program offices that connect protection, health, food security, emergency response, recovery, and sustainable development."
            />
            <div className="mt-8 grid gap-3">
              {chanceOffices.map((office) => (
                <Card key={office} className="p-5">
                  <h3 className="text-lg font-black text-navy">{office}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="doors" className="scroll-mt-24 bg-navy py-24 text-white">
        <div className="container">
          <SectionHeading
            eyebrow="DOORS"
            title="A center for knowledge, leadership, and institutional transformation."
            text="DOORS works at the intersection of training, capacity building, research, studies, advisory services, human rights advocacy, education, culture, and peacebuilding."
            tone="dark"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {doorsStructure.map(([title, text]) => (
              <Card key={title}>
                <h2 className="text-2xl font-black text-navy">{title}</h2>
                <p className="mt-4 leading-7 text-slateText">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="DOORS Strategic Objectives"
            title="Knowledge connected to real-world contexts."
            text="DOORS develops responsible leadership, produces research on critical societal issues, provides strategic advisory support, implements high-quality training, promotes rights and peace, and generates practical solutions."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Develop effective and responsible leadership",
              "Produce research and studies on critical societal issues",
              "Provide advisory services for informed decision-making",
              "Implement high-quality training and awareness programs",
              "Promote human rights, citizenship, and peace",
              "Foster inclusive and sustainable collective awareness"
            ].map((objective) => (
              <div key={objective} className="rounded-md border border-navy/10 bg-white px-4 py-4 text-sm font-bold leading-6 text-navy">
                {objective}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <SectionHeading
            eyebrow="DOORS Programs and Activities"
            title="Training, research, consulting, rights, peacebuilding, education, and culture."
            text="DOORS operates through practical program streams that combine leadership development, applied knowledge, institutional support, public awareness, psychosocial resilience, scholarships, and cultural work."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {doorsPrograms.map((program) => (
              <Card key={program} className="p-5">
                <h3 className="text-lg font-black leading-snug text-navy">{program}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
