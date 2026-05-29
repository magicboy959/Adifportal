import { Reveal } from "@/components/motion";

export function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="container py-20 sm:py-24">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
