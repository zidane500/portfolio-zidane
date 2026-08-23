"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      className="contact-section"
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
      {/* LEFT */}

      <div className="contact-copy">
        <span className="contact-eyebrow">Un projet en tête ?</span>

        <h2>
          Créons quelque chose
          <br />
          <span>d&apos;extraordinaire.</span>
        </h2>

        <p>
          Discutons de votre idée et construisons ensemble une expérience
          digitale moderne, performante et mémorable.
        </p>
      </div>

      {/* CENTER */}

      <div className="contact-center">
        <div className="contact-information">
          <motion.a
            href={`mailto:${siteConfig.email}`}
            className="contact-info-item"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 * 0.08 }}
          >
            <span className="contact-info-item__icon">
              <Mail size={17} />
            </span>

            <span>
              <small>Email</small>
              <strong>{siteConfig.email}</strong>
            </span>
          </motion.a>

          <motion.a
            href={`tel:${siteConfig.phone}`}
            className="contact-info-item"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 * 0.08 }}
          >
            <span className="contact-info-item__icon">
              <Phone size={17} />
            </span>

            <span>
              <small>Téléphone</small>
              <strong>{siteConfig.phone}</strong>
            </span>
          </motion.a>

          <motion.div
            className="contact-info-item"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 2 * 0.08 }}
          >
            <span className="contact-info-item__icon">
              <MapPin size={17} />
            </span>

            <span>
              <small>Localisation</small>
              <strong>{siteConfig.location}</strong>
            </span>
          </motion.div>
        </div>

        <a href={`mailto:${siteConfig.email}`} className="contact-button">
          <span>Démarrer un projet</span>

          <ArrowRight size={17} />
        </a>
      </div>

      {/* HOLOGRAM */}

      <div className="contact-hologram" aria-hidden="true">
        <div className="contact-hologram__ambient" />

        <div className="contact-hologram__orbit contact-hologram__orbit--1">
          <span />
        </div>

        <div className="contact-hologram__orbit contact-hologram__orbit--2">
          <span />
        </div>

        <motion.div
          className="contact-crystal"
          animate={{
            y: prefersReducedMotion ? 0 : [0, -9, 0],
            rotateY: prefersReducedMotion ? 0 : [0, 7, 0, -7, 0],
          }}
          transition={{
            duration: 6,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="contact-crystal__outer">
            <div className="contact-crystal__middle">
              <div className="contact-crystal__core">
                <Send size={28} />
              </div>
            </div>
          </div>

          <span className="contact-crystal__flare" />
        </motion.div>

        <Sparkles
          className="contact-hologram__spark contact-hologram__spark--1"
          size={13}
        />

        <Sparkles
          className="contact-hologram__spark contact-hologram__spark--2"
          size={10}
        />

        <div className="contact-hologram__platform">
          <span />
        </div>
      </div>
    </motion.section>
  );
}
