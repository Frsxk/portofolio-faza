import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

/**
 * Infinite horizontal marquee that reacts to scroll velocity.
 * Duplicates children for seamless tiling.
 */
export default function Marquee({
  children,
  speed = 60,
  direction = "left",
  className = "",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    gsap.registerPlugin(ScrollTrigger);

    const half = track.scrollWidth / 2;
    if (!half) return;

    const dir = direction === "left" ? -1 : 1;
    gsap.set(track, { x: dir < 0 ? 0 : -half });

    const tween = gsap.to(track, {
      x: dir < 0 ? -half : 0,
      duration: half / speed,
      ease: "none",
      repeat: -1,
    });

    // Speed up / reverse on scroll velocity
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const v = self.getVelocity();
        const boost = gsap.utils.clamp(-3, 3, v / 500);
        gsap.to(tween, { timeScale: 1 + boost * dir, duration: 0.4, overwrite: true });
      },
    });

    return () => { tween.kill(); st.kill(); };
  }, [speed, direction]);

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div ref={trackRef} className="marquee__track">
        <div className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16 shrink-0">{children}</div>
        <div className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16 shrink-0">{children}</div>
      </div>
    </div>
  );
}
