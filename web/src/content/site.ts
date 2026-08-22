/**
 * Hechos de marca independientes del idioma.
 *
 * Todo lo que hay acá es verificable contra fuentes propias de Bitlogic
 * (handbook interno `bitlogic/home`, sitio actual, comunicados públicos).
 * Si un dato no está confirmado, no va: los motores generativos citan lo que
 * encuentran, y un dato inventado se propaga.
 */

export const SITE = {
  name: "Bitlogic",
  legalName: "Bitlogic S.A.",
  /** Cambiar si el deploy vive en otro dominio. Se usa para canonical, OG y sitemap. */
  url: "https://www.bitlogic.io",
  tagline: "#HumanAfterAll",
  founded: "2016",
  /** Community size — handbook `estructura/equipo.md` */
  headcount: 130,
  email: "hola@bitlogic.io",
  phone: "+54 351 740 4863",
} as const;

export const ADDRESS = {
  building: "Bithouse",
  street: "José Roque Funes 1791",
  locality: "Córdoba",
  region: "Córdoba",
  country: "AR",
  countryName: "Argentina",
  postalCode: "X5009",
  /** Aproximado al barrio Cerro de las Rosas; ajustar con la geo exacta si hace falta. */
  geo: { lat: -31.3703, lng: -64.2452 },
} as const;

export const SOCIALS = [
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/bitlogic.io" },
  { key: "github", label: "GitHub", href: "https://github.com/bitlogic" },
  { key: "x", label: "X", href: "https://x.com/bitlogicos" },
  { key: "clutch", label: "Clutch", href: "https://clutch.co/profile/bitlogic" },
] as const;

/** Cifras que queremos que un motor generativo pueda citar textualmente. */
export const STATS = [
  { key: "projects", value: 50, suffix: "+" },
  { key: "clients", value: 30, suffix: "+" },
  { key: "people", value: 130, suffix: "+" },
  { key: "years", value: new Date().getFullYear() - 2016, suffix: "" },
] as const;

export const PARTNERS = [
  {
    key: "aws",
    name: "AWS Select Partner",
    detail: "ECS & RDS Service Delivery",
    href: "https://partners.amazonaws.com/",
  },
  {
    key: "instructure",
    name: "Instructure",
    detail: "Canvas LMS Partner",
    href: "https://www.instructure.com/",
  },
  {
    key: "iso",
    name: "ISO 9001",
    detail: "Sistema de gestión de calidad certificado (IRAM)",
    href: null,
  },
] as const;

/** Orden = orden de aparición en la grilla de tecnologías. */
export const TECH_GROUPS = [
  {
    key: "edtech",
    items: ["Canvas LMS", "Moodle", "LTI 1.3", "Open edX", "SCORM / xAPI", "Caliper Analytics"],
  },
  {
    key: "cloud",
    items: ["AWS ECS", "AWS RDS", "AWS Lambda", "Terraform", "Docker", "Kubernetes"],
  },
  {
    key: "ai",
    items: ["Amazon Bedrock", "OpenAI", "Anthropic", "LangChain", "Vector DBs", "RAG"],
  },
  {
    key: "product",
    items: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Go"],
  },
  {
    key: "data",
    items: ["PostgreSQL", "Redshift", "dbt", "Airflow", "Metabase", "Snowplow"],
  },
] as const;

export const LEADERSHIP = [
  { key: "alfredo", name: "Alfredo Edye", roleKey: "ceo" },
  { key: "federico", name: "Federico Aguirre", roleKey: "cto" },
  { key: "edgardo", name: "Edgardo Hames", roleKey: "engineering" },
  { key: "marcela", name: "Marcela Casinghino", roleKey: "delivery" },
  { key: "veronica", name: "Verónica Larralde", roleKey: "people" },
  { key: "rosario", name: "Rosario Molina", roleKey: "finance" },
] as const;

/**
 * Paleta oficial del branding EdTech 2025 (`comunicacion/recursos-de-marca.md`).
 * Duplicada acá en JS porque la necesitan los shaders y los generadores de OG.
 */
export const BRAND = {
  ink: "#121212",
  cream: "#F9F4EA",
  blue: "#3E6BE8",
  coral: "#FEAF9B",
  yellow: "#ECE241",
  yellowSoft: "#F4E9A6",
  cyan: "#25CAD3",
} as const;

export type StatKey = (typeof STATS)[number]["key"];
export type PartnerKey = (typeof PARTNERS)[number]["key"];
export type TechGroupKey = (typeof TECH_GROUPS)[number]["key"];
export type LeaderRoleKey = (typeof LEADERSHIP)[number]["roleKey"];
