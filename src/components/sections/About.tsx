"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Gauge,
  Layers3,
  MapPin,
  Palette,
  Radar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const qualities = [
  {
    icon: Radar,
    label: "Approche centrée utilisateur",
    description: "UX d'abord, toujours.",
    className: "about-chip--blue",
  },
  {
    icon: Braces,
    label: "Code propre & scalable",
    description: "Performance et maintenabilité.",
    className: "about-chip--green",
  },
  {
    icon: Palette,
    label: "Design & UX premium",
    description: "Interfaces modernes et élégantes.",
    className: "about-chip--orange",
  },
  {
    icon: Gauge,
    label: "Performance & SEO",
    description: "Rapide, visible et optimisé.",
    className: "about-chip--purple",
  },
  {
    icon: ShieldCheck,
    label: "Sécurité & bonnes pratiques",
    description: "Des fondations fiables.",
    className: "about-chip--orange",
  },
  {
    icon: Layers3,
    label: "Veille techno continue",
    description: "Toujours apprendre et évoluer.",
    className: "about-chip--violet",
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* PORTRAIT */}

      <div className="about-portrait">
        <div
          className="about-portrait__orbit about-portrait__orbit--1"
          aria-hidden="true"
        />

        <div
          className="about-portrait__orbit about-portrait__orbit--2"
          aria-hidden="true"
        />

        <div className="about-portrait__glow" />

        <div className="about-avatar">
          <div className="about-avatar__halo" />

          <div className="about-avatar__head" />

          <div className="about-avatar__body">
            <span className="about-avatar__signature">Zidane</span>
          </div>
        </div>

        <div className="about-location">
          <MapPin size={10} />
          Basé à Paris
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div className="about-content">
        <div className="about-heading">
          <span className="about-heading__dot" />

          <h2>À propos de moi</h2>
        </div>

        <p className="about-intro">
          Développeur Full Stack & créatif numérique, j&apos;aide les
          entreprises et les porteurs de projets à transformer leurs idées en
          produits digitaux performants, fiables et élégants.
        </p>

        <p className="about-text">
          J&apos;aime réunir technologie, design et stratégie pour créer des
          expériences modernes qui génèrent de l&apos;impact.
        </p>

        <div className="about-chips">
          {qualities.map((quality) => {
            const Icon = quality.icon;

            return (
              <div
                key={quality.label}
                className={`about-chip ${quality.className}`}
              >
                <span className="about-chip__icon">
                  <Icon size={12} />
                </span>

                <span className="about-chip__copy">
                  <strong>{quality.label}</strong>
                  <small>{quality.description}</small>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT STATUS PANEL */}

      <aside className="about-status">
        <div className="about-status__section">
          <span className="about-status__label">Temps de réponse</span>

          <strong className="about-status__time">&lt; 24h</strong>

          <span className="about-status__fast">Très réactif</span>
        </div>

        <div className="about-status__divider" />

        <div className="about-status__section">
          <span className="about-status__label">Collaborations</span>

          <div className="about-collaborators">
            <span>Z</span>
            <span>JS</span>
            <span>UX</span>

            <strong>+12</strong>
          </div>
        </div>

        <div className="about-status__spark" aria-hidden="true">
          <Sparkles size={16} />
        </div>
      </aside>
    </motion.section>
  );
}
