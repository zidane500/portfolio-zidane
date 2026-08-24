"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Plateforme LMS",
    type: "Application Web",
    description:
      "Conception et développement d'une plateforme LMS permettant la gestion des contenus, le suivi des utilisateurs et le reporting.",
    features: ["Gestion des contenus", "Suivi utilisateurs", "Reporting"],
    className: "project-card--nova",
    visual: "lms",
  },

  {
    title: "E-commerce SaaS",
    type: "Application Web",
    description:
      "Développement d'une solution e-commerce SaaS dédiée à la gestion des catalogues produits, des stocks et des commandes.",
    features: [
      "Catalogue produits",
      "Gestion des stocks",
      "Gestion des commandes",
    ],
    className: "project-card--cineverse",
    visual: "ecommerce",
  },

  {
    title: "Gestion de Stock",
    type: "Outil Métier",
    description:
      "Développement d'une application web de gestion de stock pour digitaliser le suivi des flux et améliorer la fiabilité des données.",
    features: ["Entrées / sorties", "Traçabilité", "Suivi des stocks"],
    className: "project-card--greenfolio",
    visual: "stock",
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

          <h2>Projets réalisés</h2>
        </div>

        <a href="#experience" className="projects-heading__link">
          Voir mon expérience
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
