import { siteConfig } from "@/lib/site-config";
import { InstagramIcon, PhoneIcon } from "./icons";

export function Booking() {
  const hasCalendly = Boolean(siteConfig.calendlyUrl);

  return (
    <section id="booking" className="bg-navy-light/40 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
          BOOK
        </p>
        <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-cream sm:text-4xl">
          Book Your Free Consult
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-slate">
          Pick a time that works for you and let&apos;s talk about your
          goals.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        {hasCalendly ? (
          <iframe
            src={siteConfig.calendlyUrl}
            title="Book a session with Denver Frahm"
            className="h-[700px] w-full rounded-sm border border-gold/25"
            loading="lazy"
          />
        ) : (
          <div className="rounded-sm border border-gold/25 bg-navy px-6 py-12 text-center">
            <p className="text-cream/90">
              Online booking is coming soon. In the meantime, reach out
              directly and Denver will get back to you to schedule your free
              consult.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="font-heading inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold tracking-wide-plus text-navy transition-transform hover:scale-[1.03]"
              >
                <PhoneIcon className="h-4 w-4" />
                CALL OR TEXT {siteConfig.phone}
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading inline-flex items-center gap-2 rounded-sm border border-cream/30 px-6 py-3 text-sm font-semibold tracking-wide-plus text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="h-4 w-4" />
                DM {siteConfig.instagramHandle}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
