"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { MagicCard } from '../ui/magic-card';


const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React.js and Vite",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["React.js", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/rafin333/portfolio-project.git",
    demo: "https://portfolio-project-rho-two.vercel.app/",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Learning Management System",
    description: "A comprehensive LMS for course creation, tracking, and reporting",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",  
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    demo: "https://demo.com",
  }
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MagicCard className="overflow-hidden flex flex-col items-center justify-between p-6">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col items-center mt-4">
                    <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-center">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 justify-center">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
