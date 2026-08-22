"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const RibbonScene = dynamic(() => import("./RibbonScene"), { ssr: false });

/**
 * Decide si el hero corre en WebGL o se queda con la versión estática.
 *
 * El fallback no es un placeholder gris: es una composición SVG con el mismo
 * degradé de marca, dibujada en el HTML servido. Se ve bien sola, y el canvas
 * la va a tapar recién cuando confirmó que puede renderizar. Así el LCP no
 * depende de WebGL y los crawlers ven una imagen, no un div vacío.
 */

function canRunWebGL(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  const nav = navigator as Navigator & { deviceMemory?: number };
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory < 4) return false;
  if (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency < 4) return false;

  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function RibbonStage() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Un frame de aire para no competir con el primer paint.
    const id = requestAnimationFrame(() => setEnabled(canRunWebGL()));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!enabled) return null;

  return (
    <RibbonScene className="absolute inset-0 opacity-0 transition-opacity duration-1000 data-[ready=true]:opacity-100" />
  );
}
