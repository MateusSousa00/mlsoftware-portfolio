'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SIZE = 512;
const OFFSET = SIZE / 2;

export default function CustomCursor() {
  const x = useMotionValue(-OFFSET);
  const y = useMotionValue(-OFFSET);
  const springX = useSpring(x, { stiffness: 250, damping: 40, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 250, damping: 40, mass: 0.6 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      x.set(e.clientX - OFFSET);
      y.set(e.clientY - OFFSET);
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-30 hidden dark:block"
    >
      <div className="h-[512px] w-[512px] rounded-full bg-primary/[0.04] blur-2xl" />
    </motion.div>
  );
}
