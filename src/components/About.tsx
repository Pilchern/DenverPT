import { siteConfig } from "@/lib/site-config";
import { DumbbellIcon } from "./icons";
import { Reveal } from "./Reveal";

const credentials = [
  { label: siteConfig.credential, sub: "National Academy of Sports Medicine" },
  {
    label: siteConfig.nutritionCredential,
    sub: siteConfig.nutritionStatus,
    pending: true,
  },
  {
    label: siteConfig.school,
    sub: `${siteConfig.university} · Grad ${siteConfig.gradYear}`,
    pending: true,
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.3fr] md:items-start">
        <Reveal>
          {/*
            Portrait placeholder — swap for a real photo of Denver once he
            has one. See README.md for how/where to add it.
          */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm border border-gold/30 bg-gradient-to-br from-navy-light via-navy to-navy-deep">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <DumbbellIcon className="h-8 w-28 -rotate-12 text-gold/25" />
            </div>
            <div className="absolute inset-0 border border-gold/10 m-3" />
          </div>

          <div className="mt-8 space-y-4">
            {credentials.map((c) => (
              <div
                key={c.label}
                className={`card-hover rounded-sm border bg-navy-light px-5 py-4 ${
                  c.pending ? "border-gold/15 border-dashed" : "border-gold/30"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
                    {c.label.toUpperCase()}
                  </p>
                  {c.pending && (
                    <span className="font-heading shrink-0 rounded-full border border-gold/40 px-2 py-0.5 text-[10px] font-semibold tracking-wide-plus text-gold/80">
                      SOON
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate">{c.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
            ABOUT
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-cream sm:text-4xl">
            Meet Denver
          </h2>

          <div className="mt-8 space-y-5 text-cream/90">
            {/*
              Placeholder bio copy — swap this in for Denver's own words
              about his background, why he got into training, and who he
              loves to work with. See README.md for editing instructions.
            */}
            <p>
              {siteConfig.name} is a NASM Certified Personal Trainer currently
              finishing a {siteConfig.school} degree at {siteConfig.university}.
              Fitness isn&apos;t a side interest for him — it&apos;s what he
              spends his own time on, from training to dialing in his own
              nutrition, and that same standard carries over into how he
              coaches. He works with clients of every level — from people
              just starting their fitness journey to athletes chasing a
              specific performance goal.
            </p>
            <p>
              His approach is simple: build real strength, move well, and
              stay consistent. Every program is tailored to the individual,
              whether you&apos;re training in person across{" "}
              {siteConfig.location} or working together online from
              anywhere. He&apos;s also finishing his {siteConfig.nutritionCredential}{" "}
              certification, so nutrition coaching is coming soon alongside
              training.
            </p>
            <p>
              Whether the goal is building muscle, losing fat, improving
              athletic performance, or just feeling stronger day to day,
              Denver brings a personalized plan and hands-on coaching to get
              you there.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
