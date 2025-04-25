import { clsx, type ClassValue } from 'clsx';
import { Messages } from 'next-intl';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIndexedKeysFromMessages(messages: Messages | null, basePath: string): string[] {
  if (!messages) return [];

  const segments = basePath.split('.');

  let current: Messages = messages;
  for (const segment of segments) {
    if (!current || typeof current !== 'object') return [];
    current = current[segment];
  }

  if (!current || typeof current !== 'object') return [];
  return Object.keys(current);
}
