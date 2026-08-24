"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { useTilt } from "@/hooks/useTilt";

export interface Project {
  title: string;
  type: string;
  description: string;
  features: string[];
  className: string;
  visual: "lms" | "ecommerce" | "stock";
  url?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const tilt = useTilt<HTMLElement>({ max: 6 });

  return (
    <motion.article
      className={`project-card ${project.className}`}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
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
      {/* CONTENT */}

      <div className="project-card__copy">
        <div className="project-card__top">
          <h3>{project.title}</h3>

          <span className="project-card__type">{project.type}</span>
        </div>

        <p>{project.description}</p>

        <div className="project-card__tags">
          {project.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>

        {project.url ? (
          <a
            href={project.url}
            className="project-card__link"
            aria-label={`Voir le projet ${project.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le projet
            <ExternalLink size={12} />
          </a>
        ) : (
          <span className="project-card__link">Projet réalisé</span>
        )}
      </div>

      {/* VISUAL */}

      <div
        className={`project-visual project-visual--${project.visual}`}
        aria-hidden="true"
      >
        {/* LMS */}

        {project.visual === "lms" && (
          <div className="project-lms">
            <div className="project-lms__topbar">
              <span className="project-lms__logo">LMS</span>

              <div className="project-lms__dots">
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="project-lms__body">
              <div className="project-lms__sidebar">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="project-lms__content">
                <div className="project-lms__title">Tableau de bord</div>

                <div className="project-lms__cards">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="project-lms__progress">
                  <span>
                    <i />
                  </span>

                  <span>
                    <i />
                  </span>

                  <span>
                    <i />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* E-COMMERCE */}

        {project.visual === "ecommerce" && (
          <div className="project-shop">
            <div className="project-shop__header">
              <strong>STORE</strong>

              <span>Cart • 3</span>
            </div>

            <div className="project-shop__hero">
              <span>E-COMMERCE</span>
              <small>Dashboard</small>
            </div>

            <div className="project-shop__products">
              <div>
                <span />
                <small>Produit</small>
              </div>

              <div>
                <span />
                <small>Produit</small>
              </div>

              <div>
                <span />
                <small>Produit</small>
              </div>
            </div>
          </div>
        )}

        {/* STOCK */}

        {project.visual === "stock" && (
          <div className="project-stock">
            <div className="project-stock__header">
              <strong>STOCK</strong>

              <span>LIVE</span>
            </div>

            <div className="project-stock__metrics">
              <div>
                <small>Entrées</small>
                <strong>+128</strong>
              </div>

              <div>
                <small>Sorties</small>
                <strong>84</strong>
              </div>

              <div>
                <small>Alertes</small>
                <strong>03</strong>
              </div>
            </div>

            <div className="project-stock__table">
              <span>
                <i />
                <b />
                <em />
              </span>

              <span>
                <i />
                <b />
                <em />
              </span>

              <span>
                <i />
                <b />
                <em />
              </span>

              <span>
                <i />
                <b />
                <em />
              </span>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}
