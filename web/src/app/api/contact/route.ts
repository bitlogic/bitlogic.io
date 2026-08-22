import { NextResponse } from "next/server";

export const runtime = "edge";

/**
 * Recepción de leads.
 *
 * No manda mails desde acá: reenvía el payload a `CONTACT_WEBHOOK_URL`, que
 * puede ser un incoming webhook de Slack, un endpoint de HubSpot o una función
 * propia. Si la variable no está configurada devolvemos 501 a propósito, para
 * que el formulario muestre el mail directo en vez de fingir que envió.
 */

const MAX_FIELD = 4000;

type Payload = {
  topic?: unknown;
  email?: unknown;
  name?: unknown;
  organization?: unknown;
  message?: unknown;
  locale?: unknown;
  /** Campo trampa: los bots lo completan, las personas no lo ven. */
  website?: unknown;
};

function str(value: unknown, max = 300): string {
  return typeof value === "string" ? value.slice(0, max).trim() : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: respondemos 200 para no darle señal al bot.
  if (str(body.website)) return NextResponse.json({ ok: true });

  const email = str(body.email, 320);
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const lead = {
    topic: str(body.topic) || "general",
    email,
    name: str(body.name),
    organization: str(body.organization),
    message: str(body.message, MAX_FIELD),
    locale: str(body.locale, 5) || "es",
    receivedAt: new Date().toISOString(),
    source: "bitlogic.io",
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[contact] CONTACT_WEBHOOK_URL sin configurar — lead no reenviado", lead.email);
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      console.error("[contact] webhook respondió", res.status);
      return NextResponse.json({ error: "upstream" }, { status: 502 });
    }
  } catch (error) {
    console.error("[contact] webhook inalcanzable", error);
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
