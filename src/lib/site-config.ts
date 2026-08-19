// Update if a custom domain gets attached in Vercel — used for canonical
// URLs, Open Graph tags, and structured data.
export const siteUrl = "https://denver-frahm-training.vercel.app";

export const siteConfig = {
  name: "Denver Frahm",
  credential: "NASM-CPT",
  tagline: "Certified Personal Trainer",
  focus: "Strength & Conditioning",
  phone: "262-321-8806",
  phoneHref: "tel:+12623218806",
  // A tel: link only ever offers "Call" — it can't also offer texting, so
  // anywhere the copy says "call or text" needs this separate sms: link.
  smsHref: "sms:+12623218806",
  instagramHandle: "@DenverSkyco",
  instagramUrl: "https://instagram.com/DenverSkyco",
  location: "Kenosha & Trevor, WI",
  // "KSP" on his business card is shorthand for this degree, not a program
  // name — he's still finishing it (see gradYear), not holding it yet.
  school: "B.S. Kinesiology & Sport Performance",
  university: "UW-Parkside",
  gradYear: "Spring 2027",
  // Nutrition certification bundled with his NASM course — in progress as of
  // launch. Update the label (and anything that says "in progress") once he
  // finishes and gets his certificate.
  nutritionCredential: "Nutrition Coach",
  nutritionStatus: "Certification in progress",
  // Optional: add a public contact email here once Denver has one he wants
  // listed. Leave blank to hide the email link.
  email: "",
  // Set this once Denver creates a free Calendly/Cal.com account and publishes
  // his booking page. Until then the Booking section falls back to
  // call/text/DM. See README.md for setup steps.
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  // Free key from https://web3forms.com — lets the contact form send email
  // straight to Denver's inbox with no backend. See README.md.
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
};
