'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Fades `[data-reveal]` elements up as they scroll into view, once.
 * Elements already on screen at hydration are left alone (no flash); only those below the
 * fold are hidden and observed. Without JS everything simply stays visible.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal=""]'));
    const fold = window.innerHeight * 0.9;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-reveal', 'shown');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    for (const el of elements) {
      if (el.getBoundingClientRect().top < fold) continue;
      el.setAttribute('data-reveal', 'hidden');
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
