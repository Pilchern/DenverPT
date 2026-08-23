import { CheckIcon, LaptopIcon, MapPinIcon, TargetIcon } from "./icons";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./Reveal";

const stats = [
  {
    icon: CheckIcon,
    label: siteConfig.credential,
    sub: "National Academy of Sports Medicine",
  },
  {
    icon: TargetIcon,
    label: "100% Personalized",
    sub: "Every program built around your goals",
  },
  {
    icon: LaptopIcon,
    label: "1-on-1 & Online",
    sub: "Train in person or from anywhere",
  },
  {
    icon: MapPinIcon,
    label: siteConfig.locationShort,
    sub: "In-person service area",
  },
];

export function Stats() {
  return (
    <section className="relative border-y border-gold/15 bg-navy-light/30 px-6 py-14">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                <stat.icon className="h-5 w-5" />
              </span>
              <p className="font-heading text-sm font-semibold tracking-wide-plus text-cream">
                {stat.label.toUpperCase()}
              </p>
              <p className="text-xs text-slate">{stat.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
