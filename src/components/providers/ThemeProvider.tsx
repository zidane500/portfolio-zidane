"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Le thème réel est déjà posé sur <html data-theme="..."> par le script
 * inline (voir layout.tsx) AVANT l'hydratation -> zéro flash visuel côté CSS.
 *
 * Ce provider ne fait que garder le state React synchronisé avec cet
 * attribut, pour que les composants (ex: le bouton Sun/Moon) sachent
 * quel thème est actif et puissent le changer.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  // On démarre toujours à "dark" (valeur par défaut de :root) pour que
  // le premier rendu client soit identique au rendu serveur -> pas de
  // warning d'hydratation. Un MutationObserver resynchronise ensuite le
  // state React avec l'attribut DOM réel (posé par le script inline),
  // et reste branché pour refléter tout futur changement de l'attribut.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const html = document.documentElement;

    function syncFromDom() {
      const current = html.getAttribute("data-theme");
      if (current === "light" || current === "dark") {
        setTheme(current);
      }
    }

    const observer = new MutationObserver(syncFromDom);
    observer.observe(html, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Lecture initiale : le MutationObserver ne se déclenche que sur les
    // changements FUTURS, donc on doit lire la valeur déjà posée une fois,
    // via un micro-task pour rester dans le pattern "callback externe".
    queueMicrotask(syncFromDom);

    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      window.localStorage.setItem("theme", next);
      return next;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useTheme() doit être appelé à l'intérieur de <ThemeProvider>.",
    );
  }
  return context;
}
