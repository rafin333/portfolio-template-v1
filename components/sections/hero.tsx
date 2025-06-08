"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown, Code2, Database, Server, Layers } from 'lucide-react';
import Image from 'next/image';

import { TextGenerateEffect } from "../ui/text-generate-effect";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse">
          <Code2 size={80} className="text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-1000">
          <Database size={60} className="text-white" />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-500">
          <Server size={70} className="text-white" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-1500">
          <Layers size={50} className="text-white" />
        </div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi,
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
              I&apos;m Rafin
            </span>
            👋
          </h1>

          <div className="text-2xl md:text-3xl text-muted-foreground mb-6">
            <TextGenerateEffect words="a React-loving front-end developer who enjoys turning ideas into slick, user-friendly web apps." />
          </div>

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
            <a
              href="mailto:mashrur.rahman333@gmail.com"
              aria-label="Send email"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>





          </div>

          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-primary to-purple-600 p-[6px] shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
              <Image
                src="/images/rafin_pic.jpg"
                alt="Mashrur Rahman Rafin"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>


        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8 z-10"
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
