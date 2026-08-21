import { CheckIcon, DumbbellIcon, LaptopIcon, TargetIcon } from "./icons";
import { Reveal } from "./Reveal";

// Starting rates for a new independent trainer in a smaller Midwest market —
// not a placeholder, but a deliberate starting point, priced to build a
// client base rather than match big-city/established-trainer rates. Easy to
// bump once Denver has a full roster and can raise prices with demand.
// Just change `price`/`unit` here — nothing else needs to change.
const packages = [
  {
    name: "1-on-1 Training",
    icon: DumbbellIcon,
    price: "$55",
    unit: "/ session",
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
    price: "$150",
    unit: "/ month",
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
    price: "Free",
    unit: "",
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
            Training Packages
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Pick the format that fits your life. Every package starts with a
            free consult so we can build the right plan for you.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="card-hover mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 rounded-sm border border-gold bg-navy px-6 py-6 shadow-[0_0_40px_-20px_rgba(201,166,104,0.5)] sm:flex-row sm:justify-between sm:text-left">
            <div>
              <span className="font-heading rounded-full bg-gold px-3 py-1 text-xs font-semibold tracking-wide-plus text-navy">
                NEW CLIENT OFFER
              </span>
              <p className="font-heading mt-3 text-xl font-bold text-cream">
                4 Sessions for $180
              </p>
              <p className="mt-1 text-sm text-slate">
                A no-pressure way to try 1-on-1 training and see if it&apos;s
                the right fit.
              </p>
            </div>
            <a
              href="#booking"
              className="font-heading shrink-0 rounded-sm bg-gold px-6 py-3 text-sm font-semibold tracking-wide-plus text-navy transition-transform hover:scale-[1.03]"
            >
              CLAIM THIS DEAL
            </a>
          </div>
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
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="font-heading text-3xl font-bold text-gold">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-slate">{pkg.unit}</span>
                </p>
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
