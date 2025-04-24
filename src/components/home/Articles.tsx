'use client';
import { motion } from 'framer-motion';

export default function Articles() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Latest Articles</h2>
      <div className="space-y-8">
        <a
          href="https://dev.to/your-article-link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-start gap-6 p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
        >
          <p>some image goes here</p>
          <div>
            <h3 className="text-lg font-semibold mb-2">Why I’m Building a Scalable WhatsApp SaaS with AI</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              A peek into the architecture, reasoning, and tech stack behind my latest SaaS venture...
            </p>
          </div>
        </a>
        {/* Add more article cards below manually or later via RSS */}
      </div>
    </motion.section>
  );
}
