"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Send, Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";
import { useActionState, useEffect, useRef } from "react";
import { sendContactMessage } from "@/actions/contact";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(sendContactMessage, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

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
        <span className="contact-eyebrow">Vous souhaitez me contacter ?</span>

        <h2>
          Échangeons autour de
          <br />
          <span>vos besoins.</span>
        </h2>

        <p>
          Je suis disponible pour échanger autour d&apos;opportunités
          professionnelles, de projets de développement web ou mobile, ainsi que
          de solutions informatiques adaptées aux besoins de l&apos;entreprise.
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
      {/* CONTACT FORM */}

      <div className="contact-form-wrapper">
        <div className="contact-form-header">
          <span className="contact-form-eyebrow">Formulaire de contact</span>

          <h3>Envoyez-moi un message</h3>

          <p>
            Une question, une opportunité ou un projet ? Je vous répondrai
            directement par e-mail.
          </p>
        </div>

        <form ref={formRef} action={formAction} className="contact-form">
          {/* NOM */}

          <div className="contact-form__field contact-form__field--name">
            <label htmlFor="contact-name">Nom</label>

            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Votre nom"
              autoComplete="name"
              maxLength={100}
              required
              disabled={isPending}
            />
          </div>

          {/* EMAIL */}

          <div className="contact-form__field contact-form__field--email">
            <label htmlFor="contact-email">Votre e-mail</label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="exemple@email.com"
              autoComplete="email"
              required
              disabled={isPending}
            />
          </div>

          {/* MESSAGE */}

          <div className="contact-form__field contact-form__field--message">
            <label htmlFor="contact-message">Votre message</label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="Écrivez votre message..."
              rows={6}
              maxLength={5000}
              required
              disabled={isPending}
            />
          </div>

          {/* HONEYPOT */}

          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="contact-form__honeypot"
          />

          {/* STATUS */}

          {state.message && (
            <p
              className={`contact-form__status ${
                state.success
                  ? "contact-form__status--success"
                  : "contact-form__status--error"
              }`}
              aria-live="polite"
            >
              {state.message}
            </p>
          )}

          {/* BUTTON */}

          <button
            type="submit"
            className="contact-form__submit"
            disabled={isPending}
          >
            <span>{isPending ? "Envoi en cours..." : "Envoyer"}</span>

            <Send size={17} />
          </button>
        </form>
      </div>
    </motion.section>
  );
}
