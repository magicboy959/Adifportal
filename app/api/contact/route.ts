import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/db";

type ContactPayload = {
  name?: unknown;
  organization?: unknown;
  email?: unknown;
  interest?: unknown;
  message?: unknown;
  locale?: unknown;
};

type ContactFormData = {
  name: string;
  organization: string;
  email: string;
  interest: string;
  message: string;
  locale: string;
};

const recipient =
  process.env.CONTACT_TO_EMAIL ||
  process.env.CONTACT_RECIPIENT ||
  process.env.SMTP_USER ||
  "info@adiforganization.org";

function normalizeString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePayload(payload: ContactPayload): ContactFormData | string {
  const name = normalizeString(payload.name);
  const email = normalizeString(payload.email);
  const message = normalizeString(payload.message);
  const interest = normalizeString(payload.interest);
  const organization = normalizeString(payload.organization);
  const locale = normalizeString(payload.locale);

  if (!name) {
    return "Name is required.";
  }

  if (!email) {
    return "Email is required.";
  }

  if (!isEmail(email)) {
    return "Email is not valid.";
  }

  if (!message) {
    return "Message is required.";
  }

  return {
    name,
    email,
    organization,
    interest,
    message,
    locale
  };
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP configuration is missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD or SMTP_PASS."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    }
  });
}

async function sendEmailMessage(emailBody: ReturnType<typeof createEmailBody>, replyTo: string) {
  const apiUrl = process.env.SMTP_API_URL;
  const apiKey = process.env.SMTP_API_KEY;

  if (apiUrl && apiKey) {
    const from = process.env.SMTP_FROM || `ADIF Website <${process.env.SMTP_USER || 'no-reply@adiforganization.org'}>`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from,
        to: recipient,
        subject: emailBody.subject,
        text: emailBody.text,
        html: emailBody.html,
        replyTo
      })
    });

    if (!response.ok) {
      const bodyText = await response.text().catch(() => '');
      throw new Error(`Email API request failed: ${response.status} ${response.statusText} ${bodyText}`);
    }

    return;
  }

  const transporter = getTransporter();
  await transporter.sendMail({
    from: `ADIF Website <${process.env.SMTP_USER}>`,
    to: recipient,
    subject: emailBody.subject,
    text: emailBody.text,
    html: emailBody.html,
    replyTo
  });
}

function createEmailBody(payload: ContactFormData) {
  const messageList = [
    `<p><strong>Name:</strong> ${payload.name}</p>`,
    payload.organization ? `<p><strong>Organization:</strong> ${payload.organization}</p>` : "",
    `<p><strong>Email:</strong> ${payload.email}</p>`,
    payload.interest ? `<p><strong>Interest:</strong> ${payload.interest}</p>` : "",
    `<p><strong>Message:</strong></p><p>${payload.message.replace(/\n/g, "<br />")}</p>`
  ]
    .filter(Boolean)
    .join("\n");

  return {
    subject: "New ADIF contact inquiry",
    text: [
      `Name: ${payload.name}`,
      payload.organization ? `Organization: ${payload.organization}` : "",
      `Email: ${payload.email}`,
      payload.interest ? `Interest: ${payload.interest}` : "",
      "Message:",
      payload.message
    ]
      .filter(Boolean)
      .join("\n\n"),
    html: `
      <div>
        ${messageList}
        <p><em>Submitted from ${payload.locale === "ar" ? "Arabic" : "English"} contact form.</em></p>
      </div>
    `
  };
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const validation = validatePayload(payload);

  if (typeof validation === "string") {
    return NextResponse.json({ error: validation }, { status: 400 });
  }

  try {
    const emailBody = createEmailBody(validation);

    await prisma.contactInquiry.create({
      data: {
        name: validation.name,
        email: validation.email,
        organization: validation.organization || undefined,
        interest: validation.interest || undefined,
        message: validation.message,
        locale: validation.locale || "en"
      }
    });

    await sendEmailMessage(emailBody, validation.email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}
