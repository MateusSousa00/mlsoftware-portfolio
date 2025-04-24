'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center min-h-screen text-center"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I&apos;m Mateus Lima</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4">
        Software Engineer. Builder of scalable systems and clean UIs.
      </p>
      <blockquote className="italic text-neutral-500 dark:text-neutral-400 mb-2">
        &quot;Technology is only as powerful as the people it empowers.&quot;
      </blockquote>
      <blockquote className="italic text-neutral-500 dark:text-neutral-400">
        &quot;If you can dream it, you can ship it.&quot;
      </blockquote>
    </motion.section>
  );
}
