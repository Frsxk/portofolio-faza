import { useEffect, useRef } from "react";
import { useLocation, useNavigation } from "react-router";
import { gsap } from "gsap";

/**
 * Full-screen gradient curtain that sweeps on route changes.
 */
export default function PageTransition() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigation = useNavigation();
  const isFirst = useRef(true);

  useEffect(() => {
    const el = curtainRef.current;
    if (!el) return;

    // Skip first render (preloader handles intro)
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (navigation.state !== "idle") return;

    gsap.set(el, { yPercent: 100 });
    const tl = gsap.timeline();
    tl.to(el, { yPercent: 0, duration: 0.5, ease: "expo.in" })
      .to(el, { yPercent: -100, duration: 0.7, ease: "expo.out" }, "+=0.08")
      .set(el, { yPercent: 100 });

    return () => { tl.kill(); };
  }, [location.pathname, navigation.state]);

  return <div ref={curtainRef} className="page-curtain" aria-hidden="true" />;
}
