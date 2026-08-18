import { siteConfig } from "@/lib/site-config";
import { InstagramIcon, MessageIcon, PhoneIcon } from "./icons";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
            CONTACT
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-cream sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate">
            Serving {siteConfig.location} in person, and online everywhere
            else. Reach out any way that&apos;s easiest for you.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-cream">
              <PhoneIcon className="h-5 w-5 shrink-0 text-gold" />
              <span>{siteConfig.phone}</span>
              <span className="text-slate">&middot;</span>
              <a
                href={siteConfig.phoneHref}
                className="transition-colors hover:text-gold"
              >
                Call
              </a>
              <a
                href={siteConfig.smsHref}
                className="flex items-center gap-1 transition-colors hover:text-gold"
              >
                <MessageIcon className="h-3.5 w-3.5" />
                Text
              </a>
            </div>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream transition-colors hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5 text-gold" />
              {siteConfig.instagramHandle}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
