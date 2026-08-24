"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, MonitorSmartphone, Rocket, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

const experiences = [
  {
    period: "Fév. 2026 — Mai 2026",
    role: "Développeur Full Stack Stagiaire",
    company: "Maison Du Web",
    detail: "Plateforme LMS",
    icon: Rocket,
    className: "experience-item--blue",
  },
  {
    period: "Juil. 2025 — Sept. 2025",
    role: "Développeur Full Stack Stagiaire",
    company: "Maison Du Web",
    detail: "Solution E-commerce SaaS",
    icon: Code2,
    className: "experience-item--purple",
  },
  {
    period: "Juin 2023 — Août 2024",
    role: "Agent Administration & Développement Web",
    company: "GKM",
    detail: "Gestion de stock & logistique",
    icon: MonitorSmartphone,
    className: "experience-item--violet",
  },
  {
    period: "Juin 2021 — Août 2022",
    role: "Agent Administration & Développement Mobile",
    company: "GKM",
    detail: "Stock, automatisation & suivi des flux",
    icon: Sparkles,
    className: "experience-item--cyan",
  },
];

function TimelineNode({
  progress,
  index,
}: {
  progress: ReturnType<typeof useSpring>;
  index: number;
}) {
  // Position de chaque point par rapport au déplacement de la lumière
  const thresholds = [0, 0.25, 0.53, 0.82];

  const threshold = thresholds[index];

  const lightOpacity = useTransform(
    progress,
    [Math.max(0, threshold - 0.015), threshold],
    [0, 1],
  );

  const lightScale = useTransform(
    progress,
    [Math.max(0, threshold - 0.015), threshold],
    [0.7, 1],
  );

  return (
    <span className="experience-item__node" aria-hidden="true">
      <motion.span
        className="experience-item__nodeLight"
        style={{
          opacity: lightOpacity,
          scale: lightScale,
        }}
      />
    </span>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.35,
  });

  const beamX = useTransform(progress, [0, 1], ["6%", "94%"]);
  const beamOpacity = useTransform(progress, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="experience-section"
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
      <div className="experience-heading">
        <div className="experience-heading__title">
          <span className="experience-heading__dot" />
          <h2>Expérience professionnelle</h2>
        </div>

        <a
          href={siteConfig.cvPath}
          className="experience-heading__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir mon CV complet
          <span>→</span>
        </a>
      </div>

      <div className="experience-timeline">
        <div className="experience-timeline__rail" aria-hidden="true" />

        {/* ligne lumineuse progressive */}
        <motion.div
          className="experience-timeline__progress"
          aria-hidden="true"
          style={{
            scaleX: progress,
            transformOrigin: "left center",
          }}
        />

        {/* orb qui avance / recule avec le scroll */}
        <motion.div
          className="experience-timeline__beam"
          aria-hidden="true"
          style={{
            left: beamX,
            opacity: beamOpacity,
          }}
        >
          <span className="experience-timeline__beamCore" />
          <span className="experience-timeline__beamHalo" />
        </motion.div>

        {experiences.map((experience, index) => {
          const Icon = experience.icon;

          return (
            <motion.article
              key={`${experience.role}-${experience.period}`}
              className={`experience-item ${experience.className}`}
              initial={{
                opacity: 0,
                y: 14,
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
              }}
            >
              <span className="experience-item__period">
                {experience.period}
              </span>

              <div className="experience-item__content">
                <span className="experience-item__icon">
                  <Icon size={18} strokeWidth={1.7} />
                </span>

                <div className="experience-item__copy">
                  <h3>{experience.role}</h3>
                  <strong>{experience.company}</strong>
                  <span>{experience.detail}</span>
                </div>
              </div>

              <TimelineNode progress={progress} index={index} />
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
