import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Results" },
  { href: "#booking", label: "Book" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-navy/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#top" className="flex items-center gap-3">
          <Logo size="sm" />
          <span className="font-heading text-sm font-semibold tracking-wide-plus text-cream">
            DENVER FRAHM
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
        <a
          href="#booking"
          className="font-heading rounded-sm border border-gold px-4 py-2 text-xs font-semibold tracking-wide-plus text-gold transition-all duration-300 hover:bg-gold hover:text-navy hover:shadow-[0_0_20px_-4px_rgba(201,166,104,0.7)]"
        >
          BOOK NOW
        </a>
      </div>
    </header>
  );
}
