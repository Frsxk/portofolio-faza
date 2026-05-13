import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Thin gradient progress bar fixed at top of viewport. */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.to(el, { scaleX: self.progress, duration: 0.1, overwrite: true, ease: "none" });
      },
    });

    return () => { st.kill(); };
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
