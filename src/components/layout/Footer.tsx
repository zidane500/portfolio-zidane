"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <motion.footer
      className="footer"
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="footer-brand">
        <a href="#home" className="footer-logo" aria-label="Retour à l'accueil">
          Z<span>H</span>
        </a>

        <span className="footer-copyright">
          © 2026 Zidane. Tous droits réservés.
        </span>
      </div>

      <nav className="footer-links" aria-label="Liens légaux">
        <a href="#">Mentions légales</a>

        <a href="#">Politique de confidentialité</a>
      </nav>

      <div className="footer-right">
        <span className="footer-love">
          Fait avec
          <Heart size={12} fill="currentColor" strokeWidth={1.5} />& beaucoup de
          café
        </span>

        <button
          type="button"
          className="footer-top"
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          <ArrowUp size={15} />
        </button>
      </div>
    </motion.footer>
  );
}
