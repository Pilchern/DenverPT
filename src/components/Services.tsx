import { CheckIcon, DumbbellIcon, LaptopIcon, TargetIcon } from "./icons";
import { Reveal } from "./Reveal";

// No rates listed anywhere on the site — pricing is quoted per client after
// the free consult, so nobody sees a number before Denver has talked to them.
// If that ever changes, add `price`/`unit` fields back here and render them in
// the card below; this is the only place packages are defined.
const packages = [
  {
    name: "1-on-1 Training",
    icon: DumbbellIcon,
    description: "In-person training tailored to your goals.",
    features: [
      "Custom program design",
      "Hands-on coaching & form correction",
      "Progress tracking every session",
      "Flexible scheduling",
    ],
    featured: false,
  },
  {
    name: "Online Coaching",
    icon: LaptopIcon,
    description: "Full programming and support, from anywhere.",
    features: [
      "Custom monthly training plan",
      "Weekly check-ins & adjustments",
      "Direct messaging support",
      "Nutrition guidance",
    ],
    featured: true,
  },
  {
    name: "Free Consult",
    icon: TargetIcon,
    description: "A quick call to talk goals and figure out the right fit.",
    features: [
      "Goal & lifestyle assessment",
      "Program recommendation",
      "No obligation",
    ],
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-navy-light/40 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
            SERVICES
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-cream sm:text-4xl">
            Training Options
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Pick the format that fits your life. Every plan starts with a free
            consult, and pricing is built around your goals, schedule, and how
            often we train.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 100} className="h-full">
              <div
                className={`card-hover flex h-full flex-col rounded-sm border px-6 py-8 text-left ${
                  pkg.featured
                    ? "border-gold bg-navy shadow-[0_0_40px_-20px_rgba(201,166,104,0.5)]"
                    : "border-gold/25 bg-navy"
                }`}
              >
                {pkg.featured && (
                  <span className="font-heading mb-4 w-fit rounded-full bg-gold px-3 py-1 text-xs font-semibold tracking-wide-plus text-navy">
                    RECOMMENDED
                  </span>
                )}
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <pkg.icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading mt-4 text-xl font-semibold text-cream">
                  {pkg.name}
                </h3>
                <p className="mt-3 text-sm text-slate">{pkg.description}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-cream/90"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className={`font-heading mt-8 rounded-sm px-5 py-3 text-center text-sm font-semibold tracking-wide-plus transition-colors ${
                    pkg.featured
                      ? "bg-gold text-navy hover:bg-gold-soft"
                      : "border border-gold/40 text-gold hover:bg-gold hover:text-navy"
                  }`}
                >
                  {pkg.name === "Free Consult" ? "BOOK FREE CONSULT" : "GET STARTED"}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
