"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  /** Valeur numérique finale, ex: 30 */
  value: number;
  /** Texte avant le nombre, ex: "" */
  prefix?: string;
  /** Texte après le nombre, ex: "+", "%", "k+" */
  suffix?: string;
  /** Durée de l'animation en secondes */
  duration?: number;
}

/**
 * Compteur qui monte de 0 jusqu'à `value` une seule fois,
 * déclenché quand l'élément entre dans le viewport.
 *
 * - `once: true` sur useInView -> ne se relance pas si on rescroll dessus
 * - respecte prefers-reduced-motion -> affiche direct la valeur finale
 */
export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // duration: 0 -> saut instantané à la valeur finale (accessibilité),
    // même chemin de code que l'animation normale, juste sans les étapes.
    const controls = animate(0, value, {
      duration: prefersReducedMotion ? 0 : duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
