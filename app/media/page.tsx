import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Media Center",
  "ADIF media center for news, gallery, videos, and stories.",
  "/media"
);

const media = [
  ["News", "Institutional updates, program announcements, partnership milestones, and regional briefings."],
  ["Gallery", "Field, training, partner, and community-centered visual documentation."],
  ["Videos", "Short explainers, event recordings, training content, and field stories."],
  ["Stories", "Human-centered narratives from programs, partners, communities, and institutional change processes."]
];

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media Center"
        title="News, gallery, videos, and stories."
        description="A CMS-ready communications hub for ADIF’s regional work, institutional voice, and human-centered impact."
      />
      <section className="py-24">
        <div className="container">
          <SectionHeading
            title="Institutional communications hub"
            text="Structured for editorial publishing, media resources, and local story workflows."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {media.map(([title, text]) => (
              <Card key={title}>
                <h2 className="text-2xl font-black text-navy">{title}</h2>
                <p className="mt-4 leading-7 text-slateText">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
