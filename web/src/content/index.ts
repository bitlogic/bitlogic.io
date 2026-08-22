import type { Locale } from "@/lib/routes";
import es, { type Dictionary } from "./es";
import en from "./en";

const DICTIONARIES: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };
export * from "./site";
