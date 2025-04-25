'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="about"
      className="flex px-5 flex-col text-center mb-30"
    >
      <h1 className="md:hidden text-2xl text-left mb-6">{t('heading')}</h1>
      <p className="text-md text-start mb-4">{t('parOne')}</p>
      <p className="text-md text-start mb-4">{t('parTwo')}</p>
      <p className="text-md text-start mb-4">{t('parThree')}</p>
      <p className="text-md text-start mb-4">{t('parFour')}</p>
    </motion.section>
  );
}
