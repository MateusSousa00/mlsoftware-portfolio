'use client';

import { useParams } from 'next/navigation';
import { Locale } from 'next-intl';
import { useEffect, useRef, useState, useTransition } from 'react';
import { FaChevronDown, FaCheck } from 'react-icons/fa';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

type Item = { value: string; label: string };

type Props = {
  defaultValue: string;
  label: string;
  items: Item[];
};

export default function LocaleSwitcherSelect({ defaultValue, label, items }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = items.find((i) => i.value === defaultValue) ?? items[0];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  function onSelect(nextLocale: string) {
    setOpen(false);
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale as Locale }
      );
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={isPending}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'inline-flex items-center gap-2 rounded-md border border-border bg-popover px-3 py-2 text-sm text-foreground',
          'transition-colors hover:bg-muted cursor-pointer',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          isPending && 'opacity-50'
        )}
      >
        <span>{current.label}</span>
        <FaChevronDown className={cn('h-3 w-3 text-muted-foreground transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute bottom-full right-0 z-50 mb-2 min-w-full overflow-hidden rounded-md border border-border bg-popover p-1 shadow-lg"
        >
          {items.map((item) => {
            const active = item.value === current.value;
            return (
              <li key={item.value} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => onSelect(item.value)}
                  className={cn(
                    'flex w-full items-center justify-between gap-3 rounded-sm px-3 py-2 text-left text-sm whitespace-nowrap',
                    'transition-colors hover:bg-muted cursor-pointer',
                    active && 'font-medium'
                  )}
                >
                  <span>{item.label}</span>
                  {active && <FaCheck className="h-3 w-3 text-primary" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
