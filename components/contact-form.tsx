"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const fieldClass =
  "mt-2 w-full border border-line bg-surface px-4 py-3 text-foreground";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <label className="block">
        <span className="text-xs uppercase tracking-[0.16em] text-muted">Name</span>
        <input
          className={fieldClass}
          name="name"
          type="text"
          required
          autoComplete="name"
        />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[0.16em] text-muted">
          Email address
        </span>
        <input
          className={fieldClass}
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[0.16em] text-muted">Message</span>
        <textarea
          className={`${fieldClass} min-h-40 resize-y`}
          name="message"
          required
          rows={6}
        />
      </label>
      <button
        type="submit"
        className="inline-flex border border-accent bg-accent px-5 py-3 text-sm tracking-wide text-[#1c1610] transition-colors hover:bg-transparent hover:text-accent"
      >
        Send message
      </button>
      <p className="text-sm leading-relaxed text-muted">
        This opens your email app with the message addressed to {site.name}.
      </p>
      {opened ? (
        <p role="status" className="text-sm text-foreground">
          Your email app should open with this message.
        </p>
      ) : null}
    </form>
  );
}
