'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { toast } from 'sonner';

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

    if (form.name.trim().length < 3) {
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

    setIsLoading(true); // Start loading

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
      } else {
        toast.error(result.error || t('errorMessage'));
      }
    } catch (err) {
      console.error(err);
      toast.error(t('networkErrorMessage'));
    } finally {
      setIsLoading(false); // End loading no matter what
    }
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto py-24 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('heading')}</h2>
      <form onSubmit={handleSubmit} method="POST" className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            {t('name')}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t('name')}
            required
            className={`w-full border px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 
              dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 text-gray-300'
              }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            {t('email')}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t('email')}
            required
            className={`w-full border px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 
              dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 text-gray-300'
              }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            {t('message')}
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t('message')}
            className={`w-full border px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 
              dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 ${
                errors.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500 text-gray-300'
              }`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 rounded-md bg-primary hover:cursor-pointer text-white hover:bg-opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
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
