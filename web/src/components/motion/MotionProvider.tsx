"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Motor de animación del sitio.
 *
 * Una sola instancia, montada en el layout, se ocupa de todo lo transversal:
 * scroll suave, revelados por scroll, contadores, parallax y marquesinas. Las
 * secciones no registran sus propios ScrollTrigger salvo que necesiten un pin.
 *
 * Contrato con el CSS (`globals.css`):
 *   - `html[data-animate-ready="true"]` esconde los elementos animables. Lo
 *     pone un script bloqueante en el <head> ANTES del primer paint, así no
 *     hay parpadeo. Si el motor no arranca en 4 s, ese mismo script lo saca y
 *     todo queda visible.
 *   - Este provider marca `data-animate-running` para avisar que sí arrancó.
 *
 * Si el usuario pidió menos movimiento, nada de esto corre: el HTML ya está
 * completo y legible, las animaciones sólo lo estaban tapando.
 */

const PREFERS_REDUCED = "(prefers-reduced-motion: reduce)";

/**
 * Todo revelado usa `fromTo` con el "desde" declarado a mano, y declara TODAS
 * las componentes del transform que toca.
 *
 * Motivo, aprendido a los golpes: GSAP lee el estado inicial del CSS y parsea
 * `translateY(105%)` como `y` en píxeles, no como `yPercent`. Un tween que
 * sólo anima `yPercent` deja ese `y` viejo pegado, y el resultado es un
 * titular que "termina" la animación exactamente donde arrancó — invisible,
 * con el tween reportando progress 1. Por eso el "desde" incluye `y: 0`.
 */
function registerReveals() {
  // Bloques: opacidad + desplazamiento corto.
  ScrollTrigger.batch("[data-rise]", {
    start: "top 88%",
    once: true,
    onEnter: (els) =>
      gsap.fromTo(
        els,
        { opacity: 0, y: 28, yPercent: 0 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.07, ease: "expo.out", overwrite: "auto" },
      ),
  });

  // Titulares: cada línea sube desde detrás de su propia máscara.
  ScrollTrigger.batch("[data-reveal-lines]", {
    start: "top 90%",
    once: true,
    onEnter: (groups) => {
      const spans = groups.flatMap((group) =>
        Array.from(group.querySelectorAll<HTMLElement>(".reveal-line > span")),
      );
      if (!spans.length) return;
      gsap.fromTo(
        spans,
        { y: 0, yPercent: 105 },
        { yPercent: 0, duration: 1.15, stagger: 0.07, ease: "expo.out", overwrite: "auto" },
      );
    },
  });

  // Trazos SVG que se dibujan solos.
  gsap.utils.toArray<SVGGeometryElement>("[data-draw]").forEach((path) => {
    const length = path.getTotalLength?.() ?? 0;
    if (!length) return;
    path.style.setProperty("--draw-length", String(length));
    ScrollTrigger.create({
      trigger: path,
      start: "top 90%",
      once: true,
      onEnter: () => gsap.to(path, { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut" }),
    });
  });

  // Contadores. Sin JS el número ya está escrito en el HTML.
  gsap.utils.toArray<HTMLElement>("[data-count-to]").forEach((el) => {
    const target = Number(el.dataset.countTo ?? 0);
    if (!Number.isFinite(target)) return;
    const state = { value: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () =>
        gsap.to(state, {
          value: target,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(state.value));
          },
        }),
    });
  });

  // Parallax.
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
    const strength = Number(el.dataset.parallax ?? 0.15);
    gsap.fromTo(
      el,
      { yPercent: -strength * 50 },
      {
        yPercent: strength * 50,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });

  // El header sobre una sección oscura tiene que invertirse: una barra crema
  // flotando sobre fondo tinta se ve como un error, no como una decisión.
  // Marca `html[data-chrome]` según qué sección cruza la línea del header.
  gsap.utils.toArray<HTMLElement>('[data-theme="dark"]').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 36px",
      end: "bottom 36px",
      onEnter: () => document.documentElement.setAttribute("data-chrome", "dark"),
      onEnterBack: () => document.documentElement.setAttribute("data-chrome", "dark"),
      onLeave: () => document.documentElement.setAttribute("data-chrome", "light"),
      onLeaveBack: () => document.documentElement.setAttribute("data-chrome", "light"),
    });
  });

  // Marquesinas: el contenido va duplicado, por eso -50 %.
  gsap.utils.toArray<HTMLElement>("[data-marquee]").forEach((el) => {
    const speed = Number(el.dataset.marquee ?? 40);
    gsap.to(el, { xPercent: -50, duration: speed, ease: "none", repeat: -1 });
  });
}

export default function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia(PREFERS_REDUCED).matches) return;

    const root = document.documentElement;
    root.dataset.animateRunning = "true";

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // El header se compacta al pasar el hero.
    const onScroll = () => {
      root.dataset.scrolled = window.scrollY > 24 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /**
     * Los triggers se arman recién cuando las fuentes terminaron de cargar.
     *
     * Al revés no funciona: si se arman antes y después se llama a
     * `ScrollTrigger.refresh()` para remedir con las alturas nuevas, el refresh
     * revierte las animaciones que administra el context — y un tween que ya
     * terminó no se vuelve a reproducir, así que el titular queda escondido
     * para siempre. Midiendo con las fuentes resueltas, las alturas ya son las
     * definitivas y no hace falta ningún refresh posterior.
     */
    let ctx: gsap.Context | null = null;
    let disposed = false;

    const setup = () => {
      if (disposed) return;
      ctx = gsap.context(registerReveals);
    };

    const fonts = document.fonts;
    if (fonts && fonts.status !== "loaded") {
      fonts.ready.then(setup);
    } else {
      setup();
    }

    return () => {
      disposed = true;
      window.removeEventListener("scroll", onScroll);
      ctx?.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete root.dataset.animateRunning;
    };
  }, [pathname]);

  return null;
}
