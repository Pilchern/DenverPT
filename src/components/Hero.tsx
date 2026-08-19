import { DumbbellIcon } from "./icons";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-6 rounded-lg border border-gold/30 sm:inset-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-10 top-10 h-16 w-16 border-l border-t border-gold/50 sm:left-14 sm:top-14"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 h-16 w-16 border-b border-r border-gold/50 sm:bottom-14 sm:right-14"
      />

      <Reveal className="relative flex flex-col items-center">
        <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold sm:text-base">
          CERTIFIED PERSONAL TRAINER
        </p>
        <div className="mt-4 h-px w-16 bg-gold-soft/60" />
      </Reveal>

      <Reveal delay={100} className="relative">
        <h1 className="font-heading text-glow mt-8 text-5xl font-bold uppercase tracking-wide text-cream sm:text-7xl lg:text-8xl">
          {siteConfig.name}
        </h1>
      </Reveal>

      <Reveal delay={200} className="relative">
        <p className="font-heading mt-5 text-lg tracking-wide text-cream/90 sm:text-2xl">
          1-on-1 Training &nbsp;&middot;&nbsp; Online Coaching
        </p>
      </Reveal>

      <Reveal delay={300} className="relative">
        <p className="mt-6 max-w-xl text-balance text-slate">
          Serving {siteConfig.location} in person, and clients everywhere
          through online coaching. {siteConfig.credential} certified, built on
          real strength &amp; conditioning fundamentals.
        </p>
      </Reveal>

      <Reveal delay={400} className="relative">
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#booking"
            className="font-heading group relative overflow-hidden rounded-sm bg-gradient-to-r from-gold-soft via-gold to-gold-soft bg-[length:200%_100%] px-8 py-3 text-sm font-semibold tracking-wide-plus text-navy shadow-[0_8px_30px_-8px_rgba(201,166,104,0.6)] transition-[background-position,transform] duration-500 hover:scale-[1.03] hover:bg-[100%_0]"
          >
            BOOK A FREE CONSULT
          </a>
          <a
            href={siteConfig.phoneHref}
            className="font-heading rounded-sm border border-cream/30 px-8 py-3 text-sm font-semibold tracking-wide-plus text-cream transition-colors hover:border-gold hover:text-gold"
          >
            {siteConfig.phone}
          </a>
        </div>
      </Reveal>

      <Reveal delay={500} className="relative">
        <DumbbellIcon className="mt-14 h-5 w-16 text-gold/70" />
      </Reveal>
    </section>
  );
}
