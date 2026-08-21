import Sidebar from "@/components/layout/Sidebar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="portfolio-shell">
      <div className="ambient-orb ambient-orb--one" aria-hidden="true" />

      <div className="ambient-orb ambient-orb--two" aria-hidden="true" />

      <Sidebar />

      <div className="ref-main">
        <Hero />
        <About />
        <Skills />
      </div>
    </main>
  );
}
