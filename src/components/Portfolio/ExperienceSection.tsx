import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Defence Research and Development Organisation (DRDO)",
      role: "Artificial Intelligence Research Intern",
      duration: "Oct 2024 – Dec 2024",
      location: "Jodhpur",
      description: "Worked on GANs for fake image generation and AI solutions in defence applications. Contributed to cutting-edge research in adversarial networks and their applications in security systems.",
      skills: ["GANs", "Deep Learning", "Computer Vision", "PyTorch", "Research"],
      color: "accent"
    },
    {
      company: "Humans of Chhattisgarh (For One Media)",
      role: "Web Developer Intern",
      duration: "Jan 2023 – Mar 2023",
      location: "Remote",
      description: "Developed and launched an organizational website with blogs and multimedia integration. Created a content management system for storytelling and community engagement.",
      skills: ["Web Development", "JavaScript", "React", "Node.js", "CMS"],
      color: "mint"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience in AI research and development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient shadow-medium border-0 card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Icon */}
                  <div className={`p-4 rounded-full bg-${exp.color} text-${exp.color}-foreground flex-shrink-0 w-fit`}>
                    <Building className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{exp.role}</h3>
                        <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end gap-2 mt-2 lg:mt-0">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="accent-gradient shadow-medium border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-accent-foreground mb-4">
                Looking for New Opportunities
              </h3>
              <p className="text-accent-foreground/90 mb-6">
                I'm always excited to work on challenging projects and collaborate with innovative teams. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:paliwalsiddharth4@gmail.com"
                  className="px-6 py-2 bg-card text-card-foreground rounded-lg font-medium hover:scale-105 transition-smooth shadow-medium"
                >
                  Get In Touch
                </a>
                <a
                  href="https://linkedin.com/in/siddharthpaliwal01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-card text-card rounded-lg font-medium hover:bg-card hover:text-card-foreground transition-smooth"
                >
                  View LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;