'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="about"
      className="flex px-5 flex-col text-center mb-30"
    >
      <h1 className="md:hidden text-2xl text-left mb-6">About</h1>
      <p className="text-md text-start mb-4">
        I’m a full-stack software engineer specialized in web development, backend architecture, and AI integration. I
        build scalable, high-performance applications using TypeScript, Node.js, Python, Docker, and Kubernetes focusing
        on clean APIs, robust CI/CD, and maintainable systems.
      </p>
      <p className="text-md text-start mb-4">
        Right now, I’m developing an AI-powered communication tool to simplify daily interactions using natural language
        processing and intelligent automation. It’s a bold step toward making tech more human—and just the beginning.
      </p>
      <p className="text-md text-start mb-4">
        I’ve led systems handling 10,000+ ops per minute, refactored legacy stacks from Laravel to Kotlin, and
        integrated SAP HANA with real-time data. I have also built blockchain tools and scaled teams through mentoring
        and architecture leadership.
      </p>
      <p className="text-md text-start mb-4">
        Off the clock, I’m usually playing bass, singing, or dropping pun-level bugs into conversations. Coffee fuels
        the code, and yes, dark mode is a lifestyle.
      </p>
    </motion.section>
  );
}
