"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useInView } from 'react-intersection-observer';	
const resumePath = '/resume.pdf';


export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose dark:prose-invert mx-auto mb-8">
            <p className="text-lg mb-4">
              A passionate web developer specializing in creating modern, user-friendly, and scalable applications with the MERN stack. My expertise lies in front-end technologies like React.js, Next.js, and Tailwind CSS, enabling me to craft seamless digital experiences that blend design and functionality.
            </p>
            <p className="text-lg mb-4">
              Collaboration and problem-solving drive my approach to development. I thrive in team environments where innovative ideas come to life through collective effort. Outside of work, I enjoy keeping up with emerging technologies and experimenting with creative side projects to expand my knowledge and capabilities.
            </p>
            <p className="text-lg mb-4">
              Let&apos;s create meaningful and impactful digital solutions together!
            </p>
          </div>
          
          {/* <Button asChild>
            <a href={resume} download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button> */}

          <Button asChild>
            <a href="https://gray-brett-38.tiiny.site/" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>

        </motion.div>
      </div>
    </section>
  );
}