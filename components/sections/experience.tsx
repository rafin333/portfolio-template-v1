"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Fintech Hub Ltd",
    duration: "Dec 2024 - Present",
    description:
      "Contributing to the development, testing, and deployment of web-based applications using modern technologies. Collaborating with cross-functional teams to design scalable and user-friendly solutions.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Intern",
    company: "Fintech Hub Ltd",
    duration: "Sep 2024 - Nov 2024",
    description:
      "Gained hands-on experience in web development. Assisted in various projects, learning modern tools and contributing to innovative solutions.",
    technologies: ["React", "JavaScript", "Git", "Tailwind CSS"],
  },
  {
    title: "MERN Stack Trainee",
    company: "Creative IT",
    duration: "Nov 2024 - Present",
    description:
      "Pursuing a diploma course in MERN Stack Development to enhance full-stack skills and build scalable, robust applications.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Professional Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                    <p className="text-sm text-gray-600 font-medium mb-4">
                      {experience.company} • {experience.duration}
                    </p>
                    <p className="text-gray-700 mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
