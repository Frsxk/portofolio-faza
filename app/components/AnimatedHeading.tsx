import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitChars } from "~/utils/animations";

interface Props {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  immediate?: boolean;
  stagger?: number;
  delay?: number;
}

/**
 * Per-character reveal heading — chars fly up from behind an overflow mask.
 * Triggers on scroll-in or immediately if `immediate` is set.
 */
export default function AnimatedHeading({
  children,
  as: Tag = "h2",
  className = "",
  immediate = false,
  stagger = 0.025,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const chars = splitChars(el as HTMLElement);
    gsap.set(chars, { yPercent: 120, opacity: 0 });

    if (immediate) {
      gsap.to(chars, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "expo.out",
        stagger,
        delay,
      });
    } else {
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(chars, {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: "expo.out",
            stagger,
            delay,
          });
        },
      });
      return () => { st.kill(); };
    }
  }, [children, immediate, stagger, delay]);

  return (
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  );
}
