"use client";

import { useState } from "react";
import { submitLead } from "@/lib/submit-lead";
import type { Locale } from "@/lib/routes";

export default function NewsletterForm({
  placeholder,
  cta,
  successLabel,
  errorLabel,
  locale,
}: {
  placeholder: string;
  cta: string;
  successLabel: string;
  errorLabel: string;
  locale: Locale;
}) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    if (typeof email !== "string" || !email.includes("@")) return;

    setState("sending");
    const ok = await submitLead({ topic: "newsletter", email, locale });
    setState(ok ? "done" : "error");
  }

  if (state === "done") {
    return (
      <p className="mt-5 text-micro text-yellow" role="status">
        {successLabel}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-5">
      <div className="flex items-center gap-2 border-b border-cream/25 pb-2 focus-within:border-cream/70">
        <label htmlFor="newsletter-email" className="sr-only">
          {placeholder}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder={placeholder}
          className="w-full bg-transparent text-micro outline-none placeholder:text-cream/35"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="eyebrow shrink-0 opacity-70 transition-opacity hover:opacity-100 disabled:opacity-40"
        >
          {cta}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-3 text-micro text-coral" role="alert">
          {errorLabel}
        </p>
      )}
    </form>
  );
}
