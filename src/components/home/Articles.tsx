'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface Article {
  id: number;
  title: string;
  url: string;
  description: string;
  published_at: string;
  cover_image: string | null;
}

export default function DevToArticles() {
  const [articles, setArticles] = useState<Article[]>([]);

  const t = useTranslations('articles');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('https://dev.to/api/articles?username=mateussousa00');
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error('Failed to fetch articles:', err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="space-y-6 px-5 py-10">
      <h2 className="text-2xl font-bold">{t('heading')}</h2>
      {articles.slice(0, 3).map((article) => (
        <Link key={article.id} href={article.url} target="_blank">
          <div className="border border-muted rounded-2xl p-4 shadow-sm hover:shadow-md transition hover:bg-muted/30 mb-4">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-sm text-muted-foreground mb-1">{new Date(article.published_at).toDateString()}</p>
            <p className="text-base">{article.description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
