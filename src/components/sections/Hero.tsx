"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
  Award,
  Code2,
  MapPin,
  Moon,
  Package,
  Send,
  Sun,
  Users,
  Zap,
} from "lucide-react";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import type { MouseEvent } from "react";

import { siteConfig } from "@/config/site";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MagneticButton from "@/components/ui/MagneticButton";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function Hero() {
  // Coupe les animations en boucle infinie pour les visiteurs qui
  // ont activé "Réduire les animations" au niveau système (accessibilité)
  const prefersReducedMotion = useReducedMotion();
  const { theme, toggleTheme } = useTheme();

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
            <span className="ref-title__hello">Salut, je suis</span>

            <span className="ref-title__name">Zidane Haffar</span>
          </h1>

          <h2 className="ref-role">
            Développeur Full Stack & Créatif Numérique
          </h2>

          <p className="ref-description">
            Je conçois des expériences digitales rapides et centrées
            utilisateur.
          </p>

          <p className="ref-description ref-description--small">
            Développeur Full Stack passionné par le code propre, les interfaces
            futuristes et les idées qui font la différence.
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
                    <em>&quot;React&quot;</em>,
                  </code>
                </div>

                <div>
                  <span className="ref-line">06</span>
                  <code>
                    &nbsp;&nbsp;&nbsp;
                    <em>&quot;Next.js&quot;</em>,
                  </code>
                </div>

                <div>
                  <span className="ref-line">07</span>
                  <code>
                    &nbsp;&nbsp;&nbsp;
                    <em>&quot;TypeScript&quot;</em>,
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
                    <em>&quot;Créer des produits qui comptent&quot;</em>
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
      >
        <div className="ref-stat ref-stat--blue">
          <div className="ref-stat__icon">
            <Zap size={20} />
          </div>

          <div>
            <strong>
              <AnimatedCounter value={4} suffix="+" />
            </strong>
            <span>Années d&apos;expérience</span>
          </div>
        </div>

        <div className="ref-stat ref-stat--purple">
          <div className="ref-stat__icon">
            <Package size={18} />
          </div>

          <div>
            <strong>
              <AnimatedCounter value={30} suffix="+" />
            </strong>
            <span>Projets livrés</span>
          </div>
        </div>

        <div className="ref-stat ref-stat--green">
          <div className="ref-stat__icon">
            <Users size={18} />
          </div>

          <div>
            <strong>
              <AnimatedCounter value={15} suffix="+" />
            </strong>
            <span>Clients satisfaits</span>
          </div>
        </div>

        <div className="ref-stat ref-stat--orange">
          <div className="ref-stat__icon">
            <Award size={18} />
          </div>

          <div>
            <strong>
              <AnimatedCounter value={99} suffix="%" />
            </strong>
            <span>Satisfaction</span>
          </div>
        </div>

        <div className="ref-stat ref-stat--cyan">
          <div className="ref-stat__icon ref-stat__infinity">∞</div>

          <div>
            <strong>∞</strong>
            <span>Passion & Curiosité</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
