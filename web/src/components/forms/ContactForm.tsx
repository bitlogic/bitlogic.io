"use client";

import { useState } from "react";
import type { Dictionary } from "@/content";
import { SITE } from "@/content/site";
import type { Locale } from "@/lib/routes";
import { submitLead } from "@/lib/submit-lead";

type Status = "idle" | "sending" | "done" | "error";

export default function ContactForm({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.contact.form;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("sending");

    const ok = await submitLead({
      topic: String(data.get("topic") ?? ""),
      email: String(data.get("email") ?? ""),
      name: String(data.get("name") ?? ""),
      organization: String(data.get("organization") ?? ""),
      message: String(data.get("message") ?? ""),
      locale,
    });

    setStatus(ok ? "done" : "error");
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-blue/40 bg-blue-wash p-10"
      >
        <h2 className="display text-h3">{t.successTitle}</h2>
        <p className="opacity-70">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8" noValidate={false}>
      <h2 className="display text-h3" data-rise>
        {t.title}
      </h2>

      {/* Trampa para bots: fuera de pantalla y fuera del orden de tabulación. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" name="name" label={t.name} placeholder={t.namePlaceholder} required />
        <Field
          id="email"
          name="email"
          type="email"
          label={t.email}
          placeholder={t.emailPlaceholder}
          required
        />
      </div>

      <Field
        id="organization"
        name="organization"
        label={t.organization}
        placeholder={t.organizationPlaceholder}
      />

      <div className="flex flex-col gap-3">
        <span className="eyebrow opacity-45">{t.topic}</span>
        <div className="flex flex-wrap gap-2">
          {t.topics.map((topic, i) => (
            <label
              key={topic}
              className="cursor-pointer rounded-full border hairline px-4 py-2 text-micro opacity-70 transition-[border-color,opacity,background-color] has-[:checked]:border-blue has-[:checked]:bg-blue has-[:checked]:text-cream has-[:checked]:opacity-100 hover:opacity-100"
            >
              <input
                type="radio"
                name="topic"
                value={topic}
                defaultChecked={i === 0}
                className="sr-only"
              />
              {topic}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="eyebrow opacity-45">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={t.messagePlaceholder}
          className="resize-y border-b hairline bg-transparent pb-3 pt-2 outline-none transition-colors placeholder:opacity-35 focus:border-blue"
        />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-micro font-medium text-cream transition-colors duration-300 hover:bg-blue disabled:opacity-50"
        >
          {status === "sending" ? t.submitting : t.submit}
        </button>
        <p className="max-w-[32ch] text-[0.75rem] opacity-45">{t.consent}</p>
      </div>

      {status === "error" && (
        <p role="alert" className="text-micro text-blue">
          {t.errorBody}{" "}
          <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">
            {SITE.email}
          </a>
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow opacity-45">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={type === "email" ? "email" : name === "name" ? "name" : "organization"}
        className="border-b hairline bg-transparent pb-3 pt-2 outline-none transition-colors placeholder:opacity-35 focus:border-blue"
      />
    </div>
  );
}
