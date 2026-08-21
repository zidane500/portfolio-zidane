"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { ArrowDownRight, ArrowUpRight, Download, Sparkles } from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import type { MouseEvent } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section id="home" className="hero-section">
      {/* LEFT SIDE */}
      <div className="hero-copy">
        <motion.div
          className="hero-availability"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="hero-availability__pulse" />
          Disponible pour de nouveaux projets
          <Sparkles size={13} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="hero-kicker">Salut, je suis</span>

          <h1 className="hero-name">
            ZIDANE
            <span>.</span>
          </h1>
        </motion.div>

        <motion.div
          className="hero-role"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.15,
          }}
        >
          <span>Creative</span>

          <span className="hero-role__divider" />

          <strong>Full-Stack Developer</strong>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.22,
          }}
        >
          Je transforme des idées en expériences digitales modernes, rapides et
          mémorables — à l&apos;intersection du code, du design et de
          l&apos;innovation.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          <a href="#projects" className="hero-button hero-button--primary">
            Explorer mes projets
            <ArrowUpRight size={17} />
          </a>

          <a href="#contact" className="hero-button hero-button--secondary">
            Me contacter
            <ArrowDownRight size={17} />
          </a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.42,
          }}
        >
          <div className="hero-socials">
            <a href="#" aria-label="GitHub">
              <FaGithub size={17} />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn size={17} />
            </a>
          </div>

          <span className="hero-meta__line" />

          <button type="button" className="hero-download">
            <Download size={15} />
            Télécharger CV
          </button>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        className="hero-visual"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.16,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="hero-visual__light" />

        <div className="hero-orbit hero-orbit--one" aria-hidden="true" />

        <div className="hero-orbit hero-orbit--two" aria-hidden="true" />

        <div className="hero-orbit hero-orbit--three" aria-hidden="true" />

        {/* Floating Technologies */}

        <motion.div
          className="tech-float tech-float--react"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>⚛</span>
          React
        </motion.div>

        <motion.div
          className="tech-float tech-float--ts"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <strong>TS</strong>
        </motion.div>

        <motion.div
          className="tech-float tech-float--next"
          animate={{
            x: [0, 8, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          N
        </motion.div>

        {/* Holographic device */}

        <motion.div
          className="code-device"
          style={{
            rotateX,
            rotateY,
          }}
        >
          <div className="code-device__screen">
            <div className="code-header">
              <div className="code-header__dots">
                <span />
                <span />
                <span />
              </div>

              <span className="code-header__file">portfolio.tsx</span>

              <span className="code-header__status">● LIVE</span>
            </div>

            <div className="code-content">
              <div className="code-line">
                <span className="line-number">01</span>

                <code>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">02</span>

                <code>
                  &nbsp;&nbsp;name:{" "}
                  <span className="code-green">&quot;Zidane&quot;</span>,
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">03</span>

                <code>
                  &nbsp;&nbsp;role:{" "}
                  <span className="code-green">
                    &quot;Full-Stack Developer&quot;
                  </span>
                  ,
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">04</span>

                <code>&nbsp;&nbsp;stack: [</code>
              </div>

              <div className="code-line">
                <span className="line-number">05</span>

                <code>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-green">&quot;Next.js&quot;</span>,
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">06</span>

                <code>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-green">&quot;TypeScript&quot;</span>,
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">07</span>

                <code>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-green">&quot;React&quot;</span>
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">08</span>

                <code>&nbsp;&nbsp;],</code>
              </div>

              <div className="code-line">
                <span className="line-number">09</span>

                <code>
                  &nbsp;&nbsp;mission:{" "}
                  <span className="code-green">
                    &quot;build the future&quot;
                  </span>
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">10</span>

                <code>{"};"}</code>
              </div>
            </div>
          </div>

          <div className="device-platform">
            <span className="device-platform__light" />
          </div>
        </motion.div>

        <div className="hero-visual__coordinates">
          <span>48.8566° N</span>
          <span>02.3522° E</span>
        </div>
      </motion.div>

      {/* bottom hint */}

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.7,
        }}
      >
        <span>Scroll to explore</span>

        <div className="hero-scroll__line" />

        <ArrowDownRight size={15} />
      </motion.div>
    </section>
  );
}
