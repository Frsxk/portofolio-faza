import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Custom cursor: small dot tracks 1:1, larger ring lags behind.
 * Grows on hoverable elements. Hidden on touch devices.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const xDot = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    let visible = false;

    const onMove = (e: MouseEvent) => {
      if (!visible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        visible = true;
      }
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const onLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
      visible = false;
    };

    const grow = () =>
      gsap.to(ring, { width: 64, height: 64, borderColor: "rgba(255,45,120,0.8)", duration: 0.3 });
    const shrink = () =>
      gsap.to(ring, { width: 40, height: 40, borderColor: "rgba(255,255,255,0.5)", duration: 0.3 });

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    // Observe DOM for dynamic hoverables
    const attachHover = () => {
      const els = document.querySelectorAll<HTMLElement>("a, button, [data-cursor], input, textarea, label");
      els.forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
      return els;
    };

    const hoverables = attachHover();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
