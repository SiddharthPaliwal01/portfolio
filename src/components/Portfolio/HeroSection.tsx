import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile-picture.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.section 
      id="home" 
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-accent/20 rounded-full"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto pt-8 lg:pt-12">
          {/* Mobile: Name First */}
          <motion.div 
            className="lg:hidden text-center mb-4 mt-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-foreground leading-tight text-center">
              Hello!!, I am{" "}
              <span className="accent-gradient bg-clip-text text-transparent">
                Siddharth Paliwal
              </span>
            </h1>
          </motion.div>

          {/* Mobile: Image Second */}
          <motion.div 
            className="lg:hidden flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-mint/20 p-4">
                <img 
                  src={profileImage} 
                  alt="Siddharth Paliwal" 
                  className="w-80 h-96 md:w-96 md:h-[480px] object-cover rounded-xl shadow-large transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                />
                <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
                
                {/* Resume Download Overlay */}
                <div className="absolute inset-4 rounded-xl bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                  <Button 
                    onClick={() => {
                      // Create a temporary link to download resume
                      const link = document.createElement('a');
                      link.href = '/Siddharth-Paliwal-Resume.pdf';
                      link.download = 'Siddharth-Paliwal-Resume.pdf';
                      link.click();
                    }}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    variant="outline"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card shadow-large rounded-xl p-4 border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Available for work</p>
                    <p className="text-xs text-muted-foreground">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Content */}
          <motion.div 
            className="space-y-8 text-left flex flex-col justify-center lg:mt-16"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div>
              {/* Desktop: Main Heading */}
              <h1 className="hidden lg:block text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Hello!!, I am{" "}
                <span className="accent-gradient bg-clip-text text-transparent">
                  Siddharth Paliwal
                </span>
              </h1>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base md:text-lg">
                  AI Engineer & Developer passionate about creating scalable solutions 
                  that blend deep learning, system performance, and clean code into high-impact products.
                </p>
              </div>
            </div>

            {/* Specializations */}
            <div className="space-y-3">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-base font-semibold text-foreground mb-1">Specialization</h3>
                <p className="text-sm text-muted-foreground">AI/ML Engineering • Deep Learning • Computer Vision</p>
              </div>
              
              <div className="border-l-4 border-mint pl-4">
                <h3 className="text-base font-semibold text-foreground mb-1">Current Focus</h3>
                <p className="text-sm text-muted-foreground">Generative AI • System Architecture • Product Development</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="shadow-medium glow-on-hover transition-bounce">
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="shadow-medium glow-on-hover transition-bounce">
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/siddharthpaliwal01" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card shadow-medium glow-on-hover transition-smooth hover:scale-105">
                <Linkedin className="w-5 h-5 text-accent" />
              </a>
              <a href="https://github.com/SiddharthPaliwal01" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card shadow-medium glow-on-hover transition-smooth hover:scale-105">
                <Github className="w-5 h-5 text-accent" />
              </a>
              <a href="mailto:paliwalsiddharth4@gmail.com" className="p-3 rounded-full bg-card shadow-medium glow-on-hover transition-smooth hover:scale-105">
                <Mail className="w-5 h-5 text-accent" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                paliwalsiddharth4@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Desktop: Image Right */}
          <motion.div 
            className="hidden lg:flex justify-center lg:justify-end"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-mint/20 p-4">
                <img 
                  src={profileImage} 
                  alt="Siddharth Paliwal" 
                  className="w-80 h-96 md:w-96 md:h-[480px] object-cover rounded-xl shadow-large transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                />
                <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
                
                {/* Resume Download Overlay */}
                <div className="absolute inset-4 rounded-xl bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                  <Button 
                    onClick={() => {
                      // Create a temporary link to download resume
                      const link = document.createElement('a');
                      link.href = '/Siddharth-Paliwal-Resume.pdf';
                      link.download = 'Siddharth-Paliwal-Resume.pdf';
                      link.click();
                    }}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    variant="outline"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card shadow-large rounded-xl p-4 border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Available for work</p>
                    <p className="text-xs text-muted-foreground">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Centered */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="animate-bounce">
            <button onClick={() => scrollToSection("about")} className="p-2 rounded-full bg-card/50 backdrop-blur-sm hover:bg-card transition-smooth">
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;