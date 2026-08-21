"use client";

import { motion } from "framer-motion";
import {
  CloudCog,
  Database,
  MonitorSmartphone,
  ServerCog,
  Shapes,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    className: "skills-card--blue",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    className: "skills-card--green",
    skills: ["Node.js", "NestJS", "Express", "GraphQL", "REST API"],
  },
  {
    title: "Base de données",
    icon: Database,
    className: "skills-card--orange",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    title: "Outils & DevOps",
    icon: CloudCog,
    className: "skills-card--purple",
    skills: ["Docker", "Git", "CI/CD", "AWS", "Vercel"],
  },
  {
    title: "Autres",
    icon: Shapes,
    className: "skills-card--violet",
    skills: ["Figma", "Storybook", "Vitest", "ESLint", "Prettier"],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills-section"
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
      <div className="skills-heading">
        <span className="skills-heading__dot" />

        <h2>Compétences & Stack</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => {
          const Icon = group.icon;

          return (
            <motion.article
              key={group.title}
              className={`skills-card ${group.className}`}
              initial={{
                opacity: 0,
                y: 15,
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
                delay: groupIndex * 0.06,
              }}
            >
              <div className="skills-card__header">
                <span className="skills-card__icon">
                  <Icon size={15} strokeWidth={1.8} />
                </span>

                <h3>{group.title}</h3>
              </div>

              <div className="skills-card__tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
