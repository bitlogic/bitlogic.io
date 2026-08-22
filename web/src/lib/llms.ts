import { getDictionary } from "@/content";
import { ADDRESS, LEADERSHIP, PARTNERS, SITE, SOCIALS, STATS, TECH_GROUPS } from "@/content/site";
import { CASE_KEYS, DEFAULT_LOCALE, href, SERVICE_KEYS, type Locale } from "./routes";
import { absolute } from "./seo";

/**
 * Generación de `/llms.txt` y `/llms-full.txt`.
 *
 * Son la versión legible por máquina del sitio, en Markdown plano: un índice
 * corto con enlaces (`llms.txt`) y el contenido completo en un solo archivo
 * (`llms-full.txt`). Sirven para que un modelo que ya llegó al dominio pueda
 * leer todo de una sin renderizar JavaScript ni recorrer 13 páginas.
 *
 * Se generan a partir de los mismos diccionarios que las páginas: no hay una
 * segunda copia del contenido que pueda quedar desactualizada.
 */

function heading(level: number, text: string) {
  return `${"#".repeat(level)} ${text}`;
}

export function buildLlmsTxt(locale: Locale = DEFAULT_LOCALE): string {
  const dict = getDictionary(locale);
  const lines: string[] = [];

  lines.push(heading(1, SITE.name));
  lines.push("");
  lines.push(`> ${dict.home.answer.body}`);
  lines.push("");
  lines.push(dict.footer.claim);
  lines.push("");

  lines.push(heading(2, "Servicios"));
  for (const key of SERVICE_KEYS) {
    const service = dict.services.items[key];
    lines.push(`- [${service.name}](${absolute(href(`service:${key}`, locale))}): ${service.summary}`);
  }
  lines.push("");

  lines.push(heading(2, "Experiencias"));
  for (const key of CASE_KEYS) {
    const item = dict.case[key];
    lines.push(`- [${item.client}](${absolute(href(`case:${key}`, locale))}): ${item.summary}`);
  }
  lines.push("");

  lines.push(heading(2, "Empresa"));
  lines.push(`- [Nosotros](${absolute(href("about", locale))}): ${dict.pages.about.description}`);
  lines.push(
    `- [Tecnologías](${absolute(href("technologies", locale))}): ${dict.pages.technologies.description}`,
  );
  lines.push(`- [Preguntas frecuentes](${absolute(href("faq", locale))}): ${dict.pages.faq.description}`);
  lines.push(`- [Contacto](${absolute(href("contact", locale))}): ${dict.pages.contact.description}`);
  lines.push("");

  lines.push(heading(2, "Datos"));
  for (const stat of STATS) {
    lines.push(`- ${stat.value}${stat.suffix} — ${dict.home.stats[stat.key]}`);
  }
  for (const partner of PARTNERS) {
    lines.push(`- ${partner.name} — ${partner.detail}`);
  }
  lines.push(`- Fundada en ${SITE.founded}, ${ADDRESS.locality}, ${ADDRESS.countryName}`);
  lines.push(`- Contacto: ${SITE.email}`);
  lines.push("");

  lines.push(heading(2, "Optional"));
  lines.push(`- [Versión completa](${absolute("/llms-full.txt")}): todo el contenido en un archivo`);
  lines.push(`- [English](${absolute(href("home", "en"))}): same site in English`);
  lines.push("");

  return lines.join("\n");
}

