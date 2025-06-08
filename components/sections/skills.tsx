"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const technicalSkills = [
  "React",
  "Next.js",
  "Typescript",
  "Node.js",
  "Postgres",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git & GitHub",
  "RESTful APIs",
  "Redux",
  "Zustend",
  "AI Literacy",
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium shadow transition transform hover:bg-gray-200 hover:shadow-lg hover:-translate-y-0.5 duration-200 cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
