import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site";

export interface EnquiryPayload {
  name: string;
  contact: string;
  message: string;
}

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error(
      "Email is not configured. Set SMTP_USER and SMTP_PASS in your environment variables.",
    );
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass },
  });
}

export async function sendEnquiryEmail(payload: EnquiryPayload) {
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;

  const transporter = getTransporter();

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

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
