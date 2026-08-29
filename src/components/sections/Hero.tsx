"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import { ArrowRight, MapPin, Send } from "lucide-react";

import {
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import type { MouseEvent } from "react";

import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  // Coupe les animations en boucle infinie pour les visiteurs qui
  // ont activé "Réduire les animations" au niveau système (accessibilité)
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 110,
    damping: 22,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 110,
    damping: 22,
  });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;

    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function resetMouse() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section id="home" className="ref-hero">
      {/* TOP CONTROLS */}

      <div className="ref-hero__top">
        <div />

        <div className="ref-top-controls">
          <div className="ref-location">
            <MapPin size={16} />
            Tunisie
          </div>

          <div className="ref-online">
            <span />
            Disponible
          </div>
        </div>
      </div>

      {/* HERO MAIN */}

      <div className="ref-hero__main">
        <motion.div
          className="ref-hero__copy"
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h1 className="ref-title">
            <span className="ref-title__name">Zidane Haffar</span>
          </h1>

          <h2 className="ref-role">
            Développeur Full Stack & Solutions Métier
          </h2>

          <p className="ref-description">
            Je développe des applications web, mobiles et des solutions métier
            adaptées aux besoins réels des entreprises.
          </p>

          <p className="ref-description ref-description--small">
            React, TypeScript, Laravel, PostgreSQL, Android et ERP : je combine
            développement logiciel et compréhension des processus métier.
          </p>

          <div className="ref-actions">
            <MagneticButton
              href="#projects"
              className="ref-button ref-button--primary"
            >
              Voir mes projets
              <ArrowRight size={18} />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="ref-button ref-button--secondary"
            >
              Me contacter
              <Send size={16} />
            </MagneticButton>
          </div>
        </motion.div>

        {/* RIGHT HOLOGRAM */}

        <motion.div
          className="ref-hologram"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="ref-hologram__glow" />
          <div className="ref-hologram__grid" />

          <div className="ref-orbit ref-orbit--1" />
          <div className="ref-orbit ref-orbit--2" />
          <div className="ref-orbit ref-orbit--3" />

          <motion.div
            className="ref-tech ref-tech--react"
            animate={{
              y: prefersReducedMotion ? 0 : [0, -9, 0],
            }}
            transition={{
              duration: 4,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <SiReact />
          </motion.div>

          <motion.div
            className="ref-tech ref-tech--next"
            animate={{
              x: prefersReducedMotion ? 0 : [0, -6, 0],
              y: prefersReducedMotion ? 0 : [0, 6, 0],
            }}
            transition={{
              duration: 5,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <SiNextdotjs />
          </motion.div>

          <motion.div
            className="ref-tech ref-tech--laravel"
            animate={{
              x: prefersReducedMotion ? 0 : [0, 5, 0],
              y: prefersReducedMotion ? 0 : [0, -7, 0],
            }}
            transition={{
              duration: 4.6,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <SiLaravel />
          </motion.div>

          <motion.div
            className="ref-tech ref-tech--ts"
            animate={{
              y: prefersReducedMotion ? 0 : [0, 10, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <SiTypescript />
          </motion.div>

          <motion.div
            className="ref-tech ref-tech--tailwind"
            animate={{
              x: prefersReducedMotion ? 0 : [0, 7, 0],
              y: prefersReducedMotion ? 0 : [0, -5, 0],
            }}
            transition={{
              duration: 5.3,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <SiTailwindcss />
          </motion.div>

          <motion.div
            className="ref-device"
            style={{
              rotateX,
              rotateY,
            }}
          >
            <div className="ref-device__screen">
              <div className="ref-device__topbar">
                <div className="ref-device__dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>index.tsx</span>
              </div>

              <div className="ref-code">
                <div>
                  <span className="ref-line">01</span>
                  <code>
                    <b>const</b> <i>developer</i> = {"{"}
                  </code>
                </div>

                <div>
                  <span className="ref-line">02</span>
                  <code>
                    &nbsp;&nbsp;name: <em>&quot;Zidane&quot;</em>,
                  </code>
                </div>

                <div>
                  <span className="ref-line">03</span>
                  <code>
                    &nbsp;&nbsp;role: <em>&quot;Full Stack Developer&quot;</em>,
                  </code>
                </div>

                <div>
                  <span className="ref-line">04</span>
                  <code>&nbsp;&nbsp;stack: [</code>
                </div>

                <div>
                  <span className="ref-line">05</span>
                  <code>
                    &nbsp;&nbsp;&nbsp;
                    <em>&quot;React + TypeScript&quot;</em>,
                  </code>
                </div>

                <div>
                  <span className="ref-line">06</span>
                  <code>
                    &nbsp;&nbsp;&nbsp;
                    <em>&quot;PHP + Laravel&quot;</em>,
                  </code>
                </div>

                <div>
                  <span className="ref-line">07</span>
                  <code>
                    &nbsp;&nbsp;&nbsp;
                    <em>&quot;PostgreSQL + MySQL&quot;</em>,
                  </code>
                </div>

                <div>
                  <span className="ref-line">08</span>
                  <code>&nbsp;&nbsp;],</code>
                </div>

                <div>
                  <span className="ref-line">09</span>
                  <code>
                    &nbsp;&nbsp;focus:{" "}
                    <em>&quot;Web • Mobile • Solutions métier&quot;</em>
                  </code>
                </div>

                <div>
                  <span className="ref-line">10</span>
                  <code>{"};"}</code>
                </div>
              </div>
            </div>

            <div className="ref-device__base">
              <span />
              <span />
              <span />
            </div>

            <div className="ref-device__energy" />
          </motion.div>
        </motion.div>
      </div>

      {/* STAT CARDS */}

      <motion.div
        className="ref-stats"
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.4,
        }}
      ></motion.div>
    </section>
  );
}
