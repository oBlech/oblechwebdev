"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"], .cursor-pointer';

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const body = document.body;
    body.classList.add("custom-cursor-enabled");

    let mouseX = window.innerWidth * 0.5;
    let mouseY = window.innerHeight * 0.5;
    let ringX = mouseX;
    let ringY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;
    let hoverScale = 1;

    let isPointerDown = false;
    let isPointerHidden = false;
    let isInteractive = false;
    let raf = 0;

    const applyInteractiveState = () => {
      const ring = ringRef.current;
      if (!ring) return;
      ring.classList.toggle("is-interactive", isInteractive);
    };

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      isPointerHidden = false;
    };

    const onMouseOver = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      isInteractive = Boolean(event.target.closest(INTERACTIVE_SELECTOR));
      applyInteractiveState();
    };

    const onMouseDown = () => {
      isPointerDown = true;
    };

    const onMouseUp = () => {
      isPointerDown = false;
    };

    const onMouseLeave = () => {
      isPointerHidden = true;
    };

    const onMouseEnter = () => {
      isPointerHidden = false;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.45;
      dotY += (mouseY - dotY) * 0.45;
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      const dot = dotRef.current;
      if (dot) {
        const dotScale = isPointerDown ? 0.78 : 1;
        dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
        dot.style.opacity = isPointerHidden ? "0" : "1";
      }

      const ring = ringRef.current;
      if (ring) {
        const targetHoverScale = isInteractive ? 1.55 : 1;
        hoverScale += (targetHoverScale - hoverScale) * 0.18;
        const pressScale = isPointerDown ? 0.92 : 1;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${hoverScale * pressScale})`;
        ring.style.opacity = isPointerHidden ? "0" : "1";
      }

      raf = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);

    raf = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(raf);
      body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
