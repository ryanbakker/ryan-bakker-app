import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/Contact";
import ResumeSection from "@/components/ResumeSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectSection />
      <Contact />
      <ResumeSection />
    </main>
  );
}
