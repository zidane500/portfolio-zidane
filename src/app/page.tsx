import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="portfolio-shell">
      <Sidebar />

      <div className="ambient-orb ambient-orb--one" aria-hidden="true" />

      <div className="ambient-orb ambient-orb--two" aria-hidden="true" />

      <div className="ambient-orb ambient-orb--three" aria-hidden="true" />

      <div className="portfolio-content">
        <div className="interface-topline" aria-hidden="true">
          <span>PORTFOLIO / 2026</span>

          <div className="interface-topline__line" />

          <span>CREATIVE DEVELOPER</span>
        </div>

        <Hero />
      </div>
    </main>
  );
}
