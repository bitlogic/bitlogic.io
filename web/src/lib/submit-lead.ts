import type { Locale } from "./routes";

export type Lead = {
  topic: string;
  email: string;
  name?: string;
  organization?: string;
  message?: string;
  locale: Locale;
};

/**
 * Envía un lead a `/api/contact`.
 *
 * El endpoint reenvía a `CONTACT_WEBHOOK_URL` (Slack, HubSpot, un Lambda, lo
 * que marketing elija). Mientras esa variable no esté configurada devuelve 501
 * y el formulario muestra el mail directo — nunca se traga un mensaje en
 * silencio, que es lo peor que puede hacer un formulario de contacto.
 */
export async function submitLead(lead: Lead): Promise<boolean> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(lead),
    });
    return res.ok;
  } catch {
    return false;
  }
}
