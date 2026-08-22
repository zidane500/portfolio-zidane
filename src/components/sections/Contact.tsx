"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

export default function Contact() {
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
          <a href="mailto:hello@zidane.dev" className="contact-info-item">
            <span className="contact-info-item__icon">
              <Mail size={17} />
            </span>

            <span>
              <small>Email</small>
              <strong>hello@zidane.dev</strong>
            </span>
          </a>

          <a href="tel:+33612345678" className="contact-info-item">
            <span className="contact-info-item__icon">
              <Phone size={17} />
            </span>

            <span>
              <small>Téléphone</small>
              <strong>+33 6 12 34 56 78</strong>
            </span>
          </a>

          <div className="contact-info-item">
            <span className="contact-info-item__icon">
              <MapPin size={17} />
            </span>

            <span>
              <small>Localisation</small>
              <strong>Paris, France</strong>
            </span>
          </div>
        </div>

        <a href="mailto:hello@zidane.dev" className="contact-button">
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
            y: [0, -9, 0],
            rotateY: [0, 7, 0, -7, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
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
