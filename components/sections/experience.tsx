"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Freelance Frontend Developer",
    company: "Online Marketplaces",
    duration: "2023 - 2024",
    description:
      "Worked on React-based front-end development projects. Developed user interfaces for various online marketplaces, ensuring responsive design and optimal user experience.",
    technologies: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Junior Software Engineer",
    company: "Fintech Hub Ltd",
    duration: "Sep 2024 - Present",
    description:
      "Contribute to coding, testing, and troubleshooting web applications, with a focus on front-end development using React, Next.js, and Tailwind CSS. Collaborate closely with team members to learn and apply the latest web development technologies.",
    technologies: ["React", "Next.js", "Tailwind CSS", "RESTful APIs", "Redux", "Zustend", "Node.js"],
  },
];

export function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-16 text-center">
            Professional Experience
          </h2>

          <div className="relative flex flex-col items-center">
            {/* Central animated timeline line (tree trunk) */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 w-1 bg-primary origin-top"
            />

            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`mb-16 w-full md:w-1/2 ${isLeft ? "md:self-start pr-8" : "md:self-end pl-8"
                    }`}
                >
                  <div className="relative">
                    {/* Card */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                      <h3 className="text-xl text-gray-600 font-bold">{experience.title}</h3>
                      <p className="text-sm text-gray-600 font-medium mb-2">
                        {experience.company} • {experience.duration}
                      </p>
                      <p className="text-gray-700 mb-3">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
