import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-3 md:top-6 left-3 md:left-6 right-3 md:right-6 z-40 flex items-center justify-between">
      {/* Logo Glass Component */}
      <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-full px-4 md:px-6 py-2 md:py-3 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-base md:text-lg font-bold text-foreground">
          Portfolio
        </div>
      </div>

      {/* Desktop Navigation Glass Component */}
      <nav className="hidden lg:flex bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-full px-2 py-2 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                activeSection === item.id 
                  ? "bg-white/40 dark:bg-white/20 text-accent shadow-md" 
                  : "text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop Theme Toggle Glass Component */}
      <div className="hidden md:flex bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-full p-1.5 md:p-2 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 h-8 w-8 md:h-9 md:w-9 hover:scale-110 active:scale-95"
        >
          {theme === "light" ? (
            <Moon className="h-3.5 w-3.5 md:h-4 md:w-4 text-foreground transition-transform duration-300" />
          ) : (
            <Sun className="h-3.5 w-3.5 md:h-4 md:w-4 text-foreground transition-transform duration-300" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center space-x-2">
        {/* Mobile Theme Toggle */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-full p-1.5 border border-white/20 dark:border-white/10 shadow-lg">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 h-8 w-8"
          >
            {theme === "light" ? (
              <Moon className="h-3.5 w-3.5 text-foreground" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-foreground" />
            )}
          </Button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-full p-1.5 border border-white/20 dark:border-white/10 shadow-lg">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 h-8 w-8"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-3 right-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-xl p-3 animate-in slide-in-from-top-2 duration-200">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2.5 px-4 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
                  activeSection === item.id 
                    ? "bg-white/40 dark:bg-white/20 text-accent" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;