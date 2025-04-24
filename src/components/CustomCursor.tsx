'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{ x: position.x - 256, y: position.y - 256 }}
      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
    >
      <div className="w-[512px] h-[512px] rounded-full bg-background/30 dark:bg-primary/3 blur-2xl" />
    </motion.div>
  );
}
