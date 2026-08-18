import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Free Consult",
    description:
      "We talk through your goals, training history, schedule, and anything that affects how you should train — no pressure, no obligation.",
  },
  {
    number: "02",
    title: "Personalized Plan",
    description:
      "Denver builds a program around what you actually need, whether that's in-person sessions or an online plan you follow on your own.",
  },
  {
    number: "03",
    title: "Train & Progress",
    description:
      "Coached sessions or regular check-ins, with your program adjusted as you get stronger, so progress keeps happening instead of stalling.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-navy-light/40 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
            THE PROCESS
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-cream sm:text-4xl">
            How It Works
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-3 sm:gap-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gold/20 sm:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120} className="h-full">
              <div className="flex h-full flex-col items-center text-center">
                <span className="font-heading relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-navy text-sm font-bold text-gold">
                  {step.number}
                </span>
                <h3 className="font-heading mt-5 text-lg font-semibold tracking-wide text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
