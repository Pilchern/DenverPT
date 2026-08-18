import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denver Frahm | NASM Certified Personal Trainer",
  description:
    "1-on-1 personal training and online coaching with Denver Frahm, NASM Certified Personal Trainer serving the Kenosha & Trevor, WI area and online nationwide.",
  openGraph: {
    title: "Denver Frahm | NASM Certified Personal Trainer",
    description:
      "1-on-1 personal training and online coaching with Denver Frahm, NASM-CPT.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-cream">
        {children}
      </body>
    </html>
  );
}
