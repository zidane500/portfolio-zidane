"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nova SaaS",
    type: "SaaS",
    description:
      "Plateforme SaaS tout-en-un pour gérer, analyser et automatiser les opérations d'une entreprise.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    className: "project-card--nova",
    visual: "dashboard",
  },
  {
    title: "Cineverse",
    type: "Web App",
    description:
      "Application moderne de découverte de films avec recommandations, favoris et expériences immersives.",
    technologies: ["React", "TMDB API", "Tailwind CSS"],
    className: "project-card--cineverse",
    visual: "cinema",
  },
  {
    title: "Greenfolio",
    type: "Landing",
    description:
      "Landing page éco-responsable conçue pour une marque engagée avec une direction artistique premium.",
    technologies: ["Framer", "GSAP", "CMS"],
    className: "project-card--greenfolio",
    visual: "green",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects-section"
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="projects-heading">
        <div className="projects-heading__title">
          <span className="projects-heading__dot" />
          <h2>Projets vedettes</h2>
        </div>

        <a href="#projects" className="projects-heading__link">
          Voir tous les projets
          <ArrowRight size={14} />
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className={`project-card ${project.className}`}
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
            }}
          >
            <div className="project-card__copy">
              <div className="project-card__top">
                <h3>{project.title}</h3>

                <span className="project-card__type">{project.type}</span>
              </div>

              <p>{project.description}</p>

              <div className="project-card__tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href="#"
                className="project-card__link"
                aria-label={`Voir le projet ${project.title}`}
              >
                Voir le projet
                <ExternalLink size={12} />
              </a>
            </div>

            <div
              className={`project-visual project-visual--${project.visual}`}
              aria-hidden="true"
            >
              {project.visual === "dashboard" && (
                <div className="project-dashboard">
                  <div className="project-dashboard__sidebar">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="project-dashboard__content">
                    <div className="project-dashboard__head">
                      <span />
                      <span />
                    </div>

                    <div className="project-dashboard__cards">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="project-dashboard__chart">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              )}

              {project.visual === "cinema" && (
                <div className="project-cinema">
                  <div className="project-cinema__hero">
                    <span>CINEVERSE</span>
                  </div>

                  <div className="project-cinema__posters">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}

              {project.visual === "green" && (
                <div className="project-green">
                  <span className="project-green__label">GREENFOLIO</span>

                  <div className="project-green__plant">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>

                  <span className="project-green__line" />
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
