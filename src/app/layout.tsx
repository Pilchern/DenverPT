import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, siteUrl } from "@/lib/site-config";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

// Uses the abbreviated area so the title stays under ~60 characters in
// search results; the description spells the region out in full.
const title = `Personal Trainer in ${siteConfig.locationShort} | ${siteConfig.businessName}`;
const description = `NASM Certified Personal Trainer offering 1-on-1 training across southeast Wisconsin & northeast Illinois, and online coaching nationwide. Book a free consult with ${siteConfig.trainerName}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.businessName,
  url: siteUrl,
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  // The two regions are the actual service area; Kenosha and Trevor stay
  // listed as specific anchors inside it, since that's his home base and
  // city-level entries are what local search matches on.
  areaServed: [
    { "@type": "AdministrativeArea", name: "Southeast Wisconsin" },
    { "@type": "AdministrativeArea", name: "Northeast Illinois" },
    { "@type": "City", name: "Kenosha, WI" },
    { "@type": "City", name: "Trevor, WI" },
  ],
  sameAs: [siteConfig.instagramUrl],
  founder: {
    "@type": "Person",
    name: siteConfig.trainerName,
    jobTitle: siteConfig.tagline,
    hasCredential: "NASM Certified Personal Trainer (NASM-CPT)",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <a
          href="#main"
          className="font-heading sr-only rounded-sm bg-gold px-4 py-2 text-sm font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
