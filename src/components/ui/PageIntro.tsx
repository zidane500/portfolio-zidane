"use client";

import {
  useEffect,
  useLayoutEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// useLayoutEffect ne fonctionne que côté client ; sur le serveur on retombe
// sur useEffect pour éviter l'avertissement React "no-op on the server".
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Détection "monté côté client" sans passer par un effect + setState (ce
// qui déclencherait un rendu en cascade) : useSyncExternalStore renvoie la
// snapshot serveur (false) pendant le SSR et l'hydratation, puis bascule
// sur la snapshot client (true) juste après -> exactement le pattern
// recommandé par React pour ce cas précis.
function subscribeNoop() {
  return () => {};
}
function getClientSnapshot() {
  return true;
}
function getServerSnapshot() {
  return false;
}
function useHasMounted() {
  return useSyncExternalStore(
    subscribeNoop,
    getClientSnapshot,
    getServerSnapshot,
  );
}

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

  // Le rendu serveur est toujours `null` (pas de `window` pour connaître la
  // préférence de mouvement). Côté client, framer-motion résout cette
  // préférence dès le tout premier rendu -> sans ce garde-fou, le premier
  // rendu client ne correspond jamais au HTML serveur (erreur d'hydratation
  // React, qui régénère alors tout l'arbre et peut effacer au passage des
  // attributs posés ailleurs par script inline, comme le thème clair/sombre).
  const mounted = useHasMounted();

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

  // Tant qu'on n'est pas monté côté client (= rendu identique au serveur)
  // ou qu'on ignore la préférence de mouvement, on ne rend rien plutôt
  // que de risquer un écart d'hydratation ou d'afficher puis retirer
  // l'écran en un seul frame.
  if (!mounted || prefersReducedMotion === null) return null;

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
