/**
 * Animation utilities — pure functions around GSAP for text splitting,
 * magnetic hover, and motion preference detection.
 */
import { gsap } from "gsap";

/**
 * Splits an element's text into per-character <span class="char"> elements
 * wrapped in per-word overflow-hidden containers. Returns array of char spans.
 * (Free alternative to GSAP's premium SplitText plugin)
 */
export function splitChars(el: HTMLElement): HTMLSpanElement[] {
  if (!el || el.dataset.split === "done") {
    return Array.from(el.querySelectorAll<HTMLSpanElement>(".char"));
  }

  const text = el.textContent ?? "";
  el.textContent = "";
  el.setAttribute("aria-label", text);
  el.dataset.split = "done";

  const chars: HTMLSpanElement[] = [];
  const words = text.split(/(\s+)/);

  words.forEach((word) => {
    if (word.trim() === "") {
      el.appendChild(document.createTextNode(word));
      return;
    }

    const wordWrap = document.createElement("span");
    wordWrap.className = "reveal-wrap";
    wordWrap.setAttribute("aria-hidden", "true");

    const wordInner = document.createElement("span");
    wordInner.style.display = "inline-block";
    wordInner.style.whiteSpace = "nowrap";

    for (const ch of Array.from(word)) {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = ch;
      wordInner.appendChild(span);
      chars.push(span);
    }

    wordWrap.appendChild(wordInner);
    el.appendChild(wordWrap);
  });

  return chars;
}

/**
 * Splits an element into per-word overflow-hidden wrappers.
 * Returns array of inner word spans for animation.
 */
export function splitWords(el: HTMLElement): HTMLSpanElement[] {
  if (!el || el.dataset.splitWords === "done") {
    return Array.from(el.querySelectorAll<HTMLSpanElement>(".word-inner"));
  }

  const text = el.textContent ?? "";
  el.textContent = "";
  el.setAttribute("aria-label", text);
  el.dataset.splitWords = "done";

  const inners: HTMLSpanElement[] = [];
  const tokens = text.split(/(\s+)/);

  tokens.forEach((token) => {
    if (token.trim() === "") {
      el.appendChild(document.createTextNode(token));
      return;
    }

    const wrap = document.createElement("span");
    wrap.className = "reveal-wrap";
    wrap.setAttribute("aria-hidden", "true");

    const inner = document.createElement("span");
    inner.className = "word-inner";
    inner.style.display = "inline-block";
    inner.textContent = token;

    wrap.appendChild(inner);
    el.appendChild(wrap);
    inners.push(inner);
  });

  return inners;
}

/**
 * Magnetic hover effect — element + label subtly follow the cursor.
 * Returns a cleanup function.
 */
export function magneticHover(
  target: HTMLElement,
  options: { strength?: number; radius?: number } = {}
): () => void {
  const strength = options.strength ?? 0.35;
  const radius = options.radius ?? 80;
  const label = target.querySelector<HTMLElement>(".magnetic__label") ?? target;

  const xTo = gsap.quickTo(target, "x", { duration: 0.6, ease: "power3.out" });
  const yTo = gsap.quickTo(target, "y", { duration: 0.6, ease: "power3.out" });
  const lxTo = gsap.quickTo(label, "x", { duration: 0.55, ease: "power3.out" });
  const lyTo = gsap.quickTo(label, "y", { duration: 0.55, ease: "power3.out" });

  const onMove = (e: MouseEvent) => {
    const rect = target.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);

    if (dist > rect.width / 2 + radius) {
      xTo(0);
      yTo(0);
      lxTo(0);
      lyTo(0);
      return;
    }
    xTo(dx * strength);
    yTo(dy * strength);
    lxTo(dx * strength * 0.55);
    lyTo(dy * strength * 0.55);
  };

  const onLeave = () => {
    xTo(0);
    yTo(0);
    lxTo(0);
    lyTo(0);
  };

  window.addEventListener("mousemove", onMove);
  target.addEventListener("mouseleave", onLeave);

  return () => {
    window.removeEventListener("mousemove", onMove);
    target.removeEventListener("mouseleave", onLeave);
  };
}

/** Returns true if user prefers reduced motion */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
