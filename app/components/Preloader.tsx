import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Intro preloader: counter 0→100 with progress bar, then the panel
 * slides up revealing the page beneath.
 */
export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const num = numberRef.current;
    const bar = barRef.current;
    const name = nameRef.current;
    if (!root || !num || !bar || !name) return;

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        setHidden(true);
        onComplete?.();
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 2.4,
      ease: "power2.inOut",
      onUpdate: () => {
        num.textContent = Math.round(counter.val).toString().padStart(3, "0");
      },
    })
      .to(bar, { scaleX: 1, duration: 2.4, ease: "power2.inOut" }, "<")
      .to(name, { y: "-110%", duration: 0.6, ease: "power3.in" }, "-=0.3")
      .to(num, { y: "-110%", duration: 0.6, ease: "power3.in" }, "<0.05")
      .to(root, { yPercent: -100, duration: 1, ease: "expo.inOut" }, "-=0.1");

    return () => { tl.kill(); };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div ref={rootRef} className="preloader">
      {/* Name bottom-left */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 overflow-hidden">
        <div ref={nameRef} className="font-mono text-[0.65rem] md:text-xs tracking-[0.25em] uppercase text-paper/60">
          Muhammad Faza Al-Banna
        </div>
      </div>

      {/* Counter bottom-right */}
      <div className="absolute bottom-6 right-8 md:bottom-10 md:right-12 overflow-hidden">
        <span
          ref={numberRef}
          className="inline-block font-display text-6xl md:text-8xl text-paper leading-none"
        >
          000
        </span>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0"
          style={{
            background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent))",
          }}
        />
      </div>
    </div>
  );
}
