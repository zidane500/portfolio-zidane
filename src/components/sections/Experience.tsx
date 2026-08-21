"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, MonitorSmartphone, Rocket, Sparkles } from "lucide-react";

const experiences = [
  {
    period: "2022 — Aujourd’hui",
    role: "Développeur Full Stack",
    company: "Freelance",
    location: "Paris, France",
    icon: Rocket,
    className: "experience-item--blue",
  },
  {
    period: "2020 — 2022",
    role: "Développeur Frontend",
    company: "TechLabs",
    location: "Paris, France",
    icon: Code2,
    className: "experience-item--purple",
  },
  {
    period: "2019 — 2020",
    role: "Intégrateur Web",
    company: "Digitalify",
    location: "Paris, France",
    icon: MonitorSmartphone,
    className: "experience-item--violet",
  },
  {
    period: "2018 — 2019",
    role: "Développeur Junior",
    company: "WebAgency",
    location: "Paris, France",
    icon: Sparkles,
    className: "experience-item--cyan",
  },
];

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

        <a href="#" className="experience-heading__link">
          Voir mon profil complet
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
                  <span>{experience.location}</span>
                </div>
              </div>

              <span className="experience-item__node" aria-hidden="true" />
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
