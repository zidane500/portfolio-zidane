"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

import PageIntro from "@/components/ui/PageIntro";

/**
 * Applique `prefers-reduced-motion` à TOUTES les animations Framer Motion
 * du site en une seule fois (layout, x/y/scale, layoutId...) et affiche
 * l'écran de garde au premier chargement.
 *
 * Isolé dans son propre fichier "use client" pour que le layout racine
 * reste un Server Component (metadata, next/font).
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <PageIntro />
      {children}
    </MotionConfig>
  );
}
