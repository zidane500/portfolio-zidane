export default function Home() {
  return (
    <main className="portfolio-shell">
      {/* Ambient lights */}
      <div className="ambient-orb ambient-orb--one" aria-hidden="true" />

      <div className="ambient-orb ambient-orb--two" aria-hidden="true" />

      <div className="ambient-orb ambient-orb--three" aria-hidden="true" />

      {/* Interface decoration */}
      <div className="interface-topline" aria-hidden="true">
        <span>PORTFOLIO / 2026</span>

        <div className="interface-topline__line" />

        <span>CREATIVE DEVELOPER</span>
      </div>

      {/* Temporary Block 01 preview */}
      <section className="foundation-stage">
        <div className="foundation-card">
          <div className="foundation-label">
            <span className="foundation-dot" />
            System initialized
          </div>

          <h1 className="foundation-title">
            Digital experiences
            <br />
            <span>beyond interfaces.</span>
          </h1>

          <p className="foundation-description">
            Une interface pensée comme un univers numérique : minimaliste,
            immersive, précise et profondément moderne. Cette fondation
            accueillera bientôt le Hero, la navigation, les projets,
            l&apos;expérience et les interactions du portfolio.
          </p>

          <div className="foundation-grid">
            <div className="foundation-mini-card">
              <span>Visual system</span>
              <strong>Dark / Glass / Neon</strong>
            </div>

            <div className="foundation-mini-card">
              <span>Technology</span>
              <strong>Next.js + TypeScript</strong>
            </div>

            <div className="foundation-mini-card">
              <span>Experience</span>
              <strong>Immersive & Interactive</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
