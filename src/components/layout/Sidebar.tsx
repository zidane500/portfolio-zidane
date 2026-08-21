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
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.id);

    const updateActiveSection = () => {
      const referencePoint = window.innerHeight * 0.42;

      let currentSection = "home";
      let smallestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        const isAroundReferencePoint =
          rect.top <= referencePoint && rect.bottom >= referencePoint;

        if (isAroundReferencePoint) {
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

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);

      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <motion.aside
      className="ref-sidebar"
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="ref-sidebar__inner">
        <a
          href="#home"
          className="ref-logo"
          aria-label="Accueil"
          onClick={() => setActiveItem("home")}
        >
          <span className="ref-logo__glow" />
          <span className="ref-logo__mark">
            Z<span>/</span>
          </span>
        </a>

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
                onClick={() => setActiveItem(item.id)}
              >
                {active && (
                  <motion.span
                    layoutId="ref-nav-active"
                    className="ref-nav__active"
                    transition={{
                      type: "spring",
                      stiffness: 430,
                      damping: 34,
                    }}
                  />
                )}

                <Icon className="ref-nav__icon" size={16} strokeWidth={1.7} />

                <span className="ref-nav__label">{item.label}</span>

                {active && (
                  <span className="ref-nav__indicator" aria-hidden="true" />
                )}
              </a>
            );
          })}
        </nav>

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
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>

          <a href="#" className="ref-cv">
            <Download size={13} />
            Télécharger CV
          </a>
        </div>
      </div>
    </motion.aside>
  );
}
