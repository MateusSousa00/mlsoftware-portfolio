'use client';

export default function ContactForm() {
  return (
    <section id="contact" className="max-w-3xl mx-auto py-24 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Write something nice, I dare you.</h2>
      <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full border px-4 py-2 rounded-md bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full border px-4 py-2 rounded-md bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="w-full border px-4 py-2 rounded-md bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
          />
        </div>
        <button type="submit" className="px-6 py-3 rounded-md bg-primary text-white hover:bg-opacity-90 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
