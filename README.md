# Denver Frahm Training — Website

A one-page site for Denver Frahm, NASM Certified Personal Trainer, built with
Next.js + Tailwind CSS. Matches the navy/gold branding from his business
cards.

## What's on the site

- Hero, credibility stats, "Who I Train," About/Bio, Services, "How It
  Works," Testimonials, FAQ, Booking, and Contact — all on one scrolling
  page.
- A booking section built around [My PT Hub](https://mypthub.net) (Denver's
  preferred platform) — a button linking out to his My PT Hub page once it's
  configured. Falls back to an embedded Calendly calendar if that's set
  instead, and to "call/text/DM" if neither is configured.
- A contact form that emails Denver directly via [Web3Forms](https://web3forms.com)
  (free, no backend server needed) — until it's configured it shows a
  fallback message and still displays his phone/Instagram.
- Local SEO basics: title/description built around "Personal Trainer in
  Kenosha & Trevor, WI," a `robots.txt` + sitemap, a branded favicon and
  Open Graph image generated at build time, and JSON-LD structured data
  (ProfessionalService + FAQPage) so search engines understand the business.

## A rule this codebase follows: never invent facts

Services shows **$55/session** and **$150/month** — deliberate starting
rates picked to match what a new independent trainer in a smaller Midwest
market typically charges, not numbers Denver confirmed himself. They're a
reasonable place to start, not gospel — he should raise them once he has a
full roster, or adjust now if they're off. Change them in
`src/components/Services.tsx` (just the `price`/`unit` fields).

Testimonials is a different situation: the array is empty on purpose (see
`src/components/Testimonials.tsx`) and shows an honest "just getting
started" message instead of fake client quotes, because there's no way to
responsibly invent someone's words. It flips to a real quote grid
automatically once entries get added to the `testimonials` array — please
don't fill it with invented quotes, that's a real liability for a business
site, not just a style issue.

## Two things to set up before sending this to real clients

Both are free (My PT Hub has a free trial, then paid plans) and take a few
minutes. Without them the site still works — it just falls back to "call or
text Denver" / "message not connected yet".

### 1. Live booking (My PT Hub)

1. Sign up at [mypthub.net](https://mypthub.net) if Denver hasn't already —
   this is the app he wants to use to manage clients, so it's worth setting
   up regardless of the website.
2. Find his public page URL, e.g. `https://denverfrahm.mypthub.net` (My PT
   Hub's own support docs confirm this is a link/button integration, not an
   embeddable calendar — see [their integration
   article](https://support.mypthub.net/hc/en-us/articles/360003212558)).
3. Set it as an environment variable named `NEXT_PUBLIC_MYPTHUB_URL` (see
   [Environment variables](#environment-variables) below).

Prefer an embedded calendar instead? Create a free account at
[calendly.com](https://calendly.com) (or [cal.com](https://cal.com)), set up
an event type, and set `NEXT_PUBLIC_CALENDLY_URL` to your booking page link
instead — that's still supported as a fallback and takes over if
`NEXT_PUBLIC_MYPTHUB_URL` isn't set.

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
