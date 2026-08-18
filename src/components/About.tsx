import { siteConfig } from "@/lib/site-config";

const credentials = [
  { label: siteConfig.credential, sub: "National Academy of Sports Medicine" },
  { label: siteConfig.school, sub: `Grad ${siteConfig.gradYear}` },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-start">
        <div>
          <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
            ABOUT
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-cream sm:text-4xl">
            Meet Denver
          </h2>
          <div className="mt-8 space-y-4">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="rounded-sm border border-gold/30 bg-navy-light px-5 py-4"
              >
                <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
                  {c.label.toUpperCase()}
                </p>
                <p className="mt-1 text-sm text-slate">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 text-cream/90">
          {/*
            Placeholder bio copy — swap this in for Denver's own words about
            his background, why he got into training, and who he loves to
            work with. See README.md for editing instructions.
          */}
          <p>
            Denver Frahm is a NASM Certified Personal Trainer specializing in
            strength &amp; conditioning, built on a foundation of KSP
            Strength &amp; Conditioning training. He works with clients of
            every level — from people just starting their fitness journey to
            athletes chasing a specific performance goal.
          </p>
          <p>
            His approach is simple: build real strength, move well, and stay
            consistent. Every program is tailored to the individual, whether
            you&apos;re training in person around {siteConfig.location} or
            working together online from anywhere.
          </p>
          <p>
            Whether the goal is building muscle, losing fat, improving
            athletic performance, or just feeling stronger day to day, Denver
            brings a personalized plan and hands-on coaching to get you
            there.
          </p>
        </div>
      </div>
    </section>
  );
}
