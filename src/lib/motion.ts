import type { CSSProperties } from 'react';

/**
 * Inline timing for `.enter` / `[data-reveal]` elements (see the motion system in globals.css).
 * `delay` in ms; `rise` is the travel distance in px (lead elements travel more than support).
 */
export function motion(delay: number, rise?: number): CSSProperties {
  return {
    '--delay': `${delay}ms`,
    ...(rise !== undefined && { '--rise': `${rise}px` })
  } as CSSProperties;
}

/** Non-uniform stagger for a row of siblings: gaps shrink as the group goes on. */
const STAGGER = [0, 80, 140, 180];

export function stagger(index: number): CSSProperties {
  return motion(STAGGER[Math.min(index, STAGGER.length - 1)]);
}
