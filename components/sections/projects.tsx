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
    title: "Arabic Learning Management System",
    description: "Enhanced the user interface by refining UI components, adding profile management features, integrating PayPal for course subscriptions, and implementing a dynamic leaderboard system. Focused on delivering a smooth, responsive experience tailored for Arabic learners",
    image: "/images/lms-user.png",
    technologies: ["React.js", "Zustend", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/shraiyan47/Nakhlah-LanguageLearningApp",
    demo: "https://nakhlah-language-learning-app.vercel.app/",
  },
  {
    title: "E-Commerce Storefront",
    description: "Developed a fully responsive e-commerce site with dark/light mode, dynamic product display, cart management using local storage, and bKash Hosted Checkout integration for secure payments",
    image: "/images/ecommerce-storefront.png",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/rafin333/ecommerce-site-frontend",
    demo: "https://ecommerce-site-frontend-seven.vercel.app/",
  },
  {
    title: "Islamic App",
    description: "Developed a comprehensive Islamic web app featuring live prayer times, a Hijri calendar, Quran recitations, Hadith of the day, and essential Islamic tools like Qibla finder, Zakat calculator, and Tasbih counter. Integrated geolocation, dark mode, and multilingual UI with a seamless, mobile-responsive user experience",
    image: "/images/islamic-app.png",
    technologies: ["React.js", "Redux", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/shraiyan47/TrueLight/tree/rafinDev",
    demo: "https://v0-true-ligth.vercel.app/",
  },
  {
    title: "Real-Time Chat App",
    description: "Built a real-time messaging app with user authentication, live message delivery, typing indicators, and message history. Focused on responsive UI, smooth UX, and WebSocket integration for instant communication.",
    image: "/images/chat-app.jpg",
    technologies: ["React.js", "Node.js", "Tailwind CSS", "Socket.IO"],
    github: "https://github.com/rafin333",
    demo: "https://v0-true-ligth.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Designed and developed a modern, responsive personal portfolio for a client, featuring animated sections, smooth navigation, dark/light mode, and optimized performance for a professional online presence.",
    image: "/images/client-portfolio.png",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/rafin333/client-portfolio",
    demo: "https://salma-fariha-frontend-portfolio.vercel.app/",
  },
  {
    title: "LMS Admin Dashboard",
    description: "Developed and optimized the admin dashboard with role-based access control (RBAC), rich text editors for managing policies and email templates, and full CRUD operations for FAQs and user feedback. Actively contributed to bug fixing and UI improvements to enhance admin workflows",
    image: "/images/lms-admin.png",
    technologies: ["React.js", "Redux", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/shraiyan47/NakhlahSaudi",
    demo: "https://nakhlah-arabic.vercel.app/",
  },
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

                <MagicCard className="overflow-hidden flex flex-col p-6 h-full">
                  {/* Top Content */}
                  <div className="flex flex-col flex-grow">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col items-center mt-4">
                      <h3 className="text-xl font-semibold mb-2 text-center">
                        {project.title}
                      </h3>
                      <p className="line-clamp-4 text-muted-foreground mb-4 text-justify">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Buttons at the bottom */}
                  <div className="flex gap-4 justify-center mt-4">
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
                </MagicCard>








              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
