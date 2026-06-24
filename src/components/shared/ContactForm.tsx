'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { toast } from 'sonner';
import { trackFormSubmission } from './FacebookPixel';

interface ContactApiResponse {
  success?: boolean;
  error?: string;
}

export default function ContactForm() {
  const t = useTranslations('contactForm');

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (form.name.trim().length < 2) {
      newErrors.name = t('nameError');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = t('emailError');
    }

    if (form.message.trim().length < 30) {
      newErrors.message = t('messageError');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form })
      });

      let result: ContactApiResponse = {};
      try {
        result = await res.json();
      } catch (error) {
        console.error('Failed to parse JSON response', error);
      }

      if (res.ok) {
        toast.success(t('successMessage'));
        setForm({ name: '', email: '', message: '' });
        setErrors({});
        trackFormSubmission();
      } else {
        toast.error(result.error || t('errorMessage'));
      }
    } catch (err) {
      console.error(err);
      toast.error(t('networkErrorMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-lg border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
      hasError ? 'border-destructive focus:ring-destructive/40' : 'border-border'
    }`;

  return (
    <section id="contact" className="mx-auto max-w-xl px-6 py-16 md:py-24">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t('heading')}
        </h2>
        <p className="mt-3 text-muted-foreground">{t('subheading')}</p>
      </div>

      <form onSubmit={handleSubmit} method="POST" className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            {t('name')}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
            className={fieldClass(!!errors.name)}
          />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            {t('email')}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            className={fieldClass(!!errors.email)}
          />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            {t('message')}
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={fieldClass(!!errors.message)}
          />
          {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isLoading ? (
            <>
              <svg
                className="h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t('sending')}
            </>
          ) : (
            t('send')
          )}
        </button>
      </form>
    </section>
  );
}
