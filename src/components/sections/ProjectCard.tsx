"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { useTilt } from "@/hooks/useTilt";

export interface Project {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  className: string;
  visual: "dashboard" | "cinema" | "green";
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
          href={project.url ?? "#"}
          className="project-card__link"
          aria-label={`Voir le projet ${project.title}`}
          {...(project.url
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
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
  );
}
