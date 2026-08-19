import { siteConfig } from "@/lib/site-config";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dims = {
    sm: { box: "h-9 w-9", text: "text-sm" },
    md: { box: "h-14 w-14", text: "text-xl" },
    lg: { box: "h-24 w-24", text: "text-4xl" },
  }[size];

  return (
    <div
      className={`${dims.box} shrink-0 rounded-full border border-gold flex items-center justify-center shadow-[0_0_18px_-2px_rgba(201,166,104,0.55)]`}
    >
      <span className={`font-heading font-bold text-cream ${dims.text}`}>
        {siteConfig.initials}
      </span>
    </div>
  );
}
