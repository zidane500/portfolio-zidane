"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// useLayoutEffect ne fonctionne que côté client ; sur le serveur on retombe
// sur useEffect pour éviter l'avertissement React "no-op on the server".
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Écran de garde plein écran affiché ~0.9s au premier chargement,
 * puis qui se retire pour révéler le site en dessous.
 *
 * - Ne bloque jamais le contenu réel (déjà présent dans le DOM en dessous,
 *   donc neutre pour le SEO / Core Web Vitals).
 * - prefers-reduced-motion -> se retire immédiatement, sans flash grâce à
 *   useLayoutEffect (s'exécute avant que le navigateur ne peigne l'écran).
 */
export default function PageIntro() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);

  useIsomorphicLayoutEffect(() => {
    // On ne sait pas encore si l'utilisateur préfère moins d'animations
    // (framer-motion résout ça de façon asynchrone) -> on patiente.
    if (prefersReducedMotion === null) return;

    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => setIsVisible(false), 900);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  // Tant qu'on ignore la préférence de mouvement, on ne rend rien plutôt
  // que de risquer d'afficher puis retirer l'écran en un seul frame.
  if (prefersReducedMotion === null) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="page-intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <motion.span
            className="page-intro__mark"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Zidane<span>.</span>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
