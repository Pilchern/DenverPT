// Update if a custom domain gets attached in Vercel — used for canonical
// URLs, Open Graph tags, and structured data.
export const siteUrl = "https://denver-frahm-training.vercel.app";

export const siteConfig = {
  // Business/brand name — matches his Instagram (@DenverSkyco) and My PT
  // Hub page rather than his legal name (Denver Frahm).
  name: "Denver Sky",
  initials: "DS",
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
  // In-person service area, kept broad on purpose: southeast Wisconsin down
  // through northeast Illinois, rather than a short list of home-base cities.
  location: "Southeast Wisconsin & Northeast Illinois",
  // Same area abbreviated, for spots where the full string wraps badly — the
  // stats strip and the Open Graph image. Keep the two in sync.
  locationShort: "SE Wisconsin & NE Illinois",
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
  // Denver's client-management app — this is his real public page there.
  // My PT Hub doesn't support an embedded calendar, only a link to their
  // hosted page (confirmed via their own support docs), so Booking shows
  // a button rather than an iframe.
  myPtHubUrl: "https://skyfitness1.mypthub.net/p/235253",
  // Fallback if Denver ever wants an embedded calendar instead of/alongside
  // My PT Hub — create a free account at calendly.com or cal.com and set
  // this. Only used if myPtHubUrl above is ever cleared out.
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  // Free key from https://web3forms.com — lets the contact form send email
  // straight to Denver's inbox with no backend. See README.md.
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
};
