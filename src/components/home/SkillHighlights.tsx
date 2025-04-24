'use client';
import { motion } from 'framer-motion';

export default function SkillHighlights() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid md:grid-cols-3 gap-10 text-left">
        <div>
          <h3 className="text-xl font-semibold mb-2">🧠 AI & Automation</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            I build intelligent systems using GPT, LangChain, and Python pipelines to automate and optimize real-world
            tasks.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">⚙️ Scalable Backends</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            FastAPI, NestJS, PostgreSQL, Docker — I design backend systems that are clean, modular, and
            production-ready.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🎨 Frontend & UX</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Next.js, Tailwind, Framer Motion — from micro-interactions to page transitions, I bring ideas to life on
            screen.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
