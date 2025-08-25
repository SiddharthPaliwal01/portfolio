import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Wrench, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-performance";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "accent",
      skills: [
        { name: "Python", level: 90, description: "AI/ML, Backend Development" },
        { name: "Java", level: 85, description: "Object-Oriented Programming" },
        { name: "SQL", level: 80, description: "Database Management" },
        { name: "JavaScript", level: 75, description: "Frontend Development" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      color: "mint",
      skills: [
        { name: "TensorFlow", level: 88, description: "Deep Learning Models" },
        { name: "Flask", level: 85, description: "Web API Development" },
        { name: "LangChain", level: 82, description: "LLM Applications" },
        { name: "OpenCV", level: 78, description: "Computer Vision" },
        { name: "FastAPI", level: 80, description: "Modern Python APIs" },
        { name: "Scikit Learn", level: 85, description: "Machine Learning" }
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "blush",
      skills: [
        { name: "MySQL", level: 85, description: "Relational Databases" },
        { name: "MongoDB", level: 80, description: "NoSQL Databases" },
        { name: "ChromaDB", level: 75, description: "Vector Databases" },
        { name: "Pinecone", level: 70, description: "Vector Search" },
        { name: "Git/GitHub", level: 90, description: "Version Control" },
        { name: "Docker", level: 75, description: "Containerization" }
      ]
    },
    {
      title: "Design & Development",
      icon: Palette,
      color: "accent",
      skills: [
        { name: "UI/UX Design", level: 80, description: "User Experience" },
        { name: "Figma", level: 78, description: "Design Prototyping" },
        { name: "Linux", level: 85, description: "System Administration" },
        { name: "Google Colab", level: 90, description: "ML Development" },
        { name: "VS Code", level: 95, description: "Code Editor" },
        { name: "PyCharm", level: 88, description: "Python IDE" }
      ]
    }
  ];

  const { targetRef, isIntersecting } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={targetRef}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="card-gradient shadow-medium border-0 h-full group hover:shadow-large transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`p-3 rounded-full bg-${category.color} text-${category.color}-foreground`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-foreground">{skill.name}</p>
                            <p className="text-xs text-muted-foreground">{skill.description}</p>
                          </div>
                          <motion.span
                            className="text-sm font-medium text-muted-foreground"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: skillIndex * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              ease: "easeOut",
                              delay: skillIndex * 0.1 + 0.5,
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Specialty Areas */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Specialty Areas</h3>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Artificial Intelligence",
                items: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
                color: "accent"
              },
              {
                title: "System Architecture",
                items: ["Scalable APIs", "Microservices", "Database Design", "Performance Optimization"],
                color: "mint"
              },
              {
                title: "Product Development",
                items: ["User Research", "Prototyping", "Agile Development", "System Integration"],
                color: "blush"
              }
            ].map((specialty, index) => (
              <motion.div key={specialty.title} variants={itemVariants}>
                <Card className="card-gradient shadow-medium border-0 h-full group hover:shadow-large transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-${specialty.color} text-${specialty.color}-foreground flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-current"></div>
                    </motion.div>
                    <h4 className="font-bold text-foreground mb-4">{specialty.title}</h4>
                    <ul className="space-y-2">
                      {specialty.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-accent"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: itemIndex * 0.1 + 0.2, duration: 0.3 }}
                            viewport={{ once: true }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;