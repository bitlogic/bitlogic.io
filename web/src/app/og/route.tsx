import { ImageResponse } from "next/og";
import { BRAND } from "@/content/site";

export const runtime = "edge";

/**
 * Imagen social 1200×630, generada al vuelo.
 *
 * Crema, la cinta del isotipo en el ángulo y el título en grande. Sin fuentes
 * externas: usa la pila del sistema del runtime, así nunca falla por una
 * descarga de tipografía y responde en decenas de milisegundos.
 */

const RIBBON = [
  "M0 0 L65 32 L21 54 L5 47 L0 44 Z",
  "M68 34 L68 77 L0 111 L0 67 Z",
  "M46 91 L65 99 L20 121 L3 112 Z",
  "M68 101 L68 144 L0 178 L0 134 Z",
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const raw = searchParams.get("t") ?? "Bitlogic";
  const title = raw.split(" | ")[0].split(" — ")[0].slice(0, 110);
  const eyebrow = (searchParams.get("e") ?? "EdTech made for humans, by humans.").slice(0, 80);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BRAND.cream,
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Satori no resuelve `radial-gradient` con paradas transparentes: lo
            rasteriza como un rectángulo duro. Un círculo con degradé lineal sí
            funciona y además es la forma de la cinta. */}
        <div
          style={{
            position: "absolute",
            top: -190,
            right: -190,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.cyan} 34%, ${BRAND.coral} 68%, ${BRAND.yellow})`,
            opacity: 0.9,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            right: 150,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: `linear-gradient(120deg, ${BRAND.yellow}, ${BRAND.coral})`,
            opacity: 0.45,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="30" height="79" viewBox="0 0 68 178">
            {RIBBON.map((d, i) => (
              <path key={i} d={d} fill={BRAND.blue} />
            ))}
          </svg>
          <span style={{ fontSize: 34, fontWeight: 600, color: BRAND.ink, letterSpacing: -0.8 }}>
            bitlogic
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontSize: title.length > 60 ? 62 : 76,
              lineHeight: 1.02,
              letterSpacing: -2.4,
              color: BRAND.ink,
              maxWidth: 940,
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: BRAND.ink,
              opacity: 0.55,
              letterSpacing: 0.4,
              display: "flex",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: BRAND.ink,
            opacity: 0.45,
            borderTop: `1px solid ${BRAND.ink}22`,
            paddingTop: 22,
          }}
        >
          <span>bitlogic.io</span>
          <span>Córdoba · Argentina</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
