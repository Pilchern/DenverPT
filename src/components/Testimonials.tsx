import { Reveal } from "./Reveal";

// Placeholder testimonials — replace with real client quotes as Denver gets
// them. See README.md for editing instructions.
const testimonials = [
  {
    quote:
      "Denver's programs are no-nonsense and it shows in the results. Stronger, more consistent, and I actually look forward to training.",
    name: "Client Name",
    detail: "1-on-1 Training",
  },
  {
    quote:
      "The online coaching made it easy to stay on track even with a packed schedule. Weekly check-ins kept me honest.",
    name: "Client Name",
    detail: "Online Coaching",
  },
  {
    quote:
      "Knew exactly how to adjust my program around old injuries while still pushing me. Highly recommend.",
    name: "Client Name",
    detail: "1-on-1 Training",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
            RESULTS
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-cream sm:text-4xl">
            What Clients Say
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <figure className="card-hover relative flex h-full flex-col rounded-sm border border-gold/25 bg-navy-light px-6 py-8 text-left">
                <span
                  aria-hidden="true"
                  className="font-heading absolute right-5 top-3 text-6xl text-gold/15"
                >
                  &rdquo;
                </span>
                <blockquote className="relative flex-1 text-cream/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-gold/20 pt-4">
                  <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
