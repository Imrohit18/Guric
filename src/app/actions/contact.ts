"use server";

import { sendEnquiryEmail } from "@/lib/email";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

const initialState: ContactFormState = { ok: false, message: "" };

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot — bots fill hidden fields
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return { ok: true, message: "Thank you! We will get back to you shortly." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const contact = String(formData.get("contact") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2) {
    return { ok: false, message: "Please enter your name." };
  }
  if (contact.length < 5) {
    return { ok: false, message: "Please enter a valid email or phone number." };
  }
  if (message.length < 10) {
    return { ok: false, message: "Please enter a message (at least 10 characters)." };
  }
  if (name.length > 100 || contact.length > 120 || message.length > 5000) {
    return { ok: false, message: "Message is too long. Please shorten and try again." };
  }

  try {
    await sendEnquiryEmail({ name, contact, message });
    return {
      ok: true,
      message: "Thank you! Your enquiry has been sent. We will respond soon.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      ok: false,
      message:
        "Could not send your enquiry right now. Please email us directly at guricbusiness@gmail.com or call +91 9890323186.",
    };
  }
}

export { initialState as contactFormInitialState };
