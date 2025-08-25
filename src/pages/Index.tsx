import Header from "@/components/Portfolio/Header";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ExperienceSection from "@/components/Portfolio/ExperienceSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import ServicesSection from "@/components/Portfolio/ServicesSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import ContactSection from "@/components/Portfolio/ContactSection";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
