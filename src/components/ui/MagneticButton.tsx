"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";

interface MagneticButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
  /** Décalage maximal en pixels */
  strength?: number;
}

/**
 * Lien qui "suit" légèrement le curseur quand on le survole,
 * puis revient au centre avec un effet ressort au mouseleave.
 *
 * Utilise event.currentTarget (pas de ref) pour mesurer l'élément.
 */
export default function MagneticButton({
  href,
  className,
  children,
  strength = 12,
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 16, mass: 0.4 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function handleMouseMove(event: ReactMouseEvent<HTMLAnchorElement>) {
    if (prefersReducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);

    x.set((relX / (rect.width / 2)) * strength);
    y.set((relY / (rect.height / 2)) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.a>
  );
}
