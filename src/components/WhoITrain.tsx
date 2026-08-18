import { ClipboardIcon, RefreshIcon, SproutIcon, TargetIcon } from "./icons";
import { Reveal } from "./Reveal";

const audiences = [
  {
    icon: SproutIcon,
    title: "New to training",
    description:
      "Never worked with a trainer before, or new to the gym entirely. You'll get clear instruction and no judgment about where you're starting from.",
  },
  {
    icon: RefreshIcon,
    title: "Getting back into it",
    description:
      "Picking things back up after time off, a break, or an injury, and want a plan that rebuilds you the right way.",
  },
  {
    icon: ClipboardIcon,
    title: "Ready for real programming",
    description:
      "Already comfortable in the gym but tired of guessing. You want a structured plan instead of piecing workouts together yourself.",
  },
  {
    icon: TargetIcon,
    title: "Chasing a performance goal",
    description:
      "Training with a specific strength, conditioning, or athletic outcome in mind, and want programming built around that goal.",
  },
];

export function WhoITrain() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
            WHO I TRAIN
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-cream sm:text-4xl">
            Is This You?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Denver works with people across every experience level. If any
            of this sounds like you, a free consult is the natural next
            step.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 100} className="h-full">
              <div className="card-hover flex h-full items-start gap-4 rounded-sm border border-gold/25 bg-navy-light px-6 py-6 text-left">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <a.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold tracking-wide text-cream">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{a.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
