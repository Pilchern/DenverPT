"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const hasKey = Boolean(siteConfig.web3formsKey);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!hasKey) return;

    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", siteConfig.web3formsKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!hasKey) {
    return (
      <div className="rounded-sm border border-gold/25 bg-navy-light px-6 py-8 text-center text-sm text-slate">
        The contact form isn&apos;t connected yet. Reach out by phone or
        Instagram below in the meantime — see README.md to finish setup.
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold/40 bg-navy-light px-6 py-8 text-center text-cream">
        Thanks for reaching out! Denver will get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="rounded-sm border border-gold/30 bg-navy-light px-4 py-3 text-cream placeholder:text-slate focus:border-gold focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded-sm border border-gold/30 bg-navy-light px-4 py-3 text-cream placeholder:text-slate focus:border-gold focus:outline-none"
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        className="w-full rounded-sm border border-gold/30 bg-navy-light px-4 py-3 text-cream placeholder:text-slate focus:border-gold focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Tell Denver about your goals"
        rows={4}
        required
        className="w-full rounded-sm border border-gold/30 bg-navy-light px-4 py-3 text-cream placeholder:text-slate focus:border-gold focus:outline-none"
      />
      <input type="hidden" name="subject" value="New inquiry from denverfrahm.com" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="font-heading w-full rounded-sm bg-gold px-6 py-3 text-sm font-semibold tracking-wide-plus text-navy transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again or call/text instead.
        </p>
      )}
    </form>
  );
}
