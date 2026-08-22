"use client";

import { motion } from "framer-motion";

import {
  BriefcaseBusiness,
  Code2,
  Download,
  Home,
  Mail,
  MessageSquareQuote,
  PanelsTopLeft,
  UserRound,
} from "lucide-react";

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

import { SiGmail } from "react-icons/si";

import { useEffect, useRef, useState } from "react";

import type { MouseEvent as ReactMouseEvent } from "react";

const navigation = [
  {
    id: "home",
    label: "Accueil",
    icon: Home,
  },
  {
    id: "about",
    label: "À propos",
    icon: UserRound,
  },
  {
    id: "skills",
    label: "Compétences",
    icon: Code2,
  },
  {
    id: "projects",
    label: "Projets",
    icon: PanelsTopLeft,
  },
  {
    id: "experience",
    label: "Expérience",
    icon: BriefcaseBusiness,
  },
  {
    id: "testimonials",
    label: "Témoignages",
    icon: MessageSquareQuote,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
  },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("home");

  /*
   * Quand l'utilisateur clique sur le menu,
   * on garde cette section active jusqu'à ce
   * que le scroll automatique soit terminé.
   */
  const lockedTarget = useRef<string | null>(null);

  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ======================================================
     CLICK ON NAVIGATION
  ====================================================== */

  function handleNavigation(
    event: ReactMouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    /*
     * IMPORTANT :
     * fixation immédiate sur le bouton cliqué.
     */
    lockedTarget.current = id;
    setActiveItem(id);

    /*
     * URL mise à jour sans saut du navigateur.
     */
    window.history.replaceState(null, "", `#${id}`);

    /*
     * Scroll fluide.
     */
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /*
     * Fallback au cas où aucun événement scroll
     * ne serait détecté.
     */
    if (scrollEndTimer.current) {
      clearTimeout(scrollEndTimer.current);
    }

    scrollEndTimer.current = setTimeout(() => {
      lockedTarget.current = null;
    }, 2200);
  }

  /* ======================================================
     AUTOMATIC ACTIVE SECTION ON MANUAL SCROLL
  ====================================================== */

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.id);

    const updateActiveSection = () => {
      /*
       * Si un bouton vient d'être cliqué,
       * NE JAMAIS changer l'état actif pendant
       * le scroll automatique.
       */
      if (lockedTarget.current !== null) {
        return;
      }

      const referencePoint = window.innerHeight * 0.42;

      let currentSection = "home";

      let smallestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        const containsReferencePoint =
          rect.top <= referencePoint && rect.bottom >= referencePoint;

        if (containsReferencePoint) {
          currentSection = id;
          smallestDistance = 0;

          return;
        }

        const distance = Math.abs(rect.top - referencePoint);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          currentSection = id;
        }
      });

      setActiveItem(currentSection);
    };

    const handleScroll = () => {
      /*
       * Scroll provenant d'un clic menu.
       */
      if (lockedTarget.current !== null) {
        /*
         * Tant que le navigateur continue à
         * scroller, on repousse le déblocage.
         */
        if (scrollEndTimer.current) {
          clearTimeout(scrollEndTimer.current);
        }

        scrollEndTimer.current = setTimeout(() => {
          /*
           * Le scroll s'est arrêté.
           */
          lockedTarget.current = null;

          /*
           * On attend volontairement avant
           * de recalculer. Le bouton choisi
           * reste donc parfaitement stable.
           */
        }, 350);

        return;
      }

      /*
       * Scroll manuel normal :
       * la sidebar suit la page.
       */
      updateActiveSection();
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", updateActiveSection);

      if (scrollEndTimer.current) {
        clearTimeout(scrollEndTimer.current);
      }
    };
  }, []);

  return (
    <motion.aside
      className="ref-sidebar"
      initial={{
        opacity: 0,
        x: -24,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="ref-sidebar__inner">
        {/* LOGO */}

        <a
          href="#home"
          className="sidebar-logo"
          aria-label="Retour à l'accueil"
          onClick={(event) => handleNavigation(event, "home")}
        >
          <span className="sidebar-logo__letter">Z</span>

          <span className="sidebar-logo__slash">H</span>
        </a>

        {/* NAVIGATION */}

        <nav className="ref-nav" aria-label="Navigation principale">
          {navigation.map((item) => {
            const Icon = item.icon;

            const active = activeItem === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`ref-nav__item ${
                  active ? "ref-nav__item--active" : ""
                }`}
                onClick={(event) => handleNavigation(event, item.id)}
              >
                {/*
                  IMPORTANT :
                  plus de motion.span,
                  plus de layoutId.

                  Le fond violet apparaît
                  DIRECTEMENT sur le bouton.
                */}

                {active && (
                  <span className="ref-nav__active" aria-hidden="true" />
                )}

                <span className="ref-nav__iconBox">
                  <Icon className="ref-nav__icon" size={18} strokeWidth={1.7} />
                </span>

                <span className="ref-nav__label">{item.label}</span>

                {active && (
                  <span className="ref-nav__indicator" aria-hidden="true" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CV */}

        <a href="/cv-zidane.pdf" className="ref-cv ref-cv--nav" download>
          <Download size={16} strokeWidth={1.7} />

          <span>Télécharger CV</span>
        </a>

        {/* BOTTOM */}

        <div className="ref-sidebar__bottom">
          <div className="ref-availability">
            <span className="ref-availability__dot">
              <span />
            </span>

            <div>
              <small>Disponible pour</small>

              <strong>Nouvelles opportunités</strong>
            </div>
          </div>

          <div className="ref-socials">
            <a href="#" aria-label="GitHub" title="GitHub">
              <FaGithub />
            </a>

            <a href="#" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:haffarzidane@gmail.com"
              aria-label="Gmail"
              title="Gmail"
            >
              <SiGmail />
            </a>

            <a
              href="https://wa.me/21652827067"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
