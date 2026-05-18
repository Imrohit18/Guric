"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  contactFormInitialState,
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";
import { siteConfig } from "@/data/site";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState<
    ContactFormState,
    FormData
  >(submitContactForm, contactFormInitialState);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="relative rounded-2xl border border-guric-cream-dark bg-guric-cream/40 p-5 sm:p-8"
    >
      <h2 className="font-display text-xl font-bold text-guric-green">Send a Message</h2>

      {state.message && (
        <p
          role="alert"
          className={`mt-4 rounded-lg px-4 py-3 text-sm ${
            state.ok
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {state.message}
        </p>
      )}

      <div className="mt-6 space-y-4">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="pointer-events-none absolute h-0 w-0 opacity-0"
          aria-hidden
        />

        <label className="block">
          <span className="text-sm font-medium text-guric-brown">Name</span>
          <input
            type="text"
            name="name"
            required
            disabled={isPending}
            autoComplete="name"
            className="mt-1 w-full rounded-lg border border-guric-cream-dark bg-white px-4 py-2.5 text-base text-guric-brown outline-none focus:border-guric-green focus:ring-2 focus:ring-guric-green/20 disabled:opacity-60"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-guric-brown">Email / Phone</span>
          <input
            type="text"
            name="contact"
            required
            disabled={isPending}
            autoComplete="email tel"
            placeholder="your@email.com or phone number"
            className="mt-1 w-full rounded-lg border border-guric-cream-dark bg-white px-4 py-2.5 text-base text-guric-brown outline-none focus:border-guric-green focus:ring-2 focus:ring-guric-green/20 disabled:opacity-60"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-guric-brown">Message</span>
          <textarea
            name="message"
            rows={4}
            required
            disabled={isPending}
            placeholder="Retail enquiry, bulk order, distribution..."
            className="mt-1 w-full resize-y rounded-lg border border-guric-cream-dark bg-white px-4 py-2.5 text-base text-guric-brown outline-none focus:border-guric-green focus:ring-2 focus:ring-guric-green/20 disabled:opacity-60"
          />
        </label>

        <button
          type="submit"
          disabled={isPending}
          className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-guric-green py-3.5 text-sm font-semibold text-white transition hover:bg-guric-green-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
        >
          {isPending ? "Sending…" : "Send Enquiry"}
        </button>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-guric-brown/60">
        Enquiries are delivered to guricbusiness@gmail.com. You can also call{" "}
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="font-medium text-guric-green hover:underline"
        >
          {siteConfig.phone}
        </a>{" "}
        or use WhatsApp.
      </p>
    </form>
  );
}
