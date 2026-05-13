import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Floating blurred gradient blobs that drift and respond to mouse.
 */
export default function BackgroundBlobs({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const blobs = Array.from(wrap.querySelectorAll<HTMLElement>(".blob"));

    // Slow drift loop
    const tweens = blobs.map((b, i) =>
      gsap.to(b, {
        x: `+=${i % 2 === 0 ? 100 : -100}`,
        y: `+=${i % 2 === 0 ? -70 : 70}`,
        duration: 12 + i * 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      })
    );

    // Parallax to mouse
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      blobs.forEach((b, i) => {
        const depth = 30 + i * 15;
        gsap.to(b, { x: nx * depth, y: ny * depth, duration: 1.5, ease: "power2.out", overwrite: "auto" });
      });
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={wrapRef} aria-hidden="true" className={`pointer-events-none fixed inset-0 overflow-hidden -z-10 ${className}`}>
      <div className="blob" style={{ width: 600, height: 600, top: "-15%", left: "-10%", background: "var(--color-primary)" }} />
      <div className="blob" style={{ width: 500, height: 500, top: "35%", right: "-12%", background: "var(--color-secondary)" }} />
      <div className="blob" style={{ width: 400, height: 400, bottom: "-12%", left: "35%", background: "var(--color-accent)", opacity: 0.35 }} />
    </div>
  );
}
