import { AnimatedCounter } from "@/components/animated-counter";
import { stats as defaultStats } from "@/lib/site";

export function StatsStrip({
  stats = defaultStats,
  dir = "ltr"
}: {
  stats?: typeof defaultStats;
  dir?: "ltr" | "rtl";
}) {
  return (
    <section dir={dir} className="relative z-20 -mt-16">
      <div className="container">
        <div className="grid overflow-hidden rounded-xl border border-navy/10 bg-white shadow-institutional sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-navy/10 p-7 sm:border-r last:border-r-0">
              <p className="text-4xl font-black text-navy">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-slateText">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
