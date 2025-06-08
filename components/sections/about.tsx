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
              By day, I&apos;m a Junior Software Engineer at Fintech Hub Ltd, building cool stuff with React, Next.js, and Tailwind CSS. From e-commerce sites to real-time chat apps and even an Islamic app packed with features, I&apos;ve had a blast crafting interfaces that feel good and work great.
            </p>
            <p className="text-lg mb-4">
              I&apos;m all about clean code, smooth UX, and learning something new every day. If it involves pixels, performance, or pushing the web forward, count me in.
            </p>
          </div>

          <Button asChild>
            <a href={resumePath} download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>

        </motion.div>
      </div>
    </section>
  );
}