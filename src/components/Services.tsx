import { CheckIcon } from "./icons";

// Placeholder pricing — update to match Denver's actual rates.
// See README.md for editing instructions.
const packages = [
  {
    name: "1-on-1 Training",
    price: "$50",
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
    name: "Consult",
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-sm border px-6 py-8 text-left ${
                pkg.featured
                  ? "border-gold bg-navy"
                  : "border-gold/25 bg-navy"
              }`}
            >
              {pkg.featured && (
                <span className="font-heading mb-4 w-fit rounded-full bg-gold px-3 py-1 text-xs font-semibold tracking-wide-plus text-navy">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold text-cream">
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
                  <li key={f} className="flex items-start gap-2 text-sm text-cream/90">
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
                GET STARTED
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
