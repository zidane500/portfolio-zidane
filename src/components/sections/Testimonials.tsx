"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "CEO",
    company: "Nova SaaS",
    quote:
      "Zidane a livré un produit exceptionnel, à l’écoute, réactif et force de proposition. Un vrai partenaire.",
    initials: "MD",
    className: "testimonial-card--gold",
    avatarClass: "testimonial-avatar--marie",
  },
  {
    name: "Thomas Bernard",
    role: "CTO",
    company: "Greenfolio",
    quote:
      "Travail impeccable, code propre et performances au rendez-vous. Je recommande son travail sans hésiter.",
    initials: "TB",
    className: "testimonial-card--blue",
    avatarClass: "testimonial-avatar--thomas",
  },
  {
    name: "Sophie Martin",
    role: "Product Manager",
    company: "Cineverse",
    quote:
      "Zidane comprend très vite les besoins et propose des solutions modernes, élégantes et efficaces.",
    initials: "SM",
    className: "testimonial-card--purple",
    avatarClass: "testimonial-avatar--sophie",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="testimonials-section"
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
      {/* ==================================================
          SECTION HEADER
      ================================================== */}

      <div className="testimonials-heading">
        <div className="testimonials-heading__title">
          <span className="testimonials-heading__dot" />

          <h2>Ils parlent de moi</h2>
        </div>

        <a href="#testimonials" className="testimonials-heading__link">
          Voir plus d&apos;avis
          <ArrowRight size={14} />
        </a>
      </div>

      {/* ==================================================
          TESTIMONIAL CARDS
      ================================================== */}

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            className={`testimonial-card ${testimonial.className}`}
            initial={{
              opacity: 0,
              y: 16,
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
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* ==============================================
                ANIMATED BORDER LIGHT

                La lumière suit réellement le contour
                du rectangle grâce au tracé SVG.
            ============================================== */}

            <svg
              className="testimonial-border-light"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <rect
                className="testimonial-border-light__track"
                x="0.7"
                y="0.7"
                width="98.6"
                height="98.6"
                rx="4"
                ry="4"
                pathLength="100"
                vectorEffect="non-scaling-stroke"
              />

              <rect
                className="testimonial-border-light__beam"
                x="0.7"
                y="0.7"
                width="98.6"
                height="98.6"
                rx="4"
                ry="4"
                pathLength="100"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* ==============================================
                PERSON
            ============================================== */}

            <div className="testimonial-card__top">
              <div className={`testimonial-avatar ${testimonial.avatarClass}`}>
                <span>{testimonial.initials}</span>
              </div>

              <div className="testimonial-person">
                <strong>{testimonial.name}</strong>

                <span>
                  {testimonial.role}, {testimonial.company}
                </span>
              </div>

              {/* ============================================
                  STARS
              ============================================ */}

              <div className="testimonial-stars" aria-label="5 étoiles sur 5">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={13}
                    strokeWidth={1.6}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>

            {/* ==============================================
                TESTIMONIAL TEXT
            ============================================== */}

            <div className="testimonial-card__body">
              <Quote
                className="testimonial-quote"
                size={24}
                strokeWidth={1.2}
                aria-hidden="true"
              />

              <p>&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
