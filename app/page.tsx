import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { DonationSection } from "@/components/sections/donation-section";
import { RegionalMap } from "@/components/sections/regional-map";
import { StatsStrip } from "@/components/sections/stats-strip";
import { HoverLift, Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { credibility, framework, pillars } from "@/lib/site";
import { getPublicationPreview } from "@/lib/local-content";

export default async function HomePage() {
  const publications = await getPublicationPreview("en");

  return (
    <>
      <Hero />
      <StatsStrip />

      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Mission"
              title="An integrated platform for regional impact."
              text="ADIF connects the immediacy of humanitarian action with the long horizon of development, research, policy, and institutional transformation."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-navy/10 bg-muted p-8">
              <p className="text-2xl font-black leading-snug text-navy sm:text-3xl">
                We work in conflict-affected and hard-to-reach areas, acting as
                a bridge to communities and field realities, including places
                such as Nyala.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Human-centered practice", "Donor-ready governance", "Regional field intelligence", "Policy-to-practice learning"].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-sm font-semibold text-navy">
                    <CheckCircle2 size={18} className="text-orange" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Core Framework"
              title="Respond → Recover → Transform"
              text="A disciplined model for converting crisis response into recovery pathways and long-term institutional change."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {framework.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card className="h-full">
                  <item.icon className="h-9 w-9 text-orange" />
                  <h3 className="mt-6 text-2xl font-black text-navy">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slateText">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Ecosystem"
              title="CHANCE and DOORS operate as one impact architecture."
              text="Implementation, research, training, policy development, and institutional strengthening are designed to reinforce each other."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <HoverLift key={pillar.title}>
                <Link href={pillar.href} className="block h-full">
                  <Card className="h-full">
                    <div className="flex items-start justify-between gap-4">
                      <pillar.icon className="h-10 w-10 text-orange" />
                      <ArrowRight className="text-navy/30" size={22} />
                    </div>
                    <h3 className="mt-7 text-3xl font-black text-navy">{pillar.title}</h3>
                    <p className="mt-3 leading-7 text-slateText">{pillar.subtitle}</p>
                    <div className="mt-7 grid gap-2">
                      {pillar.items.map((item) => (
                        <span key={item} className="text-sm font-semibold text-navy/80">
                          {item}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Link>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Regional Presence"
              title="Field-informed, regionally connected."
              text="ADIF’s operating model links donor engagement, operational management, and field implementation across strategic hubs."
              tone="dark"
            />
            <div className="mt-8">
              <Button asChild>
                <Link href="/regional-presence">Explore regional model</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <RegionalMap />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Institutional Credibility"
              title="Built for donors, partners, and public-interest systems."
              text="The platform combines compliance-minded governance with practical proximity to communities and institutions."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {credibility.map((item) => (
              <Card key={item.title} className="p-5">
                <item.icon className="h-8 w-8 text-orange" />
                <h3 className="mt-5 text-base font-black leading-snug text-navy">{item.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange">
              Partners
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-navy">
              Designed for serious institutional collaboration.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Donor agencies", "Public institutions", "Civil society", "Research partners"].map((partner) => (
              <div
                key={partner}
                className="rounded-md border border-navy/10 bg-muted px-4 py-5 text-center text-sm font-black text-navy"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonationSection compact />

      <section className="bg-muted py-24">
        <div className="container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Publications"
                title="Research and policy insight."
                text="Selected publications from ADIF and DOORS for partners, practitioners, and regional institutions."
              />
            </Reveal>
            <Button asChild variant="outline">
              <Link href="/publications">All publications</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {publications.map((publication) => (
              <Card key={publication.title}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
                  {publication.type} · {publication.date}
                </p>
                <h3 className="mt-4 text-xl font-black leading-snug text-navy">
                  {publication.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slateText">{publication.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container rounded-xl bg-navy p-8 text-white sm:p-12 lg:p-16">
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange">
                Partnership
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                Work with ADIF on integrated regional impact.
              </h2>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">Contact ADIF</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
