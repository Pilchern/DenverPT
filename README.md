# Denver Frahm Training — Website

A one-page site for Denver Frahm, NASM Certified Personal Trainer, built with
Next.js + Tailwind CSS. Matches the navy/gold branding from his business
cards.

## What's on the site

- Hero, About/Bio, Services & Pricing, Testimonials, Booking, and Contact
  sections, all on one scrolling page.
- A booking section that embeds a Calendly (or Cal.com) calendar once it's
  configured — until then it shows a "call/text/DM" fallback.
- A contact form that emails Denver directly via [Web3Forms](https://web3forms.com)
  (free, no backend server needed) — until it's configured it shows a
  fallback message and still displays his phone/Instagram.

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
| Phone, Instagram, location, credentials | `src/lib/site-config.ts` |
| Bio / about text | `src/components/About.tsx` |
| Pricing & package details | `src/components/Services.tsx` |
| Testimonials | `src/components/Testimonials.tsx` |

Pricing and testimonials are currently **placeholders** — update them with
Denver's real rates and, once he has some, real client quotes.

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
