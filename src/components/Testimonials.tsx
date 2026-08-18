import { Reveal } from "./Reveal";

// Empty on purpose — there are no real client testimonials yet. Add them
// here as Denver gets them; the section switches from the "just starting
// out" message to the quote grid automatically once this has entries.
// Never fill this with invented quotes. See README.md.
const testimonials: { quote: string; name: string; detail: string }[] = [];

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

        {testimonials.length === 0 ? (
          <Reveal delay={100}>
            <div className="card-hover mx-auto mt-14 max-w-xl rounded-sm border border-dashed border-gold/25 bg-navy-light px-8 py-12">
              <p className="text-cream/90">
                Denver is just getting started taking on clients, so there
                aren&apos;t reviews here yet — but that means early clients
                get his full attention while he builds out his roster.
              </p>
              <a
                href="#booking"
                className="font-heading mt-6 inline-block rounded-sm bg-gold px-6 py-3 text-sm font-semibold tracking-wide-plus text-navy transition-transform hover:scale-[1.03]"
              >
                BE ONE OF THE FIRST
              </a>
            </div>
          </Reveal>
        ) : (
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
        )}
      </div>
    </section>
  );
}
