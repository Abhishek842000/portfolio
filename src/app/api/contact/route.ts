import { NextResponse } from "next/server";
import { siteConfig } from "@/content/site-config";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }

  const formId = process.env.FORMSPREE_FORM_ID;
  if (formId) {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "Could not send the message right now." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  if (resendKey && to) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `Portfolio contact from ${name}`,
        text: `${message}\n\n— ${name} <${email}>`,
      }),
    });
    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "Could not send the message right now." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    {
      ok: false,
      error: siteConfig.email
        ? `The contact form is not connected yet. Email ${siteConfig.email} instead.`
        : "The contact form is not connected to email yet. Please reach out via GitHub.",
    },
    { status: 503 },
  );
}
