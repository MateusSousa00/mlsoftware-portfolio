'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

const SIZE = 512;

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();

  // Motion values drive the transform directly, so cursor moves never trigger
  // a React re-render (the source of the flicker in the old setState version).
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);

  const springConfig = { stiffness: 350, damping: 40, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
    };
    window.addEventListener('pointermove', updateMouse, { passive: true });
    return () => window.removeEventListener('pointermove', updateMouse);
  }, [x, y]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{ x: smoothX, y: smoothY, width: SIZE, height: SIZE }}
    >
      <div className="w-full h-full rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
    </motion.div>
  );
}
