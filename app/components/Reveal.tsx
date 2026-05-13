import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  start?: string;
}

/**
 * Generic scroll-triggered fade-in reveal. Wraps its children and
 * animates from (opacity:0, y/x offset) to visible on scroll-in.
 */
export default function Reveal({
  children,
  className = "",
  y = 50,
  x = 0,
  delay = 0,
  duration = 1,
  once = true,
  start = "top 88%",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(el, { opacity: 0, y, x });

    const st = ScrollTrigger.create({
      trigger: el,
      start,
      once,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, x: 0, duration, delay, ease: "power3.out" });
      },
    });

    return () => { st.kill(); };
  }, [y, x, delay, duration, once, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
