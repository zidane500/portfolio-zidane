"use client";

import { motion } from "framer-motion";

import { GraduationCap, Languages, School } from "lucide-react";

const educationItems = [
  {
    title: "Licence en Informatique de Gestion",
    subtitle: "Business Computing — spécialité E-Business",
    period: "2022 — 2026",
    institution:
      "Faculté des Sciences Économiques et de Gestion de Nabeul (FSEGN)",
    description:
      "Formation orientée informatique de gestion, développement, systèmes d'information et solutions numériques adaptées aux besoins de l'entreprise.",
    icon: GraduationCap,
    className: "testimonial-card--gold",
  },

  {
    title: "Baccalauréat",
    subtitle: "Économie & Gestion",
    period: "2020 — 2021",
    institution: "Lycée Privé El Roki — Korba",
    description:
      "Formation en économie et gestion ayant constitué la base de mon parcours vers l'informatique de gestion et l'E-Business.",
    icon: School,
    className: "testimonial-card--blue",
  },

  {
    title: "Langues",
    subtitle: "Communication",
    period: "Profil linguistique",
    institution: "Arabe • Français • Anglais",
    description: (
      <>
        • Arabe : natif <br />
        • Français : intermédiaire <br />• Anglais : intermédiaire
      </>
    ),
    icon: Languages,
    className: "testimonial-card--purple",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="education"
      className="testimonials-section"
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* ==================================================
          SECTION HEADER
      ================================================== */}

      <div className="testimonials-heading">
        <div className="testimonials-heading__title">
          <span className="testimonials-heading__dot" />

          <h2>Formation & Langues</h2>
        </div>
      </div>

      {/* ==================================================
          EDUCATION CARDS
      ================================================== */}

      <div className="testimonials-grid">
        {educationItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              className={`testimonial-card ${item.className}`}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* ==============================================
                  ANIMATED BORDER
              ============================================== */}

              <svg
                className="testimonial-border-light"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <rect
                  className="testimonial-border-light__track"
                  x="0.7"
                  y="0.7"
                  width="98.6"
                  height="98.6"
                  rx="4"
                  ry="4"
                  pathLength="100"
                  vectorEffect="non-scaling-stroke"
                />

                <rect
                  className="testimonial-border-light__beam"
                  x="0.7"
                  y="0.7"
                  width="98.6"
                  height="98.6"
                  rx="4"
                  ry="4"
                  pathLength="100"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* ==============================================
                  HEADER
              ============================================== */}

              <div className="testimonial-card__top">
                <div className="education-card__icon">
                  <Icon size={20} strokeWidth={1.6} />
                </div>

                <div className="testimonial-person">
                  <strong>{item.title}</strong>

                  <span>{item.subtitle}</span>
                </div>

                <span className="education-card__period">{item.period}</span>
              </div>

              {/* ==============================================
                  CONTENT
              ============================================== */}

              <div className="testimonial-card__body">
                <strong className="education-card__institution">
                  {item.institution}
                </strong>

                <p>{item.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
