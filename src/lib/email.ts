import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site";
import type { EnquiryPayload } from "@/lib/email-types";

export type { EnquiryPayload } from "@/lib/email-types";

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendViaSmtp(payload: EnquiryPayload) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("SMTP credentials are not configured.");
  }

  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.SMTP_FROM ?? user;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass },
  });

  const replyTo = payload.contact.includes("@") ? payload.contact : undefined;

  const text = [
    "New enquiry from the Guric website",
    "",
    `Name: ${payload.name}`,
    `Contact: ${payload.contact}`,
    "",
    "Message:",
    payload.message,
    "",
    `— Sent via ${siteConfig.url}/contact`,
  ].join("\n");

  const html = `
    <div style="font-family: Georgia, serif; max-width: 560px; color: #4a3728;">
      <h2 style="color: #3b5323; margin-bottom: 8px;">New enquiry — Guric website</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
        <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td><td>${escapeHtml(payload.name)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Contact</td><td>${escapeHtml(payload.contact)}</td></tr>
      </table>
      <p style="font-weight: bold; margin-bottom: 8px;">Message</p>
      <p style="line-height: 1.6; white-space: pre-wrap; background: #f5f1e6; padding: 16px; border-radius: 8px;">${escapeHtml(payload.message)}</p>
      <p style="margin-top: 24px; font-size: 12px; color: #888;">Sent from <a href="${siteConfig.url}/contact">${siteConfig.url}/contact</a></p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Guric Website" <${from}>`,
    to,
    replyTo,
    subject: `New enquiry from ${payload.name} — Guric`,
    text,
    html,
  });
}

async function sendViaWeb3Forms(payload: EnquiryPayload) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("Web3Forms access key is not configured.");
  }

  const isEmail = payload.contact.includes("@");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New enquiry from ${payload.name} — Guric`,
      from_name: payload.name,
      name: payload.name,
      email: isEmail ? payload.contact : siteConfig.email,
      phone: isEmail ? undefined : payload.contact,
      message: payload.message,
      botcheck: false,
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Failed to send enquiry via Web3Forms.");
  }
}

export async function sendEnquiryEmail(payload: EnquiryPayload) {
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    await sendViaSmtp(payload);
    return;
  }

  if (process.env.WEB3FORMS_ACCESS_KEY) {
    await sendViaWeb3Forms(payload);
    return;
  }

  throw new Error(
    "Email is not configured. Set SMTP_USER/SMTP_PASS or WEB3FORMS_ACCESS_KEY in environment variables.",
  );
}
