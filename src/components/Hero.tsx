import { DumbbellIcon } from "./icons";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-6 rounded-lg border border-gold/40 sm:inset-10"
      />

      <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold sm:text-base">
        CERTIFIED PERSONAL TRAINER
      </p>
      <div className="mt-4 h-px w-16 bg-gold-soft/60" />

      <h1 className="font-heading mt-8 text-4xl font-bold uppercase tracking-wide text-cream sm:text-6xl">
        Denver Frahm
      </h1>
      <p className="font-heading mt-4 text-lg tracking-wide text-cream/90 sm:text-2xl">
        1-on-1 Training &nbsp;&middot;&nbsp; Online Coaching
      </p>

      <p className="mt-6 max-w-xl text-balance text-slate">
        Serving {siteConfig.location} in person, and clients everywhere
        through online coaching. {siteConfig.credential} certified, built on
        real strength &amp; conditioning fundamentals.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#booking"
          className="font-heading rounded-sm bg-gold px-8 py-3 text-sm font-semibold tracking-wide-plus text-navy transition-transform hover:scale-[1.03]"
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

      <DumbbellIcon className="mt-14 h-5 w-16 text-slate" />
    </section>
  );
}
