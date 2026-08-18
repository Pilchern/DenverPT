import { siteConfig } from "@/lib/site-config";
import { InstagramIcon, PhoneIcon } from "./icons";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
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
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-3 text-cream transition-colors hover:text-gold"
            >
              <PhoneIcon className="h-5 w-5 text-gold" />
              {siteConfig.phone}
            </a>
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
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
