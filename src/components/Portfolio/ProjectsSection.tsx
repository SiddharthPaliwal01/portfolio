import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Users } from "lucide-react";
const ProjectsSection = () => {
  const projects = [{
    title: "ChatBook",
    subtitle: "LLM Powered Document Assistant",
    date: "Feb 2025",
    description: "Real-time intelligent assistant built with Gemini 2.0 Flash and LangChain for seamless book and document Q&A. Features advanced vector search with ChromaDB for contextual responses.",
    features: ["Real-time document processing", "Intelligent Q&A system", "Vector-based search", "Multi-format support"],
    technologies: ["Gemini 2.0", "LangChain", "ChromaDB", "Python", "FastAPI"],
    status: "Featured",
    color: "accent",
    metrics: {
      accuracy: "95%",
      responseTime: "<2s",
      languages: "5+"
    }
  }, {
    title: "VisionCross",
    subtitle: "Safe Crossing Alert System",
    date: "May 2024",
    description: "Advanced computer vision system using YOLOv8 and SAHI model for detecting unsafe pedestrian crossings with 98% accuracy. Deployed real-time alert system for traffic safety.",
    features: ["Real-time object detection", "High-accuracy alerts", "SAHI integration", "Traffic analysis"],
    technologies: ["YOLOv8", "SAHI", "OpenCV", "Python", "TensorFlow"],
    status: "Production",
    color: "mint",
    metrics: {
      accuracy: "98%",
      detection: "Real-time",
      coverage: "24/7"
    }
  }, {
    title: "AttendEase",
    subtitle: "AI Facial Recognition System",
    date: "Mar 2023",
    description: "Intelligent attendance management system using LBPH facial recognition algorithm. Reduced manual attendance marking time by 30% while improving accuracy and user experience.",
    features: ["Facial recognition", "Automated attendance", "Admin dashboard", "Report generation"],
    technologies: ["LBPH", "OpenCV", "Flask", "MySQL", "JavaScript"],
    status: "Completed",
    color: "blush",
    metrics: {
      timeReduction: "30%",
      users: "500+",
      accuracy: "92%"
    }
  }];
  return <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that showcase the intersection of AI, engineering, and real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => <Card key={project.title} className="card-gradient shadow-medium border-0 card-hover animate-fade-in-up group overflow-hidden" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Header */}
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={project.status === "Featured" ? "default" : "secondary"} className={`bg-${project.color} text-${project.color}-foreground`}>
                    {project.status}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-2 group-hover:text-accent transition-smooth">
                  {project.title}
                </CardTitle>
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => <div key={featureIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                        {feature}
                      </div>)}
                  </div>
                </div>

                {/* Metrics */}
                

                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Built With:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground">
                        {tech}
                      </span>)}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1 group-hover:border-accent transition-smooth">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 group-hover:border-accent transition-smooth">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="accent-gradient shadow-large border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
                <h3 className="text-xl font-bold text-accent-foreground">
                  Let's Build Together
                </h3>
              </div>
              <p className="text-accent-foreground/90 mb-6">
                Have a project in mind? I'd love to collaborate and bring innovative ideas to life using cutting-edge technology.
              </p>
              <Button size="lg" onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({
                behavior: "smooth"
              });
            }} className="bg-card text-card-foreground hover:scale-105 transition-bounce shadow-medium">
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;