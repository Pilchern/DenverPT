import { siteConfig } from "@/lib/site-config";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <div>
            <p className="font-heading text-sm font-semibold tracking-wide-plus text-cream">
              {siteConfig.businessName.toUpperCase()}
            </p>
            <p className="text-xs text-slate">
              {siteConfig.credential} &middot; {siteConfig.school}
            </p>
          </div>
        </div>
        <p className="text-xs text-slate">
          &copy; {year} {siteConfig.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
