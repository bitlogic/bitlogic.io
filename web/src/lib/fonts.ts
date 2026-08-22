import { Instrument_Serif, Inter, JetBrains_Mono, Poppins } from "next/font/google";

/**
 * El brandbook pide Apple Garamond (display) y Plain (texto). Las dos son
 * licenciadas y no se pueden servir desde acá, así que usamos las sustitutas
 * libres más cercanas en esqueleto, color de página y contraste:
 *
 *   Apple Garamond  →  Instrument Serif  (garalda de contraste alto, editorial)
 *   Plain           →  Inter             (grotesca neutra, misma altura de x)
 *
 * Poppins entra sólo para el logotipo "bitlogic": es la geométrica libre que
 * mejor reproduce la g de un piso con cola a la izquierda y la t de cola curva
 * del original. Cuando marketing entregue el archivo del logotipo oficial, hay
 * que reemplazar el <span> del wordmark por ese SVG y bajar Poppins de acá.
 */

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  // Un solo peso: la mono aparece únicamente en eyebrows de 11 px.
  weight: ["400"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-poppins",
});

export const fontClassNames = [
  instrumentSerif.variable,
  inter.variable,
  jetbrainsMono.variable,
  poppins.variable,
].join(" ");
