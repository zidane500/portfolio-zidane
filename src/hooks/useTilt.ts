"use client";

import { useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent as ReactMouseEvent } from "react";

interface UseTiltOptions {
  /** Rotation maximale en degrés */
  max?: number;
}

/**
 * Effet de tilt 3D au survol : la carte s'incline légèrement
 * en fonction de la position du curseur par rapport à son centre.
 *
 * Utilise event.currentTarget (pas de ref) pour mesurer l'élément :
 * plus simple et compatible avec les règles strictes react-hooks/refs.
 *
 * À étaler sur un élément motion.* :
 *   const tilt = useTilt<HTMLElement>();
 *   <motion.article style={tilt.style}
 *     onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave} />
 */
export function useTilt<T extends HTMLElement>({
  max = 7,
}: UseTiltOptions = {}) {
  const prefersReducedMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 20, mass: 0.4 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function onMouseMove(event: ReactMouseEvent<T>) {
    if (prefersReducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    // Position relative du curseur dans la carte, de -0.5 à 0.5
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(relX * max * 2);
    rotateX.set(relY * -max * 2);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return {
    onMouseMove,
    onMouseLeave,
    style: {
      rotateX: springRotateX,
      rotateY: springRotateY,
      transformPerspective: 800,
    },
  };
}
