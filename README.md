# Denver Frahm Training — Website

A one-page site for Denver Frahm, NASM Certified Personal Trainer, built with
Next.js + Tailwind CSS. Matches the navy/gold branding from his business
cards.

## What's on the site

- Hero, credibility stats, "Who I Train," About/Bio, Services, "How It
  Works," Testimonials, FAQ, Booking, and Contact — all on one scrolling
  page.
- A booking section that embeds a Calendly (or Cal.com) calendar once it's
  configured — until then it shows a "call/text/DM" fallback.
- A contact form that emails Denver directly via [Web3Forms](https://web3forms.com)
  (free, no backend server needed) — until it's configured it shows a
  fallback message and still displays his phone/Instagram.
- Local SEO basics: title/description built around "Personal Trainer in
  Kenosha & Trevor, WI," a `robots.txt` + sitemap, a branded favicon and
  Open Graph image generated at build time, and JSON-LD structured data
  (ProfessionalService + FAQPage) so search engines understand the business.

## A rule this codebase follows: never invent facts

Services intentionally has **no dollar amounts** — Denver's real rates
aren't in the codebase, so the packages describe what's included and send
people to the free consult instead of showing a made-up number. Same with
Testimonials: the array is empty on purpose (see
`src/components/Testimonials.tsx`) and shows an honest "just getting
started" message instead of fake client quotes. Both are designed to
flip over automatically once real content exists — add a price/unit to a
package in `src/components/Services.tsx`, or a quote to the `testimonials`
array in `src/components/Testimonials.tsx`, and the placeholder state goes
away on its own. Please don't fill either with invented numbers or quotes —
it's a real liability for a business site, not just a style issue.

## Two things to set up before sending this to real clients

Both are free and take a few minutes. Without them the site still works —
it just falls back to "call or text Denver" / "message not connected yet".

### 1. Live booking calendar (Calendly)

1. Create a free account at [calendly.com](https://calendly.com) (or
   [cal.com](https://cal.com)).
2. Set up an event type, e.g. "Free Consult" or "Training Session".
3. Copy your booking page link, e.g. `https://calendly.com/denver-frahm/consult`.
4. Set it as an environment variable named `NEXT_PUBLIC_CALENDLY_URL` (see
   [Environment variables](#environment-variables) below).

### 2. Contact form email delivery (Web3Forms)

1. Go to [web3forms.com](https://web3forms.com) and enter the email address
   where you want messages delivered — no account needed, it emails you an
   Access Key.
2. Set it as an environment variable named `NEXT_PUBLIC_WEB3FORMS_KEY`.

### Environment variables

Locally, copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

On Vercel (recommended host, see below), add both under
**Project Settings → Environment Variables**, then redeploy.

## Editing content

Everything editor-friendly lives in a few files:

| What to change | File |
| --- | --- |
| Phone, Instagram, location, credentials, site URL | `src/lib/site-config.ts` |
| Bio / about text | `src/components/About.tsx` |
| Package details (see note above on pricing) | `src/components/Services.tsx` |
| Testimonials (empty by design — see note above) | `src/components/Testimonials.tsx` |
| Who Denver trains | `src/components/WhoITrain.tsx` |
| The 3-step process | `src/components/HowItWorks.tsx` |
| FAQ questions/answers | `src/components/FAQ.tsx` (also feeds the FAQPage schema in `src/app/page.tsx`) |

The About section currently shows a styled placeholder in place of a photo.
To add a real one, drop an image in `public/` and swap the placeholder
`<div>` in `src/components/About.tsx` for an `<Image>` from `next/image`.

If a custom domain gets attached in Vercel, update `siteUrl` in
`src/lib/site-config.ts` — it feeds the canonical URL, Open Graph tags, and
structured data.

## Running locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Deploying

The easiest option is [Vercel](https://vercel.com) (built by the makers of
Next.js, free for a site like this):

1. Push this repo to GitHub (already done if you're reading this from the
   repo).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Add the environment variables from above.
4. Deploy — Vercel gives you a live URL immediately, and you can attach a
   custom domain later (e.g. `denverfrahmtraining.com`).

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- No database — booking and contact are handled by Calendly and Web3Forms,
  so there's nothing to host or maintain beyond the site itself.
