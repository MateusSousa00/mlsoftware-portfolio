'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto px-4 py-20"
      id="about"
    >
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        I’m Mateus Lima, a full-stack software engineer passionate about scalable systems, clean code, and
        human-centered design.
      </p>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        From building €200k-worth enterprise solutions to launching AI-powered SaaS products, my work blends logic,
        creativity, and automation.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300">
        I also love music, dev communities, and constantly learning new things — especially where tech meets real
        people.
      </p>
    </motion.section>
  );
}
