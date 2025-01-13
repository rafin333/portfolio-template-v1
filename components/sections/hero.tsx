"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { SparklesCore } from "../ui/sparkles";
import AnimatedGradientText from '../ui/animated-gradient-text';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 grid lg:grid-cols-1 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi,
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
              I&apos;m Mashrur Rahman Rafin
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-muted-foreground mb-6">
            <TextGenerateEffect words="Front End Developer" />
          </div>

          {/* <p className="text-lg mb-8 max-w-lg">
          </p> */}

          <div className="flex gap-4 mb-8">
            <Button size="icon" variant="outline" asChild>
              <a href="https://github.com/rafin333" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/rafin333/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="outline" asChild>
              <a href="mailto:mashrur.rahman333@gmail.com" aria-label="Send email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>

          </div>
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square rounded-full overflow-hidden max-w-md mx-auto"
        >
          {/* <Image
            src=""
            alt=""
            fill
            className="object-cover"
            priority
          /> */}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8"
      >
        <Button variant="ghost" size="icon" asChild>
          <a href="#about">
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
