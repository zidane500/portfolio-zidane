import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="portfolio-shell">
      <div className="ambient-orb ambient-orb--one" aria-hidden="true" />

      <div className="ambient-orb ambient-orb--two" aria-hidden="true" />

      <Sidebar />

      <div className="ref-main">
        <Hero />
      </div>
    </main>
  );
}
