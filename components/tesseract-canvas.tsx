"use client";

import { useEffect, useRef } from "react";

type Vec4 = [number, number, number, number];
type Vec2 = [number, number];

const vertices: Vec4[] = Array.from({ length: 16 }, (_, i) => [
  i & 1 ? 1 : -1,
  i & 2 ? 1 : -1,
  i & 4 ? 1 : -1,
  i & 8 ? 1 : -1,
]);

const edges: Array<[number, number]> = [];
for (let i = 0; i < vertices.length; i += 1) {
  for (let j = i + 1; j < vertices.length; j += 1) {
    const diff =
      Number(vertices[i][0] !== vertices[j][0]) +
      Number(vertices[i][1] !== vertices[j][1]) +
      Number(vertices[i][2] !== vertices[j][2]) +
      Number(vertices[i][3] !== vertices[j][3]);

    if (diff === 1) {
      edges.push([i, j]);
    }
  }
}

function rotate2D(a: number, b: number, theta: number): [number, number] {
  const c = Math.cos(theta);
  const s = Math.sin(theta);
  return [a * c - b * s, a * s + b * c];
}

function projectVertex(v: Vec4, t: number): Vec2 {
  let [x, y, z, w] = v;

  [x, w] = rotate2D(x, w, t * 0.00055);
  [y, z] = rotate2D(y, z, t * 0.00045);
  [x, z] = rotate2D(x, z, t * 0.00035);
  [y, w] = rotate2D(y, w, t * 0.0003);

  const wDistance = 2.8;
  const wFactor = 1 / (wDistance - w);
  const x3 = x * wFactor;
  const y3 = y * wFactor;
  const z3 = z * wFactor;

  const zDistance = 3.5;
  const zFactor = 1 / (zDistance - z3);
  return [x3 * zFactor, y3 * zFactor];
}

export function TesseractCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = (time: number) => {
      if (!running) return;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 1.6;

      ctx.clearRect(0, 0, width, height);

      const points = vertices.map((v) => projectVertex(v, time));

      ctx.lineWidth = 1.8;
      ctx.strokeStyle = "rgba(52, 211, 153, 0.72)";
      ctx.shadowColor = "rgba(52, 211, 153, 0.36)";
      ctx.shadowBlur = 10;

      ctx.beginPath();
      for (const [a, b] of edges) {
        const [ax, ay] = points[a];
        const [bx, by] = points[b];
        ctx.moveTo(cx + ax * scale, cy + ay * scale);
        ctx.lineTo(cx + bx * scale, cy + by * scale);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      for (const [x, y] of points) {
        ctx.fillStyle = "rgba(110, 231, 183, 0.95)";
        ctx.beginPath();
        ctx.arc(cx + x * scale, cy + y * scale, 3.1, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        raf = requestAnimationFrame(drawFrame);
      }
    };

    resize();
    drawFrame(performance.now());

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}
