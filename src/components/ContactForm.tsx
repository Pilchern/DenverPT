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
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full rounded-sm border border-gold/30 bg-navy-light px-4 py-3 text-cream placeholder:text-slate focus:border-gold focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded-sm border border-gold/30 bg-navy-light px-4 py-3 text-cream placeholder:text-slate focus:border-gold focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-phone" className="sr-only">
          Phone (optional)
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          className="w-full rounded-sm border border-gold/30 bg-navy-light px-4 py-3 text-cream placeholder:text-slate focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell Denver about your goals"
          rows={4}
          required
          className="w-full rounded-sm border border-gold/30 bg-navy-light px-4 py-3 text-cream placeholder:text-slate focus:border-gold focus:outline-none"
        />
      </div>
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
