import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, User } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating intelligent systems that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={cardVariants}>
              <Card className="card-gradient shadow-medium border-0 group hover:shadow-large transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="p-3 rounded-full bg-accent text-accent-foreground"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <User className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">Who I Am</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm an aspiring AI engineer and developer who builds intelligent systems that solve real problems. 
                    From creating a real-time GenAI assistant to working on GAN-based image generation during my DRDO internship, 
                    I blend deep learning, system performance, and clean code into high-impact solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="card-gradient shadow-medium border-0 group hover:shadow-large transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="p-3 rounded-full bg-mint text-mint-foreground"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>
                  <div className="space-y-6">
                    {/* University Education */}
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">Integrated M.Tech in Artificial Intelligence</p>
                      <p className="text-muted-foreground">Vellore Institute of Technology (Bhopal, MP)</p>
                      <p className="text-sm text-muted-foreground">Aug 2021 – Aug 2026</p>
                    </div>
                    
                    {/* High School Education */}
                    <div className="border-t border-border pt-4 space-y-4">
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Class XII (Intermediate)</p>
                        <p className="text-muted-foreground">St. Anne's Senior Secondary School (CBSE)</p>
                        <p className="text-sm text-muted-foreground">Jodhpur • July 2020 – May 2021</p>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Class X (Matriculation)</p>
                        <p className="text-muted-foreground">St. Anne's Senior Secondary School (CBSE)</p>
                        <p className="text-sm text-muted-foreground">Jodhpur • April 2018 – May 2019</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="card-gradient shadow-medium border-0 group hover:shadow-large transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="p-3 rounded-full bg-blush text-blush-foreground"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Heart className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">What Drives Me</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    My passions lie in AI research, problem-solving, and designing scalable tools that enhance user experience. 
                    I love exploring the intersection of technology and creativity, whether it's through UI/UX design, 
                    graphic design, or strategic thinking in chess.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Core Competencies</h3>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "System Architecture",
                "Problem Solving",
                "Product Thinking",
                "UI/UX Design",
                "Full Stack Development"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="card-gradient shadow-soft border-0 transition-all duration-300 hover:shadow-medium">
                    <CardContent className="p-4 text-center">
                      <p className="font-medium text-sm text-foreground">{skill}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="accent-gradient shadow-medium border-0 mt-8">
                <CardContent className="p-6 text-center">
                  <p className="text-accent-foreground font-medium">
                    "I believe in building technology that not just works, but makes a meaningful impact on people's lives."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;