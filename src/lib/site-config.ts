export const siteConfig = {
  name: "Denver Frahm",
  credential: "NASM-CPT",
  tagline: "Certified Personal Trainer",
  focus: "Strength & Conditioning",
  phone: "262-321-8806",
  phoneHref: "tel:+12623218806",
  instagramHandle: "@DenverSkyco",
  instagramUrl: "https://instagram.com/DenverSkyco",
  location: "Kenosha & Trevor, WI",
  school: "KSP Strength & Conditioning",
  gradYear: "Spring 2027",
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
