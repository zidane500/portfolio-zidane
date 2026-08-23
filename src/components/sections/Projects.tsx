"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
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
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
