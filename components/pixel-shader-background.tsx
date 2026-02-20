"use client";

import { useEffect, useRef } from "react";

type PixelShaderBackgroundProps = {
  className?: string;
};

const PRIMARY_RGB = "52, 211, 153";

export function PixelShaderBackground({ className = "" }: PixelShaderBackgroundProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let inView = true;
    let pageVisible = !document.hidden;

    let width = 1;
    let height = 1;
    let cell = 16;
    let cols = 1;
    let rows = 1;

    let pointerInside = false;
    let pointerTargetX = -10000;
    let pointerTargetY = -10000;
    let pointerX = -10000;
    let pointerY = -10000;
    let hoverStrength = 0;
    let nowMs = performance.now();

    const ripples: Array<{ x: number; y: number; startMs: number }> = [];
    const maxRipples = 6;
    const rippleDurationMs = 1900;

    const palette = Array.from({ length: 64 }, (_, i) => {
      const alpha = (i / 63) * 0.42;
      return `rgba(${PRIMARY_RGB}, ${alpha.toFixed(3)})`;
    });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frameStep = prefersReducedMotion ? 1000 / 18 : 1000 / 45;
    let lastFrame = 0;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Keep cell count constrained for stable performance across screen sizes.
      cell = Math.min(28, Math.max(12, Math.min(width, height) / 24));
      cols = Math.ceil(width / cell) + 1;
      rows = Math.ceil(height / cell) + 1;
    };

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = host.getBoundingClientRect();
      const inside =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;

      pointerInside = inside;
      if (inside) {
        pointerTargetX = clientX - rect.left;
        pointerTargetY = clientY - rect.top;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const onPointerDown = (event: PointerEvent) => {
      updatePointer(event.clientX, event.clientY);
      if (!pointerInside) return;

      nowMs = performance.now();
      ripples.push({
        x: pointerTargetX,
        y: pointerTargetY,
        startMs: nowMs,
      });
      if (ripples.length > maxRipples) {
        ripples.splice(0, ripples.length - maxRipples);
      }
    };

    const onPointerLeaveWindow = () => {
      pointerInside = false;
    };

    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        inView = Boolean(entries[0]?.isIntersecting);
      },
      { threshold: 0.01 }
    );
    observer.observe(host);

    const render = (time: number) => {
      if (!running) return;
      raf = requestAnimationFrame(render);

      if (!inView || !pageVisible) return;
      if (time - lastFrame < frameStep) return;
      lastFrame = time;
      nowMs = time;

      const hoverTarget = pointerInside ? 1 : 0;
      hoverStrength += (hoverTarget - hoverStrength) * 0.14;
      if (hoverStrength < 0.001) hoverStrength = 0;

      if (hoverStrength > 0) {
        pointerX += (pointerTargetX - pointerX) * 0.22;
        pointerY += (pointerTargetY - pointerY) * 0.22;
      } else {
        pointerX = -10000;
        pointerY = -10000;
      }

      ctx.clearRect(0, 0, width, height);

      const t = time * 0.001;
      const influenceRadius = Math.max(width, height) * 0.14;
      const influenceRadiusSq = influenceRadius * influenceRadius;
      const rippleSpeed = Math.max(width, height) * 0.42;

      for (let i = ripples.length - 1; i >= 0; i -= 1) {
        if (nowMs - ripples[i].startMs > rippleDurationMs) {
          ripples.splice(i, 1);
        }
      }

      for (let row = 0; row < rows; row += 1) {
        const y = row * cell;
        for (let col = 0; col < cols; col += 1) {
          const x = col * cell;

          const waveA = Math.sin(x * 0.018 + t * 1.1);
          const waveB = Math.cos(y * 0.014 - t * 1.3);
          const waveC = Math.sin((x + y) * 0.01 + t * 0.9);
          const wave = (waveA + waveB + waveC) / 3;
          const waveNorm = (wave + 1) * 0.5;
          const shimmerField =
            Math.sin(x * 0.052 + y * 0.037 - t * 2.2) +
            Math.cos(x * 0.031 - y * 0.029 + t * 1.65);
          const shimmerNorm = (shimmerField + 2) * 0.25;
          const shimmerBoost = Math.max(0, shimmerNorm - 0.62);
          // Sparse glints: seeded per cell, driven by existing shimmer so cost stays low.
          const seed = (((col + 11) * 374761393) ^ ((row + 17) * 668265263)) >>> 0;
          const seedNorm = (seed & 1023) / 1023;
          const glintMask = seedNorm > 0.74 ? 1 : 0;
          const glint = glintMask * Math.max(0, shimmerNorm - 0.73) * 2.9;

          let hoverBoost = 0;
          if (hoverStrength > 0) {
            const dx = x - pointerX;
            const dy = y - pointerY;
            const distSq = dx * dx + dy * dy;

            if (distSq < influenceRadiusSq) {
              const proximity = 1 - distSq / influenceRadiusSq;
              hoverBoost = proximity * proximity * hoverStrength;
            }
          }

          let rippleBoost = 0;
          if (ripples.length > 0) {
            for (let i = 0; i < ripples.length; i += 1) {
              const ripple = ripples[i];
              const ageMs = nowMs - ripple.startMs;
              if (ageMs <= 0 || ageMs >= rippleDurationMs) continue;

              const ageSec = ageMs * 0.001;
              const progress = ageMs / rippleDurationMs;
              const radius = ageSec * rippleSpeed;
              const thickness = cell * (0.95 + progress * 2.2);

              const dx = x - ripple.x;
              const dy = y - ripple.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const ring = 1 - Math.abs(dist - radius) / thickness;
              if (ring <= 0) continue;

              const decay = 1 - progress;
              rippleBoost += ring * ring * decay;
            }
            rippleBoost = Math.min(1.2, rippleBoost);
          }

          const baseSize = cell * (0.28 + waveNorm * 0.22 + shimmerBoost * 0.12 + glint * 0.06);
          const expandSize = cell * (0.75 * hoverBoost + 0.52 * rippleBoost);
          const size = Math.min(cell * 1.95, baseSize + expandSize);

          const alpha = Math.min(
            0.42,
            0.06 + waveNorm * 0.1 + shimmerBoost * 0.09 + glint * 0.08 + hoverBoost * 0.14 + rippleBoost * 0.12
          );
          const paletteIndex = Math.max(0, Math.min(63, Math.round((alpha / 0.42) * 63)));
          ctx.fillStyle = palette[paletteIndex];

          const jitter = wave * cell * 0.03;
          const px = x - size * 0.5 + jitter;
          const py = y - size * 0.5 + jitter;

          ctx.fillRect(px, py, size, size);
        }
      }
    };

    resize();
    pointerX = width * 0.5;
    pointerY = height * 0.5;

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerleave", onPointerLeaveWindow);
    document.addEventListener("visibilitychange", onVisibilityChange);

    raf = requestAnimationFrame(render);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerleave", onPointerLeaveWindow);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div ref={hostRef} className={`pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full opacity-75" aria-hidden="true" />
    </div>
  );
}
