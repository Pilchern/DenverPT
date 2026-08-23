import { ChevronDownIcon } from "./icons";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/lib/site-config";

// Keep answers honest and within an NASM-CPT's scope of practice — no
// medical claims, no invented specifics. See README.md before editing.
export const faqs = [
  {
    question: "I've never worked with a trainer before. Is that a problem?",
    answer:
      "Not at all — most people starting out haven't. The free consult exists to walk through where you're at and what to expect, so your first real session isn't the first time you're figuring any of this out.",
  },
  {
    question: "I'm intimidated by the gym. Will I feel judged?",
    answer:
      "No. Training starts at your current level, not some assumed baseline. Part of the job is making the gym feel less intimidating, not more.",
  },
  {
    question: "Do you train in person or online?",
    answer: `Both. In-person training is available across ${siteConfig.location}, and online coaching works from anywhere for people outside that area or who prefer a self-directed schedule.`,
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing is put together individually rather than off a set price list, because what you need depends on your goals, how often we train, and whether you're in person or online. The free consult is where we'll work that out and give you a straight number before you commit to anything.",
  },
  {
    question: "I have an old injury or physical limitation. Can you work around it?",
    answer:
      "Programs are built around whatever limitations you share during the consult. For a diagnosed injury or medical condition, training is coordinated alongside guidance from your doctor or physical therapist — not as a replacement for it.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="font-heading text-sm font-semibold tracking-wide-plus text-gold">
            QUESTIONS
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-cream sm:text-4xl">
            Frequently Asked
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 80}>
              <details className="card-hover group rounded-sm border border-gold/25 bg-navy-light px-5 py-4 open:pb-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-sm font-semibold tracking-wide text-cream marker:content-none">
                  {faq.question}
                  <ChevronDownIcon className="h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-slate">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
