// Home Page
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
