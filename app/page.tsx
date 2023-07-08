// Home Page
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
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