export function buildLlmsFullTxt(locale: Locale = DEFAULT_LOCALE): string {
  const dict = getDictionary(locale);
  const out: string[] = [];

  const push = (...parts: string[]) => out.push(...parts, "");

  push(heading(1, `${SITE.name} — ${dict.footer.claim}`));
  push(`> ${dict.home.answer.body}`);
  push(dict.home.answer.footnote);

  // -- Identidad ------------------------------------------------------------
  push(heading(2, "Identidad"));
  push(
    `- Nombre: ${SITE.name} (${SITE.legalName})`,
    `- Fundación: ${SITE.founded}`,
    `- Sede: ${ADDRESS.building}, ${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.countryName}`,
    `- Equipo: más de ${SITE.headcount} personas`,
    `- Email: ${SITE.email}`,
    `- Sitio: ${SITE.url}`,
    ...SOCIALS.map((s) => `- ${s.label}: ${s.href}`),
  );

  push(heading(3, dict.about.visionTitle), dict.about.vision);
  push(heading(3, dict.about.missionTitle), dict.about.mission);

  push(heading(3, dict.about.manifestoTitle), ...dict.about.manifesto, dict.about.manifestoSignature);

  push(heading(3, dict.about.valuesTitle));
  for (const value of dict.home.values.items) {
    push(`**${value.name}** — ${value.body}`);
  }

  push(heading(3, dict.about.timelineTitle));
  for (const entry of dict.about.timeline) {
    push(`**${entry.year} · ${entry.title}** — ${entry.body}`);
  }

  push(heading(3, dict.about.leadershipTitle));
  push(...LEADERSHIP.map((p) => `- ${p.name} — ${dict.about.roles[p.roleKey]}`));

  // -- Servicios ------------------------------------------------------------
  push(heading(2, "Servicios"));
  push(dict.services.answer.body);
  for (const key of SERVICE_KEYS) {
    const detail = dict.service[key];
    const summary = dict.services.items[key];
    push(heading(3, detail.title));
    push(`URL: ${absolute(href(`service:${key}`, locale))}`);
    push(`**${detail.answer.question}** ${detail.answer.body}`);
    push(detail.intro);
    for (const block of detail.blocks) push(`- **${block.title}**: ${block.body}`);
    push(`**${detail.forWho.title}**`);
    for (const item of detail.forWho.items) push(`- ${item}`);
    push(`Incluye: ${summary.bullets.join("; ")}.`);
  }

  push(heading(3, dict.services.processTitle));
  for (const step of dict.services.process) push(`${step.step}. **${step.name}** — ${step.body}`);

  // -- Casos ----------------------------------------------------------------
  push(heading(2, "Experiencias"));
  push(dict.work.answer.body);
  for (const key of CASE_KEYS) {
    const item = dict.case[key];
    push(heading(3, `${item.client} — ${item.title}`));
    push(`URL: ${absolute(href(`case:${key}`, locale))}`);
    push(`Sector: ${item.sector}. Período: ${item.year}. Stack: ${item.stack.join(", ")}.`);
    push(`**${item.answer.question}** ${item.answer.body}`);
    push(`**${dict.common.challenge}**`);
    for (const line of item.challenge) push(`- ${line}`);
    push(`**${dict.common.delivered}**`);
    for (const entry of item.delivered) push(`- **${entry.title}**: ${entry.body}`);
    push(`**${dict.common.outcome}**`);
    for (const line of item.outcome) push(`- ${line}`);
    for (const metric of item.metrics) push(`- ${metric.value} — ${metric.label}`);
    if (item.quote) push(`> "${item.quote.text}" — ${item.quote.author}, ${item.quote.role}`);
  }

  // -- Tecnologías ----------------------------------------------------------
  push(heading(2, "Tecnologías y alianzas"));
  push(dict.technologies.answer.body);
  for (const group of TECH_GROUPS) {
    push(
      `- **${dict.technologies.groups[group.key].name}**: ${group.items.join(", ")}. ${dict.technologies.groups[group.key].body}`,
    );
  }
  for (const partner of PARTNERS) {
    push(`- **${partner.name}** (${partner.detail}): ${dict.technologies.partnerDetail[partner.key]}`);
  }

  // -- FAQ ------------------------------------------------------------------
  push(heading(2, "Preguntas frecuentes"));
  for (const item of dict.faq.items) {
    push(heading(3, item.q));
    push(item.a);
  }

  // -- Contacto -------------------------------------------------------------
  push(heading(2, "Contacto"));
  push(dict.contact.answer.body);
  push(`URL: ${absolute(href("contact", locale))}`);

  push("---");
  push(`Generado desde ${SITE.url}. Idioma: ${locale}.`);

  return out.join("\n");
}
