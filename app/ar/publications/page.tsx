import { PageHeader } from "@/components/page-header";
import { PublicationFilter } from "@/components/publication-filter";
import { arContent } from "@/lib/i18n";
import { getPublications } from "@/lib/local-content";

export default async function ArabicPublicationsPage() {
  const publications = await getPublications("ar");

  return (
    <>
      <PageHeader {...arContent.pages.publications} />
      <section className="py-24">
        <div className="container">
          <PublicationFilter publications={publications} />
        </div>
      </section>
    </>
  );
}
