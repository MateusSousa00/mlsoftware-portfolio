import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <section className="max-w-4xl mx-auto py-24 px-6 space-y-16">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Full Experience</h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          Here’s a detailed look at the roles, projects, and results I’ve delivered across multiple industries and
          stacks.
        </p>
      </div>

      {/* Optional: Break into sections like "Current Role", "Past Roles", "Education", etc. */}

      <div className="space-y-8">
        <h2 className="text-xl font-semibold">Globant - Neobrain · Senior Software Engineer</h2>
        <p className="text-sm text-muted-foreground">Paris, FR · Mar 2024 – Present</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Built a €200,000 employee skill assessment platform from scratch.</li>
          <li>Created a batch system processing 10k+ users/min with multilingual sync.</li>
          <li>Led monolith-to-microservices migration; handled critical SAP HANA fixes.</li>
        </ul>
      </div>

      {/* Repeat for other companies... */}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <p>
          <strong>FIAP</strong> – Postgrad in Software Architecture (2023–2024)
        </p>
        <p>
          <strong>Mackenzie University</strong> – BEng Production Engineering (2017–2021)
        </p>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl font-medium mb-2">Like it that much? You can keep it 😉</p>
        <Link
          href="/MateusLima_Resume.pdf"
          target="_blank"
          className="inline-block px-6 py-3 rounded-md bg-primary text-white hover:bg-opacity-90 transition"
        >
          Download My Resume (PDF)
        </Link>
      </div>
    </section>
  );
}
