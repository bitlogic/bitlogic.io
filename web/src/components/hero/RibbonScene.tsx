"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { BRAND } from "@/content/site";

/**
 * "La cinta" — la escena WebGL del hero.
 *
 * El isotipo de bitlogic es una cinta plegada. Acá esa misma cinta existe en
 * tres dimensiones: recorre una curva, se retuerce sobre su propio eje y el
 * pliegue va cerrándose a medida que bajás. Es la marca en movimiento, no un
 * fondo decorativo puesto encima.
 *
 * La geometría es un plano subdividido: toda la forma se calcula en el vertex
 * shader a partir de `uv.x` (posición a lo largo de la cinta) y `uv.y`
 * (ancho). No hay geometría que recalcular en CPU por frame.
 *
 * Presupuesto de performance:
 *   - 3 cintas de 240 × 12 quads + 900 puntos. Un solo draw call por objeto.
 *   - devicePixelRatio limitado a 1.75.
 *   - se congela cuando la pestaña se oculta o el hero sale de viewport.
 *   - el `dispose()` del cleanup libera geometrías, materiales y contexto.
 */

const VERTEX = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  uniform float uTwist;
  uniform float uSpan;
  uniform float uWidth;
  uniform float uPhase;

  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vViewDir;

  // Eje de la cinta. Suma de senos: barato, continuo y derivable.
  vec3 axis(float t) {
    float x = (t - 0.5) * uSpan;
    float y = sin(t * 6.2831853 + uPhase + uTime * 0.22) * 0.95
            + sin(t * 9.4 - uPhase - uTime * 0.35) * 0.14;
    float z = cos(t * 5.0265 + uPhase * 0.7 + uTime * 0.16) * 1.15;
    return vec3(x, y, z);
  }

  void main() {
    float t = uv.x;
    vUv = uv;

    // Marco de Frenet aproximado por diferencias finitas.
    float e = 0.004;
    vec3 p  = axis(t);
    vec3 tangent = normalize(axis(min(t + e, 1.0)) - axis(max(t - e, 0.0)));
    vec3 normal  = normalize(cross(tangent, vec3(0.0, 1.0, 0.0)));
    vec3 binorm  = normalize(cross(tangent, normal));

    // El pliegue: la cinta gira sobre su eje y el giro se cierra con el scroll.
    float twist = t * uTwist + uScroll * 3.1415926 + uPhase * 0.5 + uTime * 0.06;
    vec3 side = normal * cos(twist) + binorm * sin(twist);

    // Se afina en las puntas para que no termine en un corte recto.
    float taper = 0.34 + 0.66 * sin(t * 3.1415926);
    vec3 displaced = p + side * (uv.y - 0.5) * uWidth * taper;

    vec3 faceNormal = normalize(cross(tangent, side));
    vNormalW = normalize(mat3(modelMatrix) * faceNormal);

    vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAGMENT = /* glsl */ `
  precision highp float;

  uniform vec3 uBlue;
  uniform vec3 uCoral;
  uniform vec3 uYellow;
  uniform vec3 uCyan;
  uniform float uOpacity;

  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vViewDir;

  void main() {
    float g = clamp(vUv.x, 0.0, 1.0);

    // Degradé de marca a lo largo de la cinta: azul → cian → coral → amarillo.
    vec3 col = mix(uBlue, uCyan, smoothstep(0.0, 0.38, g));
    col = mix(col, uCoral, smoothstep(0.34, 0.72, g));
    col = mix(col, uYellow, smoothstep(0.74, 1.0, g));

    vec3 n = normalize(vNormalW);
    // El reverso se ve más oscuro: sin eso el pliegue no se lee.
    if (!gl_FrontFacing) n = -n;
    float lambert = clamp(dot(n, normalize(vec3(0.35, 0.85, 0.55))), 0.0, 1.0);
    float rim = pow(1.0 - clamp(abs(dot(n, normalize(vViewDir))), 0.0, 1.0), 2.2);

    col *= 0.70 + 0.46 * lambert;
    col += rim * 0.30;
    if (!gl_FrontFacing) col *= 0.88;

    // Bordes suaves a lo ancho: evita el aliasing del corte recto.
    float edge = smoothstep(0.0, 0.09, vUv.y) * smoothstep(1.0, 0.91, vUv.y);
    float ends = smoothstep(0.0, 0.05, vUv.x) * smoothstep(1.0, 0.95, vUv.x);

    gl_FragColor = vec4(col, uOpacity * edge * ends);
  }
`;

const DUST_VERTEX = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  attribute float aSeed;
  varying float vAlpha;

  void main() {
    vec3 p = position;
    p.y += sin(uTime * 0.35 + aSeed * 6.2831) * 0.35;
    p.x += cos(uTime * 0.22 + aSeed * 4.1) * 0.25;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (12.0 / -mv.z) * (0.5 + aSeed * 0.9);
    vAlpha = 0.10 + 0.28 * aSeed;
  }
`;

const DUST_FRAGMENT = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    // Punto redondo con borde difuso, sin textura.
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.12, d) * vAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(uColor, a);
  }
`;

const RIBBONS = [
  { phase: 0.0, twist: 3.2, span: 7.4, width: 1.34, opacity: 0.95, z: 0.0, scale: 1.0 },
  { phase: 2.1, twist: 4.6, span: 6.4, width: 0.86, opacity: 0.55, z: -2.4, scale: 0.92 },
  { phase: 4.3, twist: 2.4, span: 8.2, width: 0.52, opacity: 0.34, z: 1.8, scale: 1.06 },
] as const;

function toVec3(hex: string) {
  return new THREE.Color(hex).convertSRGBToLinear();
}

export default function RibbonScene({ className }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return; // sin WebGL queda el fallback estático que ya está pintado detrás
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.cssText = "display:block;width:100%;height:100%";
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, host.clientWidth / host.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 9.2);

    const group = new THREE.Group();
    scene.add(group);

    const shared = {
      uBlue: { value: toVec3(BRAND.blue) },
      uCoral: { value: toVec3(BRAND.coral) },
      uYellow: { value: toVec3(BRAND.yellow) },
      uCyan: { value: toVec3(BRAND.cyan) },
    };

    const geometry = new THREE.PlaneGeometry(1, 1, 240, 12);
    const materials: THREE.ShaderMaterial[] = [];

    for (const cfg of RIBBONS) {
      const material = new THREE.ShaderMaterial({
        vertexShader: VERTEX,
        fragmentShader: FRAGMENT,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        uniforms: {
          ...shared,
          uTime: { value: 0 },
          uScroll: { value: 0 },
          uTwist: { value: cfg.twist },
          uSpan: { value: cfg.span },
          uWidth: { value: cfg.width },
          uPhase: { value: cfg.phase },
          uOpacity: { value: cfg.opacity },
        },
      });
      materials.push(material);

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.z = cfg.z;
      mesh.scale.setScalar(cfg.scale);
      mesh.frustumCulled = false;
      group.add(mesh);
    }

    // Polvo: los "bits" sueltos alrededor de la cinta.
    const DUST = 900;
    const dustGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(DUST * 3);
    const seeds = new Float32Array(DUST);
    for (let i = 0; i < DUST; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
      seeds[i] = Math.random();
    }
    dustGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    dustGeo.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));

    const dustMat = new THREE.ShaderMaterial({
      vertexShader: DUST_VERTEX,
      fragmentShader: DUST_FRAGMENT,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 2.4 },
        uColor: { value: toVec3(BRAND.ink) },
      },
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    dust.frustumCulled = false;
    group.add(dust);

    // --- Entradas ---------------------------------------------------------
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointerMove = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let scroll = 0;
    const onScroll = () => {
      const h = host.getBoundingClientRect();
      // 0 con el hero arriba de todo, 1 cuando terminó de salir por arriba.
      scroll = Math.min(1, Math.max(0, -h.top / Math.max(1, h.height)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      if (!host.clientWidth || !host.clientHeight) return;
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight);
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(host);

    // --- Loop -------------------------------------------------------------
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(host);

    const clock = new THREE.Clock();
    let frame = 0;

    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!visible || document.hidden) return;

      const t = clock.getElapsedTime();
      pointer.x += (pointer.tx - pointer.x) * 0.045;
      pointer.y += (pointer.ty - pointer.y) * 0.045;

      for (const m of materials) {
        m.uniforms.uTime.value = t;
        m.uniforms.uScroll.value = scroll;
      }
      dustMat.uniforms.uTime.value = t;

      group.rotation.y = pointer.x * 0.28 - scroll * 0.35;
      group.rotation.x = pointer.y * 0.16 + scroll * 0.22;
      group.position.set(1.15, 1.0 + scroll * 1.1, 0);
      camera.position.z = 9.2 - scroll * 2.4;

      renderer.render(scene, camera);
    };
    tick();

    // Recién acá se revela: el fallback estático se mantiene hasta el primer frame.
    host.dataset.ready = "true";

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      geometry.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      for (const m of materials) m.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className={className} aria-hidden="true" data-ready="false" />;
}
