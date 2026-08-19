import { siteConfig } from "@/lib/site-config";
import { ExternalLinkIcon, InstagramIcon, MessageIcon, PhoneIcon } from "./icons";
import { Reveal } from "./Reveal";

function ContactRow({ compact = false }: { compact?: boolean }) {
  const size = compact ? "px-5 py-2.5 text-xs" : "px-6 py-3 text-sm";
  // When compact, this sits below a primary gold CTA (My PT Hub), so every
  // button here stays outlined -- only one gold button should be on screen
  // at a time.
  const callClassName = compact
    ? `font-heading inline-flex items-center gap-2 rounded-sm border border-cream/30 ${size} font-semibold tracking-wide-plus text-cream transition-colors hover:border-gold hover:text-gold`
    : `font-heading inline-flex items-center gap-2 rounded-sm bg-gold ${size} font-semibold tracking-wide-plus text-navy transition-transform hover:scale-[1.03]`;

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a href={siteConfig.phoneHref} className={callClassName}>
        <PhoneIcon className="h-4 w-4" />
        CALL
      </a>
      <a
        href={siteConfig.smsHref}
        className={`font-heading inline-flex items-center gap-2 rounded-sm border border-cream/30 ${size} font-semibold tracking-wide-plus text-cream transition-colors hover:border-gold hover:text-gold`}
      >
        <MessageIcon className="h-4 w-4" />
        TEXT
      </a>
      <a
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-heading inline-flex items-center gap-2 rounded-sm border border-cream/30 ${size} font-semibold tracking-wide-plus text-cream transition-colors hover:border-gold hover:text-gold`}
      >
        <InstagramIcon className="h-4 w-4" />
        DM {siteConfig.instagramHandle}
      </a>
    </div>
  );
}

export function Booking() {
  const hasMyPtHub = Boolean(siteConfig.myPtHubUrl);
  const hasCalendly = Boolean(siteConfig.calendlyUrl);

  return (
    <section id="booking" className="bg-navy-light/40 px-6 py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
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
      </Reveal>

      <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
        {hasMyPtHub ? (
          <div className="rounded-sm border border-gold/25 bg-navy px-6 py-12 text-center">
            <p className="text-cream/90">
              Get started through Denver&apos;s My PT Hub page, or just
              reach out directly — either way works.
            </p>
            <a
              href={siteConfig.myPtHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading mt-8 inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-3 text-sm font-semibold tracking-wide-plus text-navy transition-transform hover:scale-[1.03]"
            >
              GO TO MY PT HUB
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
            <p className="mt-8 text-xs uppercase tracking-wide-plus text-slate">
              Prefer to just reach out?
            </p>
            <div className="mt-4">
              <ContactRow compact />
            </div>
          </div>
        ) : hasCalendly ? (
          <iframe
            src={siteConfig.calendlyUrl}
            title="Book a session with Denver Frahm"
            className="h-[700px] w-full rounded-sm border border-gold/25"
            loading="lazy"
          />
        ) : (
          <div className="rounded-sm border border-gold/25 bg-navy px-6 py-12 text-center">
            <p className="text-cream/90">
              Reach out directly to get started — Denver will get back to
              you to lock in your free consult and get you set up.
            </p>
            <p className="mt-1 text-sm text-slate">{siteConfig.phone}</p>
            <div className="mt-6">
              <ContactRow />
            </div>
          </div>
        )}
      </Reveal>
    </section>
  );
}
