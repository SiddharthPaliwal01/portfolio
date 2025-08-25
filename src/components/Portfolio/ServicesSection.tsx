import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Globe, Palette, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "AI & Machine Learning Solutions",
      description: "Custom AI models, deep learning systems, and intelligent automation solutions tailored to your business needs.",
      icon: Brain,
      color: "accent",
      features: [
        "Custom ML model development",
        "Computer vision applications", 
        "Natural language processing",
        "Predictive analytics systems",
        "AI system optimization"
      ],
      technologies: ["TensorFlow", "PyTorch", "LangChain", "OpenCV"]
    },
    {
      title: "Web Development",
      description: "Scalable, modern web applications with clean architecture, optimal performance, and exceptional user experience.",
      icon: Globe,
      color: "mint",
      features: [
        "Full-stack web applications",
        "RESTful API development",
        "Database design & optimization",
        "Real-time applications",
        "Performance optimization"
      ],
      technologies: ["React", "Flask", "FastAPI", "MongoDB"]
    },
    {
      title: "UI/UX & Product Design",
      description: "User-centered design solutions that combine aesthetic appeal with functional excellence and intuitive interactions.",
      icon: Palette,
      color: "blush",
      features: [
        "User interface design",
        "User experience research",
        "Prototype development",
        "Design system creation",
        "Product strategy consulting"
      ],
      technologies: ["Figma", "Design Systems", "Prototyping", "User Research"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions that blend technology, creativity, and strategic thinking
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="card-gradient shadow-medium border-0 card-hover animate-fade-in-up group" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="pb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-${service.color} text-${service.color}-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl mb-4">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">What I Offer:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-smooth"
                    onClick={scrollToContact}
                  >
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">My Approach</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Strategy", description: "Planning the optimal solution approach" },
              { step: "03", title: "Development", description: "Building with best practices and quality" },
              { step: "04", title: "Delivery", description: "Testing, optimization, and handover" }
            ].map((process, index) => (
              <Card key={process.step} className="card-gradient shadow-soft border-0 subtle-hover text-center animate-fade-in-up" style={{ animationDelay: `${0.6 + (index * 0.1)}s` }}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-3">{process.step}</div>
                  <h4 className="font-semibold text-foreground mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="accent-gradient shadow-large border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-accent-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-accent-foreground/90 mb-6">
                Let's discuss how I can help bring your ideas to life with cutting-edge technology and thoughtful design.
              </p>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-card text-card-foreground hover:scale-105 transition-bounce shadow-medium"
              >
                Get In Touch Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;