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

const title = `Personal Trainer in Kenosha, WI & Lake County, IL | ${siteConfig.name}`;
const description = `NASM Certified Personal Trainer offering 1-on-1 training in Kenosha, WI & Lake County, IL and online coaching nationwide. Book a free consult with ${siteConfig.name}.`;

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
  name: `${siteConfig.name} Training`,
  url: siteUrl,
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  areaServed: [
    { "@type": "City", name: "Kenosha, WI" },
    { "@type": "AdministrativeArea", name: "Lake County, IL" },
  ],
  sameAs: [siteConfig.instagramUrl],
  founder: {
    "@type": "Person",
    name: siteConfig.name,
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
