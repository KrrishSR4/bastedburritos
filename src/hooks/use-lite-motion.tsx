import { useEffect, useState } from "react";

/**
 * Returns true when we should use lightweight animations:
 * - user prefers reduced motion
 * - small screen (mobile / likely low-end)
 * - low device memory / low CPU concurrency (Android budget devices)
 */
export function useLiteMotion() {
  const [lite, setLite] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    // @ts-ignore
    const mem = (navigator as any).deviceMemory ?? 8;
    const cores = navigator.hardwareConcurrency ?? 8;
    const lowEnd = mem <= 4 || cores <= 4;

    const compute = () => setLite(mql.matches || isMobile || lowEnd);
    compute();
    mql.addEventListener?.("change", compute);
    return () => mql.removeEventListener?.("change", compute);
  }, []);

  return lite;
}
