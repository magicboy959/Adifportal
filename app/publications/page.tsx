import { PageHeader } from "@/components/page-header";
import { PublicationFilter } from "@/components/publication-filter";
import { pageMetadata } from "@/lib/seo";
import { getPublications } from "@/lib/local-content";

export const metadata = pageMetadata(
  "Publications",
  "Search ADIF research papers, reports, and policy briefs from the DOORS institute.",
  "/publications"
);

export default async function PublicationsPage() {
  const publications = await getPublications("en");

  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Research papers, reports, and policy briefs."
        description="A CMS-ready publication library for ADIF and DOORS outputs, with filtering designed for donors, practitioners, and policy audiences."
      />
      <section className="py-24">
        <div className="container">
          <PublicationFilter publications={publications} />
        </div>
      </section>
    </>
  );
}
