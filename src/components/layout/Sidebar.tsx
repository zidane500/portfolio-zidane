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

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveItem(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
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
