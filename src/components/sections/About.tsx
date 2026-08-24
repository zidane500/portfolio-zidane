"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  Database,
  MonitorSmartphone,
  ServerCog,
  Smartphone,
} from "lucide-react";

import Image from "next/image";

const qualities = [
  {
    icon: Code2,
    label: "Développement Full Stack",
    description: "Du frontend au backend, avec une vision complète.",
    className: "about-chip--blue",
  },
  {
    icon: MonitorSmartphone,
    label: "React & Next.js",
    description: "Interfaces web modernes et responsives.",
    className: "about-chip--green",
  },
  {
    icon: ServerCog,
    label: "Laravel & REST API",
    description: "Backends structurés et APIs métier.",
    className: "about-chip--orange",
  },
  {
    icon: Database,
    label: "PostgreSQL & MySQL",
    description: "Conception et gestion des données.",
    className: "about-chip--purple",
  },
  {
    icon: Smartphone,
    label: "Mobile & Desktop",
    description: "Android, Java et applications Electron.",
    className: "about-chip--orange",
  },
  {
    icon: Boxes,
    label: "ERP & Solutions Métier",
    description: "Stock, facturation et processus d'entreprise.",
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

        <div className="about-photo">
          <Image
            src="/images/zidane-about.png"
            alt="Portrait de Zidane"
            fill
            priority
            sizes="(max-width: 850px) 80vw, 300px"
            className="about-photo__image"
          />
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div className="about-content">
        <div className="about-heading">
          <span className="about-heading__dot" />

          <h2>À propos de moi</h2>
        </div>

        <p className="about-intro">
          Diplômé en Informatique de Gestion, spécialité E-Business, je
          développe des applications web, mobiles et des solutions métier en
          combinant développement Full Stack et compréhension des besoins de
          l&apos;entreprise.
        </p>

        <p className="about-text">
          J&apos;aime transformer des besoins concrets en solutions fiables,
          simples à utiliser et maintenables, qu&apos;il s&apos;agisse
          d&apos;applications web, mobiles ou d&apos;outils de gestion.
        </p>

        <div className="about-chips">
          {qualities.map((quality, index) => {
            const Icon = quality.icon;

            return (
              <motion.div
                key={quality.label}
                className={`about-chip ${quality.className}`}
                initial={{
                  opacity: 0,
                  y: 12,
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
                  delay: index * 0.06,
                }}
              >
                <span className="about-chip__icon">
                  <Icon size={18} />
                </span>

                <span className="about-chip__copy">
                  <strong>{quality.label}</strong>
                  <small>{quality.description}</small>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* RIGHT STATUS PANEL */}
    </motion.section>
  );
}
