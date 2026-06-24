'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const PROJECTS = [
  { id: 'engrenna', hasNote: true, hasLink: false },
  { id: 'kieh', hasNote: false, hasLink: false },
  { id: 'confiare', hasNote: false, hasLink: true },
  { id: 'sentiment', hasNote: false, hasLink: true }
] as const;

export default function Projects() {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t('heading')}
        </h2>
        <p className="mt-3 text-muted-foreground">{t('subheading')}</p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {PROJECTS.map(({ id, hasNote, hasLink }) => (
            <article key={id} className="flex flex-col bg-background p-7 md:p-8">
              <span className="mb-4 inline-flex w-fit rounded-full border border-primary/30 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                {t(`items.${id}.tag`)}
              </span>

              <h3 className="font-display text-xl font-semibold md:text-2xl">
                {t(`items.${id}.name`)}
              </h3>

              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {t(`items.${id}.description`)}
              </p>

              {hasNote && (
                <p className="mt-4 text-sm italic text-muted-foreground/80">
                  {t(`items.${id}.note`)}
                </p>
              )}

              {hasLink && (
                <Link
                  href={t(`items.${id}.link`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition hover:gap-3"
                >
                  {t(`items.${id}.linkLabel`)}
                  <FaArrowUpRightFromSquare className="h-3 w-3" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
