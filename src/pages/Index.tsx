import useMetaTags from "@/hooks/use-meta-tags";
import Header from "@/components/Portfolio/Header";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ExperienceSection from "@/components/Portfolio/ExperienceSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import ServicesSection from "@/components/Portfolio/ServicesSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import ContactSection from "@/components/Portfolio/ContactSection";

const Index = () => {
  // SEO Meta Tags
  useMetaTags({
    title: "Siddharth Paliwal - Full Stack Developer & AI/ML Engineer",
    description: "Experienced Full Stack Developer specializing in AI/ML, React, Node.js, and modern web technologies. Available for freelance projects and collaboration.",
    keywords: "Siddharth Paliwal, Full Stack Developer, AI/ML Engineer, React Developer, Node.js, TypeScript, Machine Learning, Web Development, Portfolio",
    author: "Siddharth Paliwal",
    type: "website"
  });

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
