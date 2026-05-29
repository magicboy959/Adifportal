import { MapPin } from "lucide-react";
import { locations as defaultLocations } from "@/lib/site";

export function RegionalMap({
  locations = defaultLocations
}: {
  locations?: typeof defaultLocations;
}) {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-xl border border-navy/10 bg-[#f5f7f9] p-6">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#072D75_1px,transparent_1px),linear-gradient(90deg,#072D75_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute left-[28%] top-[12%] h-[72%] w-[42%] rounded-[48%] border-2 border-navy/20 bg-white/60" />
      <div className="absolute left-[38%] top-[19%] h-[56%] w-[22%] rounded-[42%] border border-orange/50 bg-orange/5" />
      {locations.map((location) => (
        <div
          key={location.city}
          className="absolute max-w-[220px]"
          style={{ top: location.top, left: location.left }}
        >
          <div className="group relative">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-orange text-navy shadow-lg ring-8 ring-orange/15">
              <MapPin size={22} />
            </div>
            <div className="mt-3 rounded-xl border border-navy/10 bg-white/92 p-4 shadow-lg backdrop-blur">
              <h3 className="text-base font-black text-navy">{location.city}</h3>
              <p className="mt-1 text-sm font-bold text-orange">{location.role}</p>
              <p className="mt-2 text-xs leading-5 text-slateText">{location.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
