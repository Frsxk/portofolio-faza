import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { magneticHover } from "~/utils/animations";

interface Props {
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

/**
 * A button/link that magnetically follows the cursor on hover.
 */
export default function MagneticButton({
  children,
  as = "button",
  href,
  target,
  rel,
  className = "",
  onClick,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    return magneticHover(el, { strength });
  }, [strength]);

  const inner = <span className="magnetic__label">{children}</span>;

  if (as === "a") {
    return (
      <a ref={ref as any} href={href} target={target} rel={rel} onClick={onClick} className={`magnetic ${className}`}>
        {inner}
      </a>
    );
  }

  return (
    <button ref={ref as any} onClick={onClick} className={`magnetic ${className}`}>
      {inner}
    </button>
  );
}
