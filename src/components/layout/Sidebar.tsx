"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Home,
  Mail,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    id: "home",
    label: "Accueil",
    number: "01",
    icon: Home,
  },
  {
    id: "about",
    label: "À propos",
    number: "02",
    icon: UserRound,
  },
  {
    id: "skills",
    label: "Compétences",
    number: "03",
    icon: Code2,
  },
  {
    id: "projects",
    label: "Projets",
    number: "04",
    icon: FolderKanban,
  },
  {
    id: "experience",
    label: "Expérience",
    number: "05",
    icon: BriefcaseBusiness,
  },
  {
    id: "contact",
    label: "Contact",
    number: "06",
    icon: Mail,
  },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <motion.aside
      className="sidebar"
      initial={{ opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="sidebar__inner">
        {/* Logo */}
        <a
          href="#home"
          className="sidebar-logo"
          aria-label="Retour à l'accueil"
          onClick={() => setActiveItem("home")}
        >
          <span className="sidebar-logo__glow" aria-hidden="true" />

          <span className="sidebar-logo__text">
            Z<span>/</span>
          </span>
        </a>

        {/* Navigation */}
        <nav className="sidebar-nav" aria-label="Navigation principale">
          <span className="sidebar-nav__rail" aria-hidden="true" />

          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`sidebar-link ${
                  isActive ? "sidebar-link--active" : ""
                }`}
                onClick={() => setActiveItem(item.id)}
                aria-label={item.label}
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active-background"
                    className="sidebar-link__active-bg"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                    }}
                  />
                )}

                <span className="sidebar-link__number">{item.number}</span>

                <span className="sidebar-link__icon">
                  <Icon size={18} strokeWidth={1.7} />
                </span>

                <span className="sidebar-link__label">{item.label}</span>

                {isActive && (
                  <motion.span
                    layoutId="sidebar-active-dot"
                    className="sidebar-link__dot"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Status */}
        <div className="sidebar-status">
          <span className="sidebar-status__indicator">
            <span className="sidebar-status__pulse" />
          </span>

          <div className="sidebar-status__content">
            <span>Disponible</span>
            <strong>Freelance</strong>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
