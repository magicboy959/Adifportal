import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";

export function Hero() {
  const content = {
    badge: "Regional platform for humanitarian impact and institutional transformation",
    title: "Action for Integration, Development & Impact",
    text: "ADIF integrates humanitarian action, development systems, research, policy, and institutional transformation across African regional contexts.",
    primary: "Explore ADIF",
    secondary: "View Publications",
    donation: "Donate",
    primaryHref: "/about",
    secondaryHref: "/publications",
    donationHref: "/donate"
  };

  return <HeroContent content={content} />;
}

export function HeroContent({
  content,
  dir = "ltr"
}: {
  content: {
    badge: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    donation: string;
    primaryHref: string;
    secondaryHref: string;
    donationHref: string;
  };
  dir?: "ltr" | "rtl";
}) {
  return (
    <section dir={dir} className="relative min-h-[760px] overflow-hidden bg-navy text-white">
      <Image
        src="/images/adif-hero.png"
        alt="Humanitarian and development professionals collaborating in a regional operations setting"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className={
          dir === "rtl"
            ? "absolute inset-0 bg-[linear-gradient(270deg,rgba(7,45,117,0.96)_0%,rgba(7,45,117,0.82)_38%,rgba(7,45,117,0.28)_78%)]"
            : "absolute inset-0 bg-[linear-gradient(90deg,rgba(7,45,117,0.96)_0%,rgba(7,45,117,0.82)_38%,rgba(7,45,117,0.28)_78%)]"
        }
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />
      <div className="container relative z-10 flex min-h-[760px] items-center pb-24 pt-20">
        <Reveal className={dir === "rtl" ? "mr-auto max-w-3xl" : "max-w-3xl"}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/88 backdrop-blur">
            <Globe2 size={16} className="text-orange" />
            {content.badge}
          </div>
          <h1 className="mt-8 text-5xl font-black leading-[1.02] tracking-normal sm:text-7xl lg:text-8xl">
            {content.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            {content.text}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={content.primaryHref}>
                {content.primary} <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              <Link href={content.secondaryHref}>{content.secondary}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-orange/70 bg-orange/10 text-white hover:bg-orange/20">
              <Link href={content.donationHref}>
                {content.donation} <HeartHandshake size={18} />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
