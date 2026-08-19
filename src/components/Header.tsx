"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon } from "./icons";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonials", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-navy/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo size="sm" />
          <span className="font-heading text-sm font-semibold tracking-wide-plus text-cream">
            {siteConfig.name.toUpperCase()}
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading group relative text-sm tracking-wide-plus text-slate transition-colors hover:text-gold"
            >
              {link.label.toUpperCase()}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="font-heading rounded-sm border border-gold px-3 py-2 text-xs font-semibold tracking-wide-plus text-gold transition-all duration-300 hover:bg-gold hover:text-navy hover:shadow-[0_0_20px_-4px_rgba(201,166,104,0.7)] sm:px-4"
          >
            BOOK NOW
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-sm border border-gold/30 p-2 text-gold md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col border-t border-gold/20 bg-navy px-6 py-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading border-b border-gold/10 py-3 text-sm tracking-wide-plus text-cream/90 last:border-none"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="font-heading mt-4 rounded-sm bg-gold px-4 py-3 text-center text-sm font-semibold tracking-wide-plus text-navy"
          >
            BOOK NOW
          </a>
        </nav>
      )}
    </header>
  );
}
