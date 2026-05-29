import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ tool: [] }];
}

export default function StudioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio"
        title="This site uses local content data instead of an external CMS."
        description="The public site is served from local backend data for publications and media, so no Sanity studio is required for normal operation."
      />
      <section className="py-24">
        <div className="container">
          <Button asChild variant="navy">
            <Link href="https://www.sanity.io/manage/project/kj7wgnfr">Open Sanity project</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
